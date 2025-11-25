# AI Workforce Operations Manual

**Status:** Human-in-the-Loop (Level 2 Autonomy)
**Goal:** Maximize output per human hour using AI leverage.

---

## 1. The "Cyborg" Model
The "AI Workforce" described in the Legacy Codex is currently a **Cyborg Model**. It is not "set it and forget it" software (yet). It requires a Human Operator (you or a VA) to trigger the AI and review the output.

**The Workflow:**
1.  **Trigger:** Human Operator identifies a task (e.g., "Write Blog Post").
2.  **Prompt:** Operator selects the specific "Agent Prompt" from `ohu-legacy-codex/volume-iv-technology-automation/chapter-21/ai_prompts.md`.
3.  **Execution:** Operator pastes the prompt + data into ChatGPT/Claude.
4.  **Review:** Operator reviews the output against the Quality Checklist.
5.  **Delivery:** Operator publishes the result.

---

## 2. Actionable Prompt Library
(Copy/Paste these into your AI tool)

### Agent: The Tax Watchdog
**Trigger:** Monthly Expense Review
**Prompt:**
> "You are an expert CPA and Tax Strategist. Review the attached CSV of monthly expenses. Categorize them by Schedule C categories. Flag any expense over $500 that is missing a receipt description. Identify any potential 'Lifestyle' expenses that might be flagged by the IRS. Output a clean table."

### Agent: The Content Engine
**Trigger:** Weekly Newsletter
**Prompt:**
> "You are a direct-response copywriter in the style of Alex Hormozi. Take the following 3 bullet points about [TOPIC] and turn them into a 500-word newsletter. Use short sentences. Focus on value. End with a soft CTA to book a 'Financial Physical'. Bullets: [PASTE BULLETS]"

### Agent: The Legal Shield
**Trigger:** Contract Review
**Prompt:**
> "You are a corporate attorney. Review the attached contract text. Highlight any clauses that create 'unlimited liability' or 'indemnification' risks for my company. Suggest redlined language to limit liability to the contract value."

---

## 3. Road to Full Autonomy
**Phase 1 (Now):** Manual Copy/Paste.
**Phase 2 (Next 90 Days):** Use Make.com to send data to OpenAI API automatically (see `chapter-20` resources).
**Phase 3 (Year 1):** Fully autonomous agents running on local servers (Empire Infrastructure code).

---

## 4. Troubleshooting
*   **Hallucinations:** If the AI invents facts, verify with source documents.
*   **Tone Drift:** If the voice sounds robotic, add "Write like a human talking to a friend" to the prompt.
*   **Security:** DO NOT paste sensitive PII (SSNs, Passwords) into public AI tools. Use placeholders (e.g., [CLIENT NAME]).

