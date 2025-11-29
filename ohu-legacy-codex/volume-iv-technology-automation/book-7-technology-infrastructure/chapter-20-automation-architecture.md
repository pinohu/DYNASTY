# Chapter 20: Automation Architecture

## Introduction

If SuiteDash is the brain, **Automation** is the nervous system that fires the signals. Automation is the only way to scale a service business without scaling headcount linearly. It allows you to perform the work of 10 people with a team of 2.

This chapter details the "No-Code" automation architecture for Legacy Codex. We will use a combination of **KonnectzIT** (for cost-effective, high-volume tasks), **Activepieces** (for self-hosted reliability), and **Make.com** (for complex logic). By layering these tools, we create a redundant, powerful system that handles everything from lead intake to client onboarding.

---

## Section 20.1: KonnectzIT Implementation

KonnectzIT is a visual workflow builder similar to Zapier but often more cost-effective for high-volume tasks.

### Platform Mastery

**The Visual Builder**:
- **Trigger**: The event that starts the flow (e.g., Webhook, Form Submit).
- **Action**: The task performed (e.g., Send Email, Create Row).
- **Connectors**: The lines drawing data from one step to the next.

**Key Concepts**:
- **Mapping**: Dragging a data field (e.g., "Email Address") from the Trigger to the Action.
- **Formatters**: Tools to clean data (e.g., Capitalize Name, Format Date).
- **Conditions**: "If/Then" logic (e.g., If Lead Source = "Facebook", Then Tag as "Cold").

### Workflow Creation

**The "Standard" Flow**:
1.  **Trigger**: Webhook from SuiteDash (New Contact).
2.  **Action 1**: Add to Google Sheets (Master Database backup).
3.  **Action 2**: Add to Mailchimp (Newsletter List).
4.  **Action 3**: Send Slack Notification ("New Lead!").

### Trigger Configuration

**Webhooks**:
- SuiteDash sends data via "Webhooks."
- **Setup**:
    1.  Create a Webhook Trigger in KonnectzIT.
    2.  Copy the URL.
    3.  Paste into SuiteDash "Automation" settings.
    4.  Test the connection.

### Action Sequences

**Chaining**:
- You can chain unlimited actions.
- **Example**:
    -   Create Folder in Google Drive.
    -   Create Document inside that Folder.
    -   Email the link to the client.

### Error Handling

**The "Fail Safe"**:
- KonnectzIT has an "History" log.
- **Check**: Review logs weekly for failed runs.
- **Common Errors**: API limits, invalid email formats.

---

## Section 20.2: Activepieces Backup Systems

Activepieces is an open-source, self-hostable automation tool. It is your insurance policy against price hikes or platform shutdowns.

### Self-Hosting Setup

**The "Owned" Infrastructure**:
- **Server**: Host on a cheap VPS (DigitalOcean/Vultr) for $5/mo.
- **Docker**: Deploy using Docker Compose.
- **Benefit**: No "per task" limits. You are limited only by server CPU.

### Workflow Migration

**Redundancy**:
- **Strategy**: Build critical "Business Continuity" flows in Activepieces.
- **Example**: Daily backup of SuiteDash contacts to a CSV file on your server.

### Custom Functions

**Code Pieces**:
- Activepieces allows you to write Node.js or Python code directly in the flow.
- **Use Case**: Complex math calculations or data parsing that standard tools can't handle.

### API Integration

**Connecting Anything**:
- If a tool has an API but no "App" in the library, use the "HTTP Request" piece.
- **Auth**: Handle Bearer Tokens and API Keys securely.

### Monitoring Systems

**Uptime**:
- Use UptimeRobot to monitor your Activepieces instance.
- **Alerts**: Get an SMS if your automation server goes down.

---

## Section 20.3: Make.com Advanced Workflows

Make (formerly Integromat) is the "Developer's Choice" for no-code. It handles complex logic, arrays, and data transformation better than anything else.

### Complex Scenarios

**The "Router"**:
- Make allows you to split a workflow into multiple paths based on filters.
- **Example**:
    -   **Trigger**: New Lead.
    -   **Router**:
        -   Path A (If Budget > $10k): Send to "VIP Sales" pipeline.
        -   Path B (If Budget < $10k): Send to "Nurture" email sequence.

### Data Transformation

**The "Iterator" and "Aggregator"**:
- **Iterator**: Takes a list (e.g., 10 line items on an invoice) and runs a task for *each* item.
- **Aggregator**: Takes multiple results and bundles them into one (e.g., create a summary email).

### Multi-Step Processes

**The "State Machine"**:
- Build flows that wait for input.
- **Example**: Send contract -> Wait for Signature -> (If signed) Create Invoice -> (If not signed after 3 days) Send Reminder.

### Error Recovery

