# Auto-Sync Script
# Pulls latest changes from GitHub and merges with local changes
# Usage: .\scripts\auto-sync.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Auto-Sync with GitHub" -ForegroundColor Cyan
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
    Write-Host "⚠️  You have uncommitted changes. Stashing them..." -ForegroundColor Yellow
    git stash push -m "Auto-stash before sync: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    Write-Host ""
}

# Fetch latest changes
Write-Host "📥 Fetching latest changes from GitHub..." -ForegroundColor Cyan
git fetch origin $branch

# Check if we're behind
$commitsBehind = git rev-list --count HEAD..origin/$branch 2>$null

if ($commitsBehind -gt 0) {
    Write-Host "📥 Pulling $commitsBehind commit(s) from GitHub..." -ForegroundColor Cyan
    Write-Host ""
    
    git pull origin $branch
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ Successfully pulled from GitHub!" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "❌ Pull failed. There may be conflicts." -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "✅ Local branch is up to date with GitHub." -ForegroundColor Green
}

# Restore stashed changes if any
$stashList = git stash list
if ($stashList -and $status) {
    Write-Host ""
    Write-Host "📦 Restoring stashed changes..." -ForegroundColor Cyan
    git stash pop
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Sync Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan

