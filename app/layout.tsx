import type { Metadata } from 'next'
import { Inter, Instrument_Serif, Caveat } from 'next/font/google'
import './globals.css'
import FontAwesomeSetup from '@/components/FontAwesomeSetup'
import { Footer } from '@/components/Footer'
import { Breadcrumb } from '@/components/Breadcrumb'
import HashFocus from '@/components/HashFocus'
import { JsonLd, SITE_URL } from '@/components/JsonLd'

// Self-hosted via next/font — no render-blocking request to fonts.googleapis.com,
// no layout shift, no third-party privacy hop. Variables wire into globals.css.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})
const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  // Resolves Open Graph/Twitter images and canonical URLs. Defaults to the
  // production origin so social previews are never broken in prod, even if the
  // NEXT_PUBLIC_SITE_URL env var is unset.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || SITE_URL),
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
    url: SITE_URL,
    siteName: 'Claire Sersun Portfolio',
    title: 'Claire Sersun | UI/UX Developer & Frontend Engineer',
    description: 'Accessibility-focused UI/UX Developer and Frontend Engineer specializing in inclusive user experiences.',
    // og:image/twitter:image are supplied by app/opengraph-image.tsx (1200x630).
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claire Sersun | UI/UX Developer & Frontend Engineer',
    description: 'Accessibility-focused UI/UX Developer and Frontend Engineer'
  },
  robots: {
    index: true,
    follow: true
  }
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Claire Sersun Portfolio',
      description:
        'Portfolio of Claire Sersun — accessibility-focused UI/UX Developer and Frontend Engineer.',
      publisher: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Claire Sersun',
      url: `${SITE_URL}/`,
      jobTitle: 'UI/UX Developer & Frontend Engineer',
      image: `${SITE_URL}/headshot.webp`,
      sameAs: [
        'https://github.com/clairesersun',
        'https://linkedin.com/in/clairesersun',
      ],
      knowsAbout: [
        'Web Accessibility',
        'WCAG',
        'UI/UX Design',
        'Frontend Engineering',
        'Design Systems',
        'React',
        'Vue',
      ],
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'University of Florida' },
        { '@type': 'CollegeOrUniversity', name: 'Marymount Manhattan College' },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${instrumentSerif.variable} ${caveat.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fafaf9" />
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
        <JsonLd data={structuredData} />
      </body>
    </html>
  )
}
