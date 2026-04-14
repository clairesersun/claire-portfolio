import { FigureCanvas } from './FigureCanvas';
import { BrowserFrame } from './BrowserFrame';

const CYAN = '#0C5A6D';
const VIOLET = '#5B21B6';

const users = [
  'Chief Mitchell', 'Cpt. Rivera', 'Logistics Cmd', 'Incident Cmd',
  'EOC Dispatch', 'Riley S.', 'Jordan P.', 'Casey B.',
];
const avatarColors = ['#1D4ED8', '#DC2626', '#059669', '#7C3AED', '#D97706', '#0891B2', '#9333EA', '#B45309'];

function Avatar({ user, size = 32 }: { user: number; size?: number }) {
  const parts = users[user].split(' ');
  const initials = parts.length >= 2 ? parts[0][0] + parts[1][0] : parts[0].substring(0, 2);
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: avatarColors[user],
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: size * 0.34, fontWeight: 700, color: '#fff' }}>{initials.toUpperCase()}</span>
    </div>
  );
}

function LinkIcon({ size = 12, color = '#555' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M5.5 8.5a3 3 0 004.24 0l1.5-1.5a3 3 0 00-4.24-4.24L6 3.76" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M8.5 5.5a3 3 0 00-4.24 0L2.76 7a3 3 0 004.24 4.24L8 10.24" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon({ size = 12, color = '#555' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M7 1.5l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 9.321l-3.09 1.628.59-3.44L2 5.132l3.455-.503L7 1.5z"
        stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── BEFORE: SMS-style chat bubbles, all left-aligned, word-doc toolbar ───── */
const beforeMessages = [
  { user: 0, text: 'All units, report to staging area at Maple & 5th Ave by 0800. Accountability check is mandatory before deployment.', time: '7:52 AM' },
  { user: 1, text: 'Copy. Evacuating Zone 3 now — approx. 420 residents displaced. Need additional buses at South Gate immediately.', time: '7:54 AM' },
  { user: 2, text: 'Water supply update: North Shelter is at 30% capacity. Submitting resupply request to Red Cross now.', time: '7:58 AM' },
  { user: 0, text: 'Re: the routing issue from this morning', time: '8:02 AM', orphan: true },
  { user: 1, text: 'Received.', time: '8:03 AM' },
  { user: 3, text: 'Fire has crossed Oak Ave. Re-routing all units via Elm Street. Update your GPS. Do NOT use Route 9.', time: '8:11 AM' },
  { user: 4, text: 'EOC confirmed — ICS structure active as of 14:00 hrs. All resource requests through WebEOC before end of hour.', time: '8:15 AM' },
  { user: 2, text: 'Copy that.', time: '8:16 AM' },
  { user: 1, text: 'Shelter capacity at East Side High is at 87%. Actively seeking overflow options in adjacent zones. Stand by for update.', time: '8:22 AM' },
  { user: 5, text: 'On it. Coordinating with Westfield facility now.', time: '8:23 AM' },
];

function WordDocToolbar() {
  const groups = [
    ['B', 'I', 'U', 'S̶'],
    ['≡', '⬛', '⬛'],
    ['•', '1.', '↩', '↪'],
    ['∞', '📎', '📷', '📊'],
    ['☺', '⋯'],
  ];
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 6, overflow: 'hidden', margin: '0 10px 8px', flexShrink: 0 }}>
      {/* Top toolbar — Word/Google Docs style */}
      <div style={{ background: '#f5f5f5', borderBottom: '1px solid #e0e0e0', padding: '4px 8px', display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
        {/* Font name */}
        <div style={{ padding: '2px 5px', border: '1px solid #d0d0d0', borderRadius: 2, background: '#fff', marginRight: 3, display: 'flex', alignItems: 'center', gap: 3 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, color: '#333' }}>Normal text</span>
          <span style={{ fontSize: 7, color: '#666' }}>▾</span>
        </div>
        {/* Font size */}
        <div style={{ padding: '2px 4px', border: '1px solid #d0d0d0', borderRadius: 2, background: '#fff', marginRight: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, color: '#333' }}>11</span>
          <span style={{ fontSize: 7, color: '#666' }}>▾</span>
        </div>
        <div style={{ width: 1, height: 14, background: '#ccc', margin: '0 3px' }} />
        {/* B I U S */}
        {[['B', 700], ['I', 400], ['U', 400], ['S̶', 400]].map(([t, w]) => (
          <div key={String(t)} style={{ width: 20, height: 20, borderRadius: 2, border: '1px solid transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#333', fontWeight: Number(w) }}>{String(t)}</span>
          </div>
        ))}
        <div style={{ width: 1, height: 14, background: '#ccc', margin: '0 3px' }} />
        {/* Text colour, highlight */}
        {['A', '✎'].map((ic) => (
          <div key={ic} style={{ width: 20, height: 20, borderRadius: 2, border: '1px solid transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#333' }}>{ic}</span>
          </div>
        ))}
        <div style={{ width: 1, height: 14, background: '#ccc', margin: '0 3px' }} />
        {/* Lists */}
        {['•', '1.', '☰', '⊞'].map((ic) => (
          <div key={ic} style={{ width: 20, height: 20, borderRadius: 2, border: '1px solid transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#555' }}>{ic}</span>
          </div>
        ))}
        <div style={{ width: 1, height: 14, background: '#ccc', margin: '0 3px' }} />
        {/* Link, image, table, emoji */}
        {['🔗', '📎', '⊞', '☺'].map((ic) => (
          <div key={ic} style={{ width: 20, height: 20, borderRadius: 2, border: '1px solid transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: 9, color: '#555' }}>{ic}</span>
          </div>
        ))}
      </div>
      {/* Text area */}
      <div style={{ padding: '7px 10px', background: '#fff', minHeight: 30 }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#ccc' }}>Type a message…</span>
      </div>
      {/* Bottom bar — REMOVED (no send button, no character count) */}
    </div>
  );
}

function BeforeMessages() {
  return (
    /* Charcoal background — SMS bubble style */
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#36393f' }}>
      {/* No channel header */}
      <div style={{ flex: 1, overflowY: 'hidden', padding: '6px 0' }}>
        {beforeMessages.map((msg, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '5px 12px' }}>
            <Avatar user={msg.user} size={26} />
            <div style={{ maxWidth: 400 }}>
              <div style={{ display: 'flex', gap: 5, marginBottom: 2 }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, color: avatarColors[msg.user] }}>
                  {users[msg.user]}
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, color: '#aaa' }}>{msg.time}</span>
              </div>
              {/* SMS bubble — white on charcoal */}
              <div style={{
                background: '#fff',
                borderRadius: '0 12px 12px 12px',
                padding: '7px 11px',
                border: msg.orphan ? '1px solid #fecaca' : '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#222',
                  lineHeight: 1.5, fontStyle: msg.orphan ? 'italic' : 'normal',
                }}>{msg.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Word/Google-Docs-style composer */}
      <WordDocToolbar />
    </div>
  );
}

/* ─── AFTER: light-themed, Discord-style left-aligned ───────────────────────── */
const afterMessages = [
  { user: 0, text: 'All units, report to staging area at Maple & 5th Ave by 0800. Accountability check mandatory.', time: '7:52 AM', threadCount: 3 },
  { user: 1, text: 'Copy. Evacuating Zone 3 — approx. 420 residents displaced. Need additional buses at South Gate.', time: '7:54 AM' },
  { user: 3, text: 'Fire has crossed Oak Ave. Re-routing all units via Elm Street. Do NOT use Route 9.', time: '8:11 AM', showHover: true },
  { user: 4, text: 'EOC confirmed — ICS structure active as of 14:00 hours. All requests through WebEOC portal.', time: '8:15 AM' },
  { user: 2, text: 'Copy that.', time: '8:16 AM' },
  { user: 5, text: 'Shelter overflow confirmed at Westfield. Capacity for 120 additional residents.', time: '8:23 AM', reactions: [{ emoji: '👍', count: 3 }] },
];

function AfterMsgRow({
  user, text, time, threadCount, reactions, showHover,
}: {
  user: number; text: string; time: string;
  threadCount?: number; reactions?: { emoji: string; count: number }[];
  showHover?: boolean;
}) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 10,
      padding: '7px 14px',
      background: showHover ? '#f5f5f5' : '#fff',
      position: 'relative',
    }}>
      <Avatar user={user} size={32} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 2 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: avatarColors[user] }}>
            {users[user]}
          </span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#aaa' }}>{time}</span>
        </div>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#222', lineHeight: 1.5 }}>{text}</span>

        {/* Reactions */}
        {reactions && reactions.length > 0 && (
          <div style={{ display: 'flex', gap: 4, marginTop: 4 }}>
            {reactions.map((r, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 3,
                padding: '2px 7px', borderRadius: 10,
                background: '#f0edf8', border: `1px solid ${VIOLET}30`,
              }}>
                <span style={{ fontSize: 11 }}>{r.emoji}</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: VIOLET, fontWeight: 600 }}>{r.count}</span>
              </div>
            ))}
          </div>
        )}

        {/* Thread badge — no emoji before it */}
        {threadCount != null && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            marginTop: 5, padding: '3px 10px', borderRadius: 4,
            background: '#f0f4f8', border: '1px solid #dde5ef', cursor: 'pointer',
          }}>
            <div style={{ display: 'flex' }}>
              {[0, 1, 2].map(j => (
                <div key={j} style={{
                  width: 14, height: 14, borderRadius: '50%',
                  background: avatarColors[j + 1],
                  border: '1.5px solid #f0f4f8',
                  marginLeft: j > 0 ? -4 : 0,
                }} />
              ))}
            </div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: CYAN, fontWeight: 600 }}>
              {threadCount} replies
            </span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#aaa' }}>Last reply today</span>
          </div>
        )}
      </div>

      {/* Hover action bar — light themed, no dividers */}
      {showHover && (
        <div style={{
          position: 'absolute', top: -14, right: 14,
          display: 'flex', alignItems: 'center',
          background: '#fff', border: '1px solid #e0e0e0',
          borderRadius: 6, overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
        }}>
          {['👍', '❤️', '😂'].map((emoji, j) => (
            <div key={j} style={{ padding: '5px 7px', cursor: 'pointer' }}>
              <span style={{ fontSize: 13 }}>{emoji}</span>
            </div>
          ))}
          <div style={{ padding: '5px 7px', cursor: 'pointer' }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#555' }}>☺</span>
          </div>
          <div style={{ padding: '5px 7px', cursor: 'pointer' }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#555' }}>↩</span>
          </div>
          <div style={{ padding: '5px 6px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <StarIcon size={13} color="#555" />
          </div>
          <div style={{ padding: '5px 6px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <LinkIcon size={13} color="#555" />
          </div>
          <div style={{ padding: '5px 7px', cursor: 'pointer' }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#555' }}>⋯</span>
          </div>
        </div>
      )}
    </div>
  );
}

function AfterMessages() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff' }}>
      <div style={{ padding: '10px 14px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700, color: '#111' }}>
          El Segundo School Teachers Room
        </span>
        <div style={{ flex: 1 }} />
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="5.5" cy="5.5" r="4" stroke="#bbb" strokeWidth="1.3" />
          <line x1="8.5" y1="8.5" x2="12" y2="12" stroke="#bbb" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div style={{ flex: 1, overflowY: 'hidden' }}>
        {afterMessages.map((msg, i) => (
          <AfterMsgRow key={i} {...msg} />
        ))}
      </div>
      <div style={{ padding: '8px 12px', flexShrink: 0 }}>
        <div style={{ background: '#f5f5f5', borderRadius: 8, padding: '9px 14px', border: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#aaa', flex: 1 }}>
            Message El Segundo School Teachers Room
          </span>
          <span style={{ fontSize: 14, color: '#bbb' }}>☺</span>
        </div>
      </div>
    </div>
  );
}

export function M1MessagingHero() {
  return (
    <FigureCanvas width={1600} height={900}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', background: '#e8e8e8' }}>
        <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
          {/* LEFT — Before */}
          <div style={{ width: 790, display: 'flex', flexDirection: 'column', padding: '24px 24px 16px' }}>
            <BrowserFrame url="app.io/messages" label="Before" background="#fff" style={{ flex: 1 }}>
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <BeforeMessages />
              </div>
            </BrowserFrame>
          </div>
          <div style={{ width: 1, background: '#ccc', flexShrink: 0, margin: '24px 0 0' }} />
          {/* RIGHT — After */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '24px 24px 16px' }}>
            <BrowserFrame url="app.io/messages" label="After" background="#fff" style={{ flex: 1 }}>
              <AfterMessages />
            </BrowserFrame>
          </div>
        </div>
      </div>
    </FigureCanvas>
  );
}