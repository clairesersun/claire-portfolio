import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { caseStudies, contactInfo } from '@/content'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWheelchairMove, faLeaf, faTrowelBricks, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  // Resolve canonical URLs for Open Graph / Twitter images from an env var.
  // Use NEXT_PUBLIC_SITE_URL in production; fallback to localhost for dev.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Claire Sersun | UI/UX Developer & Frontend Engineer',
  description: 'Accessibility-focused UI/UX Developer and Frontend Engineer specializing in inclusive user experiences, information architecture, and WCAG-compliant interfaces.'
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.heroLabel}>
                <span className={styles.heroLabelText}>UI/UX Developer</span>
                <span className={styles.heroLabelDot} aria-hidden="true">•</span>
                <span className={styles.heroLabelText}>Frontend Engineer</span>
              </div>
              <h1 id="hero-heading" className={styles.heroTitle}>
                Building interfaces that work for <span className={styles.heroTitleEmphasis}>everyone</span>
              </h1>
              <p className={styles.heroSubtitle}>
                I'm Claire and I believe accessibility isn't optional. I transform complex systems into intuitive, WCAG-compliant interfaces that elevate both user experience and business outcomes.
              </p>
              <div className={styles.heroActions}>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="button button-primary"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="icon" aria-hidden="true" style={{marginRight: '0.5rem'}} />
                  Let's Talk
                </a>
                <Link href="/resume" className="button">
                  View Resume
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src="/headshot.webp"
                  alt="Claire Sersun smiling, wearing a cream-colored top with black stripes"
                  width={400}
                  height={400}
                  priority
                  className={styles.heroPhoto}
                />
                <div className={styles.heroImageAccent} aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className={styles.beliefs} aria-labelledby="beliefs-heading">
        <div className="container">
          <h2 id="beliefs-heading" className={styles.beliefsHeading}>
            What I Believe
          </h2>
          <div className={styles.beliefsGrid}>
            <div className={styles.beliefCard}>
              <div className={styles.beliefIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faWheelchairMove} className="icon" aria-hidden="true" />
              </div>
              <h3 className={styles.beliefTitle}>Accessibility is Foundational</h3>
              <p className={styles.beliefText}>
                Not a feature to bolt on later. It's the baseline for good design: informing every decision from day one.
              </p>
            </div>
            <div className={styles.beliefCard}>
              <div className={styles.beliefIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faLeaf} className="icon" aria-hidden="true" />
              </div>
              <h3 className={styles.beliefTitle}>Clarity Over Cleverness</h3>
              <p className={styles.beliefText}>
                The best interfaces feel invisible. Users accomplish their goals without fighting the interface.
              </p>
            </div>
            <div className={styles.beliefCard}>
              <div className={styles.beliefIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faTrowelBricks} className="icon" aria-hidden="true" />
              </div>
              <h3 className={styles.beliefTitle}>Implementation is Design</h3>
              <p className={styles.beliefText}>
                Design doesn't stop at mockups. Semantic HTML, proper ARIA, and keyboard navigation are design decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={styles.workSection} aria-labelledby="work-heading">
        <div className="container">
          <div className={styles.workHeader}>
            <h2 id="work-heading" className={styles.sectionHeading} tabIndex={-1}>
              Selected Work
            </h2>
            <p className={styles.sectionSubheading}>
              Real projects. Real impact. Real accessibility.
            </p>
          </div>
          <div className={styles.caseStudiesGrid}>
            {caseStudies.map((study, index) => (
              <article
                key={study.id}
                className={styles.caseStudyCard}
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <Link
                  href={`/work/${study.slug}`}
                  className={styles.caseStudyLink}
                >
                  <div className={styles.caseStudyHeader}>
                    <span className={styles.caseStudyNumber} aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <ul className={styles.tagList} aria-label="Project tags">
                      {study.tags.slice(0, 2).map((tag) => (
                        <li key={tag} className={styles.tag}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.caseStudyContent}>
                    <h3 className={styles.caseStudyTitle}>
                      {study.title}
                    </h3>
                    <p className={styles.caseStudySubtitle}>
                      {study.subtitle}
                    </p>
                  </div>
                  <div className={styles.caseStudyFooter}>
                    <span className={styles.caseStudyLinkText}>
                      View Case Study
                      <span className={styles.caseStudyArrow} aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 id="cta-heading" className={styles.ctaHeading}>
              Let's Build
            </h2>
            <p className={styles.ctaText}>
              Looking for a UI/UX Developer or Frontend Engineer who prioritizes accessibility, usability, and maintainable code? <br/> I'd love to hear about your project.
            </p>
            <div className={styles.ctaActions}>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="button button-primary"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="icon" aria-hidden="true" style={{marginRight: '0.5rem'}} />
                  {contactInfo.email}
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" aria-hidden="true" />
                  <span style={{marginLeft: '0.5rem'}}>LinkedIn</span>
                </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
