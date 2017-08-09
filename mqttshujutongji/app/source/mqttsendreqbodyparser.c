#include "mqttsendreqbodyparser.h"
#include <stdlib.h>
#include <stdio.h>
#include <errno.h>
#include <time.h>
#include "common.h"
#include "msgdef.h"
#include "logger.h"
#include "stringutils.h"
#include "devicestatus.h"

#define JSON_NODE_FROM_MODULE            "from"
#define JSON_NODE_MQTT_TOPIC             "topic"
#define JSON_NODE_MQTT_PAYLOAD           "payload"

int parse_mqtt_send_request_body(char *body, mqtt_send_content *mqttSendContent, json_object **outJsonObject, char* errorMessage)
{
    Log_debug("parse_mqtt_send_request_body %s", body);

    time_t timestamp = 0;
    json_object *jobj = json_tokener_parse(body);
    *outJsonObject = jobj;

    if (!jobj) {
        strcpy(errorMessage, "Not a valid json format");
        Log_error("%s", errorMessage);
        return FAILURE;
    }

    json_object *jsubobj = NULL;
    if (json_object_object_get_ex(jobj, JSON_NODE_FROM_MODULE, &jsubobj)) {
        if (json_object_is_type(jsubobj, json_type_string)) {
            mqttSendContent->from = (char*)json_object_get_string(jsubobj);
            if (string_is_empty(mqttSendContent->topic)) {
                Log_warn("from module is empty");
            }
        }
        else {
            /* ignore the error as it is not important */
            Log_warn("node '%s' is not a string", JSON_NODE_FROM_MODULE);
        }
    }
    else {
        Log_info("no json node '%s'", JSON_NODE_FROM_MODULE);
    }

    if (json_object_object_get_ex(jobj, JSON_NODE_MQTT_TOPIC, &jsubobj)) {
        if (json_object_is_type(jsubobj, json_type_string)) {
            mqttSendContent->topic = (char*)json_object_get_string(jsubobj);
            if (string_is_empty(mqttSendContent->topic)) {
                strcpy(errorMessage,"topic is empty");
                Log_error("%s", errorMessage);
                return FAILURE;
            }
        }
        else {
            sprintf(errorMessage,"node '%s' is not a string", JSON_NODE_MQTT_TOPIC);
            Log_error("%s", errorMessage);
            return FAILURE;
        }
    }
    else {
        sprintf(errorMessage,"no json node '%s'", JSON_NODE_MQTT_TOPIC);
        Log_error("%s", errorMessage);
        return FAILURE;
    }

    if (json_object_object_get_ex(jobj, JSON_NODE_MQTT_PAYLOAD, &jsubobj)) {
        if (json_object_is_type(jsubobj, json_type_string)) {
            mqttSendContent->payload = (char*)json_object_get_string(jsubobj);
            if (string_is_empty(mqttSendContent->payload)) {
                strcpy(errorMessage, "payload is empty");
                Log_error("%s", errorMessage);
                return FAILURE;
            }
        }
        else if (json_object_is_type(jsubobj, json_type_object)) {
            Log_info("payload is in JSON format");
            /*
             add time and device sn to payload object if they are not present
            */
            if (!json_object_object_get_ex(jsubobj, JSON_NODE_SN_KEY, NULL)) {
                Log_info("add 'sn' field");
                json_object_object_add(jsubobj, JSON_NODE_SN_KEY, json_object_new_string(get_device_sn()));
            }

            if (!json_object_object_get_ex(jsubobj, JSON_NODE_TIME_KEY, NULL)) {
                Log_info("add 'time' field");
                timestamp = time(NULL);
                json_object_object_add(jsubobj, JSON_NODE_TIME_KEY, json_object_new_int64(timestamp));
            }
            mqttSendContent->payload = (char*)json_object_to_json_string_ext(jsubobj, JSON_C_TO_STRING_PLAIN);
        }
        else {
            sprintf(errorMessage, "node '%s' is not a string or JSON object", JSON_NODE_MQTT_PAYLOAD);
            Log_error("%s", errorMessage);
            return FAILURE;
        }
    }
    else {
        sprintf(errorMessage,"no json node '%s'", JSON_NODE_MQTT_PAYLOAD);
        Log_error("%s", errorMessage);
        return FAILURE;
    }

    return SUCCESS;
}