/**
 * Lists house photos in /images and writes lib/accommodation-images.ts.
 * Copies those folders into public/images/listings (no symlink — Vercel cannot
 * deploy a public symlink that points at ../../images).
 *
 * Run: node scripts/generate-accommodation-images.mjs
 *      node scripts/generate-accommodation-images.mjs --sync-only
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { PHOTO_ORDER_OVERRIDES } from './photo-order-overrides.mjs'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE = path.join(ROOT, 'images')
const PUBLIC_LISTINGS = path.join(ROOT, 'public', 'images', 'listings')
const OUTPUT = path.join(ROOT, 'lib', 'accommodation-images.ts')
const SYNC_ONLY = process.argv.includes('--sync-only')

// Source photos are full camera resolution (some 60+ megapixels). Served as-is
// they forced mobile Safari to decode dozens of megabytes per image at once,
// which is what was crashing the tab. Cap the long edge and recompress instead.
const MAX_DIMENSION = 2000
const WEBP_QUALITY = 78
const JPEG_QUALITY = 78

/** slug -> folder name inside /images */
export const ACCOMMODATION_FOLDERS = {
  'sesimbra-99': 'sesimbra 99',
  'casa-do-dario': 'Casa do Dario',
  'casa-do-castelo': 'Casa do Castelo',
  'casa-do-castelo-t3': 'Castelo T3',
  'casa-azul': 'Casa Azul',
  'cantinho-da-gingeira': 'Cantinho da Gingeira',
  'casa-da-falesia': 'Casa da Falésia',
  'beach-apartment': 'beach apartment',
  'sesimbra-vista-azul': 'Sesimbra Vista Azul',
  'casa-ferreira': 'Casa Ferreira',
  'casa-atlas': 'Casa Atlas',
  'estudio-do-abacateiro': 'Estudio do Abacateiro',
  'casa-luminosa': 'Casa Luminosa',
  'casa-da-lagoa': 'Casa da Lagoa',
  refugio: 'Refugio',
  'mar-a-vista': 'Mar à Vista',
  'quinta-das-figueiras': 'Quinta das Figueiras',
  'my-home-in-sesimbra': 'My Home In Sesimbra',
  'vila-das-conchas': 'Vila das Conchas',
  'castle-apartment': 'Castle Apartment',
  dolceplace: 'dolcePlace',
  'casa-da-praia': 'Casa da Praia',
  'seaflower-house': 'SeaFlower House',
  'milady-house': 'Milady House',
  'paradise-in-lagoa': 'ParAdise In Lagoa',
  'ocean-sesimbra': 'Ocean Sesimbra',
  'olive-tree-house': 'Olive TRee House',
  'seriz-beach-house': 'Serisz Beach House',
  'retiro-d-alma': "Retiro D'Alma",
  'trevo-beach-house': 'Trevo Beach House',
  'brisa-de-sesimbra': 'Brisa de Sesimbra',
  'casa-campo-e-praia': 'Casa Campo e Praia - Meco',
  'villa-pinheirinhos': 'ViLLA Pinheirinhos',
  'casa-da-alegria': 'Casa da Alegria',
  'villa-terracos-do-castelo': 'Villa terraços do castelo',
  'villa-penim': 'Villa Penim',
  'villa-manuelina': 'Villa Manuelina',
  'perola-azul': 'Perola Azul',
}

const IMAGE_EXT = new Set(['.webp', '.jpg', '.jpeg', '.png'])
const SKIP_NAME = /c[oó]pia|copy|\.ds_store/i

function encodePublicPath(folder, file) {
  return `/images/listings/${folder.split('/').map(encodeURIComponent).join('/')}/${encodeURIComponent(file)}`
}

function listImages(folderName, slug) {
  const dir = path.join(SOURCE, folderName)
  if (!fs.existsSync(dir)) {
    console.warn(`Missing folder: ${folderName}`)
    return []
  }

  const files = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => IMAGE_EXT.has(path.extname(name).toLowerCase()) && !SKIP_NAME.test(name.normalize('NFC')))

  const order = PHOTO_ORDER_OVERRIDES[slug]
  if (order) {
    // Matches the photo order shown on reservas.dolcestay.com for this listing.
    // Any local file not covered by the override is appended alphabetically.
    const rank = new Map(order.map((name, index) => [name, index]))
    files.sort((a, b) => {
      const ra = rank.has(a) ? rank.get(a) : Number.POSITIVE_INFINITY
      const rb = rank.has(b) ? rank.get(b) : Number.POSITIVE_INFINITY
      if (ra !== rb) return ra - rb
      return a.localeCompare(b, 'pt', { numeric: true, sensitivity: 'base' })
    })
  } else {
    files.sort((a, b) => a.localeCompare(b, 'pt', { numeric: true, sensitivity: 'base' }))
  }

  return files.map((file) => encodePublicPath(folderName, file))
}

