import fs from "fs/promises";
import path from "path";

const PUBLIC_DIR = path.resolve("public");

async function getAllFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return getAllFiles(fullPath);
      }

      if (entry.isFile()) {
        return fullPath;
      }

      return [];
    })
  );

  return files.flat();
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function renameFiles() {
  const files = await getAllFiles(PUBLIC_DIR);

  console.log(`📁 Found ${files.length} files`);

  for (const file of files) {
    const dir = path.dirname(file);
    const originalName = path.basename(file);

    // const sanitized = sanitizeFileName(originalName);
    const sanitized = originalName.substring(2);

    // rien à faire
    if (sanitized === originalName) continue;

    let targetPath = path.join(dir, sanitized);

    // éviter collisions
    let counter = 1;
    while (await fileExists(targetPath)) {
      const ext = path.extname(sanitized);
      const base = path.basename(sanitized, ext);

      targetPath = path.join(dir, `${base}_${counter}${ext}`);
      counter++;
    }

    if (originalName.startsWith("1*")) {
      await fs.rename(file, targetPath);

      console.log(`✏️ Renamed: ${originalName} → ${path.basename(targetPath)}`);
    } else {
      console.log(`Skipping ${originalName}`);
    }
  }

  console.log("🎉 Done");
}

renameFiles();
