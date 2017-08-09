#include "offlinemsgcache.h"
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <memory.h>
#include <limits.h>  
#include <unistd.h>
#include <dirent.h>
#include <errno.h>
#include <string.h>
#include "list.h"
#include "common.h"
#include "logger.h"
#include "filepathutils.h"
#include "stringutils.h"
#include "mqttclientwrapper.h"
#include "mqttsendreqbodyparser.h"

#define CACHE_FILE_SUFFIX ".cache"
#define LIST_NODE_FREE(node) \
    if (node) { \
        freeVal(node->val);\
        LIST_FREE(node); \
    }
#define LIST_NODE_VALUE(node) ((node && node->val) ? *((long*)node->val) : 0)

static list_t *g_list = NULL;
static int g_cacheCapacity = 10;

static pthread_mutex_t g_list_mutex = PTHREAD_MUTEX_INITIALIZER;
static pthread_mutex_t g_async_sending_mutex = PTHREAD_MUTEX_INITIALIZER;

static pthread_t g_asyncSendThreadId = 0;
static BOOL g_isAsyncSending = FALSE;

/*************************************************************************************
 Publics
**************************************************************************************/
static int init_list();
int offline_messages_count();
static char *cache_path();
static void freeVal(void *val);
static int remove_first_message();
static int cache_offline_message(long timestamp, char *message);
static char *cache_root_path();

int enqueue_offline_message(long timestamp, char *message)
{
    Log_debug("enqueue_offline_message timestamp: %ld message: %s", timestamp, safe_string(message))

    if (!g_list) {
        init_list();
    }

    int count = offline_messages_count();

    if (count >= g_cacheCapacity) {
        remove_first_message();
    }

    int rc = cache_offline_message(timestamp,message);
    if (rc != SUCCESS) {
        Log_warn("add message cache failed");
    }

    return rc;
}

void set_cache_capacity(int capacity)
{
    g_cacheCapacity = capacity;
}

/*
 returns cache capacity
*/
int get_cache_capacity()
{
    return g_cacheCapacity;
}

int offline_messages_count()
{
    int count = 0;

    pthread_mutex_lock(&g_list_mutex);
    count = g_list ? g_list->len : 0;
    pthread_mutex_unlock(&g_list_mutex);

    return count;
}

static void *send_messages_thread_fun(void* data);
int asyn_send_offline_messages()
{
    Log_debug("asyn_send_offline_messages");

    int rc = FAILURE;

    if (offline_messages_count() == 0) {
        Log_info("No offline messages");
        return SUCCESS;
    }

    if (g_isAsyncSending) {
        Log_info("Sending thread is running... return");
        return 0;
    }

    rc = pthread_create(&g_asyncSendThreadId, NULL, send_messages_thread_fun, 0);

    if (rc < 0) {
        Log_error("Failed to create message send thread, error %d %s",ERRNO_ERRORSTR);
        return rc;
    }

    return SUCCESS;
}

/*
 load cache from disk
*/

static int filter_offline_cache_file(const struct dirent *d) {
    char filePath[_POSIX_PATH_MAX];
    sprintf(filePath, "%s/%s",cache_root_path(), d->d_name);
    if (!is_file(filePath)) {
        return 0;
    }
    char suffix[_POSIX_PATH_MAX];
    get_file_suffix(d->d_name,suffix);
    return string_equals(suffix, CACHE_FILE_SUFFIX, TRUE);
}

static offline_cache_file_compare(const struct dirent **d1, const struct dirent **d2)
{
    char fileBaseName1[_POSIX_PATH_MAX];
    char fileBaseName2[_POSIX_PATH_MAX];

    get_file_base_name((*d1)->d_name, fileBaseName1);
    get_file_base_name((*d2)->d_name, fileBaseName2);

    long timestamp1 = atol(fileBaseName1);
    long timestamp2 = atol(fileBaseName2);

    if (timestamp1 > timestamp2) {
        return 1;
    }
    else if (timestamp1 < timestamp2) {
        return -1;
    }
    return 0;
}

