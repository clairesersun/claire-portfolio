import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { caseStudies, type CaseStudyFigure, type FigureSection } from '@/content'
import styles from './page.module.css'
import { Figure } from '@/components/ui'
import PasswordGate from '@/components/PasswordGate'
import { JsonLd, SITE_URL } from '@/components/JsonLd'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)
  if (!study) return {}
  return {
    title: study.title,
    description: study.subtitle,
    alternates: { canonical: `/work/${slug}` },
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
  return (
    <div className={styles.figureBlock}>
      {figures.map((f) => (
        <Figure
          key={f.id}
          id={f.id}
          title={f.title}
          caption={f.caption}
          layout={f.layout}
          accentColor={f.accentColor}
        />
      ))}
    </div>
  )
}

// Figures rendered inline within a Section body column.
function renderInlineFigures(figures: CaseStudyFigure[]) {
  if (figures.length === 0) return null
  return (
    <div className={styles.figureInline}>
      {figures.map((f) => (
        <Figure
          key={f.id}
          id={f.id}
          title={f.title}
          caption={f.caption}
          layout={f.layout}
          accentColor={f.accentColor}
          contained
        />
      ))}
    </div>
  )
}

// A two-column section: sticky mono label on the left, body content on the right.
function Section({
  id,
  label,
  title,
  children,
}: {
  id: string
  label: string
  title?: string
  children: React.ReactNode
}) {
  return (
    <section aria-labelledby={`${id}-heading`} className={styles.section}>
      <div className={styles.sectionLabelCol} aria-hidden="true">
        <span className={styles.sectionLabel}>{label}</span>
      </div>
      <div className={styles.sectionBodyCol}>
        {title && (
          <h2 id={`${id}-heading`} className={styles.sectionHeading}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    notFound()
  }

  const related = caseStudies.filter((s) => s.slug !== study.slug)
  const snapshot = study.projectSnapshot

  const caseUrl = `${SITE_URL}/work/${study.slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: study.title, item: caseUrl },
        ],
      },
      {
        '@type': 'CreativeWork',
        '@id': `${caseUrl}#casestudy`,
        url: caseUrl,
        name: study.title,
        description: study.subtitle,
        author: { '@id': `${SITE_URL}/#person` },
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
    ],
  }

  const content = (
    <article className={styles.caseStudy}>
      {/* Hero — editorial title block */}
      <header className={styles.hero}>
        <p className={styles.kicker}>Case study</p>
        <h1 className={styles.title}>{study.title}</h1>
        <p className={styles.subtitle}>{study.subtitle}</p>
        {snapshot && (
          <dl className={styles.metaRow}>
            <div className={styles.metaItem}>
              <dt>Role</dt>
              <dd>{snapshot.role}</dd>
            </div>
            <div className={styles.metaItem}>
              <dt>Scope</dt>
              <dd>{snapshot.scope}</dd>
            </div>
            <div className={styles.metaItem}>
              <dt>Environment</dt>
              <dd>{snapshot.environment}</dd>
            </div>
          </dl>
        )}
      </header>

      {/* Overview figures as a visual hero */}
      {renderFigures(figuresFor(study.figures, 'overview'))}

      {/* Body — editorial two-column sections */}
      <div className={styles.body}>
        <Section id="overview" label="01 / Overview" title="Overview">
          <p className={styles.lead}>{study.overview}</p>
          {snapshot && (
            <div className={styles.outcomeCallout}>
              <span className={styles.outcomeLabel}>Outcome</span>
              <p>{snapshot.outcome}</p>
            </div>
          )}
        </Section>

        <Section id="problem" label="02 / Problem" title="The problem">
          {study.problemContext && <p>{study.problemContext}</p>}
          <ul className={styles.bulletList}>
            {study.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
          {renderInlineFigures(figuresFor(study.figures, 'problem'))}
        </Section>

        <Section id="research" label="03 / Research" title="Research">
          <p>{study.research}</p>
          {study.whatILearned && study.whatILearned.length > 0 && (
            <>
              <h3 className={styles.subsectionHeading}>What I learned</h3>
              <ul className={styles.bulletList}>
                {study.whatILearned.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {renderInlineFigures(figuresFor(study.figures, 'research'))}
        </Section>

        <Section id="approach" label="04 / Approach" title={study.approachTitle}>
          <p>{study.approach}</p>
          {renderInlineFigures(figuresFor(study.figures, 'approach'))}
          {study.designPrinciples && study.designPrinciples.length > 0 && (
            <blockquote className={styles.pullQuote}>
              <span className={styles.pullQuoteLabel}>Design principles</span>
              <ol className={styles.pullQuoteList}>
                {study.designPrinciples.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ol>
            </blockquote>
          )}
        </Section>

        <Section id="process" label="05 / Process" title="Process">
          <ol className={styles.numberedList}>
            {study.process.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          {renderInlineFigures(figuresFor(study.figures, 'process'))}
        </Section>

        {study.workflowSteps && study.workflowSteps.length > 0 && (
          <Section id="workflow" label="06 / Walkthrough" title={study.workflowTitle || 'Walkthrough'}>
            <ol className={styles.workflowList}>
              {study.workflowSteps.map((item, i) => (
                <li key={i} className={styles.workflowItem}>
                  <span className={styles.workflowStepTitle}>{item.step}</span>
                  <span className={styles.workflowStepCaption}>{item.caption}</span>
                </li>
              ))}
            </ol>
            {renderInlineFigures(figuresFor(study.figures, 'workflow'))}
          </Section>
        )}

        <Section id="results" label="07 / Results" title="Results &amp; impact">
          <ul className={styles.bulletList}>
            {study.resultsImpact.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          {renderInlineFigures(figuresFor(study.figures, 'gallery'))}
          {renderInlineFigures(figuresFor(study.figures, 'states'))}
          <h3 className={styles.subsectionHeading}>Tools &amp; methods</h3>
          <ul className={styles.bulletList}>
            {study.resultsTools.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </Section>

        {study.whatIdDoNext && study.whatIdDoNext.length > 0 && (
          <Section id="next" label="08 / Next" title="What I&rsquo;d do next">
            <ul className={styles.bulletList}>
              {study.whatIdDoNext.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {renderInlineFigures(figuresFor(study.figures, 'next'))}
          </Section>
        )}
      </div>

      {/* Related case studies */}
      {related.length > 0 && (
        <section className={styles.relatedSection} aria-labelledby="related-heading">
          <div className={styles.relatedInner}>
            <h2 id="related-heading" className={styles.relatedHeading}>
              Other case studies
            </h2>
            <div className={styles.relatedGrid}>
              {related.map((other) => (
                <Link
                  key={other.id}
                  href={`/work/${other.slug}`}
                  className={styles.relatedCard}
                >
                  <h3 className={styles.relatedTitle}>{other.title}</h3>
                  <p className={styles.relatedSubtitle}>{other.subtitle}</p>
                  <span className={styles.relatedLink}>Read case study &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )

  // Schema is rendered server-side regardless of the password gate so crawlers
  // always see BreadcrumbList/CreativeWork (the gate returns null during SSR).
  return (
    <>
      <JsonLd data={schema} />
      {study.protected ? <PasswordGate>{content}</PasswordGate> : content}
    </>
  )
}
