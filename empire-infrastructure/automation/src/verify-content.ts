/**
 * Empire Bible Content Verification Script
 * Verifies the integrity and completeness of the Empire Bible content
 */

import * as fs from "fs";
import * as path from "path";

interface VolumeConfig {
  name: string;
  dir: string;
  expectedChapters: number;
}

interface VerificationResult {
  volume: string;
  chaptersFound: number;
  expectedChapters: number;
  complete: boolean;
  files: string[];
}

const VOLUMES: VolumeConfig[] = [
  { name: "Volume I: Foundation & Philosophy", dir: "volume-i-foundation", expectedChapters: 3 },
  { name: "Volume II: Legal & Fiduciary", dir: "volume-ii-legal-fiduciary", expectedChapters: 6 },
  { name: "Volume III: Revenue Generation", dir: "volume-iii-revenue", expectedChapters: 9 },
  { name: "Volume IV: Technology & Automation", dir: "volume-iv-technology-automation", expectedChapters: 6 },
  { name: "Volume V: Operations & Scaling", dir: "volume-v-operations-scaling", expectedChapters: 6 },
  { name: "Volume VI: Family Governance", dir: "volume-vi-family-governance", expectedChapters: 6 },
  { name: "Volume VII: Implementation", dir: "volume-vii-implementation", expectedChapters: 6 },
  { name: "Volume VIII: Growth & Exit", dir: "volume-viii-growth-exit", expectedChapters: 3 },
  { name: "Volume IX: Resources", dir: "volume-ix-resources", expectedChapters: 6 },
  { name: "Volume X: Troubleshooting", dir: "volume-x-troubleshooting-optimization", expectedChapters: 3 },
];

const EMPIRE_BIBLE_PATH = path.resolve(__dirname, "../../empire-bible");

function findMarkdownFiles(dir: string): string[] {
  const files: string[] = [];

  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...findMarkdownFiles(fullPath));
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }

  return files;
}

function countChapters(files: string[]): number {
  // Count files that look like chapters (contain "chapter" in filename or path)
  return files.filter((f) => {
    const lower = f.toLowerCase();
    return lower.includes("chapter") || /ch-?\d+/.test(lower);
  }).length;
}

function verifyVolume(volume: VolumeConfig): VerificationResult {
  const volumePath = path.join(EMPIRE_BIBLE_PATH, volume.dir);
  const files = findMarkdownFiles(volumePath);
  const chaptersFound = countChapters(files);

  return {
    volume: volume.name,
    chaptersFound,
    expectedChapters: volume.expectedChapters,
    complete: chaptersFound >= volume.expectedChapters,
    files,
  };
}

function main(): void {
  console.log("=".repeat(60));
  console.log("Empire Bible Content Verification");
  console.log("=".repeat(60));
  console.log();

  const results: VerificationResult[] = [];
  let totalChapters = 0;
  let totalExpected = 0;

  for (const volume of VOLUMES) {
    const result = verifyVolume(volume);
    results.push(result);
    totalChapters += result.chaptersFound;
    totalExpected += result.expectedChapters;

    const status = result.complete ? "✅" : "❌";
    console.log(`${status} ${result.volume}`);
    console.log(`   Chapters: ${result.chaptersFound}/${result.expectedChapters}`);
    console.log(`   Files found: ${result.files.length}`);
    console.log();
  }

  console.log("=".repeat(60));
  console.log("Summary");
  console.log("=".repeat(60));
  console.log(`Total Chapters: ${totalChapters}/${totalExpected}`);
  console.log(`Completion: ${Math.round((totalChapters / totalExpected) * 100)}%`);

  const allComplete = results.every((r) => r.complete);
  console.log(`Status: ${allComplete ? "✅ COMPLETE" : "❌ INCOMPLETE"}`);
}

main();
