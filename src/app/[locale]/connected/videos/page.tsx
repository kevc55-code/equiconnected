import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import { getSecondaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: { heroTitle: 'Videos', videoLabel: '"What They LOVE That Humans Ignore" — Inside Horses' },
  fr: { heroTitle: 'Vidéos', videoLabel: '« What They LOVE That Humans Ignore » — Inside Horses' },
  de: { heroTitle: 'Videos', videoLabel: '„What They LOVE That Humans Ignore" — Inside Horses' },
} satisfies Record<Locale, unknown>

export default function VideosPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getSecondaryNav(params.locale).find((i) => i.href.includes('/connected'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} />
      <SubNav items={tabs} active={`/${params.locale}/connected/videos`} />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="aspect-video rounded-lg bg-ink flex items-center justify-center text-white/60 text-sm text-center px-6">
          {c.videoLabel}
        </div>
      </div>
    </div>
  )
}
