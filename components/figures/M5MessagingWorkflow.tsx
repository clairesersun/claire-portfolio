import { FigureCanvas } from './FigureCanvas';
import { BrowserFrame } from './BrowserFrame';

const CYAN = '#0C5A6D';
const VIOLET = '#5B21B6';

const users = ['Chief Mitchell', 'Cpt. Rivera', 'Logistics Cmd', 'Incident Cmd', 'EOC Dispatch'];
const avatarColors = ['#1D4ED8', '#DC2626', '#059669', '#7C3AED', '#D97706'];

function Avatar({ user, size = 22 }: { user: number; size?: number }) {
  const parts = users[user].split(' ');
  const initials = parts[0][0] + (parts[1]?.[0] ?? '');
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', background: avatarColors[user], display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: size * 0.33, fontWeight: 700, color: '#fff' }}>{initials.toUpperCase()}</span>
    </div>
  );
}

function StarIcon({ size = 11, color = '#666' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M7 1.5l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 9.321l-3.09 1.628.59-3.44L2 5.132l3.455-.503L7 1.5z"
        stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function LinkIcon({ size = 11, color = '#666' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M5.5 8.5a3 3 0 004.24 0l1.5-1.5a3 3 0 00-4.24-4.24L6 3.76" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M8.5 5.5a3 3 0 00-4.24 0L2.76 7a3 3 0 004.24 4.24L8 10.24" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function Badge({ n }: { n: number }) {
  return (
    <div style={{ position: 'absolute', top: -10, left: -10, zIndex: 10, width: 36, height: 36, borderRadius: '50%', background: '#fff', border: `2px solid ${CYAN}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 2px 8px rgba(12,90,109,0.2)` }}>
      <span style={{ fontFamily: "'Caveat', cursive", fontSize: 20, fontWeight: 700, color: CYAN }}>{n}</span>
    </div>
  );
}

function MsgRow({ user, text, highlighted, threadBadge, showHoverBar }: {
  user: number; text: string; highlighted?: boolean; threadBadge?: string; showHoverBar?: boolean;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, padding: '5px 10px', background: highlighted ? '#f5f5f5' : '#fff', position: 'relative' }}>
      <Avatar user={user} size={20} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', gap: 4, alignItems: 'baseline', marginBottom: 1 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, fontWeight: 700, color: avatarColors[user] }}>{users[user]}</span>
        </div>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#333', lineHeight: 1.4 }}>{text}</span>
        {threadBadge && (
          <div style={{ marginTop: 4 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 8px', borderRadius: 4, background: '#f0f4f8', border: '1px solid #dde5ef', cursor: 'pointer' }}>
              <div style={{ display: 'flex' }}>
                {[0, 1, 2].map(j => (
                  <div key={j} style={{ width: 10, height: 10, borderRadius: '50%', background: avatarColors[j + 1], border: '1px solid #f0f4f8', marginLeft: j > 0 ? -3 : 0 }} />
                ))}
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 7, fontWeight: 600, color: CYAN }}>{threadBadge}</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 6, color: '#aaa' }}>· Last reply today</span>
            </div>
          </div>
        )}
      </div>
      {showHoverBar && (
        <div style={{ position: 'absolute', top: -11, right: 8, display: 'flex', background: '#fff', border: '1px solid #e0e0e0', borderRadius: 4, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          {['👍', '❤️', '😂', '☺', '↩'].map((ic, j) => (
            <div key={j} style={{ padding: '3px 5px', cursor: 'pointer' }}>
              <span style={{ fontSize: j < 3 ? 10 : 9, color: j >= 3 ? '#666' : undefined }}>{ic}</span>
            </div>
          ))}
          <div style={{ padding: '3px 5px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <StarIcon size={9} color="#666" />
          </div>
          <div style={{ padding: '3px 5px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <LinkIcon size={9} color="#666" />
          </div>
          <div style={{ padding: '3px 5px', cursor: 'pointer' }}>
            <span style={{ fontSize: 9, color: '#666' }}>⋯</span>
          </div>
        </div>
      )}
    </div>
  );
}

const channelMsgs = [
  { user: 0, text: 'All units to staging area at Maple & 5th by 0800.' },
  { user: 1, text: 'Copy. Evacuating Zone 3 — 420 residents displaced.' },
  { user: 2, text: 'North Shelter at 30% water capacity. Requesting resupply.' },
  { user: 3, text: 'Fire crossed Oak Ave — re-routing via Elm Street.' },
  { user: 4, text: 'EOC: ICS structure active as of 14:00 hours.' },
];

/* Thread popup — send icon ONLY appears when step='typing' (Frame 3) */
function ThreadPopup({ step }: { step: 'open' | 'typing' | 'replies' | 'full' }) {
  const replies = [
    { user: 1, text: 'Confirmed — en route now.' },
    { user: 2, text: 'Copy. Submitting accountability.' },
    { user: 3, text: "I'll relay to command." },
  ];
  return (
    <div style={{ position: 'absolute', top: 8, right: 8, bottom: 8, width: 185, background: '#fff', borderRadius: 6, border: '1px solid #e0e0e0', boxShadow: '0 4px 20px rgba(0,0,0,0.12)', display: 'flex', flexDirection: 'column', overflow: 'hidden', zIndex: 20 }}>
      {/* Header */}
      <div style={{ padding: '7px 10px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0, background: '#fafafa' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, fontWeight: 700, color: '#0a0a0a' }}>Thread</span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#bbb', cursor: 'pointer' }}>✕</span>
      </div>
      {/* Pinned original */}
      <div style={{ padding: '6px 8px', background: '#f9f9f9', borderBottom: '1px solid #eee', borderLeft: `2px solid ${CYAN}`, flexShrink: 0 }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 7, color: CYAN, marginBottom: 2, fontWeight: 600 }}>Original message</div>
        <div style={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
          <Avatar user={0} size={14} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, color: '#333', lineHeight: 1.3 }}>
            All units to staging area at Maple & 5th by 0800.
          </span>
        </div>
      </div>
      {/* Replies */}
      <div style={{ flex: 1, overflowY: 'hidden', padding: '4px 0' }}>
        {(step === 'replies' || step === 'full') && replies.map((r, i) => (
          <div key={i} style={{ display: 'flex', gap: 5, padding: '4px 8px', alignItems: 'flex-start' }}>
            <Avatar user={r.user} size={14} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 7, fontWeight: 700, color: avatarColors[r.user], marginBottom: 1 }}>{users[r.user]}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, color: '#333', lineHeight: 1.3 }}>{r.text}</div>
            </div>
          </div>
        ))}
        {step === 'typing' && (
          <div style={{ padding: '4px 8px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 7, color: '#aaa', fontStyle: 'italic' }}>Cpt. Rivera is typing…</div>
          </div>
        )}
      </div>
      {/* Composer */}
      <div style={{ padding: '5px 8px', flexShrink: 0, borderTop: '1px solid #eee' }}>
        <div style={{ background: '#f5f5f5', borderRadius: 4, padding: '5px 8px', display: 'flex', alignItems: 'center', gap: 5, border: '1px solid #e5e5e5' }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, color: step === 'typing' ? '#333' : '#aaa', flex: 1 }}>
            {step === 'typing' ? 'Confirmed — en route now.' : 'Reply in thread…'}
          </span>
          {/* Send icon ONLY on Frame 3 (step=typing) */}
          {step === 'typing' && (
            <div style={{ width: 20, height: 20, background: CYAN, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                <path d="M1.5 13L14.5 8 1.5 3V6.5L11 8 1.5 9.5V13z" fill="#fff" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <div style={{ padding: '7px 10px', borderBottom: '1px solid #eee', flexShrink: 0 }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, color: '#0a0a0a' }}>Teachers Room</span>
      </div>
      <div style={{ flex: 1, overflow: 'hidden' }}>
        {channelMsgs.map((m, i) => (
          <MsgRow key={i} user={m.user} text={m.text} highlighted={i === 0} showHoverBar={i === 0} />
        ))}
      </div>
      <div style={{ padding: '5px 8px', flexShrink: 0 }}>
        <div style={{ background: '#f5f5f5', borderRadius: 6, padding: '6px 10px', border: '1px solid #e5e5e5' }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, color: '#aaa' }}>Message Teachers Room</span>
        </div>
      </div>
    </div>
  );
}

function ChannelBase({ paddingRight = 0 }: { paddingRight?: number }) {
  return (
    <>
      <div style={{ padding: '7px 10px', borderBottom: '1px solid #eee', flexShrink: 0 }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, color: '#0a0a0a' }}>Teachers Room</span>
      </div>
      <div style={{ flex: 1, overflow: 'hidden', paddingRight }}>
        {channelMsgs.map((m, i) => (
          <MsgRow key={i} user={m.user} text={m.text} threadBadge={i === 0 && paddingRight > 0 ? '3 replies' : undefined} />
        ))}
      </div>
      <div style={{ padding: '5px 8px', flexShrink: 0 }}>
        <div style={{ background: '#f5f5f5', borderRadius: 6, padding: '6px 10px', border: '1px solid #e5e5e5' }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, color: '#aaa' }}>Message Teachers Room</span>
        </div>
      </div>
    </>
  );
}

function Frame2() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#fff', position: 'relative' }}>
      <ChannelBase paddingRight={193} />
      <ThreadPopup step="open" />
    </div>
  );
}
function Frame3() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#fff', position: 'relative' }}>
      <ChannelBase paddingRight={193} />
      <ThreadPopup step="typing" />
    </div>
  );
}
function Frame4() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#fff', position: 'relative' }}>
      <ChannelBase paddingRight={193} />
      <ThreadPopup step="replies" />
    </div>
  );
}
function Frame5() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#fff', position: 'relative' }}>
      <ChannelBase paddingRight={193} />
      <ThreadPopup step="full" />
    </div>
  );
}
function Frame6() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <div style={{ padding: '7px 10px', borderBottom: '1px solid #eee', flexShrink: 0 }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, color: '#0a0a0a' }}>Teachers Room</span>
      </div>
      <div style={{ flex: 1, overflow: 'hidden' }}>
        {channelMsgs.map((m, i) => (
          <MsgRow key={i} user={m.user} text={m.text} threadBadge={i === 0 ? '3 replies' : undefined} />
        ))}
      </div>
      <div style={{ padding: '5px 8px', flexShrink: 0 }}>
        <div style={{ background: '#f5f5f5', borderRadius: 6, padding: '6px 10px', border: '1px solid #e5e5e5' }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, color: '#aaa' }}>Message Teachers Room</span>
        </div>
      </div>
    </div>
  );
}

