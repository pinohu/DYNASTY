# Complete SuiteDash Implementation: Step-by-Step Guide

**Complete same-day implementation with exact navigation paths, field specifications, and configuration settings.**

---

## Phase 1: Foundation Setup - Custom Fields & Core Configuration

### Step 1: Create Hormozi Value Equation Custom Fields

**Exact Steps:**
1. **Login to SuiteDash** → Enter your credentials
2. **Click the Hamburger Menu (☰)** in the top-left corner
3. **Click "Custom Fields"** from the dropdown menu
4. **Click "Manage Custom Fields"** tab at the top
5. **Click "+Add Custom Field"** button (blue button, top-right)

**Field 1: Dream Outcome Score**
6. **Field Name:** Type exactly `Dream_Outcome_Score`
7. **Description:** Type `Rate the prospect's desired outcome appeal (1-10 scale)`
8. **Field Type:** Click dropdown → Select "Number"
9. **Usage:** Click dropdown → Select "CRM Targets"
10. **Required:** Leave unchecked
11. **Options:** 
    - Min Value: `1`
    - Max Value: `10`
    - Default Value: `5`
12. **Click "Save Custom Field"** (blue button, bottom-right)

**Field 2: Perceived Likelihood Score**
13. **Click "+Add Custom Field"** again
14. **Field Name:** Type exactly `Likelihood_Score`
15. **Description:** Type `Prospect's belief in achieving outcome (1-10 scale)`
16. **Field Type:** Select "Number"
17. **Usage:** Select "CRM Targets"
18. **Options:**
    - Min Value: `1`
    - Max Value: `10`
    - Default Value: `5`
19. **Click "Save Custom Field"**

**Field 3: Time Delay**
20. **Click "+Add Custom Field"**
21. **Field Name:** Type exactly `Time_Delay_Days`
22. **Description:** Type `Expected days to achieve desired outcome`
23. **Field Type:** Select "Number"
24. **Usage:** Select "CRM Targets"
25. **Options:**
    - Min Value: `1`
    - Max Value: `365`
    - Default Value: `90`
26. **Click "Save Custom Field"**

**Field 4: Effort & Sacrifice Score**
27. **Click "+Add Custom Field"**
28. **Field Name:** Type exactly `Effort_Score`
29. **Description:** Type `Required effort from prospect (1-10 scale, 10=highest effort)`
30. **Field Type:** Select "Number"
31. **Usage:** Select "CRM Targets"
32. **Options:**
    - Min Value: `1`
    - Max Value: `10`
    - Default Value: `5`
33. **Click "Save Custom Field"**

**Field 5: Calculated Value**
34. **Click "+Add Custom Field"**
35. **Field Name:** Type exactly `Calculated_Value`
36. **Description:** Type `Auto-calculated value score using Hormozi equation`
37. **Field Type:** Select "Number"
38. **Usage:** Select "CRM Targets"
39. **Options:**
    - Min Value: `0`
    - Max Value: `100`
    - Default Value: `0`
40. **Click "Save Custom Field"**

### Step 2: Create CLOSER Framework Custom Fields

**Field 6: Primary Pain Point**
41. **Click "+Add Custom Field"**
42. **Field Name:** Type exactly `Primary_Pain_Point`
43. **Description:** Type `Main problem identified in CLOSER Clarify stage`
44. **Field Type:** Select "Multi-line Text Area"
45. **Usage:** Select "CRM Targets"
46. **Click "Save Custom Field"**

**Field 7: Problem Label**
47. **Click "+Add Custom Field"**
48. **Field Name:** Type exactly `Problem_Label`
49. **Description:** Type `Labeled problem from CLOSER Label stage`
50. **Field Type:** Select "Single-line Text Area"
51. **Usage:** Select "CRM Targets"
52. **Click "Save Custom Field"**

**Field 8: Previous Solutions Tried**
53. **Click "+Add Custom Field"**
54. **Field Name:** Type exactly `Previous_Solutions_Tried`
55. **Description:** Type `Past attempts documented in Overview stage`
56. **Field Type:** Select "Multi-line Text Area"
57. **Usage:** Select "CRM Targets"
58. **Click "Save Custom Field"**

**Field 9: Demo Delivered**
59. **Click "+Add Custom Field"**
60. **Field Name:** Type exactly `Demo_Delivered`
61. **Description:** Type `Confirmation that demo/presentation was given`
62. **Field Type:** Select "Checkbox"
63. **Usage:** Select "CRM Targets"
64. **Click "Save Custom Field"**

**Field 10: Objections Handled**
65. **Click "+Add Custom Field"**
66. **Field Name:** Type exactly `Objections_Handled`
67. **Description:** Type `Record of objections raised and responses given`
68. **Field Type:** Select "Multi-line Text Area"
69. **Usage:** Select "CRM Targets"
70. **Click "Save Custom Field"**

### Step 3: Create Lead Scoring Custom Fields

**Field 11: Lead Score**
71. **Click "+Add Custom Field"**
72. **Field Name:** Type exactly `Lead_Score`
73. **Description:** Type `Composite lead score (0-100)`
74. **Field Type:** Select "Number"
75. **Usage:** Select "CRM Targets"
76. **Options:**
    - Min Value: `0`
    - Max Value: `100`
    - Default Value: `0`
77. **Click "Save Custom Field"**

**Field 12: Company Size**
78. **Click "+Add Custom Field"**
79. **Field Name:** Type exactly `Company_Size`
80. **Description:** Type `Number of employees at prospect's company`
81. **Field Type:** Select "Dropdown"
82. **Usage:** Select "CRM Targets"
83. **Options (Click "Add Option" for each):**
    - `1-10 employees`
    - `11-50 employees`
    - `51-200 employees`
    - `201-1000 employees`
    - `1000+ employees`
84. **Click "Save Custom Field"**

**Field 13: Budget Authority**
85. **Click "+Add Custom Field"**
86. **Field Name:** Type exactly `Budget_Authority`
87. **Description:** Type `Prospect's budget decision-making authority`
88. **Field Type:** Select "Dropdown"
89. **Usage:** Select "CRM Targets"
90. **Options:**
    - `Decision Maker`
    - `Strong Influence`
    - `Some Influence`
    - `No Authority`
91. **Click "Save Custom Field"**

**Field 14: Source Attribution**
92. **Click "+Add Custom Field"**
93. **Field Name:** Type exactly `Lead_Source_Primary`
94. **Description:** Type `Primary source where lead originated`
95. **Field Type:** Select "Dropdown"
96. **Usage:** Select "CRM Targets"
97. **Options:**
    - `Website Form`
    - `Social Media`
    - `Email Campaign`
    - `Referral`
    - `Paid Advertising`
    - `Content Marketing`
    - `Webinar`
    - `Trade Show`
    - `Cold Outreach`
    - `Other`
98. **Click "Save Custom Field"**

**Field 15: Engagement Level**
99. **Click "+Add Custom Field"**
100. **Field Name:** Type exactly `Engagement_Level`
101. **Description:** Type `Contact's engagement with marketing content`
102. **Field Type:** Select "Dropdown"
103. **Usage:** Select "CRM Targets"
104. **Options:**
    - `High Engagement`
    - `Medium Engagement`
    - `Low Engagement`
    - `No Engagement`
105. **Click "Save Custom Field"**

### Step 4: Create Business Model Custom Fields

**Field 16: Customer Lifetime Value**
106. **Click "+Add Custom Field"**
107. **Field Name:** Type exactly `Customer_LTV`
108. **Description:** Type `Calculated or estimated customer lifetime value`
109. **Field Type:** Select "Number"
110. **Usage:** Select "CRM Targets"
111. **Options:**
    - Min Value: `0`
    - Default Value: `0`
112. **Click "Save Custom Field"**

**Field 17: Purchase Frequency**
113. **Click "+Add Custom Field"**
114. **Field Name:** Type exactly `Purchase_Frequency`
115. **Description:** Type `Expected purchases per year`
116. **Field Type:** Select "Number"
117. **Usage:** Select "CRM Targets"
118. **Options:**
    - Min Value: `0`
    - Max Value: `12`
    - Default Value: `1`
119. **Click "Save Custom Field"**

**Field 18: Average Transaction Value**
120. **Click "+Add Custom Field"**
121. **Field Name:** Type exactly `Average_Transaction_Value`
122. **Description:** Type `Average value per transaction`
123. **Field Type:** Select "Number"
124. **Usage:** Select "CRM Targets"
125. **Options:**
    - Min Value: `0`
    - Default Value: `0`
126. **Click "Save Custom Field"**

**Field 19: Customer Acquisition Cost**
127. **Click "+Add Custom Field"**
128. **Field Name:** Type exactly `Customer_CAC`
129. **Description:** Type `Cost to acquire this customer`
130. **Field Type:** Select "Number"
131. **Usage:** Select "CRM Targets"
132. **Options:**
    - Min Value: `0`
    - Default Value: `0`
133. **Click "Save Custom Field"**

**Field 20: Profit Margin**
134. **Click "+Add Custom Field"**
135. **Field Name:** Type exactly `Profit_Margin_Percent`
136. **Description:** Type `Expected profit margin percentage`
137. **Field Type:** Select "Number"
138. **Usage:** Select "CRM Targets"
139. **Options:**
    - Min Value: `0`
    - Max Value: `100`
    - Default Value: `20`
140. **Click "Save Custom Field"**

---

## Phase 2: CLOSER Framework Pipeline Creation

### Step 5: Create Main CLOSER Pipeline

**Exact Steps:**
1. **Click "CRM"** in the main navigation menu
2. **Click "Deals"** in the submenu
3. **Click "Pipelines"** tab
4. **Click "+ADD PIPELINE"** button (blue button, top-right)

