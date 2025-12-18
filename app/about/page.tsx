import { Metadata } from 'next'
import Link from 'next/link'
import { aboutContent, contactInfo } from '@/content'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Claire Sersun, an accessibility-focused UI/UX Developer and Frontend Engineer.'
}

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>About Me</h1>
        </header>

        <div className={styles.content}>
          <section className={styles.intro}>
            <p className={styles.introText}>
              {aboutContent.intro}
            </p>
            <p className={styles.bodyText}>
              {aboutContent.body}
            </p>
          </section>

          <section className={styles.background} aria-labelledby="background-heading">
            <h2 id="background-heading" className={styles.sectionHeading}>
              Background & Approach
            </h2>
            <p>
              I've worked in hybrid roles bridging design and frontend development, where I led accessibility initiatives, rebuilt user interfaces, and established component library foundations using Vue and Storybook.
            </p>
            <p>
              My approach combines strategic thinking with hands-on implementation. I believe the best interfaces emerge when accessibility, usability, and technical excellence inform every decision from the start, not as afterthoughts.
            </p>
          </section>

          <section className={styles.expertise} aria-labelledby="expertise-heading">
            <h2 id="expertise-heading" className={styles.sectionHeading}>
              Areas of Expertise
            </h2>
            <ul className={styles.expertiseList}>
              <li>
                <strong>Accessibility-First Development:</strong> WCAG compliance, semantic HTML, ARIA patterns, screen reader testing, keyboard navigation
              </li>
              <li>
                <strong>Information Architecture:</strong> Restructuring complex systems to reduce cognitive load and improve findability
              </li>
              <li>
                <strong>Frontend Engineering:</strong> Vue, React, TypeScript, HTML, CSS/SCSS, component libraries, design systems
              </li>
              <li>
                <strong>UI/UX Design:</strong> Wireframing, prototyping, user research, usability testing, interface design
              </li>
              <li>
                <strong>Cross-Functional Collaboration:</strong> Working with product managers, designers, and engineers to ship accessible, user-centered features
              </li>
            </ul>
          </section>

          <section className={styles.values} aria-labelledby="values-heading">
            <h2 id="values-heading" className={styles.sectionHeading}>
              What I Value
            </h2>
            <ul className={styles.valuesList}>
              <li>Interfaces that work for <em>everyone</em>, not just the average user</li>
              <li>Clear, maintainable code that teams can confidently build on</li>
              <li>Thoughtful design decisions backed by user research and accessibility standards</li>
              <li>Remote-friendly collaboration and transparent communication</li>
              <li>Continuous learning and improving craft</li>
            </ul>
          </section>

          <section className={styles.connect} aria-labelledby="connect-heading">
            <h2 id="connect-heading" className={styles.sectionHeading}>
              Beyond Work
            </h2>
            <p>
              Before transitioning to tech, I taught wellness and movement classes, which taught me how to communicate complex concepts clearly and meet people where they are. I hold a Master's in Mass Communication (Web Design) from the University of Florida and a B.A. in Dance from Marymount Manhattan College.
            </p>
            <p>
              When I'm not coding or designing, you might find me reading, exploring new ways to move, or tinkering with side projects that combine my interests in accessibility, education, and human-centered design.
            </p>
          </section>
        </div>

        <div className={styles.actions}>
          <Link href="/#work-heading" className="button button-primary">
            View My Work
          </Link>
          <Link href="/resume" className="button">
            View Resume
          </Link>
        </div>
      </div>
    </div>
  )
}
