import { FigureCanvas } from './FigureCanvas';

const GREEN = '#065F46';

const headers = [
  { label: 'Pattern', width: 160 },
  { label: 'Expectation (Slack / Discord / Teams)', width: 260 },
  { label: 'Constraint in our product', width: 260 },
  { label: 'Decision — adaptation we made', width: 320, accent: true },
];

const rows = [
  {
    pattern: 'Threading',
    expectation: 'Users expect every message can have a dedicated thread panel.',
    constraint: 'API tied replies to parent ID only — no separate thread object.',
    decision: 'Introduced a thread-count badge + thread popup overlay view.',
  },
  {
    pattern: 'Reply / Quote',
    expectation: 'Inline quoted source shown above the reply composer.',
    constraint: 'Composer was a plain <textarea> with no context injection.',
    decision: 'Built popup composer with the source message pinned at top.',
  },
  {
    pattern: '@mentions',
    expectation: 'Autocomplete dropdown with user avatar preview.',
    constraint: 'Existing mention API was limited — no search endpoint.',
    decision: 'Adopted simpler chip-style mentions, no autocomplete expansion.',
  },
  {
    pattern: 'Message actions',
    expectation: '3-dot overflow with ~4 primary visible actions.',
    constraint: 'Legacy menu exposed 12 items with no hierarchy.',
    decision: 'Promoted 3 actions to surface level, collapsed the rest behind overflow.',
  },
  {
    pattern: 'System messages',
    expectation: 'Visually distinct — often centered or muted in appearance.',
    constraint: 'Rendered identical to user messages in the original view.',
    decision: 'Styled system messages with a neutral pill treatment, separate lane.',
  },
  {
    pattern: 'Message linking',
    expectation: 'Copy link → jump-scroll to that exact message on open.',
    constraint: 'No deep-linking support existed in the codebase.',
    decision: 'Shipped a copy-link feature with auto-scroll on message open.',
  },
];

export function M3PatternMatrix() {
  return (
    <FigureCanvas width={1120} height={1500}>
      <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif" }}>
        {/* Title strip */}
        <div style={{ padding: '36px 40px 24px', flexShrink: 0 }}>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 36, fontWeight: 700, color: '#0a0a0a', marginBottom: 6 }}>
            Pattern Research Matrix
          </div>
          <div style={{ fontSize: 13, color: '#888' }}>
            How we adapted familiar patterns to our constraints
          </div>
        </div>

        {/* Table */}
        <div style={{ flex: 1, margin: '0 20px 40px', border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden' }}>
          {/* Header row */}
          <div style={{ display: 'flex', background: '#fafafa', borderBottom: '1px solid #e5e5e5' }}>
            {headers.map((h, i) => (
              <div
                key={i}
                style={{
                  width: h.width,
                  padding: '14px 16px',
                  fontSize: 11,
                  fontWeight: 700,
                  color: h.accent ? GREEN : '#595959',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  borderRight: i < headers.length - 1 ? '1px solid #e5e5e5' : 'none',
                  borderLeft: h.accent ? `2px solid ${GREEN}` : 'none',
                  flexShrink: 0,
                }}
              >
                {h.label}
              </div>
            ))}
          </div>

          {/* Data rows */}
          {rows.map((row, ri) => (
            <div
              key={ri}
              style={{
                display: 'flex',
                background: ri % 2 === 0 ? '#fff' : '#fafafa',
                borderBottom: ri < rows.length - 1 ? '1px solid #e5e5e5' : 'none',
                minHeight: 140,
              }}
            >
              {/* Pattern */}
              <div style={{
                width: 160, padding: '18px 16px',
                borderRight: '1px solid #e5e5e5', flexShrink: 0,
                display: 'flex', alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0a0a0a' }}>{row.pattern}</span>
              </div>

              {/* Expectation */}
              <div style={{
                width: 260, padding: '18px 16px',
                borderRight: '1px solid #e5e5e5', flexShrink: 0,
              }}>
                <span style={{ fontSize: 13, color: '#333', lineHeight: 1.6 }}>{row.expectation}</span>
              </div>

              {/* Constraint */}
              <div style={{
                width: 260, padding: '18px 16px',
                borderRight: '1px solid #e5e5e5', flexShrink: 0,
              }}>
                <span style={{ fontSize: 13, color: '#595959', lineHeight: 1.6, fontStyle: 'italic' }}>{row.constraint}</span>
              </div>

              {/* Decision */}
              <div style={{
                width: 320, padding: '18px 16px',
                borderLeft: `2px solid ${GREEN}`,
                flexShrink: 0,
              }}>
                <span style={{ fontSize: 13, color: '#0a0a0a', lineHeight: 1.6 }}>{row.decision}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div style={{ padding: '0 20px 36px', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <div style={{ width: 20, height: 3, background: GREEN, borderRadius: 2 }} />
          <span style={{ fontSize: 11, color: '#888' }}>
            Green column = our adaptation decision
          </span>
        </div>
      </div>
    </FigureCanvas>
  );
}