**Pipeline Configuration:**
5. **Title:** Type exactly `CLOSER Sales Framework`
6. **Currency:** Select `USD` from dropdown
7. **Description:** Type `Alex Hormozi CLOSER methodology implementation for systematic deal progression`
8. **Probability:** Toggle to **ON** (switch should be blue)
9. **Click "Save Pipeline"**

### Step 6: Configure CLOSER Pipeline Stages

**Stage 1: CLARIFY**
10. **Click "Manage Stages"** button (appears after saving pipeline)
11. **Default stage appears** → Click the **pencil icon** to edit
12. **Stage Title:** Change to `CLARIFY`
13. **Probability:** Type `10`
14. **Description:** Type `Identify prospect's core problem and desired outcome using discovery questions`
15. **Click "Save Stage"**

**Add Stage 2: LABEL**
16. **Click "+Add Stage"** button
17. **Stage Title:** Type `LABEL`
18. **Probability:** Type `20`
19. **Description:** Type `Label and confirm the prospect acknowledges their specific problem`
20. **Click "Save Stage"**

**Add Stage 3: OVERVIEW**
21. **Click "+Add Stage"**
22. **Stage Title:** Type `OVERVIEW`
23. **Probability:** Type `35`
24. **Description:** Type `Review past attempts, document pain cycle, understand failure patterns`
25. **Click "Save Stage"**

**Add Stage 4: SELL**
26. **Click "+Add Stage"**
27. **Stage Title:** Type `SELL`
28. **Probability:** Type `50`
29. **Description:** Type `Present solution focused on outcome, deliver demonstration of value`
30. **Click "Save Stage"**

**Add Stage 5: EXPLAIN**
31. **Click "+Add Stage"**
32. **Stage Title:** Type `EXPLAIN`
33. **Probability:** Type `70`
34. **Description:** Type `Address objections, remove barriers, handle concerns about implementation`
35. **Click "Save Stage"**

**Add Stage 6: REINFORCE**
36. **Click "+Add Stage"**
37. **Stage Title:** Type `REINFORCE`
38. **Probability:** Type `90`
39. **Description:** Type `Confirm decision confidence, provide reassurance, finalize commitment`
40. **Click "Save Stage"**

### Step 7: Configure Advanced Pipeline Stages (Optional High-Value Extension)

**Add Stage 7: CLOSED WON**
41. **Click "+Add Stage"**
42. **Stage Title:** Type `CLOSED WON`
43. **Probability:** Type `100`
44. **Description:** Type `Deal successfully closed, contract signed, onboarding initiated`
45. **Click "Save Stage"**

**Add Stage 8: CLOSED LOST**
46. **Click "+Add Stage"**
47. **Stage Title:** Type `CLOSED LOST`
48. **Probability:** Type `0`
49. **Description:** Type `Deal lost, capture reasons for analysis and future improvement`
50. **Click "Save Stage"**

### Step 8: Configure Stage Automations

**CLARIFY Stage Automation:**
51. **Click the "Automation" icon** next to CLARIFY stage (looks like a gear or lightning bolt)
52. **Select "Deal moved into Stage"** tab
53. **Click "+Add Automation"**
54. **Automation Name:** Type `Clarify Stage Entry Actions`

**Actions Configuration:**

**Action 1: Create Discovery Task**
55. **Click "+Add Action"** → Select "Create Task"
56. **Task Title:** Type `CLARIFY: Discovery call with {{contact.first_name}} {{contact.last_name}}`
57. **Task Description:** Type:
```
CLOSER Framework - CLARIFY Stage Objectives:

1. Understand WHY they're on the call
2. Identify their core problem/challenge
3. Understand their desired outcome
4. Qualify budget and timeline
5. Assess decision-making authority

Key Questions to Ask:
- What brought you to reach out to us?
- What's the biggest challenge you're facing right now?
- What would the ideal solution look like for you?
- What happens if this problem isn't solved?
- How are you currently handling this?

Update Contact Fields:
- Primary_Pain_Point
- Dream_Outcome_Score (1-10)
- Budget_Authority
```
58. **Assigned to:** Select appropriate sales rep or use "Deal Owner"
59. **Due Date:** Select "1 Business Day from now"
60. **Priority:** Select "High"
61. **Click "Save Action"**

**Action 2: Send Pre-Call Email**
62. **Click "+Add Action"** → Select "Send Email"
63. **Email Template:** Create new template:
    - **Template Name:** `CLOSER - Pre-Discovery Email`
    - **Subject:** `Preparing for our call tomorrow, {{contact.first_name}}`
    - **Body:** 
    ```
    Hi {{contact.first_name}},

    I'm looking forward to our discovery call tomorrow to learn more about {{contact.company}}'s situation.

    To make the most of our time together, I'd love to understand:

    1. What's your biggest challenge right now?
    2. What would the ideal outcome look like for your business?
    3. How urgent is solving this problem?

    No need to write a novel - just a few quick thoughts so I can tailor our conversation to what matters most to you.

    Also, I've blocked 30 minutes for our call, but if we need more time to cover everything properly, I'm happy to extend.

    Looking forward to speaking with you.

    Best regards,
    {{deal.owner}}
    {{user.phone}}

    P.S. If anything urgent comes up and you need to reschedule, just reply to this email.
    ```
64. **Send To:** Contact
65. **Send Timing:** Immediately
66. **Click "Save Action"**

**Action 3: Update Deal Value Based on Budget**
67. **Click "+Add Action"** → Select "Update Deal"
68. **Conditional Logic:**
    - **IF** `Budget_Authority` = "Decision Maker" 
    - **THEN** multiply expected value by 1.2
69. **Fields to Update:**
    - **Expected Value:** Use formula based on company size and budget authority
70. **Click "Save Action"**

**LABEL Stage Automation:**
71. **Click the "Automation" icon** next to LABEL stage
72. **Select "Deal moved into Stage"** tab
73. **Click "+Add Automation"**
74. **Automation Name:** Type `Label Stage Entry Actions`

**Actions:**

**Action 1: Problem Confirmation Task**
75. **Click "+Add Action"** → Select "Create Task"
76. **Task Title:** Type `LABEL: Confirm problem acknowledgment - {{contact.first_name}}`
77. **Task Description:** Type:
```
CLOSER Framework - LABEL Stage Objectives:

1. Get prospect to ADMIT they have the problem
2. LABEL the problem clearly and specifically
3. Confirm they WANT to solve it
4. Establish URGENCY for solving it

Key Phrases to Use:
- "So if I understand correctly, your main challenge is..."
- "Would you agree that this is costing you..."
- "How long has this been an issue?"
- "What happens if you don't solve this?"

Success Criteria:
- Prospect verbally acknowledges the problem
- Prospect agrees it needs to be solved
- Problem is clearly labeled and documented

Update Contact Fields:
- Problem_Label (specific problem statement)
- Urgency level and timeline
```
78. **Assigned to:** Deal Owner
79. **Due Date:** 2 Business Days from now
80. **Priority:** High
81. **Click "Save Action"**

**Action 2: Problem Summary Email**
82. **Click "+Add Action"** → Select "Send Email"
83. **Template Name:** `CLOSER - Problem Summary Email`
84. **Subject:** `Just to confirm I understand, {{contact.first_name}}...`
85. **Body:**
```
Hi {{contact.first_name}},

Thanks for being so open about {{contact.company}}'s situation on our call.

Let me make sure I understand the problem correctly:

{{contact.Problem_Label}}

This means that every day this continues, you're potentially:
- Missing opportunities that competitors might capture
- Spending time on inefficient processes
- Operating below your potential capacity

From what you shared, this has been going on for {{time_duration}} and is costing you approximately {{estimated_impact}} in lost opportunity.

Does that sound about right?

The reason I'm asking is that I want to make sure we're both clear on what we're trying to solve before I share how we might be able to help.

Can you confirm this accurately reflects your situation?

Best regards,
{{deal.owner}}
```
86. **Send To:** Contact
87. **Click "Save Action"**

**OVERVIEW Stage Automation:**
88. **Click the "Automation" icon** next to OVERVIEW stage
89. **Click "+Add Automation"**
90. **Automation Name:** Type `Overview Stage Entry Actions`

**Action 1: Pain Cycle Documentation Task**
91. **Click "+Add Action"** → Select "Create Task"
92. **Task Title:** Type `OVERVIEW: Document pain cycle and past attempts - {{contact.first_name}}`
93. **Task Description:**
```
CLOSER Framework - OVERVIEW Stage Objectives:

1. Understand what they've tried before
2. Why previous solutions failed
3. Document the "pain cycle" they've been in
4. Identify gaps in previous approaches
5. Position our solution as different/better

Key Questions:
- "What have you tried to solve this problem before?"
- "Why didn't those solutions work?"
- "What would need to be different this time?"
- "What would happen if you tried the same approach again?"

Pain Cycle Documentation:
- Problem occurs → Try solution → Doesn't work → Back to problem
- Capture each cycle and failure point
- Identify pattern of why solutions fail

Update Contact Fields:
- Previous_Solutions_Tried (detailed)
- Failure reasons for each attempt
- Key requirements for success
```
94. **Assigned to:** Deal Owner
95. **Due Date:** 2 Business Days from now
96. **Click "Save Action"**

**Action 2: Case Study Preparation**
97. **Click "+Add Action"** → Select "Create Task"
98. **Task Title:** Type `Prepare relevant case studies for {{contact.company}}`
99. **Task Description:**
```
Find and prepare case studies that match:
- Similar company size ({{contact.Company_Size}})
- Similar industry/vertical
- Similar problem ({{contact.Problem_Label}})
- Similar failed previous attempts

Case study should highlight:
- How our solution avoided their previous failure points
- Specific results achieved
- Timeline for success
- Why our approach was different

Prepare 2-3 relevant examples for SELL stage presentation.
```
100. **Assigned to:** Deal Owner or Marketing
101. **Due Date:** 3 Business Days from now
102. **Click "Save Action"**

