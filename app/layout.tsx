import type { Metadata } from 'next'
import './globals.css'
import FontAwesomeSetup from '@/components/FontAwesomeSetup'
import { Footer } from '@/components/Footer'
import { Breadcrumb } from '@/components/Breadcrumb'
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
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fafaf9" />
        {/* Fonts: Caveat (handwriting for h1/h2), Inter (UI and body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;900&display=swap"
        />
      </head>
      <body suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Breadcrumb />
        <main id="main">
          {children}
        </main>
        <Footer />
        <HashFocus />

        <FontAwesomeSetup />

        <div id="a11y-announcer" aria-live="polite" aria-atomic="true" className="sr-only" />
      </body>
    </html>
  )
}
