'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Markdown } from '@/lib/markdown'
import { getDictionary } from '@/lib/dictionary'
import type { Img } from '@/lib/content'
import type { Locale } from '@/lib/i18n'

type Member = { name: string; role: string; image?: Img; bio?: string }

function Avatar({ member, size }: { member: Member; size: 'card' | 'panel' }) {
  const className = size === 'card' ? 'h-24 w-24' : 'h-32 w-32'
  return member.image?.src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={member.image.src} alt={member.name} className={`mx-auto ${className} rounded-full object-cover`} />
  ) : (
    <div className={`mx-auto ${size === 'card' ? 'h-16 w-16' : 'h-24 w-24'} rounded-full bg-brand-light`} />
  )
}

export default function Team({ members, locale }: { members: Member[]; locale: Locale }) {
  const t = getDictionary(locale)
  const [open, setOpen] = useState<Member | null>(null)
  const opener = useRef<HTMLButtonElement | null>(null)

  const close = useCallback(() => {
    setOpen(null)
    opener.current?.focus()
  }, [])

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {members.map((member) => {
          const card = (
            <>
              <div className="mb-3">
                <Avatar member={member} size="card" />
              </div>
              <h3 className="font-serif font-semibold">{member.name}</h3>
              <p className="text-xs uppercase tracking-wide text-brand-dark mt-1">{member.role}</p>
              {member.bio ? (
                <span className="inline-block mt-3 text-xs font-semibold text-brand-dark">{t.readBio} &rarr;</span>
              ) : null}
            </>
          )
          return member.bio ? (
            <button
              key={member.name}
              type="button"
              onClick={(e) => {
                opener.current = e.currentTarget
                setOpen(member)
              }}
              className="rounded-lg border border-ink/10 p-6 text-center hover:border-brand hover:shadow-md transition-all"
            >
              {card}
            </button>
          ) : (
            <div key={member.name} className="rounded-lg border border-ink/10 p-6 text-center">
              {card}
            </div>
          )
        })}
      </div>
      {/* Portal to <body> so the panel sits above the sticky header. */}
      {open ? createPortal(<BioPanel member={open} onClose={close} locale={locale} />, document.body) : null}
    </>
  )
}

function BioPanel({ member, onClose, locale }: { member: Member; onClose: () => void; locale: Locale }) {
  const t = getDictionary(locale)
  const closeButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeButton.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={member.name}
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-8">
        <button
          ref={closeButton}
          type="button"
          onClick={onClose}
          aria-label={t.close}
          className="absolute top-3 right-3 h-10 w-10 rounded-full hover:bg-ink/5 text-2xl leading-none text-ink/60"
        >
          &times;
        </button>
        <div className="text-center mb-6">
          <div className="mb-4">
            <Avatar member={member} size="panel" />
          </div>
          <h2 className="font-serif text-2xl font-semibold">{member.name}</h2>
          <p className="text-xs uppercase tracking-wide text-brand-dark mt-1">{member.role}</p>
        </div>
        <div className="prose-body">
          <Markdown body={member.bio ?? ''} />
        </div>
      </div>
    </div>
  )
}
