#pragma once

#include "json.h"

typedef struct {
    char *from;
    char *topic;
    char *payload;
} mqtt_send_content;

int parse_mqtt_send_request_body(char *body, mqtt_send_content *mqttSendContent, json_object **outJsonObject, char* errorMessage);