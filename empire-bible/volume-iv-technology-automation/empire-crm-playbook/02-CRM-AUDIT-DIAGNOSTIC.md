# Empire Dynasty CRM Audit Diagnostic
## Complete Assessment Tool for Your Current CRM

---

## 📋 How to Use This Audit

**Time Required**: 2-4 hours (depending on CRM complexity)

**Process**:
1. Go through each section
2. Answer all questions
3. Score each area (1-10)
4. Document findings
5. Prioritize fixes using the Impact/Effort Matrix
6. Create your punch list

**Who Should Do This**: CRM Admin, Operations Manager, or Owner

---

## 🎯 Audit Overview

### Pre-Audit Information

**CRM Platform**: _______________________
**Date of Audit**: _______________________
**Auditor Name**: _______________________
**Team Size**: _______________________
**Monthly Revenue**: $_______________________

---

## 1. STRUCTURAL ANALYSIS

### 1.1 Data Model Review

#### Contact/Lead Structure
- [ ] **Contacts have required fields**: Name, Email, Phone, Source
- [ ] **Custom fields are organized logically**
- [ ] **No duplicate fields** (e.g., "Email" and "Email Address")
- [ ] **Fields are properly typed** (text, number, date, dropdown)
- [ ] **Required vs. optional fields are clear**

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

#### Deal/Opportunity Structure
- [ ] **Deals have required fields**: Name, Value, Stage, Owner, Close Date
- [ ] **Deal stages match your sales process**
- [ ] **Deal value is accurate** (not $0 or placeholder)
- [ ] **Deal source is tracked**
- [ ] **Deal probability is set** (if using weighted pipeline)

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

#### Company/Account Structure
- [ ] **Companies are linked to contacts**
- [ ] **Company data is complete** (industry, size, revenue)
- [ ] **Multiple contacts per company are tracked**
- [ ] **Parent/child company relationships** (if applicable)

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

### 1.2 Pipeline Architecture

#### Pipeline Structure
- [ ] **Number of pipelines matches business model** (not too many, not too few)
- [ ] **Pipeline stages are clearly defined**
- [ ] **Stage names are consistent** (not "Qualified" in one, "Qualified Lead" in another)
- [ ] **Stages are in correct order**
- [ ] **No "junk" stages** (e.g., "Test", "Old", "Do Not Use")

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

#### Stage Definitions
- [ ] **Each stage has clear entry criteria**
- [ ] **Each stage has clear exit criteria**
- [ ] **SLAs are defined for each stage**
- [ ] **Required actions per stage are documented**
- [ ] **Team understands stage definitions**

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

### 1.3 Data Quality

#### Data Completeness
- [ ] **>90% of contacts have email addresses**
- [ ] **>80% of contacts have phone numbers**
- [ ] **>70% of deals have accurate values**
- [ ] **>90% of deals have owners assigned**
- [ ] **>80% of deals have close dates**

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

#### Data Accuracy
- [ ] **No duplicate contacts** (or duplicates are minimal)
- [ ] **No duplicate deals**
- [ ] **Email addresses are valid format**
- [ ] **Phone numbers are formatted consistently**
- [ ] **Dates are accurate** (not future dates for past events)

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

#### Data Hygiene
- [ ] **Inactive/old records are archived**
- [ ] **Test data is removed**
- [ ] **Spam/obvious fake leads are deleted**
- [ ] **Data is regularly cleaned** (monthly/quarterly)

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

## 2. PIPELINE HEALTH ASSESSMENT

### 2.1 Pipeline Metrics

#### Current Pipeline Value
**Total Pipeline**: $_______________________
**Weighted Pipeline**: $_______________________
**Number of Deals**: _______________________
**Average Deal Size**: $_______________________

**Is this healthy?** (Compare to monthly revenue target)
- [ ] Yes (pipeline = 3-5x monthly revenue)
- [ ] No (too low or too high)

**Score (1-10)**: ___

---

