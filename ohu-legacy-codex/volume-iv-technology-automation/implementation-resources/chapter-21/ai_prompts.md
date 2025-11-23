# AI Content Generation Prompts

## Blog Post Prompts

### 1. Detailed Outline Generator
**Model:** GPT-4 Turbo / Claude 3 Opus
**Prompt:**
```text
Create a detailed blog post outline for the topic: "{topic}" targeting the keywords: "{keywords}".

The target audience is: {audience}
The desired tone is: {tone}
Target word count: {word_count}

Structure the outline with:
1.  **Catchy Title Options** (Provide 5 SEO-optimized titles)
2.  **Introduction** (Hook, Problem, Solution, Thesis)
3.  **5-7 Main Sections** (H2 headings)
    *   Include 2-3 subsections (H3) for each
    *   List key points/arguments for each subsection
4.  **Conclusion** (Summary, Call to Action)
5.  **FAQ Section** (3-5 common questions)

Ensure the outline flows logically and covers the topic comprehensively.
```

### 2. Full Article Writer (Section by Section)
**Model:** GPT-4 Turbo / Claude 3 Opus
**Prompt:**
```text
Write the content for Section {section_number}: "{section_title}" based on the following outline point:
{section_details}

Context: This is part of a blog post about "{topic}".
Tone: {tone}
Audience: {audience}

Requirements:
*   Write approximately {section_word_count} words.
*   Use short paragraphs and bullet points for readability.
*   Include a real-world example or case study if applicable.
*   Optimize for the keyword: "{keyword}".
*   Do not include a conclusion for this section, just transition to the next.
```

## Social Media Prompts

### 1. LinkedIn Thought Leadership
**Model:** GPT-4 / Claude 3 Sonnet
**Prompt:**
```text
Write a LinkedIn post about: "{topic}".

Goal: Establish thought leadership and drive engagement.
Audience: {audience} (e.g., B2B professionals, Real Estate Investors)

Structure:
1.  **Hook:** A contrarian statement or surprising statistic (1 sentence).
2.  **Body:** Explain the concept/insight clearly (3-4 short paragraphs).
3.  **Takeaway:** One actionable tip the reader can use today.
4.  **Engagement:** Ask a specific question to encourage comments.

Style: Professional yet conversational, spacing between paragraphs, minimal emojis.
```

### 2. Twitter/X Thread Generator
**Model:** GPT-4 / Claude 3 Sonnet
**Prompt:**
```text
Turn the following blog post summary into a viral Twitter thread (10-12 tweets).

Topic: "{topic}"
Key Points:
{key_points}

Requirements:
*   Tweet 1: The Hook (Problem + Promise).
*   Tweets 2-9: The Value (One distinct point per tweet).
*   Tweet 10: The Summary (Bullet points).
*   Tweet 11: The Call to Action (Link to full article/newsletter).

Style: Punchy, concise, no hashtags in the body.
```

## Email Marketing Prompts

### 1. Cold Outreach Email
**Model:** GPT-3.5 Turbo / Claude 3 Haiku
**Prompt:**
```text
Write a cold outreach email to a potential client in the {industry} industry.

My Company: {company_name}
Service: {service_name}
Value Proposition: {value_prop}
Target Person: {job_title}

Structure:
1.  **Subject Line:** 3 options (Short, curiosity-inducing).
2.  **Opening:** Personalized observation (placeholder) + Problem identification.
3.  **Pitch:** How we solve that problem (1-2 sentences).
4.  **Social Proof:** Mention a similar client result (placeholder).
5.  **CTA:** Soft ask (e.g., "Worth a chat?").

Tone: Helpful, not salesy, concise (under 150 words).
```

### 2. Newsletter Content
**Model:** GPT-4 / Claude 3 Sonnet
**Prompt:**
```text
Write a newsletter segment about: "{news_topic}".

Audience: {audience}
Goal: Inform and Educate.

Structure:
1.  **The "What":** Briefly explain the news/update.
2.  **The "So What":** Explain why it matters to the reader.
3.  **The "Now What":** Actionable advice on how to respond/benefit.

Tone: Insider, knowledgeable, friendly.
```

