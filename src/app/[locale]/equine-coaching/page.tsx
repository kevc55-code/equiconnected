import { redirect } from 'next/navigation'
import type { Locale } from '@/lib/i18n'

export default function EquineCoachingIndex({ params }: { params: { locale: Locale } }) {
  redirect(`/${params.locale}/equine-coaching/introduction`)
}
