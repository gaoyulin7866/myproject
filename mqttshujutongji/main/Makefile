EXE       = mma-mqttcproxy.exe
LIB       = 

INC_DIRS  = $(UTILS_DIR)/include \
            $(ZLOG_DIR)/include \
            $(MQTTC_DIR)/include \
            $(HTTPD_DIR)/include \
            $(JSONC_DIR)/include \
            $(APP_DIR)/include \
            $(ZLOG_DIR)/include

LINK_LIBS += utils zlog json-c mqtt-c httpd app
LINK_LIBS += pthread rt

include $(PRJ_DIR)/make/make.rule