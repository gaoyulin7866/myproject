#include "schedulejob.h"
#include <stdlib.h>
#include <stdio.h>
#include <errno.h>
#include <unistd.h>
#include <string.h>
#include <limits.h>
#include <memory.h>
#include <time.h>
#include <signal.h>
#include "common.h"
#include "msgdef.h"
#include "logger.h"
#include "mqttclientwrapper.h"
#include "devicestatus.h"
#include "offlinemsgcache.h"

#define CLOCKID CLOCK_REALTIME
#define BASE_SCHEDULE_INTERVAL 10  /* in seconds */

static timer_t g_scheduleTimerId  = 0;
static int g_totalSeconds = 0;

static int check_mqtt_connection(int);
static int show_process_status(int);

static schedule_job schedule_job_list[] = 
{
    { (char*)"chkconn",                 10,        check_mqtt_connection    },
    { NULL,                             0,         NULL                     }   /* END tag */
    
};

static void sig_alarm_handler(int signo)
{
    Log_debug("schedule_run");

    g_totalSeconds += BASE_SCHEDULE_INTERVAL;

    Log_info("Total seconds escaped: %d", g_totalSeconds);

    schedule_job *job = &schedule_job_list[0];
    while (job->name) {
        if (job->interval > 0 && (g_totalSeconds % job->interval) == 0) {
            job->doJob(g_totalSeconds);
        }
        job++;
    }

    if (g_totalSeconds >= INT_MAX - BASE_SCHEDULE_INTERVAL) {   /* avoid overflow */
        g_totalSeconds = 0;
    }
}

/*
 setup timer
*/
int setup_schedule_timer()
{
    Log_debug("setup_schedule_timer");

    struct sigevent evp;
    struct itimerspec its;
    int rc = FAILURE;

    memset((void *)&evp, 0, sizeof(evp));

    evp.sigev_notify = SIGEV_THREAD;
    evp.sigev_notify_function = &sig_alarm_handler;
    evp.sigev_signo = SIGALRM;
    evp.sigev_value.sival_ptr = &g_scheduleTimerId;
    rc = timer_create(CLOCKID, &evp, &g_scheduleTimerId);
    if (rc != SUCCESS) {
        Log_fatal("create timer failed, %d %s", ERRNO_ERRORSTR);
        return rc;
    }

    /*
    struct sigevent sev;
    struct itimerspec its;
    long long freq_nanosecs;
    sigset_t mask;
    struct sigaction sa;

    sa.sa_flags = SA_SIGINFO;
    sa.sa_sigaction = handler;
    sigemptyset(&sa.sa_mask);
    sigaction(SIG, &sa, NULL);

    sev.sigev_notify = SIGEV_SIGNAL;
    sev.sigev_signo = SIG;
    sev.sigev_value.sival_ptr = &g_scheduleTimerId;

    timer_create(CLOCKID, &sev, &g_scheduleTimerId);
    */
    
    /*
     start the timer
    */
    its.it_value.tv_sec = BASE_SCHEDULE_INTERVAL;
    its.it_value.tv_nsec = 0;
    its.it_interval.tv_sec = its.it_value.tv_sec;
    its.it_interval.tv_nsec = its.it_value.tv_nsec;

    rc = timer_settime(g_scheduleTimerId, 0, &its, NULL);
    if (rc != SUCCESS) {
        Log_fatal("create timer failed, %d %s", ERRNO_ERRORSTR);
        return rc;
    }

    return SUCCESS;
}

/*
 free timer
*/
int destroy_schedule_timer()
{
    Log_debug("destroy_schedule_timer");

    int rc = SUCCESS;

    if (g_scheduleTimerId > 0) {
        rc = timer_delete(g_scheduleTimerId);
        if (rc != SUCCESS) {
            Log_error("delete timer failed, %d %s", ERRNO_ERRORSTR);
        }
    }
    return rc;
}

static int check_mqtt_connection(int totalSeconds)
{
    Log_debug("check_mqtt_connection %d", totalSeconds);

    if (MQTTClientWrapper_isConnected()) {
        Log_info("mqtt is connected")

        if (MQTTClientWrapper_isSubscribed()) {
            Log_info("topic '%s' is subscribled", MQTT_TOPIC_COMMAND);
        }
        else {
            Log_warn("topic '%s' is not subscribled, subscribe...", MQTT_TOPIC_COMMAND);
            MQTTClientWrapper_subscribe();
        }
    }
    else {
        Log_warn("MQTT client is not connected. Reconnecting...");
        MQTTClientWrapper_connect();
    }

    return 0;
}
