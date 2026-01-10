import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface ButtonProps {
  children: React.ReactNode
  /**
   * Visual style variant
   * - default: Outlined button with border
   * - primary: Gradient-filled button with cool gradient
   */
  variant?: 'default' | 'primary'
  /**
   * Optional FontAwesome icon to display before text
   */
  icon?: IconDefinition
  /**
   * Icon position relative to text
   */
  iconPosition?: 'left' | 'right'
  /**
   * For navigation: renders as Next.js Link
   */
  href?: string
  /**
   * For external links: renders as anchor tag
   */
  externalHref?: string
  /**
   * Button type (only for button elements)
   */
  type?: 'button' | 'submit' | 'reset'
  /**
   * Click handler (only for button elements)
   */
  onClick?: () => void
  /**
   * Disabled state
   */
  disabled?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * ARIA label for accessibility
   */
  ariaLabel?: string
}

/**
 * Button component with support for internal links, external links, and button actions.
 *
 * Automatically renders the correct element:
 * - `href` prop → Next.js Link
 * - `externalHref` prop → Anchor tag with target="_blank"
 * - Neither → Button element
 *
 * Includes rainbow gradient hover effects and optional icon support.
 *
 * @example
 * ```tsx
 * // Internal navigation
 * <Button href="/about" variant="primary">Learn More</Button>
 *
 * // External link
 * <Button externalHref="https://example.com" icon={faArrowUpRightFromSquare}>
 *   Visit Site
 * </Button>
 *
 * // Button action
 * <Button onClick={handleClick} icon={faEnvelope} iconPosition="left">
 *   Contact
 * </Button>
 * ```
 */
export function Button({
  children,
  variant = 'default',
  icon,
  iconPosition = 'left',
  href,
  externalHref,
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  ariaLabel
}: ButtonProps) {
  const baseClassName = `button ${variant === 'primary' ? 'button-primary' : ''} ${className}`.trim()

  const iconElement = icon ? (
    <FontAwesomeIcon
      icon={icon}
      className="icon"
      aria-hidden="true"
      style={{
        marginRight: iconPosition === 'left' ? '0.5rem' : '0',
        marginLeft: iconPosition === 'right' ? '0.5rem' : '0'
      }}
    />
  ) : null

  const content = (
    <>
      {iconPosition === 'left' && iconElement}
      {children}
      {iconPosition === 'right' && iconElement}
    </>
  )

  // Internal navigation link
  if (href) {
    return (
      <Link href={href} className={baseClassName} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  // External link
  if (externalHref) {
    return (
      <a
        href={externalHref}
        className={baseClassName}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {content}
      </a>
    )
  }

  // Button element
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClassName}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}
