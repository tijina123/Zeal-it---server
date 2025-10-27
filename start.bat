@echo off
echo Starting Zeal-IT Backend Server...
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    echo.
)

REM Check if .env exists
if not exist ".env" (
    echo WARNING: .env file not found!
    echo Please copy env.example to .env and configure your email settings.
    echo.
    pause
    exit /b 1
)

echo Starting server...
npm start

pause
