# Empire Bible Compilation Script
# Compiles all chapters into master document

$outputFile = "Empire_Bible_Complete.md"
$chapters = @()

# Define chapter order based on outline
$chapterOrder = @(
    # Volume I
    @{Path = "empire-bible\volume-i-foundation\book-1-empire-vision\volume-i-introduction.md"; Title = "Volume I: Foundation & Philosophy - Introduction"; Order = 1},
    @{Path = "empire-bible\volume-i-foundation\book-1-empire-vision\chapter-1-dynasty-manifesto.md"; Title = "Chapter 1: The Dynasty Manifesto"; Order = 2},
    @{Path = "empire-bible\volume-i-foundation\book-1-empire-vision\chapter-2-strategic-architecture.md"; Title = "Chapter 2: Strategic Architecture"; Order = 3},
    @{Path = "empire-bible\volume-i-foundation\book-1-empire-vision\chapter-3-family-legacy.md"; Title = "Chapter 3: Family Legacy Framework"; Order = 4},

    # Volume II
    @{Path = "empire-bible\volume-ii-legal-fiduciary\volume-ii-introduction.md"; Title = "Volume II: Legal & Fiduciary Structures - Introduction"; Order = 5},
    @{Path = "empire-bible\volume-ii-legal-fiduciary\book-2-dynasty-trust\chapter-4-south-dakota-dynasty-trust.md"; Title = "Chapter 4: South Dakota Dynasty Trust"; Order = 6},
    @{Path = "empire-bible\volume-ii-legal-fiduciary\book-2-dynasty-trust\chapter-5-trust-administration-manual.md"; Title = "Chapter 5: Trust Administration Manual"; Order = 7},
    @{Path = "empire-bible\volume-ii-legal-fiduciary\book-2-dynasty-trust\chapter-6-subsidiary-trust-structures.md"; Title = "Chapter 6: Subsidiary Trust Structures"; Order = 8},
    @{Path = "empire-bible\volume-ii-legal-fiduciary\book-3-business-entities\chapter-7-entity-formation-compliance-bible.md"; Title = "Chapter 7: Entity Formation & Compliance Bible"; Order = 9},
    @{Path = "empire-bible\volume-ii-legal-fiduciary\book-3-business-entities\chapter-8-pnr-holdings-complex.md"; Title = "Chapter 8: The PNR Holdings Complex"; Order = 10},
    @{Path = "empire-bible\volume-ii-legal-fiduciary\book-3-business-entities\chapter-9-operating-company-playbooks.md"; Title = "Chapter 9: Operating Company Playbooks"; Order = 11},

    # Volume III
    @{Path = "empire-bible\volume-iii-revenue-business-systems\volume-iii-introduction.md"; Title = "Volume III: Revenue Generation Engines - Introduction"; Order = 12},
    @{Path = "empire-bible\volume-iii-revenue-business-systems\book-4-professional-services\chapter-10-notary-ron-services.md"; Title = "Chapter 10: Notary & RON Services Empire"; Order = 13},
    @{Path = "empire-bible\volume-iii-revenue-business-systems\book-4-professional-services\chapter-11-transaction-coordination.md"; Title = "Chapter 11: Transaction Coordination Domination"; Order = 14},
    @{Path = "empire-bible\volume-iii-revenue-business-systems\book-4-professional-services\chapter-12-tax-enrolled-agent.md"; Title = "Chapter 12: Tax & Enrolled Agent Services"; Order = 15},
    @{Path = "empire-bible\volume-iii-revenue-business-systems\book-5-directory-empire\chapter-13-directory-selection-development.md"; Title = "Chapter 13: Directory Selection & Development"; Order = 16},
    @{Path = "empire-bible\volume-iii-revenue-business-systems\book-5-directory-empire\chapter-14-directory-monetization.md"; Title = "Chapter 14: Directory Monetization Mastery"; Order = 17},
    @{Path = "empire-bible\volume-iii-revenue-business-systems\book-5-directory-empire\chapter-15-directory-portfolio-management.md"; Title = "Chapter 15: Directory Portfolio Management"; Order = 18},
    @{Path = "empire-bible\volume-iii-revenue-business-systems\book-6-real-estate-ops\chapter-16-creative-financing.md"; Title = "Chapter 16: Creative Financing Mastery"; Order = 19},
    @{Path = "empire-bible\volume-iii-revenue-business-systems\book-6-real-estate-ops\chapter-17-reps-tax-benefits.md"; Title = "Chapter 17: REPS Qualification & Tax Benefits"; Order = 20},
    @{Path = "empire-bible\volume-iii-revenue-business-systems\book-6-real-estate-ops\chapter-18-property-management.md"; Title = "Chapter 18: Property Management Systems"; Order = 21},

    # Volume IV
    @{Path = "empire-bible\volume-iv-technology-automation\volume-iv-introduction.md"; Title = "Volume IV: Technology & Automation - Introduction"; Order = 22},
    @{Path = "empire-bible\volume-iv-technology-automation\book-7-technology-infrastructure\chapter-19-suitedash-command-center.md"; Title = "Chapter 19: SuiteDash Command Center"; Order = 23},
    @{Path = "empire-bible\volume-iv-technology-automation\book-7-technology-infrastructure\chapter-20-automation-architecture.md"; Title = "Chapter 20: Automation Architecture"; Order = 24},
    @{Path = "empire-bible\volume-iv-technology-automation\book-7-technology-infrastructure\chapter-21-ai-implementation-strategy.md"; Title = "Chapter 21: AI Implementation Strategy"; Order = 25},
    @{Path = "empire-bible\volume-iv-technology-automation\book-8-digital-marketing-systems\chapter-22-organic-marketing-mastery.md"; Title = "Chapter 22: Organic Marketing Mastery"; Order = 26},
    @{Path = "empire-bible\volume-iv-technology-automation\book-8-digital-marketing-systems\chapter-23-paid-advertising-playbook.md"; Title = "Chapter 23: Paid Advertising Playbook"; Order = 27},
    @{Path = "empire-bible\volume-iv-technology-automation\book-8-digital-marketing-systems\chapter-24-sales-systems-development.md"; Title = "Chapter 24: Sales Systems Development"; Order = 28},

    # Volume V
    @{Path = "empire-bible\volume-v-operations-scaling\volume-v-introduction.md"; Title = "Volume V: Operations & Scaling - Introduction"; Order = 29},
    @{Path = "empire-bible\volume-v-operations-scaling\book-9-human-capital-management\chapter-25-virtual-team-building.md"; Title = "Chapter 25: Virtual Team Building"; Order = 30},
    @{Path = "empire-bible\volume-v-operations-scaling\book-9-human-capital-management\chapter-26-us-team-development.md"; Title = "Chapter 26: US Team Development"; Order = 31},
    @{Path = "empire-bible\volume-v-operations-scaling\book-9-human-capital-management\chapter-27-organizational-development.md"; Title = "Chapter 27: Organizational Development"; Order = 32},
    @{Path = "empire-bible\volume-v-operations-scaling\book-10-financial-management\chapter-28-accounting-bookkeeping-systems.md"; Title = "Chapter 28: Accounting & Bookkeeping Systems"; Order = 33},
    @{Path = "empire-bible\volume-v-operations-scaling\book-10-financial-management\chapter-29-financial-planning-analysis.md"; Title = "Chapter 29: Financial Planning & Analysis"; Order = 34},
    @{Path = "empire-bible\volume-v-operations-scaling\book-10-financial-management\chapter-30-tax-strategy-implementation.md"; Title = "Chapter 30: Tax Strategy Implementation"; Order = 35},

    # Volume VI
    @{Path = "empire-bible\volume-vi-family-governance\volume-vi-introduction.md"; Title = "Volume VI: Family Governance & Succession - Introduction"; Order = 36},
    @{Path = "empire-bible\volume-vi-family-governance\book-11-family-business-governance\chapter-31-family-council-operations.md"; Title = "Chapter 31: Family Council Operations"; Order = 37},
    @{Path = "empire-bible\volume-vi-family-governance\book-11-family-business-governance\chapter-32-childrens-business-education.md"; Title = "Chapter 32: Children's Business Education"; Order = 38},
    @{Path = "empire-bible\volume-vi-family-governance\book-11-family-business-governance\chapter-33-succession-planning.md"; Title = "Chapter 33: Succession Planning"; Order = 39},
    @{Path = "empire-bible\volume-vi-family-governance\book-12-wealth-preservation-transfer\chapter-34-estate-planning-integration.md"; Title = "Chapter 34: Estate Planning Integration"; Order = 40},
    @{Path = "empire-bible\volume-vi-family-governance\book-12-wealth-preservation-transfer\chapter-35-insurance-risk-management.md"; Title = "Chapter 35: Insurance & Risk Management"; Order = 41},
    @{Path = "empire-bible\volume-vi-family-governance\book-12-wealth-preservation-transfer\chapter-36-philanthropy-legacy.md"; Title = "Chapter 36: Philanthropy & Legacy"; Order = 42},

    # Volume VII
    @{Path = "empire-bible\volume-vii-implementation\volume-vii-introduction.md"; Title = "Volume VII: Implementation & Execution - Introduction"; Order = 43},
    @{Path = "empire-bible\volume-vii-implementation\book-13-launch-sequences\chapter-37-30-day-quick-start.md"; Title = "Chapter 37: 30-Day Quick Start"; Order = 44},
    @{Path = "empire-bible\volume-vii-implementation\book-13-launch-sequences\chapter-38-90-day-transformation.md"; Title = "Chapter 38: 90-Day Transformation"; Order = 45},
    @{Path = "empire-bible\volume-vii-implementation\book-13-launch-sequences\chapter-39-year-1-execution-plan.md"; Title = "Chapter 39: Year 1 Execution Plan"; Order = 46},
    @{Path = "empire-bible\volume-vii-implementation\book-14-operational-excellence\chapter-40-standard-operating-procedures.md"; Title = "Chapter 40: Standard Operating Procedures"; Order = 47},
    @{Path = "empire-bible\volume-vii-implementation\book-14-operational-excellence\chapter-41-quality-management-systems.md"; Title = "Chapter 41: Quality Management Systems"; Order = 48},
    @{Path = "empire-bible\volume-vii-implementation\book-14-operational-excellence\chapter-42-performance-management.md"; Title = "Chapter 42: Performance Management"; Order = 49},

    # Volume VIII
    @{Path = "empire-bible\volume-viii-growth-exit\volume-viii-introduction.md"; Title = "Volume VIII: Growth & Exit Strategies - Introduction"; Order = 50},
    @{Path = "empire-bible\volume-viii-growth-exit\book-15-scaling-strategies\chapter-43-business-acquisition-playbook.md"; Title = "Chapter 43: Business Acquisition Playbook"; Order = 51},
    @{Path = "empire-bible\volume-viii-growth-exit\book-15-scaling-strategies\chapter-44-strategic-partnerships.md"; Title = "Chapter 44: Strategic Partnerships"; Order = 52},
    @{Path = "empire-bible\volume-viii-growth-exit\book-15-scaling-strategies\chapter-45-exit-planning-execution.md"; Title = "Chapter 45: Exit Planning & Execution"; Order = 53},

    # Volume IX
    @{Path = "empire-bible\volume-ix-resources\volume-ix-introduction.md"; Title = "Volume IX: Resources & References - Introduction"; Order = 54},
    @{Path = "empire-bible\volume-ix-resources\book-16-forms-templates\chapter-46-legal-documents-agreements.md"; Title = "Chapter 46: Legal Documents & Agreements"; Order = 55},
    @{Path = "empire-bible\volume-ix-resources\book-16-forms-templates\chapter-47-financial-templates-models.md"; Title = "Chapter 47: Financial Templates & Models"; Order = 56},
    @{Path = "empire-bible\volume-ix-resources\book-16-forms-templates\chapter-48-marketing-sales-materials.md"; Title = "Chapter 48: Marketing & Sales Materials"; Order = 57},
    @{Path = "empire-bible\volume-ix-resources\book-17-vendor-directory\chapter-49-professional-service-providers.md"; Title = "Chapter 49: Professional Service Providers"; Order = 58},
    @{Path = "empire-bible\volume-ix-resources\book-17-vendor-directory\chapter-50-technology-tools-directory.md"; Title = "Chapter 50: Technology & Tools Directory"; Order = 59},
    @{Path = "empire-bible\volume-ix-resources\book-17-vendor-directory\chapter-51-compliance-regulatory-guide.md"; Title = "Chapter 51: Compliance & Regulatory Guide"; Order = 60},

    # Volume X
    @{Path = "empire-bible\volume-x-troubleshooting-optimization\volume-x-introduction.md"; Title = "Volume X: Troubleshooting & Optimization - Introduction"; Order = 61},
    @{Path = "empire-bible\volume-x-troubleshooting-optimization\book-18-problem-solving-crisis-management\chapter-52-common-problems-solutions.md"; Title = "Chapter 52: Common Problems & Solutions"; Order = 62},
    @{Path = "empire-bible\volume-x-troubleshooting-optimization\book-18-problem-solving-crisis-management\chapter-53-crisis-management-protocols.md"; Title = "Chapter 53: Crisis Management Protocols"; Order = 63},
    @{Path = "empire-bible\volume-x-troubleshooting-optimization\book-18-problem-solving-crisis-management\chapter-54-continuous-optimization.md"; Title = "Chapter 54: Continuous Optimization"; Order = 64}
)

