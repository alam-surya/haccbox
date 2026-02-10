#!/usr/bin/env node
/**
 * Convert all JPG/PNG to WebP and optimize existing WebP files.
 * Max file size: 1 MB. Uses iterative quality reduction and resize when needed.
 */

import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, dirname, extname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ASSETS_DIR = join(__dirname, '..', 'src', 'assets')

const MAX_SIZE_BYTES = 1024 * 1024 // 1 MB
const DEFAULT_QUALITY = 85
const MAX_DIMENSION = 1920

async function getAllImageFiles(dir, extensions) {
  const files = []
  try {
    const entries = await readdir(dir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = join(dir, entry.name)
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        files.push(...(await getAllImageFiles(fullPath, extensions)))
      } else if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase()
        if (extensions.includes(ext)) {
          files.push(fullPath)
        }
      }
    }
  } catch (err) {
    console.error(`Error reading ${dir}:`, err.message)
  }
  return files
}

async function processToMaxSize(inputPath, outputPath, isOverwrite = false) {
  let img = sharp(inputPath)
  const meta = await img.metadata()
  const qualities = [85, 75, 65, 55, 45]
  const maxDim = meta.width > MAX_DIMENSION || meta.height > MAX_DIMENSION ? MAX_DIMENSION : null

  for (const q of qualities) {
    let pipeline = sharp(inputPath)
    if (maxDim) {
      pipeline = pipeline.resize(maxDim, maxDim, { fit: 'inside', withoutEnlargement: true })
    }
    const buffer = await pipeline.webp({ quality: q }).toBuffer()
    if (buffer.length <= MAX_SIZE_BYTES) {
      await sharp(buffer).toFile(outputPath)
      return buffer.length
    }
  }
  const buffer = await sharp(inputPath)
    .resize(MAX_DIMENSION, MAX_DIMENSION, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 40 })
    .toBuffer()
  await sharp(buffer).toFile(outputPath)
  return buffer.length
}

async function convertToWebp(inputPath) {
  const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  try {
    const size = await processToMaxSize(inputPath, outputPath)
    console.log(`  ✓ Converted: ${inputPath.replace(ASSETS_DIR, '')} → .webp (${(size / 1024).toFixed(1)} KB)`)
    return outputPath
  } catch (err) {
    console.error(`  ✗ Failed: ${inputPath}`, err.message)
    return null
  }
}

async function optimizeWebp(inputPath) {
  try {
    const before = (await stat(inputPath)).size
    if (before <= MAX_SIZE_BYTES) {
      const buffer = await sharp(inputPath).webp({ quality: DEFAULT_QUALITY }).toBuffer()
      if (buffer.length < before) {
        await sharp(buffer).toFile(inputPath)
        console.log(`  ✓ Optimized: ${inputPath.replace(ASSETS_DIR, '')} (${(before / 1024).toFixed(1)} → ${(buffer.length / 1024).toFixed(1)} KB)`)
      } else {
        console.log(`  - Skipped (already optimal): ${inputPath.replace(ASSETS_DIR, '')}`)
      }
      return true
    }
    const size = await processToMaxSize(inputPath, inputPath, true)
    console.log(`  ✓ Optimized: ${inputPath.replace(ASSETS_DIR, '')} (${(before / 1024).toFixed(1)} → ${(size / 1024).toFixed(1)} KB) [capped <1MB]`)
    return true
  } catch (err) {
    console.error(`  ✗ Failed: ${inputPath}`, err.message)
    return false
  }
}

async function main() {
  console.log('🖼️  Image conversion to WebP\n')

  const toConvert = await getAllImageFiles(ASSETS_DIR, ['.jpg', '.jpeg', '.png'])
  const toOptimize = await getAllImageFiles(ASSETS_DIR, ['.webp'])

  if (toConvert.length > 0) {
    console.log(`Converting ${toConvert.length} JPG/PNG files to WebP...`)
    const converted = []
    for (const file of toConvert) {
      const out = await convertToWebp(file)
      if (out) converted.push(file)
    }
    console.log(`\nConverted ${converted.length} files. Removing originals...`)
    const { unlink } = await import('fs/promises')
    for (const file of converted) {
      try {
        await unlink(file)
      } catch (e) {
        console.error(`  Could not remove ${file}:`, e.message)
      }
    }
  }

  if (toOptimize.length > 0) {
    console.log(`\nOptimizing ${toOptimize.length} existing WebP files...`)
    for (const file of toOptimize) {
      await optimizeWebp(file)
    }
  }

  console.log('\n✅ Done!')
}

main().catch(console.error)