int load_offline_messages()
{
    Log_debug("load_offline_messages from path: %s", cache_root_path());

    struct dirent **namelist = NULL;
    int fileCount = scandir(cache_root_path(), &namelist, filter_offline_cache_file, offline_cache_file_compare);//返回namelist中的数据结构数目
    if (fileCount < 0) {
        Log_info("Nothing loaded");
        return 0;
    }

    if (!g_list) {
        init_list();
    }

    int addedCount = 0;
    int i = 0;

    for(; i < fileCount; i++) {
        Log_info("Cache File %d: %s", i + 1, namelist[i]->d_name);

        char fileBaseName[_POSIX_PATH_MAX];
        get_file_base_name(namelist[i]->d_name, fileBaseName);

        if (!string_is_empty(fileBaseName)) {
            long timestamp = atol(fileBaseName);
            if (timestamp > 0) {
                long *val = (long*)malloc(sizeof(long));
                *val = timestamp;
                list_node_t *node = list_node_new(val);

                Log_info("adding %s to queue", namelist[i]->d_name);
                pthread_mutex_lock(&g_list_mutex);
                list_rpush(g_list, node);
                pthread_mutex_unlock(&g_list_mutex);

                addedCount++;
            }
        }

        free(namelist[i]);
    }

    Log_info("%d offline caches", addedCount);

    free(namelist);
}

/*************************************************************************************
 Privates
**************************************************************************************/

static void freeVal(void *val)
{
    long *timestamp = NULL;
    if (val) {
        timestamp = (long*)val;
        free(timestamp);
    }
}

static int init_list()
{
    Log_info("init_list");

    if (g_list) {
        Log_info("list has been already initialized");
        return SUCCESS;
    }

    pthread_mutex_lock(&g_list_mutex);
    g_list = list_new();
    g_list->free = freeVal;
    pthread_mutex_unlock(&g_list_mutex);

    return SUCCESS;
}

static char g_cacheRootPath[_POSIX_PATH_MAX] = { 0 };
static char *cache_root_path() {
    if (string_is_empty(g_cacheRootPath)) {
        sprintf(g_cacheRootPath, "%s/%s/%s", home_path(),APP_DATA_PATH, MQTT_OFFLINE_MSG_DIR);
        if (!path_exists(g_cacheRootPath)) {
            if (mkdirp(g_cacheRootPath, 0700) < 0) {
                memset(g_cacheRootPath, 0, sizeof(g_cacheRootPath));
                Log_error("mkdir %s failed", g_cacheRootPath);
            }
        }
    }
    return g_cacheRootPath;
}

static void cache_file_path(long timestamp, char *buffer)
{
    sprintf(buffer,"%s/%ld%s", cache_root_path(),timestamp,CACHE_FILE_SUFFIX);
}

static int remove_first_message()
{
    Log_debug("remove_first_message total: %d",offline_messages_count());

    list_node_t *node = NULL;

    pthread_mutex_lock(&g_list_mutex);
    node = list_lpop(g_list);
    pthread_mutex_unlock(&g_list_mutex);

    if (node) {
        long timestamp = LIST_NODE_VALUE(node);
        char filePath[_POSIX_PATH_MAX] = { 0 };
        cache_file_path(timestamp, filePath);
        if (file_exists(filePath)) {
            unlink(filePath);
            Log_info("cache file has been %s removed successfully", filePath);
        }
        else {
            Log_warn("cache file: '%s' doesn't exist.", filePath);
        }
        LIST_NODE_FREE(node);

        Log_info("cache has been removed from memory successfully");

    }
    else {
        Log_warn("No node was removed, because list_lpop returns NULL");
    }


    return SUCCESS;
}

