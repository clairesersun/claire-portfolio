import { FigureCanvas } from './FigureCanvas';

const CORAL = '#991B1B';
const VIOLET = '#5B21B6';

const users = ['Chief Mitchell', 'Cpt. Rivera', 'Logistics Cmd', 'Incident Cmd', 'EOC Dispatch', 'Riley S.'];
const avatarColors = ['#1D4ED8', '#DC2626', '#059669', '#7C3AED', '#D97706', '#0891B2'];

function Avatar({ user, size = 24 }: { user: number; size?: number }) {
  const parts = users[user].split(' ');
  const initials = parts[0][0] + (parts[1]?.[0] ?? '');
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', background: avatarColors[user], display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: size * 0.33, fontWeight: 700, color: '#fff' }}>{initials.toUpperCase()}</span>
    </div>
  );
}

const msgData = [
  { user: 0, text: 'All units, report to staging area at Maple & 5th Ave by 0800. Accountability check mandatory before deployment.', time: '7:52 AM' },
  { user: 1, text: 'Copy. Evacuating Zone 3 — approx. 420 residents displaced. Need additional buses at South Gate.', time: '7:54 AM' },
  { user: 2, text: 'Re: the routing issue from this morning', time: '8:02 AM', isOrphan: true },
  { user: null, text: 'Riley S. joined the channel', time: '8:05 AM', isSystem: true },
  { user: 3, text: 'Fire has crossed Oak Ave. Re-routing all units via Elm Street. Do NOT use Route 9.', time: '8:11 AM' },
  { user: 4, text: 'EOC confirmed — ICS structure active as of 14:00. All requests through WebEOC before end of hour.', time: '8:15 AM' },
  { user: 2, text: 'Copy that.', time: '8:16 AM' },
];

// Mockup placed at left; callout labels on right
const MOCKUP_X = 70;
const MOCKUP_Y = 55;
const MOCKUP_W = 570;
const MOCKUP_H = 680;

// 3 callouts (cockpit nav overload removed)
const targets = [
  { cx: 360, cy: 258 },   // 1 Orphan "Re:" bubble
  { cx: 310, cy: 294 },   // 2 System message
  { cx: 310, cy: 390 },   // 3 Flat list / no threading
];

const LABEL_X = 720;
const labelPositions = [
  { y: 130, title: 'Orphan reply', desc: 'No link to source — context is completely lost' },
  { y: 270, title: 'System message blends in', desc: 'Styled same as chat — visually indistinguishable' },
  { y: 400, title: 'No threading affordance', desc: 'All replies accumulate as flat messages — no context' },
];

