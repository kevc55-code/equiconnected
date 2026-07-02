import { redirect } from 'next/navigation'
import type { Locale } from '@/lib/i18n'

export default function HorsemanshipIndex({ params }: { params: { locale: Locale } }) {
  redirect(`/${params.locale}/horsemanship/philosophy`)
}