static int cache_offline_message(long timestamp, char *message) 
{
    Log_debug("cache_offline_message timestamp: %ld message: %s", timestamp, safe_string(message));

    if (timestamp <= 0) {
        Log_warn("timestamp %ld is invalid, do nothing", timestamp);
        return FAILURE;
    }

    if (string_is_empty(message)) {
        Log_warn("message is empty, do nothing");
        return FAILURE;
    }

    char filePath[_POSIX_PATH_MAX] = { 0 };
    size_t writeSize = 0;

    cache_file_path(timestamp, filePath);

    if (string_is_empty(filePath)) {
        Log_error("file path is empty, do nothing");
        return FAILURE;
    }

    Log_info("Save message to file '%s' ...", filePath);

    writeSize = write_file_string(message, sizeof(char), strlen(message), filePath, "w");
    if (writeSize < 0) {
        Log_error("Write file failed, error %d %s", ERRNO_ERRORSTR);
    }

    else if (writeSize == 0) {
        Log_error("Nothing was written to file");
        return FAILURE;
    }

    long *val = (long*)malloc(sizeof(long));
    *val = timestamp;
    list_node_t *node = list_node_new(val);

    Log_info("adding to memory cache...");

    pthread_mutex_lock(&g_list_mutex);
    list_rpush(g_list, node);
    pthread_mutex_unlock(&g_list_mutex);

    Log_notice("Offline message count: %d", offline_messages_count());

    return SUCCESS;
}

static void *send_messages_thread_fun(void* data) {
    Log_debug("send_messages_thread_fun");

    if (g_isAsyncSending) {
        return 0;
    }

    pthread_mutex_lock(&g_async_sending_mutex);
    g_isAsyncSending = TRUE;
    pthread_mutex_unlock(&g_async_sending_mutex);

    int count = offline_messages_count();
    list_node_t *node = NULL;
    json_object *jobj = NULL;
    mqtt_send_content content;
    char errorMessage[128];
    int rc = -1;

    while(count > 0) {
        if (!MQTTClientWrapper_isConnected()) {
            Log_warn("MQTT connection is lost while async sending offline messages, STOP");
            break;
        }

        pthread_mutex_lock(&g_list_mutex);
        node = list_lpop(g_list);
        pthread_mutex_unlock(&g_list_mutex);

        if (node) {
            long timestamp = LIST_NODE_VALUE(node);
            char filePath[_POSIX_PATH_MAX] = { 0 };
            cache_file_path(timestamp, filePath);

            if (file_exists(filePath)) {
                char *buffer = NULL;
                size_t readSize = read_file_string(&buffer,filePath);
                if (readSize > 0) {
                    Log_debug("Read cache file: %s", buffer);

                    memset(&content, 0, sizeof(content));
                    rc = parse_mqtt_send_request_body(buffer, &content, &jobj, errorMessage);
                    if (rc == SUCCESS) {
                        int sendRetCode = MQTTClientWrapper_sendMessage(content.topic, content.payload);

                        if (sendRetCode == SUCCESS) {
                            Log_info("Send cache MQTT message successfully");
                            unlink(filePath);
                        }
                        else {
                            Log_error("Send Cache MQTT message failed, error: %s", MQTTClientWrapper_errorDescription(sendRetCode));

                            /*
                             Put back to offline messaeg queue if not full, otherwise discard.
                            */
                            BOOL isFull = FALSE;
                            pthread_mutex_lock(&g_list_mutex);
                            int len = g_list ? g_list->len : 0;
                            if (len < g_cacheCapacity) {
                                list_lpush(g_list, node);
                                node = NULL; /* avoid to be freed */
                            }
                            else {
                                isFull = TRUE;
                            }
                            pthread_mutex_unlock(&g_list_mutex);

                            Log_info("%s", isFull ? "Offline message queue is full, discard send failed message" : "Put back to offline messsage queue");
                        }
                    }
                    else {
                        Log_error("parse_mqtt_send_request_body failed, %d", rc);
                    }

                    if (jobj) {
                        json_object_put(jobj); /* free the object */
                    }

                    free(buffer); /* free buffer allocated by read_file_string */
                }
                else {
                    Log_error("Read file failed, read size: %d", readSize);
                }
            }
            else {
                Log_warn("Cache file '%s' doesn't exist", filePath);
            }

            LIST_NODE_FREE(node);
        }

        count = offline_messages_count();
    }


    pthread_mutex_lock(&g_async_sending_mutex);
    g_isAsyncSending = FALSE;
    pthread_mutex_unlock(&g_async_sending_mutex);

    return 0;
}