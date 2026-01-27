@echo off
title WISP Tachira - Stopper
echo ==========================================
echo Stopping WISP Tachira System...
echo ==========================================
echo.

:: Kill all node.exe processes
:: Warning: This will kill ALL node processes on the machine.
taskkill /F /IM node.exe /T >nul 2>&1

echo [SUCCESS] Node.exe processes have been stopped.
echo.
echo ==========================================
timeout /t 3
exit
