#pragma once

/*
 app level definitions
*/

#ifndef BOOL
    typedef int BOOL;
#endif

#ifndef TRUE
    #define TRUE  1
#endif

#ifndef FALSE   
    #define FALSE 0
#endif

#ifndef NULL
    #define NULL 0
#endif

#ifndef SUCCESS
    #define SUCCESS 0
#endif

#ifndef FAILURE
    #define FAILURE -1
#endif

#define ERRNO_ERRORSTR errno,strerror(errno)
#define NANOSECONDS_PER_SECOND (1000 * 1000 * 1000)

#define APP_DATA_PATH        "mma"
#define MQTT_OFFLINE_MSG_DIR "mqtt-offline-msgs"
