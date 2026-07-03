import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { aboutContent } from '@/content'
import styles from './page.module.css'
import { JsonLd, SITE_URL } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'About',
  description: 'Accessibility-focused UI/UX Developer and Frontend Engineer.',
  alternates: { canonical: '/about' }
}

const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/about#profilepage`,
  url: `${SITE_URL}/about`,
  name: 'About Claire Sersun',
  mainEntity: { '@id': `${SITE_URL}/#person` },
}

export default function AboutPage() {
  return (
    <article className={styles.about}>
      <JsonLd data={profileSchema} />
      <div className={styles.container}>
        <header className={styles.header}>
          <Image
            src="/doodles/sitting-reading.svg"
            alt=""
            aria-hidden="true"
            width={120}
            height={120}
            className={styles.doodle}
          />
          <h1 className={styles.title}>About</h1>
        </header>

        <div className={styles.body}>
          <p>{aboutContent.intro}</p>
          <p>{aboutContent.body}</p>
          <p>
            I&rsquo;ve worked in hybrid design &amp; frontend roles where I led accessibility
            initiatives, rebuilt interfaces, and laid the foundations for component
            libraries in Vue and Storybook. My approach combines strategic thinking with
            hands-on implementation — the best interfaces emerge when accessibility,
            usability, and technical excellence inform every decision from the start.
          </p>
          <p>
            Before transitioning to tech, I taught wellness and movement classes, which
            shaped how I communicate complex concepts and meet people where they are. I
            hold a Master&rsquo;s in Mass Communication (Web Design) from the University
            of Florida and a B.A. in Dance from Marymount Manhattan College.
          </p>
          <div className={styles.noteRow}>
            <p className={styles.note}>
              When I&rsquo;m not coding or designing, you might find me{' '}
              <a
                href="https://fable.co/list/da99472a-224f-4758-9f57-5798d991bd69/share"
                target="_blank"
                rel="noopener noreferrer"
              >
                reading
              </a>
              , dancing, hiking in the mountains, shooting photography, or{' '}
              <Link href="/playground">tinkering with small projects</Link> that light me up.
            </p>
            <Image
              src="/plant-lady.webp"
              alt="Illustration of a person carrying a bouquet of plants"
              width={320}
              height={412}
              className={styles.plantLady}
            />
          </div>
        </div>
      </div>
    </article>
  )
}
