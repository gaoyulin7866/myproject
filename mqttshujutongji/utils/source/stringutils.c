#include "stringutils.h"

/*
 check string is NULL or empty
*/
int string_is_empty(char *s)
{
    return (!s || strlen(s) == 0);
}

/*
 comare two strings
*/
int string_equals(char *s1, char *s2, int ignoreCase)
{
    int (*cmp_fn)(char*,char*) = strcmp;//(*cmp_fn)(char*,char*)函数指针(指向一个函数) strcmp按ASCII比较字符串  区分大小写  

    if (ignoreCase) {
        cmp_fn = strcasecmp;//strcasecmp 按ASCII比较字符串  不区分大小写  
    }
    return cmp_fn(s1, s2) == 0;//返回两个字符串的关系与0的大小比较  结果为true and false
}

/*
 return empty string if NULL
*/
static char *EMPTY_STRING = "";
char *safe_string(char *str)
{
    return str ? str : EMPTY_STRING;
}
