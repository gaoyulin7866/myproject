#include "httpserver.h"
#include <stdlib.h>
#include <stdio.h>
#include <errno.h>
#include <string.h>
#include <pthread.h>
#include <unistd.h>
#include "common.h"
#include "logger.h"
#include "httpd.h"
#include "httprequestcallback.h"

#define SERVER "127.0.0.1"
#define PORT   7788

static httpd *g_webServer = NULL;

static void httpd_thread(void *args);
int HttpServer_run()
{
    Log_debug("HttpServer_run");

    request *r = NULL;
    void **params = NULL;
    pthread_t   tid = 0;
    int rc = -1;
    int exitCode = EXIT_SUCCESS;

    if ((g_webServer = httpdCreate(SERVER, PORT)) == NULL) {
        Log_fatal("Could not create web server, %d %s", ERRNO_ERRORSTR);
        return FAILURE;
    }

    Log_info("Setup http request callbacks");
    httpdAddCContent(g_webServer, "/mqtt/send", "0", 0, NULL, http_callback_mqtt_send);
    httpdAddCContent(g_webServer, "/mqtt/send", "1", 0, NULL, http_callback_mqtt_send_cache_if_no_connection);
    httpdAddC404Content(g_webServer, http_callback_404);

    Log_info("Waiting for connections");
    while(1) {
        r = httpdGetConnection(g_webServer, NULL);

        /* We can't convert this to a switch because there might be
         * values that are not -1, 0 or 1. */
        if (g_webServer->lastError == -1) {
            /* Interrupted system call */
            continue; /* restart loop */
        }
        else if (g_webServer->lastError < -1) {
            /*
             * FIXME
             * An error occurred - should we abort?
             * reboot the device ?
             */
            Log_error("FATAL: httpdGetConnection returned unexpected value %d, exiting.", g_webServer->lastError);
            exitCode = EXIT_FAILURE;
        }
        else if (r != NULL) {
            /*
             * We got a connection
             *
             * We should create another thread
             */
            Log_info("Received connection from %s, spawning worker thread", r->clientAddr);

            params = malloc(2 * sizeof(void *));
            *params = g_webServer;
            *(params + 1) = r;

            rc = pthread_create(&tid, NULL, (void *)httpd_thread, (void *)params);
            if (rc != SUCCESS) {
                Log_fatal("Failed to create a new thread (httpd) - exiting, %d %s", ERRNO_ERRORSTR);
                exitCode = EXIT_FAILURE;
            }
            pthread_detach(tid);
        }
        else {
            /* g_webServer->lastError should be 2 */
            /* XXX We failed an ACL.... No handling because
             * we don't set any... */
        }
    }

    return exitCode;
}

static void httpd_thread(void *args)
{
    Log_debug("httpd_thread");

    void    **params = (void **)args;
    httpd   *webserver = *params;
    request *r = *(params + 1);
    
    free(params); /* XXX We must release this ourselves. */

    if (httpdReadRequest(webserver, r) == 0) {
        /*
         * We read the request fine
         */
        Log_info("Processing request from %s", r->clientAddr);
        Log_info("Calling httpdProcessRequest() for %s", r->clientAddr);
        httpdProcessRequest(webserver, r);
        Log_info("Returned from httpdProcessRequest() for %s", r->clientAddr);
    }
    else {
        Log_warn("No valid request received from %s", r->clientAddr);
    }

    Log_info("Closing connection with %s", r->clientAddr);
    httpdEndRequest(r);
}
