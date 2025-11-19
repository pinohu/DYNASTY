# Make.com Advanced Scenarios

## Scenario 1: Directory Lead to Client Conversion

**Objective**: Automate the entire process from a directory lead submission to a qualified SuiteDash client and deal.

### Workflow Steps

1.  **Trigger: Webhook (Directory Form)**
    *   **Source**: Directory website form submission.
    *   **Data**: Name, Email, Phone, Service Requested, Directory Source.

2.  **Data Enrichment (Clearbit/Hunter)**
    *   **Action**: Lookup person/company by email.
    *   **Output**: Company Size, Industry, Job Title, Social Profiles.

3.  **Data Normalization (Custom JS)**
    *   **Action**: Standardize name casing, phone format, and email.
    *   **Code**:
        ```javascript
        // Normalize Name
        const nameParts = input.name.trim().split(' ');
        const firstName = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1).toLowerCase();
        const lastName = nameParts.slice(1).join(' ');

        // Normalize Phone (US Format)
        const phone = input.phone.replace(/\D/g, '');
        const formattedPhone = phone.length === 10 ? `+1${phone}` : `+${phone}`;

        return {
            firstName,
            lastName,
            email: input.email.toLowerCase(),
            phone: formattedPhone
        }
        ```

4.  **Lead Scoring (Router)**
    *   **Logic**: Calculate score based on Company Size, Job Title (Decision Maker), and Source.
    *   **Routes**:
        *   **Hot Lead (Score > 70)**: Priority handling.
        *   **Warm Lead (Score 50-70)**: Standard handling.
        *   **Cold Lead (Score < 50)**: Nurture sequence.

5.  **SuiteDash: Create Contact**
    *   **Action**: Create new Contact.
    *   **Fields**: First Name, Last Name, Email, Phone, Company, Lead Score (Custom Field).

6.  **SuiteDash: Create Deal**
    *   **Action**: Create Deal in "CLOSER Sales Framework" pipeline.
    *   **Stage**: CLARIFY.
    *   **Value**: Estimated based on Service Requested.

7.  **Communication: Welcome Email**
    *   **Action**: Send email via Gmail/Outlook.
    *   **Template**: "Welcome Email - New Lead" (from Chapter 19).

8.  **Notification: Sales Team**
    *   **Action**: Send Slack/Teams message to Sales Channel.
    *   **Content**: "New Hot Lead: [Name] from [Company]. Score: [Score]. Source: [Directory]."

## Scenario 2: Data Transformation Logic

**Purpose**: Ensure data consistency across all systems.

### Contact Data Normalization
```javascript
function transformContact(data) {
    return {
        firstName: capitalize(data.firstName),
        lastName: capitalize(data.lastName),
        email: data.email.toLowerCase().trim(),
        phone: formatPhone(data.phone),
        company: data.company ? data.company.trim() : 'Unknown',
        tags: generateTags(data)
    };
}

function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function formatPhone(phone) {
    // Remove non-numeric chars
    const cleaned = ('' + phone).replace(/\D/g, '');
    // Check if valid US number
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phone;
}

function generateTags(data) {
    const tags = ['Lead'];
    if (data.source) tags.push(`Source: ${data.source}`);
    if (data.service) tags.push(`Interest: ${data.service}`);
    return tags;
}
```

