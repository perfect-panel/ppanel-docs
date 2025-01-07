#!/usr/bin/env bun

import fs from 'fs';
import path from 'path';

const insertCode = "\n\nimport Giscus from '@/components/giscus';\n\n<Giscus />\n";
const baseDirectory = path.join(__dirname, '../pages');

function findMdxFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findMdxFiles(filePath));
    } else if (filePath.endsWith('.mdx') && filePath.includes('/docs/')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = findMdxFiles(baseDirectory);

files.forEach((file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(`Read file error: ${file}`, err);
      return;
    }

    if (!data.includes(insertCode.trim())) {
      const updatedData = data + insertCode;
      fs.writeFile(file, updatedData, 'utf8', (err) => {
        if (err) {
          console.error(`Write file error: ${file}`, err);
        } else {
          console.log(`Successfully updated file: ${file}`);
        }
      });
    } else {
      console.log(`File already contains the inserted code: ${file}`);
    }
  });
});
