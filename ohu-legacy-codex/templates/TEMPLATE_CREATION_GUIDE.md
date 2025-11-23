# Template Creation Guide

## Overview

This guide provides systematic instructions for creating the remaining 1,000+ templates for the Legacy Codex. Use this guide to ensure consistency, completeness, and quality across all templates.

## Template Creation Process

### Step 1: Identify Template Need

1. Review the Template Index (`TEMPLATE_INDEX.md`)
2. Identify missing templates
3. Prioritize by:
   - Frequency of use
   - Criticality to operations
   - Dependencies (templates needed by other templates)
   - Chapter references in Empire Book

### Step 2: Research and Gather Information

1. Review Empire Book Outline for requirements
2. Review existing similar templates for consistency
3. Research industry standards and best practices
4. Review source materials (if available)
5. Consult subject matter experts (if needed)

### Step 3: Create Template Structure

Every template must include:

```markdown
# [Template Name]

## Purpose
[Clear statement of what the template is for and when to use it]

## Instructions
[Step-by-step instructions for using the template]

## Template
[The actual fillable template with [FIELD NAME] placeholders]

## Example
[Example filled version - optional but recommended]

## Notes
[Additional considerations, warnings, or best practices]

---
**Version**: X.X
**Last Updated**: [DATE]
**Next Review**: [DATE]
```

### Step 4: Define Fields

For each `[FIELD NAME]` placeholder:

1. **Name Clearly**: Use descriptive, unambiguous names
2. **Provide Context**: Include field descriptions where helpful
3. **Specify Format**: Indicate expected format (date, currency, text, etc.)
4. **Mark Required**: Clearly mark required vs. optional fields
5. **Provide Examples**: Include example values where helpful

### Step 5: Add Instructions

Instructions should be:

- **Clear**: Easy to understand
- **Sequential**: Step-by-step process
- **Complete**: Cover all necessary steps
- **Actionable**: Specific actions, not vague guidance
- **Numbered**: Use numbered lists for sequential steps

### Step 6: Include Examples

Where helpful, include:

- **Filled Example**: Show template with sample data
- **Multiple Scenarios**: Different use cases if applicable
- **Common Mistakes**: What to avoid
- **Best Practices**: Tips for effective use

### Step 7: Quality Review

Before finalizing:

- [ ] All placeholders are clearly defined
- [ ] Instructions are complete and clear
- [ ] Template follows standard format
- [ ] No placeholders remain undefined
- [ ] Example is accurate (if included)
- [ ] Notes are helpful and relevant
- [ ] Version information is included
- [ ] File is saved in correct directory

## Template Categories and Standards

### Legal Templates

**Standards**:
- Must include legal disclaimer
- Must reference need for attorney review
- Must comply with applicable laws
- Must include execution requirements
- Must include signature blocks

**Common Sections**:
- Recitals
- Definitions
- Main provisions
- General provisions
- Signatures
- Schedules/Exhibits

### Financial Templates

**Standards**:
- Must include accounting method (cash/accrual)
- Must include period/date fields
- Must include calculation formulas
- Must include variance analysis (where applicable)
- Must reference accounting standards

**Common Sections**:
- Header information
- Revenue/Income
- Expenses/Costs
- Calculations
- Summary/Totals
- Notes/Comments

### Operational Templates

**Standards**:
- Must include purpose and scope
- Must include responsibilities
- Must include step-by-step process
- Must include quality standards
- Must include escalation procedures

**Common Sections**:
- Purpose
- Scope
- Responsibilities
- Process Steps
- Quality Standards
- Tools/Resources
- Escalation

### Marketing Templates

**Standards**:
- Must include purpose and use case
- Must include customization instructions
- Must include best practices
- Must include follow-up guidance
- Must be brand-consistent

**Common Sections**:
- Purpose
- Instructions
- Template
- Example
- Variations
- Best Practices
- Follow-Up

## Field Naming Conventions

### Standard Field Formats

- **Dates**: `[DATE]` or `[MONTH], [YEAR]` or `[EFFECTIVE DATE]`
- **Names**: `[NAME]` or `[FIRST NAME]` `[LAST NAME]` or `[CLIENT NAME]`
- **Amounts**: `$[AMOUNT]` or `[AMOUNT]` (specify currency if not USD)
- **Percentages**: `[PERCENTAGE]%` or `[PERCENTAGE]`
- **Addresses**: `[ADDRESS]` or break down: `[STREET]`, `[CITY]`, `[STATE]`, `[ZIP]`
- **Phone**: `[PHONE]` or `[PHONE NUMBER]`
- **Email**: `[EMAIL]` or `[EMAIL ADDRESS]`
- **Entity Names**: `[ENTITY NAME]` or `[COMPANY NAME]` or `[LLC NAME]`
- **EIN/SSN**: `[EIN]` or `[SSN]` (be careful with SSN - avoid if possible)

### Context-Specific Fields

