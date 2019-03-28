#!/bin/bash


node server.js &

while [ 1 ]
do
node static/speech-to-text/recognize.js listen &
sleep 64 
done
