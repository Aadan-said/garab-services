# Garab - Start Backend + Mobile
# Socodsii script-kan meesha somali-local-services uu jiro

Write-Host "Bilaabaya GARAB Backend (Next.js port 3000)..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot'; npm run dev" -WindowStyle Normal

Write-Host "Sug 5 ilbiriqsi si backend uu u billaabo..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

Write-Host "Bilaabaya GARAB Mobile (Expo)..." -ForegroundColor Magenta
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\mobile'; npx expo start" -WindowStyle Normal

Write-Host "Labada server way billaabmeen!" -ForegroundColor Green
