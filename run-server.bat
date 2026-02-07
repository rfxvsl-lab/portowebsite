@echo off
REM Simple HTTP Server untuk Portfolio-Website
REM Pastikan Python 3 sudah installed

echo Starting HTTP Server...
echo.
echo Website akan buka di: http://localhost:8000/
echo Tekan Ctrl+C untuk stop server
echo.

python -m http.server 8000

pause
