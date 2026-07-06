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
  | { type: 'video'; label: string }
  | { type: 'team'; members: { name: string; role: string; image?: Img }[] }
  | {
      type: 'events'
      items: { day: string; month: string; title: string; detail: string; status: string }[]
      note?: string
    }
  | { type: 'galleries'; items: { title: string; count: number; image?: Img }[]; viewLabel: string }
  | { type: 'highlight'; heading?: string; body: string }

export type PageContent = {
  hero: { title: string; intro?: string }
  banner?: string
  quickLinks?: { label: string; href: string }[]
  blocks: Block[]
}

export function getContent(locale: Locale, slug: string): PageContent {
  const file = path.join(process.cwd(), 'content', `${slug}.json`)
  const data = JSON.parse(fs.readFileSync(file, 'utf-8'))
  return data[locale]
}
