import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ContactForm from '@/components/ContactForm'
import { getSecondaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Access & Contact',
    heroIntro: 'We offer support both on-site and at your location within a 30 km radius.',
  },
  fr: {
    heroTitle: 'Accès et Contact',
    heroIntro: "Nous proposons un accompagnement à la fois sur site et chez vous dans un rayon de 30 km.",
  },
  de: {
    heroTitle: 'Anfahrt & Kontakt',
    heroIntro: 'Wir bieten Begleitung sowohl bei uns vor Ort als auch bei Ihnen in einem Umkreis von 30 km.',
  },
} satisfies Record<Locale, unknown>

export default function AccessContactPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getSecondaryNav(params.locale).find((i) => i.href.includes('/useful-information'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />
      <SubNav items={tabs} active={`/${params.locale}/useful-information/access-contact`} />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <ContactForm locale={params.locale} />
      </div>
    </div>
  )
}
