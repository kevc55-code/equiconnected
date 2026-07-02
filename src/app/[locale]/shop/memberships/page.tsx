import PageHero from '@/components/PageHero'
import SubNav from '@/components/SubNav'
import { getSecondaryNav } from '@/lib/nav'
import type { Locale } from '@/lib/i18n'

const content = {
  en: {
    heroTitle: 'Online Memberships',
    heroIntro: 'Join EquiConnected and support our mission year-round.',
    p1: 'Becoming a member helps fund our work across natural care, horsemanship, Mountain Trail, Paddock Paradise consulting, and equine-assisted coaching. Members receive priority booking on workshops and are kept up to date through our newsletter.',
    p2: "Membership renewal and sign-up is handled online — use the newsletter form below to get in touch and we'll send you the current membership options.",
  },
  fr: {
    heroTitle: 'Adhésions en Ligne',
    heroIntro: "Rejoignez EquiConnected et soutenez notre mission toute l'année.",
    p1: "Devenir adhérent contribue à financer nos actions dans les soins naturels, le Horsemanship, le Mountain Trail, le conseil en Paddock Paradise et le coaching équin. Les adhérents bénéficient d'une réservation prioritaire pour les ateliers et sont tenus informés via notre newsletter.",
    p2: "Le renouvellement et l'inscription des adhésions se font en ligne — utilisez le formulaire de newsletter ci-dessous pour nous contacter et nous vous enverrons les options d'adhésion actuelles.",
  },
  de: {
    heroTitle: 'Online-Mitgliedschaft',
    heroIntro: 'Werden Sie Mitglied bei EquiConnected und unterstützen Sie unsere Mission das ganze Jahr über.',
    p1: 'Eine Mitgliedschaft hilft, unsere Arbeit in den Bereichen natürliche Pflege, Horsemanship, Mountain Trail, Paddock-Paradise-Beratung und pferdegestütztes Coaching zu finanzieren. Mitglieder erhalten bevorzugte Buchung für Workshops und werden über unseren Newsletter auf dem Laufenden gehalten.',
    p2: 'Die Verlängerung und Anmeldung der Mitgliedschaft erfolgt online — nutzen Sie das Newsletter-Formular unten, um uns zu kontaktieren, und wir senden Ihnen die aktuellen Mitgliedschaftsoptionen zu.',
  },
} satisfies Record<Locale, unknown>

export default function MembershipsPage({ params }: { params: { locale: Locale } }) {
  const c = content[params.locale]
  const tabs = getSecondaryNav(params.locale).find((i) => i.href.includes('/shop'))!.children!

  return (
    <div>
      <PageHero title={c.heroTitle} intro={c.heroIntro} />
      <SubNav items={tabs} active={`/${params.locale}/shop/memberships`} />

      <div className="max-w-3xl mx-auto px-4 py-12 prose-body">
        <p>{c.p1}</p>
        <p>{c.p2}</p>
      </div>
    </div>
  )
}
