#include "writepipe.h"
#include <unistd.h>  
#include <stdlib.h>  
#include <fcntl.h>  
#include <limits.h>  
#include <sys/types.h>  
#include <sys/stat.h>  
#include <stdio.h>  
#include <errno.h>
#include <string.h>  
#include "common.h"
#include "logger.h"
#include "filepathutils.h"

#define FIFO_FILE_NAME   "mqtt_received_fifo"
#define OPEN_MODE        (O_WRONLY | O_NONBLOCK)
#define BUFFER_SIZE      PIPE_BUF

static int g_pipe_fd = 0;

static void get_fifo_file_path(char *buffer);
static int open_write_pipe()
{
    Log_info("init_write_pipe");

    char fifoFilePath[_POSIX_PATH_MAX] = { 0 };
    int rc = FAILURE; 
  
    get_fifo_file_path(fifoFilePath);
    Log_info("FIFO file path: %s", fifoFilePath);

    if(!file_exists(fifoFilePath))  
    {   
        rc = mkfifo(fifoFilePath, 0777);  
        if(rc < 0)  
        {  
            Log_error("Could not create FIFO %s, error: %d %s", fifoFilePath, ERRNO_ERRORSTR);  
            return rc;
        }  
    }  
  
    Log_info("Process %d opening FIFO (O_WRONLY | O_NONBLOCK) %s", getpid(), fifoFilePath);  
    g_pipe_fd = open(fifoFilePath, OPEN_MODE);  
    if (g_pipe_fd < 0) {
        Log_error("Open FIFO failed, error: %d %s", ERRNO_ERRORSTR);
        return g_pipe_fd;
    }

    return SUCCESS;
}

int write_pipe_buffer(char *buffer)
{
    Log_info("write_pipe_buffer %s", buffer);

    if (g_pipe_fd <= 0) {
        Log_notice("FIFO is not open, open FIFO...");
        if (open_write_pipe() < 0) {
            return FAILURE;
        }
    }

    Log_info("Writing buffer [%s] to FIFO...", buffer);

    int size = write(g_pipe_fd, buffer, strlen(buffer));

    Log_info("Write FIFO finished, size: %d", size);

    return size;
}

int close_write_pipe()
{
    Log_info("close_write_pipe");

    if (g_pipe_fd > 0) {
        close(g_pipe_fd);
    }
    else {
        Log_info("FIFO is not open")
    }
    return SUCCESS;
}

static void get_fifo_file_path(char *buffer)
{
    char appDataPath[_POSIX_PATH_MAX] = { 0 };
    sprintf(appDataPath, "%s/%s", home_path(),APP_DATA_PATH);
    if (!path_exists(appDataPath)) {
        if (mkdirp(appDataPath, 0700) < 0) {
            Log_error("mkdir mma failed");
        }
    }

    strcpy(buffer, appDataPath);
    strcat(buffer, "/");
    strcat(buffer, FIFO_FILE_NAME);
}