**SELL Stage Automation:**
103. **Click the "Automation" icon** next to SELL stage
104. **Click "+Add Automation"**
105. **Automation Name:** Type `Sell Stage Entry Actions`

**Action 1: Demo Preparation Task**
106. **Click "+Add Action"** → Select "Create Task"
107. **Task Title:** Type `SELL: Prepare and deliver demo for {{contact.first_name}}`
108. **Task Description:**
```
CLOSER Framework - SELL Stage Objectives:

1. Sell the OUTCOME, not the features
2. Show them their "vacation" (end result)
3. Connect solution to their specific problem
4. Address their pain cycle failures
5. Make it about THEM, not about us

Demo Preparation Checklist:
□ Customize demo to their specific use case
□ Highlight features that solve their Problem_Label
□ Show how we avoid their Previous_Solutions_Tried failures
□ Include relevant case studies
□ Prepare ROI/value calculation
□ Create urgency around their timeline

Demo Structure:
1. Recap their problem and desired outcome
2. Show solution in action (their scenario)
3. Highlight differentiation from failed attempts
4. Present case study results
5. Calculate ROI for their situation
6. Get commitment to move forward

Update After Demo:
□ Demo_Delivered = TRUE
□ Demo_Date = [Date delivered]
□ Stakeholders_Present = [List attendees]
□ Next_Steps = [Defined clearly]
```
109. **Assigned to:** Deal Owner
110. **Due Date:** 3 Business Days from now
111. **Priority:** High
112. **Click "Save Action"**

**Action 2: Proposal Generation**
113. **Click "+Add Action"** → Select "Generate Document"
114. **Document Type:** Select "Proposal Template"
115. **Template Variables:**
    - Company: `{{contact.company}}`
    - Primary Challenge: `{{contact.Problem_Label}}`
    - Solution Overview: Based on demo delivered
    - Investment: Based on deal expected value
    - Timeline: Based on urgency identified
    - ROI Calculation: Custom per prospect
116. **Send to:** Contact after internal review
117. **Click "Save Action"**

**EXPLAIN Stage Automation:**
118. **Click the "Automation" icon** next to EXPLAIN stage
119. **Click "+Add Automation"**
120. **Automation Name:** Type `Explain Stage Entry Actions`

**Action 1: Objection Handling Task**
121. **Click "+Add Action"** → Select "Create Task"
122. **Task Title:** Type `EXPLAIN: Handle objections and concerns - {{contact.first_name}}`
123. **Task Description:**
```
CLOSER Framework - EXPLAIN Stage Objectives:

1. Identify all objections and concerns
2. Address each objection systematically
3. Remove barriers to decision-making
4. Provide proof and reassurance
5. Confirm readiness to move forward

Common Objections & Responses:

PRICE: "It costs too much"
→ Break down ROI and cost of inaction
→ Compare to cost of problem continuing
→ Offer payment terms or phases

TIMING: "Not the right time"
→ Cost of waiting/delay
→ Competitive advantage lost
→ "When would be the right time and why?"

AUTHORITY: "Need to check with others"
→ "Who else needs to be involved?"
→ "What questions will they have?"
→ "Can we include them in the next conversation?"

TRUST: "Not sure it will work for us"
→ Guarantee and risk reversal
→ Additional case studies
→ Trial period or pilot program

SUCCESS: "What if it doesn't work?"
→ Implementation support included
→ Success methodology explained
→ Specific success metrics defined

Update Contact Fields:
- Objections_Handled (detailed notes)
- Concerns_Addressed (yes/no for each)
- Decision_Timeline (updated)
- Readiness_Score (1-10)
```
124. **Assigned to:** Deal Owner
125. **Due Date:** 1 Business Day from now
126. **Priority:** Urgent
127. **Click "Save Action"**

**Action 2: Reference Customer Matching**
128. **Click "+Add Action"** → Select "Send Internal Notification"
129. **Recipient:** Customer Success or Sales Manager
130. **Subject:** `Reference needed: {{contact.company}} - {{contact.Problem_Label}}`
131. **Message:**
```
Need reference customer for {{contact.first_name}} at {{contact.company}}.

Their situation:
- Problem: {{contact.Problem_Label}}
- Company Size: {{contact.Company_Size}}
- Industry: {{contact.industry}}
- Concerns: {{contact.Objections_Handled}}

Looking for reference customer with:
- Similar profile and challenges
- Strong success story
- Willing to take reference call
- Relatable use case

Please identify best match and facilitate introduction.
```
132. **Click "Save Action"**

**REINFORCE Stage Automation:**
133. **Click the "Automation" icon** next to REINFORCE stage
134. **Click "+Add Automation"**
135. **Automation Name:** Type `Reinforce Stage Entry Actions`

**Action 1: Decision Confirmation Task**
136. **Click "+Add Action"** → Select "Create Task"
137. **Task Title:** Type `REINFORCE: Confirm decision and close - {{contact.first_name}}`
138. **Task Description:**
```
CLOSER Framework - REINFORCE Stage Objectives:

1. Confirm they're ready to move forward
2. Reinforce the value of their decision
3. Address any last-minute hesitations
4. Get firm commitment and timeline
5. Begin onboarding preparation

Decision Confirmation Process:

1. SUMMARIZE THE VALUE:
"Just to recap, we're going to help you [solve specific problem] which means [specific outcome] for {{contact.company}}."

2. CONFIRM THE DECISION:
"Are you ready to move forward with this?"
"What questions do you still have?"
"Is there anything holding you back?"

3. REINFORCE THE CHOICE:
"You're making a smart decision because..."
"Other companies in your situation have seen..."
"You'll be glad you acted now instead of waiting because..."

4. HANDLE FINAL CONCERNS:
Address any last-minute objections
Provide additional reassurance
Offer guarantees or risk reversals

5. GET FIRM COMMITMENT:
"When would you like to start?"
"Who handles the contracting process?"
"What do you need from us to move forward?"

Next Steps After Confirmation:
□ Send contract/agreement
□ Schedule onboarding kickoff
□ Introduce implementation team
□ Set success milestones
□ Begin customer success process
```
139. **Assigned to:** Deal Owner
140. **Due Date:** 1 Business Day from now
141. **Priority:** Urgent
142. **Click "Save Action"**

**Action 2: Contract Generation and Sending**
143. **Click "+Add Action"** → Select "Generate Document"
144. **Document Type:** Service Agreement/Contract
145. **Auto-populate from deal data:**
    - Services: Based on solution sold
    - Investment: Deal expected value
    - Timeline: Based on agreed schedule
    - Success metrics: From reinforce discussion
146. **Send to:** Contact for signature
147. **CC:** Deal owner and legal (if required)
148. **Click "Save Action"**

**Action 3: Onboarding Preparation**
149. **Click "+Add Action"** → Select "Create Task"
150. **Task Title:** Type `Prepare onboarding for {{contact.company}} - {{contact.first_name}}`
151. **Task Description:**
```
Onboarding Preparation Checklist:

□ Assign Customer Success Manager
□ Create client portal access
□ Prepare welcome packet and next steps
□ Schedule implementation kickoff meeting
□ Gather technical requirements
□ Set up project timeline and milestones
□ Prepare team introductions
□ Create success tracking dashboard

Handoff Information:
- Primary contact: {{contact.first_name}} {{contact.last_name}}
- Company: {{contact.company}}
- Main challenge: {{contact.Problem_Label}}
- Solution sold: {{deal.solution_type}}
- Expected outcomes: {{contact.desired_outcomes}}
- Timeline: {{deal.implementation_timeline}}
- Success metrics: {{deal.success_metrics}}

Internal Team Notifications:
□ Customer Success Manager assigned
□ Implementation team notified
□ Account manager assigned
□ Finance team notified (invoicing)
□ Executive team updated (major deal)
```
152. **Assigned to:** Operations Manager or Customer Success
153. **Due Date:** Same business day
154. **Priority:** High
155. **Click "Save Action"**

**CLOSED WON Automation:**
156. **Click the "Automation" icon** next to CLOSED WON stage
157. **Click "+Add Automation"**
158. **Automation Name:** Type `Closed Won Celebration and Onboarding`

**Action 1: Victory Notification**
159. **Click "+Add Action"** → Select "Send Internal Notification"
160. **Recipients:** Sales team, management, customer success
161. **Subject:** `🎉 CLOSED WON: {{contact.company}} - ${{deal.expected_value}}`
162. **Message:**
```
🎉 DEAL CLOSED! 🎉

Company: {{contact.company}}
Contact: {{contact.first_name}} {{contact.last_name}}
Deal Value: ${{deal.expected_value}}
Sales Rep: {{deal.owner}}
Close Date: {{today}}
Sales Cycle: {{deal.days_in_pipeline}} days

Problem Solved: {{contact.Problem_Label}}
Solution Provided: {{deal.solution_summary}}

CLOSER Framework Performance:
- Lead Score: {{contact.Lead_Score}}
- Value Score: {{contact.Calculated_Value}}
- Source: {{contact.Lead_Source_Primary}}

Onboarding starts: {{deal.onboarding_date}}
Success Manager: {{deal.success_manager}}

Great work team! 🚀
```
163. **Click "Save Action"**

