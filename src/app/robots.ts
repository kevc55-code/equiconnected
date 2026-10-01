import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/metadata'
import { isComingSoon } from '@/lib/launch'

export const dynamic = 'force-static'

// Crawling stays allowed so search engines can see the pages' noindex while
// the site is in coming-soon mode; the sitemap is only advertised after launch.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    ...(isComingSoon() ? {} : { sitemap: `${SITE_URL}/sitemap.xml` }),
  }
}