**The "Break" Directive**:
- If an error occurs (e.g., Google Sheets API is down), Make can store the data and retry automatically later.
- **Ignore**: Skip the error and continue.
- **Rollback**: Undo previous steps (advanced).

### Performance Optimization

**Operations Management**:
- Make charges by "Operation."
- **Optimization**: Use filters early in the flow to stop unnecessary operations. Don't process spam leads.

---

## Section 20.4: Integration Mapping

Documentation is key. If you get hit by a bus, someone needs to know how the machine works.

### System Interconnections

**The "Spiderweb"**:
- **SuiteDash**: The Hub.
- **Mailchimp**: Marketing.
- **QuickBooks**: Finance.
- **Google Workspace**: Files/Docs.
- **Slack**: Communication.

### Data Flow Diagrams

**Visualizing the Map**:
- Use **Miro** or **Lucidchart** to draw your automation map.
- **Lines**: Show where data flows.
- **Icons**: Represent the apps.
- **Annotations**: Explain *why* the data moves.

### API Documentation

**The "Keys"**:
- Keep a secure list (LastPass/1Password) of all API Keys and Webhook URLs.
- **Never** hardcode keys in plain text documents.

### Security Protocols

**Least Privilege**:
- Give automation tools only the permissions they need.
- **Audit**: Review connected apps quarterly. Revoke access for unused tools.

### Backup Procedures

**Exporting Scenarios**:
- **Make**: Export "Blueprint" (JSON file) of your scenarios.
- **KonnectzIT**: Take screenshots of complex flows.
- **Storage**: Save these backups in your "Empire Vault" (Google Drive).

---

## Section 20.5: Empire Automation Recipes

**The "Cookbook" for Success**:

Theory is good; recipes are better. Below are the specific, copy-paste automation workflows for each of the Ohu Family Enterprise's operating companies. These recipes leverage your specific tech stack: **SuiteDash, KonnectzIT, Activepieces, and Make.com**.

### Recipe 1: The Automation Agency "Glue" (SuiteDash + Activepieces)
**Goal**: Sync new clients to your entire ecosystem instantly.

**Ingredients**:
-   **Trigger**: SuiteDash (Contact Created).
-   **Middleware**: Activepieces (Self-Hosted).
-   **Destinations**: Google Drive, Slack, VBOUT.

**The Recipe**:
1.  **Trigger**: SuiteDash -> `Contact Created` (or Webhook).
2.  **Action 1: Create Assets Folder (Google Drive)**.
    -   *Action*: `Create Folder`.
    -   *Name*: `{{contact.Company_Name}} - Assets`.
    -   *Parent*: `[Master Client Folder ID]`.
3.  **Action 2: Team Notification (Slack)**.
    -   *Action*: `Send Message` to `#sales-wins`.
    -   *Message*: `🚀 New Client: {{contact.First_Name}} from {{contact.Company_Name}}. Value Score: {{contact.Calculated_Value}}`.
4.  **Action 3: Marketing Nurture (VBOUT)**.
    -   *Action*: `Add Contact to List`.
    -   *List*: `Onboarding - New Clients`.
    -   *Email*: `{{contact.Email}}`.

### Recipe 2: Obuke Real Estate (The "Tenant Onboarding" Flow)
**Goal**: Automate the lease signing and portal access process.

**Ingredients**:
-   **Trigger**: "Application Approved" status change in SuiteDash.
-   **Middleware**: Make.com (for document logic).
-   **Destination**: SignRequest (or SuiteDash Signing) + Welcome Email.

**The Recipe**:
1.  **Trigger**: You change a Deal Stage in SuiteDash to "Approved."
2.  **Action 1 (Make)**: Generate Lease Agreement PDF.
    -   *Logic*: Pull Property Address, Rent Amount, Term from Deal fields.
    -   *Tool*: Google Docs Template -> PDF.
3.  **Action 2**: Send for E-Signature.
4.  **Action 3 (When Signed)**:
    -   *Action*: Create "Tenant Portal" user in SuiteDash.
    -   *Action*: Add to Circle `Obuke Tenants`.
    -   *Action*: Create Invoice "Security Deposit + First Month".
5.  **Action 4**: Send "Welcome Home" email sequence.
    -   *Day 0*: Portal Login + Utility Setup Guide.
    -   *Day 3*: "How to pay rent" video.

### Recipe 3: TaxEar Advisory (The "Tax Season" Chaser)
**Goal**: Collect client documents without sending 50 emails manually.

**Ingredients**:
-   **Trigger**: Date (Jan 15th) or Tag `#Ready-For-Tax`.
-   **Middleware**: Activepieces (Self-hosted).
-   **Destination**: SuiteDash Portal.

**The Recipe**:
1.  **Trigger**: Scheduled Timer (Jan 15).
2.  **Action 1**: Search SuiteDash for all contacts with Tag `#Tax-Client-Active`.
3.  **Action 2 (Loop)**: For each client:
    -   *Action*: Create Folder "2024 Tax Docs" in their Portal.
    -   *Action*: Send "Tax Organizer" Form (GoZen/SuiteDash).
    -   *Action*: Email "Tax Season is Here - Action Required."
