import { FigureCanvas } from './FigureCanvas';

const VIOLET = '#5B21B6';
const CYAN = '#0C5A6D';
const senderColor = '#1D4ED8';

function StarIcon({ size = 13, color = '#555' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M7 1.5l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 9.321l-3.09 1.628.59-3.44L2 5.132l3.455-.503L7 1.5z"
        stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}
function LinkIcon({ size = 13, color = '#555' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M5.5 8.5a3 3 0 004.24 0l1.5-1.5a3 3 0 00-4.24-4.24L6 3.76" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M8.5 5.5a3 3 0 00-4.24 0L2.76 7a3 3 0 004.24 4.24L8 10.24" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ─── Layout constants ───────────────────────────────────────────────────────
const MSG_X = 400;   // message box left edge
const MSG_Y = 155;   // message box top edge
const MSG_W = 640;   // message box width
const MSG_H = 390;   // message box height (content: quote+avatar+body+badge+padding)

// Measured absolute canvas positions of each UI element:
//   content left  = 400+18 = 418
//   content top   = 155+18 = 173
//   quote bar top = 173, height≈28px,  center y = 187
//   avatar row:   starts y=207 (173+28+6), 40px tall, center y=227
//   avatar circle center x = 418+20 = 438
//   timestamp:    x≈612 (after avatar+gap+senderName+margin), y=227
//   toolbar:      ~184px wide, right edge at 1022, center x≈930, y=227
//   body text:    starts y=255 (207+40+8), 3 lines≈65px, center y=287; x=470+
//   thread badge: starts y=334 (255+65+14), 24px tall, center y=346; starts x=470

const L_BADGE_X = 60;   // badge center x, left side
const R_BADGE_X = 1110; // badge center x, right side
const BADGE_R   = 15;   // badge radius

/**
 * Callouts — SORTED so badge y-positions never produce crossing lines.
 *
 * Left side sorted ascending by target cy → badge by also ascending → no crossing.
 * Right side sorted ascending by target cy → badge by also ascending → no crossing.
 * Left & right lines move in opposite x-directions so they can't cross each other.
 */
// Evenly spaced left column (4 badges) and right column (2 badges).
// Rows align left↔right so the callout grid reads as a tidy pair of columns.
const callouts = [
  // ── LEFT SIDE (badge x=60) ────────────────────────────────────────────────
  { n: 3, side: 'left',  cx: 420, cy: 187, by: 210,
    label: ['Context injection —', 'quoted preview + quick-jump to original'] },
  { n: 1, side: 'left',  cx: 438, cy: 227, by: 330,
    label: ['Avatar + sender name', 'always visible'] },
  { n: 4, side: 'left',  cx: 700, cy: 287, by: 450,
    label: ['Comfortable line length,', 'readable at a glance'] },
  { n: 5, side: 'left',  cx: 560, cy: 346, by: 570,
    label: ['Thread badge signals depth', 'without crowding the feed'] },

  // ── RIGHT SIDE (badge x=1110) ─────────────────────────────────────────────
  { n: 2, side: 'right', cx: 612, cy: 227, by: 210,
    label: ['Subtle timestamp', 'for auditability'] },
  { n: 6, side: 'right', cx: 930, cy: 227, by: 330,
    label: ['3 recent emojis · picker · reply', 'in thread · star · copy · more'] },
] as const;

export function M6Anatomy() {
  return (
    <FigureCanvas width={1600} height={980}>
      <div style={{ width: '100%', height: '100%', background: '#fff', position: 'relative' }}>

        {/* ── Title ── */}
        <div style={{ position: 'absolute', top: 36, left: 0, right: 0, textAlign: 'center', zIndex: 5 }}>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: 36, fontWeight: 700, color: '#0a0a0a' }}>
            Anatomy of the redesigned message
          </span>
        </div>

        {/* ── Central message component (z=2, below SVG overlay) ── */}
        <div style={{
          position: 'absolute',
          left: MSG_X, top: MSG_Y, width: MSG_W, height: MSG_H,
          background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8,
          padding: '18px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          display: 'flex', flexDirection: 'column',
          zIndex: 2,
          overflow: 'hidden',
        }}>

          {/* Context-injection quote bar — callout 3 */}
          {/* Sits at content top (y=173 canvas), height≈28px, center y≈187 */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            marginBottom: 6,
            padding: '6px 10px',
            background: '#f8f7ff',
            border: `1px solid ${VIOLET}18`,
            borderLeft: `3px solid ${VIOLET}66`,
            borderRadius: '0 6px 6px 0',
            flexShrink: 0,
          }}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 6, fontWeight: 700, color: '#fff' }}>CR</span>
            </div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: '#444' }}>Cpt. Rivera</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#888', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              Evacuating Zone 3 — 420 residents displaced.
            </span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: VIOLET, textDecoration: 'underline', cursor: 'pointer', flexShrink: 0 }}>
              → Jump to message
            </span>
          </div>

          {/* Avatar row — callouts 1 (avatar), 2 (timestamp), 6 (toolbar) */}
          {/* Row starts y=207 canvas, avatar center y=227, row height≈40px */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexShrink: 0 }}>
            {/* Avatar circle — callout 1 target: canvas (438, 227) */}
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: senderColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700, color: '#fff' }}>CM</span>
            </div>
            <div style={{ flex: 1 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700, color: senderColor }}>
                Chief Mitchell
              </span>
              {/* Timestamp — callout 2 target: canvas (~612, 227) */}
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#aaa', marginLeft: 10 }}>
                8:11 AM
              </span>
            </div>
            {/* Hover action toolbar — callout 6 target: canvas (~930, 227) */}
            <div style={{ display: 'flex', alignItems: 'center', background: '#fff', border: '1px solid #e0e0e0', borderRadius: 6, overflow: 'hidden', boxShadow: '0 1px 6px rgba(0,0,0,0.08)', flexShrink: 0 }}>
              {['👍', '❤️', '😂'].map((em, j) => (
                <div key={j} style={{ padding: '4px 6px' }}><span style={{ fontSize: 13 }}>{em}</span></div>
              ))}
              <div style={{ padding: '4px 6px' }}><span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#555' }}>☺</span></div>
              <div style={{ padding: '4px 6px' }}><span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#555' }}>↩</span></div>
              <div style={{ padding: '4px 5px', display: 'flex', alignItems: 'center' }}><StarIcon size={13} color="#555" /></div>
              <div style={{ padding: '4px 5px', display: 'flex', alignItems: 'center' }}><LinkIcon size={13} color="#555" /></div>
              <div style={{ padding: '4px 6px' }}><span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#555' }}>⋯</span></div>
            </div>
          </div>

          {/* Message body — callout 4 target: canvas (~700, 287) */}
          {/* Starts y=255 canvas (after quote+gap+avatarRow+margin), center y≈287 */}
          <div style={{ paddingLeft: 52, marginBottom: 14, flexShrink: 0 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: '#222', lineHeight: 1.6, margin: 0 }}>
              Fire has crossed Oak Ave. Re-routing all units via Elm Street. Do NOT use Route 9 — it's closed until further notice.
            </p>
          </div>

          {/* Thread badge — callout 5 target: canvas (~560, 346) */}
          {/* Starts y=334 canvas, center y≈346 */}
          <div style={{ paddingLeft: 52, flexShrink: 0 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 10px', borderRadius: 4, background: '#f0f4f8', border: '1px solid #dde5ef', cursor: 'pointer' }}>
              <div style={{ display: 'flex' }}>
                {[0, 1, 2].map(j => (
                  <div key={j} style={{ width: 14, height: 14, borderRadius: '50%', background: ['#DC2626', '#059669', '#7C3AED'][j], border: '1.5px solid #f0f4f8', marginLeft: j > 0 ? -4 : 0 }} />
                ))}
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: CYAN }}>3 replies</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#aaa' }}>Last reply 8:23 AM</span>
            </div>
          </div>
        </div>

        {/* ── SVG overlay: lines, dots, badge circles (z=30, above message) ── */}
        <svg
          width="1600" height="980"
          style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 30 }}
        >
          {/* Dashed outline around the message box */}
          <rect
            x={MSG_X - 3} y={MSG_Y - 3} width={MSG_W + 6} height={MSG_H + 6}
            rx="10" fill="none" stroke={`${VIOLET}35`} strokeWidth="1.5" strokeDasharray="6,4"
          />

          {callouts.map((c) => {
            const badgeX = c.side === 'left' ? L_BADGE_X : R_BADGE_X;
            // Shorten the line so it stops at the badge circumference
            const dx = badgeX - c.cx;
            const dy = c.by - c.cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const ratio = (dist - BADGE_R - 3) / dist;
            const endX = c.cx + dx * ratio;
            const endY = c.cy + dy * ratio;

            return (
              <g key={c.n}>
                {/* Callout line */}
                <line
                  x1={c.cx} y1={c.cy} x2={endX} y2={endY}
                  stroke={VIOLET} strokeWidth="1.3" opacity="0.55"
                />
                {/* Target dot — sits on the exact UI element */}
                <circle cx={c.cx} cy={c.cy} r="3.5" fill={VIOLET} opacity="0.7" />
                {/* Badge circle */}
                <circle cx={badgeX} cy={c.by} r={BADGE_R} fill="white" stroke={VIOLET} strokeWidth="2" />
                <text
                  x={badgeX} y={c.by + 6}
                  textAnchor="middle"
                  fontFamily="'Caveat', cursive" fontSize="18" fontWeight="700" fill={VIOLET}
                >
                  {c.n}
                </text>
              </g>
            );
          })}
        </svg>

        {/* ── HTML label text (z=35, above SVG) ── */}
        {callouts.map((c) => {
          const isLeft = c.side === 'left';
          return (
            <div
              key={`label-${c.n}`}
              style={{
                position: 'absolute',
                // Vertically center label on the badge
                top: c.by - (c.label.length * 18) / 2,
                ...(isLeft
                  ? { left: L_BADGE_X + BADGE_R + 12, width: 306 }
                  : { left: R_BADGE_X + BADGE_R + 12, width: 450 }),
                zIndex: 35,
                background: '#fff',
                padding: '2px 6px',
                borderRadius: 3,
              }}
            >
              {c.label.map((line, li) => (
                <div
                  key={li}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12.5,
                    color: '#1a1a1a',
                    lineHeight: '18px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </FigureCanvas>
  );
}