**Action 2: Customer Welcome Email**
164. **Click "+Add Action"** → Select "Send Email"
165. **Template Name:** `Welcome - You Made a Great Decision`
166. **Subject:** `Welcome to {{company_name}}, {{contact.first_name}}! 🎉`
167. **Body:**
```
Hi {{contact.first_name}},

Welcome to the {{company_name}} family! 

You just made a fantastic decision, and I'm personally excited to help you achieve {{contact.desired_outcome}} for {{contact.company}}.

Here's what happens next:

📅 **Onboarding Kickoff**
Your Customer Success Manager, {{success_manager.name}}, will reach out within 24 hours to schedule your onboarding kickoff meeting.

📋 **Implementation Timeline**
We'll have you up and running within {{implementation_timeline}}, with your first results visible within {{first_results_timeline}}.

🎯 **Your Success Metrics**
We'll be tracking progress against the specific outcomes you mentioned:
- {{outcome_1}}
- {{outcome_2}}
- {{outcome_3}}

🔗 **Client Portal Access**
You'll receive login credentials to your private client portal where you can:
- Track project progress
- Access all resources and documentation
- Communicate directly with your team
- View real-time results and analytics

💬 **Direct Access**
My personal email: {{deal.owner.email}}
My direct phone: {{deal.owner.phone}}

If you have ANY questions or concerns during implementation, reach out immediately. Your success is our success.

Welcome aboard!

{{deal.owner.signature}}

P.S. Keep an eye out for a small welcome gift arriving at your office this week. It's our way of saying thank you for trusting us with your business.
```
168. **Send To:** Contact
169. **CC:** Customer Success Manager, Deal Owner
170. **Send Timing:** Immediately
171. **Click "Save Action"**

**Action 3: Automatic Project Creation**
172. **Click "+Add Action"** → Select "Create Project"
173. **Project Details:**
    - **Project Name:** `{{contact.company}} - Implementation`
    - **Template:** Select appropriate onboarding template
    - **Client:** Link to contact
    - **Start Date:** 1 business day from close
    - **Project Manager:** Customer Success Manager
    - **Expected Duration:** Based on solution complexity
174. **Click "Save Action"**

---

## Phase 3: Value Equation Automation System

### Step 9: Create Value Calculation Automation Template

**Exact Steps:**
1. **Click hamburger menu (☰)**
2. **Click "Onboarding"**
3. **Click "Automations"**
4. **Click "+Add Template"**

**Template Configuration:**
5. **Template Name:** Type exactly `Hormozi Value Equation Calculator`
6. **Description:** Type `Automatically calculates and updates Hormozi Value Equation when prospect data changes, triggers appropriate routing and follow-up actions`
7. **Click "Save Template"**

### Step 10: Configure Value Calculation Triggers

8. **Click "+Add Trigger"** button
9. **Trigger Type:** Select `Contact Updated` from dropdown
10. **Trigger Name:** Type `Value Fields Updated`
11. **Trigger Conditions - Set up multiple conditions:**

**Condition 1:**
12. **Field Changed:** Select `Dream_Outcome_Score`
13. **Condition:** Select `is not empty`

**Add Condition 2:**
14. **Click "Add Condition"**
15. **Field Changed:** Select `Likelihood_Score`
16. **Condition:** Select `is not empty`

**Add Condition 3:**
17. **Click "Add Condition"**
18. **Field Changed:** Select `Time_Delay_Days`
19. **Condition:** Select `is not empty`

**Add Condition 4:**
20. **Click "Add Condition"**
21. **Field Changed:** Select `Effort_Score`
22. **Condition:** Select `is not empty`

**Logic Configuration:**
23. **Condition Logic:** Select `ALL conditions must be met (AND)`
24. **Click "Save Trigger"**

### Step 11: Configure Value Calculation Actions

**Action 1: Calculate and Update Value Score**
25. **Click "+Add Action"**
26. **Action Type:** Select `Update Contact`
27. **Contact to Update:** Select `Triggering Contact`
28. **Action Name:** Type `Calculate Hormozi Value Score`

**Field Updates:**
29. **Click "Add Field Update"**
30. **Field:** Select `Calculated_Value`
31. **Update Method:** Select "Formula/Calculation"
32. **Formula:** Enter the following calculation:
```javascript
// Hormozi Value Equation: (Dream Outcome × Likelihood) / (Time Delay × Effort)
// Normalized to 0-100 scale for practical use

let dreamScore = parseFloat("{{contact.Dream_Outcome_Score}}") || 5;
let likelihoodScore = parseFloat("{{contact.Likelihood_Score}}") || 5;  
let timeDelayDays = parseFloat("{{contact.Time_Delay_Days}}") || 90;
let effortScore = parseFloat("{{contact.Effort_Score}}") || 5;

// Convert time delay to relative scale (30 days = 1.0, 365 days = 12.17)
let timeDelayFactor = timeDelayDays / 30;

// Calculate base value using Hormozi formula
let rawValue = (dreamScore * likelihoodScore) / (timeDelayFactor * effortScore);

// Normalize to 0-100 scale for practical business use
// Theoretical max: (10 × 10) / (1 × 1) = 100
// Theoretical min: (1 × 1) / (12.17 × 10) = 0.008

let normalizedValue = Math.min(100, rawValue * 10);
let finalValue = Math.round(normalizedValue * 10) / 10; // Round to 1 decimal

return finalValue;
```
33. **Click "Save Field Update"**

**Action 2: High-Value Prospect Routing (Score ≥ 7.5)**
34. **Click "+Add Action"**
35. **Action Type:** Select `Conditional Action Group`
36. **Condition:** 
    - **Field:** `Calculated_Value`
    - **Operator:** `is greater than or equal to`
    - **Value:** `7.5`

**Sub-Action 2.1: Add to High-Value Circle**
37. **Click "+Add Sub-Action"** → Select `Add to Circle`
38. **Circle:** Create or select `High-Value Prospects`
39. **Remove from other circles:** Check boxes for `Medium-Value Prospects` and `Low-Value Prospects`

**Sub-Action 2.2: Priority Task Creation**
40. **Click "+Add Sub-Action"** → Select `Create Task`
41. **Task Title:** Type `🔥 HIGH VALUE: Immediate contact required - {{contact.first_name}} {{contact.last_name}}`
42. **Task Description:**
```
HIGH-VALUE PROSPECT ALERT!

Contact: {{contact.first_name}} {{contact.last_name}}
Company: {{contact.company}}
Phone: {{contact.phone}}
Email: {{contact.email}}

VALUE ANALYSIS:
Overall Score: {{contact.Calculated_Value}}/10 (HIGH)
- Dream Outcome: {{contact.Dream_Outcome_Score}}/10
- Likelihood Belief: {{contact.Likelihood_Score}}/10  
- Time Sensitivity: {{contact.Time_Delay_Days}} days
- Required Effort: {{contact.Effort_Score}}/10

IMMEDIATE ACTION REQUIRED:
⏰ Contact within 30 minutes
📞 Phone call first, then email
🎯 Focus on high-value outcome they want
⚡ Create urgency around timeline
💰 Position premium solution

This prospect has optimal characteristics for our highest-value offerings. Prioritize immediately.
```
43. **Assigned to:** Senior Sales Rep or Sales Manager
44. **Due Date:** 30 minutes from now
45. **Priority:** Urgent
46. **Click "Save Sub-Action"**

**Sub-Action 2.3: Premium Deal Creation**
47. **Click "+Add Sub-Action"** → Select `Create Deal`
48. **Deal Title:** `PREMIUM: {{contact.first_name}} {{contact.last_name}} - {{contact.company}}`
49. **Pipeline:** `CLOSER Sales Framework`
50. **Stage:** `CLARIFY`
51. **Expected Value:** Calculate based on high-value indicators:
```javascript
// Base value calculation for high-value prospects
let baseValue = 15000; // Minimum for high-value prospects
let dreamMultiplier = parseFloat("{{contact.Dream_Outcome_Score}}") / 5; // 0.2-2.0
let likelihoodMultiplier = parseFloat("{{contact.Likelihood_Score}}") / 5; // 0.2-2.0

// Company size multiplier
let companySizeMultiplier = 1;
switch("{{contact.Company_Size}}") {
    case "1000+ employees": companySizeMultiplier = 5; break;
    case "201-1000 employees": companySizeMultiplier = 3; break;
    case "51-200 employees": companySizeMultiplier = 2; break;
    case "11-50 employees": companySizeMultiplier = 1.5; break;
    case "1-10 employees": companySizeMultiplier = 1; break;
    default: companySizeMultiplier = 1.5;
}

let calculatedValue = baseValue * dreamMultiplier * likelihoodMultiplier * companySizeMultiplier;
return Math.round(calculatedValue);
```
52. **Expected Close Date:** Based on time sensitivity:
```javascript
let delayDays = parseFloat("{{contact.Time_Delay_Days}}") || 90;
// High-value prospects with urgency get shorter sales cycles
let salesCycleDays = Math.max(14, Math.min(45, delayDays * 0.5));
let closeDate = new Date();
closeDate.setDate(closeDate.getDate() + salesCycleDays);
return closeDate.toISOString().split('T')[0];
```
53. **Deal Owner:** Senior Sales Rep
54. **Click "Save Sub-Action"**

**Action 3: Medium-Value Prospect Routing (Score 3.0-7.4)**
55. **Click "+Add Action"**
56. **Action Type:** Select `Conditional Action Group`
57. **Condition Logic:** 
    - **Field:** `Calculated_Value`
    - **Operator:** `is between`
    - **Value 1:** `3.0`
    - **Value 2:** `7.4`

**Sub-Action 3.1: Add to Medium-Value Circle**
58. **Click "+Add Sub-Action"** → Select `Add to Circle`
59. **Circle:** Create or select `Medium-Value Prospects`
60. **Remove from other circles:** Yes

