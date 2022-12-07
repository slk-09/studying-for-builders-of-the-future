#!/bin/bash

GITUSER=`git shortlog -s -n --all --no-merges | awk -F ' ' '{print $2,$3}'`

COMMITS_NUM=`git shortlog -s -n --all --no-merges | awk -F ' ' '{print $1}'`

echo "${GITUSER} - ${COMMITS_NUM}"