#### Stage Distribution
**Deals by Stage**:
- Stage 1: ___ deals ($___)
- Stage 2: ___ deals ($___)
- Stage 3: ___ deals ($___)
- Stage 4: ___ deals ($___)
- Stage 5: ___ deals ($___)
- Stage 6+: ___ deals ($___)

**Issues**:
- [ ] Too many deals in early stages (funnel top-heavy)
- [ ] Too many deals in late stages (bottleneck)
- [ ] Deals stuck in middle stages
- [ ] Distribution looks healthy

**Score (1-10)**: ___

---

### 2.2 Conversion Analysis

#### Stage-to-Stage Conversion Rates

**Calculate conversion rate for each stage transition**:

Stage 1 → Stage 2: ___% (___ deals moved / ___ deals entered)
Stage 2 → Stage 3: ___% (___ deals moved / ___ deals entered)
Stage 3 → Stage 4: ___% (___ deals moved / ___ deals entered)
Stage 4 → Stage 5: ___% (___ deals moved / ___ deals entered)
Stage 5 → Won: ___% (___ deals won / ___ deals entered)

**Issues**:
- [ ] Conversion rate <50% at any stage (investigate)
- [ ] Conversion rate >90% at any stage (may be too easy)
- [ ] Significant drop-off at specific stage (bottleneck)

**Score (1-10)**: ___

---

#### Overall Conversion Rate
**Leads to Customers**: ___% (___ customers / ___ leads)
**Industry Benchmark**: ___% (research your industry)

**Is this healthy?**
- [ ] Yes (meets or exceeds benchmark)
- [ ] No (below benchmark)

**Score (1-10)**: ___

---

### 2.3 Velocity Analysis

#### Average Days in Each Stage

Stage 1: ___ days
Stage 2: ___ days
Stage 3: ___ days
Stage 4: ___ days
Stage 5: ___ days
**Total Time to Close**: ___ days

**Compare to SLAs**:
- [ ] All stages within SLA
- [ ] Some stages exceed SLA (identify which)
- [ ] No SLAs defined (create them)

**Score (1-10)**: ___

---

#### Deal Age Analysis
**Oldest Deal in Pipeline**: ___ days old
**Deals >90 days old**: ___ deals
**Deals >180 days old**: ___ deals

**Issues**:
- [ ] Many old deals (may be dead)
- [ ] Old deals need review/cleanup
- [ ] Old deals are legitimate (long sales cycle)

**Score (1-10)**: ___

---

## 3. LEAD FLOW & CONVERSION BOTTLENECKS

### 3.1 Lead Capture

#### Lead Sources
**Top 5 Lead Sources**:
1. _______________________ (___ leads, ___% conversion)
2. _______________________ (___ leads, ___% conversion)
3. _______________________ (___ leads, ___% conversion)
4. _______________________ (___ leads, ___% conversion)
5. _______________________ (___ leads, ___% conversion)

**Issues**:
- [ ] Lead source not tracked consistently
- [ ] "Other" or "Unknown" is a top source (fix tracking)
- [ ] Low-quality sources getting most leads

**Score (1-10)**: ___

---

#### Lead Capture Process
- [ ] **Forms are connected to CRM** (leads auto-create)
- [ ] **Lead data is complete** (no missing fields)
- [ ] **Leads are assigned immediately**
- [ ] **Welcome email is sent automatically**
- [ ] **Lead scoring is working** (if implemented)

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

### 3.2 Lead Qualification

#### Qualification Criteria
- [ ] **Qualification criteria are defined**
- [ ] **Team follows qualification criteria**
- [ ] **Unqualified leads are disqualified quickly**
- [ ] **Qualified leads move to next stage promptly**

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

### 3.3 Bottleneck Identification

**Identify stages where deals get stuck**:

**Stage 1**: ___ deals stuck (avg. ___ days)
**Stage 2**: ___ deals stuck (avg. ___ days)
**Stage 3**: ___ deals stuck (avg. ___ days)
**Stage 4**: ___ deals stuck (avg. ___ days)
**Stage 5**: ___ deals stuck (avg. ___ days)

