#include "httprequestcallback.h"
#include <stdlib.h>
#include <stdio.h>
#include <errno.h>
#include <time.h>
#include <math.h>
#include "common.h"
#include "logger.h"
#include "json.h"
#include "msgdef.h"
#include "stringutils.h"
#include "devicestatus.h"
#include "mqttclientwrapper.h"
#include "offlinemsgcache.h"
#include "mqttsendreqbodyparser.h"

static inline void http_send_response(request *r, char *body)
{
    char    header[64];
    memset(header, 0, sizeof(header));

    httpdSetContentType(r, "application/json\r\n");

    snprintf(header, sizeof header - 1,
             "Content-Length: %ld\r\n", strlen(body));
    httpdAddHeader(r, header);

    httpdPrintf(r, "%s", body);
}

static void _http_callback_mqtt_send(httpd *webserver, request *r, BOOL cacheIfSendFailed);
void http_callback_mqtt_send(httpd *webserver, request *r)
{
    Log_debug("http_callback_mqtt_send request body: %s", string_is_empty(r->request.body) ? "" : r->request.body);

    _http_callback_mqtt_send(webserver, r, FALSE);
}

void http_callback_mqtt_send_cache_if_no_connection(httpd *webserver, request *r)
{
    Log_debug("http_callback_mqtt_send_cache_if_no_connection request body: %s", string_is_empty(r->request.body) ? "" : r->request.body);

     _http_callback_mqtt_send(webserver, r, TRUE);
}

void http_callback_404(httpd *webserver, request *r)
{
    Log_debug("http_callback_404");
    http_send_response(r, "\"status\":\"error\",\"message\":\"request not supported, please check url\"");
}

static void _http_callback_mqtt_send(httpd *webserver, request *r, BOOL cacheIfSendFailed)
{
    Log_debug("_http_callback_mqtt_send request body: %s cacheIfSendFailed: %d", string_is_empty(r->request.body) ? "" : r->request.body, cacheIfSendFailed);

    mqtt_send_content content;
    json_object *jobj = NULL;
    long timestamp_nsec = 0;
    struct timespec spec;
    char errorMessage[128];
    char responseMessage[128];
    int rc = FAILURE;
    memset(&content, 0, sizeof(content));

    /* When no network connection, MQTTClientWrapper_isConnected is very slow!!!
    if (!cacheIfSendFailed && !MQTTClientWrapper_isConnected()) {
        MQTTClientWrapper_connect();
        http_send_response(r, "\"status\":\"error\",\"message\":\"MQTT connection is lost\"");
        return;
    }
    */

    rc = parse_mqtt_send_request_body(r->request.body, &content, &jobj, errorMessage);
    if (rc == SUCCESS) {
        clock_gettime(CLOCK_REALTIME, &spec);
        timestamp_nsec = spec.tv_sec * NANOSECONDS_PER_SECOND + spec.tv_nsec;

        Log_info("Sending mqtt message topic: %s, payload: %s ...", content.topic, content.payload);
        int sendRetCode = MQTTClientWrapper_sendMessage(content.topic, content.payload);
        if (sendRetCode == SUCCESS) {
            Log_info("Send MQTT message successfully");
            http_send_response(r, "\"status\":\"ok\"");
        }
        else {
            Log_error("Send MQTT message failed, error %d",sendRetCode);

            if (cacheIfSendFailed) {
                Log_info("Cache offline message");
                enqueue_offline_message(timestamp_nsec, (char*)json_object_to_json_string_ext(jobj, JSON_C_TO_STRING_PLAIN)); 
            }
            sprintf(responseMessage, "\"status\":\"error\",\"message\":\"Send MQTT message failed, error: %s. %s\"",
                MQTTClientWrapper_errorDescription(sendRetCode), cacheIfSendFailed ? "Message is cached, try send later." : "");

            http_send_response(r, responseMessage);
        }
    }
    else {
        sprintf(responseMessage, "\"status\":\"error\",\"message\":\"%s\"", errorMessage);
        http_send_response(r, responseMessage);
    }

    if (jobj) {
         json_object_put(jobj); /* free the object */
    }
}