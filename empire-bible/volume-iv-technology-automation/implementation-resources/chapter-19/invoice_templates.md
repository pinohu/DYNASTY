# SuiteDash Invoice Templates

## Template 1: Monthly Retainer Invoice

**Template Name:** "Monthly Retainer Invoice"

**Invoice Details:**
- **Client:** Select client or client category
- **Invoice Title:** "Monthly Retainer - {{service_name}} - {{month}} {{year}}"
- **Description:** "Monthly retainer for {{service_description}}"
- **Amount:** ${{monthly_amount}}
- **Frequency:** Monthly
- **Start Date:** First of each month
- **End Date:** Ongoing (or specific end date)

**Line Items:**
- Service: {{service_name}}
- Quantity: 1
- Rate: ${{monthly_amount}}
- Total: ${{monthly_amount}}

**Automation:**
- Auto-send on generation date
- Payment reminder: 3 days before due date
- Late fee: 1.5% per month (if applicable)
- Auto-create project upon payment

## Template 2: Project-Based Invoice

**Template Name:** "Project-Based Invoice"

**Invoice Details:**
- **Client:** Project client
- **Invoice Title:** "{{project_name}} - Invoice #{{invoice_number}}"
- **Description:** "Payment for {{project_phase}}"
- **Amount:** Based on project milestones
- **Frequency:** On milestone completion
- **Trigger:** Project milestone marked complete

**Line Items:**
- Dynamic line items based on project tasks completed
- Hourly billing (if applicable)
- Fixed fee per milestone
- Expenses (if applicable)

**Automation:**
- Auto-generate when milestone completed
- Send to client automatically
- Create payment reminder sequence
- Update project status upon payment

## Template 3: Directory Subscription Invoice

**Template Name:** "Directory Subscription Invoice"

**Invoice Details:**
- **Client:** Directory client
- **Invoice Title:** "{{directory_name}} Subscription - {{month}} {{year}}"
- **Description:** "Monthly subscription for {{listing_type}} listing"
- **Amount:** ${{subscription_amount}}
- **Frequency:** Monthly
- **Start Date:** Subscription start date
- **End Date:** Ongoing

**Line Items:**
- Subscription: {{listing_type}} Listing
- Quantity: 1
- Rate: ${{subscription_amount}}
- Total: ${{subscription_amount}}

**Automation:**
- Auto-generate monthly
- Auto-send on due date
- Payment reminder: 5 days before due
- Suspend listing if payment overdue 7 days
- Reactivate listing upon payment

## Professional Invoice Design

**Header:**
- Company logo
- Company name and address
- Invoice number and date
- Due date
- Client information

**Body:**
- Itemized line items
- Description of services
- Quantity and rates
- Subtotal
- Taxes (if applicable)
- Discounts (if applicable)
- Total amount

**Footer:**
- Payment terms
- Payment methods accepted
- Payment instructions
- Contact information
- Thank you message

