# Chatbot Configuration Guide

## 1. Intent Classification Schema

Define the user intents to route inquiries effectively.

| Intent Category | Description | Example User Queries | Action/Route |
| :--- | :--- | :--- | :--- |
| **Product_Info** | Questions about features, pricing, or specs. | "How much does it cost?", "What features are included?", "Do you support X?" | `Response_Product_Info` |
| **Tech_Support** | Issues with the platform, login, or bugs. | "I can't log in", "The dashboard isn't loading", "Error 404" | `Flow_Troubleshooting` -> `Escalate_Support` |
| **Billing** | Invoices, payments, refunds, upgrades. | "Where is my invoice?", "Update credit card", "Cancel subscription" | `Flow_Billing` -> `Escalate_Billing` |
| **Sales_Inquiry** | Interest in purchasing or booking a demo. | "I want to buy", "Schedule a demo", "Talk to sales" | `Flow_Lead_Capture` -> `Notify_Sales` |
| **General** | Greetings, hours, location, other. | "Hello", "Are you a bot?", "Contact info" | `Response_General` |

## 2. Knowledge Base Structure

Organize data for the AI to reference (RAG - Retrieval Augmented Generation).

### Structure
*   **Core_Docs/**: Official documentation, user guides.
*   **FAQ/**: Frequently asked questions and answers.
*   **Pricing/**: Current pricing tiers and feature comparison.
*   **Policies/**: Terms of service, refund policy, privacy policy.

### Formatting for AI
*   Use clear, descriptive headers.
*   Keep chunks small (under 500 tokens).
*   Use Q&A format where possible.

## 3. Response Templates

### Template: Product Information
**Context:** User asks about {feature}.
**Response:**
> "Thanks for asking about {feature}!
>
> {feature} allows you to {benefit}. It is available on the {plan_level} plan.
>
> You can learn more here: {link_to_docs}
>
> Would you like to see a demo of how it works?"

### Template: Troubleshooting (Initial)
**Context:** User reports {issue}.
**Response:**
> "I'm sorry to hear you're having trouble with {issue}.
>
> Let's try a few quick things:
> 1.  {troubleshooting_step_1}
> 2.  {troubleshooting_step_2}
>
> Did that resolve the issue?"

### Template: Escalation to Human
**Context:** AI cannot resolve issue or user requests human.
**Response:**
> "I understand. I'm going to connect you with a member of our support team who can help you further.
>
> I've created ticket #{ticket_id} for you. A specialist will be with you shortly (typically within {wait_time})."

## 4. Escalation Protocols

### Triggers for Human Handoff
1.  **Sentiment Analysis:** Negative sentiment detected (Frustration, Anger).
2.  **Complexity:** Intent confidence score < 70%.
3.  **Explicit Request:** User types "Human", "Agent", "Support".
4.  **Failure Loop:** User repeats the same question 3 times.

### Routing
*   **Sales_Inquiry** -> Sales Team (Slack #sales-leads)
*   **Tech_Support** -> Support Team (Zendesk/Intercom)
*   **Billing** -> Finance/Support (Priority Queue)

