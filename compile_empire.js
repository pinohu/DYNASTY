const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'ohu-legacy-codex';
const OUTPUT_FILE = 'Empire_Bible_Final.md';
const IMAGE_REPLACEMENT_PATH = 'manuscripts/images/';

function getFileInfo(filepath) {
    const filename = path.basename(filepath);
    
    // Parse Chapter Number
    const chapterMatch = filename.match(/chapter-(\d+)/);
    const chapterNum = chapterMatch ? parseInt(chapterMatch[1]) : 999;
    
    // Parse Volume
    const volumeMatch = filepath.toLowerCase().match(/volume-([ivx]+)/);
    const volume = volumeMatch ? volumeMatch[1] : 'unknown';
    
    return {
        path: filepath,
        filename: filename,
        chapterNum: chapterNum,
        volume: volume,
        isIntro: filename.toLowerCase().includes('introduction'),
        title: getTitleFromFilename(filename)
    };
}

function getTitleFromFilename(filename) {
    let name = filename.replace(/\.md$/, '');
    name = name.replace(/^chapter-\d+-/, '');
    name = name.replace(/^volume-[ivx]+-/, '');
    name = name.replace(/-/g, ' ');
    return name.charAt(0).toUpperCase() + name.slice(1).replace(/\b\w/g, l => l.toUpperCase());
}

function scanFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            if (!filePath.includes('templates') && !filePath.includes('checklists') && !filePath.includes('implementation-resources')) {
                scanFiles(filePath, fileList);
            }
        } else {
            if (file.endsWith('.md') && (file.includes('chapter-') || file.includes('introduction'))) {
                fileList.push(getFileInfo(filePath));
            }
        }
    });
    return fileList;
}

function sortFiles(files) {
    const chapters = files.filter(f => !f.isIntro);
    const intros = files.filter(f => f.isIntro);
    
    chapters.sort((a, b) => a.chapterNum - b.chapterNum);
    
    const volOrder = { "i": 1, "ii": 2, "iii": 3, "iv": 4, "v": 5, "vi": 6, "vii": 7, "viii": 8, "ix": 9, "x": 10 };
    
    const finalOrder = [];
    const processedVols = new Set(['i']); // Vol I handled first
    
    // Vol I Intro
    const vol1Intro = intros.find(f => f.volume === 'i');
    if (vol1Intro) finalOrder.push(vol1Intro);
    
    chapters.forEach(chap => {
        const vol = chap.volume;
        if (!processedVols.has(vol) && volOrder[vol]) {
            const intro = intros.find(f => f.volume === vol);
            if (intro) finalOrder.push(intro);
            processedVols.add(vol);
        }
        finalOrder.push(chap);
    });
    
    // Remaining intros
    intros.forEach(intro => {
        if (!finalOrder.includes(intro) && !processedVols.has(intro.volume)) {
            finalOrder.push(intro);
        }
    });
    
    return finalOrder;
}

function compileContent(orderedFiles) {
    let content = `# THE OHU-PNR DYNASTY EMPIRE BIBLE\n\n**Compiled**: ${new Date().toLocaleDateString()}\n\n---\n\n`;
    
    // TOC
    content += "# TABLE OF CONTENTS\n\n";
    orderedFiles.forEach(f => {
        const link = f.title.toLowerCase().replace(/[^a-z0-9-]/g, '').replace(/ /g, '-');
        content += `- [${f.title}](#${link})\n`;
    });
    content += "\n---\n\n";
    
    // Body
    orderedFiles.forEach(f => {
        console.log(`Processing ${f.filename}...`);
        let text = fs.readFileSync(f.path, 'utf-8');
        
        // Replace image paths
        text = text.replace(/\.\/images\//g, IMAGE_REPLACEMENT_PATH);
        text = text.replace(/images\//g, IMAGE_REPLACEMENT_PATH);
        
        content += `\n\n# ${f.title}\n\n`;
        content += text;
        content += "\n\n---\n\n";
    });
    
    return content;
}

console.log("Scanning files...");
try {
    const files = scanFiles(ROOT_DIR);
    console.log(`Found ${files.length} files.`);
    
    const ordered = sortFiles(files);
    console.log(`Sorted ${ordered.length} files.`);
    
    const content = compileContent(ordered);
    
    fs.writeFileSync(OUTPUT_FILE, content, 'utf-8');
    console.log(`Compilation complete: ${OUTPUT_FILE}`);
} catch (err) {
    console.error("Error:", err);
}

