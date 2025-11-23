import os
from openai import OpenAI
from anthropic import Anthropic
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Clients
openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
anthropic_client = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

def generate_blog_content(topic, outline_point, model="gpt-4-turbo"):
    """
    Generates blog content using OpenAI GPT-4 Turbo.
    """
    prompt = f"""
    Write a section for a blog post about "{topic}".
    Focus on this outline point: {outline_point}
    
    Style: Professional, informative, SEO-optimized.
    Format: Markdown.
    """
    
    try:
        response = openai_client.chat.completions.create(
            model="gpt-4-turbo-preview",
            messages=[
                {"role": "system", "content": "You are an expert content writer and SEO specialist."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=1500
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"Error generating content: {str(e)}"

def analyze_document_claude(document_text, query, model="claude-3-opus-20240229"):
    """
    Analyzes a long document using Anthropic Claude 3 Opus.
    """
    try:
        message = anthropic_client.messages.create(
            model=model,
            max_tokens=1000,
            temperature=0,
            system="You are an expert analyst. Analyze the provided text and answer the user's query accurately.",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": f"Document:\n{document_text}\n\nQuery: {query}"
                        }
                    ]
                }
            ]
        )
        return message.content[0].text
    except Exception as e:
        return f"Error analyzing document: {str(e)}"

def classify_intent(user_message):
    """
    Classifies user intent using a lightweight model (GPT-3.5 Turbo) for cost efficiency.
    """
    try:
        response = openai_client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Classify the user's intent into one of these categories: Product_Info, Tech_Support, Billing, Sales_Inquiry, General. Return ONLY the category name."},
                {"role": "user", "content": user_message}
            ],
            temperature=0,
            max_tokens=10
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return "General"

# Example Usage
if __name__ == "__main__":
    # 1. Generate Blog Section
    print("--- Blog Generation ---")
    blog_section = generate_blog_content("AI Automation", "Benefits of using AI in Customer Service")
    print(blog_section[:200] + "...")

    # 2. Analyze Document
    print("\n--- Document Analysis ---")
    doc_text = "Activepieces is an open-source automation tool..."
    analysis = analyze_document_claude(doc_text, "What is Activepieces?")
    print(analysis)

    # 3. Classify Intent
    print("\n--- Intent Classification ---")
    intent = classify_intent("I want to upgrade my subscription")
    print(f"User: 'I want to upgrade my subscription' -> Intent: {intent}")

