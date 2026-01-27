@echo off
title WISP Tachira - Launcher
echo ==========================================
echo Starting WISP Tachira System in Background
echo ==========================================
echo.

:: Check if the VBScript exists
if not exist "start_hidden.vbs" (
    echo [ERROR] start_hidden.vbs not found!
    echo Creating a default start_hidden.vbs...
    (
        echo Set WshShell = CreateObject^("WScript.Shell"^)
        echo WshShell.Run "cmd /c cd backend ^&^& npm run dev", 0, false
        echo WScript.Sleep 5000
        echo WshShell.Run "cmd /c cd frontend ^&^& npm run dev", 0, false
    ) > start_hidden.vbs
)

echo Initializing Backend and Frontend...
cscript //nologo start_hidden.vbs

echo.
echo [SUCCESS] System is now running in the background.
echo You can close this window now.
echo.
echo To STOP the system, use: stop_system.bat
echo ==========================================
timeout /t 5
exit
