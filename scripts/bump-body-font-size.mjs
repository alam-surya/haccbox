#!/usr/bin/env node
/**
 * Bump body text font-size +2 steps in CSS. Skips rules whose selector
 * contains "title", "heading", or "logo-text" (so titles/headings unchanged).
 * Skips fonts.css.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '..', 'src');

// +2 steps = +0.25rem. Apply largest to smallest to avoid double-replace.
const SIZE_MAP = [
  ['1.375rem', '1.625rem'],
  ['1.35rem', '1.6rem'],
  ['1.25rem', '1.5rem'],
  ['1.125rem', '1.375rem'],
  ['1.0625rem', '1.3125rem'],
  ['1rem', '1.25rem'],
  ['0.9375rem', '1.1875rem'],
  ['0.875rem', '1.125rem'],
  ['0.7rem', '0.95rem'],
];

const TITLE_HEADING_PATTERN = /title|heading|logo-text/;

function getAllCssFiles(dir, list = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && e.name !== 'node_modules') {
      getAllCssFiles(full, list);
    } else if (e.isFile() && e.name.endsWith('.css')) {
      list.push(full);
    }
  }
  return list;
}

function processFile(filePath) {
  const rel = path.relative(srcDir, filePath);
  if (rel.includes('fonts.css')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  let currentSelector = '';
  let changed = false;
  const out = lines.map((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('}')) {
      return line;
    }
    if (trimmed.includes('{') && !trimmed.startsWith('/*')) {
      const sel = trimmed.slice(0, trimmed.indexOf('{')).trim();
      currentSelector = sel;
    }
    const fontSizeMatch = line.match(/^(\s*font-size:\s*)([\d.]+rem)(\s*;?\s*)$/);
    if (fontSizeMatch && currentSelector && !TITLE_HEADING_PATTERN.test(currentSelector)) {
      const [, prefix, value, suffix] = fontSizeMatch;
      const to = SIZE_MAP.find(([from]) => from === value)?.[1];
      if (to) {
        changed = true;
        return `${prefix}${to}${suffix}`;
      }
    }
    return line;
  });
  if (changed) {
    fs.writeFileSync(filePath, out.join('\n'));
    console.log('Updated:', path.relative(process.cwd(), filePath));
  }
}

const cssFiles = getAllCssFiles(srcDir);
cssFiles.forEach(processFile);
console.log('Done.');
