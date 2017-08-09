#pragma once
#include <stdlib.h>
#include <stdio.h>
#include "httpd.h"

void http_callback_mqtt_send(httpd *webserver, request *r);

void http_callback_mqtt_send_cache_if_no_connection(httpd *webserver, request *r);

void http_callback_404(httpd *webserver, request *r);