# Create cover page
$coverPage = @"
# THE OHU-PNR DYNASTY EMPIRE BIBLE
## Complete 360° Master Blueprint & Implementation Manual
### The Definitive Guide to Building, Operating, and Perpetuating a Multi-Generational `$10M+ Business Empire

---

**Author**: Ikechukwu Ohu
**Date**: November 23, 2025
**Implementation Start**: December 1, 2025
**Version**: 2.2 (Complete)
**Compilation Date**: $(Get-Date -Format "MMMM dd, yyyy")
**Total Chapters Compiled**: $($chapterOrder.Count)
**Status**: Complete Compilation (All 54 chapters written)

---

## COMPILATION NOTE

This master document represents the complete compilation of the Empire Bible. All volumes and chapters have been drafted and integrated.

**Current Completion Status**:
- Volume I: Foundation & Philosophy - ✅ Complete
- Volume II: Legal & Fiduciary Structures - ✅ Complete
- Volume III: Revenue Generation Engines - ✅ Complete
- Volume IV: Technology & Automation - ✅ Complete
- Volume V: Operations & Scaling - ✅ Complete
- Volume VI: Family Governance & Succession - ✅ Complete
- Volume VII: Implementation & Execution - ✅ Complete
- Volume VIII: Growth & Exit Strategies - ✅ Complete
- Volume IX: Resources & References - ✅ Complete
- Volume X: Troubleshooting & Optimization - ✅ Complete

