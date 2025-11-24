# Script to compile the Legacy Codex Book Series
# This script aggregates the raw documentation into Manuscript files for each Book.

$outputDir = "manuscripts"
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
}

function Compile-Book ($bookTitle, $subtitle, $author, $sourceDirs, $outputFile) {
    Write-Host "Compiling $bookTitle..."
    
    # Title Page
    $content = "# $bookTitle`n"
    $content += "## $subtitle`n`n"
    $content += "**By $author**`n`n"
    $content += "---`n`n"
    
    # Introduction (Standard for all books)
    $content += "## Introduction to the Series: The 365-Year Vision`n`n"
    $content += "Most people build for the weekend. Some build for retirement. We build for 365 years.`n`n"
    $content += "This book is not a theory. It is the foundational operating manual of the Ohu Dynasty. It contains the exact legal, philosophical, and strategic frameworks we use to ensure our family's sovereignty survives three centuries of chaos.`n`n"
    $content += "---`n`n"

    foreach ($dir in $sourceDirs) {
        if (Test-Path $dir) {
            $files = Get-ChildItem -Path $dir -Recurse -Filter *.md | 
                Where-Object { 
                    $_.Name -notmatch "AUDIT" -and 
                    $_.Name -notmatch "README" -and 
                    $_.Name -notmatch "log" -and 
                    $_.Name -notmatch "COMPLETION" -and
                    $_.Name -notmatch "VERIFICATION" -and
                    $_.Name -notmatch "QA" -and
                    $_.Name -notmatch "quality-log"
                }
            
            # Custom Sorting Logic
            $sortedFiles = $files | Sort-Object @{
                # 1. Extract Chapter Number (Primary Sort)
                Expression = { 
                    if ($_.Name -match "chapter-(\d+)") { [int]$matches[1] } else { 9999 } 
                }
            }, @{
                # 2. Prioritize Main Content over Implementation Resources/Expansions
                Expression = { 
                    if ($_.FullName -match "implementation-resources") { 3 } 
                    elseif ($_.Name -match "expansion" -or $_.Name -match "guide" -or $_.Name -match "supplement") { 2 }
                    else { 1 }
                }
            }, @{
                # 3. Main vs Related (Length Heuristic - fallback)
                Expression = { $_.Name.Length }
            }, @{
                # 4. Alphabetical Fallback
                Expression = { $_.Name }
            }

            foreach ($file in $sortedFiles) {
                $fileContent = Get-Content $file.FullName -Raw
                $content += "`n`n---`n`n"
                $content += $fileContent
            }
        } else {
            Write-Warning "Directory not found: $dir"
        }
    }
    
    $outputPath = Join-Path $outputDir $outputFile
    Set-Content -Path $outputPath -Value $content
    Write-Host "Created $outputPath"
}

# Book 1: The Foundation
Compile-Book "Book 1: The Foundation" `
    "Vision, Law, and the Architecture of a Dynasty" `
    "Ikechukwu Ohu" `
    @("ohu-legacy-codex/volume-i-foundation", "ohu-legacy-codex/volume-ii-legal-fiduciary") `
    "Book_1_The_Foundation_Manuscript.md"

# Book 2: The Engine
Compile-Book "Book 2: The Engine" `
    "Cash Flow, Revenue Systems, and The Economics of Sovereignty" `
    "Ikechukwu Ohu" `
    @("ohu-legacy-codex/volume-iii-revenue-business-systems") `
    "Book_2_The_Engine_Manuscript.md"

# Book 3: The Machine
Compile-Book "Book 3: The Machine" `
    "Automation, Artificial Intelligence, and Infinite Leverage" `
    "Ikechukwu Ohu" `
    @("ohu-legacy-codex/volume-iv-technology-automation", "ohu-legacy-codex/volume-v-operations-scaling", "ohu-legacy-codex/volume-vii-implementation") `
    "Book_3_The_Machine_Manuscript.md"

# Book 4: The Bloodline
Compile-Book "Book 4: The Bloodline" `
    "Governance, Education, and The Preservation of Human Capital" `
    "Ikechukwu Ohu" `
    @("ohu-legacy-codex/volume-vi-family-governance", "ohu-legacy-codex/volume-viii-growth-exit") `
    "Book_4_The_Bloodline_Manuscript.md"

# Book 5: The Arsenal (NEW)
# Includes Volume IX, Volume X, Appendices, Templates, Checklists
Compile-Book "Book 5: The Arsenal" `
    "Templates, Checklists, Resources, and Crisis Protocols" `
    "Ikechukwu Ohu" `
    @("ohu-legacy-codex/volume-ix-resources", "ohu-legacy-codex/volume-x-troubleshooting-optimization", "ohu-legacy-codex/appendices", "ohu-legacy-codex/checklists", "ohu-legacy-codex/templates") `
    "Book_5_The_Arsenal_Manuscript.md"

Write-Host "All manuscripts compiled successfully."
