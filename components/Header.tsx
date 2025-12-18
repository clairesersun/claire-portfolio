'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'
import { contactInfo } from '@/content'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <Link href="/" className={styles.logo} aria-label="Claire Sersun - Home">
          <span className={styles.logoText} >Claire Sersun</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            <li>
              <Link
                href="/about"
                className={isActive('/about') ? styles.navLinkActive : styles.navLink}
                aria-current={isActive('/about') ? 'page' : undefined}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                className={isActive('/resume') ? styles.navLinkActive : styles.navLink}
                aria-current={isActive('/resume') ? 'page' : undefined}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.contactAndTheme}>
          <div className={styles.contactLinks}>
            <a
              href={`mailto:${contactInfo.email}`}
              className={styles.contactLink}
              aria-label="Email Claire Sersun"
              title="Email Claire Sersun"
            >
              <FontAwesomeIcon icon={faEnvelope} className="icon" aria-hidden="true" />
              <span className="sr-only">Email Claire Sersun</span>
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
              aria-label="Claire Sersun on LinkedIn"
              title="Claire Sersun on LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" aria-hidden="true" />
              <span className="sr-only">Claire Sersun on LinkedIn</span>
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
