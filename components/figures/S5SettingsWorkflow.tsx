import { FigureCanvas } from './FigureCanvas';
import { BrowserFrame } from './BrowserFrame';

const VIOLET = '#5B21B6';
const GRAY_BORDER = '#bdbdbd';
const GRAY_LABEL = '#9e9e9e';

// Flat sidebar — no section headings, matches S1 After exactly
const sidebarItems = [
  { id: 'account', label: 'Account' },
  { id: 'profiles', label: 'Profiles' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'sessions', label: 'Sessions' },
  { id: 'appearance', label: 'Appearance' },
  { id: 'accessibility', label: 'Accessibility' },
  { id: 'keybinds', label: 'Keybinds' },
  { id: 'language', label: 'Language' },
  { id: 'mobile', label: 'Mobile App' },
  { id: 'advanced', label: 'Advanced' },
];

function Sidebar({ active }: { active: string }) {
  return (
    <div style={{ width: 108, background: '#f2f3f5', borderRight: '1px solid #e3e3e3', padding: '10px 6px', flexShrink: 0, overflowY: 'hidden' }}>
      {sidebarItems.map((item) => (
        <div key={item.id} style={{ padding: '5px 7px', borderRadius: 3, background: item.id === active ? VIOLET + '15' : 'transparent', marginBottom: 1 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: item.id === active ? VIOLET : '#555', fontWeight: item.id === active ? 600 : 400 }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function Toggle({ on, violet }: { on: boolean; violet?: boolean }) {
  const bg = on ? (violet ? VIOLET : '#22c55e') : '#e0e0e0';
  return (
    <div style={{ width: 30, height: 17, borderRadius: 8.5, background: bg, position: 'relative', flexShrink: 0 }}>
      <div style={{ position: 'absolute', top: 2.5, left: on ? 15 : 3, width: 12, height: 12, borderRadius: '50%', background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }} />
    </div>
  );
}

function SmallToggle({ on }: { on?: boolean }) {
  return (
    <div style={{ width: 22, height: 12, borderRadius: 6, background: on ? VIOLET : '#d1d5db', position: 'relative', flexShrink: 0 }}>
      <div style={{ position: 'absolute', top: 1.5, left: on ? 12 : 2, width: 9, height: 9, borderRadius: '50%', background: '#fff' }} />
    </div>
  );
}

function FrameBadge({ n }: { n: number }) {
  return (
    <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff', border: `2px solid ${VIOLET}`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: -10, left: -10, zIndex: 10, boxShadow: `0 2px 8px rgba(91,33,182,0.2)` }}>
      <span style={{ fontFamily: "'Caveat', cursive", fontSize: 22, fontWeight: 700, color: VIOLET }}>{n}</span>
    </div>
  );
}

function Arrow() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, width: 44 }}>
      <svg width="44" height="24" viewBox="0 0 44 24">
        <line x1="2" y1="12" x2="36" y2="12" stroke={VIOLET} strokeWidth="2" />
        <polyline points="30,6 42,12 30,18" fill="none" stroke={VIOLET} strokeWidth="2" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* Gray Vuetify outlined field */
function VField({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: -7, left: 8, background: '#fff', padding: '0 3px', fontFamily: "'Inter', sans-serif", fontSize: 8, color: GRAY_LABEL, zIndex: 1 }}>
        {label}
      </div>
      <div style={{ border: `1.5px solid ${GRAY_BORDER}`, borderRadius: 4, padding: '5px 8px', background: '#fff' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#0a0a0a' }}>{value}</span>
      </div>
    </div>
  );
}

/* Frame 1 — Account (matches S1 After: flat sidebar, user row, Vuetify phone card) */
function Frame1() {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar active="account" />
      <div style={{ flex: 1, padding: '12px 12px', overflowY: 'hidden' }}>
        {/* User overview */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: VIOLET, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, color: '#fff' }}>JD</span>
          </div>
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, color: '#0a0a0a' }}>Jane Doe</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, color: '#888' }}>UX Designer</div>
          </div>
        </div>

        {/* Email — read-only gray outlined */}
        <div style={{ marginBottom: 10, position: 'relative' }}>
          <div style={{ position: 'absolute', top: -7, left: 8, background: '#fff', padding: '0 3px', fontFamily: "'Inter', sans-serif", fontSize: 8, color: '#999', zIndex: 1 }}>Email address</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 8px', background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: 4, opacity: 0.8 }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#666', flex: 1 }}>jane.doe@elsegundousd.net</span>
            <div style={{ padding: '1px 5px', background: '#f3f0ff', borderRadius: 6, border: `1px solid ${VIOLET}25` }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 7, color: VIOLET, fontWeight: 600 }}>Read-only</span>
            </div>
          </div>
        </div>

        {/* Phone section label */}
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Phone Numbers</div>

        {/* Phone card — gray outline, no fill, primary top-right, stacked options */}
        <div style={{ border: '1px solid #e0e0e0', borderRadius: 5, background: '#fff', marginBottom: 6 }}>
          {/* Primary top-right */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 10px 6px' }}>
            <div style={{ padding: '1px 6px', background: '#d1fae5', borderRadius: 8, border: '1px solid #6ee7b7' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 7, color: '#059669', fontWeight: 600 }}>Primary</span>
            </div>
          </div>
          {/* Input */}
          <div style={{ padding: '8px 10px 10px' }}>
            <VField label="Phone number" value="+1 (310) 555-0192" />
          </div>
          {/* Options stacked vertically */}
          <div style={{ borderTop: '1px solid #f0f0f0', padding: '6px 10px', display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#444', flex: 1 }}>Make visible to all orgs</span>
              <SmallToggle on={true} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#444', flex: 1 }}>Enable SMS</span>
              <SmallToggle on={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const notifToggles = ['Email digest', 'Push alerts', 'SMS', 'Mentions'];

function Frame2() {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar active="notifications" />
      <div style={{ flex: 1, padding: '12px 12px', overflowY: 'hidden' }}>
        {notifToggles.map((t) => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', padding: '9px 0', borderBottom: '1px solid #f0f0f0' }}>
            <span style={{ flex: 1, fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#333' }}>{t}</span>
            <Toggle on={false} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden' }}>
        <Sidebar active="notifications" />
        <div style={{ flex: 1, padding: '12px 12px', overflowY: 'hidden' }}>
          {notifToggles.map((t) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', padding: '9px 0', borderBottom: '1px solid #f0f0f0', background: t === 'Push alerts' ? VIOLET + '05' : 'transparent', borderRadius: 4 }}>
              <span style={{ flex: 1, fontFamily: "'Inter', sans-serif", fontSize: 11, color: t === 'Push alerts' ? VIOLET : '#333', fontWeight: t === 'Push alerts' ? 600 : 400 }}>{t}</span>
              <Toggle on={t === 'Push alerts'} violet />
            </div>
          ))}
        </div>
      </div>
      {/* Save banner — no "critical alerts" note */}
      <div style={{ flexShrink: 0, background: '#fff', borderTop: '1px solid #e0e0e0', padding: '8px 12px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, boxShadow: '0 -2px 8px rgba(0,0,0,0.06)' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#888', flex: 1 }}>Unsaved changes</span>
        <div style={{ padding: '5px 10px', borderRadius: 4, border: '1px solid #ddd', cursor: 'pointer' }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#555' }}>Cancel</span>
        </div>
        <div style={{ padding: '5px 12px', borderRadius: 4, background: VIOLET, cursor: 'pointer' }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#fff', fontWeight: 600 }}>Save changes</span>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div style={{ display: 'flex', height: '100%', flexDirection: 'column', position: 'relative' }}>
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar active="notifications" />
        <div style={{ flex: 1, padding: '12px 12px', overflowY: 'hidden' }}>
          {notifToggles.map((t) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', padding: '9px 0', borderBottom: '1px solid #f0f0f0' }}>
              <span style={{ flex: 1, fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#333' }}>{t}</span>
              <Toggle on={t === 'Push alerts'} violet />
            </div>
          ))}
        </div>
      </div>
      {/* Toast */}
      <div style={{ position: 'absolute', bottom: 14, right: 14, background: '#E8F5E9', border: '1px solid #A5D6A7', borderLeft: '4px solid #4CAF50', borderRadius: 6, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 2px 10px rgba(0,0,0,0.08)', zIndex: 20 }}>
        <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#4CAF50', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#1B5E20', fontWeight: 500 }}>Settings saved.</span>
      </div>
    </div>
  );
}

const frames = [
  { n: 1, title: 'Open Settings → Account', content: <Frame1 /> },
  { n: 2, title: 'Navigate to Notifications', content: <Frame2 /> },
  { n: 3, title: 'Toggle Push alerts', content: <Frame3 /> },
  { n: 4, title: 'Saved ✓', content: <Frame4 /> },
];

export function S5SettingsWorkflow() {
  return (
    <FigureCanvas width={1600} height={700}>
      <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, padding: '40px 32px' }}>
        {frames.map((frame, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <div style={{ position: 'relative', width: 340, flexShrink: 0 }}>
              <FrameBadge n={frame.n} />
              <div style={{ textAlign: 'center', marginBottom: 10, fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: VIOLET, letterSpacing: '0.05em' }}>
                {frame.title}
              </div>
              <BrowserFrame url="app.io/settings" style={{ height: 520, overflow: 'hidden' }}>
                <div style={{ height: '100%', overflow: 'hidden' }}>{frame.content}</div>
              </BrowserFrame>
            </div>
            {i < frames.length - 1 && <Arrow />}
          </div>
        ))}
      </div>
    </FigureCanvas>
  );
}