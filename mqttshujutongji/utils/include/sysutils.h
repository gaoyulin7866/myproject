#pragma once

#include <stdio.h>
/* 
 app level utility functions
*/

/*
 create a daemon process
*/
void daemonize();

/*
 execute a system command
*/
int cmd_system(const char *command, char *buf, int bufSize);

