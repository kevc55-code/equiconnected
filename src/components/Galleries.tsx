'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import SmartImage from './SmartImage'
import { getDictionary } from '@/lib/dictionary'
import type { Img } from '@/lib/content'
import type { Locale } from '@/lib/i18n'

type Gallery = { title: string; photos: Img[] }

export default function Galleries({
  items,
  viewLabel,
  locale,
}: {
  items: Gallery[]
  viewLabel: string
  locale: Locale
}) {
  const t = getDictionary(locale)
  const [open, setOpen] = useState<Gallery | null>(null)
  const opener = useRef<HTMLButtonElement | null>(null)

  const close = useCallback(() => {
    setOpen(null)
    opener.current?.focus()
  }, [])

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((g) => {
          const count = g.photos.length
          const card = (
            <>
              <SmartImage image={{ src: g.photos[0]?.src }} />
              <div className="p-4 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif font-semibold">{g.title}</h3>
                  <p className="text-xs text-ink/50">
                    {count === 0 ? t.galleryEmpty : `${count} ${count === 1 ? t.photo : t.photos}`}
                  </p>
                </div>
                {count > 0 ? (
                  <span className="text-xs font-semibold text-brand-dark whitespace-nowrap">{viewLabel} &rarr;</span>
                ) : null}
              </div>
            </>
          )
          return count > 0 ? (
            <button
              key={g.title}
              type="button"
              onClick={(e) => {
                opener.current = e.currentTarget
                setOpen(g)
              }}
              className="block w-full text-left rounded-lg overflow-hidden border border-ink/10 hover:border-brand hover:shadow-md transition-all"
            >
              {card}
            </button>
          ) : (
            <div key={g.title} className="rounded-lg overflow-hidden border border-ink/10">
              {card}
            </div>
          )
        })}
      </div>
      {/* Portal to <body> so the viewer sits above the sticky header. */}
      {open ? createPortal(<Viewer gallery={open} onClose={close} locale={locale} />, document.body) : null}
    </>
  )
}

function Viewer({ gallery, onClose, locale }: { gallery: Gallery; onClose: () => void; locale: Locale }) {
  const t = getDictionary(locale)
  const [index, setIndex] = useState(0)
  const closeButton = useRef<HTMLButtonElement>(null)
  const touchX = useRef<number | null>(null)
  const total = gallery.photos.length
  const photo = gallery.photos[index]

  const go = useCallback((step: number) => setIndex((i) => (i + step + total) % total), [total])

  useEffect(() => {
    closeButton.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [go, onClose])

  // Warm the browser cache so the next/previous photo shows instantly.
  useEffect(() => {
    if (total < 2) return
    for (const step of [1, -1]) {
      const src = gallery.photos[(index + step + total) % total]?.src
      if (src) new Image().src = src
    }
  }, [index, total, gallery.photos])

  const arrow = 'absolute top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/25 text-white text-2xl flex items-center justify-center'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={gallery.title}
      className="fixed inset-0 z-50 bg-black/90 flex flex-col"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        touchX.current = null
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 text-white">
        <p className="font-serif text-lg">
          {gallery.title}
          <span className="ml-3 text-sm text-white/60">
            {index + 1} / {total}
          </span>
        </p>
        <button
          ref={closeButton}
          type="button"
          onClick={onClose}
          aria-label={t.galleryClose}
          className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/25 text-2xl leading-none"
        >
          &times;
        </button>
      </div>
      <div
        className="relative flex-1 flex items-center justify-center px-4 pb-4 min-h-0"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        <figure className="max-h-full max-w-5xl flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.caption || ''}
            className="max-h-[78vh] max-w-full object-contain rounded"
          />
          {photo.caption ? <figcaption className="mt-3 text-sm text-white/80 text-center">{photo.caption}</figcaption> : null}
        </figure>
        {total > 1 ? (
          <>
            <button type="button" onClick={() => go(-1)} aria-label={t.galleryPrevious} className={`${arrow} left-2 sm:left-6`}>
              &lsaquo;
            </button>
            <button type="button" onClick={() => go(1)} aria-label={t.galleryNext} className={`${arrow} right-2 sm:right-6`}>
              &rsaquo;
            </button>
          </>
        ) : null}
      </div>
    </div>
  )
}
