@echo off
set /p port="Enter the port number: "
python -m http.server %port%
