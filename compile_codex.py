import os
import re
import base64
import sys
from datetime import datetime

# Try imports for conversion
try:
    from svglib.svglib import svg2rlg
    from reportlab.graphics import renderPM
    CAN_CONVERT = True
except ImportError:
    CAN_CONVERT = False
    print("⚠️ ReportLab/Svglib not found. Will attempt to use existing PNGs or fallback to SVG embedding.")

# Configuration
SOURCE_DIR = "manuscripts"
OUTPUT_FILE = "Ohu_Legacy_Codex_Compiled.md"
# Use absolute path for reliability
IMAGE_DIR = os.path.join(os.getcwd(), "manuscripts", "images")

# Define the specific order of manuscripts
MANUSCRIPT_ORDER = [
    "Book_1_The_Foundation_Manuscript.md",
    "Book_2_The_Engine_Manuscript.md",
    "Volume_III_The_Digital_Ecosystem_Manuscript.md",
    "Book_3_The_Machine_Manuscript.md",
    "Book_4_The_Bloodline_Manuscript.md",
    "Book_5_The_Arsenal_Manuscript.md",
    "The_Fortress_Protocols_Manuscript.md",
    "Glossary.md"
]

def read_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def convert_svg_to_png(svg_path):
    if not CAN_CONVERT:
        return None
        
    png_path = svg_path.replace(".svg", ".png")
    if os.path.exists(png_path):
        return png_path # Already exists
        
    try:
        print(f"   🔄 Converting {os.path.basename(svg_path)} to PNG...")
        drawing = svg2rlg(svg_path)
        renderPM.drawToFile(drawing, png_path, fmt="PNG")
        return png_path
    except Exception as e:
        print(f"   ❌ Conversion failed: {e}")
        return None

def clean_content(text):
    # 1. Remove PlantUML blocks - ROBUST
    # Match ```plantuml ... ``` including content
    # We use a loop to ensure we get them all
    pattern = re.compile(r'```(?:plantuml|puml).*?```', re.DOTALL | re.IGNORECASE)
    text = pattern.sub('', text)
    
    # 2. Remove specific artifact lines if they persist
    text = re.sub(r'\*\*Source Code:\*\*', '', text)
    
    # 3. Remove duplicate empty lines
    text = re.sub(r'\n{3,}', '\n\n', text)
    
    # 4. Remove Editorial Artifacts
    lines = text.split('\n')
    cleaned_lines = []
    for line in lines:
        if "Status: " in line and "EXPANSION COMPLETE" in line: continue
        cleaned_lines.append(line)
    text = '\n'.join(cleaned_lines)
    
    # 5. Embed Images
    def embed_image(match):
        alt_text = match.group(1)
        path_str = match.group(2)
        filename = os.path.basename(path_str)
        
        local_svg_path = os.path.join(IMAGE_DIR, filename)
        local_png_path = local_svg_path.replace(".svg", ".png")
        
        final_path = None
        mime_type = ""
        
        # Try to ensure PNG exists
        if filename.lower().endswith(".svg"):
            converted_png = convert_svg_to_png(local_svg_path)
            if converted_png:
                final_path = converted_png
                mime_type = "image/png"
            elif os.path.exists(local_svg_path):
                final_path = local_svg_path
                mime_type = "image/svg+xml"
        else:
            # It's not an SVG, try to find it
            if os.path.exists(os.path.join(IMAGE_DIR, filename)):
                final_path = os.path.join(IMAGE_DIR, filename)
                mime_type = "image/png" # Assumption
                
        if final_path and os.path.exists(final_path):
            try:
                with open(final_path, "rb") as image_file:
                    encoded = base64.b64encode(image_file.read()).decode('utf-8')
                    return f"![{alt_text}](data:{mime_type};base64,{encoded})"
            except Exception as e:
                print(f"   ❌ Failed to embed {filename}: {e}")
                return match.group(0)
        else:
            print(f"   ⚠️ Image NOT found: {filename}")
            return match.group(0)

    # Match ![Alt](Path)
    text = re.sub(r'!\[(.*?)\]\((.*?)\)', embed_image, text)
    
    return text

def add_navigation_links(text):
    nav_link = '\n\n<div class="back-to-toc"><a href="#table-of-contents">↑ Return to Table of Contents</a></div>\n\n'
    text = re.sub(r'^# (.*)$', lambda m: f"{m.group(0)}{nav_link}", text, flags=re.MULTILINE)
    text = re.sub(r'^## (.*)$', lambda m: f"{m.group(0)}{nav_link}", text, flags=re.MULTILINE)
    return text

def generate_toc(content):
    toc = []
    lines = content.split('\n')
    for line in lines:
        if line.startswith('# '):
            title = line[2:].strip()
            if "THE OHU LEGACY CODEX" in title: continue
            link = re.sub(r'[^a-z0-9-]', '', title.lower().replace(' ', '-'))
            toc.append(f"- [{title}](#{link})")
        elif line.startswith('## '):
            title = line[3:].strip()
            link = re.sub(r'[^a-z0-9-]', '', title.lower().replace(' ', '-'))
            toc.append(f"  - [{title}](#{link})")
    return "\n".join(toc)

def compile_codex():
    print(f"🚀 Starting Codex Compilation at {datetime.now()}")
    
    full_content = []
    
    # Title Page
    title_page = f"""
<div class="title-page">
    <h1>THE OHU LEGACY CODEX</h1>
    <div class="subtitle">Architectural Blueprint for Intergenerational Sovereignty</div>
    <div class="author">By Ikechukwu Ohu</div>
    <div style="margin-top: 2em;">Version 5.0 • {datetime.now().year}</div>
</div>
"""
    full_content.append(title_page)

    # Copyright Page
    copyright_page = f"""
<div class="copyright-page">
    <p><strong>THE OHU LEGACY CODEX</strong></p>
    <p>Copyright © {datetime.now().year} by Ikechukwu Ohu</p>
    <p>All rights reserved.</p>
    <p>This document is the proprietary operational blueprint of the Ohu Family Enterprise.<br>
    Unauthorized reproduction, distribution, or disclosure is strictly prohibited.</p>
    <p><em>"A business built to sell is a business built to last."</em></p>
    <p>Compiled on {datetime.now().strftime('%B %d, %Y')}</p>
</div>
"""
    full_content.append(copyright_page)
    
    # Body
    body_text_parts = []
    for filename in MANUSCRIPT_ORDER:
        path = os.path.join(SOURCE_DIR, filename)
        if os.path.exists(path):
            print(f"Processing {filename}...")
            text = read_file(path)
            cleaned_text = clean_content(text)
            nav_text = add_navigation_links(cleaned_text)
            body_text_parts.append(f'\n\n<div class="page-break"></div>\n\n')
            body_text_parts.append(nav_text)
        else:
            print(f"⚠️ Warning: File not found: {filename}")

    joined_body = "".join(body_text_parts)

    # TOC
    toc_content = f"""
<div class="toc-page" id="table-of-contents">
<h1>Table of Contents</h1>

{generate_toc(joined_body)}
</div>
"""
    full_content.append(toc_content)
    full_content.append(joined_body)
    
    # Output
    final_document = "\n".join(full_content)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(final_document)
        
    print(f"✅ Successfully compiled {OUTPUT_FILE}")

if __name__ == "__main__":
    compile_codex()
