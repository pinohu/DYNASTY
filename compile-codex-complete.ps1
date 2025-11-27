# Legacy Codex Compilation Script (Comprehensive Edition)
# Compiles ALL content including every checklist and template into one master document.
# Version: 4.0 (No Details Spared)

$outputFile = "Ohu_Legacy_Codex_Master.md"
$rootPath = "ohu-legacy-codex"

# --- Helper Function to Add Page Break ---
function Add-PageBreak {
    return "`n`n<div style='page-break-after: always;'></div>`n`n"
}

# --- Define Core Chapters (Volumes I - X) ---
# These are the narrative chapters that form the "Book" part.
$coreChapters = @(
    # Volume I
    @{Path = "$rootPath\volume-i-foundation\book-1-empire-vision\volume-i-introduction.md"; Title = "Volume I: Foundation & Philosophy - Introduction"},
    @{Path = "$rootPath\volume-i-foundation\book-1-empire-vision\chapter-1-legacy-manifesto.md"; Title = "Chapter 1: The Legacy Manifesto"},
    @{Path = "$rootPath\volume-i-foundation\book-1-empire-vision\chapter-2-strategic-architecture.md"; Title = "Chapter 2: Strategic Architecture"},
    @{Path = "$rootPath\volume-i-foundation\book-1-empire-vision\chapter-3-family-legacy.md"; Title = "Chapter 3: Family Legacy Framework"},

    # Volume II
    @{Path = "$rootPath\volume-ii-legal-fiduciary\volume-ii-introduction.md"; Title = "Volume II: Legal & Fiduciary Structures - Introduction"},
    @{Path = "$rootPath\volume-ii-legal-fiduciary\book-2-legacy-trust\chapter-4-south-dakota-legacy-trust.md"; Title = "Chapter 4: South Dakota Dynasty Trust"},
    @{Path = "$rootPath\volume-ii-legal-fiduciary\book-2-legacy-trust\chapter-5-trust-administration-manual.md"; Title = "Chapter 5: Trust Administration Manual"},
    @{Path = "$rootPath\volume-ii-legal-fiduciary\book-2-legacy-trust\chapter-6-subsidiary-trust-structures.md"; Title = "Chapter 6: Subsidiary Trust Structures"},
    @{Path = "$rootPath\volume-ii-legal-fiduciary\book-3-business-entities\chapter-7-entity-formation-compliance-bible.md"; Title = "Chapter 7: Entity Formation & Compliance Bible"},
    @{Path = "$rootPath\volume-ii-legal-fiduciary\book-3-business-entities\chapter-8-pnr-holdings-complex.md"; Title = "Chapter 8: The PNR Holdings Complex"},
    @{Path = "$rootPath\volume-ii-legal-fiduciary\book-3-business-entities\chapter-9-operating-company-playbooks.md"; Title = "Chapter 9: Operating Company Playbooks"},

    # Volume III
    @{Path = "$rootPath\volume-iii-revenue-business-systems\volume-iii-introduction.md"; Title = "Volume III: Revenue Generation Engines - Introduction"},
    @{Path = "$rootPath\volume-iii-revenue-business-systems\book-4-professional-services\chapter-10-notary-ron-services.md"; Title = "Chapter 10: Notary & RON Services Empire"},
    @{Path = "$rootPath\volume-iii-revenue-business-systems\book-4-professional-services\chapter-11-transaction-coordination.md"; Title = "Chapter 11: Transaction Coordination Domination"},
    @{Path = "$rootPath\volume-iii-revenue-business-systems\book-4-professional-services\chapter-12-tax-enrolled-agent.md"; Title = "Chapter 12: Tax & Enrolled Agent Services"},
    @{Path = "$rootPath\volume-iii-revenue-business-systems\book-5-directory-empire\chapter-13-directory-selection-development.md"; Title = "Chapter 13: Directory Selection & Development"},
    @{Path = "$rootPath\volume-iii-revenue-business-systems\book-5-directory-empire\chapter-14-directory-monetization.md"; Title = "Chapter 14: Directory Monetization Mastery"},
    @{Path = "$rootPath\volume-iii-revenue-business-systems\book-5-directory-empire\chapter-15-directory-portfolio-management.md"; Title = "Chapter 15: Directory Portfolio Management"},
    @{Path = "$rootPath\volume-iii-revenue-business-systems\book-6-real-estate-ops\chapter-16-creative-financing.md"; Title = "Chapter 16: Creative Financing Mastery"},
    @{Path = "$rootPath\volume-iii-revenue-business-systems\book-6-real-estate-ops\chapter-17-reps-tax-benefits.md"; Title = "Chapter 17: REPS Qualification & Tax Benefits"},
    @{Path = "$rootPath\volume-iii-revenue-business-systems\book-6-real-estate-ops\chapter-18-property-management.md"; Title = "Chapter 18: Property Management Systems"},

    # Volume IV
    @{Path = "$rootPath\volume-iv-technology-automation\volume-iv-introduction.md"; Title = "Volume IV: Technology & Automation - Introduction"},
    @{Path = "$rootPath\volume-iv-technology-automation\book-7-technology-infrastructure\chapter-19-suitedash-command-center.md"; Title = "Chapter 19: SuiteDash Command Center"},
    @{Path = "$rootPath\volume-iv-technology-automation\book-7-technology-infrastructure\chapter-20-automation-architecture.md"; Title = "Chapter 20: Automation Architecture"},
    @{Path = "$rootPath\volume-iv-technology-automation\book-7-technology-infrastructure\chapter-21-ai-implementation-strategy.md"; Title = "Chapter 21: AI Implementation Strategy"},
    @{Path = "$rootPath\volume-iv-technology-automation\book-8-digital-marketing-systems\chapter-22-organic-marketing-mastery.md"; Title = "Chapter 22: Organic Marketing Mastery"},
    @{Path = "$rootPath\volume-iv-technology-automation\book-8-digital-marketing-systems\chapter-23-paid-advertising-playbook.md"; Title = "Chapter 23: Paid Advertising Playbook"},
    @{Path = "$rootPath\volume-iv-technology-automation\book-8-digital-marketing-systems\chapter-24-sales-systems-development.md"; Title = "Chapter 24: Sales Systems Development"},

    # Volume V
    @{Path = "$rootPath\volume-v-operations-scaling\volume-v-introduction.md"; Title = "Volume V: Operations & Scaling - Introduction"},
    @{Path = "$rootPath\volume-v-operations-scaling\book-9-human-capital-management\chapter-25-virtual-team-building.md"; Title = "Chapter 25: Virtual Team Building"},
    @{Path = "$rootPath\volume-v-operations-scaling\book-9-human-capital-management\chapter-26-us-team-development.md"; Title = "Chapter 26: US Team Development"},
    @{Path = "$rootPath\volume-v-operations-scaling\book-9-human-capital-management\chapter-27-organizational-development.md"; Title = "Chapter 27: Organizational Development"},
    @{Path = "$rootPath\volume-v-operations-scaling\book-10-financial-management\chapter-28-accounting-bookkeeping-systems.md"; Title = "Chapter 28: Accounting & Bookkeeping Systems"},
    @{Path = "$rootPath\volume-v-operations-scaling\book-10-financial-management\chapter-29-financial-planning-analysis.md"; Title = "Chapter 29: Financial Planning & Analysis"},
    @{Path = "$rootPath\volume-v-operations-scaling\book-10-financial-management\chapter-30-tax-strategy-implementation.md"; Title = "Chapter 30: Tax Strategy Implementation"},

    # Volume VI
    @{Path = "$rootPath\volume-vi-family-governance\volume-vi-introduction.md"; Title = "Volume VI: Family Governance & Succession - Introduction"},
    @{Path = "$rootPath\volume-vi-family-governance\book-11-family-business-governance\chapter-31-family-council-operations.md"; Title = "Chapter 31: Family Council Operations"},
    @{Path = "$rootPath\volume-vi-family-governance\book-11-family-business-governance\chapter-32-childrens-business-education.md"; Title = "Chapter 32: Children's Business Education"},
    @{Path = "$rootPath\volume-vi-family-governance\book-11-family-business-governance\chapter-33-succession-planning.md"; Title = "Chapter 33: Succession Planning"},
    @{Path = "$rootPath\volume-vi-family-governance\book-12-wealth-preservation-transfer\chapter-34-estate-planning-integration.md"; Title = "Chapter 34: Estate Planning Integration"},
    @{Path = "ohu-legacy-codex\volume-vi-family-governance\book-12-wealth-preservation-transfer\chapter-35-insurance-risk-management.md"; Title = "Chapter 35: Insurance & Risk Management"},
    @{Path = "ohu-legacy-codex\volume-vi-family-governance\book-12-wealth-preservation-transfer\chapter-36-philanthropy-legacy.md"; Title = "Chapter 36: Philanthropy & Legacy"},

    # Volume VII
    @{Path = "$rootPath\volume-vii-implementation\volume-vii-introduction.md"; Title = "Volume VII: Implementation & Execution - Introduction"},
    @{Path = "$rootPath\volume-vii-implementation\book-13-launch-sequences\chapter-37-30-day-quick-start.md"; Title = "Chapter 37: 30-Day Quick Start"},
    @{Path = "$rootPath\volume-vii-implementation\book-13-launch-sequences\chapter-38-90-day-transformation.md"; Title = "Chapter 38: 90-Day Transformation"},
    @{Path = "$rootPath\volume-vii-implementation\book-13-launch-sequences\chapter-39-year-1-execution-plan.md"; Title = "Chapter 39: Year 1 Execution Plan"},
    @{Path = "$rootPath\volume-vii-implementation\book-14-operational-excellence\chapter-40-standard-operating-procedures.md"; Title = "Chapter 40: Standard Operating Procedures"},
    @{Path = "$rootPath\volume-vii-implementation\book-14-operational-excellence\chapter-41-quality-management-systems.md"; Title = "Chapter 41: Quality Management Systems"},
    @{Path = "$rootPath\volume-vii-implementation\book-14-operational-excellence\chapter-42-performance-management.md"; Title = "Chapter 42: Performance Management"},

    # Volume VIII
    @{Path = "$rootPath\volume-viii-growth-exit\volume-viii-introduction.md"; Title = "Volume VIII: Growth & Exit Strategies - Introduction"},
    @{Path = "$rootPath\volume-viii-growth-exit\book-15-scaling-strategies\chapter-43-business-acquisition-playbook.md"; Title = "Chapter 43: Business Acquisition Playbook"},
    @{Path = "$rootPath\volume-viii-growth-exit\book-15-scaling-strategies\chapter-44-strategic-partnerships.md"; Title = "Chapter 44: Strategic Partnerships"},
    @{Path = "$rootPath\volume-viii-growth-exit\book-15-scaling-strategies\chapter-45-exit-planning-execution.md"; Title = "Chapter 45: Exit Planning & Execution"},

    # Volume IX (Core Chapters Only)
    @{Path = "$rootPath\volume-ix-resources\volume-ix-introduction.md"; Title = "Volume IX: Resources & References - Introduction"},
    @{Path = "$rootPath\volume-ix-resources\book-16-forms-templates\chapter-46-legal-documents-agreements.md"; Title = "Chapter 46: Legal Documents & Agreements"},
    @{Path = "$rootPath\volume-ix-resources\book-16-forms-templates\chapter-47-financial-templates-models.md"; Title = "Chapter 47: Financial Templates & Models"},
    @{Path = "$rootPath\volume-ix-resources\book-16-forms-templates\chapter-48-marketing-sales-materials.md"; Title = "Chapter 48: Marketing & Sales Materials"},
    @{Path = "$rootPath\volume-ix-resources\book-17-vendor-directory\chapter-49-professional-service-providers.md"; Title = "Chapter 49: Professional Service Providers"},
    @{Path = "$rootPath\volume-ix-resources\book-17-vendor-directory\chapter-50-technology-tools-directory.md"; Title = "Chapter 50: Technology & Tools Directory"},
    @{Path = "$rootPath\volume-ix-resources\book-17-vendor-directory\chapter-51-compliance-regulatory-guide.md"; Title = "Chapter 51: Compliance & Regulatory Guide"},

    # Volume X
    @{Path = "$rootPath\volume-x-troubleshooting-optimization\volume-x-introduction.md"; Title = "Volume X: Troubleshooting & Optimization - Introduction"},
    @{Path = "$rootPath\volume-x-troubleshooting-optimization\book-18-problem-solving-crisis-management\chapter-52-common-problems-solutions.md"; Title = "Chapter 52: Common Problems & Solutions"},
    @{Path = "$rootPath\volume-x-troubleshooting-optimization\book-18-problem-solving-crisis-management\chapter-53-crisis-management-protocols.md"; Title = "Chapter 53: Crisis Management Protocols"},
    @{Path = "$rootPath\volume-x-troubleshooting-optimization\book-18-problem-solving-crisis-management\chapter-54-continuous-optimization.md"; Title = "Chapter 54: Continuous Optimization"}
)

