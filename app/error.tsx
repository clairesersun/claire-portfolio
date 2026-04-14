'use client'

import Link from 'next/link'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
      <h1>Something went wrong</h1>
      <p>Sorry — that page hit a snag. Head back home and try again.</p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
        <Link href="/" className="button button-primary">
          Go Home
        </Link>
        <button type="button" onClick={reset} className="button">
          Try again
        </button>
      </div>
    </div>
  )
}
