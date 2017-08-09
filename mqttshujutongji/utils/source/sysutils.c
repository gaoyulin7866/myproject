#include "sysutils.h"
#include <unistd.h>
#include <errno.h>
#include <string.h>
#include <stdlib.h>
#include <limits.h>
#include <fcntl.h>

#ifdef _WIN32
#define PATH_SEPARATOR   '\\'
#else
#define PATH_SEPARATOR   '/'
#endif

/*************************************************************************************
 Publics
**************************************************************************************/
/*
 create a daemon process
*/
void daemonize()//双守护进程
{
    /* Our process ID and Session ID */
    pid_t pid, sid;//pid_t 其实就是定义int 类型(系统文件中定义的)  pid是fork()函数返回的值

    /* Fork off the parent process */
    pid = fork();//fork()函数会复制一个与原来进程几乎完全相同的进程；在父进程中，fork返回新创建子进程的进程ID；在子进程中，fork返回0；如果出现错误，fork返回一个负值；
    if (pid < 0) {
        exit(EXIT_FAILURE);
    }
    /* If we got a good PID, then
       we can exit the parent process. */
    if (pid > 0) {
        exit(EXIT_SUCCESS);
    }

    /* Open any logs here */

    /* Create a new SID for the child process */
    sid = setsid();//setsid()成功返回一个进程ID,失败返回-1；使子进程成为组长
    //之前parent和child运行在同一个session里，而且parent是session头，
    //所以作为session头的parent如果exit结束执行的话，那么会话session组中的所有进程将都被杀死；
    //所以执行setsid()之后，parent将重新获得一个新的会话session组id，child将仍持有原有的会话session组，
    //这时parent退出之后，将不会影响到child了。
    if (sid < 0) {
         /* Log the failure */
        exit(EXIT_FAILURE);
    }
        

    pid = fork();

    if (pid < 0)   {
        exit(EXIT_FAILURE);
    }

    if (pid > 0)
    {
        exit(EXIT_SUCCESS);
    }

    /* Change the current working directory */
    if ((chdir("/")) < 0) {//chdir()用来将当前的工作目录改变成以参数‘/’ 所指的目录(根目录).成功则返回0, 失败返回-1, errno 为错误代码.
            /* Log the failure */
       exit(EXIT_FAILURE);
    }

    /* Close out the standard file descriptors */
    close(STDIN_FILENO);//调用dup2()函数之前先将文件关闭
    close(STDOUT_FILENO);
    close(STDERR_FILENO);

    /* Redirect to empty */
    int fd = open("/dev/null", O_RDWR);//O_RDWR 读、写打开。
    //dup(),dup2()复制文件描述符(一个非负整数)；dup(a)一个参数，dup2(a,b)两个参数；dup2()调用成功返回新的文件描述符(第二个参数)，调用失败返回-1.
    dup2(fd,STDIN_FILENO);
    dup2(fd,STDOUT_FILENO);
    dup2(fd,STDERR_FILENO);
}



/*
 execute a system command
*/
int cmd_system(const char *command, char *buf, int bufSize)
{
    char buf_ps[1024];
    int rc = -1;
    FILE *fpRead = 0;

    memset(buf_ps, 0, sizeof(buf_ps));

    fpRead = popen(command, "r");

    memset(buf_ps, 0, sizeof(buf_ps));
    memset(buf, 0, bufSize);

    while(fgets(buf_ps, sizeof(buf_ps), fpRead) != NULL) {
        if(strlen(buf) + strlen(buf_ps) > bufSize - 1) {
            break;
        }
        strcat(buf, buf_ps);
    }

    if(fpRead != NULL) {
        rc = pclose(fpRead);
    }

    int len = strlen(buf);
    if('\n' == buf[len - 1]) {
        buf[len - 1] = 0;
    }

    if (rc < 0) {
        return rc;
    }

    return WEXITSTATUS(rc);
}

