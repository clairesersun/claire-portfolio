import { FigureCanvas } from './FigureCanvas';

const CORAL = '#991B1B';

const boxes = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="21" cy="21" r="12" stroke={CORAL} strokeWidth="2.5" />
        <line x1="30" y1="30" x2="41" y2="41" stroke={CORAL} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Findability',
    desc: 'Related settings were scattered.\nUsers couldn\'t predict where to look.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="24" rx="18" ry="11" stroke={CORAL} strokeWidth="2.5" />
        <circle cx="24" cy="24" r="5" stroke={CORAL} strokeWidth="2" />
        <line x1="8" y1="8" x2="40" y2="40" stroke={CORAL} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Hidden a11y',
    desc: 'Accessibility controls were buried\ninstead of surfaced as first-class settings.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M8 24C8 15.2 15.2 8 24 8" stroke={CORAL} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M40 24C40 32.8 32.8 40 24 40" stroke={CORAL} strokeWidth="2.5" strokeLinecap="round" />
        <polyline points="24,8 30,14 18,14" fill="none" stroke={CORAL} strokeWidth="2" strokeLinejoin="round" />
        <polyline points="24,40 18,34 30,34" fill="none" stroke={CORAL} strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Org friction',
    desc: 'Switching organizations reloaded the page\nand broke user context.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="10" y="34" width="28" height="5" rx="2" stroke={CORAL} strokeWidth="2" />
        <rect x="13" y="26" width="22" height="5" rx="2" stroke={CORAL} strokeWidth="2" />
        <rect x="16" y="18" width="16" height="5" rx="2" stroke={CORAL} strokeWidth="2" />
        <rect x="19" y="10" width="10" height="5" rx="2" stroke={CORAL} strokeWidth="2" />
      </svg>
    ),
    label: 'Legacy sprawl',
    desc: 'A decade of ad-hoc additions with\nno unifying structure.',
  },
];

export function S2SettingsPainMap() {
  return (
    <FigureCanvas width={1600} height={600} background="#fafafa">
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
          background: '#fafafa',
        }}
      >
        {boxes.map((box, i) => (
          <div key={i} style={{ display: 'flex' }}>
            <div
              style={{
                width: 380,
                height: 520,
                background: '#ffffff',
                border: '1px dashed #e5e5e5',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px 36px',
                gap: 24,
              }}
            >
              {/* Icon */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {box.icon}
              </div>

              {/* Label */}
              <div
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: 40,
                  fontWeight: 600,
                  color: '#0a0a0a',
                  textAlign: 'center',
                  lineHeight: 1.1,
                }}
              >
                {box.label}
              </div>

              {/* Description */}
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  color: '#595959',
                  textAlign: 'center',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line',
                }}
              >
                {box.desc}
              </div>
            </div>
            {/* Vertical divider */}
            {i < boxes.length - 1 && (
              <div style={{ width: 1, background: '#e5e5e5', margin: '60px 0' }} />
            )}
          </div>
        ))}
      </div>
    </FigureCanvas>
  );
}
