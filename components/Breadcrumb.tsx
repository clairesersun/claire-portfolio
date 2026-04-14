'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Breadcrumb.module.css'

export function Breadcrumb() {
  const pathname = usePathname()

  if (pathname === '/' || pathname === '') return null

  return (
    <div className={styles.wrap}>
      <Link href="/" className={styles.crumb}>
        <span aria-hidden="true" className={styles.arrow}>←</span>
        <span>Home</span>
      </Link>
    </div>
  )
}
