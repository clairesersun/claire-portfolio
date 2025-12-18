import { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Archive',
  description: 'Experimental projects and archived work.',
  robots: {
    index: false,
    follow: false
  }
}

export default function ArchivePage() {
  return (
    <div className={styles.archive}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Archive & Lab</h1>
          <p className={styles.subtitle}>
            Experimental projects, side work, and archived materials.
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.notice} aria-labelledby="notice-heading">
            <h2 id="notice-heading" className="sr-only">Notice</h2>
            <p>
              This page is not indexed by search engines and contains experimental or archived work that may not reflect current practices or portfolio standards.
            </p>
          </section>

          <section className={styles.projects} aria-labelledby="projects-heading">
            <h2 id="projects-heading" className={styles.sectionHeading}>
              Past Projects
            </h2>

            {/* VALLETO Project */}
            <article className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>VALLETO</h3>
                <p className={styles.projectMeta}>Web Designer • 2021-2022</p>
              </div>
              <p className={styles.projectDescription}>
                Redesigned and maintained a contemporary dance company website, optimizing performance, implementing e-commerce (Shopify), and creating an online class booking system (Amelia). Streamlined UX by reducing navigation from 8+ items to 4 organized sections.
              </p>
              <div className={styles.projectTags}>
                <span className={styles.projectTag}>UI/UX</span>
                <span className={styles.projectTag}>WordPress</span>
                <span className={styles.projectTag}>Shopify</span>
                <span className={styles.projectTag}>Graphic Design</span>
              </div>
              <a href="https://valletodance.com" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                Visit Site →
              </a>
              {/* TODO: Add project images - recommended location: /public/archive/valleto-cover.jpg */}
            </article>

            {/* Moving For Life Project */}
            <article className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>Moving For Life</h3>
                <p className={styles.projectMeta}>Programming & Administrative Assistant • 2019-2021</p>
              </div>
              <p className={styles.projectDescription}>
                Managed website updates and social media for a wellness organization serving those affected by cancer. Maintained class schedules, donation systems, and created promotional content for Mailchimp, Instagram, and Facebook campaigns.
              </p>
              <div className={styles.projectTags}>
                <span className={styles.projectTag}>UI/UX</span>
                <span className={styles.projectTag}>WordPress</span>
                <span className={styles.projectTag}>Graphic Design</span>
                <span className={styles.projectTag}>Social Media</span>
              </div>
              <a href="https://movingforlife.org" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                Visit Site →
              </a>
              {/* TODO: Add project images - recommended location: /public/archive/moving-for-life-cover.jpg */}
            </article>
          </section>
        </div>

        <div className={styles.actions}>
          <Link href="/" className="button">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
