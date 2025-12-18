import type { Metadata } from 'next'
import './globals.css'
import FontAwesomeSetup from '@/components/FontAwesomeSetup'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import CursorSparkles from '@/components/CursorSparkles'
import FloatingEffectsToggle from '@/components/FloatingEffectsToggle'
import HashFocus from '@/components/HashFocus'

export const metadata: Metadata = {
  // Used for resolving Open Graph/Twitter images and canonical URLs
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Claire Sersun | UI/UX Developer & Frontend Engineer',
    template: '%s | Claire Sersun'
  },
  description: 'Accessibility-focused UI/UX Developer and Frontend Engineer specializing in inclusive user experiences, information architecture, and WCAG-compliant interfaces.',
  keywords: ['UI/UX Developer', 'Frontend Engineer', 'Accessibility', 'WCAG', 'Vue', 'React', 'Design Systems'],
  authors: [{ name: 'Claire Sersun' }],
  creator: 'Claire Sersun',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clairesersun.com',
    siteName: 'Claire Sersun Portfolio',
    title: 'Claire Sersun | UI/UX Developer & Frontend Engineer',
    description: 'Accessibility-focused UI/UX Developer and Frontend Engineer specializing in inclusive user experiences.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Claire Sersun Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claire Sersun | UI/UX Developer & Frontend Engineer',
    description: 'Accessibility-focused UI/UX Developer and Frontend Engineer',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Caveat - elegant handwriting for main headings */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Font Awesome SVG setup (client) — imports only the icons we need */}

      </head>
      <body suppressHydrationWarning>
        {/* suppressHydrationWarning: some browser extensions inject attributes into the DOM
            (e.g. `cz-shortcut-listen`) which causes benign hydration mismatch warnings in dev.
            This avoids noisy console errors while preserving SSR content. */}
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main">
            {children}
          </main>
          <Footer />
          {/* Effects toggle (client-only, floating bottom left) */}
          <FloatingEffectsToggle />
          {/* Global sparkle cursor (client-only) */}
          <CursorSparkles />
          {/* Manage focusing and offset for fragment navigation (anchors) */}
          <HashFocus />

          {/* FontAwesome setup (client) — registers SVG icons */}
          <FontAwesomeSetup />

          {/* Screen reader live region for anchor focus announcements */}
          <div id="a11y-announcer" aria-live="polite" aria-atomic="true" className="sr-only" />
        </ThemeProvider>
      </body>
    </html>
  )
}
