'use client'

import { useEffect } from 'react'

export default function CursorSparkles() {
  useEffect(() => {
    // Honor reduced motion preference
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Disable sparkles on slow or metered connections (save-data, 2G/slow-2G, or very low downlink)
    const nav = navigator as any
    const connection = nav && (nav.connection || nav.mozConnection || nav.webkitConnection)
    const saveData = connection && connection.saveData
    const effectiveType = connection && connection.effectiveType
    const downlink = connection && connection.downlink
    const slowConnection = saveData || effectiveType === '2g' || effectiveType === 'slow-2g' || (downlink && downlink < 0.5)
    if (slowConnection) return

    // Animation state
    let enabled = true
    const toggleHandler = (evt: CustomEvent) => {
      if (typeof evt.detail?.enabled === 'boolean') enabled = evt.detail.enabled
    }
    window.addEventListener('effects-toggle', toggleHandler as EventListener)

    // Muted rainbow sparkles - fewer, slower trail
    const trailArr = [1, 0.8, 0.6, 0.4, 0.2]
    let last = 0

    const getColorFromVars = () => {
      // Rainbow sparkles! 🌈
      const vars = [
        '--color-violet',
        '--color-blue',
        '--color-cyan',
        '--color-green',
        '--color-yellow',
        '--color-coral'
      ]
      const rootStyles = getComputedStyle(document.documentElement)
      const candidates = vars
        .map((v) => rootStyles.getPropertyValue(v).trim())
        .filter(Boolean)
      if (!candidates.length) return 'var(--color-violet)';
      return candidates[Math.floor(Math.random() * candidates.length)]
    }

    const handler = (e: MouseEvent) => {
      if (!enabled) return
      const now = performance.now()
      if (now - last < 50) return // Much slower - throttle more aggressively
      last = now

      trailArr.forEach((i, idx) => {
        // Slower stagger for muted effect
        window.setTimeout(() => createSparkle(e, i), Math.round(idx * 60))
      })
    }

    function createSparkle(e: MouseEvent, intensity: number) {
      const el = document.createElement('div')
      el.className = 'sparkle'

      const j = Math.round((1 - intensity) * 40) // Tighter spread
      const size = Math.ceil(Math.random() * 6 * intensity) + 3 // Smaller sparkles
      const x = e.clientX + Math.round(Math.random() * j - j / 2)
      const y = e.clientY + Math.round(Math.random() * j - j / 2)

      el.style.left = x + 'px'
      el.style.top = y + 'px'
      el.style.width = size + 'px'
      el.style.height = size + 'px'
      el.style.borderRadius = '50%'
      el.style.opacity = String(intensity * 0.6) // More transparent
      el.style.background = getColorFromVars()

      // Faster fade out
      const duration = 1000 + Math.round(Math.random() * 500) // 1000-1500ms (faster)
      el.style.animationDuration = duration + 'ms'

      document.body.appendChild(el)

      const removeTimeout = window.setTimeout(() => {
        try { el.remove() } catch (err) {}
      }, duration + 50)

      // safety: if removed earlier, clear timeout
      el.addEventListener('animationend', () => {
        try { el.remove() } catch (err) {}
        window.clearTimeout(removeTimeout)
      })
    }

    window.addEventListener('mousemove', handler)

    return () => {
      window.removeEventListener('mousemove', handler)
      window.removeEventListener('effects-toggle', toggleHandler as EventListener)
    }
  }, [])

  return null
}
