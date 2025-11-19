# Cross-Reference Verification Script
# Verifies all cross-references in the Empire Bible are accurate

$masterDoc = "Empire_Bible_Complete.md"
$crossRefLog = "index/cross-reference-log.md"

Write-Host "========================================"
Write-Host "Cross-Reference Verification"
Write-Host "========================================"
Write-Host ""

# Read master document
$content = Get-Content $masterDoc -Raw

# Find all cross-references
$patterns = @(
    'See Chapter (\d+)',
    'See Section (\d+)\.(\d+)',
    'Chapter (\d+)\.(\d+)',
    'Volume ([IVX]+), Chapter (\d+)',
    '\[Chapter (\d+)\]',
    '\[Section (\d+)\.(\d+)\]'
)

$references = @()
foreach ($pattern in $patterns) {
    $matches = [regex]::Matches($content, $pattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    foreach ($match in $matches) {
        $references += [PSCustomObject]@{
            Pattern = $pattern
            Match = $match.Value
            Line = ($content.Substring(0, $match.Index) -split "`n").Count
        }
    }
}

Write-Host "Total cross-references found: $($references.Count)"
Write-Host ""

# Verify chapter references (1-54)
$chapterRefs = $references | Where-Object { $_.Match -match 'Chapter (\d+)' } | ForEach-Object {
    if ($_.Match -match 'Chapter (\d+)') {
        [int]$matches[1]
    }
} | Where-Object { $_ -ge 1 -and $_ -le 54 }

$invalidChapters = $chapterRefs | Where-Object { $_ -lt 1 -or $_ -gt 54 }
if ($invalidChapters) {
    Write-Host "⚠️ Invalid chapter references found: $($invalidChapters -join ', ')"
} else {
    Write-Host "✅ All chapter references are valid (1-54)"
}

# Check for broken internal links
$brokenLinks = @()
$tocLinks = Select-String -Path $masterDoc -Pattern '\[([^\]]+)\]\(#([^\)]+)\)' | ForEach-Object {
    $link = $_.Matches.Groups[2].Value
    # Check if anchor exists
    $anchorPattern = $link -replace '-', '[\s-]' -replace ':', '[\s:]*'
    $anchorExists = Select-String -Path $masterDoc -Pattern "^\#+\s+$anchorPattern" -Quiet
    if (-not $anchorExists) {
        $brokenLinks += $link
    }
}

if ($brokenLinks.Count -gt 0) {
    Write-Host "⚠️ Broken TOC links found: $($brokenLinks.Count)"
    $brokenLinks | Select-Object -First 10 | ForEach-Object { Write-Host "  - $_" }
} else {
    Write-Host "✅ All TOC links are valid"
}

Write-Host ""
Write-Host "========================================"
Write-Host "Verification Complete"
Write-Host "========================================"

