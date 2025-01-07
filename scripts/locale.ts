#!/usr/bin/env bun

import fs from 'fs';
import path from 'path';
import { outputLocales } from '../.i18nrc.js';

const baseDirectory = path.join(__dirname, '../pages');

function cleanFileContent(content: string): string {
  const lines = content
    .split('\n')
    .filter(
      (line) =>
        !line.includes(
          'Note: The provided code snippet does not contain any translatable text, so it remains unchanged in the translation process.',
        ),
    );
  if (lines[0] === '```javascript' || lines[0] === '```markdown') {
    lines.shift();
    const lastLines = lines.slice(-3).join('\n');
    if (lastLines === '```\n\n\n' || lastLines === '```\n\n') {
      lines.splice(-3);
    } else if (lines.slice(-2).join('\n') === '```\n\n') {
      lines.splice(-2);
    }
  }
  return lines.join('\n');
}

function moveLocaleFiles(dir: string, locale: string) {
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      moveLocaleFiles(filePath, locale);
    } else if (filePath.includes(`.${locale}`)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const cleanedContent = cleanFileContent(content);
      const relativePath = path.relative(baseDirectory, filePath);
      const newFilePath = path.join(
        baseDirectory,
        relativePath.replace(`zh-CN`, locale).replace(`.${locale}`, ''),
      );
      const newDir = path.dirname(newFilePath);
      if (!fs.existsSync(newDir)) {
        fs.mkdirSync(newDir, { recursive: true });
      }
      fs.writeFileSync(newFilePath, cleanedContent, 'utf8');
      fs.unlinkSync(filePath);
      console.log(`Move Success: ${filePath} -> ${newFilePath}`);
    }
  });
}

outputLocales.forEach((locale) => {
  moveLocaleFiles(baseDirectory, locale);
});
