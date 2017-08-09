#pragma once

#include <stdio.h>
#include <sys/types.h>

/*
 get local executable path
*/
void local_path(char *path);

/*
 get home path
*/
char *home_path();

/*
 * Recursively `mkdir(path, mode)`
 */

int mkdirp(const char *, mode_t );

/*
 check if path exits
*/
int path_exists(char *path);

/*
 check if file exits
*/
int file_exists(char *path);

/*
 return 1 if path is a file, 0 for directory
*/
int is_file(char *path);

/*
 return 1 if path is a directory, 0 for file
*/
int is_dir(char *path);


/*
 get file suffix
*/
void get_file_suffix(char *path, char *suffixBuffer);

/*
 get file base name, suffix removed
*/
void get_file_base_name(char *path, char *baseNameBuffer);

/*
 write string to file, returns write size
*/
size_t write_file_string(const void * ptr, size_t size, size_t count, char *filePath, char *mode);

/*
read string to buffer, caller must free the buffer, returns read size
*/

size_t read_file_string(char **buffer,char *filePath);