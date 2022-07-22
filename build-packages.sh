#!/bin/bash
set -e -x
cd packages
for dir in `ls`; do 
    cd $dir && npm install --legacy-peer-deps
    cd -
done;
cd -