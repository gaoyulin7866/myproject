#include "mqttclientwrapper.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <time.h>
#include "logger.h"
#include "msgdef.h"
#include "devicestatus.h"
#include "MQTTAsync.h"

#define ADDRESS           "ext.stag.emqtt.iwangfan.cn:1883"
#define CLIENTIDPREFIX    "MQTTC-"
#define USERNAME          "123"
#define PASSWORD          "123"
#define QOS               1
#define TIMEOUT           10000L
#define KEEPALIVEINTERVAL 20
#define CLEANSESSION      1

struct MQTTClientStatus
{
    MQTTAsync client;
    BOOL connected;
    BOOL subscribed;
    MQTTClientWrapper_messageReceivedCallback *messageReceivedCallback;
    MQTTClientWrapper_connectedCallback *connectedCallback;

} mqttClientStatus =  { NULL, FALSE, FALSE, NULL, NULL };


/*************************************************************************************
 MQTT client callbacks
**************************************************************************************/

int MQTTClientWrapper_subscribe();
static void on_connect(void* context, MQTTAsync_successData* response)
{
    Log_debug("on_connect");
    Log_info("Connect successful");
    
    mqttClientStatus.connected = TRUE;

    if (mqttClientStatus.connectedCallback) {
        mqttClientStatus.connectedCallback();
    }

    MQTTClientWrapper_subscribe();
}

static void on_connect_failure(void* context, MQTTAsync_failureData* response)
{
    Log_debug("on_connect_failure");

    Log_error("Connect failed, error: %d message: %s", response ? response->code : -1, (response && response->message) ? response->message : "");

    mqttClientStatus.connected = FALSE;
}

static void on_disconnect(void* context, MQTTAsync_successData* response)
{
    Log_debug("on_disconnect");

    mqttClientStatus.connected = FALSE;
}

static void on_disconnect_failure(void* context, MQTTAsync_failureData* response)
{
    Log_debug("on_disconnect_failure");
    Log_error("Disconnect failed, error: %d", response ? response->code : -1);
}

static void fill_connect_opts(MQTTAsync_connectOptions *conn_opts);

int MQTTClientWrapper_connect();
static void on_connection_lost(void *context, char *cause)
{
    Log_debug("on_connection_lost");

    mqttClientStatus.connected = FALSE;

    Log_warn("MQTT connection lost, cause: %s", cause);
    Log_info("Reconnecting...");

    MQTTClientWrapper_connect();
}

static void on_message_send(void* context, MQTTAsync_successData* response)
{
    Log_debug("on_message_send");
}

static void on_messasge_send_failure(void* context,  MQTTAsync_failureData* response)
{
    Log_error("on_messasge_send_failure");
}

void on_subscribe(void* context, MQTTAsync_successData* response)
{
    Log_debug("on_subscribe");

    mqttClientStatus.subscribed = TRUE;
}

void on_subscribe_failure(void* context, MQTTAsync_failureData* response)
{
    Log_debug("on_subscribe_failure, rc %d", response ? response->code : 0);
    Log_error("MQTT subscribe failure: rc %d", response ? response->code : 0)

    mqttClientStatus.subscribed = FALSE;
}

int message_arrived(void *context, char *topicName, int topicLen, MQTTAsync_message *message)
{
    Log_debug("message_arrived");
    Log_info("topic: %s", topicName && topicLen ? topicName : "");
    Log_info("message: %s", message && message->payload && message->payloadlen ? (char*)message->payload : "");

    if (mqttClientStatus.messageReceivedCallback
        && topicName && topicLen > 0
        && message && message->payload && message->payloadlen) {
        mqttClientStatus.messageReceivedCallback(topicName, message->payload, message->payloadlen);
    }

    MQTTAsync_freeMessage(&message);
    MQTTAsync_free(topicName);

    return TRUE;
}



/*************************************************************************************
 Helpers
**************************************************************************************/
static void fill_connect_opts(MQTTAsync_connectOptions *conn_opts) 
{
    conn_opts->username = USERNAME;
    conn_opts->password = PASSWORD;
    conn_opts->keepAliveInterval = KEEPALIVEINTERVAL;
    conn_opts->cleansession = CLEANSESSION;
    conn_opts->onSuccess = on_connect;
    conn_opts->onFailure = on_connect_failure;
    conn_opts->context = mqttClientStatus.client;
}

