import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { caseStudies } from '@/content'
import styles from './page.module.css'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)
  
  if (!study) {
    return {}
  }

  return {
    title: study.title,
    description: study.subtitle,
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    notFound()
  }

  return (
    <article className={styles.caseStudy}>
      <div className="container">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <ol className={styles.breadcrumbList}>
            <li>
              <Link href="/" className={styles.breadcrumbLink}>
                Home
              </Link>
            </li>
            <li aria-hidden="true" className={styles.breadcrumbSeparator}>
              /
            </li>
            <li>
              <span aria-current="page" className={styles.breadcrumbCurrent}>
                {study.title}
              </span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>{study.title}</h1>
          <p className={styles.subtitle}>{study.subtitle}</p>
          <ul className={styles.tagList} aria-label="Tags">
            {study.tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        </header>

        {/* Content */}
        <div className={styles.content}>
          {/* Overview */}
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className={styles.sectionHeading}>
              Overview
            </h2>
            <p>{study.overview}</p>
          </section>

          {/* Challenges */}
          <section aria-labelledby="challenges-heading">
            <h2 id="challenges-heading" className={styles.sectionHeading}>
              Challenges
            </h2>
            <ul className={styles.bulletList}>
              {study.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>

          {/* Research */}
          <section aria-labelledby="research-heading">
            <h2 id="research-heading" className={styles.sectionHeading}>
              Research
            </h2>
            <p>{study.research}</p>
          </section>

          {/* Approach */}
          <section aria-labelledby="approach-heading">
            <h2 id="approach-heading" className={styles.sectionHeading}>
              Approach
            </h2>
            <h3 className={styles.subsectionHeading}>{study.approachTitle}</h3>
            <p>{study.approach}</p>
          </section>

          {/* Process */}
          <section aria-labelledby="process-heading">
            <h2 id="process-heading" className={styles.sectionHeading}>
              Process
            </h2>
            <ol className={styles.numberedList}>
              {study.process.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>

          {/* Results */}
          <section aria-labelledby="results-heading">
            <h2 id="results-heading" className={styles.sectionHeading}>
              Results
            </h2>
            <h3 className={styles.subsectionHeading}>Impact</h3>
            <ul className={styles.bulletList}>
              {study.resultsImpact.map((impact, index) => (
                <li key={index}>{impact}</li>
              ))}
            </ul>
            <h3 className={styles.subsectionHeading}>Tools & Methods</h3>
            <ul className={styles.bulletList}>
              {study.resultsTools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Navigation */}
        <nav aria-label="Case study navigation" className={styles.navigation}>
          <Link href="/" className="button">
            ← Back to Home
          </Link>
          <Link href="/resume" className="button">
            View Resume
          </Link>
        </nav>
      </div>
    </article>
  )
}
