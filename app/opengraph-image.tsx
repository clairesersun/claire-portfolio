import { ImageResponse } from 'next/og'

// File-based OG image: Next serves this at /opengraph-image and injects
// correctly-sized og:image + twitter:image tags site-wide (absolute URL via
// metadataBase). Replaces the mis-sized portrait og-image.jpg.
export const alt = 'Claire Sersun — UI/UX Developer & Frontend Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#fafaf9',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 32, color: '#57534e', letterSpacing: 2 }}>
          clairesersun.com
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 92, fontWeight: 700, color: '#1c1917', lineHeight: 1.05 }}>
            Claire Sersun
          </div>
          <div style={{ display: 'flex', fontSize: 44, color: '#44403c', marginTop: 24 }}>
            UI/UX Developer &amp; Frontend Engineer
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: '#57534e' }}>
          Accessibility-focused · Inclusive, WCAG-compliant interfaces
        </div>
      </div>
    ),
    { ...size }
  )
}
