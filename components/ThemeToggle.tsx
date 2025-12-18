'use client'

import { useTheme } from './ThemeProvider'
import styles from './ThemeToggle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-pressed={theme === 'dark'}
      type="button"
    >
      {theme === 'light' ? (
        <FontAwesomeIcon icon={faSun} className={`${styles.icon} icon`} aria-hidden="true" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className={`${styles.icon} icon`} aria-hidden="true" />
      )}
      <span className={styles.label}>
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </span>
    </button>
  )
}