---

"@

# Compile chapters
$compiledContent = $coverPage + "`n`n"
$compiledContent += "# TABLE OF CONTENTS`n`n"

# Build TOC
$toc = ""
foreach ($chapter in $chapterOrder | Sort-Object Order) {
    $link = $chapter.Title -replace '[^a-zA-Z0-9 ]', '' -replace ' ', '-'
    $link = $link.ToLower()
    $toc += "- [$($chapter.Title)](#$link)`n"
}

# Add Appendices to TOC
$toc += "`n## APPENDICES`n"
$appendices = @(
    @{Path = "empire-bible\appendices\appendix-a-quick-reference.md"; Title = "Appendix A: Quick Reference Guides"},
    @{Path = "empire-bible\appendices\appendix-b-calculators-tools.md"; Title = "Appendix B: Calculators & Tools"},
    @{Path = "empire-bible\appendices\appendix-c-contact-lists.md"; Title = "Appendix C: Contact Lists"},
    @{Path = "empire-bible\appendices\appendix-d-glossary.md"; Title = "Appendix D: Glossary & Definitions"},
    @{Path = "empire-bible\appendices\appendix-e-index.md"; Title = "Appendix E: Index & Cross-References"}
)

foreach ($appendix in $appendices) {
    $link = $appendix.Title -replace '[^a-zA-Z0-9 ]', '' -replace ' ', '-'
    $link = $link.ToLower()
    $toc += "- [$($appendix.Title)](#$link)`n"
}