- **Legal**: `[SETTLOR NAME]`, `[TRUSTEE NAME]`, `[BENEFICIARY NAME]`
- **Financial**: `[REVENUE AMOUNT]`, `[EXPENSE AMOUNT]`, `[NET INCOME]`
- **Operational**: `[PROCESS NAME]`, `[RESPONSIBLE PARTY]`, `[DUE DATE]`
- **Marketing**: `[CLIENT NAME]`, `[SERVICE NAME]`, `[CAMPAIGN NAME]`

## Directory Structure

Templates must be saved in the correct directory:

```
templates/
â”œâ”€â”€ legal/
â”‚   â”œâ”€â”€ trusts/
â”‚   â”œâ”€â”€ entities/
â”‚   â”œâ”€â”€ real-estate/
â”‚   â””â”€â”€ contracts/
â”œâ”€â”€ financial/
â”‚   â”œâ”€â”€ statements/
â”‚   â”œâ”€â”€ budgets/
â”‚   â”œâ”€â”€ forecasts/
â”‚   â””â”€â”€ tax/
â”œâ”€â”€ operational/
â”‚   â”œâ”€â”€ sops/
â”‚   â”œâ”€â”€ workflows/
â”‚   â””â”€â”€ processes/
â””â”€â”€ marketing/
    â”œâ”€â”€ emails/
    â”œâ”€â”€ scripts/
    â””â”€â”€ proposals/
```

## File Naming Conventions

- **Format**: `[template-name].md`
- **Use lowercase**: All lowercase letters
- **Use hyphens**: Separate words with hyphens (not underscores or spaces)
- **Be descriptive**: Name should clearly indicate template purpose
- **Examples**:
  - `dynasty-trust-template.md` âœ“
  - `profit-loss-monthly.md` âœ“
  - `sop-client-onboarding.md` âœ“
  - `email-client-welcome.md` âœ“

## Version Control

Every template must include:

```markdown
---
**Version**: X.X
**Last Updated**: [DATE]
**Next Review**: [DATE]
```

- **Version**: Start at 1.0, increment for major changes
- **Last Updated**: Date template was last modified
- **Next Review**: Date for next scheduled review (typically 1 year)

## Quality Checklist

Before marking a template complete:

- [ ] Template follows standard format
- [ ] Purpose is clearly stated
- [ ] Instructions are complete
- [ ] All fields are clearly defined
- [ ] No undefined placeholders remain
- [ ] Example is included (where helpful)
- [ ] Notes provide helpful guidance
- [ ] Version information included
- [ ] File saved in correct directory
- [ ] File name follows conventions
- [ ] Template added to index
- [ ] Legal disclaimer included (for legal templates)
- [ ] Reviewed for accuracy and completeness

## Batch Creation Strategy

To efficiently create 1,000+ templates:

1. **Create by Category**: Complete one category before moving to next
2. **Start with Most Critical**: Prioritize frequently-used templates
3. **Use Templates**: Create templates from existing similar templates
4. **Batch Similar**: Group similar templates together
5. **Review in Batches**: Review multiple templates at once
6. **Update Index**: Update index as templates are created

## Template Dependencies

Some templates depend on others:

- **Legal Templates**: May reference other legal templates
- **Financial Templates**: May build on base statement templates
- **Operational Templates**: May reference checklist templates
- **Marketing Templates**: May reference other marketing templates

Create base templates first, then dependent templates.

## Common Template Patterns

### Agreement Templates

```markdown
# [AGREEMENT NAME]

## PARTIES
[Party 1]
[Party 2]

## RECITALS
WHEREAS...

## ARTICLE I: [TOPIC]
### Section 1.1: [Subsection]
...

## SIGNATURES
[Signature blocks]
```

### Form Templates

```markdown
# [FORM NAME]

**Date**: [DATE]
**Entity**: [ENTITY NAME]

## [SECTION 1]
[Fields and checkboxes]

## [SECTION 2]
[Fields and checkboxes]

**Signature**: _______________
**Date**: _______________
```

### Checklist Templates

```markdown
# [CHECKLIST NAME]

## [CATEGORY 1]
- [ ] Item 1
- [ ] Item 2

## [CATEGORY 2]
- [ ] Item 1
- [ ] Item 2
```

### SOP Templates

```markdown
# SOP: [PROCESS NAME]

## Purpose
## Scope
## Responsibilities
## Process Steps
### Step 1: [Description]
- [ ] Action item
## Quality Standards
## Tools and Resources
```

## Updating the Index

After creating templates:

1. Open `TEMPLATE_INDEX.md`
2. Find appropriate section
3. Add template entry:
   - File name
   - Brief description
   - Link (if applicable)
4. Update statistics
5. Save index

## Maintenance Schedule

- **Monthly**: Review templates created that month
- **Quarterly**: Review template usage and update as needed
- **Annually**: Comprehensive review of all templates
- **As Needed**: Update templates when laws/regulations change

## Getting Help

If stuck on a template:

1. Review similar existing templates
2. Check Empire Book Outline for requirements
3. Research industry standards
4. Consult subject matter experts
5. Review source materials

---

**Version**: 1.0  
**Last Updated**: [DATE]  
**Next Review**: [DATE + 1 YEAR]

---

*This guide is version 1.0 and was created for the Legacy Codex.*


