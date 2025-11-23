# Personalization Script for Dynasty Empire (Corrected)
# Replaces placeholders with accurate family details

# First, correct the previous incorrect replacement
$corrections = @{
    'Chimenime Xavier' = "Ikechukwu Polycarp Nnamdi Ohu"
    'Judith' = "Judith Huchukwuyem Ohu"
    '\[Your Family\]' = "the Ohu Family"
    'the Xavier Family' = "the Ohu Family"
}

$files = Get-ChildItem -Path "empire-bible" -Recurse -Filter *.md

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    foreach ($key in $corrections.Keys) {
        $content = $content -replace $key, $corrections[$key]
    }
    
    if ($content -ne $originalContent) {
        Write-Host "Updating $($file.Name)..."
        $content | Set-Content $file.FullName -Encoding UTF8
    }
}

Write-Host "Personalization corrections complete."

