# KonnectzIT Workflows

## Overview
KonnectzIT is the primary automation hub for the The Legacy Codex. It handles real-time data synchronization between SuiteDash and external tools.

## Setup Checklist
- [ ] **Create Account**: Log in to KonnectzIT.
- [ ] **Configure Settings**: Set Timezone (EST) and Currency (USD).
- [ ] **API Keys**: Generate and store API keys for SuiteDash and Directory sites.
- [ ] **Webhooks**: Create webhook endpoints for incoming data.

## Core Workflows

### 1. SuiteDash to Email Marketing
**Trigger**: SuiteDash - New Contact Created
**Action**: Add Subscriber to Email List (e.g., Mailchimp/ActiveCampaign)
**Logic**:
1.  **Trigger**: Webhook from SuiteDash fires when a contact is created.
2.  **Filter**: Check if `Marketing_Opt_In` is true.
3.  **Action**: Add/Update Subscriber in Email Marketing Tool.
4.  **Tagging**: Apply tag based on `Lead_Source`.

### 2. Payment Success to Accounting
**Trigger**: Stripe/PayPal - Payment Succeeded
**Action**: Create Invoice/Transaction in Accounting Software (e.g., QuickBooks/Xero)
**Logic**:
1.  **Trigger**: Payment Gateway webhook.
2.  **Search**: Find existing customer in Accounting by email.
3.  **Action**: Create Customer if not found.
4.  **Action**: Create Sales Receipt/Invoice.
5.  **Action**: Update SuiteDash Invoice status to "Paid" (if not auto-synced).

### 3. Directory Lead Sync
**Trigger**: Directory Site - New Lead Form
**Action**: Create SuiteDash Lead
**Logic**:
1.  **Trigger**: Webhook from Directory site.
2.  **Format**: Map form fields to SuiteDash fields (First Name, Last Name, Email).
3.  **Action**: Create Contact in SuiteDash.
4.  **Action**: Create "New Lead" Task for Sales Rep.

### 4. Meeting Scheduled to CRM
**Trigger**: Calendly/Booking Tool - Event Created
**Action**: Update SuiteDash Deal
**Logic**:
1.  **Trigger**: Booking tool webhook.
2.  **Search**: Find Contact in SuiteDash by email.
3.  **Action**: Update Deal Stage to "SELL" (if Discovery Call).
4.  **Action**: Add Note to Deal with meeting details.

## Error Handling Strategy
- **Retry Logic**: Enable auto-retry for failed API calls (3 attempts).
- **Notifications**: Send email/Slack alert on workflow failure.
- **Logging**: Maintain a log of all failed executions for review.

