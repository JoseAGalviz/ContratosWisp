@echo off
echo Setting up WISP Tachira System Environment...
SET PATH=%PATH%;C:\Program Files\nodejs

echo.
echo ==========================================
echo STARTING BACKEND (Port 3000)
echo ==========================================
start "WISP Backend" cmd /k "cd backend && npm run dev"

echo.
echo ==========================================
echo STARTING FRONTEND
echo ==========================================
cd frontend
timeout /t 5
start "WISP Frontend" cmd /k "npm run dev"

echo.
echo System started! Checks the popup windows.
pause
