#!/bin/bash

# one liner
for i in `ls $1/lock* 2> /dev/null`; do [ `sed 's/\(\w.*\) \(\w.*\)/root@\1 "ps --no-heading --pid \2"/' $i | xargs ssh | wc -l` == 0 ] && rm $i || : ; done;



