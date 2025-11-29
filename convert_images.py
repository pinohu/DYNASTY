import os
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM
import glob

# Use absolute path to be sure
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
IMAGE_DIR = os.path.join(BASE_DIR, "manuscripts", "images")

def convert_svgs():
    print(f"🔄 Starting SVG to PNG conversion in {IMAGE_DIR}...")
    
    if not os.path.exists(IMAGE_DIR):
        print(f"❌ Directory not found: {IMAGE_DIR}")
        return

    svg_pattern = os.path.join(IMAGE_DIR, "*.svg")
    svg_files = glob.glob(svg_pattern)
    
    print(f"📂 Found {len(svg_files)} SVG files.")
    
    count = 0
    for svg_path in svg_files:
        try:
            png_path = svg_path.replace(".svg", ".png")
            print(f"🎨 Converting {os.path.basename(svg_path)}...")
            
            drawing = svg2rlg(svg_path)
            renderPM.drawToFile(drawing, png_path, fmt="PNG")
            print(f"   ✅ Saved to {os.path.basename(png_path)}")
            count += 1
        except Exception as e:
            print(f"   ❌ Failed: {e}")

    print(f"🎉 Finished converting {count} images.")

if __name__ == "__main__":
    convert_svgs()
