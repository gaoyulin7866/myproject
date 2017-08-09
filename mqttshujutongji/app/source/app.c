#include <stdlib.h>
#include <stdio.h>
#include <errno.h>
#include <unistd.h>
#include <string.h>
#include <signal.h>
#include <sys/types.h>
#include <execinfo.h>
#include <limits.h> 
#include "sysutils.h"
#include "filepathutils.h"
#include "stringutils.h"
#include "logger.h"
#include "common.h"
#include "mqttclientwrapper.h"
#include "schedulejob.h"
#include "msgrevhandler.h"
#include "devicestatus.h"
#include "httpserver.h"
#include "writepipe.h"
#include "offlinemsgcache.h"

// #ifndef TRUE
//     #define TRUE  1
// #endif

// #ifndef FALSE   
//     #define FALSE 0
// #endif

// #ifndef NULL
//     #define NULL 0
// #endif

// #ifndef SUCCESS
//     #define SUCCESS 0
// #endif

// #ifndef FAILURE
//     #define FAILURE -1
// #endif
static void usage()//定义内部函数
{
    printf("MQTT Client\n");
    printf("Usage: mqttc , where options are:\n");
    printf("  --help This message\n");
    printf("  --test Run testing\n");
    printf("  --nodaemon Run the app as a none deamon app\n");

    exit(EXIT_SUCCESS);//正常退出
}

static void run_test() {
    printf("TODO: run automation testing...\n");
    exit(EXIT_SUCCESS);
}

struct Args {//定义结构体
    BOOL isDaemon;
    BOOL isTest;
} args = { TRUE, FALSE };

static void parse_args(int argc, char **argv)
{
    int count = 1;

    while (count < argc) {
        if (string_equals(argv[count], "--help", TRUE)) {//string_equals(argv[count], "--help", TRUE) 以不区分大小写的方式比较两个字符串是否相等  返回的是true and false
            usage();//输出提示信息
        }
        else if (string_equals(argv[count], "--test", TRUE)) {
            run_test();//输出提示信息并正常退出
        }
        else if (string_equals(argv[count], "--nodaemon", TRUE)) {//这一步必须走
            args.isDaemon = 0;//将结构体中的isDaemon赋值为0   以后做判断用
        }
        count++;
    }
}

static void segv_handler(int sig)
{
    Log_error("segv_handler %d", sig);

    void *array[10];//指针数组
    size_t size = 0;

    // get void*'s for all entries on the stack
    size = backtrace(array, 10);//返回数组array中元素(指针元素)个数

    // print out all the frames to stderr
    fprintf(stderr, "Error: signal %d:\n", sig);//打印到屏幕上
    backtrace_symbols_fd(array, size, STDERR_FILENO);

    exit(EXIT_FAILURE);//发生错误后退出
}

static void on_mqtt_client_connected() 
{
    Log_debug("on_mqtt_client_connected");

    if (offline_messages_count() > 0) {
        asyn_send_offline_messages();
    }
}

int run_app(int argc, char **argv) {
    int exitCode = EXIT_SUCCESS;
    int rc = -1;

    parse_args(argc,argv);//根据命令行输入信息 做出提示信息或者赋值操作

    if (args.isDaemon) {//根据上一步的赋值做判断
        printf("Run app in daemon mode\n");
        daemonize();//创建双守护进程;Linux的大多数服务器(Web服务器httpd)就是用守护进程实现
    }
    else {
        printf("Run app in nodaemon mode\n");//必须运行--nodaemon
    }

    Log_init();

    /*
     Crash hanlder
    */
    signal(SIGSEGV, segv_handler);//监听程序是否接收到退出命令，或者中断命令等处理第一个参数 常量（宏） 第二个是调用的函数

    /*
     Load offline mqtt message from cache
    */
    Log_info("Loading offline messages...");
    load_offline_messages();

    Log_info("Init MQTT client...");
    rc = MQTTClientWrapper_init();
    MQTTClientWrapper_setMessageReceivedCallback(msg_received_handler);
    MQTTClientWrapper_setConnectedCallback(on_mqtt_client_connected);
    if (rc == SUCCESS) {
        MQTTClientWrapper_connect();
    }
    else {
        Log_error("Init MQTT client failed, error: %d", rc);
    }

    if (setup_schedule_timer() < 0) {
        goto EXIT;
    }

    rc = HttpServer_run();
    if (rc < 0) {
        Log_fatal("HttpServer_run failed, error : %d", rc);
        goto EXIT;
    }

    EXIT:
    MQTTClientWrapper_deinit();
    destroy_schedule_timer();
    close_write_pipe();

    Log_info("Exiting process with code %d ...", exitCode);
    Log_deinit();

    return exitCode;
}