@echo off
echo ========================================
echo Youssef Rajeh Portfolio - React Setup
echo ========================================
echo.

echo Checking for Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH!
    echo Please install Node.js from https://nodejs.org/
    echo Or restart your terminal after installing Node.js
    echo.
    pause
    exit /b 1
)

echo Node.js found!
node --version
npm --version
echo.

echo Checking if dependencies are installed...
if not exist "node_modules\" (
    echo Installing dependencies...
    echo This may take a few minutes...
    echo.
    call npm install
    
    if errorlevel 1 (
        echo.
        echo ERROR: Installation failed!
        pause
        exit /b 1
    )
) else (
    echo Dependencies already installed!
)

echo.
echo ========================================
echo Setup complete!
echo ========================================
echo.
echo Starting development server...
echo Your portfolio will open at http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm run dev

pause

