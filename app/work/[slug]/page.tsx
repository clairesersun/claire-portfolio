import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { caseStudies, type CaseStudyFigure, type FigureSection } from '@/content'
import styles from './page.module.css'
import { Tag, Button, Figure } from '@/components/ui'

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

function figuresFor(
  figures: CaseStudyFigure[] | undefined,
  section: FigureSection
): CaseStudyFigure[] {
  if (!figures) return []
  return figures.filter((f) => f.section === section)
}

function renderFigures(figures: CaseStudyFigure[]) {
  if (figures.length === 0) return null
  return figures.map((f) => (
    <Figure
      key={f.id}
      id={f.id}
      title={f.title}
      caption={f.caption}
      layout={f.layout}
      accentColor={f.accentColor}
    />
  ))
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
            {study.tags.map((tag, index) => (
              <li key={tag}>
                <Tag colorIndex={index} variant="bold">{tag}</Tag>
              </li>
            ))}
          </ul>
        </header>

        {/* Project Snapshot */}
        {study.projectSnapshot && (
          <section
            aria-labelledby="snapshot-heading"
            className={styles.snapshotSection}
          >
            <h2 id="snapshot-heading" className={styles.snapshotHeading}>
              Project Snapshot
            </h2>
            <dl className={styles.snapshotGrid}>
              <div className={styles.snapshotItem}>
                <dt>Role</dt>
                <dd>{study.projectSnapshot.role}</dd>
              </div>
              <div className={styles.snapshotItem}>
                <dt>Scope</dt>
                <dd>{study.projectSnapshot.scope}</dd>
              </div>
              <div className={styles.snapshotItem}>
                <dt>Environment</dt>
                <dd>{study.projectSnapshot.environment}</dd>
              </div>
              <div className={styles.snapshotItem}>
                <dt>Constraints</dt>
                <dd>{study.projectSnapshot.constraints}</dd>
              </div>
              <div className={styles.snapshotItem}>
                <dt>Outcome</dt>
                <dd>{study.projectSnapshot.outcome}</dd>
              </div>
            </dl>
          </section>
        )}

        {/* Content */}
        <div className={styles.content}>
          {/* Overview */}
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className={styles.sectionHeading}>
              Overview
            </h2>
            <p>{study.overview}</p>
          </section>
          {renderFigures(figuresFor(study.figures, 'overview'))}

          {/* Problem (formerly Challenges) */}
          <section aria-labelledby="problem-heading">
            <h2 id="problem-heading" className={styles.sectionHeading}>
              Problem
            </h2>
            {study.problemContext && <p>{study.problemContext}</p>}
            <ul className={styles.bulletList}>
              {study.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>
          {renderFigures(figuresFor(study.figures, 'problem'))}

          {/* Research */}
          <section aria-labelledby="research-heading">
            <h2 id="research-heading" className={styles.sectionHeading}>
              Research
            </h2>
            <p>{study.research}</p>
            {study.whatILearned && study.whatILearned.length > 0 && (
              <>
                <h3 className={styles.subsectionHeading}>What I learned</h3>
                <ul className={styles.bulletList}>
                  {study.whatILearned.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </section>
          {renderFigures(figuresFor(study.figures, 'research'))}

          {/* Approach */}
          <section aria-labelledby="approach-heading">
            <h2 id="approach-heading" className={styles.sectionHeading}>
              Approach
            </h2>
            <h3 className={styles.subsectionHeading}>{study.approachTitle}</h3>
            <p>{study.approach}</p>
            {study.designPrinciples && study.designPrinciples.length > 0 && (
              <>
                <h3 className={styles.subsectionHeading}>Design principles</h3>
                <ol className={styles.numberedList}>
                  {study.designPrinciples.map((principle, index) => (
                    <li key={index}>{principle}</li>
                  ))}
                </ol>
              </>
            )}
          </section>
          {renderFigures(figuresFor(study.figures, 'approach'))}

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
          {renderFigures(figuresFor(study.figures, 'process'))}

          {/* Workflow Walkthrough */}
          {study.workflowSteps && study.workflowSteps.length > 0 && (
            <>
              <section aria-labelledby="workflow-heading">
                <h2 id="workflow-heading" className={styles.sectionHeading}>
                  Workflow walkthrough
                </h2>
                {study.workflowTitle && (
                  <h3 className={styles.subsectionHeading}>
                    {study.workflowTitle}
                  </h3>
                )}
                <ol className={styles.workflowList}>
                  {study.workflowSteps.map((item, index) => (
                    <li key={index} className={styles.workflowItem}>
                      <span className={styles.workflowStepTitle}>
                        {item.step}
                      </span>
                      <span className={styles.workflowStepCaption}>
                        {item.caption}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
              {renderFigures(figuresFor(study.figures, 'workflow'))}
            </>
          )}

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
          {renderFigures(figuresFor(study.figures, 'gallery'))}
          {renderFigures(figuresFor(study.figures, 'states'))}

          {/* What I'd do next */}
          {study.whatIdDoNext && study.whatIdDoNext.length > 0 && (
            <>
              <section aria-labelledby="next-heading">
                <h2 id="next-heading" className={styles.sectionHeading}>
                  What I&rsquo;d do next
                </h2>
                <ul className={styles.bulletList}>
                  {study.whatIdDoNext.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
              {renderFigures(figuresFor(study.figures, 'next'))}
            </>
          )}
        </div>

        {/* Navigation */}
        <nav aria-label="Case study navigation" className={styles.navigation}>
          <Button href="/">
            ← Back to Home
          </Button>
          <Button href="/resume">
            View Resume
          </Button>
        </nav>
      </div>
    </article>
  )
}
