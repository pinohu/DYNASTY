const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  console.log("🚀 Starting SVG to PNG conversion...");
  
  const cwd = process.cwd();
  const imageDir = path.join(cwd, 'manuscripts', 'images');
  console.log(`📂 Working directory: ${cwd}`);
  console.log(`📂 Image directory: ${imageDir}`);
  
  if (!fs.existsSync(imageDir)) {
      console.error(`❌ Directory not found!`);
      process.exit(1);
  }

  const files = fs.readdirSync(imageDir).filter(f => f.endsWith('.svg'));
  console.log(`Found ${files.length} SVG files.`);

  const browser = await puppeteer.launch({ 
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox'] // Add these for stability in some envs
  });
  
  const page = await browser.newPage();

  for (const file of files) {
    const svgPath = path.join(imageDir, file);
    const pngPath = svgPath.replace('.svg', '.png');
    
    // Proper file URL for Windows
    const fileUrl = 'file:///' + svgPath.replace(/\\/g, '/');
    
    console.log(`\n🎨 Processing ${file}...`);
    
    try {
        await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 10000 });
        
        const svgElement = await page.$('svg');
        if (svgElement) {
            const bbox = await svgElement.boundingBox();
            if (bbox) {
                await page.setViewport({ 
                    width: Math.max(Math.ceil(bbox.width), 100), 
                    height: Math.max(Math.ceil(bbox.height), 100), 
                    deviceScaleFactor: 2 
                });
                
                await svgElement.screenshot({ path: pngPath });
                console.log(`   ✅ Created ${path.basename(pngPath)}`);
            } else {
                console.error(`   ⚠️ Bounding box is null`);
            }
        } else {
            console.error(`   ⚠️ SVG element not found in DOM`);
        }
    } catch (e) {
        console.error(`   ❌ Failed: ${e.message}`);
    }
  }

  await browser.close();
  console.log(`\n🎉 Done.`);
})();


