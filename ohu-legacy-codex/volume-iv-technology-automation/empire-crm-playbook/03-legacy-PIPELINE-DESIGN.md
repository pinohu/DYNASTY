# Legacy-Ready Pipeline Design
## Build Your Pipeline From Scratch

---

## Table of Contents

1. [Pipeline Design Framework](#pipeline-design-framework)
2. [Standard Sales Pipeline](#standard-sales-pipeline)
3. [E-Commerce Pipeline](#e-commerce-pipeline)
4. [Membership/Subscription Pipeline](#membership-subscription-pipeline)
5. [Service-Based Pipeline](#service-based-pipeline)
6. [Stage Definitions & SLAs](#stage-definitions--slas)
7. [Ownership & Fallback Rules](#ownership--fallback-rules)
8. [Lead Routing Logic](#lead-routing-logic)
9. [Automation Triggers](#automation-triggers)
10. [Revenue Mapping (Hormozi Lens)](#revenue-mapping-hormozi-lens)
11. [Visual Flow Diagrams](#visual-flow-diagrams)
12. [Common Mistakes to Avoid](#common-mistakes-to-avoid)

---

## Pipeline Design Framework

### Design Principles

1. **Stages Match Process**: Each stage represents a real step in your sales process
2. **Clear Entry/Exit**: Every stage has defined criteria for entry and exit
3. **Measurable Progress**: You can measure velocity and conversion at each stage
4. **Automation-Ready**: Stages trigger automations automatically
5. **Revenue-Focused**: Every stage connects to a money lever

### Pipeline Selection Guide

**Choose your pipeline type**:
- **Standard Sales Pipeline**: B2B services, consulting, high-ticket
- **E-Commerce Pipeline**: Products, low-ticket, transactional
- **Membership Pipeline**: Subscriptions, recurring revenue
- **Service Pipeline**: Project-based, retainer services

**You can have multiple pipelines** (one per offer type)

---

## Standard Sales Pipeline

### Stage Flow

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

### Stage 1: LEAD CAPTURED

**Definition**: New lead has entered the system

**Entry Criteria**:
- Form submitted OR
- Contact imported OR
- Manual entry created

**Required Actions**:
- [ ] Assign owner (via routing rules)
- [ ] Tag with lead source
- [ ] Calculate lead score
- [ ] Send welcome email (automated)

**Exit Criteria**:
- Lead is qualified (moves to Stage 2) OR
- Lead is disqualified (moves to "DISQUALIFIED")

**SLA**: 
- Assignment: Within 1 hour
- First contact: Within 4 hours
- Maximum time in stage: 48 hours

**Owner**: Assigned by routing rules
**Fallback Owner**: Team queue or manager

**Automations**:
- Lead capture â†’ Create contact
- Lead capture â†’ Assign owner
- Lead capture â†’ Send welcome email
- Lead capture â†’ Add to nurture sequence
- Lead capture â†’ Create follow-up task

**Revenue Connection** (Hormozi):
- **Lever**: Leads
- **Metric**: Lead volume, lead quality, lead cost

---

### Stage 2: QUALIFIED

**Definition**: Lead meets qualification criteria (BANT: Budget, Authority, Need, Timeline)

**Entry Criteria**:
- BANT criteria confirmed OR
- Lead score â‰¥ 70 OR
- Manual qualification by rep

**Required Actions**:
- [ ] Verify budget
- [ ] Identify decision maker
- [ ] Confirm need
- [ ] Establish timeline
- [ ] Schedule discovery call

**Exit Criteria**:
- Discovery call scheduled (moves to Stage 3) OR
- Disqualified (moves to "DISQUALIFIED")

**SLA**:
- Qualification check: Within 24 hours
- Discovery call scheduled: Within 48 hours
- Maximum time in stage: 72 hours

**Owner**: Assigned rep
**Fallback Owner**: Sales manager

**Automations**:
- Qualified â†’ Create discovery call task
- Qualified â†’ Send discovery call email
- Qualified â†’ Update lead score
- Qualified â†’ Notify sales manager

**Revenue Connection** (Hormozi):
- **Lever**: Conversion (Lead â†’ Qualified)
- **Metric**: Qualification rate, qualified lead volume

---

### Stage 3: DISCOVERY CALL SCHEDULED

**Definition**: Discovery call is on the calendar

**Entry Criteria**:
- Calendar event created OR
- Call scheduled in CRM

**Required Actions**:
- [ ] Send calendar confirmation
- [ ] Send pre-call preparation email
- [ ] Prepare discovery questions
- [ ] Review lead background

**Exit Criteria**:
- Discovery call completed (moves to Stage 4) OR
- Call no-show (moves back to Stage 2) OR
- Call cancelled (moves back to Stage 2)

**SLA**:
- Call scheduled: Within 48 hours of qualification
- Pre-call prep: 24 hours before call
- Maximum time in stage: Until call date

**Owner**: Assigned rep
**Fallback Owner**: Sales manager

**Automations**:
- Scheduled â†’ Send confirmation email
- Scheduled â†’ Send pre-call email (24h before)
- Scheduled â†’ Create prep task
- Scheduled â†’ Calendar reminder (1h before)

**Revenue Connection** (Hormozi):
- **Lever**: Conversion (Qualified â†’ Call)
- **Metric**: Call show rate, call-to-close rate

---

### Stage 4: DISCOVERY CALL COMPLETED

**Definition**: Discovery call has been held and notes recorded

**Entry Criteria**:
- Call completed AND
- Notes added to CRM AND
- Next steps identified

**Required Actions**:
- [ ] Add call notes
- [ ] Update deal value (if discussed)
- [ ] Identify pain points
- [ ] Determine fit
- [ ] Create proposal (if fit confirmed)

**Exit Criteria**:
- Proposal created (moves to Stage 5) OR
- No fit (moves to "DISQUALIFIED") OR
- Needs more info (moves back to Stage 2)

**SLA**:
- Notes added: Within 2 hours of call
- Next steps: Within 24 hours
- Maximum time in stage: 48 hours

**Owner**: Assigned rep
**Fallback Owner**: Sales manager

**Automations**:
- Call completed â†’ Create proposal task
- Call completed â†’ Send thank you email
- Call completed â†’ Update deal value
- Call completed â†’ Notify manager

**Revenue Connection** (Hormozi):
- **Lever**: Conversion (Call â†’ Proposal)
- **Metric**: Call completion rate, fit rate

---

### Stage 5: PROPOSAL SENT

**Definition**: Proposal document has been sent to prospect

**Entry Criteria**:
- Proposal created AND
- Proposal sent to prospect

**Required Actions**:
- [ ] Create proposal document
- [ ] Send proposal via email
- [ ] Log proposal in CRM
- [ ] Set follow-up reminder

**Exit Criteria**:
- Proposal reviewed (moves to Stage 6) OR
- Proposal rejected (moves to "LOST") OR
- No response after follow-ups (moves to "LOST")

**SLA**:
- Proposal sent: Within 48 hours of discovery call
- First follow-up: 3 days after sending
- Maximum time in stage: 14 days

**Owner**: Assigned rep
**Fallback Owner**: Sales manager

**Automations**:
- Proposal sent â†’ Send proposal email
- Proposal sent â†’ Create follow-up task (3 days)
- Proposal sent â†’ Track email opens
- Proposal sent â†’ Update deal probability

**Revenue Connection** (Hormozi):
- **Lever**: Transaction Value (proposal amount)
- **Metric**: Proposal acceptance rate, average proposal value

---

### Stage 6: PROPOSAL REVIEWED

**Definition**: Prospect has reviewed the proposal

**Entry Criteria**:
- Proposal opened (tracked) OR
- Prospect confirms review OR
- Questions asked about proposal

**Required Actions**:
- [ ] Answer questions
- [ ] Address concerns
- [ ] Negotiate if needed
- [ ] Move to negotiation or close

**Exit Criteria**:
- Negotiation needed (moves to Stage 7) OR
- Ready to close (moves to Stage 8) OR
- Rejected (moves to "LOST")

**SLA**:
- Response to questions: Within 4 hours
- Maximum time in stage: 7 days

**Owner**: Assigned rep
**Fallback Owner**: Sales manager

**Automations**:
- Reviewed â†’ Send follow-up email
- Reviewed â†’ Create negotiation task
- Reviewed â†’ Update deal probability

**Revenue Connection** (Hormozi):
- **Lever**: Conversion (Proposal â†’ Close)
- **Metric**: Proposal-to-close rate

---

### Stage 7: NEGOTIATION

**Definition**: Actively negotiating terms, price, or scope

**Entry Criteria**:
- Negotiation started OR
- Counter-offer received OR
- Terms being discussed

**Required Actions**:
- [ ] Document negotiation points
- [ ] Get approval for concessions
- [ ] Update proposal if needed
- [ ] Move toward agreement

**Exit Criteria**:
- Agreement reached (moves to Stage 8) OR
- Negotiation fails (moves to "LOST")

**SLA**:
- Response to negotiation: Within 24 hours
- Maximum time in stage: 14 days

**Owner**: Assigned rep (may involve manager)
**Fallback Owner**: Sales manager

**Automations**:
- Negotiation â†’ Notify manager
- Negotiation â†’ Create approval task
- Negotiation â†’ Update deal value (if changed)

**Revenue Connection** (Hormozi):
- **Lever**: Transaction Value (final deal size)
- **Metric**: Negotiation win rate, average discount

---

### Stage 8: CLOSED WON

**Definition**: Deal is closed, contract signed, payment received

**Entry Criteria**:
- Contract signed AND
- Payment received (or scheduled) AND
- Deal marked as "Won"

**Required Actions**:
- [ ] Mark deal as "Won"
- [ ] Update revenue forecast
- [ ] Trigger onboarding
- [ ] Celebrate win

**Exit Criteria**:
- Onboarding started (moves to Stage 9)

**SLA**:
- Deal closed: Same day as agreement
- Onboarding triggered: Within 24 hours

**Owner**: Assigned rep â†’ Customer Success
**Fallback Owner**: Customer Success Manager

**Automations**:
- Closed won â†’ Trigger onboarding automation
- Closed won â†’ Send welcome email
- Closed won â†’ Create onboarding tasks
- Closed won â†’ Update revenue dashboard
- Closed won â†’ Notify team

**Revenue Connection** (Hormozi):
- **Lever**: Conversion (final conversion)
- **Metric**: Close rate, revenue closed

---

### Stage 9: ONBOARDING

**Definition**: New client is being onboarded

**Entry Criteria**:
- Deal moved to "CLOSED WON" AND
- Onboarding process started

**Required Actions**:
- [ ] Complete onboarding checklist
- [ ] Schedule kickoff call
- [ ] Set up account access
- [ ] Provide resources

**Exit Criteria**:
- Onboarding completed (moves to Stage 10) OR
- Onboarding stalled (flagged for review)

**SLA**:
- Kickoff call: Within 7 days
- Onboarding complete: Within 30 days
- Maximum time in stage: 45 days

**Owner**: Customer Success
**Fallback Owner**: Customer Success Manager

**Automations**:
- Onboarding â†’ Send welcome sequence
- Onboarding â†’ Create onboarding tasks
- Onboarding â†’ Schedule kickoff call
- Onboarding â†’ Track completion

**Revenue Connection** (Hormozi):
- **Lever**: Frequency (sets up for repeat business)
- **Metric**: Onboarding completion rate, time to value

---

### Stage 10: ACTIVE CLIENT

**Definition**: Client is active and using your service

**Entry Criteria**:
- Onboarding completed AND
- Client is active

**Required Actions**:
- [ ] Regular check-ins (30, 60, 90 days)
- [ ] Track usage/engagement
- [ ] Identify expansion opportunities
- [ ] Ensure satisfaction

**Exit Criteria**:
- Expansion opportunity (create expansion deal) OR
- Churn risk (move to "CHURN RISK") OR
- Churned (move to "CHURNED")

**SLA**:
- Check-in calls: 30, 60, 90 days
- Response to issues: Within 4 hours
- No maximum time (ongoing)

**Owner**: Customer Success
**Fallback Owner**: Account Manager

**Automations**:
- Active client â†’ Schedule check-in calls
- Active client â†’ Send satisfaction surveys
- Active client â†’ Track engagement
- Active client â†’ Identify expansion opportunities
- Active client â†’ Flag churn risks

**Revenue Connection** (Hormozi):
- **Lever**: Frequency, Margin (retention, expansion)
- **Metric**: Retention rate, expansion rate, lifetime value

---

## ðŸ›’ E-Commerce Pipeline

### Simplified Flow

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

### Stage Definitions (Abbreviated)

**Stage 1: VISITOR**
- Entry: Website visit
- Exit: Adds to cart OR leaves
- Automation: Track visit, start retargeting

**Stage 2: CART ABANDONED**
- Entry: Cart created but not purchased
- Exit: Purchase made OR 30 days passed
- Automation: Abandoned cart email sequence (3 emails)

**Stage 3: FIRST PURCHASE**
- Entry: First transaction completed
- Exit: Second purchase OR 90 days passed
- Automation: Thank you email, upsell offer

**Stage 4: REPEAT CUSTOMER**
- Entry: Second purchase made
- Exit: VIP status OR churn
- Automation: Loyalty program enrollment

**Stage 5: VIP MEMBER**
- Entry: 5+ purchases OR $500+ lifetime value
- Exit: None (lifetime status)
- Automation: VIP perks, early access, referrals

---

##  Membership/Subscription Pipeline

### Flow

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

### Key Stages

**Stage 1: TRIAL STARTED**
- Entry: Trial signup
- Automation: Welcome email, onboarding sequence

**Stage 3: CONVERSION OPPORTUNITY**
- Entry: 3 days before trial ends
- Automation: Conversion email sequence, offer discount

**Stage 4: MEMBER (ACTIVE)**
- Entry: Subscription active
- Automation: Usage tracking, satisfaction surveys

**Stage 6: CHURN RISK**
- Entry: Low engagement OR payment failed
- Automation: Re-engagement sequence, retention offer

---

## ðŸŽ¨ Service-Based Pipeline

### Flow (Project-Based)

```
1. INQUIRY
   â†“
2. CONSULTATION SCHEDULED
   â†“
3. CONSULTATION COMPLETED
   â†“
4. PROPOSAL SENT
   â†“
5. PROJECT KICKOFF
   â†“
6. IN PROGRESS
   â†“
7. PROJECT COMPLETE
   â†“
8. RETAINER OPPORTUNITY
```

---

## â±ï¸ Stage Definitions & SLAs

### SLA Template

For each stage, define:

**Stage Name**: _______________________
**Maximum Time in Stage**: ___ days
**Response Time**: ___ hours
**Required Actions**: 
- [ ] Action 1
- [ ] Action 2
- [ ] Action 3

**Escalation Rules**:
- If past SLA â†’ Notify manager
- If past 2x SLA â†’ Escalate to owner
- If past 3x SLA â†’ Review for disqualification

---

## ðŸ‘¥ Ownership & Fallback Rules

### Ownership Rules

1. **Primary Owner**: Assigned by routing rules
2. **Fallback Owner**: If primary unavailable
3. **Team Assignment**: If individual unavailable
4. **Manager Escalation**: If team unavailable

### Fallback Hierarchy

```
Primary Owner
  â†“ (unavailable)
Fallback Owner
  â†“ (unavailable)
Team Queue
  â†“ (unavailable)
Manager
  â†“ (unavailable)
Owner
```

---

## Lead Routing Logic

### Routing Rules (See [01-EMPIRE-CRM-PLAYBOOK.md](./01-EMPIRE-CRM-PLAYBOOK.md) for details)

1. **Source-Based**: Route by lead source
2. **Geography-Based**: Route by location
3. **Product-Based**: Route by interest
4. **Score-Based**: Route by lead score
5. **Round-Robin**: Distribute evenly

---

## âš™ï¸ Automation Triggers

### Trigger Types

1. **Stage Entry**: When deal enters stage
2. **Stage Exit**: When deal exits stage
3. **Time-Based**: After X days in stage
4. **Field Update**: When field changes
5. **Owner Change**: When owner assigned
6. **Score Threshold**: When score reaches level

### Automation Checklist

For each stage, define automations:
- [ ] Entry automation
- [ ] Exit automation
- [ ] Time-based automation (if past SLA)
- [ ] Owner notification
- [ ] Task creation
- [ ] Email sequence

---

##  Revenue Mapping (Hormozi Lens)

### Money Lever Connection

**Lever 1: Leads** â†’ Stages 1-2 (Lead Capture, Qualification)
- Metric: Lead volume, lead quality, lead cost

**Lever 2: Conversion** â†’ Stages 2-8 (Qualified â†’ Closed Won)
- Metric: Conversion rate, stage-to-stage conversion

**Lever 3: Transaction Value** â†’ Stages 5-7 (Proposal, Negotiation)
- Metric: Average deal size, proposal value

**Lever 4: Frequency** â†’ Stages 9-10 (Onboarding, Active Client)
- Metric: Retention rate, expansion rate, repeat purchases

**Lever 5: Margin** â†’ All stages (efficiency, automation)
- Metric: Cost per acquisition, operating efficiency

### Revenue Dashboard Metrics

Track these per stage:
- **Volume**: Number of deals
- **Value**: Total deal value
- **Velocity**: Average days in stage
- **Conversion**: % moving to next stage
- **Revenue**: Closed revenue from stage

---

## Visual Flow Diagrams

### Standard Sales Pipeline Flow

```
[LEAD CAPTURED] â†’ [QUALIFIED] â†’ [DISCOVERY CALL SCHEDULED]
                                                      â†“
[ACTIVE CLIENT] â† [ONBOARDING] â† [CLOSED WON] â† [NEGOTIATION]
                                                      â†‘
[PROPOSAL REVIEWED] â† [PROPOSAL SENT] â† [DISCOVERY CALL COMPLETED]
```

### Decision Points

At each stage, show:
- âœ… **Continue**: Criteria met â†’ Next stage
- âŒ **Disqualify**: Criteria not met â†’ Disqualified
- â¸ï¸ **Pause**: Needs more info â†’ Previous stage
- ðŸš« **Lost**: Prospect says no â†’ Lost

---

## WARNING: Common Mistakes to Avoid

### 1. Too Many Stages
**Mistake**: 15+ stages that don't add value
**Fix**: Keep it to 8-10 meaningful stages

### 2. Unclear Entry/Exit Criteria
**Mistake**: Team doesn't know when to move deals
**Fix**: Document clear criteria for each stage

### 3. No SLAs
**Mistake**: Deals sit in stages forever
**Fix**: Set maximum time limits and enforce them

### 4. Missing Automations
**Mistake**: Manual work at every stage
**Fix**: Automate entry, exit, and time-based actions

### 5. No Ownership Rules
**Mistake**: Deals assigned to "Unassigned"
**Fix**: Set up routing rules and fallback owners

### 6. Stages Don't Match Process
**Mistake**: Pipeline doesn't reflect actual sales process
**Fix**: Align stages with what actually happens

### 7. No Revenue Connection
**Mistake**: Can't see how pipeline affects revenue
**Fix**: Map each stage to money levers

### 8. Ignoring Bottlenecks
**Mistake**: Not fixing stages where deals get stuck
**Fix**: Monitor velocity and fix bottlenecks monthly

---

## âœ… Implementation Checklist

- [ ] Choose pipeline type(s)
- [ ] Define all stages
- [ ] Set entry/exit criteria
- [ ] Define SLAs
- [ ] Set ownership rules
- [ ] Build routing logic
- [ ] Create automations
- [ ] Map to revenue levers
- [ ] Document in CRM
- [ ] Train team
- [ ] Monitor and optimize

---

## Next Steps

1. **Customize**: Adapt stages to your process
2. **Build**: Create pipeline in your CRM
3. **Automate**: Set up all automations
4. **Train**: Teach team the process
5. **Monitor**: Track metrics weekly
6. **Optimize**: Fix bottlenecks monthly

---

*Build once. Scale forever. Optimize continuously.*




