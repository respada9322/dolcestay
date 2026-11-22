/**
 * One-off: downsizes the oversized PNG hero/section backgrounds in /public/images
 * (some were up to 65 megapixels, 19-25MB each) and re-saves them as capped,
 * compressed WebP files. This is what was causing iOS Safari to decode
 * enormous bitmaps on first paint of the home, about and owners pages.
 *
 * Run: node scripts/optimize-static-hero-images.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const IMAGES_DIR = path.join(ROOT, 'public', 'images')

// Long edge cap in CSS px equivalent at ~2x DPR for a full-bleed hero image.
const MAX_WIDTH = 2400
const QUALITY = 74

const TARGETS = [
  'Hero.png',
  'rentabilize-imovel-sesimbra-hero.png',
  'porque-escolhemos-sesimbra.png',
  'somos-locais-gerimos-como-proprietarios.png',
  'nascemos-em-sesimbra.png',
]

async function run() {
  for (const name of TARGETS) {
    const inputPath = path.join(IMAGES_DIR, name)
    if (!fs.existsSync(inputPath)) {
      console.warn(`Skipping missing file: ${name}`)
      continue
    }

    const outputName = name.replace(/\.png$/i, '.webp')
    const outputPath = path.join(IMAGES_DIR, outputName)
    const before = fs.statSync(inputPath).size

    await sharp(inputPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath)

    const after = fs.statSync(outputPath).size
    fs.rmSync(inputPath)

    console.log(
      `${name} -> ${outputName}: ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`,
    )
  }
}

run()
