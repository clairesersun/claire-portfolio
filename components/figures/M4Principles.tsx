import { FigureCanvas } from './FigureCanvas';

const AMBER = '#92400E';

const principles = [
  {
    n: '1',
    title: 'Preserve context',
    desc: 'Never make users re-find what they were just doing. Every navigation action should feel reversible.',
  },
  {
    n: '2',
    title: 'Reduce clutter',
    desc: 'Less noise, not less capability. Surface the right actions at the right time — hide the rest.',
  },
  {
    n: '3',
    title: 'Borrow intentionally',
    desc: 'Adopt familiar patterns so users do less guesswork. Deviate only when there\'s a clear reason.',
  },
  {
    n: '4',
    title: 'Accessibility + scale',
    desc: 'Every component built for keyboards, screen readers, and long daily use across teams.',
  },
];

export function M4Principles() {
  return (
    <FigureCanvas width={1600} height={600}>
      <div style={{
        width: '100%', height: '100%', background: '#fafafa',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '40px 48px', gap: 32,
      }}>
        {principles.map((p, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 480,
              background: '#fff',
              border: '1px solid #e5e5e5',
              borderTop: `3px solid ${AMBER}`,
              borderRadius: 8,
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            {/* Large number */}
            <div style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 80,
              fontWeight: 700,
              color: AMBER,
              lineHeight: 0.9,
            }}>
              {p.n}
            </div>

            {/* Title */}
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 18,
              fontWeight: 700,
              color: '#0a0a0a',
              lineHeight: 1.3,
            }}>
              {p.title}
            </div>

            {/* Divider */}
            <div style={{ width: 32, height: 2, background: AMBER, borderRadius: 1 }} />

            {/* Description */}
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: '#333333',
              lineHeight: 1.7,
            }}>
              {p.desc}
            </div>
          </div>
        ))}
      </div>
    </FigureCanvas>
  );
}
