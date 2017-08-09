#pragma once
#include "common.h"

typedef int *do_job_fun(int);

typedef struct 
{
    char *name;
    int interval;
    /*BOOL runInTheadpool;*/
    do_job_fun *doJob;
} schedule_job;

/*
 setup timer
*/
int setup_schedule_timer();

/*
 free timer
*/
int destroy_schedule_timer();