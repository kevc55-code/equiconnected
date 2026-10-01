import type { Metadata } from 'next'
import { getContent } from './content'
import { defaultLocale, locales, localizePath, type Locale } from './i18n'

export const SITE_URL = 'https://equiconnected.org'
export const SITE_NAME = 'EquiConnected'

export const tagline: Record<Locale, string> = {
  fr: 'Les chevaux, bien mieux que les mots',
  en: 'Horses, Much Better Than Words',
  de: 'Pferde, viel besser als Worte',
}

export const siteDescription: Record<Locale, string> = {
  fr: "EquiConnected est une association qui promeut des relations harmonieuses entre chevaux et humains : Paddock Paradise, soins naturels, horsemanship, Mountain Trail et coaching équin.",
  en: 'EquiConnected is an association promoting harmonious relationships between horses and humans through Paddock Paradise, natural care, horsemanship, Mountain Trail, and equine-assisted coaching.',
  de: 'EquiConnected ist ein Verein, der harmonische Beziehungen zwischen Pferd und Mensch fördert: Paddock Paradise, natürliche Pflege, Horsemanship, Mountain Trail und pferdegestütztes Coaching.',
}

const ogLocale: Record<Locale, string> = { fr: 'fr_FR', en: 'en_GB', de: 'de_DE' }

// Strip the CMS's light markdown so body text reads cleanly as a description.
function toPlainText(markdown: string) {
  return markdown
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*?([^*]+)\*\*?/g, '$1')
    .replace(/^- /gm, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function truncate(text: string, max = 160) {
  if (text.length <= max) return text
  return text.slice(0, text.lastIndexOf(' ', max - 1)) + '…'
}

// Title, description, canonical URL and language alternates for one page.
// `path` is the locale-less route, e.g. '/mountain-trail' or '/' for home.
export function pageMetadata(
  locale: Locale,
  path: string,
  options: { slug?: string; title?: string; description?: string } = {},
): Metadata {
  const content = options.slug ? getContent(locale, options.slug) : null
  const firstBody = content?.blocks.find((b) => 'body' in b && b.body) as { body: string } | undefined
  const description = truncate(
    options.description ?? content?.hero.intro ?? (firstBody ? toPlainText(firstBody.body) : siteDescription[locale]),
  )
  const title = options.title ?? content?.hero.title
  const url = localizePath(locale, path)

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localizePath(l, path)])),
        'x-default': localizePath(defaultLocale, path),
      },
    },
    openGraph: {
      title: title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — ${tagline[locale]}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: ogLocale[locale],
      type: 'website',
    },
  }
}
