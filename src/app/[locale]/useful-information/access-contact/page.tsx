import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import ContactForm from '@/components/ContactForm'
import { getContent } from '@/lib/content'
import { getSecondaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

export default function AccessContactPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale, 'access-contact')
  const tabs = getSecondaryNav(params.locale).find((i) => i.href.includes('/useful-information'))!.children!

  return (
    <div>
      <PageHero title={content.hero.title} intro={content.hero.intro} />
      <SubNav items={tabs} active={`/${params.locale}/useful-information/access-contact`} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <ContactForm locale={params.locale} />
      </div>
    </div>
  )
}
