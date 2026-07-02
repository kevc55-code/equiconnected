export default function Logo({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="4" />
      <path
        d="M42 20c8 0 13 8 13 17 0 4-1 7-3 11l9 20c2 4 3 8 2 13-1 6-5 11-11 13-3 1-6 1-9-1-4-2-6-6-6-11 0-3 1-6 3-9l-6-14c-6 3-11 3-16 0-3-2-5-5-5-9 0-6 5-12 12-14 3-1 5-1 8 0 2-8 5-14 9-16z"
        fill="currentColor"
      />
      <path d="M58 24c3 2 5 6 5 10 0 3-1 6-3 8" stroke="currentColor" strokeWidth="0" fill="currentColor" opacity="0" />
    </svg>
  )
}
