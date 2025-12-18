'use client'

import { useEffect } from 'react'

export default function HashFocus() {
  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scrollAndFocus = (hash?: string) => {
      const id = (hash || window.location.hash || '').replace('#', '')
      if (!id) return
      const el = document.getElementById(id)
      if (!el) return

      // Ensure element can be focused
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1')

      const header = document.querySelector('header')
      const headerHeight = header ? header.getBoundingClientRect().height : parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80
      const offset = headerHeight + 12
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset

      const announce = (message: string) => {
        try {
          const ann = document.getElementById('a11y-announcer')
          if (ann) {
            ann.textContent = message
            // Clear after a couple seconds so screen readers don't re-announce later
            window.setTimeout(() => { ann.textContent = '' }, 2500)
          }
        } catch (err) {
          // noop
        }
      }

      const announcementText = `${el.textContent?.trim() || id} section`

      if (prefersReduced) {
        window.scrollTo(0, y)
        el.focus()
        announce(announcementText)
      } else {
        window.scrollTo({ top: y, behavior: 'smooth' })
        // Focus after a short delay so screen readers announce after scroll
        window.setTimeout(() => { el.focus(); announce(announcementText) }, 400)
      }
    }

    // On initial load
    scrollAndFocus(window.location.hash)

    const onHashChange = () => scrollAndFocus(window.location.hash)
    window.addEventListener('hashchange', onHashChange)

    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return null
}
