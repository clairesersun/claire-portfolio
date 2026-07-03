import { Metadata } from 'next'
import Image from 'next/image'
import { playgroundCategories, type PlaygroundCard } from '@/content'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Playground',
  description: 'An archive of select web, print, and photo work Claire makes on the side.',
  alternates: { canonical: '/playground' },
}

// Per-card layout hints — tilt (deg) + image height (px) + orientation vibe.
// Mixed intentionally so categories feel shuffled, not grouped.
const cardLayout: Record<string, { tilt: number; h: number }> = {
  '20000km':       { tilt: -2,   h: 260 },  // landscape
  andi:            { tilt:  1.5, h: 420 },  // portrait
  valleto:         { tilt: -1,   h: 340 },
  'faye-works':    { tilt:  2.5, h: 240 },  // landscape
  sneakerlaw:      { tilt: -2.5, h: 380 },
  innerseasons:    { tilt:  1,   h: 460 },  // portrait / tall
  movingforlife:   { tilt: -1.5, h: 300 },
  portiko:         { tilt:  2,   h: 360 },
  fairfield:       { tilt: -0.5, h: 280 },  // landscape
  tahoe:           { tilt:  2.5, h: 440 },  // portrait
  'joshua-tree':   { tilt: -2,   h: 320 },
  japan:           { tilt:  1,   h: 400 },
}

// Mixed order — web/print/photo interleaved so the grid doesn't cluster by category.
const mixedOrder = [
  'innerseasons',
  'faye-works',
  'joshua-tree',
  'andi',
  'sneakerlaw',
  'valleto',
  'fairfield',
  'portiko',
  'japan',
  '20000km',
  'tahoe',
  'movingforlife',
]

export default function PlaygroundPage() {
  const all = playgroundCategories.flatMap((cat) => cat.items)
  const byId = new Map(all.map((i) => [i.id, i]))
  const items: PlaygroundCard[] = mixedOrder
    .map((id) => byId.get(id))
    .filter((x): x is PlaygroundCard => Boolean(x))

  return (
    <main className={styles.page}>
      <header className={styles.intro}>
        <h1 className={styles.title}>Playground</h1>
        <p className={styles.lede}>
          An archive of select web, print, and photo work I make on the&nbsp;side.
        </p>
      </header>

      <div className={styles.grid}>
        {items.map((item) => {
          const layout = cardLayout[item.id] ?? { tilt: 0, h: 320 }
          const style = {
            ['--tilt' as string]: `${layout.tilt}deg`,
            ['--h' as string]: `${layout.h}px`,
          } as React.CSSProperties

          const inner = (
            <>
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={layout.h}
                  className={styles.image}
                  sizes="(max-width: 640px) 90vw, 420px"
                />
              </div>
              <div className={styles.caption}>
                <span className={styles.captionTitle}>{item.title}</span>
                <span className={styles.captionMeta}>{item.caption}</span>
              </div>
            </>
          )

          return item.href ? (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              style={style}
              aria-label={`${item.title} — ${item.caption}`}
            >
              {inner}
            </a>
          ) : (
            <article
              key={item.id}
              className={styles.card}
              style={style}
              aria-label={`${item.title} — ${item.caption}`}
            >
              {inner}
            </article>
          )
        })}
      </div>

      <p className={styles.signature}>— Claire</p>
    </main>
  )
}
