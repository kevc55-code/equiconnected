import { getSettings } from './content'

// The private preview build lives under a base path and always shows the full site.
export const isPreview = Boolean(process.env.NEXT_PUBLIC_BASE_PATH)

// "Site en construction" switch in Pages CMS (Réglages du site). While it is on,
// the public build shows only the coming-soon page.
export function isComingSoon() {
  return !isPreview && getSettings().comingSoon === true
}
