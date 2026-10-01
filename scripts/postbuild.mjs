// Runs after `next build` (static export into out/).
// 1. Shrinks oversized photos in the published copy only — originals in
//    public/images stay untouched, so editors can upload straight from a phone.
// 2. Replaces Next's default English 404 page with our trilingual one.
import { readdir, readFile, stat, writeFile, copyFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const OUT = 'out'
const MAX_WIDTH = 2000
const JPEG_QUALITY = 80

async function optimizeImages(dir) {
  let saved = 0
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      saved += await optimizeImages(file)
      continue
    }
    const ext = path.extname(entry.name).toLowerCase()
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue

    const input = await readFile(file)
    let pipeline = sharp(input, { failOn: 'none' }).rotate() // honour phone EXIF orientation
    const { width } = await pipeline.metadata()
    if (width && width > MAX_WIDTH) pipeline = pipeline.resize({ width: MAX_WIDTH })

    if (ext === '.png') pipeline = pipeline.png({ compressionLevel: 9, palette: true })
    else if (ext === '.webp') pipeline = pipeline.webp({ quality: JPEG_QUALITY })
    else pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true })

    const output = await pipeline.toBuffer()
    if (output.length < input.length) {
      await writeFile(file, output)
      saved += input.length - output.length
    }
  }
  return saved
}

const imagesDir = path.join(OUT, 'images')
if (await stat(imagesDir).catch(() => null)) {
  const saved = await optimizeImages(imagesDir)
  console.log(`postbuild: images optimised, saved ${(saved / 1024 / 1024).toFixed(1)} MB`)
}

await copyFile('scripts/404.html', path.join(OUT, '404.html'))
console.log('postbuild: custom 404 page installed')
