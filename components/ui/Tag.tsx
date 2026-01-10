import React from 'react'
import styles from './Tag.module.css'

export interface TagProps {
  children: React.ReactNode
  /**
   * Rainbow color index (0-4 for the 5-color rotation)
   * Automatically cycles through violet, cyan, green, yellow, coral
   */
  colorIndex?: number
  /**
   * Visual style variant
   * - subtle: Low-opacity background (default)
   * - bold: Higher contrast for emphasis
   */
  variant?: 'subtle' | 'bold'
  className?: string
}

/**
 * Tag component for labeling content with rainbow-colored semantic tags.
 *
 * Uses the site's rainbow color system with WCAG AAA compliant backgrounds.
 * Automatically cycles through colors based on position.
 *
 * @example
 * ```tsx
 * <Tag colorIndex={0}>Accessibility</Tag>
 * <Tag colorIndex={1}>React</Tag>
 * ```
 */
export function Tag({
  children,
  colorIndex = 0,
  variant = 'subtle',
  className = ''
}: TagProps) {
  // Cycle through 5 rainbow colors (0-4)
  const normalizedIndex = colorIndex % 5

  return (
    <span
      className={`${styles.tag} ${styles[`color${normalizedIndex}`]} ${styles[variant]} ${className}`.trim()}
      data-color-index={normalizedIndex}
    >
      {children}
    </span>
  )
}
