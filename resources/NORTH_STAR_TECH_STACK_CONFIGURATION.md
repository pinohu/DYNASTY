# North Star Tech Stack: Technical Implementation Guide

**Version**: 1.2  
**Date**: November 2025  
**Purpose**: Detailed configuration and implementation guide for executing the North Star Master Plan using the existing AppSumo tool inventory.

---

## EXECUTIVE SUMMARY

This document translates the high-level "North Star" strategy into **exact technical configurations**. It focuses on the four core business pillars and utilizes the "Full Stack" Empire Operation System you already own.

**The 4 Strategic Pillars:**
1.  **The Automation Agency**: `SuiteDash` (Core) + `Activepieces` (Glue)
2.  **The Directory Empire**: `Brilliant Directories` (Platform) + `Hexomatic` (Data)
3.  **Boring Business Modernization**: `ElectroNeek` (RPA) + `TimeTrack` (Ops)
4.  **Media & Marketing**: `FlexClip`/`Zebracat` (Video) + `VBOUT` (Funnel)

---

## PART 1: THE AUTOMATION AGENCY CONFIGURATION
**Objective**: Launch "Portal in a Week" services ($2.5k - $10k) and manage internal Empire operations.

### 1.1 SuiteDash Configuration (The Central Nervous System)
*Based on the "CLOSER" Sales Framework and "Hormozi Value Equation".*

#### **A. Custom Fields Setup (CRM Targets)**
Navigate to: `Hamburger Menu ☰` > `Custom Fields` > `Manage Custom Fields` > `+Add Custom Field`

**Core "Hormozi" Value Fields (The Engine)**
| Field Name | Type | Description | Options/Validation |
| :--- | :--- | :--- | :--- |
| `Dream_Outcome_Score` | Number | Hormozi Value: Desired outcome appeal | Min: 1, Max: 10, Default: 5 |
| `Likelihood_Score` | Number | Hormozi Value: Belief in success | Min: 1, Max: 10, Default: 5 |
| `Time_Delay_Days` | Number | Hormozi Value: Days to result | Min: 1, Max: 365, Default: 90 |
| `Effort_Score` | Number | Hormozi Value: Required effort | Min: 1, Max: 10, Default: 5 |
| `Calculated_Value` | Number | Auto-calculated score (0-100) | Min: 0, Max: 100 |

**Sales Qualification Fields ("CLOSER")**
| Field Name | Type | Description | Options |
| :--- | :--- | :--- | :--- |
| `Primary_Pain_Point` | Text Area | Main problem identified | N/A |
| `Problem_Label` | Text | Specific labeled problem | N/A |
| `Previous_Solutions` | Text Area | What they tried before | N/A |
| `Budget_Authority` | Dropdown | Decision power | Decision Maker, Influencer, None |
| `Company_Size` | Dropdown | Org size | 1-10, 11-50, 51-200, 200+ |
| `Timeline_Urgency` | Dropdown | Implementation timeline | Immediate, 30 Days, 90 Days, Future |
| `Budget_Range` | Dropdown | Expected investment | <$5k, $5k-10k, $10k-25k, $25k+ |

**Business Intelligence Fields (KPIs)**
| Field Name | Type | Description |
| :--- | :--- | :--- |
| `Lead_Source_Primary` | Dropdown | Origin (Ads, Referral, Directory) |
| `Customer_LTV` | Number | Lifetime Value ($) |
| `CAC_Actual` | Number | Cost to Acquire ($) |
| `Churn_Risk` | Dropdown | Risk level (Low, Med, High) |
| `NPS_Score` | Number | Net Promoter Score (0-10) |
| `Referral_Partner` | Text | Who sent them |
| `Onboarding_Status` | Dropdown | Not Started, In Progress, Complete |
| `Next_Renewal_Date` | Date | Subscription renewal |

#### **B. Pipeline Setup ("CLOSER" Framework)**
Navigate to: `CRM` > `Deals` > `Pipelines` > `+Add Pipeline`
**Title**: `CLOSER Sales Framework`

**Configure Stages & Automations:**

