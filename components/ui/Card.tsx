import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import styles from './Card.module.css'

export interface CardProps {
  children: React.ReactNode
  /**
   * Visual style variant
   * - default: Basic card with border
   * - belief: Card for core beliefs with large icon and rainbow accent
   * - caseStudy: Vertical list item with chapter marker
   */
  variant?: 'default' | 'belief' | 'caseStudy'
  /**
   * Optional link - makes entire card clickable
   */
  href?: string
  /**
   * Optional icon (used primarily in belief cards)
   */
  icon?: IconDefinition
  /**
   * Rainbow color index for accent (0-2 for belief cards)
   */
  rainbowIndex?: number
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Disable hover effects
   */
  noHover?: boolean
}

/**
 * Card component with multiple variants for different content types.
 *
 * Variants:
 * - default: Basic card with border and hover lift
 * - belief: Large icon card with rainbow accents (homepage beliefs)
 * - caseStudy: Chapter-style card with rainbow gradient marker
 *
 * @example
 * ```tsx
 * // Belief card
 * <Card variant="belief" icon={faWheelchairMove} rainbowIndex={0}>
 *   <h3>Accessibility is Foundational</h3>
 *   <p>Not a feature to bolt on later...</p>
 * </Card>
 *
 * // Case study card
 * <Card variant="caseStudy" href="/work/project-slug">
 *   <h3>Project Title</h3>
 *   <p>Project description...</p>
 * </Card>
 * ```
 */
export function Card({
  children,
  variant = 'default',
  href,
  icon,
  rainbowIndex = 0,
  className = '',
  noHover = false
}: CardProps) {
  const cardClassName = `
    ${styles.card}
    ${styles[variant]}
    ${rainbowIndex !== undefined ? styles[`rainbow${rainbowIndex}`] : ''}
    ${noHover ? styles.noHover : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  const cardContent = (
    <>
      {icon && variant === 'belief' && (
        <div className={styles.beliefIcon} aria-hidden="true">
          <FontAwesomeIcon icon={icon} className="icon" />
        </div>
      )}
      {children}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {cardContent}
      </Link>
    )
  }

  return (
    <div className={cardClassName}>
      {cardContent}
    </div>
  )
}