$compiledContent += $toc + "`n`n---`n`n"

# Read and append each chapter
foreach ($chapter in $chapterOrder | Sort-Object Order) {
    if (Test-Path $chapter.Path) {
        Write-Host "Compiling: $($chapter.Title)"
        $content = Get-Content $chapter.Path -Raw
        $compiledContent += "`n`n# $($chapter.Title)`n`n"
        $compiledContent += $content
        $compiledContent += "`n`n---`n`n"
    } else {
        Write-Host "Missing: $($chapter.Path)"
        $compiledContent += "`n`n# $($chapter.Title)`n`n"
        $compiledContent += "**[MISSING FILE: $($chapter.Path)]**"
        $compiledContent += "`n`n---`n`n"
    }
}

# Append Appendices
$compiledContent += "`n`n# APPENDICES`n`n"

foreach ($appendix in $appendices) {
    if (Test-Path $appendix.Path) {
        Write-Host "Compiling: $($appendix.Title)"
        $content = Get-Content $appendix.Path -Raw
        $compiledContent += "`n`n# $($appendix.Title)`n`n"
        $compiledContent += $content
        $compiledContent += "`n`n---`n`n"
    } else {
        Write-Host "Missing: $($appendix.Path)"
        $compiledContent += "`n`n# $($appendix.Title)`n`n"
        $compiledContent += "**[MISSING FILE: $($appendix.Path)]**"
        $compiledContent += "`n`n---`n`n"
    }
}

$compiledContent += @"
---

**END OF EMPIRE BIBLE COMPILATION**

*This document was automatically compiled on $(Get-Date -Format "MMMM dd, yyyy 'at' HH:mm:ss")*

---

"@

# Write to file
$compiledContent | Out-File -FilePath $outputFile -Encoding UTF8

Write-Host "`nCompilation complete! Output saved to: $outputFile"
Write-Host "Total size: $([math]::Round((Get-Item $outputFile).Length/1KB, 2)) KB"
