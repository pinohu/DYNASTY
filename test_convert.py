import os
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM

# Test with one specific file that we know exists
SVG_FILE = "manuscripts/images/grand-master-diagram.svg"
PNG_FILE = "manuscripts/images/grand-master-diagram.png"

if os.path.exists(SVG_FILE):
    print(f"Found {SVG_FILE}")
    try:
        drawing = svg2rlg(SVG_FILE)
        renderPM.drawToFile(drawing, PNG_FILE, fmt="PNG")
        print(f"Success! Wrote {PNG_FILE}")
    except Exception as e:
        print(f"Error: {e}")
else:
    print(f"Could not find {SVG_FILE}")