**1. CLARIFY (10% Probability)**
*   **Goal**: Identify core problem.
*   **Automation**: Send Email - "Pre-Discovery Questionnaire" (See *Asset Library 5.1*).
*   **Task**: "Conduct Discovery Call" - Update `Primary_Pain_Point` field.

**2. LABEL (20% Probability)**
*   **Goal**: Confirm problem acknowledgment.
*   **Task**: "Confirm Problem Label" - Ensure client agrees with your definition of the problem. Update `Problem_Label`.

**3. OVERVIEW (35% Probability)**
*   **Goal**: Document past failures.
*   **Task**: "Document Pain Cycle" - Log `Previous_Solutions` that failed.

**4. SELL (50% Probability)**
*   **Goal**: Present solution/demo.
*   **Task**: "Deliver Demo" - Show how your solution fixes the `Primary_Pain_Point`. Update `Time_Delay_Days` (show speed).

**5. EXPLAIN (70% Probability)**
*   **Goal**: Handle objections.
*   **Task**: "Resolve Concerns" - Address pricing/timing. Update `Effort_Score` (show ease).

**6. REINFORCE (90% Probability)**
*   **Goal**: Finalize commitment.
*   **Automation**: Generate Contract (using SuiteDash proposal template).

**7. CLOSED WON (100% Probability)**
*   **Goal**: Implementation.
*   **Automation**: Trigger "Client Onboarding" Project Template.

#### **C. Automation Logic (The "Value Engine")**
Navigate to: `Onboarding` > `Automations` > `+Add Template`
**Name**: `Hormozi Value Calculator`
**Trigger**: `Contact Updated` (Condition: Any Score field changes)
**Action**: `Update Contact` -> `Calculated_Value`
**Formula**:
```javascript
// Normalized Hormozi Value Calculation
let dream = parseFloat("{{contact.Dream_Outcome_Score}}") || 5;
let belief = parseFloat("{{contact.Likelihood_Score}}") || 5;
let delay = Math.max(1, parseFloat("{{contact.Time_Delay_Days}}") / 30); // Normalized to months
let effort = parseFloat("{{contact.Effort_Score}}") || 5;

// (Dream * Belief) / (Delay * Effort)
let rawScore = (dream * belief) / (delay * effort);
return Math.min(100, Math.round(rawScore * 10)); // Cap at 100
```

### 1.2 Activepieces Configuration (The Glue)
**Objective**: Connect SuiteDash to external tools (Slack, Google Drive, VBOUT).

#### **Workflow: Client Onboarding Sync**
**Trigger**: `SuiteDash` -> `Contact Created` (or Webhook from SuiteDash automation)

**Step 1: Create Client Folder**
*   **App**: `Google Drive`
*   **Action**: `Create Folder`
*   **Name**: `{{contact.Company_Name}} - Assets`
*   **Parent Folder**: `[Insert Your Specific Drive Folder ID Here]`

**Step 2: Internal Notification**
*   **App**: `Slack` (or Discord)
*   **Action**: `Send Message`
*   **Channel**: `#sales-wins`
*   **Message**: `🚀 New Client: {{contact.First_Name}} from {{contact.Company_Name}}. Value Score: {{contact.Calculated_Value}}`

**Step 3: Add to Marketing Nurture**
*   **App**: `VBOUT`
*   **Action**: `Add Contact to List`
*   **List Name**: `Onboarding - New Clients`
*   **Email**: `{{contact.Email}}`

---

## PART 2: THE DIRECTORY EMPIRE CONFIGURATION
**Objective**: Build 100 Niche Directories with automated data ingestion and content.

### 2.1 Hexomatic Configuration (The Data Factory)
**Objective**: Scrape business data to populate directories.

#### **Recipe: Google Maps Lead Scraper**
1.  **Input**: CSV file with keywords (e.g., "Plumbers in Dallas", "HVAC in Austin").
2.  **Select Template**: `Google Maps Scraper` (One-click template).
3.  **Extract Fields**:
    *   `Title` (Business Name)
    *   `Rating`
    *   `Reviews Count`
    *   `Address`
    *   `Phone`
    *   `Website`
4.  **Workflow Step 2**: `Email Scraper` (Run on the extracted Website URL).
    *   Extract `Email Address` and `Social Media Links`.