function HArrow() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: 32, flexShrink: 0 }}>
      <svg width="32" height="20" viewBox="0 0 32 20">
        <line x1="0" y1="10" x2="24" y2="10" stroke={CYAN} strokeWidth="1.5" />
        <polyline points="18,5 28,10 18,15" fill="none" stroke={CYAN} strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

const topRow = [
  { n: 1, title: 'New message · hover reveals actions', content: <Frame1 /> },
  { n: 2, title: 'Click "Reply in thread" → panel opens', content: <Frame2 /> },
  { n: 3, title: 'Typing reply (panel persists)', content: <Frame3 /> },
];
const bottomRow = [
  { n: 4, title: 'Reply sent · thread shows context', content: <Frame4 /> },
  { n: 5, title: 'Read full thread (panel stays open)', content: <Frame5 /> },
  { n: 6, title: 'Close panel → badge in channel', content: <Frame6 /> },
];

const FRAME_W = 448;
const FRAME_H = 400;

export function M5MessagingWorkflow() {
  return (
    <FigureCanvas width={1600} height={1060}>
      <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', flexDirection: 'column', padding: '38px 30px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 26 }}>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: 36, fontWeight: 700, color: '#0a0a0a' }}>
            Threading workflow — end to end
          </span>
        </div>
        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
          {topRow.map((frame, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: FRAME_W, flexShrink: 0 }}>
                <Badge n={frame.n} />
                <div style={{ textAlign: 'center', marginBottom: 8, fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, color: CYAN, letterSpacing: '0.04em' }}>
                  {frame.title}
                </div>
                <BrowserFrame url="app.io/messages" style={{ height: FRAME_H, overflow: 'hidden' }}>
                  <div style={{ height: '100%', overflow: 'hidden' }}>{frame.content}</div>
                </BrowserFrame>
              </div>
              {i < topRow.length - 1 && <HArrow />}
            </div>
          ))}
        </div>
        {/* Wrap arrow */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '2px 14px', marginBottom: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <svg width="36" height="38" viewBox="0 0 36 38">
              <path d="M36 0 Q36 19 18 19 Q0 19 0 34" fill="none" stroke={CYAN} strokeWidth="1.5" />
              <polyline points="-5,28 0,38 5,28" fill="none" stroke={CYAN} strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: CYAN, opacity: 0.7 }}>continues below</span>
          </div>
        </div>
        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {bottomRow.map((frame, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: FRAME_W, flexShrink: 0 }}>
                <Badge n={frame.n} />
                <div style={{ textAlign: 'center', marginBottom: 8, fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, color: CYAN, letterSpacing: '0.04em' }}>
                  {frame.title}
                </div>
                <BrowserFrame url="app.io/messages" style={{ height: FRAME_H, overflow: 'hidden' }}>
                  <div style={{ height: '100%', overflow: 'hidden' }}>{frame.content}</div>
                </BrowserFrame>
              </div>
              {i < bottomRow.length - 1 && <HArrow />}
            </div>
          ))}
        </div>
      </div>
    </FigureCanvas>
  );
}
