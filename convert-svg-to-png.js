const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  console.log("🚀 Starting SVG to PNG conversion...");
  
  // Use absolute path based on CWD
  const imageDir = path.join(process.cwd(), 'manuscripts', 'images');
  console.log(`📂 Target Directory: ${imageDir}`);
  
  if (!fs.existsSync(imageDir)) {
      console.error(`❌ Directory not found!`);
      process.exit(1);
  }

  const files = fs.readdirSync(imageDir).filter(f => f.endsWith('.svg'));
  console.log(`Found ${files.length} SVG files.`);

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  let count = 0;
  for (const file of files) {
    const svgPath = path.join(imageDir, file);
    const pngPath = svgPath.replace('.svg', '.png');
    
    // Windows-friendly file URL
    const fileUrl = 'file:///' + svgPath.replace(/\\/g, '/');
    
    try {
        await page.goto(fileUrl, { waitUntil: 'networkidle0' });
        
        const svgElement = await page.$('svg');
        if (svgElement) {
            // Set a fixed viewport if bounding box fails, but usually bbox works
            const bbox = await svgElement.boundingBox();
            
            if (bbox) {
                await page.setViewport({ 
                    width: Math.ceil(bbox.width), 
                    height: Math.ceil(bbox.height), 
                    deviceScaleFactor: 2
                });
                await svgElement.screenshot({ path: pngPath, omitBackground: true });
                process.stdout.write(`.`); // Progress dot
                count++;
            } else {
                console.error(`\n⚠️ No bbox for ${file}`);
            }
        } else {
            console.error(`\n⚠️ No SVG element in ${file}`);
        }
    } catch (e) {
        console.error(`\n❌ Error on ${file}: ${e.message}`);
    }
  }

  await browser.close();
  console.log(`\n🎉 Finished! Converted ${count} images.`);
})();
