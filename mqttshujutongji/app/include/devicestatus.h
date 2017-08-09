#pragma once

#include <unistd.h>

typedef struct 
{
    float cpuPercent;
    float memPercent;
    int   memUsage;
} process_status;

int get_process_status(pid_t pid, process_status *ps);
char *get_device_sn();