# --- Create Cover Page ---
$coverPage = @"
# THE OHU LEGACY CODEX
## Architectural Blueprint for Intergenerational Sovereignty
### The Definitive Guide to Building, Operating, and Perpetuating a Multi-Generational `$10M+ Business Enterprise

---

**Author**: Ikechukwu Ohu
**Date**: November 23, 2025
**Implementation Start**: December 1, 2025
**Version**: 4.0 (Comprehensive Edition - No Details Spared)
**Compilation Date**: $(Get-Date -Format "MMMM dd, yyyy")

**Principals**: Ikechukwu Polycarp Nnamdi Ohu & Judith Huchukwuyem Ohu
**Beneficiaries**: Ivan, Jeremy, Kikachukwu, Chimenime

---

## COMPILATION NOTE

This master document is the **Comprehensive Edition** of The Ohu Legacy Codex. It includes:
1.  **The Core Codex**: All 10 Volumes of strategic and operational guidance.
2.  **The Operational Toolkit**: Every checklist and standard operating procedure.
3.  **The Template Library**: The complete text of every legal, financial, and operational template.
4.  **Appendices**: Reference guides and contact lists.

This is the single source of truth for the Ohu Family Enterprise.

$(Add-PageBreak)
"@

# --- Initialize Compiled Content ---
$compiledContent = $coverPage + "# TABLE OF CONTENTS`n`n"

