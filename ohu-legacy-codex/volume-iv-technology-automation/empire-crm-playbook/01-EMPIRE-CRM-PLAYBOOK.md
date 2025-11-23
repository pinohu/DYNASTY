# Empire Legacy CRM Playbook
## Your Complete Revenue Operating System

---

## Table of Contents

1. [Empire-Level CRM Foundations](#empire-level-crm-foundations)
2. [Customer Lifecycle Architecture](#customer-lifecycle-architecture)
3. [Pipeline Maps & Stage Definitions](#pipeline-maps--stage-definitions)
4. [Legacy-Level Automations](#Legacy-level-automations)
5. [Lead Routing & Assignment](#lead-routing--assignment)
6. [Advanced Segmentation](#advanced-segmentation)
7. [Legacy Intelligence Dashboards](#Legacy-intelligence-dashboards)
8. [SOP Library Integration](#sop-library-integration)
9. [Offer â†’ Pipeline Mapping](#offer--pipeline-mapping)
10. [AppSumo Stack Integrations](#appsumo-stack-integrations)
11. [Optimization Rhythm](#optimization-rhythm)

---

## ðŸ›ï¸ Empire-Level CRM Foundations

### Philosophy: CRM as Revenue Operating System

Your CRM is not softwareâ€”it's the central nervous system of your revenue machine. Every interaction, stage, and automation connects directly to money.

### Core Principles

1. **Data-Driven Decisions**: Every metric ties to revenue
2. **Automation-First**: Manual work is waste
3. **Ownership Clarity**: Every record has an owner
4. **Process Consistency**: SOPs for everything
5. **Scalable Architecture**: Built for 10x growth

### CRM Platform Selection Matrix

| Platform | Best For | Strengths | Cost Range |
|----------|----------|-----------|------------|
| **SuiteDash** | Service businesses, agencies | All-in-one, white-label | $97-297/mo |
| **GoHighLevel** | Marketing agencies, local businesses | Marketing automation built-in | $97-497/mo |
| **HubSpot** | B2B, enterprise | Free tier, powerful automation | Free-$1,200/mo |
| **Pipedrive** | Sales teams | Simple, visual pipelines | $14.90-99.90/mo |
| **Salesforce** | Enterprise, complex sales | Maximum customization | $25-300/user/mo |

**Recommendation**: Start with SuiteDash or GoHighLevel for all-in-one power, or HubSpot for free tier + growth path.

---

##  Customer Lifecycle Architecture

### The Enterprise Customer Journey

```
LEAD â†’ Legacy MEMBER â†’ LOYALIST â†’ EXPANSION â†’ AMBASSADOR
```

### Stage Definitions

#### 1. LEAD
**Definition**: Someone who has shown interest but hasn't purchased
**Entry Criteria**: 
- Filled out a form
- Downloaded a resource
- Attended a webinar
- Clicked a link in an email

**Exit Criteria**: Makes first purchase OR becomes disqualified

**Key Metrics**:
- Lead source
- Lead score
- Engagement level
- Time in stage

#### 2. Legacy MEMBER
**Definition**: First-time customer who has made an initial purchase
**Entry Criteria**: First transaction completed
**Exit Criteria**: Makes second purchase OR becomes Loyalist

**Key Metrics**:
- First purchase value
- Time to first purchase
- Product/service purchased
- Onboarding completion rate

#### 3. LOYALIST
**Definition**: Repeat customer with 2+ purchases or active subscription
**Entry Criteria**: Second purchase OR subscription active
**Exit Criteria**: Expansion opportunity identified OR churn

**Key Metrics**:
- Purchase frequency
- Average order value
- Lifetime value to date
- Engagement score

#### 4. EXPANSION
**Definition**: Customer ready for upsell, cross-sell, or upgrade
**Entry Criteria**: 
- High engagement score
- Completed onboarding
- Using core features
- Time-based trigger (e.g., 90 days)

**Exit Criteria**: Expansion purchase made OR opportunity lost

**Key Metrics**:
- Expansion opportunity value
- Time to expansion
- Expansion conversion rate
- Product fit score

#### 5. AMBASSADOR
**Definition**: High-value customer who refers others
**Entry Criteria**: 
- 3+ purchases OR
- Referred 1+ customer OR
- High NPS score (9-10)

**Exit Criteria**: None (lifetime status)

**Key Metrics**:
- Referral count
- Referral value
- NPS score
- Advocacy actions

---

## Pipeline Maps & Stage Definitions

### Standard Sales Pipeline (B2B/Service)

```
1. LEAD CAPTURED
   â†“
2. QUALIFIED
   â†“
3. DISCOVERY CALL SCHEDULED
   â†“
4. DISCOVERY CALL COMPLETED
   â†“
5. PROPOSAL SENT
   â†“
6. PROPOSAL REVIEWED
   â†“
7. NEGOTIATION
   â†“
8. CLOSED WON
   â†“
9. ONBOARDING
   â†“
10. ACTIVE CLIENT
```

### E-Commerce Pipeline (Simplified)

```
1. VISITOR
   â†“
2. CART ABANDONED
   â†“
3. FIRST PURCHASE
   â†“
4. REPEAT CUSTOMER
   â†“
5. VIP MEMBER
```

### Membership/Subscription Pipeline

```
1. TRIAL STARTED
   â†“
2. TRIAL ACTIVE
   â†“
3. CONVERSION OPPORTUNITY
   â†“
4. MEMBER (ACTIVE)
   â†“
5. EXPANSION OPPORTUNITY
   â†“
6. CHURN RISK
   â†“
7. CHURNED
```

### Stage Entry/Exit Criteria Template

For each stage, define:

**Entry Criteria**:
- [ ] Specific action completed
- [ ] Data field updated
- [ ] Time-based trigger
- [ ] Score threshold reached

**Exit Criteria**:
- [ ] Next action completed
- [ ] Owner changes
- [ ] Status field updates
- [ ] Automation triggers

**Required Actions**:
- [ ] Owner must complete X within Y hours
- [ ] System sends email Z
- [ ] Task created for owner
- [ ] Notification sent

**SLAs**:
- Maximum time in stage: [X] days
- Response time: [Y] hours
- Follow-up frequency: [Z] days

---

## âš™ï¸ Legacy-Level Automations

### 1. Lead Capture Automation

**Trigger**: Form submission OR landing page visit
**Actions**:
1. Create contact in CRM
2. Tag with lead source
3. Assign lead score (0-100)
4. Route to appropriate owner
5. Send welcome email sequence
6. Add to nurture campaign
7. Create follow-up task

**Tools**: CRM native automation OR Zapier/Make.com

### 2. Lead Nurturing Automation

**Trigger**: Lead enters "LEAD" stage
**Actions**:
1. Start email sequence (5-7 emails over 14 days)
2. Track email opens/clicks
3. Update lead score based on engagement
4. If high engagement â†’ move to "QUALIFIED"
5. If no engagement after 30 days â†’ mark as "COLD"

**Email Sequence Example**:
- Day 0: Welcome + value
- Day 3: Case study
- Day 7: Social proof
- Day 10: Offer/discount
- Day 14: Final call-to-action

### 3. Pipeline Progression Automation

**Trigger**: Deal moves to new stage
**Actions**:
1. Update deal owner
2. Send internal notification
3. Create next-step task
4. Update customer record
5. Trigger stage-specific email
6. Update pipeline dashboard

### 4. Onboarding Automation

**Trigger**: Deal moves to "CLOSED WON"
**Actions**:
1. Create onboarding checklist
2. Send welcome email to customer
3. Schedule onboarding call
4. Assign customer success owner
5. Create onboarding tasks
6. Start onboarding email sequence
7. Update customer lifecycle stage to "Legacy MEMBER"

### 5. Customer Success Automation

**Trigger**: Customer in "ACTIVE CLIENT" stage
**Actions**:
1. Schedule check-in calls (30, 60, 90 days)
2. Send satisfaction surveys
3. Track usage/engagement
4. Identify expansion opportunities
5. Flag churn risks
6. Request testimonials/reviews

### 6. Expansion Automation

**Trigger**: Customer qualifies for expansion
**Actions**:
1. Create expansion opportunity
2. Assign to account manager
3. Send expansion offer email
4. Schedule expansion call
5. Track expansion pipeline
6. Celebrate wins

### 7. Churn Prevention Automation

**Trigger**: Churn risk detected (low engagement, payment failed, etc.)
**Actions**:
1. Flag account as "CHURN RISK"
2. Assign to retention specialist
3. Send re-engagement email
4. Schedule retention call
5. Offer win-back incentive
6. Track retention efforts

---

## Lead Routing & Assignment

### Routing Rules Framework

#### Rule 1: Source-Based Routing
```
IF lead source = "Facebook Ads"
  THEN assign to "Sales Rep A"
  
IF lead source = "Google Ads"
  THEN assign to "Sales Rep B"
  
IF lead source = "Referral"
  THEN assign to "Owner"
```

#### Rule 2: Geography-Based Routing
```
IF state = "CA, NY, TX"
  THEN assign to "West Coast Team"
  
IF state = "FL, GA, NC"
  THEN assign to "East Coast Team"
```

#### Rule 3: Product/Service Routing
```
IF interested_in = "Product A"
  THEN assign to "Product A Specialist"
  
IF interested_in = "Service B"
  THEN assign to "Service B Team"
```

#### Rule 4: Round-Robin Routing
```
IF no specific rule matches
  THEN assign using round-robin
  (Distribute evenly across team)
```

#### Rule 5: Score-Based Routing
```
IF lead_score >= 80
  THEN assign to "Senior Rep"
  
IF lead_score < 80 AND >= 50
  THEN assign to "Junior Rep"
  
IF lead_score < 50
  THEN assign to "SDR Team"
```

### Assignment Fallback Rules

1. **Primary Owner**: Assigned based on routing rules
2. **Fallback Owner**: If primary unavailable, assign to fallback
3. **Team Assignment**: If individual unavailable, assign to team
4. **Queue System**: If all unavailable, add to queue for next available

---

## ðŸŽ¨ Advanced Segmentation

### Segmentation Dimensions

#### 1. Buyer Type Segmentation
- **Enterprise**: $50K+ deals, long sales cycle
- **Mid-Market**: $10K-50K deals, medium cycle
- **SMB**: <$10K deals, short cycle
- **Consumer**: B2C, transactional

#### 2. Offer Tier Segmentation
- **Tier 1**: Premium/high-ticket
- **Tier 2**: Mid-tier
- **Tier 3**: Entry-level
- **Tier 4**: Free/trial

#### 3. Territory Segmentation
- **Geographic**: By state, region, country
- **Industry**: By vertical (real estate, healthcare, etc.)
- **Account Size**: By company size or revenue

#### 4. Behavioral Segmentation
- **Engagement Level**: High, medium, low
- **Purchase History**: First-time, repeat, VIP
- **Lifecycle Stage**: Lead, member, loyalist, etc.

### Segmentation Implementation

**In Your CRM**:
1. Create custom fields for each dimension
2. Use tags/labels for segmentation
3. Build saved lists/views for each segment
4. Create segment-specific campaigns
5. Track segment performance

**Example Tags**:
- `buyer-type:enterprise`
- `offer-tier:premium`
- `territory:west-coast`
- `behavior:high-engagement`

---

##  Legacy Intelligence Dashboards

### Dashboard 1: Pipeline Health

**Metrics**:
- Total pipeline value
- Weighted pipeline value
- Deals by stage
- Average deal size
- Pipeline velocity (days)
- Win rate by stage
- Conversion rates

**Visualizations**:
- Pipeline funnel chart
- Stage distribution
- Trend over time
- Stage conversion rates

**Refresh**: Real-time or daily

### Dashboard 2: Velocity Analysis

**Metrics**:
- Average days in each stage
- Fastest deals (top 10%)
- Slowest deals (bottom 10%)
- Stage bottlenecks
- Time to close (overall)

**Visualizations**:
- Stage duration heatmap
- Deal velocity scatter plot
- Bottleneck identification
- Trend analysis

**Action Items**: Identify stages where deals get stuck

### Dashboard 3: Source ROI

**Metrics**:
- Leads by source
- Conversion rate by source
- Revenue by source
- Cost per lead by source
- ROI by source
- Customer lifetime value by source

**Visualizations**:
- Source performance matrix
- ROI waterfall chart
- Source comparison table

**Action Items**: Double down on high-ROI sources, cut low-ROI sources

### Dashboard 4: Rep Performance

**Metrics**:
- Deals closed per rep
- Revenue per rep
- Average deal size per rep
- Conversion rate per rep
- Pipeline value per rep
- Activity metrics (calls, emails, meetings)

**Visualizations**:
- Rep leaderboard
- Performance trends
- Activity vs. results correlation

**Action Items**: Identify top performers, coach underperformers

### Dashboard 5: Money Levers (Hormozi Framework)

**Lever 1: Leads**
- Total leads
- Leads by source
- Lead cost
- Lead quality score

**Lever 2: Conversion**
- Conversion rate by stage
- Overall conversion rate
- Conversion by source
- Conversion by rep

**Lever 3: Transaction Value**
- Average deal size
- Deal size by product/service
- Upsell/cross-sell rate
- Average order value trends

**Lever 4: Frequency**
- Purchase frequency
- Renewal rate
- Expansion rate
- Repeat purchase rate

**Lever 5: Margin**
- Gross margin %
- Cost per acquisition
- Operating expenses
- Net profit margin

**Visualizations**: One chart per lever, trend over time

---

## SOP Library Integration

Your CRM SOPs are documented in [04-SOP-TEMPLATES-LIBRARY.md](./04-SOP-TEMPLATES-LIBRARY.md).

**Key SOPs for CRM Operations**:
1. Discovery Call SOP
2. Consultation SOP
3. Proposal SOP
4. Follow-Up Cadence SOP
5. Negotiation & Closing SOP
6. Onboarding SOP
7. Renewal & Expansion SOP
8. Automation QA SOP
9. Data Hygiene SOP
10. Weekly CRM Admin Review SOP

**Integration Points**:
- Each SOP references specific CRM stages
- SOPs define required CRM actions
- SOPs specify data entry requirements
- SOPs include CRM task creation steps

---

## ðŸŽ Offer â†’ Pipeline Mapping

### Mapping Framework

For each offer you sell, map it to:
1. **Target Pipeline**: Which pipeline does this offer use?
2. **Entry Stage**: Where do leads enter?
3. **Key Stages**: What stages are required?
4. **Exit Criteria**: What defines "won"?
5. **Automation Triggers**: What automations fire?

### Example: High-Ticket Service Offer

**Offer**: $10K Consulting Package
**Pipeline**: Standard Sales Pipeline
**Entry Stage**: LEAD CAPTURED
**Key Stages**:
- QUALIFIED (must have budget + authority)
- DISCOVERY CALL (required)
- PROPOSAL SENT (custom proposal)
- NEGOTIATION (common)
- CLOSED WON

**Automations**:
- Lead capture â†’ welcome email
- Qualified â†’ schedule discovery call
- Discovery completed â†’ create proposal task
- Proposal sent â†’ follow-up sequence
- Closed won â†’ onboarding automation

### Example: Low-Ticket Product Offer

**Offer**: $97 Digital Product
**Pipeline**: E-Commerce Pipeline
**Entry Stage**: VISITOR
**Key Stages**:
- CART ABANDONED (if cart left)
- FIRST PURCHASE (immediate)
- REPEAT CUSTOMER (if buys again)

**Automations**:
- Cart abandoned â†’ recovery email (3 emails)
- First purchase â†’ thank you + upsell
- Repeat customer â†’ VIP sequence

---

## ðŸ”Œ AppSumo Stack Integrations

### Core Integrations

#### 1. Albato / Pabbly Connect (Automation)
**Use Case**: Connect CRM to other tools
**Common Integrations**:
- CRM â†’ Email marketing
- CRM â†’ Calendar booking
- CRM â†’ Payment processor
- CRM â†’ Document signing
- CRM â†’ Project management

**Setup**:
1. Connect CRM account
2. Create workflow
3. Set trigger (CRM event)
4. Set action (external tool)
5. Test and activate

#### 2. TidyCal (Calendar Booking)
**Use Case**: Let leads book discovery calls
**Integration**:
- CRM form â†’ TidyCal link
- Booking â†’ Create CRM task
- Confirmation â†’ Update CRM record
- Reminder â†’ CRM notification

#### 3. SendFox (Email Marketing)
**Use Case**: Email sequences and broadcasts
**Integration**:
- CRM tag â†’ Add to SendFox list
- CRM stage change â†’ Trigger email
- Email engagement â†’ Update CRM score
- Unsubscribe â†’ Update CRM status

#### 4. DocuSign / PandaDoc (Document Signing)
**Use Case**: Proposals and contracts
**Integration**:
- CRM deal â†’ Create document
- Send for signature â†’ Update deal stage
- Signed â†’ Move to "CLOSED WON"
- Not signed â†’ Follow-up automation

#### 5. Stripe / PayPal (Payments)
**Use Case**: Payment processing
**Integration**:
- Payment received â†’ Update CRM deal
- Recurring payment â†’ Update subscription status
- Payment failed â†’ Churn risk automation
- Refund â†’ Update deal status

### Integration Best Practices

1. **Test First**: Always test integrations in sandbox
2. **Error Handling**: Set up error notifications
3. **Data Sync**: Ensure bidirectional sync where needed
4. **Documentation**: Document each integration
5. **Monitoring**: Check integration health weekly

---

##  Optimization Rhythm

### Weekly Optimization (30 minutes)

**Every Monday**:
1. Review pipeline health dashboard
2. Check for stuck deals (past SLA)
3. Review automation errors
4. Check lead routing issues
5. Review rep activity

**Actions**:
- Unstick deals
- Fix automation errors
- Adjust routing if needed
- Coach reps on activity

### Monthly Optimization (2 hours)

**First Monday of Month**:
1. Full pipeline analysis
2. Conversion rate review
3. Source ROI analysis
4. Rep performance review
5. Automation audit
6. Data hygiene check

**Actions**:
- Identify bottlenecks
- Optimize low-converting stages
- Adjust source allocation
- Update automations
- Clean data

### Quarterly Optimization (Half day)

**Quarterly Review**:
1. Full system audit (use [02-CRM-AUDIT-DIAGNOSTIC.md](./02-CRM-AUDIT-DIAGNOSTIC.md))
2. Process improvement review
3. SOP updates
4. Technology stack review
5. Team training needs
6. Goal setting for next quarter

**Actions**:
- Major process changes
- New automation implementation
- Team training
- Technology upgrades
- Strategic planning

---

## âœ… Implementation Checklist

- [ ] Choose CRM platform
- [ ] Set up customer lifecycle stages
- [ ] Build pipeline(s) for your offers
- [ ] Define stage entry/exit criteria
- [ ] Set up lead routing rules
- [ ] Build core automations
- [ ] Create segmentation structure
- [ ] Build intelligence dashboards
- [ ] Integrate AppSumo stack tools
- [ ] Document SOPs
- [ ] Train team
- [ ] Set optimization rhythm

---

## Next Steps

1. **Read**: [02-CRM-AUDIT-DIAGNOSTIC.md](./02-CRM-AUDIT-DIAGNOSTIC.md) to assess your current CRM
2. **Design**: Use [03-Legacy-PIPELINE-DESIGN.md](./03-Legacy-PIPELINE-DESIGN.md) to build your pipeline
3. **Process**: Implement [04-SOP-TEMPLATES-LIBRARY.md](./04-SOP-TEMPLATES-LIBRARY.md) SOPs
4. **Execute**: Follow [05-14-DAY-IMPLEMENTATION-PLAN.md](./05-14-DAY-IMPLEMENTATION-PLAN.md)

---

*Built for Empire Legacy. Designed for scale. Optimized for revenue.*





