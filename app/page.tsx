import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { caseStudies, playgroundCategories, contactInfo } from '@/content'
import styles from './page.module.css'
import { Button } from '@/components/ui'
import { LocalGreeting } from '@/components/LocalGreeting'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  // metadataBase is inherited from the root layout.
  title: { absolute: 'Claire Sersun | UI/UX Developer & Frontend Engineer' },
  description: 'Accessibility-focused UI/UX Developer and Frontend Engineer building inclusive, WCAG-compliant interfaces.',
  alternates: { canonical: '/' }
}

const navDoodles = [
  { href: '/#work', label: 'Work', doodle: '/doodles/reading.svg', position: 'top-left', external: false },
  { href: '/#playground', label: 'Playground', doodle: '/doodles/swinging.svg', position: 'top-right', external: false },
  { href: '/about', label: 'About', doodle: '/doodles/sitting-reading.svg', position: 'mid-left', external: false },
  { href: '/resume', label: 'Resume', doodle: '/doodles/reading-side.svg', position: 'mid-right', external: false },
  { href: `mailto:${contactInfo.email}`, label: 'Contact', doodle: '/doodles/float.svg', position: 'bottom-left', external: true },
  { href: contactInfo.github, label: 'GitHub', doodle: '/doodles/levitate.svg', position: 'bottom-right', external: true },
] as const
// Note: ballet.svg is used for "Home" in the footer. All 7 downloaded doodles are in use.

// Interleave web / photo / print so no two neighbors share a category.
const marqueeOrder = [
  'valleto',       // web
  'tahoe',         // photo
  'innerseasons',  // print
  'andi',          // web
  'joshua-tree',   // photo
  'movingforlife', // print
  'faye-works',    // web
  'japan',         // photo
  '20000km',       // web
  'fairfield',     // photo
  'sneakerlaw',    // web
  'portiko',       // print
]

export default function HomePage() {
  const allPlayground = playgroundCategories.flatMap((cat) => cat.items)
  const playgroundById = new Map(allPlayground.map((item) => [item.id, item]))
  const orderedPlayground = marqueeOrder
    .map((id) => playgroundById.get(id))
    .filter((x): x is (typeof allPlayground)[number] => Boolean(x))
  const marqueeItems = [...orderedPlayground, ...orderedPlayground]

  return (
    <>
      {/* Radial Hero */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroStage}>
          {navDoodles.map((item) => {
            const Anchor = item.external ? 'a' : Link
            const extra = item.external
              ? { target: '_blank' as const, rel: 'noopener noreferrer' }
              : {}
            return (
              <Anchor
                key={item.label}
                href={item.href}
                className={`${styles.navDoodle} ${styles[`pos_${item.position.replace('-', '_')}`]}`}
                {...(extra as object)}
              >
                <Image
                  src={item.doodle}
                  alt=""
                  aria-hidden="true"
                  width={120}
                  height={120}
                  priority
                  className={styles.navDoodleImg}
                />
                <span className={styles.navDoodleLabel}>{item.label}</span>
              </Anchor>
            )
          })}

          <div className={styles.heroCenter}>
            <p className={styles.heroKicker}>
              Welcome to Claire&rsquo;s portfolio and playground
            </p>
            <h1 id="hero-heading" className={styles.heroTitle}>
              Hi, I am Claire, a designer and developer who cares about{' '}
              <em>accessible interfaces</em> and <em>storytelling</em>, guided by curiosity, somatics, and empathy.
            </h1>
            <div className={styles.heroActions}>
              <Button href="/about" variant="primary">
                Read more
              </Button>
            </div>
            <LocalGreeting className={styles.heroCaption} />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="work" className={styles.workSection} aria-labelledby="work-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <Image
              src="/doodles/reading.svg"
              alt=""
              aria-hidden="true"
              width={96}
              height={96}
              className={styles.sectionDoodle}
            />
            <h2 id="work-heading" className={styles.sectionHeading} tabIndex={-1}>
              Selected work
            </h2>
            <p className={styles.sectionSubheading}>
              Case studies on information architecture, accessibility, and frontend craft.
            </p>
          </div>
          <div className={styles.caseStudiesGrid}>
            {caseStudies.map((study, index) => (
              <article
                key={study.id}
                className={styles.caseStudyCard}
                style={{ '--card-tilt': index % 2 === 0 ? '-0.8deg' : '1deg' } as React.CSSProperties}
              >
                <Link href={`/work/${study.slug}`} className={styles.caseStudyLink}>
                  <h3 className={styles.caseStudyTitle}>{study.title}</h3>
                  <p className={styles.caseStudySubtitle}>{study.subtitle}</p>
                  <span className={styles.caseStudyLinkText}>
                    Read case study <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Playground */}
      <section id="playground" className={styles.playground} aria-labelledby="playground-heading">
        <div className={styles.playgroundHeader}>
          <div className={styles.playgroundHeaderText}>
            <h2 id="playground-heading" className={styles.playgroundHeading}>
              Playground
            </h2>
            <p className={styles.playgroundLede}>
              An archive of select web, print, and photo work I make on the&nbsp;side.
            </p>
          </div>
          <Link href="/playground" className={styles.playgroundViewAll}>
            View all <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className={styles.playgroundMarquee} aria-label="Playground projects">
          <div className={styles.playgroundTrack}>
            {marqueeItems.map((item, i) => {
            const card = (
              <>
                <div className={styles.playgroundImageWrap}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={600}
                    className={styles.playgroundImage}
                  />
                  <div className={styles.playgroundOverlay} aria-hidden="true">
                    <span className={styles.playgroundOverlayTitle}>{item.title}</span>
                    <span className={styles.playgroundOverlayCaption}>{item.caption}</span>
                  </div>
                </div>
              </>
            )
            const key = `${item.id}-${i}`
            const ariaHidden = i >= orderedPlayground.length
            return item.href ? (
              <a
                key={key}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.playgroundCard}
                aria-label={`${item.title} — ${item.caption}`}
                aria-hidden={ariaHidden || undefined}
                tabIndex={ariaHidden ? -1 : undefined}
              >
                {card}
              </a>
            ) : (
              <article
                key={key}
                className={styles.playgroundCard}
                aria-label={`${item.title} — ${item.caption}`}
                aria-hidden={ariaHidden || undefined}
              >
                {card}
              </article>
            )
          })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contact} aria-labelledby="contact-heading">
        <div className="container">
          <Image
            src="/plant-lady.webp"
            alt=""
            aria-hidden="true"
            width={320}
            height={412}
            className={styles.contactPlantLady}
          />
          <h2 id="contact-heading" className={styles.contactHeading}>
            Want to make something together?
          </h2>
          <p className={styles.contactText}>
            Send a note, or say hi on LinkedIn.
          </p>
          <div className={styles.contactActions}>
            <Button externalHref={`mailto:${contactInfo.email}`} variant="primary" icon={faEnvelope} iconPosition="left">
              {contactInfo.email}
            </Button>
            <Button externalHref={contactInfo.linkedin} icon={faArrowUpRightFromSquare} iconPosition="left">
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
