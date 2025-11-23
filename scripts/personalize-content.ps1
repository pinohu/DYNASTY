# Personalization Script for Dynasty Empire
# Replaces placeholders with actual names

$replacements = @{
    '\[Primary Principal Name\]' = "Chimenime Xavier"
    '\[Secondary Principal Name\]' = "Judith"
    '\[Your Family\]' = "the Xavier Family"
    '\[Your Organization\]' = "OHU-PNR"
    '\[Beneficiary Names\]' = "the Beneficiaries"
}

$files = Get-ChildItem -Path "empire-bible" -Recurse -Filter *.md

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    foreach ($key in $replacements.Keys) {
        $content = $content -replace $key, $replacements[$key]
    }
    
    if ($content -ne $originalContent) {
        Write-Host "Updating $($file.Name)..."
        $content | Set-Content $file.FullName -Encoding UTF8
    }
}

Write-Host "Personalization complete."

