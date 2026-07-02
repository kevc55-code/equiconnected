'use client'

export default function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-ink/50 mb-1">
            First name
          </label>
          <input className="w-full rounded border border-ink/15 px-3 py-2 text-sm" type="text" required />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-ink/50 mb-1">
            Last name
          </label>
          <input className="w-full rounded border border-ink/15 px-3 py-2 text-sm" type="text" required />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-ink/50 mb-1">Email</label>
        <input className="w-full rounded border border-ink/15 px-3 py-2 text-sm" type="email" required />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-ink/50 mb-1">Message</label>
        <textarea className="w-full rounded border border-ink/15 px-3 py-2 text-sm min-h-[120px]" required />
      </div>
      <button
        type="submit"
        className="bg-brand hover:bg-brand-dark transition-colors text-white font-semibold text-sm px-6 py-3 rounded"
      >
        Send my request
      </button>
    </form>
  )
}
