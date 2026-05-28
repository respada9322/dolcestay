/**
 * Generates favicon assets from the official DolceStay logo.
 * Run: node scripts/generate-favicons.mjs
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

const SOURCE = path.join(
  ROOT,
  'public',
  'official_logo_nobg.png',
)

const OUT_PUBLIC = path.join(ROOT, 'public', 'favicons')
const OUT_APP = path.join(ROOT, 'app')

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

/** Trim transparent padding, then fit inside a square canvas. */
async function fitLogo(input, size, { brighten = 1, saturation = 1, padding = 0.08 } = {}) {
  const trimmed = await sharp(input).trim().toBuffer()
  const meta = await sharp(trimmed).metadata()
  const maxDim = Math.max(meta.width ?? size, meta.height ?? size)
  const inner = Math.round(size * (1 - padding * 2))

  let pipeline = sharp(trimmed).resize(inner, inner, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })

  if (brighten !== 1 || saturation !== 1) {
    pipeline = pipeline.modulate({ brightness: brighten, saturation })
  }

  const logo = await pipeline.png().toBuffer()

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
}

/** Minimal 16×16: tighter crop, slight sharpen for tab legibility. */
async function fitLogoMinimal(input, size) {
  const trimmed = await sharp(input).trim().toBuffer()
  const inner = Math.round(size * 0.92)

  const logo = await sharp(trimmed)
    .resize(inner, inner, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .sharpen({ sigma: 0.6 })
    .png()
    .toBuffer()

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
}

/** Dark-tab variant: lighten mark so it reads on charcoal browser chrome. */
async function fitLogoForDark(input, size) {
  return await fitLogo(input, size, { brighten: 2.2, saturation: 0.85, padding: 0.08 })
}

/** Build a multi-resolution .ico (PNG payloads) without extra deps. */
async function encodeIco(pngBuffers) {
  const images = await Promise.all(
    pngBuffers.map(async (buf) => {
      const meta = await sharp(buf).metadata()
      return { buf, width: meta.width ?? 0, height: meta.height ?? 0 }
    }),
  )

  const count = images.length
  const headerSize = 6 + count * 16
  const totalSize = headerSize + images.reduce((s, img) => s + img.buf.length, 0)
  const out = Buffer.alloc(totalSize)

  out.writeUInt16LE(0, 0)
  out.writeUInt16LE(1, 2)
  out.writeUInt16LE(count, 4)

  let dirPos = 6
  let dataPos = headerSize

  for (const img of images) {
    const w = img.width >= 256 ? 0 : img.width
    const h = img.height >= 256 ? 0 : img.height
    out[dirPos] = w
    out[dirPos + 1] = h
    out[dirPos + 2] = 0
    out[dirPos + 3] = 0
    out.writeUInt16LE(1, dirPos + 4)
    out.writeUInt16LE(32, dirPos + 6)
    out.writeUInt32LE(img.buf.length, dirPos + 8)
    out.writeUInt32LE(dataPos, dirPos + 12)
    img.buf.copy(out, dataPos)
    dataPos += img.buf.length
    dirPos += 16
  }

  return out
}

async function main() {
  await ensureDir(OUT_PUBLIC)
  await ensureDir(OUT_APP)

  const light16 = await (await fitLogoMinimal(SOURCE, 16)).toBuffer()
  const light32 = await (await fitLogo(SOURCE, 32)).toBuffer()
  const light48 = await (await fitLogo(SOURCE, 48)).toBuffer()
  const light180 = await (await fitLogo(SOURCE, 180, { padding: 0.1 })).toBuffer()
  const light192 = await (await fitLogo(SOURCE, 192, { padding: 0.1 })).toBuffer()
  const light512 = await (await fitLogo(SOURCE, 512, { padding: 0.1 })).toBuffer()

  const dark16 = await (await fitLogoForDark(SOURCE, 16)).toBuffer()
  const dark32 = await (await fitLogoForDark(SOURCE, 32)).toBuffer()

  const writes = [
    [path.join(OUT_PUBLIC, 'favicon-16x16.png'), light16],
    [path.join(OUT_PUBLIC, 'favicon-32x32.png'), light32],
    [path.join(OUT_PUBLIC, 'favicon-48x48.png'), light48],
    [path.join(OUT_PUBLIC, 'favicon-16x16-dark.png'), dark16],
    [path.join(OUT_PUBLIC, 'favicon-32x32-dark.png'), dark32],
    [path.join(OUT_PUBLIC, 'apple-touch-icon.png'), light180],
    [path.join(OUT_PUBLIC, 'icon-192x192.png'), light192],
    [path.join(OUT_PUBLIC, 'icon-512x512.png'), light512],
    // Default icon route (light)
    [path.join(OUT_PUBLIC, 'icon.png'), light32],
  ]

  for (const [file, buf] of writes) {
    await fs.writeFile(file, buf)
  }

  const ico = await encodeIco([light16, light32, light48])
  await fs.writeFile(path.join(OUT_PUBLIC, 'favicon.ico'), ico)
  await fs.writeFile(path.join(OUT_APP, 'favicon.ico'), ico)

  // Next.js file-based metadata (primary tab icons)
  await fs.writeFile(path.join(OUT_APP, 'icon.png'), light32)
  await fs.writeFile(path.join(OUT_APP, 'apple-icon.png'), light180)

  console.log('Favicon assets generated in public/favicons/ and app/')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
