'use client'

export default function NewsletterForm() {
  return (
    <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="newsletter-email" className="text-white font-semibold text-sm">
        I subscribe to the newsletter
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Enter your email address"
        className="rounded px-3 py-2 text-sm text-ink w-56 outline-none"
      />
      <button
        type="submit"
        className="bg-amber-400 hover:bg-amber-300 transition-colors text-brand-darker font-bold text-sm px-4 py-2 rounded"
      >
        OK
      </button>
    </form>
  )
}
