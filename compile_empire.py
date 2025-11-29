import os
import re
from datetime import datetime

# Configuration
ROOT_DIR = "ohu-legacy-codex"
OUTPUT_FILE = "Empire_Bible_Final.md"
IMAGE_REPLACEMENT_PATH = "manuscripts/images/"

def get_file_info(filepath):
    filename = os.path.basename(filepath)
    # Parse Chapter Number
    chapter_match = re.search(r'chapter-(\d+)', filename)
    chapter_num = int(chapter_match.group(1)) if chapter_match else 999
    
    # Parse Volume
    volume_match = re.search(r'volume-([ivx]+)', filepath.lower())
    volume = volume_match.group(1) if volume_match else "unknown"
    
    return {
        "path": filepath,
        "filename": filename,
        "chapter_num": chapter_num,
        "volume": volume,
        "is_intro": "introduction" in filename.lower(),
        "title": get_title_from_filename(filename)
    }

def get_title_from_filename(filename):
    # Remove extension and prefixes
    name = os.path.splitext(filename)[0]
    name = re.sub(r'^chapter-\d+-', '', name)
    name = re.sub(r'^volume-[ivx]+-', '', name)
    name = name.replace('-', ' ').title()
    return name

def scan_files():
    files = []
    if not os.path.exists(ROOT_DIR):
        print(f"Error: Directory {ROOT_DIR} not found.")
        return files
        
    for root, dirs, files_in_dir in os.walk(ROOT_DIR):
        if "templates" in root or "checklists" in root or "implementation-resources" in root:
            continue
            
        for f in files_in_dir:
            if f.endswith(".md") and ("chapter-" in f or "introduction" in f):
                full_path = os.path.join(root, f)
                files.append(get_file_info(full_path))
    return files

def sort_files(files):
    # Separate chapters and intros
    chapters = [f for f in files if not f['is_intro']]
    intros = [f for f in files if f['is_intro']]
    
    # Sort chapters by number
    chapters.sort(key=lambda x: x['chapter_num'])
    
    # Map volumes to their order
    vol_order = {"i": 1, "ii": 2, "iii": 3, "iv": 4, "v": 5, "vi": 6, "vii": 7, "viii": 8, "ix": 9, "x": 10}
    
    final_order = []
    processed_vols = set()
    
    # Helper to get intro for a volume
    def get_intro(vol):
        return next((f for f in intros if f['volume'] == vol), None)

    # Add Volume I Intro explicitly first if present
    vol_i_intro = get_intro('i')
    if vol_i_intro: 
        final_order.append(vol_i_intro)
        processed_vols.add('i')
    
    # Iterate through chapters
    for chap in chapters:
        vol = chap['volume']
        # If we hit a new volume, insert its intro first
        if vol not in processed_vols and vol in vol_order:
            intro = get_intro(vol)
            if intro:
                final_order.append(intro)
            processed_vols.add(vol)
        
        final_order.append(chap)
        
    # Append any remaining intros (e.g. Appendices if marked as intros, or missed volumes)
    for intro in intros:
        if intro not in final_order:
             final_order.append(intro)
             
    return final_order

def compile_content(ordered_files):
    full_content = []
    
    # Title Page
    full_content.append(f"# THE OHU-PNR DYNASTY EMPIRE BIBLE\n\n**Compiled**: {datetime.now().strftime('%B %d, %Y')}\n\n---\n\n")
    
    # TOC
    full_content.append("# TABLE OF CONTENTS\n\n")
    for f in ordered_files:
        link = re.sub(r'[^a-z0-9-]', '', f['title'].lower().replace(' ', '-'))
        full_content.append(f"- [{f['title']}](#{link})\n")
    full_content.append("\n---\n\n")
    
    # Body
    for f in ordered_files:
        print(f"Processing {f['filename']}...")
        try:
            with open(f['path'], 'r', encoding='utf-8') as content_file:
                text = content_file.read()
                
                # Replace relative image paths
                # Matches ./images/ or images/ and replaces with manuscripts/images/
                text = text.replace("./images/", IMAGE_REPLACEMENT_PATH)
                text = text.replace("images/", IMAGE_REPLACEMENT_PATH)
                
                # Clean up some potential double replacements if path was already correct
                text = text.replace("manuscripts/manuscripts/images/", "manuscripts/images/")
                
                full_content.append(f"\n\n# {f['title']}\n\n")
                full_content.append(text)
                full_content.append("\n\n---\n\n")
        except Exception as e:
            print(f"Error reading {f['path']}: {e}")
            
    return "".join(full_content)

if __name__ == "__main__":
    print("🚀 Starting Compilation...")
    files = scan_files()
    print(f"Found {len(files)} files.")
    
    ordered = sort_files(files)
    print(f"Sorted {len(ordered)} files.")
    
    content = compile_content(ordered)
    
    try:
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Compilation complete! Saved to: {OUTPUT_FILE}")
        print(f"📄 Total size: {len(content)} characters")
    except Exception as e:
        print(f"❌ Error writing output file: {e}")
