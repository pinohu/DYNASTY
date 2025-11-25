# Fix Placeholders Script
# Propagates family details to Chapter 4 and Appendix C

$chapter4Path = "ohu-legacy-codex/volume-ii-legal-fiduciary/book-2-legacy-trust/chapter-4-south-dakota-legacy-trust.md"
$appendixCPath = "ohu-legacy-codex/appendices/appendix-c-contact-lists.md"

# --- Update Chapter 4 ---
$c4 = Get-Content $chapter4Path -Raw

# Introduction Replacement
$c4 = $c4 -replace "\[Beneficiary 1\], \[Beneficiary 2\], \[Beneficiary 3\], and Ikechukwu Polycarp Nnamdi Ohu \[Primary Principal\]", "Ivan Osemeke Ohu, Jeremy Chiwuikem Ohu, Kikachukwu Theodore Ohu, Chimenime Xavier Ikechukwu Ohu, and Ikechukwu Polycarp Nnamdi Ohu"

# Beneficiary Identification Section
$beneficiaryBlock = @"
The primary beneficiaries of this trust are:
- Ivan Osemeke Ohu
- Jeremy Chiwuikem Ohu
- Kikachukwu Theodore Ohu
- Chimenime Xavier Ikechukwu Ohu
- Ikechukwu Polycarp Nnamdi Ohu

Future beneficiaries include descendants of the primary 
beneficiaries, per stirpes.
"@

# Regex to find the placeholder block (approximate match)
$c4 = $c4 -replace "(?ms)The primary beneficiaries of this trust are:.*?\[Beneficiary 3\].*?\[Primary Principal\].*?per stirpes\.", $beneficiaryBlock

# Specific Scenarios
$c4 = $c4 -replace "\[Beneficiary 2\]", "Jeremy Chiwuikem Ohu"
$c4 = $c4 -replace "\[Beneficiary 3\]", "Kikachukwu Theodore Ohu"
$c4 = $c4 -replace "\[Principal Names\]", "Ikechukwu Polycarp Nnamdi Ohu and Judith Huchukwuyem Ohu"
$c4 = $c4 -replace "\[Your Dynasty Trust\]", "The Ohu Family Dynasty Trust"
$c4 = $c4 -replace "\[Investment Advisor Name\]", "Ikechukwu Polycarp Nnamdi Ohu (Initial)"
$c4 = $c4 -replace "\[EIN\]", "To Be Assigned"

# Save Chapter 4
$c4 | Set-Content $chapter4Path -Encoding UTF8
Write-Host "Updated Chapter 4 with family details."

# --- Update Appendix C ---
$ac = Get-Content $appendixCPath -Raw

# Add Instructions
$instructions = @"
## Instructions
This Appendix is a living document. **PRINT THIS OUT** and keep a physical copy in your safe.
- **Red Fields**: Critical emergency numbers. Fill these immediately.
- **Update Frequency**: Review and update this list Quarterly (Jan, Apr, Jul, Oct).
- **Digital Access**: Ensure your spouse and Successor Trustee have access to the digital version.

"@

$ac = $ac -replace "## Introduction", "## Introduction`n`n$instructions"

# Pre-fill Recommendations
$ac = $ac -replace "\[Local Hospital\]", "_________________________"
$ac = $ac -replace "\[Phone\]", "_________________________"
$ac = $ac -replace "\[Address\]", "_________________________"

# Trust Officer
$ac = $ac -replace "\[Name\]", "South Dakota Trust Company"
$ac = $ac -replace "Dynasty Trust Admin", "Primary Administrative Trustee"

# CRM
$ac = $ac -replace "\[ID\]", "Admin Account"
$ac = $ac -replace "\[Support Link\]", "help.suitedash.com"

# Save Appendix C
$ac | Set-Content $appendixCPath -Encoding UTF8
Write-Host "Updated Appendix C with instructions and recommendations."