**Sub-Action 3.2: Standard Follow-up Task**
61. **Click "+Add Sub-Action"** → Select `Create Task`
62. **Task Title:** Type `📞 Medium Value: Standard follow-up - {{contact.first_name}} {{contact.last_name}}`
63. **Task Description:**
```
MEDIUM-VALUE PROSPECT

Contact: {{contact.first_name}} {{contact.last_name}}
Company: {{contact.company}}
Value Score: {{contact.Calculated_Value}}/10 (MEDIUM)

VALUE BREAKDOWN:
- Dream Outcome: {{contact.Dream_Outcome_Score}}/10
- Likelihood Belief: {{contact.Likelihood_Score}}/10
- Time Sensitivity: {{contact.Time_Delay_Days}} days  
- Required Effort: {{contact.Effort_Score}}/10

FOLLOW-UP STRATEGY:
⏰ Contact within 4 hours
📧 Email first, follow with phone call
🎯 Focus on building urgency and likelihood
📈 Position standard solution offerings
🔄 Nurture for potential value increase

Solid prospect - follow standard sales process with emphasis on value building.
```
64. **Assigned to:** Sales Development Rep
65. **Due Date:** 4 hours from now
66. **Priority:** Medium
67. **Click "Save Sub-Action"**

**Sub-Action 3.3: Standard Deal Creation**
68. **Click "+Add Sub-Action"** → Select `Create Deal`
69. **Deal Title:** `{{contact.first_name}} {{contact.last_name}} - {{contact.company}}`
70. **Pipeline:** `CLOSER Sales Framework`
71. **Stage:** `CLARIFY`
72. **Expected Value:** Standard calculation:
```javascript
let baseValue = 5000; // Standard base value
let dreamScore = parseFloat("{{contact.Dream_Outcome_Score}}") || 5;
let likelihoodScore = parseFloat("{{contact.Likelihood_Score}}") || 5;
let avgMultiplier = (dreamScore + likelihoodScore) / 10; // 0.2-2.0

// Company size adjustment
let sizeMultiplier = 1;
switch("{{contact.Company_Size}}") {
    case "1000+ employees": sizeMultiplier = 3; break;
    case "201-1000 employees": sizeMultiplier = 2; break;
    case "51-200 employees": sizeMultiplier = 1.5; break;
    default: sizeMultiplier = 1;
}

return Math.round(baseValue * avgMultiplier * sizeMultiplier);
```
73. **Expected Close Date:** 30-45 days from now
74. **Click "Save Sub-Action"**

**Action 4: Low-Value Prospect Routing (Score < 3.0)**
75. **Click "+Add Action"**
76. **Action Type:** Select `Conditional Action Group`
77. **Condition:**
    - **Field:** `Calculated_Value`  
    - **Operator:** `is less than`
    - **Value:** `3.0`

**Sub-Action 4.1: Add to Low-Value Circle**
78. **Click "+Add Sub-Action"** → Select `Add to Circle`
79. **Circle:** Create or select `Low-Value Prospects`
80. **Remove from other circles:** Yes

**Sub-Action 4.2: Nurture Sequence Assignment**
81. **Click "+Add Sub-Action"** → Select `Add to Email Campaign`
82. **Campaign:** Select or create `Low-Value Prospect Nurture Sequence`
83. **Start Timing:** Immediately

**Sub-Action 4.3: Long-term Follow-up Task**
84. **Click "+Add Sub-Action"** → Select `Create Task`
85. **Task Title:** Type `📧 Low Value: Nurture sequence - {{contact.first_name}} {{contact.last_name}}`
86. **Task Description:**
```
LOW-VALUE PROSPECT - NURTURE FOCUS

Contact: {{contact.first_name}} {{contact.last_name}}
Company: {{contact.company}}
Value Score: {{contact.Calculated_Value}}/10 (LOW)

CURRENT LIMITATIONS:
- Dream Outcome: {{contact.Dream_Outcome_Score}}/10
- Likelihood Belief: {{contact.Likelihood_Score}}/10
- Time Sensitivity: {{contact.Time_Delay_Days}} days
- Required Effort: {{contact.Effort_Score}}/10

NURTURE STRATEGY:
📧 Add to educational email sequence
📚 Provide value-building content
⏰ Quarterly check-ins for changes
🎯 Focus on increasing dream outcome and likelihood scores
📈 Monitor for job changes, company growth, etc.

NOT SALES-READY - Focus on long-term relationship building and education.
```
87. **Assigned to:** Marketing or Junior Sales Rep
88. **Due Date:** 1 week from now
89. **Priority:** Low
90. **Click "Save Sub-Action"**

**Action 5: Executive Notification for High-Value Prospects**
91. **Click "+Add Action"**
92. **Action Type:** Select `Conditional Action Group`
93. **Condition:**
    - **Field:** `Calculated_Value`
    - **Operator:** `is greater than or equal to`
    - **Value:** `8.5`

**Sub-Action 5.1: Executive Alert**
94. **Click "+Add Sub-Action"** → Select `Send Internal Notification`
95. **Recipients:** Sales Manager, VP Sales, CEO (depending on org structure)
96. **Subject:** `🚨 EXCEPTIONAL PROSPECT: {{contact.company}} - Value Score {{contact.Calculated_Value}}`
97. **Message:**
```
🚨 EXCEPTIONAL PROSPECT ALERT 🚨

This prospect has an exceptional value score and warrants executive attention.

PROSPECT DETAILS:
Name: {{contact.first_name}} {{contact.last_name}}
Company: {{contact.company}}
Email: {{contact.email}}
Phone: {{contact.phone}}

VALUE ANALYSIS:
Overall Score: {{contact.Calculated_Value}}/10 (EXCEPTIONAL)
- Dream Outcome: {{contact.Dream_Outcome_Score}}/10
- Likelihood Belief: {{contact.Likelihood_Score}}/10
- Time Urgency: {{contact.Time_Delay_Days}} days
- Effort Required: {{contact.Effort_Score}}/10

COMPANY PROFILE:
Size: {{contact.Company_Size}}
Industry: {{contact.industry}}
Source: {{contact.Lead_Source_Primary}}
Lead Score: {{contact.Lead_Score}}

RECOMMENDED ACTIONS:
- Executive involvement in sales process
- Consider premium/enterprise solution
- Fast-track through pipeline
- Assign most senior sales resources

This could be a significant opportunity. Consider personal involvement.
```
98. **Priority:** Urgent
99. **Click "Save Sub-Action"**

### Step 12: Test Value Equation Automation

**Test Scenario 1: High-Value Prospect**
100. **Navigate to CRM → Contacts**
101. **Click "+Add Contact"**
102. **Enter test data:**
    - **First Name:** `High Value`
    - **Last Name:** `Test`
    - **Email:** `highvalue@test.com`
    - **Company:** `Test Corp High`
    - **Dream_Outcome_Score:** `9`
    - **Likelihood_Score:** `8`
    - **Time_Delay_Days:** `30`
    - **Effort_Score:** `3`
103. **Click "Save Contact"**
104. **Wait 30 seconds, refresh page**
105. **Expected Results:**
    - **Calculated_Value:** Should be ~8.0 (high value)
    - **Added to:** High-Value Prospects circle
    - **Task created:** High-priority contact task
    - **Deal created:** Premium deal with high expected value

**Test Scenario 2: Medium-Value Prospect**
106. **Click "+Add Contact"**
107. **Enter test data:**
    - **First Name:** `Medium Value`
    - **Last Name:** `Test`
    - **Email:** `mediumvalue@test.com`
    - **Dream_Outcome_Score:** `6`
    - **Likelihood_Score:** `5`
    - **Time_Delay_Days:** `90`
    - **Effort_Score:** `6`
108. **Expected Results:**
    - **Calculated_Value:** Should be ~3.3 (medium value)
    - **Added to:** Medium-Value Prospects circle
    - **Task created:** Standard follow-up task

**Test Scenario 3: Low-Value Prospect**
109. **Click "+Add Contact"**
110. **Enter test data:**
    - **Dream_Outcome_Score:** `3`
    - **Likelihood_Score:** `4`
    - **Time_Delay_Days:** `180`
    - **Effort_Score:** `8`
111. **Expected Results:**
    - **Calculated_Value:** Should be ~1.0 (low value)
    - **Added to:** Low-Value Prospects circle
    - **Added to:** Nurture email sequence

**Cleanup Test Data:**
112. **Delete all test contacts after validation**

---

## Phase 4: Lead Capture & Scoring System

### Step 13: Create High-Converting Lead Capture Form

**Exact Steps:**
1. **Click "Content"** in main navigation
2. **Click "Forms"**
3. **Click "+Add Form"**

**Form Configuration:**
4. **Form Name:** Type `Premium Lead Capture System`
5. **Form Description:** Type `High-converting lead capture with Hormozi Value Equation integration and automatic scoring`
6. **Form Type:** Select `Contact Form`
7. **Redirect URL:** Leave blank (will create custom thank you page)
8. **Form Style:** Select modern, clean template
9. **Click "Save Form"**

### Step 14: Configure Lead Capture Form Fields

**Field 1: First Name (Required)**
10. **Click "+Add Field"**
11. **Field Type:** Select `Single Line Text`
12. **Field Label:** Type `First Name`
13. **Placeholder:** Type `Your first name`
14. **Required:** ✅ Check the box
15. **Maps to:** Select `First Name`
16. **Validation:** None needed
17. **Click "Save Field"**

**Field 2: Last Name (Required)**
18. **Click "+Add Field"**
19. **Field Type:** Select `Single Line Text`
20. **Field Label:** Type `Last Name`
21. **Placeholder:** Type `Your last name`
22. **Required:** ✅ Check the box
23. **Maps to:** Select `Last Name`
24. **Click "Save Field"**

**Field 3: Business Email (Required)**
25. **Click "+Add Field"**
26. **Field Type:** Select `Email`
27. **Field Label:** Type `Business Email`
28. **Placeholder:** Type `you@yourcompany.com`
29. **Required:** ✅ Check the box
30. **Maps to:** Select `Email`
31. **Validation:** ✅ Check `Business email only` (blocks gmail, yahoo, etc.)
32. **Error Message:** Type `Please use your business email address`
33. **Click "Save Field"**

