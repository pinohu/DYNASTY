const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'manuscripts', 'images');
console.log(`Checking directory: ${dir}`);

if (fs.existsSync(dir)) {
    console.log("Directory exists.");
    const files = fs.readdirSync(dir);
    console.log(`Found ${files.length} files.`);
    console.log("First 5 files:", files.slice(0, 5));
    
    // Try writing a dummy file
    try {
        fs.writeFileSync(path.join(dir, 'test_write.txt'), 'test');
        console.log("Successfully wrote test file.");
    } catch (e) {
        console.error("Failed to write:", e);
    }
} else {
    console.error("Directory does not exist.");
}


