/**
 * ThemeProvider.tsx
 *
 * Provides light/dark mode context and logic for the app.
 *
 * Why: Ensures theme is accessible, persistent, and respects user/system preferences.
 * How: Uses React context and localStorage; applies theme to <html> for CSS custom properties.
 *
 * See README for accessibility and design system details.
 */
'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference, then system preference, then default to light
    const savedTheme = localStorage.getItem('theme') as Theme | null

    // Helper to apply theme consistently
    const applyTheme = (t: Theme) => {
      setTheme(t)
      document.documentElement.setAttribute('data-theme', t)
    }

    // If a user saved a preference, use it and do not follow system changes
    if (savedTheme) {
      applyTheme(savedTheme)
      return
    }

    // No saved preference — follow system preference if available
    const mqlDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
    const supportsPrefers = Boolean(mqlDark && typeof mqlDark.matches === 'boolean')

    if (supportsPrefers) {
      applyTheme(mqlDark.matches ? 'dark' : 'light')

      // Listen for changes in the OS color scheme and update *only* while no explicit user preference is saved
      const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
        const currentSaved = localStorage.getItem('theme')
        if (currentSaved) return
        const isDark = 'matches' in e ? e.matches : (e as MediaQueryList).matches
        applyTheme(isDark ? 'dark' : 'light')
      }

      // Attach listener with backward-compatible API
      try {
        if (typeof mqlDark.addEventListener === 'function') {
          mqlDark.addEventListener('change', onChange as EventListener)
        } else if (typeof mqlDark.addListener === 'function') {
          mqlDark.addListener(onChange as (e: MediaQueryListEvent) => void)
        }
      } catch (err) {
        // noop — don't block if listeners fail
      }

      return () => {
        try {
          if (typeof mqlDark.removeEventListener === 'function') {
            mqlDark.removeEventListener('change', onChange as EventListener)
          } else if (typeof mqlDark.removeListener === 'function') {
            mqlDark.removeListener(onChange as (e: MediaQueryListEvent) => void)
          }
        } catch (err) {
          // noop
        }
      }
    }

    // If the browser doesn't support prefers-color-scheme, default to light
    applyTheme('light')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  // Ensure the context is available immediately so child components
  // (like `ThemeToggle`) can call `useTheme()` without throwing.
  // Previously we returned `children` directly while `mounted` was false,
  // which allowed consumers to run outside of the provider and caused the
  // "useTheme must be used within a ThemeProvider" error.

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    // Return a safe default to avoid runtime errors when a consumer
    // is rendered outside a ThemeProvider (e.g., during certain
    // hydration/compile phases). This prevents hard crashes while
    // the provider initializes.
    return {
      theme: 'light' as Theme,
      toggleTheme: () => {}
    }
  }
  return context
}
