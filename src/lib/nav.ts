import type { Locale } from './i18n'

export type NavLink = {
  label: string
  href: string
}

export type NavItem = {
  label: string
  href: string
  children?: NavLink[]
}

type LocalizedLabel = Record<Locale, string>

type NavItemDef = {
  label: LocalizedLabel
  path: string
  children?: NavItemDef[]
}

const primaryDef: NavItemDef[] = [
  { label: { en: 'Home', fr: 'Accueil', de: 'Startseite' }, path: '/' },
  {
    label: { en: 'Paddock Paradise', fr: 'Paddock Paradise', de: 'Paddock Paradise' },
    path: '/paddock-paradise',
    children: [
      { label: { en: 'Concept', fr: 'Concept', de: 'Konzept' }, path: '/paddock-paradise' },
      {
        label: {
          en: 'Create Your Paddock Paradise',
          fr: 'Créez votre Paddock Paradise',
          de: 'Ihr Paddock Paradise gestalten',
        },
        path: '/paddock-paradise/create-your-paddock-paradise',
      },
    ],
  },
  {
    label: { en: 'Natural Care', fr: 'Soins Naturels', de: 'Natürliche Pflege' },
    path: '/natural-care/natural-food',
    children: [
      {
        label: { en: 'Natural Food', fr: 'Alimentation Naturelle', de: 'Natürliche Fütterung' },
        path: '/natural-care/natural-food',
      },
      {
        label: { en: 'Natural Trimming', fr: 'Parage Naturel', de: 'Natürlicher Hufschnitt' },
        path: '/natural-care/natural-trimming',
      },
      {
        label: { en: 'Energy Healing', fr: 'Soin Énergétique', de: 'Energetische Heilung' },
        path: '/natural-care/energy-healing',
      },
      { label: { en: 'Dentistry', fr: 'Dentisterie', de: 'Zahnpflege' }, path: '/natural-care/dentistry' },
    ],
  },
  {
    label: { en: 'Horsemanship', fr: 'Horsemanship', de: 'Horsemanship' },
    path: '/horsemanship/philosophy',
    children: [
      { label: { en: 'Philosophy', fr: 'Philosophie', de: 'Philosophie' }, path: '/horsemanship/philosophy' },
      { label: { en: 'Groundwork', fr: 'Travail au Sol', de: 'Bodenarbeit' }, path: '/horsemanship/groundwork' },
      {
        label: { en: 'Group Workshops', fr: 'Ateliers Collectifs', de: 'Gruppenworkshops' },
        path: '/horsemanship/group-workshops',
      },
    ],
  },
  { label: { en: 'Mountain Trail', fr: 'Mountain Trail', de: 'Mountain Trail' }, path: '/mountain-trail' },
  {
    label: { en: 'Equine-Assisted Coaching', fr: 'Coaching Équin', de: 'Pferdegestütztes Coaching' },
    path: '/equine-coaching/introduction',
    children: [
      {
        label: { en: 'Introduction', fr: 'Introduction', de: 'Einführung' },
        path: '/equine-coaching/introduction',
      },
      {
        label: { en: 'Individual Coaching', fr: 'Coaching Individuel', de: 'Einzelcoaching' },
        path: '/equine-coaching/individual-coaching',
      },
      {
        label: { en: 'Team Coaching', fr: "Coaching d'Équipe", de: 'Teamcoaching' },
        path: '/equine-coaching/team-coaching',
      },
      {
        label: {
          en: 'Constellations / Systemic Coaching',
          fr: 'Constellations / Coaching Systémique',
          de: 'Konstellationen / Systemisches Coaching',
        },
        path: '/equine-coaching/constellations',
      },
      {
        label: {
          en: 'Personal Development Workshops',
          fr: 'Ateliers de Développement Personnel',
          de: 'Workshops zur Persönlichkeitsentwicklung',
        },
        path: '/equine-coaching/workshops',
      },
    ],
  },
]

const secondaryDef: NavItemDef[] = [
  { label: { en: 'Events', fr: 'Événements', de: 'Termine' }, path: '/events' },
  {
    label: { en: 'Shop', fr: 'Boutique', de: 'Shop' },
    path: '/shop',
    children: [
      { label: { en: 'Shop', fr: 'Boutique', de: 'Shop' }, path: '/shop' },
      {
        label: { en: 'Online Memberships', fr: 'Adhésions en Ligne', de: 'Online-Mitgliedschaft' },
        path: '/shop/memberships',
      },
    ],
  },
  {
    label: { en: 'Useful Information', fr: 'Infos Utiles', de: 'Nützliche Informationen' },
    path: '/useful-information/team',
    children: [
      { label: { en: 'The Team', fr: "L'Équipe", de: 'Das Team' }, path: '/useful-information/team' },
      {
        label: { en: 'Access & Contact', fr: 'Accès et Contact', de: 'Anfahrt & Kontakt' },
        path: '/useful-information/access-contact',
      },
      {
        label: { en: 'Useful Links', fr: 'Liens Utiles', de: 'Nützliche Links' },
        path: '/useful-information/useful-links',
      },
    ],
  },
  {
    label: { en: 'Connected', fr: 'Connected', de: 'Connected' },
    path: '/connected/photo-galleries',
    children: [
      {
        label: { en: 'Photo Galleries', fr: 'Galeries Photo', de: 'Fotogalerien' },
        path: '/connected/photo-galleries',
      },
      { label: { en: 'Videos', fr: 'Vidéos', de: 'Videos' }, path: '/connected/videos' },
    ],
  },
]

function localizeItem(item: NavItemDef, locale: Locale): NavItem {
  return {
    label: item.label[locale],
    href: `/${locale}${item.path === '/' ? '' : item.path}`,
    children: item.children?.map((c) => ({
      label: c.label[locale],
      href: `/${locale}${c.path}`,
    })),
  }
}

export function getPrimaryNav(locale: Locale): NavItem[] {
  return primaryDef.map((item) => localizeItem(item, locale))
}

export function getSecondaryNav(locale: Locale): NavItem[] {
  return secondaryDef.map((item) => localizeItem(item, locale))
}
