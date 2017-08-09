#pragma once
#include <stdio.h>
#include <string.h>

/*
 check string is NULL or empty
*/
int string_is_empty(char *s); 

/*
 comare two strings
*/
int string_equals(char *s1, char *s2, int ignoreCase);

/*
 return empty string if NULL
*/
char *safe_string(char *str);