/*************************************************************************************
 Publics
**************************************************************************************/

/*
 Init mqtt client
*/
static char *get_client_id();
int MQTTClientWrapper_init()
{
    Log_debug("MQTTClientWrapper_init");

    int retCode = MQTTASYNC_FAILURE;

    if (mqttClientStatus.client) {
        Log_debug("Free (disconnected) MQTT client");
        MQTTAsync_destroy(&mqttClientStatus.client);
    }

    retCode = MQTTAsync_create(&mqttClientStatus.client, ADDRESS, get_client_id(), MQTTCLIENT_PERSISTENCE_NONE, NULL);

    if (retCode != MQTTASYNC_SUCCESS) {
        Log_error("MQTTAsync_create failed, error: %d", retCode);
        return retCode;
    }

    Log_info("Init MQTT client successfully");

    MQTTAsync_setCallbacks(mqttClientStatus.client, NULL, on_connection_lost, message_arrived, NULL);

    return SUCCESS;
}

/*
 connect mqtt client
*/
int MQTTClientWrapper_connect() 
{
    Log_debug("MQTTClientWrapper_connect");

    int retCode = MQTTASYNC_FAILURE;

    if (!mqttClientStatus.client) {
        Log_error("Client has not been initilaized, MQTTClientWrapper_init should be called");
        return FAILURE;
    }

    MQTTAsync_connectOptions conn_opts = MQTTAsync_connectOptions_initializer;
    fill_connect_opts(&conn_opts);


    if ((retCode = MQTTAsync_connect(mqttClientStatus.client, &conn_opts)) == MQTTASYNC_SUCCESS) {
        Log_info("Start connecting...");
        return SUCCESS;
    }
    else {
        Log_error("Failed to start connect, return code %d", retCode);
        mqttClientStatus.connected = FALSE;
        return FAILURE;
    }
}

/*
 check connect status
*/
BOOL MQTTClientWrapper_isConnected()
{
    Log_debug("MQTTClientWrapper_isConnected");
    
    if (!mqttClientStatus.client) {
        Log_info("Connected: %d", 0);
        return FALSE;
    }

    BOOL connected = MQTTAsync_isConnected(mqttClientStatus.client);
    Log_info("Connected: %d", connected);

    return connected;
}

/*
 check subscrible status
*/
BOOL MQTTClientWrapper_isSubscribed()
{
    return mqttClientStatus.subscribed;
}

/*
 send mqtt message
*/
int MQTTClientWrapper_sendMessage(char *topic, char *message) {
    Log_debug("MQTTClientWrapper_sendMessage topic: %s message: %s", topic, message);

    MQTTAsync client = (MQTTAsync)mqttClientStatus.client;
    MQTTAsync_responseOptions opts = MQTTAsync_responseOptions_initializer;
    MQTTAsync_message pubmsg = MQTTAsync_message_initializer;
    int rc;
    
    opts.onSuccess = on_message_send;
    opts.onFailure = on_messasge_send_failure;
    opts.context = client;

    pubmsg.payload = message;
    pubmsg.payloadlen = strlen(message);
    pubmsg.qos = QOS;
    pubmsg.retained = 0;

    if ((rc = MQTTAsync_sendMessage(client, topic, &pubmsg, &opts)) != MQTTASYNC_SUCCESS)
    {
        Log_error("Failed to start send message, return code %d", rc);
        return rc;
    }

    return SUCCESS;
}


/*
 set arrived message callback
*/
void MQTTClientWrapper_setMessageReceivedCallback(MQTTClientWrapper_messageReceivedCallback *callback)
{
    Log_debug("MQTTClientWrapper_setMessageReceivedCallback");

    mqttClientStatus.messageReceivedCallback = callback;
}

/*
 set MQTT client connected callback function
*/
void MQTTClientWrapper_setConnectedCallback(MQTTClientWrapper_connectedCallback callback)
{
    Log_debug("MQTTClientWrapper_setConnectedCallback");

    mqttClientStatus.connectedCallback = callback;
}

