import { redirect } from 'next/navigation'
import type { Locale } from '@/lib/i18n'

export default function ConnectedIndex({ params }: { params: { locale: Locale } }) {
  redirect(`/${params.locale}/connected/photo-galleries`)
}
