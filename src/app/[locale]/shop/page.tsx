import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import Logo from '@/components/Logo'
import { getSecondaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Shop',
    heroIntro: 'Support the association and its mission.',
    productLabel: 'Support an association valorizing the human-horse relationship',
  },
  fr: {
    heroTitle: 'Boutique',
    heroIntro: "Soutenez l'association et sa mission.",
    productLabel: "Soutenez une association valorisant la relation homme-cheval",
  },
  de: {
    heroTitle: 'Shop',
    heroIntro: 'Unterstützen Sie den Verein und seine Mission.',
    productLabel: 'Unterstützen Sie einen Verein, der die Mensch-Pferd-Beziehung fördert',
  },
} satisfies Record<Locale, unknown>

export default function ShopPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getSecondaryNav(params.locale).find((i) => i.href.includes('/shop'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />
      <SubNav items={tabs} active={`/${params.locale}/shop`} />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="max-w-xs rounded-lg border border-ink/10 overflow-hidden hover:shadow-md transition-shadow">
          <div className="aspect-square bg-brand-light flex items-center justify-center text-brand">
            <Logo className="h-24 w-24" />
          </div>
          <div className="p-4">
            <p className="text-sm font-medium">{c.productLabel}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
