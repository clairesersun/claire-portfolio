'use client'

import { useState, useEffect } from 'react'
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <Link href="/" className={styles.logo} aria-label="Claire Sersun - Home">
          <span className={styles.logoText}>Claire Sersun</span>
        </Link>

        {/* Hamburger menu button - visible only on mobile */}
        <button
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
        </button>

        {/* Desktop navigation - hidden on mobile */}
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

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
        aria-label="Mobile navigation"
      >
        <ul className={styles.mobileNavList}>
          <li>
            <Link
              href="/"
              className={isActive('/') ? styles.mobileNavLinkActive : styles.mobileNavLink}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={isActive('/about') ? styles.mobileNavLinkActive : styles.mobileNavLink}
              aria-current={isActive('/about') ? 'page' : undefined}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/resume"
              className={isActive('/resume') ? styles.mobileNavLinkActive : styles.mobileNavLink}
              aria-current={isActive('/resume') ? 'page' : undefined}
            >
              Resume
            </Link>
          </li>
        </ul>

        {/* Contact links in mobile menu */}
        <div className={styles.mobileContactSection}>
          <h3 className={styles.mobileContactHeading}>Contact</h3>
          <div className={styles.mobileContactLinks}>
            <a
              href={`mailto:${contactInfo.email}`}
              className={styles.mobileContactLink}
              aria-label="Email Claire Sersun"
            >
              <FontAwesomeIcon icon={faEnvelope} className="icon" aria-hidden="true" />
              <span>Email</span>
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileContactLink}
              aria-label="Claire Sersun on LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Theme toggle in mobile menu */}
        <div className={styles.mobileThemeSection}>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
