import fs from 'fs'
import path from 'path'
import type { Locale } from './i18n'

export type Img = { src?: string; caption?: string; ratio?: string }

export type Block =
  | { type: 'text'; heading?: string; body: string }
  | { type: 'split'; heading?: string; body: string; image: Img; imageSide?: 'left' | 'right' }
  | { type: 'image'; image: Img }
  | { type: 'quotes'; items: { eyebrow: string; lines: string[] }[] }
  | { type: 'blockquote'; text: string; author?: string }
  | { type: 'cards'; heading?: string; items: { title: string; body: string; href?: string }[] }
  | { type: 'video'; label: string; url?: string }
  | { type: 'team'; members: { name: string; role: string; image?: Img; bio?: string }[] }
  | {
      type: 'events'
      items: { day: string; month: string; title: string; detail: string; status: string }[]
      note?: string
    }
  | { type: 'galleries'; items: { title: string; photos?: Img[] }[]; viewLabel: string }
  | { type: 'highlight'; heading?: string; body: string }

export type PageContent = {
  hero: { title: string; intro?: string; image?: Img }
  banner?: string
  quickLinks?: { label: string; href: string }[]
  blocks: Block[]
  photos?: Img[]
}

export type SiteSettings = { logo?: string }

export function getSettings(): SiteSettings {
  const file = path.join(process.cwd(), 'content', 'settings.json')
  try {
    return JSON.parse(fs.readFileSync(file, 'utf-8'))
  } catch {
    return {}
  }
}

export function getContent(locale: Locale, slug: string): PageContent {
  const file = path.join(process.cwd(), 'content', `${slug}.json`)
  const data = JSON.parse(fs.readFileSync(file, 'utf-8'))
  const content = data[locale]
  if (locale !== 'en' && data.en) inheritImages(content, data.en)
  // Top-level photo gallery, shared across all locales
  if (Array.isArray(data.photos) && data.photos.length > 0) {
    content.photos = data.photos.filter((p: Img) => p?.src)
  }
  return content
}

// Photos and visual layout are managed once, on the English section; other
// locales inherit src, ratio, and imageSide (captions stay per-locale).
// Matching is by block position, guarded by block type.
function inheritImages(target: PageContent, source: PageContent) {
  if (source.hero?.image?.src && !target.hero?.image?.src) {
    target.hero = { ...target.hero, image: { ...(target.hero?.image ?? {}), src: source.hero.image.src } }
  }
  const tBlocks: any[] = target.blocks ?? []
  const sBlocks: any[] = source.blocks ?? []
  tBlocks.forEach((tb, i) => {
    const sb = sBlocks[i]
    if (!sb || tb.type !== sb.type) return
    if (sb.image) {
      tb.image = {
        ...(tb.image ?? {}),
        src: tb.image?.src || sb.image.src,
        ratio: tb.image?.ratio || sb.image.ratio,
      }
    }
    if (sb.imageSide && !tb.imageSide) {
      tb.imageSide = sb.imageSide
    }
    if (sb.url && !tb.url) {
      tb.url = sb.url
    }
    for (const key of ['items', 'members'] as const) {
      if (Array.isArray(tb[key]) && Array.isArray(sb[key])) {
        tb[key].forEach((ti: any, j: number) => {
          const si = sb[key][j]
          if (si?.image?.src && !ti.image?.src) {
            ti.image = { ...(ti.image ?? {}), src: si.image.src }
          }
          // Gallery photos (with their captions) are shared by all locales.
          if (Array.isArray(si?.photos) && !ti.photos?.length) {
            ti.photos = si.photos
          }
        })
      }
    }
  })
}
