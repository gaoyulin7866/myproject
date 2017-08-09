#include "devicestatus.h"
#include <unistd.h>
#include <string.h>
#include <stdlib.h>
#include <limits.h>
#include <memory.h>
#include "common.h"
#include "logger.h"
#include "sysutils.h"
#include "stringutils.h"

static char g_deviceSN[32] = {0};

int get_process_status(pid_t pid, process_status *ps)
{
    Log_debug("get_process_status %d", pid);

    char cmdBuffer[64];
    char resultBuffer[64];

    memset(cmdBuffer, 0, sizeof(cmdBuffer));
    memset(resultBuffer, 0, sizeof(resultBuffer));

    sprintf(cmdBuffer, "ps -p %d -o \"%%cpu,%%mem,rss\" | grep -v MEM", pid);

    Log_info("%s", cmdBuffer);

    cmd_system(cmdBuffer, resultBuffer, sizeof(resultBuffer));

    if (strlen(resultBuffer) > 0) {
        Log_info("process '%d' status: %s", pid,resultBuffer);
        sscanf(resultBuffer,"%f %f %d", &ps->cpuPercent, &ps->memPercent, &ps->memUsage);
    }
    else {
        Log_error("get process '%d' status failed", pid);
        return FAILURE;
    }

    return SUCCESS;
}

static int _get_device_sn(char *sn);
char *get_device_sn()
{
    if (string_is_empty(g_deviceSN)) {
        _get_device_sn(g_deviceSN);
    }
    return g_deviceSN;
}


static int _get_device_sn(char *sn)
{
    Log_debug("get_device_sn");

    char resultBuffer[64];
    memset(resultBuffer, 0, sizeof(resultBuffer));

    cmd_system("sys_info -s", resultBuffer, sizeof(resultBuffer));

    Log_info("result: %s", resultBuffer);

    if (strlen(resultBuffer) > 0) {
        strcpy(sn, resultBuffer);
        return SUCCESS;
    }

    return FAILURE;
}
