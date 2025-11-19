import re
import os
import sys

def verify_empire_bible(file_path):
    print(f"Verifying {file_path}...")
    
    if not os.path.exists(file_path):
        print(f"Error: File {file_path} not found.")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Extract TOC Links
    toc_pattern = r'\[(.*?)\]\(#(.*?)\)'
    toc_links = re.findall(toc_pattern, content)
    
    # Filter for TOC links (usually start with "Volume" or "Chapter")
    toc_links = [link for link in toc_links if link[0].startswith(('Volume', 'Chapter', 'Appendix'))]
    
    print(f"Found {len(toc_links)} TOC links.")

    # 2. Extract Headers and create anchors
    header_pattern = r'^(#{1,6})\s+(.*)$'
    headers = []
    anchors = set()
    
    for line in content.split('\n'):
        match = re.match(header_pattern, line)
        if match:
            header_text = match.group(2).strip()
            headers.append(header_text)
            # Simple anchor generation (lowercase, replace spaces with dashes, remove special chars)
            anchor = header_text.lower().replace(' ', '-').replace('.', '').replace(',', '').replace(':', '').replace('&', '').replace('(', '').replace(')', '')
            # Handle duplicates (simplified)
            anchors.add(anchor)

    # 3. Verify Links
    broken_links = []
    for text, link in toc_links:
        # Normalize link (remove leading #)
        target_anchor = link
        
        # Fuzzy matching for anchors (since markdown renderers vary)
        # We'll check if the target anchor exists in our generated set
        # This is an approximation, as actual rendering might differ
        
        # Try exact match first
        if target_anchor in anchors:
            continue
            
        # Try simplified match
        simplified_target = target_anchor.replace('-', '').replace('_', '')
        found = False
        for anchor in anchors:
            if anchor.replace('-', '').replace('_', '') == simplified_target:
                found = True
                break
        
        if not found:
            broken_links.append((text, link))

    if broken_links:
        print(f"\nWARNING: Found {len(broken_links)} potentially broken TOC links:")
        for text, link in broken_links:
            print(f"  - [{text}](#{link})")
    else:
        print("\nTOC Link Verification: PASSED (All links appear to have matching headers)")

    # 4. Check for Missing Chapters
    missing_chapters = []
    for i in range(1, 55):
        chapter_pattern = f"Chapter {i}:"
        if chapter_pattern not in content:
            # Check if it's marked as [NOT YET WRITTEN] in TOC
            toc_entry = f"Chapter {i}:"
            if f"{toc_entry} [NOT YET WRITTEN]" in content:
                print(f"Chapter {i} is correctly marked as missing.")
            else:
                # It might be missing entirely or named differently
                # Let's check if it's in the headers
                found_header = False
                for h in headers:
                    if h.startswith(f"Chapter {i}:"):
                        found_header = True
                        break
                if not found_header:
                    missing_chapters.append(i)

    if missing_chapters:
        print(f"\nMissing Chapters (Content not found): {missing_chapters}")
    else:
        print("\nChapter Verification: ALL CHAPTERS ACCOUNTED FOR (either present or marked missing)")

    # 5. Check for Placeholders
    placeholders = re.findall(r'\[TO BE ADDED\]|\[NOT YET WRITTEN\]|TODO|FIXME', content)
    print(f"\nFound {len(placeholders)} placeholders/TODOs.")

if __name__ == "__main__":
    verify_empire_bible("Empire_Bible_Complete.md")

