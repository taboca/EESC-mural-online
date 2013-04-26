#!/bin/sh 
echo 'screenshot taking'
export DISPLAY=:0.0
cd /home/tela/TelaSocial-Mediator
/usr/bin/xwd -root -out file.xwd
convert file.xwd current.jpg
cp current.jpg ./app/static

