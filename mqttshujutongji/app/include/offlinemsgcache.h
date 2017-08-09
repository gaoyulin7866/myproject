#pragma once

/*
  save offline message (in memroy & file)
*/
int enqueue_offline_message(long timestamp, char *message);

/*
 set the cache capacity, default is 1000
 */
void set_cache_capacity(int capacity);

/*
 returns cache capacity
*/
int get_cache_capacity();

/*
 get pending offline messages count
*/
int offline_messages_count();

/*
 load cache from disk
*/
int load_offline_messages();

/*
 send pending messages async
*/
int asyn_send_offline_messages();