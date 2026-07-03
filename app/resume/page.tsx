import { Metadata } from 'next'
import Image from 'next/image'
import { resumeData } from '@/content'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Claire Sersun — UI/UX Developer and Frontend Engineer.',
  alternates: { canonical: '/resume' }
}

export default function ResumePage() {
  return (
    <article className={styles.resume}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Image
            src="/doodles/reading-side.svg"
            alt=""
            aria-hidden="true"
            width={120}
            height={120}
            className={styles.doodle}
          />
          <h1 className={styles.name}>Resume</h1>
        </header>

        <section className={styles.section} aria-labelledby="summary-heading">
          <h2 id="summary-heading" className={styles.sectionHeading}>Summary</h2>
          <p className={styles.summary}>{resumeData.summary}</p>
        </section>

        <section className={styles.section} aria-labelledby="experience-heading">
          <h2 id="experience-heading" className={styles.sectionHeading}>Experience</h2>
          <div className={styles.experienceList}>
            {resumeData.experience.map((job, index) => (
              <article key={index} className={styles.job}>
                <div className={styles.jobMeta}>
                  <p className={styles.jobPeriod}>{job.period}</p>
                  {job.location && <p className={styles.jobLocation}>{job.location}</p>}
                </div>
                <div className={styles.jobBody}>
                  <h3 className={styles.jobTitle}>{job.role}</h3>
                  <p className={styles.jobCompany}>{job.company}</p>
                  <ul className={styles.highlights}>
                    {job.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="skills-heading">
          <h2 id="skills-heading" className={styles.sectionHeading}>Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>Primary</h3>
              <ul className={styles.skillList}>
                {resumeData.skills.primary.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>Technical</h3>
              <ul className={styles.skillList}>
                {resumeData.skills.technical.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>Tools</h3>
              <ul className={styles.skillList}>
                {resumeData.skills.tools.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="education-heading">
          <h2 id="education-heading" className={styles.sectionHeading}>Education</h2>
          <div className={styles.experienceList}>
            {resumeData.education.map((edu, index) => (
              <article key={index} className={styles.job}>
                <div className={styles.jobMeta}>
                  <p className={styles.jobPeriod}>{edu.period}</p>
                </div>
                <div className={styles.jobBody}>
                  <h3 className={styles.jobTitle}>{edu.degree}</h3>
                  <p className={styles.jobCompany}>{edu.field}</p>
                  <p className={styles.jobLocation}>{edu.institution}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}