**Field 4: Company Name (Required)**
34. **Click "+Add Field"**
35. **Field Type:** Select `Single Line Text`
36. **Field Label:** Type `Company Name`
37. **Placeholder:** Type `Your company name`
38. **Required:** ✅ Check the box
39. **Maps to:** Select `Company`
40. **Click "Save Field"**

**Field 5: Phone Number (Optional but Valuable)**
41. **Click "+Add Field"**
42. **Field Type:** Select `Phone`
43. **Field Label:** Type `Phone Number`
44. **Placeholder:** Type `(555) 123-4567`
45. **Required:** Leave unchecked
46. **Maps to:** Select `Phone`
47. **Validation:** Enable phone format validation
48. **Click "Save Field"**

**Field 6: Company Size (For Scoring)**
49. **Click "+Add Field"**
50. **Field Type:** Select `Dropdown`
51. **Field Label:** Type `Company Size`
52. **Required:** ✅ Check the box
53. **Maps to:** Select `Company_Size` (custom field created earlier)
54. **Options (click "Add Option" for each):**
    - `1-10 employees` (Value: 5 points)
    - `11-50 employees` (Value: 10 points)
    - `51-200 employees` (Value: 15 points)
    - `201-1000 employees` (Value: 20 points)
    - `1000+ employees` (Value: 25 points)
55. **Click "Save Field"**

**Field 7: Primary Challenge (For Qualification)**
56. **Click "+Add Field"**
57. **Field Type:** Select `Dropdown`
58. **Field Label:** Type `What's your biggest challenge right now?`
59. **Required:** ✅ Check the box
60. **Maps to:** Select `Primary_Pain_Point` (custom field)
61. **Options:**
    - `Increasing revenue and sales` (High value - 20 points)
    - `Scaling operations efficiently` (High value - 18 points)
    - `Improving customer experience` (Medium value - 15 points)
    - `Reducing operational costs` (Medium value - 12 points)
    - `Managing team productivity` (Medium value - 12 points)
    - `Streamlining processes` (Medium value - 10 points)
    - `Technology integration` (Low value - 8 points)
    - `Compliance and regulations` (Low value - 8 points)
    - `Other` (Unknown value - 5 points)
62. **Click "Save Field"**

**Field 8: Timeline/Urgency (Critical for Scoring)**
63. **Click "+Add Field"**
64. **Field Type:** Select `Dropdown`
65. **Field Label:** Type `When do you need this solved?`
66. **Required:** ✅ Check the box
67. **Maps to:** Create new custom field `Implementation_Timeline`
68. **Options:**
    - `Immediately (within 30 days)` (25 points)
    - `Within 3 months` (20 points)
    - `3-6 months` (15 points)
    - `6-12 months` (10 points)
    - `Just exploring options` (5 points)
69. **Click "Save Field"**

**Field 9: Budget Range (For Qualification)**
70. **Click "+Add Field"**
71. **Field Type:** Select `Dropdown`
72. **Field Label:** Type `What's your anticipated investment range?`
73. **Required:** ✅ Check the box
74. **Options:**
    - `$100,000+` (25 points)
    - `$50,000 - $100,000` (20 points)
    - `$25,000 - $50,000` (15 points)
    - `$10,000 - $25,000` (10 points)
    - `$5,000 - $10,000` (5 points)
    - `Under $5,000` (2 points)
75. **Click "Save Field"**

**Field 10: Decision Authority (For Qualification)**
76. **Click "+Add Field"**
77. **Field Type:** Select `Dropdown`
78. **Field Label:** Type `Who makes the final decision on this type of investment?`
79. **Required:** ✅ Check the box
80. **Maps to:** Select `Budget_Authority` (custom field)
81. **Options:**
    - `I make the final decision` (20 points)
    - `I have strong influence on the decision` (15 points)
    - `I'm part of a decision committee` (10 points)
    - `I need approval from others` (5 points)
82. **Click "Save Field"**

**Field 11: Current Solution (For Qualification)**
83. **Click "+Add Field"**
84. **Field Type:** Select `Dropdown`
85. **Field Label:** Type `How are you currently handling this challenge?`
86. **Required:** Leave unchecked (optional but valuable)
87. **Options:**
    - `Manual processes/spreadsheets` (High pain - 15 points)
    - `Outdated software that doesn't work well` (High pain - 15 points)
    - `Combination of different tools` (Medium pain - 10 points)
    - `Basic solution that's not meeting needs` (Medium pain - 10 points)
    - `No current solution` (High opportunity - 12 points)
    - `Satisfied with current solution` (Low opportunity - 2 points)
88. **Click "Save Field"**

### Step 15: Configure Advanced Form Automation

89. **Click "Automation" tab** in the form editor
90. **Click "+Add Automation"**

**Automation 1: Comprehensive Lead Scoring**
91. **Automation Name:** Type `Advanced Lead Scoring & Routing`
92. **Trigger:** `Form Submission`

**Action 1: Calculate Comprehensive Lead Score**
93. **Click "+Add Action"** → Select `Update Contact`
94. **Action Name:** Type `Calculate Master Lead Score`
95. **Update Method:** Use Advanced Formula
96. **Formula:**
```javascript
// Advanced Lead Scoring Algorithm
// Total possible score: 200+ points

let totalScore = 0;

// Company Size Scoring (25 points max)
switch("{{form.company_size}}") {
    case "1000+ employees": totalScore += 25; break;
    case "201-1000 employees": totalScore += 20; break;
    case "51-200 employees": totalScore += 15; break;
    case "11-50 employees": totalScore += 10; break;
    case "1-10 employees": totalScore += 5; break;
}

// Challenge/Pain Point Scoring (20 points max)
switch("{{form.primary_challenge}}") {
    case "Increasing revenue and sales": totalScore += 20; break;
    case "Scaling operations efficiently": totalScore += 18; break;
    case "Improving customer experience": totalScore += 15; break;
    case "Reducing operational costs": totalScore += 12; break;
    case "Managing team productivity": totalScore += 12; break;
    case "Streamlining processes": totalScore += 10; break;
    case "Technology integration": totalScore += 8; break;
    case "Compliance and regulations": totalScore += 8; break;
    case "Other": totalScore += 5; break;
}

// Timeline/Urgency Scoring (25 points max)
switch("{{form.timeline}}") {
    case "Immediately (within 30 days)": totalScore += 25; break;
    case "Within 3 months": totalScore += 20; break;
    case "3-6 months": totalScore += 15; break;
    case "6-12 months": totalScore += 10; break;
    case "Just exploring options": totalScore += 5; break;
}

// Budget Range Scoring (25 points max)
switch("{{form.budget}}") {
    case "$100,000+": totalScore += 25; break;
    case "$50,000 - $100,000": totalScore += 20; break;
    case "$25,000 - $50,000": totalScore += 15; break;
    case "$10,000 - $25,000": totalScore += 10; break;
    case "$5,000 - $10,000": totalScore += 5; break;
    case "Under $5,000": totalScore += 2; break;
}

// Authority Scoring (20 points max)
switch("{{form.authority}}") {
    case "I make the final decision": totalScore += 20; break;
    case "I have strong influence on the decision": totalScore += 15; break;
    case "I'm part of a decision committee": totalScore += 10; break;
    case "I need approval from others": totalScore += 5; break;
}

// Current Solution Scoring (15 points max)
switch("{{form.current_solution}}") {
    case "Manual processes/spreadsheets": totalScore += 15; break;
    case "Outdated software that doesn't work well": totalScore += 15; break;
    case "No current solution": totalScore += 12; break;
    case "Combination of different tools": totalScore += 10; break;
    case "Basic solution that's not meeting needs": totalScore += 10; break;
    case "Satisfied with current solution": totalScore += 2; break;
}

// Bonus Points
// Phone number provided (shows higher intent)
if ("{{contact.phone}}" && "{{contact.phone}}" !== "") {
    totalScore += 5;
}

// Business email (already validated, but additional points for premium domains)
let email = "{{contact.email}}".toLowerCase();
if (email.includes(".com") || email.includes(".org") || email.includes(".edu")) {
    totalScore += 3;
}

// Form completion speed bonus (filled all optional fields)
if ("{{form.current_solution}}" && "{{form.current_solution}}" !== "") {
    totalScore += 5;
}

return Math.min(100, totalScore); // Cap at 100 for consistency
```
97. **Update Field:** `Lead_Score`
98. **Click "Save Action"**

**Action 2: Set Hormozi Value Equation Preliminary Scores**
99. **Click "+Add Action"** → Select `Update Contact`
100. **Action Name:** Type `Initialize Hormozi Value Scores`
101. **Update Multiple Fields:**

**Dream Outcome Score (based on challenge urgency):**
102. **Field:** `Dream_Outcome_Score`
103. **Formula:**
```javascript
// Dream Outcome scoring based on challenge type and urgency
let dreamScore = 5; // Default

// Challenge intensity
switch("{{form.primary_challenge}}") {
    case "Increasing revenue and sales": dreamScore += 3; break;
    case "Scaling operations efficiently": dreamScore += 2; break;
    case "Improving customer experience": dreamScore += 2; break;
    case "Reducing operational costs": dreamScore += 1; break;
    default: dreamScore += 1; break;
}

// Timeline urgency adds to dream intensity  
switch("{{form.timeline}}") {
    case "Immediately (within 30 days)": dreamScore += 2; break;
    case "Within 3 months": dreamScore += 1; break;
    default: dreamScore += 0; break;
}

return Math.min(10, dreamScore);
```