# --- Helper to Add Sections to TOC and Content ---
function Add-To-Compilation {
    param (
        [array]$Items,
        [string]$SectionTitle
    )
    
    # Add Section Header to Content
    if ($SectionTitle) {
        $script:compiledContent += "# $SectionTitle`n`n"
        $script:compiledContent += $(Add-PageBreak)
    }

    foreach ($item in $Items) {
        if (Test-Path $item.Path) {
            Write-Host "Compiling: $($item.Title)"
            
            # Add to TOC
            $link = $item.Title -replace '[^a-zA-Z0-9 ]', '' -replace ' ', '-'
            $link = $link.ToLower()
            $script:compiledContent = $script:compiledContent.Insert($script:compiledContent.IndexOf("# TABLE OF CONTENTS`n`n") + 21, "- [$($item.Title)](#$link)`n")
            
            # Get Content
            $content = Get-Content $item.Path -Raw
            
            # Clean Header
            if ($content -match "^# ") {
                $content = $content -replace "^# .*?`r?`n", ""
            }
            
            # Append
            $script:compiledContent += "`n`n# $($item.Title)`n`n"
            $script:compiledContent += $content
            $script:compiledContent += $(Add-PageBreak)
        } else {
            Write-Host "Missing: $($item.Path)" -ForegroundColor Red
        }
    }
}

