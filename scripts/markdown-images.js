import fs from "fs/promises";
import path from "path";

/**
 * Script used to update Markdown files to match old Medium publication
 * images which are now hosted on this site.
 *
 * Images has to be download before running the script.
 * Download images with : https://github.com/danielrosehill/Medium-Post-Downloader
 */

const CONTENT_DIR = path.resolve("content");
const PUBLIC_DIR = path.resolve("public");

// match ![](url)
const IMAGE_REGEX = /!\[\]\((https?:\/\/[^)]+)\)/g;

async function getAllMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return getAllMarkdownFiles(fullPath);
      }

      if (entry.isFile() && entry.name.endsWith(".md")) {
        return fullPath;
      }

      return [];
    })
  );

  return files.flat();
}

function getSlug(filePath) {
  return path.basename(filePath, ".md");
}

// transforme URL → nom de fichier attendu
function getFileNameFromUrl(url) {
  try {
    const parsed = new URL(url);
    const base = path.basename(parsed.pathname);
    return base.split("?")[0];
  } catch {
    return null;
  }
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function processFile(filePath) {
  let content = await fs.readFile(filePath, "utf-8");

  const slug = getSlug(filePath);
  const imageDir = path.join(PUBLIC_DIR, slug);

  let hasChanges = false;

  const matches = [...content.matchAll(IMAGE_REGEX)];

  for (const match of matches) {
    const fullMatch = match[0];
    const url = match[1];

    const fileName = getFileNameFromUrl(url);

    if (!fileName) continue;

    const localPath = path.join(imageDir, fileName);

    const exists = await fileExists(localPath);

    if (!exists) {
      console.warn(`⚠️ Missing file: ${localPath}`);
      continue;
    }

    const newPath = `![](/${slug}/${fileName})`;

    content = content.replace(fullMatch, newPath);
    hasChanges = true;
  }

  if (hasChanges) {
    await fs.writeFile(filePath, content, "utf-8");
    console.log(`✏️ Updated: ${filePath}`);
  }
}

async function main() {
  const files = await getAllMarkdownFiles(CONTENT_DIR);

  console.log(`📄 Found ${files.length} markdown files`);

  for (const file of files) {
    console.log(`➡️ Processing: ${file}`);
    await processFile(file);
  }

  console.log("🎉 Done");
}

main();
