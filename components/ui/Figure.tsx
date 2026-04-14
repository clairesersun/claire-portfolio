import React from 'react'
import styles from './Figure.module.css'
import { figureRegistry } from '../figures'

export type FigureLayout =
  | 'hero'
  | 'wide'
  | 'split'
  | 'grid-3'
  | 'grid-4'
  | 'tall'

export type FigureAccent = 'violet' | 'cyan' | 'green' | 'yellow' | 'coral'

export interface FigureProps {
  title: string
  caption?: string
  layout?: FigureLayout
  accentColor?: FigureAccent
  id?: string
  className?: string
  /** When true, figure fills its parent column instead of breaking out wide. */
  contained?: boolean
}

/**
 * Figure — full-bleed wrapper around a registered React figure component.
 * Looks up the figure by `id` in the figures registry and renders it
 * with a rainbow accent bar and a single bolded title below.
 */
export function Figure({
  title,
  caption,
  layout = 'wide',
  accentColor = 'violet',
  id,
  className = '',
  contained = false,
}: FigureProps) {
  const RegisteredFigure = id ? figureRegistry[id] : undefined
  if (!RegisteredFigure) return null

  const classes = [
    styles.figure,
    styles[`layout-${layout}`],
    styles[`accent-${accentColor}`],
    contained && styles.contained,
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <figure className={classes} id={id}>
      <div className={styles.frame}>
        <div className={styles.accentBar} />
        <RegisteredFigure />
      </div>
      {caption && (
        <figcaption className={styles.caption}>{caption}</figcaption>
      )}
    </figure>
  )
}
