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
}

/**
 * Figure — full-bleed wrapper around a registered React figure component.
 * Looks up the figure by `id` in the figures registry and renders it
 * with a rainbow accent bar and a single bolded title below.
 */
export function Figure({
  title,
  layout = 'wide',
  accentColor = 'violet',
  id,
  className = ''
}: FigureProps) {
  const RegisteredFigure = id ? figureRegistry[id] : undefined
  if (!RegisteredFigure) return null

  const classes = [
    styles.figure,
    styles[`layout-${layout}`],
    styles[`accent-${accentColor}`],
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
    </figure>
  )
}
