import type { MetadataRoute } from 'next'
import { getPrimaryNav, getSecondaryNav } from '@/lib/nav'
import { locales, localizePath } from '@/lib/i18n'
import { SITE_URL } from '@/lib/metadata'
import { isComingSoon, isPreview } from '@/lib/launch'

export const dynamic = 'force-static'

// Every page reachable from the menus or footer, in all three languages.
const legalPaths = ['/legal-notice', '/privacy-policy', '/terms', '/licenses', '/cookie-settings', '/site-map']

export default function sitemap(): MetadataRoute.Sitemap {
  if (isComingSoon() || isPreview) return []
  const nav = [...getPrimaryNav('fr'), ...getSecondaryNav('fr')]
  const navPaths = nav.flatMap((item) => [item.href, ...(item.children ?? []).map((c) => c.href)])
  const paths = Array.from(new Set([...navPaths.map((href) => href.replace(/^\/fr/, '') || '/'), ...legalPaths]))

  return paths.map((path) => ({
    url: `${SITE_URL}${localizePath('fr', path)}/`,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}${localizePath(l, path)}/`])),
    },
  }))
}
