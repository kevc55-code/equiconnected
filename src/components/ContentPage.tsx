import PageHero from './PageHero'
import SubNav from './SubNav'
import Blocks from './Blocks'
import { getContent } from '@/lib/content'
import type { Locale } from '@/lib/i18n'
import type { NavLink } from '@/lib/nav'

export default function ContentPage({
  locale,
  slug,
  tabs,
  activePath,
  width = 'max-w-5xl',
}: {
  locale: Locale
  slug: string
  tabs?: NavLink[]
  activePath?: string
  width?: string
}) {
  const content = getContent(locale, slug)
  return (
    <div>
      <PageHero title={content.hero.title} intro={content.hero.intro} />
      {tabs && activePath ? <SubNav items={tabs} active={activePath} /> : null}
      <div className={`${width} mx-auto px-4 py-12`}>
        <Blocks blocks={content.blocks} locale={locale} />
      </div>
    </div>
  )
}