**Top 3 Bottlenecks**:
1. _______________________ (Reason: _______________________)
2. _______________________ (Reason: _______________________)
3. _______________________ (Reason: _______________________)

**Score (1-10)**: ___

---

## 4. AUTOMATION ERRORS & RISKS

### 4.1 Automation Inventory

**List all automations in your CRM**:

1. **Automation Name**: _______________________
   - **Trigger**: _______________________
   - **Actions**: _______________________
   - **Status**: Active / Inactive / Broken
   - **Last Tested**: _______________________

2. **Automation Name**: _______________________
   - **Trigger**: _______________________
   - **Actions**: _______________________
   - **Status**: Active / Inactive / Broken
   - **Last Tested**: _______________________

[Add more as needed]

---

### 4.2 Automation Health Check

#### Active Automations
- [ ] **All automations are documented**
- [ ] **Automations are tested regularly**
- [ ] **Error notifications are set up**
- [ ] **Automations have fallback rules**
- [ ] **No conflicting automations**

**Score (1-10)**: ___

---

#### Automation Errors
**Check automation logs for errors**:

**Errors Found**: ___ errors in last 30 days
**Most Common Error**: _______________________
**Impact**: _______________________

**Issues**:
- [ ] Many errors (automations need fixing)
- [ ] Errors not being monitored
- [ ] No error handling in place

**Score (1-10)**: ___

---

### 4.3 Automation Risks

**Identify risks**:
- [ ] **Automations send duplicate emails**
- [ ] **Automations assign to wrong people**
- [ ] **Automations move deals incorrectly**
- [ ] **Automations create duplicate records**
- [ ] **No manual override option**

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

## 5. OWNERSHIP & DELEGATION WEAKNESSES

### 5.1 Record Ownership

#### Deal Ownership
- [ ] **All deals have owners assigned**
- [ ] **Ownership is clear** (not "Unassigned" or "Team")
- [ ] **Ownership changes are tracked**
- [ ] **Fallback owners are defined**

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

#### Contact Ownership
- [ ] **All contacts have owners assigned**
- [ ] **Ownership makes sense** (not random assignment)
- [ ] **Ownership aligns with territory/routing rules**

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

### 5.2 Delegation & Handoffs

#### Handoff Process
- [ ] **Handoff process is documented**
- [ ] **Handoffs happen smoothly** (no dropped balls)
- [ ] **Handoff criteria are clear**
- [ ] **New owner is notified automatically**

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

#### Team Responsibilities
- [ ] **Roles are clearly defined**
- [ ] **Responsibilities don't overlap** (no confusion)
- [ ] **Fallback owners are assigned**
- [ ] **Team knows who owns what**

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

## 6. OFFER ALIGNMENT AUDIT

### 6.1 Offer → Pipeline Mapping

**For each offer, check alignment**:

#### Offer 1: _______________________
- [ ] Has dedicated pipeline OR uses correct pipeline
- [ ] Entry stage is correct
- [ ] Key stages match sales process
- [ ] Exit criteria are defined
- [ ] Automations are set up

**Score (1-10)**: ___

#### Offer 2: _______________________
- [ ] Has dedicated pipeline OR uses correct pipeline
- [ ] Entry stage is correct
- [ ] Key stages match sales process
- [ ] Exit criteria are defined
- [ ] Automations are set up

**Score (1-10)**: ___

[Add more offers as needed]

---

### 6.2 Revenue Tracking

#### Deal Value Accuracy
- [ ] **Deal values match actual offer prices**
- [ ] **Upsells/cross-sells are tracked**
- [ ] **Discounts are recorded**
- [ ] **Revenue is forecasted accurately**

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

## 7. SOP MATURITY SCORE

### 7.1 SOP Coverage

**Check which SOPs exist** (from [04-SOP-TEMPLATES-LIBRARY.md](./04-SOP-TEMPLATES-LIBRARY.md)):

