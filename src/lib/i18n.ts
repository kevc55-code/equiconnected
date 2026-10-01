// French first: it is the association's working language and the default
// the bare domain redirects to (see public/index.html).
export const locales = ['fr', 'en', 'de'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'fr'

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  de: 'DE',
}

export function localizePath(locale: Locale, path: string): string {
  return `/${locale}${path === '/' ? '' : path}`
}
