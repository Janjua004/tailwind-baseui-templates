import sharp from "sharp"
import { readdirSync, statSync, unlinkSync } from "node:fs"
import { join, extname, basename, dirname } from "node:path"

const ROOT = new URL("../public", import.meta.url).pathname

// Files whose name includes "hero" get a larger max width; everything else is compact.
const HERO_MAX = 1600
const STD_MAX = 900
const QUALITY = 78

function walk(dir) {
  const out = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) out.push(...walk(full))
    else out.push(full)
  }
  return out
}

const pngs = walk(ROOT).filter((f) => extname(f).toLowerCase() === ".png")
let before = 0
let after = 0

for (const file of pngs) {
  const isHero = /hero/i.test(basename(file))
  const maxW = isHero ? HERO_MAX : STD_MAX
  const outPath = join(dirname(file), basename(file, ".png") + ".webp")

  const meta = await sharp(file).metadata()
  const width = meta.width && meta.width > maxW ? maxW : meta.width

  await sharp(file)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 5 })
    .toFile(outPath)

  before += statSync(file).size
  after += statSync(outPath).size
  unlinkSync(file) // remove the heavy original PNG
  console.log(`${basename(file)} -> ${basename(outPath)}`)
}

const mb = (n) => (n / 1024 / 1024).toFixed(1) + "MB"
console.log(`\nTotal: ${mb(before)} -> ${mb(after)} (${Math.round((1 - after / before) * 100)}% smaller)`)
