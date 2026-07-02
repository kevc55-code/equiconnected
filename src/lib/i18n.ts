export const locales = ['en', 'fr', 'de'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  de: 'DE',
}

export function localizePath(locale: Locale, path: string): string {
  return `/${locale}${path === '/' ? '' : path}`
}
