@echo off
setlocal
cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo npm est introuvable. Installez Node.js puis relancez ce fichier.
  pause
  exit /b 1
)

if not exist "node_modules\.bin\vite.cmd" (
  echo Installation des dependances du site...
  call npm install
  if errorlevel 1 (
    echo L'installation a echoue. Verifiez votre connexion Internet puis reessayez.
    pause
    exit /b 1
  )
)

echo Demarrage du site. Gardez cette fenetre ouverte pendant la visite.
call npm run dev -- --open
echo.
echo Le serveur du site est arrete.
pause
