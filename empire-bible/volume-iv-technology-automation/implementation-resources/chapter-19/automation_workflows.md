# SuiteDash Automation Workflows

## Automation 1: Value Equation Calculator

**Template Name:** "Value Equation Calculator"

**Trigger:** Contact Created/Updated

**Conditions:**
- Dream_Outcome_Score is not empty
- Likelihood_Score is not empty
- Time_Delay_Days is not empty
- Effort_Score is not empty

**Actions:**
1. Calculate Value: `((Dream_Outcome_Score × Likelihood_Score) / (Time_Delay_Days × Effort_Score)) × 10`
2. Update Contact → Calculated_Value field with calculated result
3. If Calculated_Value > 7:
   - Add to Circle "High-Value Prospects"
   - Send Internal Notification → Assigned Sales Rep
   - Create Task: "Follow up with high-value prospect within 24 hours"
4. If Calculated_Value < 3:
   - Add to Circle "Low-Value Prospects"
   - Add to Nurture Sequence "Low-Value Lead Nurture"
5. Save Automation

## Automation 2: Lead Scoring Engine

**Template Name:** "Lead Scoring Engine"

**Trigger:** Contact Created/Updated

**Scoring Logic:**
- Base Score: 0
- If Company_Size = "201-1000 employees": +20 points
- If Company_Size = "1000+ employees": +30 points
- If Budget_Authority = "Decision Maker": +25 points
- If Budget_Authority = "Strong Influence": +15 points
- If Engagement_Level = "High Engagement": +20 points
- If Engagement_Level = "Medium Engagement": +10 points
- If Lead_Source_Primary = "Referral": +15 points
- If Lead_Source_Primary = "Website Form": +10 points
- If Calculated_Value > 7: +15 points

**Actions:**
1. Calculate total Lead_Score
2. Update Contact → Lead_Score field
3. If Lead_Score >= 70:
   - Add to Circle "Hot Leads"
   - Assign to Senior Sales Rep
   - Create Deal in "High-Value Sales" pipeline
   - Send notification to sales team
4. If Lead_Score >= 50 and Lead_Score < 70:
   - Add to Circle "Warm Leads"
   - Assign to Sales Rep
   - Add to nurture sequence
5. If Lead_Score < 50:
   - Add to Circle "Cold Leads"
   - Add to long-term nurture sequence
   - Schedule follow-up in 30 days

## Automation 3: New Lead Welcome Sequence

**Template Name:** "New Lead Welcome"

**Trigger:** Contact Created

**Conditions:**
- Lead_Source_Primary is not empty
- Email address is valid

**Actions:**
1. Send Email: "Welcome Email Template" (immediately)
2. Add to Circle: "New Leads"
3. Create Task: "Qualify new lead within 48 hours" (assign to sales rep)
4. Schedule Email: "Value Proposition Email" (send in 24 hours)
5. Schedule Email: "Case Study Email" (send in 72 hours)
6. If Lead_Source_Primary = "Website Form":
   - Send Email: "Thank you for downloading [resource]"
   - Add to Circle: "Website Leads"
7. If Lead_Source_Primary = "Referral":
   - Send Email: "Thank you for referral from [referrer]"
   - Create Task: "Send thank you to referrer"
   - Add to Circle: "Referral Leads"

## Automation 4: Deal Stage Progression

**Template Name:** "Deal Stage Automation"

**Trigger:** Deal Stage Changed

**Actions by Stage:**

**Stage: CLARIFY (10% probability)**
- Create Task: "Schedule discovery call" (due in 2 days)
- Send Email: "Pre-Call Research Template"
- Update Deal → Required Fields: Primary_Pain_Point, Desired_Outcome

**Stage: LABEL (20% probability)**
- Create Task: "Document problem label" (due immediately)
- Send Email: "Problem Confirmation Template"
- Update Deal → Required Fields: Problem_Label, Impact_Level

**Stage: OVERVIEW (35% probability)**
- Create Task: "Document past attempts" (due in 1 day)
- Send Email: "Pain Cycle Analysis Template"
- Update Deal → Required Fields: Previous_Solutions_Tried, Failure_Reasons

**Stage: SELL (50% probability)**
- Create Task: "Schedule demo/presentation" (due in 3 days)
- Send Email: "Demo Preparation Template"
- Update Deal → Required Fields: Demo_Date, Stakeholders_Present

**Stage: EXPLAIN (70% probability)**
- Create Task: "Send proposal" (due immediately)
- Generate Proposal from Template
- Send Email: "Proposal Delivery Template"
- Schedule Follow-up: "Proposal follow-up" (in 48 hours)

**Stage: REINFORCE (90% probability)**
- Create Task: "Finalize contract terms" (due immediately)
- Send Email: "Closing Template"
- If Deal Won:
  - Create Project from Template
  - Send Onboarding Email Sequence
  - Add to Circle: "Active Clients"
  - Create Invoice for Initial Payment

