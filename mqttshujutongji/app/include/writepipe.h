#pragma once

/*
 write buffer to named pipe, open it if the pipe if not open
*/
int write_pipe_buffer(char *buffer);

/*
 close write pipe when app exit
*/
int close_write_pipe();