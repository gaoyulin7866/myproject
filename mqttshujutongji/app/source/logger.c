#include "logger.h"
#include <limits.h>
#include <string.h>
#include <unistd.h> 
#include "filepathutils.h"
#include "zlog.h"
#include "common.h"

#define LOG_CONGFILE_FILE "zlog.conf"
#define LOG_CATETORY      "MQTTCPROXY"

/*
 Init zlog
*/
int  Log_init()
{
    char cfgPath[_POSIX_PATH_MAX];//_POSIX_PATH_MAX定义在系统文件limits.h中 值为256
    int rc = -1;

    memset(cfgPath, 0 ,sizeof(cfgPath));//初始化内存

    local_path(cfgPath);//"/proc/进程识别码/exe"字符串
    strcat(cfgPath,"/");//将两个字符串连接起来中间无空格
    strcat(cfgPath, (char*)(LOG_CONGFILE_FILE));//将两个字符串连接起来中间无空格

    if (access(cfgPath, F_OK) != 0) {//R_OK文件是否可读;W_OK文件是否可写入;F_OK 文件是否存在   返回值是0的时候，表示真，而返回-1的时候，表示假。
        printf("log config file doesn't exit\n");
        return FAILURE;
    }

    rc = dzlog_init(cfgPath,(char*)(LOG_CATETORY));
    if (rc < 0) {
        printf("zlog initialzed failed %d\n",rc);
        return rc;
    }

    Log_info("--- zlog initialzed successully ---");

    return SUCCESS;
}

/*
 Deinit zlog
*/
void Log_deinit() 
{
    zlog_fini();
}