5.  **Export**: `Google Sheets` or `CSV`.

### 2.2 Brilliant Directories Configuration (The Platform)
**Objective**: Import Hexomatic data and launch.

#### **A. Data Import (Bulk)**
Navigate to: `My Members` > `Import Members`
1.  **Map Fields**:
    *   `First Name` -> `Business Name` (or split if person)
    *   `Company` -> `Title` (from Hexomatic)
    *   `Phone` -> `Phone`
    *   `Email` -> `Email` (Critical for "Claim Listing" campaigns)
    *   `Website` -> `Website`
2.  **Membership Level**: Assign to `Free / Claim Listing`.

#### **B. SEO "Content Factory" Setup**
1.  **Tool**: `NeuronWriter` (#154)
    *   **Action**: Create analyses for "Top 10 [Service] in [City]" keywords.
    *   **Output**: Use the content score recommendations to write category descriptions.
2.  **Tool**: `Katteb` (#121)
    *   **Action**: Generate "Fact-Checked" articles about the industry.
    *   **Prompt**: See *Asset Library 5.3*.
    *   **Import**: Post to Brilliant Directories Blog.

### 2.3 Outreach Configuration (Autobound)
**Objective**: Get businesses to claim their listings.

1.  **Campaign Name**: `Directory Claim Invitation`
2.  **Upload**: The CSV from Hexomatic.
3.  **AI Prompt**: See *Asset Library 5.2*.
4.  **Call to Action**: Link to the specific "Claim Listing" page.

---

## PART 3: BORING BUSINESS MODERNIZATION CONFIGURATION
**Objective**: Operational efficiency for acquired assets (HVAC, Laundromats).

### 3.1 ElectroNeek Configuration (The "Legacy Bridge")
**Scenario**: Acquired HVAC company uses old desktop invoicing software.

#### **Bot: "Invoice Processor"**
1.  **Trigger**: New file in `Dropbox/Invoices_To_Process` (synced from field techs).
2.  **Action (OCR)**: Use ElectroNeek's `Document Intelligence` to read PDF.
    *   **Variables to Extract**: `Invoice_Number`, `Customer_Name`, `Total_Amount`, `Service_Date`.
3.  **Action (Desktop Automation)**:
    *   Open Legacy App (e.g., QuickBooks Desktop 2015).
    *   Click `Create Invoice` (use element picker).
    *   Type `{{Customer_Name}}` into Customer field.
    *   Type `{{Total_Amount}}` into Amount field.
    *   Click `Save`.
4.  **Action (Notify)**: Send summary to `Slack` channel `#finance-ops`.

### 3.2 TimeTrack Configuration (Field Ops)
**Scenario**: Tracking HVAC technicians.

1.  **Geofencing**:
    *   Set up client locations in TimeTrack.
    *   Enable `Auto-Clock In` when tech enters geofence (radius 500m).
2.  **Project Mapping**:
    *   Map TimeTrack "Projects" to SuiteDash "Client Projects" for billing accuracy.

---

## PART 4: MEDIA & MARKETING CONFIGURATION
**Objective**: High-volume content production.

### 4.1 Video Factory Workflow
**Tools**: `FlexClip` (#86), `Zebracat` (#268), `Vadoo AI` (#255).

1.  **Input**: Blog post URL from Brilliant Directories.
2.  **Process**:
    *   **Zebracat**: Paste URL -> "Generate Marketing Video".
    *   **Style**: "Professional/Corporate" for B2B directories, "Energetic" for consumer apps.
    *   **Prompt Override**: See *Asset Library 5.4*.
    *   **Output**: 30-60 second vertical video (Shorts/Reels).
3.  **Distribution**:
    *   **Vista Social** (#258): Schedule video to YouTube Shorts, TikTok, Instagram Reels.
    *   **Caption**: "Check out the top rated [Service] providers in [City]! Link in bio."

---

## PART 5: THE M&A DEAL SOURCING CONFIGURATION (THE "DEAL FLOW" ENGINE)
**Objective**: Automate the identification of "Off-Market" Boring Business targets.

### 5.1 LinkedIn Owner Outreach (Closely)
**Target**: "HVAC Owners" or "Laundromat Owners" in [Your State].

1.  **Search**: Sales Navigator (or standard LinkedIn) search for "Owner" + "HVAC" + "Greater [City] Area".
2.  **Tool**: `Closely` (#228).
3.  **Campaign**: "Connection Request + Soft Pitch".
4.  **Message Sequence**:
    *   **Connection**: "Hi [Name], fellow local entrepreneur in [City]. Connect?"
    *   **Message 1 (Day 1)**: "Thanks for connecting. I run a local holding company looking to acquire 1-2 HVAC service routes in [City] this year. Not a broker, just a buyer. Open to a 5-min chat?"
    *   **Message 2 (Day 7)**: "Just bumping this - are you planning to exit in the next 12-24 months?"

### 5.2 BizBuySell Scraper (TaskMagic)
**Target**: Monitor "On-Market" listings automatically.

1.  **Target URL**: `bizbuysell.com/california/los-angeles/hvac-businesses-for-sale/`
2.  **Tool**: `TaskMagic` (#377) (Browser Automation).
3.  **Recipe**:
    *   **Step 1**: Go to URL.
    *   **Step 2**: Scrape List (Title, Cash Flow, Asking Price, URL).
    *   **Step 3**: Save to Google Sheet `Deal_Flow_Pipeline`.
4.  **Automation (Activepieces)**:
    *   **Trigger**: New Row in `Deal_Flow_Pipeline`.
    *   **Action**: Send Slack Message to `#deal-flow`: "🚨 New HVAC Listed: [Title] - Cash Flow: [Cash Flow]".

---

## PART 6: THE ASSET LIBRARY (COPY-PASTE RESOURCES)

### 5.1 SuiteDash Email Template: Pre-Discovery (CLARIFY Stage)
**Subject**: Preparing for our discovery call - {{contact.First_Name}}

```text
Hi {{contact.First_Name}},

I'm looking forward to our call to discuss {{contact.Company_Name}}'s goals.

To make the best use of our time, could you quickly hit reply and let me know:

1. What is the #1 challenge you are facing right now?
2. What does a "home run" outcome look like for you?
3. Is there a specific deadline or timeline we need to be aware of?

No need for an essay—bullet points are perfect.

Talk soon,
[Your Name]
```

### 5.2 Autobound Prompt: Directory Claim Outreach
**System Instruction**: Use the variables [Business Name], [Rating], [City], and [Directory Name].

**Prompt**:
"Write a friendly, helpful cold email to a local business owner.
Subject: Your [Rating] star rating on [Directory Name]
Body:
Hi [Business Name],
I was researching top-rated providers in [City] and noticed your impressive [Rating]-star reviews.
I've added your business to [Directory Name] as a featured provider because we want to highlight quality local pros.
However, your profile is currently unverified, meaning you might be missing out on leads.
Please verify your phone number and add your logo here: [Link].
It’s free to claim."

### 5.3 Katteb Prompt: SEO Article Generation
**Mode**: "Fact-Checked Article"
**Language**: English (US)

**Prompt**:
"Write a comprehensive guide on 'How to Hire a [Service Type] in [City]'.
Include:
- 5 questions to ask before hiring.
- Average cost expectations in [Year].
- Warning signs of a bad contractor.
- Why licensing and insurance are critical.
Tone: Authoritative, helpful, and consumer-focused.
Structure: Use H2 and H3 headers for readability."

### 5.4 Zebracat Video Prompt
**Input Type**: "Text to Video"

**Prompt**:
"Create a high-energy 30-second vertical video for social media.
Topic: The Top 5 [Service Type] in [City].
Visual Style: Modern, clean, fast cuts.
Script:
'Looking for the best [Service Type] in [City]?
Stop scrolling!
We've ranked the top providers based on real reviews.
Don't risk a bad experience.
Find the verified pros on [Directory Name].
Link in bio!'
Music: Upbeat, trending."

---

## PART 6: THE COMPLETE TOOL UTILIZATION MATRIX
**Purpose**: This matrix assigns every software asset in your inventory to a specific business function and owner. Use `Ctrl+F` to find any tool.

### **A. The "Big 6" Core Platforms (Daily Drivers)**
| Tool Name | Primary Capability | North Star Application | Owner |
| :--- | :--- | :--- | :--- |
| **SuiteDash** | All-in-One CRM & Portal | Central Nervous System: Manages all clients, projects, and billing. | **You / Ops Manager** |
| **Activepieces** | No-Code Automation | The "Glue": Connects SuiteDash to Slack, Google Drive, etc. | **Tech Lead** |
| **Brilliant Directories** | Directory Platform | Revenue Engine: The platform for all 100 niche directories. | **Content Manager** |
| **Hexomatic** | Web Scraping | Data Factory: Sources leads to populate directories. | **Tech Lead** |
| **ElectroNeek** | RPA (Robotic Process Automation) | Modernization: Automates legacy software in acquired businesses. | **Tech Lead** |
| **VBOUT** | Marketing Automation | The Funnel: Manages email nurture sequences and landing pages. | **Marketing Manager** |

### **B. Operations & Finance (The Back Office)**
| Tool Name | Primary Capability | North Star Application | Owner |
| :--- | :--- | :--- | :--- |
| **Agiled** | CRM & Project Management | Backup CRM: For smaller acquired businesses that don't need full SuiteDash. | **Acquired Ops Team** |
| **Flowlu** | Business Management | Alternative ERP: Use for project-heavy subsidiaries if preferred. | **Project Managers** |
| **Fintable** | Bank Sync to Airtable | Financial Dashboard: Syncs bank data to "North Star" master tracking sheet. | **CFO / You** |
| **SparkReceipt** | Receipt Scanning | Expense Tracking: For field staff to snap receipts. | **Field Staff** |
| **TimeTrack** | Employee Time Tracking | Field Ops: GPS and time tracking for HVAC/Service technicians. | **Field Supervisor** |
| **Recooty** | Applicant Tracking System | Hiring: Streamlines hiring for blue-collar roles (technicians). | **HR Lead** |
| **DocPro** | Legal Templates | Legal: Generates standard contracts and NDAs. | **Admin VA** |
| **Cheqbook** | Accounting | Bookkeeping: Simple accounting for smaller HoldCos. | **Bookkeeper** |

### **C. Sales & Lead Generation (The Growth Engine)**
| Tool Name | Primary Capability | North Star Application | Owner |
| :--- | :--- | :--- | :--- |
| **Autobound** | AI Email Outreach | Cold Email: Sends "Claim Your Listing" emails at scale. | **Sales Rep** |
| **SalesNexus** | CRM + Email | Sales CRM: High-volume outreach alternative if VBOUT is full. | **Sales Rep** |
| **Closely** | LinkedIn Automation | LinkedIn Outreach: Connects with business owners for acquisitions. | **You / Acquisitions Lead** |
| **Happierleads** | Visitor Identification | Lead Gen: Identifies companies visiting your directory sites. | **Sales Rep** |
| **Laxis** | AI Meeting Notes | Sales Calls: Transcribes Zoom calls and extracts action items. | **Sales Rep** |
| **My Digital CMO** | Marketing Strategy | Planning: Generates marketing plans for new directory niches. | **Marketing Manager** |

### **D. Content & SEO (The Traffic Machine)**
| Tool Name | Primary Capability | North Star Application | Owner |
| :--- | :--- | :--- | :--- |
| **NeuronWriter** | SEO Content Optimization | SEO: Optimizes directory category pages to rank on Google. | **Content Writer** |
| **WriterZen** | Keyword Research | Strategy: Finds low-competition keywords for new directories. | **Content Manager** |
| **Katteb** | Fact-Checked AI Writer | Content: Generates accurate blog posts for niche industries. | **Content Writer** |
| **WordHero** | AI Copywriting | Copy: Writes ad copy, headlines, and short social posts. | **Marketing VA** |
| **Labrika** | SEO Audit | Audit: Checks all directory sites for technical SEO errors. | **Tech Lead** |
| **Screpy** | SEO Monitoring | Monitoring: Tracks keyword rankings and uptime. | **Tech Lead** |

### **E. Video & Media (The Brand Builder)**
| Tool Name | Primary Capability | North Star Application | Owner |
| :--- | :--- | :--- | :--- |
| **Zebracat** | AI Video Generation | Shorts: Turns blog posts into 30s marketing videos. | **Social Media VA** |
| **FlexClip** | Video Editing | Editing: Polishes client testimonials and longer videos. | **Video Editor** |
| **Vadoo AI** | Podcast Repurposing | Clips: Chops long interviews into viral social clips. | **Social Media VA** |
| **Taja** | YouTube Optimization | YouTube: Writes optimized titles/descriptions for videos. | **Social Media VA** |
| **Vista Social** | Social Scheduling | Distribution: Schedules content across all platforms. | **Social Media VA** |
| **ReelCraft** | AI Animation | Creative: Makes animated explainer videos for services. | **Creative Lead** |

### **F. Website & App Development (The Tech Stack)**
| Tool Name | Primary Capability | North Star Application | Owner |
| :--- | :--- | :--- | :--- |
| **AppMySite** | App Builder | Mobile: Turns directories into iOS/Android apps. | **Tech Lead** |
| **Directual** | No-Code Backend | SaaS Logic: Builds custom logic for "CareCircle" app. | **Developer** |
| **Dukaan** | E-commerce Builder | Merch: Launches swag stores for your brands. | **Marketing Manager** |
| **Brizy Cloud** | Website Builder | Landing Pages: Quickly builds funnels for specific offers. | **Marketing VA** |
| **WP Reset** | WordPress Tool | Maintenance: Resets/cleans WP sites for new projects. | **Tech Lead** |
| **Hide My WP** | Security | Security: Protects WordPress sites from hackers. | **Tech Lead** |

### **G. Specialty & Niche Tools (The "Swiss Army Knife")**
| Tool Name | Primary Capability | North Star Application | Owner |
| :--- | :--- | :--- | :--- |
| **TeliportMe** | Virtual Tours | Real Estate: Creates 360 tours of properties/businesses. | **Field Agent** |
| **TaskMagic** | Browser Automation | Scraping: Custom scrapers for sites Hexomatic can't handle. | **Tech Lead** |
| **Sessions** | Video Conferencing | Meetings: High-end client presentation platform. | **You / Sales Rep** |
| **Guidejar** | SOP Creation | Documentation: Records screen to create training guides. | **Ops Manager** |
| **UPDF** | PDF Editor | Admin: Edits contracts and legal docs. | **Admin VA** |
| **GoZen Forms** | Form Builder | Data Capture: Advanced intake forms for complex services. | **Marketing VA** |

---

## IMPLEMENTATION CHECKLIST: NEXT 7 DAYS

### **Day 1: The "Control Center"**
- [ ] **SuiteDash**: Create the 20 Custom Fields listed in Part 1.1.
- [ ] **SuiteDash**: Build the "CLOSER" Pipeline with the 7 stages.
- [ ] **SuiteDash**: Copy/Paste the "Pre-Discovery" email template into the CLARIFY stage automation.
- [ ] **Activepieces**: Authenticate Google Drive, Slack, and SuiteDash connections.

### **Day 2: The "Data Engine"**
- [ ] **Hexomatic**: Run a test scrape for "Plumbers in [Your City]" (aim for 50 leads).
- [ ] **Brilliant Directories**: Set up one test directory (branding, domain).
- [ ] **Import**: Upload the 50 leads into the directory using the map in Part 2.2.

### **Day 3: The "Outreach Machine"**
- [ ] **Autobound**: Set up the "Claim Listing" email campaign using the script in Part 5.2.
- [ ] **Send**: Launch campaign to the 50 test leads.

### **Day 4: Financial Vision**
- [ ] **Modeliks**: Create a "HoldCo" model. Input your projected revenue from the directory and agency services.

### **Day 5: Documentation**
- [ ] **Guidejar**: Record yourself doing the steps above. This becomes your first "SOP Product" to sell.

---
**Note**: This configuration utilizes tools you **currently own**. No new subscriptions are required. Focus on *integration* (connecting the pipes) rather than *acquisition* (buying new tools).