# --- Build Core Chapters ---
# Note: We are adding to TOC manually in the loop above, but for the main TOC block at top, we'll just rebuild it at the end or append? 
# Simpler: Build content string, then prepend TOC.

$bodyContent = ""

# 1. Core Volumes
foreach ($chapter in $coreChapters) {
    if (Test-Path $chapter.Path) {
        Write-Host "Compiling Core: $($chapter.Title)"
        $content = Get-Content $chapter.Path -Raw
        if ($content -match "^# ") { $content = $content -replace "^# .*?`r?`n", "" }
        $bodyContent += "`n`n# $($chapter.Title)`n`n$content$(Add-PageBreak)"
    }
}

# 2. Volume XI: The Operational Toolkit (Checklists)
$bodyContent += "# Volume XI: The Operational Toolkit (Checklists)`n`n$(Add-PageBreak)"
$checklists = Get-ChildItem -Path "$rootPath\checklists" -Recurse -Filter *.md
foreach ($file in $checklists) {
    if ($file.Name -eq "README.md") { continue }
    $title = "Checklist: " + ($file.Name -replace "-", " " -replace ".md", "")
    $title = (Get-Culture).TextInfo.ToTitleCase($title)
    
    Write-Host "Compiling Checklist: $title"
    $content = Get-Content $file.FullName -Raw
    if ($content -match "^# ") { $content = $content -replace "^# .*?`r?`n", "" }
    $bodyContent += "`n`n# $title`n`n$content$(Add-PageBreak)"
}