4.  **Action 3 (Weekly Check)**:
    -   *Logic*: If "2024 Tax Docs" folder is empty AND Form is not submitted:
    -   *Action*: Send Reminder Email "We can't start without your docs."
5.  **Action 4 (On Completion)**:
    -   *Trigger*: Form Submitted.
    -   *Action*: Notify Team "Ready to Prep."
    -   *Action*: Change Status to "In Prep."

### Recipe 4: The Directory Data Factory (Hexomatic -> Brilliant Directories)
**Goal**: Populate directories with thousands of leads automatically.

**Ingredients**:
-   **Source**: Hexomatic (Google Maps Scraper).
-   **Destination**: Brilliant Directories (Import).
-   **Outreach**: Autobound.

**The Recipe**:
1.  **Step 1 (Hexomatic)**: Run "Google Maps Lead Scraper".
    -   *Input*: Keywords (e.g., "Plumbers in Dallas").
    -   *Extract*: `Title`, `Phone`, `Website`, `Rating`, `Address`.
2.  **Step 2 (Hexomatic)**: Run "Email Scraper" on extracted URLs.
3.  **Step 3 (Import)**: Upload CSV to Brilliant Directories.
    -   *Map*: `Title`->`Company`, `Email`->`Email`.
    -   *Status*: `Free / Claim Listing`.
4.  **Step 4 (Autobound)**: Launch "Claim Invitation" Campaign.
    -   *Prompt*: "Hi [Title], saw your [Rating] star reviews. Claim your free verified profile on [Directory] to get more leads."

### Recipe 5: AI Content Factory (The "SEO" Machine)
**Goal**: Generate location pages for directories automatically.

**Ingredients**:
-   **Trigger**: New Row in Google Sheets (City Name).
-   **Middleware**: Make.com.
-   **Tools**: OpenAI (GPT-4) + WordPress/Brilliant Directories.

**The Recipe**:
1.  **Trigger**: You add "Philadelphia" to the "Target Cities" Google Sheet.
2.  **Action 1 (OpenAI)**: Generate Content.
    -   *Prompt*: "Write a 1000-word guide on 'Finding a Notary in [City]'. Include local landmarks."
3.  **Action 2 (OpenAI)**: Generate Metadata.
    -   *Prompt*: "Write SEO Title and Description for [City]."
4.  **Action 3 (OpenAI)**: Generate Image Prompt -> DALL-E 3 -> Create Image.
5.  **Action 4**: Post to Website (WordPress API or BD API).
    -   *Status*: Draft (for review) or Publish (if bold).
6.  **Action 5**: Update Google Sheet with "Published URL."

### Recipe 6: Boring Business Modernization (ElectroNeek RPA)
**Goal**: Automate legacy software (QuickBooks Desktop) for acquired businesses.

**Ingredients**:
-   **Tool**: ElectroNeek (RPA).
-   **Trigger**: Dropbox File Upload.
-   **Target**: Legacy Desktop App.

**The Recipe**:
1.  **Trigger**: Field tech uploads photo of paper invoice to `Dropbox/Invoices_To_Process`.
2.  **Action 1 (OCR)**: ElectroNeek `Document Intelligence` reads the PDF.
    -   *Extracts*: `Invoice #`, `Customer Name`, `Amount`, `Date`.
3.  **Action 2 (Bot)**: ElectroNeek bot wakes up.
    -   Opens QuickBooks Desktop 2015.
    -   Clicks `Create Invoice`.
    -   Types `{{Customer Name}}`.
    -   Types `{{Amount}}`.
    -   Clicks `Save`.
4.  **Action 3**: Sends summary to Slack `#finance-ops`.

---

## Chapter 20 Summary

Automation is leverage. By building a robust architecture using KonnectzIT, Activepieces, and Make, you create a system that works 24/7/365 without complaint. This infrastructure allows Legacy Codex to scale revenue without scaling chaos.

**Key Takeaways**:
1.  **Right Tool for the Job**: Use KonnectzIT for simple/cheap tasks, Make for complex logic, Activepieces for backup.
2.  **Document Everything**: A flow you built 6 months ago will look like alien code today without notes.
3.  **Monitor**: Automations break. Set up alerts so you know before the client does.
4.  **Redundancy**: Have a backup plan for critical data flows.

**Action Items**:
- [ ] Create accounts on KonnectzIT and Make.com.
- [ ] Deploy Activepieces on a VPS (optional but recommended).
- [ ] Map out your "Lead to Cash" process in Miro.
- [ ] Build your first "Hello World" automation (e.g., SuiteDash Form -> Slack Notification).

---

**END OF CHAPTER 20**