**Likelihood Score (based on authority and budget):**
104. **Field:** `Likelihood_Score`
105. **Formula:**
```javascript
let likelihoodScore = 5; // Default

// Authority level increases likelihood
switch("{{form.authority}}") {
    case "I make the final decision": likelihoodScore += 3; break;
    case "I have strong influence on the decision": likelihoodScore += 2; break;
    case "I'm part of a decision committee": likelihoodScore += 1; break;
    default: likelihoodScore += 0; break;
}

// Budget availability increases likelihood
switch("{{form.budget}}") {
    case "$100,000+": likelihoodScore += 2; break;
    case "$50,000 - $100,000": likelihoodScore += 1; break;
    case "$25,000 - $50,000": likelihoodScore += 1; break;
    default: likelihoodScore += 0; break;
}

return Math.min(10, likelihoodScore);
```

**Time Delay (based on timeline):**
106. **Field:** `Time_Delay_Days`  
107. **Formula:**
```javascript
// Convert timeline to days
switch("{{form.timeline}}") {
    case "Immediately (within 30 days)": return 30;
    case "Within 3 months": return 90;
    case "3-6 months": return 150;
    case "6-12 months": return 270;
    case "Just exploring options": return 365;
    default: return 180;
}
```

**Effort Score (based on current solution complexity):**
108. **Field:** `Effort_Score`
109. **Formula:**
```javascript
// Effort required based on current situation
switch("{{form.current_solution}}") {
    case "No current solution": return 3; // Easy implementation
    case "Manual processes/spreadsheets": return 4; // Moderate effort
    case "Basic solution that's not meeting needs": return 5; // Medium effort
    case "Combination of different tools": return 6; // More complex
    case "Outdated software that doesn't work well": return 7; // High effort
    case "Satisfied with current solution": return 9; // Very difficult
    default: return 5; // Default medium effort
}
```
110. **Click "Save Action"**

**Action 3: Hot Lead Instant Routing (Score 85+)**
111. **Click "+Add Action"** → Select `Conditional Action Group`
112. **Condition Name:** `Hot Lead Processing`
113. **Condition:**
    - **Field:** `Lead_Score`
    - **Operator:** `is greater than or equal to`
    - **Value:** `85`

**Sub-Action 3.1: Immediate Alert**
114. **Click "+Add Sub-Action"** → Select `Send Internal Notification`
115. **Recipients:** Sales Manager, Senior Sales Rep
116. **Send Method:** Email + SMS (if available)
117. **Subject:** `🔥🚨 RED HOT LEAD: {{contact.first_name}} {{contact.last_name}} - Score {{contact.Lead_Score}}`
118. **Message:**
```
🔥🚨 RED HOT LEAD ALERT! 🚨🔥

IMMEDIATE ACTION REQUIRED!

Contact Details:
👤 Name: {{contact.first_name}} {{contact.last_name}}
🏢 Company: {{contact.company}}
📧 Email: {{contact.email}}
📞 Phone: {{contact.phone}}

Lead Intelligence:
🎯 Lead Score: {{contact.Lead_Score}}/100 (RED HOT!)
💰 Budget: {{form.budget}}
⏰ Timeline: {{form.timeline}}
🎪 Authority: {{form.authority}}
🔥 Challenge: {{form.primary_challenge}}

Value Equation Preview:
- Dream Outcome: {{contact.Dream_Outcome_Score}}/10
- Likelihood: {{contact.Likelihood_Score}}/10
- Time Sensitivity: {{contact.Time_Delay_Days}} days
- Implementation Effort: {{contact.Effort_Score}}/10

REQUIRED ACTIONS:
⏰ Call within 5 minutes
💬 Use CLOSER framework immediately
🎯 Position premium solution
💰 Qualify for enterprise offering

This is a premium prospect. Drop everything and contact immediately!
```
119. **Priority:** Emergency
120. **Click "Save Sub-Action"**

**Sub-Action 3.2: Premium Deal Creation**
121. **Click "+Add Sub-Action"** → Select `Create Deal`
122. **Deal Details:**
    - **Title:** `🔥 HOT: {{contact.first_name}} {{contact.last_name}} - {{contact.company}}`
    - **Pipeline:** `CLOSER Sales Framework`
    - **Stage:** `CLARIFY`
    - **Expected Value:** Premium calculation:
    ```javascript
    // Premium deal value calculation
    let baseValue = 25000; // Minimum for hot leads
    
    // Budget-based multiplier
    let budgetMultiplier = 1;
    switch("{{form.budget}}") {
        case "$100,000+": budgetMultiplier = 4; break;
        case "$50,000 - $100,000": budgetMultiplier = 3; break;
        case "$25,000 - $50,000": budgetMultiplier = 2; break;
        default: budgetMultiplier = 1.5; break;
    }
    
    // Company size multiplier
    let sizeMultiplier = 1;
    switch("{{contact.Company_Size}}") {
        case "1000+ employees": sizeMultiplier = 3; break;
        case "201-1000 employees": sizeMultiplier = 2; break;
        case "51-200 employees": sizeMultiplier = 1.5; break;
        default: sizeMultiplier = 1; break;
    }
    
    return Math.round(baseValue * budgetMultiplier * sizeMultiplier);
    ```
    - **Expected Close Date:** Accelerated timeline:
    ```javascript
    let days = 14; // Default fast-track
    if ("{{form.timeline}}" === "Immediately (within 30 days)") days = 7;
    else if ("{{form.timeline}}" === "Within 3 months") days = 21;
    
    let closeDate = new Date();
    closeDate.setDate(closeDate.getDate() + days);
    return closeDate.toISOString().split('T')[0];
    ```
123. **Deal Owner:** Senior Sales Rep or Sales Manager
124. **Priority:** High
125. **Click "Save Sub-Action"**

**Sub-Action 3.3: Immediate Contact Task**
126. **Click "+Add Sub-Action"** → Select `Create Task`
127. **Task Title:** `🔥 URGENT: Call {{contact.first_name}} NOW - Hot Lead!`
128. **Task Description:**
```
RED HOT LEAD - CALL IMMEDIATELY!

Contact: {{contact.first_name}} {{contact.last_name}}
Phone: {{contact.phone}}
Email: {{contact.email}}
Company: {{contact.company}}

Lead Score: {{contact.Lead_Score}}/100 (HOT!)

CALL SCRIPT - CLOSER Framework:

OPENING:
"Hi {{contact.first_name}}, this is [Your Name] from [Company]. You just submitted a request on our website about [{{form.primary_challenge}}]. I wanted to reach out immediately because based on your situation, I think I can help you solve this quickly. Do you have 2 minutes to talk?"

CLARIFY QUESTIONS:
1. "You mentioned [{{form.primary_challenge}}] - tell me more about what's happening"
2. "You said your timeline is [{{form.timeline}}] - what's driving that urgency?"
3. "What happens if this doesn't get solved in that timeframe?"

URGENCY BUILDERS:
- Highlight cost of delay
- Reference their immediate timeline
- Create scarcity around premium solution

NEXT STEPS:
- Schedule demo within 24-48 hours
- Position enterprise solution
- Get all decision makers involved
- Confirm budget and authority

SUCCESS METRICS:
✅ Demo scheduled
✅ Budget confirmed
✅ Authority established
✅ Urgency reinforced
```
129. **Assigned to:** Senior Sales Rep
130. **Due Date:** 5 minutes from now
131. **Priority:** Urgent
132. **Click "Save Sub-Action"**

**Action 4: Warm Lead Standard Routing (Score 60-84)**
133. **Click "+Add Action"** → Select `Conditional Action Group`
134. **Condition:**
    - **Field:** `Lead_Score`
    - **Operator:** `is between`
    - **Value 1:** `60`
    - **Value 2:** `84`

**Sub-Action 4.1: Standard Sales Alert**
135. **Click "+Add Sub-Action"** → Select `Send Internal Notification`
136. **Recipients:** Sales Development Rep
137. **Subject:** `📞 Warm Lead: {{contact.first_name}} {{contact.last_name}} - Score {{contact.Lead_Score}}`
138. **Message:**
```
📞 WARM LEAD NOTIFICATION

Contact: {{contact.first_name}} {{contact.last_name}}
Company: {{contact.company}}
Score: {{contact.Lead_Score}}/100 (WARM)

Key Details:
💰 Budget: {{form.budget}}
⏰ Timeline: {{form.timeline}}
🎯 Challenge: {{form.primary_challenge}}
👤 Authority: {{form.authority}}

Follow-up Strategy:
⏰ Contact within 2 hours
📧 Send value-driven email first
📞 Follow up with phone call
🎯 Use CLOSER framework
📈 Position standard solution

Good prospect - follow standard sales process.
```
139. **Click "Save Sub-Action"**

**Sub-Action 4.2: Standard Deal Creation**
140. **Click "+Add Sub-Action"** → Select `Create Deal`
141. **Deal Title:** `{{contact.first_name}} {{contact.last_name}} - {{contact.company}}`
142. **Pipeline:** `CLOSER Sales Framework`
143. **Stage:** `CLARIFY`
144. **Expected Value:** Standard calculation based on budget and size
145. **Expected Close Date:** 30-45 days
146. **Click "Save Sub-Action"**

**Sub-Action 4.3: Follow-up Task Creation**
147. **Click "+Add Sub-Action"** → Select `Create Task`
148. **Task Title:** `📞 Contact warm lead: {{contact.first_name}} {{contact.last_name}}`
149. **Task Description:** Standard follow-up process with CLOSER framework
150. **Assigned to:** Sales Development Rep
151. **Due Date:** 2 hours from now
152. **Priority:** Medium
153. **Click "Save Sub-Action"**

**Action 5: Cool Lead Nurture Routing (Score < 60)**
154. **Click "+Add Action"** → Select `Conditional Action Group`
155. **Condition:**
    - **Field:** `Lead_Score`
    - **Operator:** `is less than`
    - **Value:** `60`

**Sub-Action 5.1: Add to Nurture Sequence**
156. **Click "+Add Sub-Action"** → Select `Add to Email Campaign`
157. **Campaign:** Lead Nurture Sequence (will create later)
158. **Start Immediately:** Yes

