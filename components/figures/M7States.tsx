import { FigureCanvas } from './FigureCanvas';

const CYAN = '#0C5A6D';
const VIOLET = '#5B21B6';

const users = ['Chief Mitchell', 'Cpt. Rivera', 'Logistics Cmd'];
const avatarColors = ['#1D4ED8', '#DC2626', '#059669'];

function Avatar({ user, size = 28 }: { user: number; size?: number }) {
  const parts = users[user].split(' ');
  const initials = parts[0][0] + (parts[1]?.[0] ?? '');
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', background: avatarColors[user], display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: size * 0.33, fontWeight: 700, color: '#fff' }}>{initials.toUpperCase()}</span>
    </div>
  );
}

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

function StateLabel({ label }: { label: string }) {
  return (
    <div style={{ position: 'absolute', top: 12, left: 16, fontFamily: "'Caveat', cursive", fontSize: 19, fontWeight: 600, color: CYAN }}>
      {label}
    </div>
  );
}

function HoverBar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', background: '#fff', border: '1px solid #e0e0e0', borderRadius: 6, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.1)' }}>
      {['👍', '❤️', '😂'].map((emoji, j) => (
        <div key={j} style={{ padding: '4px 6px', cursor: 'pointer' }}>
          <span style={{ fontSize: 13 }}>{emoji}</span>
        </div>
      ))}
      <div style={{ padding: '4px 6px', cursor: 'pointer' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#555' }}>☺</span>
      </div>
      <div style={{ padding: '4px 6px', cursor: 'pointer' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#555' }}>↩</span>
      </div>
      <div style={{ padding: '4px 5px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <StarIcon size={12} color="#555" />
      </div>
      <div style={{ padding: '4px 5px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <LinkIcon size={12} color="#555" />
      </div>
      <div style={{ padding: '4px 6px', cursor: 'pointer' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#555' }}>⋯</span>
      </div>
    </div>
  );
}

const CARD_W = 460;
const CARD_H = 430;

/* ── Default ── */
function StateDefault() {
  return (
    <div style={{ width: CARD_W, height: CARD_H, background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, position: 'relative', overflow: 'hidden' }}>
      <StateLabel label="Default" />
      <div style={{ padding: '44px 16px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <Avatar user={0} size={32} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 3 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700, color: avatarColors[0] }}>Chief Mitchell</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#aaa' }}>8:11 AM</span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#222', lineHeight: 1.6, margin: 0 }}>
              Fire has crossed Oak Ave. Re-routing all units via Elm Street. Do NOT use Route 9.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Hover ── */
function StateHover() {
  return (
    <div style={{ width: CARD_W, height: CARD_H, background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, position: 'relative', overflow: 'hidden' }}>
      <StateLabel label="Hover" />
      <div style={{ padding: '44px 16px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: '#f5f5f5', borderRadius: 6, padding: '10px 10px', position: 'relative' }}>
          <Avatar user={1} size={32} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 3 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700, color: avatarColors[1] }}>Cpt. Rivera</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#aaa' }}>8:14 AM</span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#222', lineHeight: 1.6, margin: 0 }}>
              Copy — evacuating Zone 3. 420 residents displaced, need buses at South Gate.
            </p>
          </div>
          <div style={{ position: 'absolute', top: -16, right: 10 }}>
            <HoverBar />
          </div>
        </div>
        <div style={{ marginTop: 28, display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          {['👍 React', '❤️ React', '😂 React', '☺ Add emoji', '↩ Reply in thread', '★ Star', '⛓ Copy link', '⋯ More'].map((tip, i) => (
            <div key={i} style={{ padding: '2px 8px', background: '#f5f5f5', borderRadius: 10, border: '1px solid #e5e5e5' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#666' }}>{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Quoted message — Discord style, quote bar on top (matches M6 anatomy) ── */
function StateQuoted() {
  return (
    <div style={{ width: CARD_W, height: CARD_H, background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, position: 'relative', overflow: 'hidden' }}>
      <StateLabel label="Quoted message" />
      <div style={{ padding: '44px 16px 16px' }}>
        {/* Discord-style quote bar pinned ABOVE the avatar row */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '6px 10px', marginBottom: 8,
          background: '#f8f7ff',
          border: `1px solid ${VIOLET}18`,
          borderLeft: `3px solid ${VIOLET}60`,
          borderRadius: '0 6px 6px 0',
        }}>
          <div style={{ width: 16, height: 16, borderRadius: '50%', background: avatarColors[0], display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 5, fontWeight: 700, color: '#fff' }}>CM</span>
          </div>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: '#444' }}>Chief Mitchell</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#888', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Fire has crossed Oak Ave. Re-routing via Elm Street…
          </span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: VIOLET, textDecoration: 'underline', cursor: 'pointer', flexShrink: 0, whiteSpace: 'nowrap' }}>
            → Jump to message
          </span>
        </div>

        {/* Reply message — avatar + name + body */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <Avatar user={1} size={32} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 3 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700, color: avatarColors[1] }}>Cpt. Rivera</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#aaa' }}>8:14 AM</span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#222', lineHeight: 1.6, margin: 0 }}>
              Confirmed — en route now via Elm Street. Avoided Route 9 as directed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Long content ── */
function StateLongContent() {
  return (
    <div style={{ width: CARD_W, height: CARD_H, background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, position: 'relative', overflow: 'hidden' }}>
      <StateLabel label="Long content" />
      <div style={{ padding: '44px 16px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <Avatar user={2} size={32} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 3 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700, color: avatarColors[2] }}>Logistics Cmd</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#aaa' }}>8:30 AM</span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#222', lineHeight: 1.6, margin: 0 }}>
              Situation report: North Shelter at 30% water capacity — resupply ETA 10:00. East Side High at 87% — overflow arranged at Westfield (120 persons). All resource requests due through WebEOC…
            </p>
            <div style={{ marginTop: 8 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: CYAN, fontWeight: 600, cursor: 'pointer' }}>Show more ↓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── System message — Discord style ── */
function StateSystem() {
  return (
    <div style={{ width: CARD_W, height: CARD_H, background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, position: 'relative', overflow: 'hidden' }}>
      <StateLabel label="System message" />
      <div style={{ padding: '44px 16px 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
          <Avatar user={0} size={28} />
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: avatarColors[0], marginBottom: 2 }}>Chief Mitchell</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#222' }}>All units proceed to secondary staging.</div>
          </div>
        </div>
        {/* Discord-style: centered muted rule, no avatar no bubble */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ flex: 1, height: 1, background: '#eee' }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#bbb', whiteSpace: 'nowrap' }}>Riley S. joined the channel</span>
          <div style={{ flex: 1, height: 1, background: '#eee' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ flex: 1, height: 1, background: '#eee' }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#bbb', whiteSpace: 'nowrap' }}>Channel created by EOC Admin</span>
          <div style={{ flex: 1, height: 1, background: '#eee' }} />
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
          <Avatar user={1} size={28} />
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: avatarColors[1], marginBottom: 2 }}>Cpt. Rivera</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#222' }}>Copy. En route to secondary location.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Restricted access ── */
function StateRestricted() {
  return (
    <div style={{ width: CARD_W, height: CARD_H, background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, position: 'relative', overflow: 'hidden' }}>
      <StateLabel label="Restricted access" />
      <div style={{ padding: '44px 16px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#e5e5e5', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: 10, marginBottom: 7 }}>
              <div style={{ height: 10, width: 70, background: '#eee', borderRadius: 4 }} />
              <div style={{ height: 10, width: 36, background: '#eee', borderRadius: 4 }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', background: '#f9f9f9', borderRadius: 6, border: '1px solid #eee' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                <rect x="3" y="6.5" width="8" height="5.5" rx="1" stroke="#bbb" strokeWidth="1.3" />
                <path d="M4.5 6.5V4.5C4.5 3.12 5.62 2 7 2s2.5 1.12 2.5 2.5v2" stroke="#bbb" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#888' }}>
                You don't have permission to view this message.
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: CYAN, fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', whiteSpace: 'nowrap' }}>
                Request access
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, opacity: 0.6 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#e5e5e5', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ height: 10, width: 55, background: '#eee', borderRadius: 4, marginBottom: 7 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', background: '#f9f9f9', borderRadius: 6, border: '1px solid #eee' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                <rect x="3" y="6.5" width="8" height="5.5" rx="1" stroke="#bbb" strokeWidth="1.3" />
                <path d="M4.5 6.5V4.5C4.5 3.12 5.62 2 7 2s2.5 1.12 2.5 2.5v2" stroke="#bbb" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#888' }}>Message hidden.</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: CYAN, fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', whiteSpace: 'nowrap' }}>Request access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function M7States() {
  return (
    <FigureCanvas width={1600} height={1060}>
      <div style={{ width: '100%', height: '100%', background: '#f7f7f7', padding: '34px 26px', display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: 36, fontWeight: 700, color: '#0a0a0a' }}>
            Message state gallery
          </span>
        </div>
        <div style={{ display: 'flex', gap: 22, justifyContent: 'center' }}>
          {[<StateDefault key="d" />, <StateHover key="h" />, <StateQuoted key="q" />]}
        </div>
        <div style={{ display: 'flex', gap: 22, justifyContent: 'center' }}>
          {[<StateLongContent key="l" />, <StateSystem key="s" />, <StateRestricted key="res" />]}
        </div>
      </div>
    </FigureCanvas>
  );
}
