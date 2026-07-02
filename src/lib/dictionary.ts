import type { Locale } from './i18n'

export const dictionary = {
  en: {
    newsletterLabel: 'I subscribe to the newsletter',
    emailPlaceholder: 'Enter your email address',
    ok: 'OK',
    siteMap: 'Site Map',
    licenses: 'Licenses',
    legalNotice: 'Legal Notice',
    terms: 'Terms & Conditions',
    cookieSettings: 'Cookie Settings',
    readMore: 'Read more',
    founded: 'EquiConnected — Association founded October 2025',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    message: 'Message',
    send: 'Send my request',
  },
  fr: {
    newsletterLabel: "Je m'abonne à la newsletter",
    emailPlaceholder: 'Renseignez votre email',
    ok: 'OK',
    siteMap: 'Plan du site',
    licenses: 'Licences',
    legalNotice: 'Mentions légales',
    terms: 'CGUV',
    cookieSettings: 'Paramétrer vos cookies',
    readMore: 'En savoir plus',
    founded: 'EquiConnected — Association fondée en octobre 2025',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Email',
    message: 'Message',
    send: 'Envoyer ma demande',
  },
  de: {
    newsletterLabel: 'Ich abonniere den Newsletter',
    emailPlaceholder: 'E-Mail-Adresse eingeben',
    ok: 'OK',
    siteMap: 'Sitemap',
    licenses: 'Lizenzen',
    legalNotice: 'Impressum',
    terms: 'AGB',
    cookieSettings: 'Cookie-Einstellungen',
    readMore: 'Mehr erfahren',
    founded: 'EquiConnected — Verein gegründet im Oktober 2025',
    firstName: 'Vorname',
    lastName: 'Nachname',
    email: 'E-Mail',
    message: 'Nachricht',
    send: 'Anfrage senden',
  },
} satisfies Record<Locale, Record<string, string>>

export function getDictionary(locale: Locale) {
  return dictionary[locale]
}
