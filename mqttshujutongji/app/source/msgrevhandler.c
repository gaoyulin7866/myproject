#include "msgrevhandler.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <memory.h>
#include <unistd.h>
#include "stringutils.h"
#include "logger.h"
#include "writepipe.h"

BOOL msg_received_handler(char *topic, char *payload, int payloadLen)
{
    Log_debug("msg_received_hanlder topic: %s payload: %s payloadLen: %d", topic ? topic : "", payload ? payload : "", payloadLen);

    if (payload && strlen(payload) > 0 && payloadLen > 0) {
        char *localPayload = (char*)malloc(payloadLen + 1);
        strncpy(localPayload, payload, payloadLen);
        *(localPayload + payloadLen) = 0;

        if (string_is_empty(localPayload)) {
            Log_warn("payload is empty");
        }
        else {
            write_pipe_buffer(localPayload);
        }
        free(localPayload);
    }
    else {
        Log_warn("payload is empty, nothing to to");
    }

    return TRUE;
}