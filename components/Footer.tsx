import Link from 'next/link'
import Image from 'next/image'
import { contactInfo } from '@/content'
import styles from './Footer.module.css'

const footerNav = [
  { href: '/', label: 'Home', doodle: '/doodles/ballet.svg' },
  { href: '/#work', label: 'Work', doodle: '/doodles/reading.svg' },
  { href: '/#playground', label: 'Playground', doodle: '/doodles/swinging.svg' },
  { href: '/about', label: 'About', doodle: '/doodles/sitting-reading.svg' },
  { href: '/resume', label: 'Resume', doodle: '/doodles/reading-side.svg' },
] as const

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <nav className={styles.footerNav} aria-label="Footer navigation">
          {footerNav.map((item) => (
            <Link key={item.label} href={item.href} className={styles.footerNavItem}>
              <Image
                src={item.doodle}
                alt=""
                aria-hidden="true"
                width={72}
                height={72}
                className={styles.footerDoodle}
              />
              <span className={styles.footerLabel}>{item.label}</span>
            </Link>
          ))}
          <a
            href={`mailto:${contactInfo.email}`}
            className={styles.footerNavItem}
            aria-label={`Email ${contactInfo.email}`}
          >
            <Image
              src="/doodles/float.svg"
              alt=""
              aria-hidden="true"
              width={72}
              height={72}
              className={styles.footerDoodle}
            />
            <span className={styles.footerLabel}>Contact</span>
          </a>
        </nav>
        <p className={styles.copyright}>
          © {currentYear} Claire Sersun
        </p>
      </div>
    </footer>
  )
}