/*
 subscrible
*/
int MQTTClientWrapper_subscribe()
{
    Log_debug("MQTTClientWrapper_subscribe");

    MQTTAsync client = (MQTTAsync)mqttClientStatus.client;
    MQTTAsync_responseOptions opts = MQTTAsync_responseOptions_initializer;
    int rc = FAILURE;

    opts.onSuccess = on_subscribe;
    opts.onFailure = on_subscribe_failure;
    opts.context = client;


    if ((rc = MQTTAsync_subscribe(client, MQTT_TOPIC_COMMAND, QOS, &opts)) != MQTTASYNC_SUCCESS)
    {
        Log_error("Failed to start subscribe, return code %d", rc);
        return FAILURE;
    }

    return SUCCESS;
}

/*
 disconnect mqtt client
*/
int MQTTClientWrapper_disconnect()
{
    Log_debug("MQTTClientWrapper_disconnect");

    MQTTAsync_disconnectOptions opts = MQTTAsync_disconnectOptions_initializer;
    opts.onSuccess = on_disconnect;
    opts.onFailure = on_disconnect_failure;

    int retCode = MQTTASYNC_FAILURE;

    if (MQTTClientWrapper_isConnected()) {
        retCode = MQTTAsync_disconnect(mqttClientStatus.client, &opts);
        if (retCode == MQTTASYNC_SUCCESS) {
            Log_info("Start disconnect...");
            return SUCCESS;
        }
        else {
            Log_error("Disconnect error: %d",retCode);
            return FAILURE;
        }
    }
    else {
        Log_warn("MQTT client is not connected");
        return SUCCESS;
    }
}


/*
 free mqtt client
*/
void MQTTClientWrapper_deinit()
{
    Log_debug("MQTTClientWrapper_deinit");

    if (mqttClientStatus.client) {
        Log_debug("Free MQTT client");

        MQTTAsync_destroy(&mqttClientStatus.client);
        mqttClientStatus.client = NULL;
    }
    else {
        Log_warn("MQTT client object is NULL, maybe it has been freed or has not initlized");
    }
}

/*
 error msssage from error code
*/
static char g_mqttErrorMessage[4] = { 0 };
char *MQTTClientWrapper_errorDescription(int mqttErrorCode)
{
    if (mqttErrorCode == MQTTASYNC_SUCCESS) {
        return "SUCCESS";
    }
    else if (mqttErrorCode == MQTTASYNC_FAILURE) {
        return "FAILURE";
    }
    else if (mqttErrorCode == MQTTASYNC_PERSISTENCE_ERROR) {
        return "PERSISTENCE_ERROR";
    }
    else if (mqttErrorCode == MQTTASYNC_DISCONNECTED) {
        return "DISCONNECTED";
    }
    else if (mqttErrorCode == MQTTASYNC_MAX_MESSAGES_INFLIGHT) {
        return "MAX_MESSAGES_INFLIGHT";
    }
    else if (mqttErrorCode == MQTTASYNC_BAD_UTF8_STRING) {
        return "BAD_UTF8_STRING";
    }
    else if (mqttErrorCode == MQTTASYNC_NULL_PARAMETER) {
        return "NULL_PARAMETER";
    }
    else if (mqttErrorCode == MQTTASYNC_BAD_STRUCTURE) {
        return "BAD_STRUCTURE";
    }
    else if (mqttErrorCode == MQTTASYNC_BAD_QOS) {
        return "BAD_QOS";
    }
    else if (mqttErrorCode == MQTTASYNC_NO_MORE_MSGIDS) {
        return "NO_MORE_MSGIDS";
    }
    else if (mqttErrorCode == MQTTASYNC_OPERATION_INCOMPLETE) {
        return "OPERATION_INCOMPLETE";
    }
    else if (mqttErrorCode == MQTTASYNC_MAX_BUFFERED_MESSAGES) {
        return "MAX_BUFFERED_MESSAGES";
    }

    sprintf("%d",mqttErrorCode);
    return mqttErrorCode;
}

/*************************************************************************************
 Helpers
**************************************************************************************/
static char g_client_id[48] = { 0 };
static char *get_client_id()
{
    if (string_is_empty(g_client_id)) {
        char *sn = get_device_sn();
        /* generate a random client id */
        if (string_is_empty(sn)) {
            srand((int) time(0));
            sprintf(g_client_id, "%s%d", CLIENTIDPREFIX, rand());
        }
        /* use device sn as client id */
        else {
            strcpy(g_client_id, CLIENTIDPREFIX);
            strcat(g_client_id, sn);
        }

        Log_info("MQTT client id: %s", g_client_id);
    }
    return g_client_id;
}

