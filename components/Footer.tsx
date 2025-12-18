import Link from 'next/link'
import { contactInfo } from '@/content'
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerGrid}>
          {/* Navigation */}
          <div className={styles.footerSection}>
            <h2 className={styles.footerHeading}>Navigation</h2>
            <nav aria-label="Footer navigation">
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="/" className={styles.footerLink}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={styles.footerLink}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className={styles.footerLink}>
                    Resume
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Case Studies */}
          <div className={styles.footerSection}>
            <h2 className={styles.footerHeading}>Case Studies</h2>
            <nav aria-label="Case studies">
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="/work/redesign-settings" className={styles.footerLink}>
                    Redesign Settings
                  </Link>
                </li>
                <li>
                  <Link href="/work/messaging-modernization" className={styles.footerLink}>
                    Messaging Modernization
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div className={styles.footerSection}>
            <h2 className={styles.footerHeading}>Connect</h2>
            <ul className={styles.footerLinks}>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className={styles.footerLink}
                  aria-label={`Email ${contactInfo.email}`}
                  title={`Email ${contactInfo.email}`}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="icon" aria-hidden="true" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                  aria-label="Claire Sersun on LinkedIn"
                  title="Claire Sersun on LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="icon" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                  aria-label="Claire Sersun on GitHub"
                  title="Claire Sersun on GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} className="icon" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Claire Sersun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
