# publish.ps1
# This script scrubs the original Github repository history and initializes a clean Gemini Fork.

Write-Host "Re-initializing Gemini Career Ops GitHub Repository..." -ForegroundColor Cyan

# 1. Delete original .git folder
if (Test-Path ".git") {
    Write-Host "Removing old .git history..."
    Remove-Item -Recurse -Force .git
}

# 2. Reinitialize Git
git init
git add .
git commit -m "Initial commit: Gemini Career Ops Fork"
git branch -M main

Write-Host ""
Write-Host "Your local repository is now clean and ready to publish!" -ForegroundColor Green
Write-Host "Please follow these steps to make your repository public on GitHub:"
Write-Host "1. Go to https://github.com/new"
Write-Host "2. Create a NEW PUBLIC repository named 'gemini-career-ops'"
Write-Host "3. Copy the repository URL (e.g., https://github.com/yourusername/gemini-career-ops.git)"
Write-Host ""

$remoteUrl = Read-Host "Paste your new repository URL here"

if ([string]::IsNullOrWhiteSpace($remoteUrl)) {
    Write-Host "No URL provided. You can link the remote later using:" -ForegroundColor Yellow
    Write-Host "`tgit remote add origin <URL>"
    Write-Host "`tgit push -u origin main"
} else {
    git remote add origin $remoteUrl
    Write-Host "Pushing to GitHub..."
    git push -u origin main
    Write-Host "Done! Your fork is public." -ForegroundColor Green
}