- [ ] Discovery Call SOP
- [ ] Consultation SOP
- [ ] Proposal SOP
- [ ] Follow-Up Cadence SOP
- [ ] Negotiation & Closing SOP
- [ ] Onboarding SOP
- [ ] Renewal & Expansion SOP
- [ ] Automation QA SOP
- [ ] Data Hygiene SOP
- [ ] Weekly CRM Admin Review SOP

**SOPs Missing**: _______________________

**Score (1-10)**: ___

---

### 7.2 SOP Quality

- [ ] **SOPs are documented clearly**
- [ ] **SOPs are accessible to team**
- [ ] **Team follows SOPs**
- [ ] **SOPs are updated regularly**
- [ ] **SOPs include CRM steps**

**Score (1-10)**: ___

**Issues Found**:
```
[Document specific issues here]
```

**Fix Priority**: ___ (High/Medium/Low)

---

## 8. PRIORITIZED PUNCH LIST

### Impact/Effort Matrix

**Rate each issue**:
- **Impact**: High / Medium / Low (revenue impact)
- **Effort**: High / Medium / Low (time to fix)

### High Impact, Low Effort (Do First)

1. **Issue**: _______________________
   - **Impact**: High
   - **Effort**: Low
   - **Fix**: _______________________
   - **Owner**: _______________________
   - **Due Date**: _______________________

2. **Issue**: _______________________
   - **Impact**: High
   - **Effort**: Low
   - **Fix**: _______________________
   - **Owner**: _______________________
   - **Due Date**: _______________________

[Add more as needed]

---

### High Impact, High Effort (Plan & Execute)

1. **Issue**: _______________________
   - **Impact**: High
   - **Effort**: High
   - **Fix**: _______________________
   - **Owner**: _______________________
   - **Due Date**: _______________________

2. **Issue**: _______________________
   - **Impact**: High
   - **Effort**: High
   - **Fix**: _______________________
   - **Owner**: _______________________
   - **Due Date**: _______________________

[Add more as needed]

---

### Low Impact, Low Effort (Quick Wins)

1. **Issue**: _______________________
   - **Impact**: Low
   - **Effort**: Low
   - **Fix**: _______________________
   - **Owner**: _______________________
   - **Due Date**: _______________________

[Add more as needed]

---

### Low Impact, High Effort (Avoid/Delegate)

1. **Issue**: _______________________
   - **Impact**: Low
   - **Effort**: High
   - **Fix**: _______________________
   - **Owner**: _______________________
   - **Due Date**: _______________________

[Add more as needed]

---

## 9. OVERALL SCORES & SUMMARY

### Section Scores

1. **Structural Analysis**: ___ / 10
2. **Pipeline Health**: ___ / 10
3. **Lead Flow & Bottlenecks**: ___ / 10
4. **Automation Errors & Risks**: ___ / 10
5. **Ownership & Delegation**: ___ / 10
6. **Offer Alignment**: ___ / 10
7. **SOP Maturity**: ___ / 10

**Overall CRM Health Score**: ___ / 10

---

### Top 5 Priorities

1. _______________________
2. _______________________
3. _______________________
4. _______________________
5. _______________________

---

### Next Steps

1. **Immediate** (This Week):
   - [ ] _______________________
   - [ ] _______________________

2. **Short-Term** (This Month):
   - [ ] _______________________
   - [ ] _______________________

3. **Long-Term** (This Quarter):
   - [ ] _______________________
   - [ ] _______________________

---

## 📊 Audit Completion

**Audit Completed By**: _______________________
**Date**: _______________________
**Next Audit Scheduled**: _______________________

**Notes**:
```
[Any additional notes or observations]
```

---

## 🎯 Follow-Up Actions

1. **Share Results**: Present findings to team
2. **Create Action Plan**: Use punch list to create execution plan
3. **Assign Owners**: Assign each fix to an owner
4. **Set Deadlines**: Set realistic deadlines
5. **Schedule Review**: Schedule follow-up review in 30 days

---

*Use this audit quarterly to maintain CRM health and identify optimization opportunities.*