# 3. Volume XII: The Template Library
$bodyContent += "# Volume XII: The Template Library`n`n$(Add-PageBreak)"
$templates = Get-ChildItem -Path "$rootPath\templates" -Recurse -Filter *.md
foreach ($file in $templates) {
    if ($file.Name -eq "README.md") { continue }
    # Determine category from parent folder
    $category = $file.Directory.Name
    $title = "Template ($category): " + ($file.Name -replace "-", " " -replace ".md", "")
    $title = (Get-Culture).TextInfo.ToTitleCase($title)
    
    Write-Host "Compiling Template: $title"
    $content = Get-Content $file.FullName -Raw
    if ($content -match "^# ") { $content = $content -replace "^# .*?`r?`n", "" }
    $bodyContent += "`n`n# $title`n`n$content$(Add-PageBreak)"
}

# 4. Appendices
$bodyContent += "# APPENDICES`n`n$(Add-PageBreak)"
$appendices = @(
    @{Path = "$rootPath\appendices\appendix-a-quick-reference.md"; Title = "Appendix A: Quick Reference Guides"},
    @{Path = "$rootPath\appendices\appendix-b-calculators-tools.md"; Title = "Appendix B: Calculators & Tools"},
    @{Path = "$rootPath\appendices\appendix-c-contact-lists.md"; Title = "Appendix C: Contact Lists"},
    @{Path = "$rootPath\appendices\appendix-d-glossary.md"; Title = "Appendix D: Glossary & Definitions"},
    @{Path = "$rootPath\appendices\appendix-e-index.md"; Title = "Appendix E: Index & Cross-References"}
)
foreach ($appendix in $appendices) {
    if (Test-Path $appendix.Path) {
        Write-Host "Compiling Appendix: $($appendix.Title)"
        $content = Get-Content $appendix.Path -Raw
        if ($content -match "^# ") { $content = $content -replace "^# .*?`r?`n", "" }
        $bodyContent += "`n`n# $($appendix.Title)`n`n$content$(Add-PageBreak)"
    }
}

# --- Generate TOC from Body Content ---
# We scan the body content for "# " headers to build the TOC dynamically
$toc = "# TABLE OF CONTENTS`n`n"
$lines = $bodyContent -split "`n"
foreach ($line in $lines) {
    if ($line -match "^# (.*)") {
        $title = $matches[1]
        $link = $title -replace '[^a-zA-Z0-9 ]', '' -replace ' ', '-'
        $link = $link.ToLower()
        $toc += "- [$title](#$link)`n"
    }
}
$toc += $(Add-PageBreak)

# --- Final Assembly ---
$finalContent = $coverPage + $toc + $bodyContent

$finalContent += @"
---

**END OF COMPREHENSIVE COMPILATION**

*This document was automatically compiled on $(Get-Date -Format "MMMM dd, yyyy 'at' HH:mm:ss")*

---
"@

# Write to file
$finalContent | Out-File -FilePath $outputFile -Encoding UTF8

Write-Host "`nCompilation complete! Output saved to: $outputFile"
Write-Host "Total size: $([math]::Round((Get-Item $outputFile).Length/1KB, 2)) KB"






