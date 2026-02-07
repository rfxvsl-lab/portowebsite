# Simple HTTP Server untuk Portfolio-Website - PowerShell Version
# Double-click file ini atau jalankan di PowerShell

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Portfolio Website - Local Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Python is available
try {
    $pythonVersion = python --version 2>&1
    Write-Host "✓ Python found: $pythonVersion" -ForegroundColor Green
    Write-Host ""
    Write-Host "Starting HTTP Server..." -ForegroundColor Yellow
    Write-Host "Website: http://localhost:8000/" -ForegroundColor Yellow
    Write-Host "Press Ctrl+C to stop server" -ForegroundColor Yellow
    Write-Host ""
    
    python -m http.server 8000
}
catch {
    Write-Host "✗ Python tidak ditemukan!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Solusi:" -ForegroundColor Yellow
    Write-Host "1. Install Python dari https://www.python.org/" -ForegroundColor White
    Write-Host "2. Atau gunakan opsi lain:" -ForegroundColor White
    Write-Host "   - Install 'Live Server' extension di VS Code" -ForegroundColor White
    Write-Host "   - Direct open index.html di browser" -ForegroundColor White
    Write-Host ""
    Read-Host "Press Enter to exit"
}