function linkOrCopyFile(from, to) {
  try {
    fs.linkSync(from, to)
  } catch {
    fs.copyFileSync(from, to)
  }
}

async function resizeFile(from, to, ext) {
  const pipeline = sharp(from).rotate().resize({
    width: MAX_DIMENSION,
    height: MAX_DIMENSION,
    fit: 'inside',
    withoutEnlargement: true,
  })

  if (ext === '.webp') {
    await pipeline.webp({ quality: WEBP_QUALITY }).toFile(to)
  } else if (ext === '.jpg' || ext === '.jpeg') {
    await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(to)
  } else {
    await pipeline.toFile(to)
  }
}

async function syncImageFile(from, to) {
  const srcStat = fs.statSync(from)
  if (fs.existsSync(to) && fs.statSync(to).mtimeMs >= srcStat.mtimeMs) {
    return
  }

  const ext = path.extname(from).toLowerCase()
  if (!IMAGE_EXT.has(ext)) {
    linkOrCopyFile(from, to)
    return
  }

  try {
    const metadata = await sharp(from).metadata()
    const longEdge = Math.max(metadata.width ?? 0, metadata.height ?? 0)
    if (longEdge > MAX_DIMENSION) {
      await resizeFile(from, to, ext)
      return
    }
  } catch (err) {
    console.warn(`Could not read/resize ${from}: ${err.message}`)
  }

  linkOrCopyFile(from, to)
}

async function syncFolder(from, to) {
  fs.mkdirSync(to, { recursive: true })
  const entries = fs.readdirSync(from, { withFileTypes: true })

  // Drop files that no longer exist in the source folder.
  const sourceNames = new Set(entries.map((entry) => entry.name))
  for (const existing of fs.readdirSync(to, { withFileTypes: true })) {
    if (!sourceNames.has(existing.name)) {
      fs.rmSync(path.join(to, existing.name), { recursive: true, force: true })
    }
  }

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    const sourcePath = path.join(from, entry.name)
    const destPath = path.join(to, entry.name)
    if (entry.isDirectory()) {
      await syncFolder(sourcePath, destPath)
    } else if (entry.isFile()) {
      await syncImageFile(sourcePath, destPath)
    }
  }
}

async function syncPublicListings() {
  fs.mkdirSync(PUBLIC_LISTINGS, { recursive: true })

  const folders = [...new Set(Object.values(ACCOMMODATION_FOLDERS))]
  const keepFolders = new Set(folders)
  for (const existing of fs.readdirSync(PUBLIC_LISTINGS, { withFileTypes: true })) {
    if (existing.isDirectory() && !keepFolders.has(existing.name)) {
      fs.rmSync(path.join(PUBLIC_LISTINGS, existing.name), { recursive: true, force: true })
    }
  }

  for (const folder of folders) {
    const from = path.join(SOURCE, folder)
    if (!fs.existsSync(from)) {
      console.warn(`Missing folder: ${folder}`)
      continue
    }
    await syncFolder(from, path.join(PUBLIC_LISTINGS, folder))
  }
}

function writeManifest(map) {
  const body = Object.entries(map)
    .map(([slug, files]) => {
      const lines = files.map((file) => `    ${JSON.stringify(file)},`).join('\n')
      return `  ${JSON.stringify(slug)}: [\n${lines}\n  ],`
    })
    .join('\n')

  const contents = `// Generated by scripts/generate-accommodation-images.mjs — do not edit by hand.
export const accommodationImages: Record<string, string[]> = {
${body}
};
`

  fs.writeFileSync(OUTPUT, contents)
}

await syncPublicListings()

if (!SYNC_ONLY) {
  const map = Object.fromEntries(
    Object.entries(ACCOMMODATION_FOLDERS).map(([slug, folder]) => [slug, listImages(folder, slug)]),
  )
  writeManifest(map)

  const counts = Object.entries(map)
    .map(([slug, files]) => `${String(files.length).padStart(3, ' ')}  ${slug}`)
    .join('\n')

  console.log(counts)
  console.log(`\nWrote ${OUTPUT}`)
}

console.log(`Synced listing photos into ${PUBLIC_LISTINGS}`)
