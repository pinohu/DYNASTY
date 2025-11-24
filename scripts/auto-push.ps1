# Auto-Push Script
# Manually trigger auto-push to GitHub
# Usage: .\scripts\auto-push.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Auto-Push to GitHub" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get current branch
$branch = git symbolic-ref --short HEAD 2>$null

if (-not $branch) {
    Write-Host "❌ Error: Not on a valid branch" -ForegroundColor Red
    exit 1
}

Write-Host "Current branch: $branch" -ForegroundColor Yellow
Write-Host ""

# Check for uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host "⚠️  Warning: You have uncommitted changes:" -ForegroundColor Yellow
    git status --short
    Write-Host ""
    $response = Read-Host "Do you want to commit and push? (y/n)"
    if ($response -eq 'y' -or $response -eq 'Y') {
        $message = Read-Host "Enter commit message (or press Enter for default)"
        if ([string]::IsNullOrWhiteSpace($message)) {
            $message = "Auto-commit: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        }
        git add -A
        git commit -m $message
    } else {
        Write-Host "Skipping commit. Pushing existing commits only." -ForegroundColor Gray
    }
}

# Check if there are commits to push
$commitsAhead = git rev-list --count origin/$branch..HEAD 2>$null

if ($commitsAhead -gt 0) {
    Write-Host "📤 Pushing $commitsAhead commit(s) to GitHub..." -ForegroundColor Cyan
    Write-Host ""
    
    git push origin $branch
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
        Write-Host "   Branch: $branch" -ForegroundColor Gray
        Write-Host "   Commits pushed: $commitsAhead" -ForegroundColor Gray
    } else {
        Write-Host ""
        Write-Host "❌ Push failed. Please check your git configuration." -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "✅ Branch is up to date. Nothing to push." -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan


