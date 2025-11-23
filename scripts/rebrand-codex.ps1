# Rebranding Script: Empire Bible -> Ohu Legacy Codex
# Replaces "cheesy" terminology with sophisticated naming

$replacements = @{
    'Empire Bible' = "Legacy Codex"
    'The Empire Bible' = "The Ohu Legacy Codex"
    'OHU-PNR DYNASTY EMPIRE BIBLE' = "THE OHU LEGACY CODEX"
    'Dynasty Empire' = "Ohu Family Enterprise"
    'OHU-PNR Empire' = "Ohu Family Enterprise"
    'The Dynasty' = "The Enterprise" # Context dependent, but generally safer
    'Empire Framework' = "Legacy Framework"
}

$files = Get-ChildItem -Path "empire-bible" -Recurse -Filter *.md

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    foreach ($key in $replacements.Keys) {
        # Case sensitive replacement to preserve headers
        $content = $content -replace $key, $replacements[$key]
    }
    
    if ($content -ne $originalContent) {
        Write-Host "Rebranding $($file.Name)..."
        $content | Set-Content $file.FullName -Encoding UTF8
    }
}

Write-Host "Rebranding complete."