export function M2FrictionMap() {
  return (
    <FigureCanvas width={1600} height={900}>
      <div style={{ width: '100%', height: '100%', background: '#fafafa', position: 'relative' }}>

        {/* SVG for callout lines + badges — drawn OVER mockup for visibility */}
        <svg
          width="1600" height="900"
          style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 20 }}
        >
          {targets.map((t, i) => {
            const lp = labelPositions[i];
            const badgeX = LABEL_X - 18;
            const badgeY = lp.y + 14;
            return (
              <g key={i}>
                {/* Red dashed line — increased opacity for charcoal bg visibility */}
                <line
                  x1={t.cx} y1={t.cy}
                  x2={badgeX - 14} y2={badgeY}
                  stroke={CORAL} strokeWidth="1.5" strokeDasharray="5,4" opacity="0.9"
                />
                {/* Badge */}
                <circle cx={badgeX} cy={badgeY} r="14" fill="#fff" stroke={CORAL} strokeWidth="2" />
                <text x={badgeX} y={badgeY + 5} textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="15" fontWeight="700" fill={CORAL}>
                  {i + 1}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Callout label cards — right side */}
        {labelPositions.map((lp, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: LABEL_X + 6, top: lp.y,
            width: 390,
            zIndex: 15,
          }}>
            <div style={{
              padding: '10px 14px',
              background: '#fff',
              border: `1px solid ${CORAL}30`,
              borderLeft: `3px solid ${CORAL}`,
              borderRadius: 5,
              boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
            }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: CORAL, marginBottom: 3 }}>
                {i + 1}. {lp.title}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10.5, color: '#444', lineHeight: 1.5 }}>{lp.desc}</div>
            </div>
          </div>
        ))}

        {/* Design decisions panel */}
        <div style={{ position: 'absolute', left: LABEL_X + 6, top: 530, width: 820, zIndex: 15 }}>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, fontWeight: 700, color: '#0a0a0a', marginBottom: 12 }}>
            Design decisions
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              { n: 1, decision: 'Context injection: quoted preview pinned above body + quick-jump link to original', color: '#DC2626' },
              { n: 2, decision: 'Hover toolbar: 3 recent emojis → emoji picker → reply → star → copy → more', color: '#7C3AED' },
              { n: 3, decision: 'Discord-style: muted centered rule with text only — no avatar, no bubble', color: '#D97706' },
              { n: 4, decision: 'Persistent thread popup panel — context preserved even when navigating', color: '#0891B2' },
            ].map((d) => (
              <div key={d.n} style={{
                flex: '1 1 360px', padding: '9px 12px',
                background: '#fff', border: '1px solid #eee',
                borderLeft: `3px solid ${d.color}`, borderRadius: 5,
              }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, color: d.color }}>→ </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#333', lineHeight: 1.5 }}>{d.decision}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Central mockup — charcoal background, white bubbles */}
        <div style={{
          position: 'absolute',
          left: MOCKUP_X, top: MOCKUP_Y,
          width: MOCKUP_W, height: MOCKUP_H,
          background: '#fff',
          border: '1px solid #d0d0d0',
          borderRadius: 10,
          boxShadow: '0 4px 32px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          zIndex: 5,
        }}>
          {/* Browser chrome — no cockpit nav icon boxes */}
          <div style={{ background: '#e8e8e8', padding: '7px 10px', display: 'flex', gap: 5, alignItems: 'center', borderBottom: '1px solid #d4d4d4', flexShrink: 0 }}>
            {['#ff5f57', '#ffbd2e', '#28ca41'].map((c, i) => (
              <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
            ))}
            <div style={{ flex: 1, background: '#ddd', borderRadius: 3, height: 16, marginLeft: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 8, color: '#777', fontFamily: "'Inter', sans-serif" }}>app.io/messages</span>
            </div>
          </div>

          {/* Top bar */}
          <div style={{ padding: '7px 14px', borderBottom: '1px solid #3e4148', background: '#2f3035', flexShrink: 0 }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#ccc' }}>Emergency Ops — All Channels</span>
          </div>

          {/* Messages — charcoal background, white bubbles */}
          <div style={{ flex: 1, overflowY: 'hidden', background: '#36393f', padding: '6px 0' }}>
            {msgData.map((msg, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '5px 12px' }}>
                {msg.isSystem ? (
                  /* System message — styled same as chat messages (friction callout 2) */
                  <>
                    <div style={{ width: 22, height: 22, borderRadius: 4, background: '#555', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, color: '#888', marginBottom: 2 }}>System · {msg.time}</div>
                      <div style={{ background: '#fff', borderRadius: '0 10px 10px 10px', padding: '5px 9px', display: 'inline-block' }}>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#222' }}>{msg.text}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Avatar user={msg.user!} size={22} />
                    <div style={{ maxWidth: 370 }}>
                      <div style={{ display: 'flex', gap: 5, marginBottom: 2 }}>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, fontWeight: 700, color: avatarColors[msg.user!] }}>{users[msg.user!]}</span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 7, color: '#aaa' }}>{msg.time}</span>
                      </div>
                      {/* White bubble on charcoal */}
                      <div style={{
                        background: '#fff',
                        borderRadius: '0 10px 10px 10px',
                        padding: '6px 10px',
                        border: msg.isOrphan ? '1px solid #fecaca' : '1px solid rgba(255,255,255,0.1)',
                        display: 'inline-block',
                        maxWidth: 340,
                        boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
                      }}>
                        <span style={{
                          fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#222', lineHeight: 1.4,
                          fontStyle: msg.isOrphan ? 'italic' : 'normal',
                        }}>{msg.text}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom title */}
        <div style={{ position: 'absolute', bottom: 14, left: MOCKUP_X, zIndex: 15 }}>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: '#bbb', fontWeight: 500 }}>
            Old messaging experience — annotated friction points
          </span>
        </div>
      </div>
    </FigureCanvas>
  );
}
