import { Metadata } from 'next'
import Link from 'next/link'
import { resumeData, contactInfo } from '@/content'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'View Claire Sersun\'s professional experience, skills, and education as a UI/UX Developer and Frontend Engineer.'
}

export default function ResumePage() {
  return (
    <div className={styles.resume}>
      <div className="container">

        <header className={styles.header}>
          <h1 className={styles.name}>Claire Sersun</h1>
          <div className={styles.title}>UI/UX Developer & Frontend Engineer</div>
        </header>

        <div className={styles.content}>
          {/* Summary */}
          <section className={styles.section} aria-labelledby="summary-heading">
            <h2 id="summary-heading" className={styles.sectionHeading}>
              Summary
            </h2>
            <p className={styles.summary}>{resumeData.summary}</p>
          </section>

          {/* Experience */}
          <section className={styles.section} aria-labelledby="experience-heading">
            <h2 id="experience-heading" className={styles.sectionHeading}>
              Experience
            </h2>
            {resumeData.experience.map((job, index) => (
              <article key={index} className={styles.job}>
                <div className={styles.jobHeader}>
                  <h3 className={styles.jobTitle}>{job.role}</h3>
                  <p className={styles.jobPeriod}>{job.period}</p>
                </div>
                <p className={styles.jobCompany}>{job.company}</p>
                {job.location && (
                  <p className={styles.jobLocation}>{job.location}</p>
                )}
                <ul className={styles.highlights}>
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          {/* Skills */}
          <section className={styles.section} aria-labelledby="skills-heading">
            <h2 id="skills-heading" className={styles.sectionHeading}>
              Skills
            </h2>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>Primary</h3>
                <ul className={styles.skillList}>
                  {resumeData.skills.primary.map((skill, index) => (
                    <li key={index} className={styles.skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>Technical</h3>
                <ul className={styles.skillList}>
                  {resumeData.skills.technical.map((skill, index) => (
                    <li key={index} className={styles.skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3 className={styles.skillCategoryTitle}>Tools</h3>
                <ul className={styles.skillList}>
                  {resumeData.skills.tools.map((skill, index) => (
                    <li key={index} className={styles.skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className={styles.section} aria-labelledby="education-heading">
            <h2 id="education-heading" className={styles.sectionHeading}>
              Education
            </h2>
            {resumeData.education.map((edu, index) => (
              <article key={index} className={styles.education}>
                <div className={styles.educationHeader}>
                  <h3 className={styles.educationDegree}>{edu.degree}</h3>
                  <p className={styles.educationPeriod}>{edu.period}</p>
                </div>
                <p className={styles.educationField}>{edu.field}</p>
                <p className={styles.educationInstitution}>{edu.institution}</p>
              </article>
            ))}
          </section>
        </div>

        <div className={styles.actions}>
          <a href={`mailto:${contactInfo.email}`} className="button button-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