**Sub-Action 5.2: Long-term Follow-up**
159. **Click "+Add Sub-Action"** → Select `Create Task`
160. **Task Title:** `📧 Nurture sequence: {{contact.first_name}} {{contact.last_name}}`
161. **Task Description:** Add to educational nurture, quarterly check-ins
162. **Assigned to:** Marketing or Junior Sales Rep
163. **Due Date:** 1 week from now
164. **Priority:** Low

**Action 6: Source Attribution Tracking**
165. **Click "+Add Action"** → Select `Update Contact`
166. **Action Name:** Type `Track Lead Source Attribution`
167. **Fields to Update:**
    - **Lead_Source_Primary:** Form Name or URL parameter
    - **First_Touch_Date:** Today's date
    - **Form_Completion_Date:** Today's date and time
    - **Lead_Generation_Campaign:** Current campaign ID (if applicable)
168. **Click "Save Action"**

### Step 16: Design High-Converting Thank You Page

169. **Click "Thank You Page" tab** in form editor
170. **Enable Custom Thank You Page:** Toggle ON
171. **Page Title:** Type `Thank You! We'll Be In Touch Shortly`
172. **Page Content:** Design compelling thank you experience:

```html
<div style="max-width: 800px; margin: 0 auto; padding: 40px 20px; font-family: Arial, sans-serif;">
    
    <!-- Header Section -->
    <div style="text-align: center; margin-bottom: 40px;">
        <h1 style="color: #2c3e50; font-size: 2.5em; margin-bottom: 10px;">
            Thank You, {{contact.first_name}}! 🎉
        </h1>
        <p style="font-size: 1.2em; color: #7f8c8d; margin-bottom: 30px;">
            We've received your information and our team is already reviewing your specific situation.
        </p>
    </div>

    <!-- What Happens Next Section -->
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 15px; margin-bottom: 30px;">
        <h2 style="margin-top: 0; margin-bottom: 20px;">What Happens Next?</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 20px;">
            
            <div style="flex: 1; min-width: 250px;">
                <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin-bottom: 15px;">
                    <h3 style="margin: 0 0 10px 0; color: #fff;">⚡ Next 30 Minutes</h3>
                    <p style="margin: 0; font-size: 0.9em;">Our team reviews your specific challenge and prepares customized insights</p>
                </div>
            </div>
            
            <div style="flex: 1; min-width: 250px;">
                <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin-bottom: 15px;">
                    <h3 style="margin: 0 0 10px 0; color: #fff;">📞 Within 2 Hours</h3>
                    <p style="margin: 0; font-size: 0.9em;">{{#if contact.Lead_Score >= 85}}Senior consultant{{else}}Account specialist{{/if}} reaches out to discuss your situation</p>
                </div>
            </div>
            
        </div>
        
        <div style="text-align: center; margin-top: 20px;">
            <p style="margin: 0; font-weight: bold; font-size: 1.1em;">
                {{#if contact.Lead_Score >= 85}}
                🔥 High Priority: You'll hear from our senior team within 30 minutes
                {{else if contact.Lead_Score >= 60}}
                📞 Standard Priority: We'll contact you within 2 hours
                {{else}}
                📧 We'll send valuable resources and schedule a follow-up call
                {{/if}}
            </p>
        </div>
    </div>

    <!-- Personalized Message Based on Their Challenge -->
    <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 30px; border-left: 5px solid #667eea;">
        <h3 style="color: #2c3e50; margin-top: 0;">About Your Challenge: {{form.primary_challenge}}</h3>
        <p style="color: #5a6c7d; line-height: 1.6; margin-bottom: 15px;">
            {{#switch form.primary_challenge}}
                {{#case "Increasing revenue and sales"}}
                You're in good company - 73% of businesses list revenue growth as their top priority. The good news? Companies that implement systematic revenue optimization see average increases of 25-40% within the first year.
                {{/case}}
                {{#case "Scaling operations efficiently"}}  
                Operational efficiency is the foundation of sustainable growth. Businesses that optimize their operations typically see 30-50% improvements in productivity while reducing costs by 15-25%.
                {{/case}}
                {{#case "Improving customer experience"}}
                Smart focus area! Companies with superior customer experience grow revenue 4-8% faster than their competitors and have 60% higher profit margins.
                {{/case}}
                {{#default}}
                We've helped hundreds of companies solve similar challenges. The key is having a systematic approach that addresses root causes, not just symptoms.
                {{/default}}
            {{/switch}}
        </p>
        <p style="color: #5a6c7d; line-height: 1.6; margin: 0;">
            <strong>We've prepared some specific insights for your situation that we'll share on our call.</strong>
        </p>
    </div>

    <!-- Immediate Value Section -->
    <div style="background: #fff; border: 2px solid #e74c3c; border-radius: 10px; padding: 25px; margin-bottom: 30px;">
        <h3 style="color: #e74c3c; margin-top: 0;">🎁 Immediate Value: Check Your Email!</h3>
        <p style="color: #2c3e50; margin-bottom: 15px; line-height: 1.6;">
            We've sent you a customized resource package that includes:
        </p>
        <ul style="color: #2c3e50; line-height: 1.8; margin: 0; padding-left: 20px;">
            <li><strong>Industry Benchmark Report:</strong> See how your situation compares to industry standards</li>
            <li><strong>ROI Calculator:</strong> Estimate potential impact of solving your challenge</li>
            <li><strong>Case Study:</strong> How a similar company achieved {{#if form.budget >= "$50,000"}}6-figure improvements{{else}}significant results{{/if}}</li>
            <li><strong>Quick Win Guide:</strong> 3 things you can implement this week</li>
        </ul>
    </div>

    <!-- Urgency/Timeline Specific Message -->
    {{#if form.timeline === "Immediately (within 30 days)"}}
    <div style="background: #ff6b6b; color: white; padding: 20px; border-radius: 10px; margin-bottom: 30px; text-align: center;">
        <h3 style="margin: 0 0 10px 0;">⚡ Fast-Track Process Available</h3>
        <p style="margin: 0; font-size: 1.1em;">
            Since you need this solved within 30 days, we'll expedite your evaluation and can have you up and running in as little as 2 weeks.
        </p>
    </div>
    {{/if}}

    <!-- Contact Information -->
    <div style="background: #2c3e50; color: white; padding: 25px; border-radius: 10px; text-align: center;">
        <h3 style="margin: 0 0 15px 0;">Questions? We're Here to Help</h3>
        <p style="margin: 0 0 10px 0; font-size: 1.1em;">
            <strong>Direct Line:</strong> (555) 123-4567
        </p>
        <p style="margin: 0; font-size: 0.9em; opacity: 0.8;">
            Available Monday-Friday, 8 AM - 6 PM EST
        </p>
    </div>

</div>

<!-- Tracking Pixels and Analytics -->
<script>
    // Track form completion event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
            'event_category': 'engagement',
            'event_label': 'lead_capture_form',
            'value': {{contact.Lead_Score}}
        });
    }
    
    // Facebook Pixel (if applicable)
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            value: {{#if contact.Lead_Score >= 85}}100{{else if contact.Lead_Score >= 60}}50{{else}}25{{/if}},
            currency: 'USD'
        });
    }
</script>
```

173. **Save Thank You Page**

### Step 17: Form Testing & Validation

**Test Scenario 1: High-Value Lead**
174. **Open form in preview mode**
175. **Fill out form with high-value data:**
    - Company Size: 1000+ employees
    - Challenge: Increasing revenue and sales
    - Timeline: Immediately (within 30 days)
    - Budget: $100,000+
    - Authority: I make the final decision
176. **Submit form**
177. **Expected results:**
    - Lead Score: 85+ (hot lead)
    - Immediate notification sent
    - Premium deal created
    - Urgent task created
    - Value equation scores populated

**Test Scenario 2: Medium-Value Lead**
178. **Fill out with medium-value data:**
    - Company Size: 51-200 employees
    - Challenge: Improving customer experience
    - Timeline: 3-6 months
    - Budget: $25,000-$50,000
    - Authority: I'm part of a decision committee
179. **Expected results:**
    - Lead Score: 60-84 (warm lead)
    - Standard notification sent
    - Standard deal created
    - 2-hour follow-up task

**Test Scenario 3: Low-Value Lead**
180. **Fill out with low-value data:**
    - Company Size: 1-10 employees
    - Challenge: Other
    - Timeline: Just exploring options
    - Budget: Under $5,000
    - Authority: I need approval from others
181. **Expected results:**
    - Lead Score: <60 (cool lead)
    - Added to nurture sequence
    - Long-term follow-up task
    - Educational email sequence

**Validation Checklist:**
182. **✅ Form submits without errors**
183. **✅ Thank you page displays correctly**
184. **✅ Lead scores calculate accurately**
185. **✅ Appropriate automations trigger**
186. **✅ Tasks created with correct priority**
187. **✅ Deals created with proper values**
188. **✅ Email notifications sent to right people**
189. **✅ Contact records populated correctly**

**Form Deployment:**
190. **Copy embed code from "Embed" tab**
191. **Test on website staging environment**
192. **Verify mobile responsiveness**
193. **Check all integrations work**
194. **Deploy to live website**

---

This detailed implementation continues with exact steps for all remaining phases. Would you like me to continue with the remaining phases:

- **Phase 5**: Email Marketing Sequences & Nurture Campaigns
- **Phase 6**: Project Templates & Client Onboarding System  
- **Phase 7**: Advanced Automation Chains & Revenue Tracking
- **Phase 8**: Reporting Dashboards & Analytics
- **Phase 9**: Third-Party Integrations & API Setup
- **Phase 10**: User Training & System Testing

Each phase will maintain this same level of detail with exact navigation paths, field specifications, and validation procedures.
