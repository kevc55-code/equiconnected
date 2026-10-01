'use client'

import { useState } from 'react'
import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'

// Turns a pasted YouTube/Vimeo link into a privacy-friendly embed URL.
export function toEmbedUrl(url?: string): string | null {
  if (!url) return null
  const trimmed = url.trim()
  const youtube = trimmed.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/,
  )
  if (youtube) return `https://www.youtube-nocookie.com/embed/${youtube[1]}?autoplay=1&rel=0`
  const vimeo = trimmed.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1&dnt=1`
  return null
}

// Nothing is loaded from YouTube/Vimeo until the visitor clicks play, so the
// page sets no third-party cookies and needs no consent banner.
export default function VideoEmbed({ label, url, locale }: { label: string; url?: string; locale: Locale }) {
  const t = getDictionary(locale)
  const [playing, setPlaying] = useState(false)
  const embed = toEmbedUrl(url)

  if (!embed) {
    return (
      <div className="aspect-video rounded-lg bg-ink flex items-center justify-center text-white/60 text-sm text-center px-6">
        {label}
      </div>
    )
  }

  if (playing) {
    return (
      <div className="aspect-video rounded-lg overflow-hidden bg-black">
        <iframe
          src={embed}
          title={label}
          className="w-full h-full"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group w-full aspect-video rounded-lg bg-ink flex flex-col items-center justify-center gap-4 text-white px-6"
    >
      <span className="h-16 w-16 rounded-full bg-brand group-hover:bg-brand-dark transition-colors flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="h-7 w-7 ml-1" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <span className="text-sm md:text-base font-medium text-center">{label}</span>
      <span className="text-xs text-white/50 max-w-md text-center">{t.videoNotice}</span>
    </button>
  )
}
