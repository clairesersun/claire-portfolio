import { FigureCanvas } from './FigureCanvas';

const VIOLET = '#5B21B6';
// Lighter gray — matches S1 After
const FIELD_BORDER = '#bdbdbd';
const FIELD_LABEL = '#9e9e9e';

const CARD_W = 460;
const CARD_H = 550;

function CardLabel({ label }: { label: string }) {
  return (
    <div style={{ position: 'absolute', top: 13, left: 17, fontFamily: "'Caveat', cursive", fontSize: 19, fontWeight: 600, color: VIOLET }}>
      {label}
    </div>
  );
}

function Toggle({ on, small }: { on?: boolean; small?: boolean }) {
  const w = small ? 28 : 36, h = small ? 16 : 20;
  return (
    <div style={{ width: w, height: h, borderRadius: h / 2, background: on ? VIOLET : '#d1d5db', position: 'relative', flexShrink: 0, cursor: 'pointer' }}>
      <div style={{ position: 'absolute', top: 2.5, left: on ? (small ? 14 : 19) : 3, width: small ? 11 : 15, height: small ? 11 : 15, borderRadius: '50%', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
    </div>
  );
}

/* Lighter gray Vuetify outlined field — matches S1 After */
function VField({ label, value, flex, disabled }: { label: string; value: string; flex?: number; disabled?: boolean }) {
  return (
    <div style={{ position: 'relative', flex }}>
      <div style={{ position: 'absolute', top: -8, left: 8, background: disabled ? '#f8f8f8' : '#fff', padding: '0 4px', fontFamily: "'Inter', sans-serif", fontSize: 9, color: disabled ? '#ccc' : FIELD_LABEL, zIndex: 1, lineHeight: 1 }}>
        {label}
      </div>
      <div style={{ border: `1.5px solid ${disabled ? '#e5e5e5' : FIELD_BORDER}`, borderRadius: 4, padding: '7px 10px', background: disabled ? '#f8f8f8' : '#fff', opacity: disabled ? 0.75 : 1 }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: disabled ? '#999' : '#0a0a0a' }}>{value}</span>
      </div>
    </div>
  );
}

/* Option row — label left, toggle right, no background fill */
function OptionRow({ label, on }: { label: string; on?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '4px 0' }}>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#444', flex: 1 }}>{label}</span>
      <Toggle on={on} small />
    </div>
  );
}

function PrimaryBadge() {
  return (
    <div style={{ padding: '2px 8px', background: '#d1fae5', borderRadius: 10, border: '1px solid #6ee7b7' }}>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#059669', fontWeight: 600 }}>Primary</span>
    </div>
  );
}
function MakePrimaryLink() {
  return <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: VIOLET, textDecoration: 'underline', cursor: 'pointer' }}>Make primary</span>;
}

/* ── Card 1: Org-managed email (disabled field) ── */
function CardEmail() {
  return (
    <div style={{ width: CARD_W, height: CARD_H, background: '#fff', border: '1px solid #e5e5e5', borderLeft: `3px solid ${VIOLET}`, borderRadius: 8, position: 'relative', padding: 26, display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden' }}>
      <CardLabel label="Org-managed field" />

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 26 }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="4" y="8" width="8" height="6" rx="1.5" stroke={VIOLET} strokeWidth="1.4" />
          <path d="M5.5 8V6C5.5 4.9 6.4 4 7.5 4h1C9.6 4 10.5 4.9 10.5 6v2" stroke={VIOLET} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: VIOLET }}>Managed by organization</span>
      </div>

      {/* Email — lighter gray outlined, disabled */}
      <div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>Email address</div>
        <VField label="Email address" value="jane.doe@elsegundousd.net" disabled />
        <div style={{ marginTop: 6 }}>
          <div style={{ padding: '1px 7px', display: 'inline-flex', background: '#f3f0ff', borderRadius: 8, border: `1px solid ${VIOLET}25` }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: VIOLET, fontWeight: 600 }}>Read-only</span>
          </div>
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#aaa', marginTop: 6, lineHeight: 1.5 }}>
          Managed by El Segundo USD. To update, contact <span style={{ color: VIOLET }}>admin@elsegundousd.net</span>
        </div>
      </div>

      {/* Other locked fields */}
      {['Display name', 'Work title', 'Department'].map((f) => (
        <div key={f} style={{ padding: '8px 12px', background: '#fafafa', border: '1px solid #eee', borderRadius: 5, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.5 }}>
          <div style={{ flex: 1, height: 9, background: '#e0e0e0', borderRadius: 3 }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#bbb' }}>{f}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Card 2: Phone + Address — gray outline, vertical options, primary top-right ── */
function CardContactFields() {
  return (
    <div style={{ width: CARD_W, height: CARD_H, background: '#fafafa', border: '1px solid #e5e5e5', borderLeft: `3px solid ${VIOLET}`, borderRadius: 8, position: 'relative', padding: '26px 26px 20px', display: 'flex', flexDirection: 'column', gap: 0, overflow: 'hidden' }}>
      <CardLabel label="Phone & address fields" />

      {/* Phone section */}
      <div style={{ marginTop: 34 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Phone Numbers</span>
          <div style={{ padding: '2px 7px', border: `1px solid ${FIELD_BORDER}`, borderRadius: 4 }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, color: '#555' }}>+ Add</span>
          </div>
        </div>

        {/* Phone card — gray outline, no fill, primary top-right, well-spaced */}
        <div style={{ border: '1px solid #e0e0e0', borderRadius: 6, overflow: 'hidden', marginBottom: 14, background: '#fff' }}>
          {/* Primary badge — top right, clear space from field below */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 12px 6px' }}>
            <PrimaryBadge />
          </div>
          {/* Input — top padding for floating label clearance */}
          <div style={{ padding: '8px 12px 10px' }}>
            <VField label="Phone number" value="+1 (310) 555-0192" />
          </div>
          {/* Options — stacked vertically, label left, toggle right */}
          <div style={{ borderTop: '1px solid #f0f0f0', padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 5 }}>
            <OptionRow label="Make visible to all orgs" on={true} />
            <OptionRow label="Enable SMS" on={true} />
          </div>
        </div>
      </div>

      {/* Address section */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Addresses</span>
          <div style={{ padding: '2px 7px', border: `1px solid ${FIELD_BORDER}`, borderRadius: 4 }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, color: '#555' }}>+ Add</span>
          </div>
        </div>

        {/* Address card — separate Vuetify fields, primary top-right */}
        <div style={{ border: '1px solid #e0e0e0', borderRadius: 6, overflow: 'hidden', background: '#fff' }}>
          {/* Primary badge — top right, clear space */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 12px 6px' }}>
            <PrimaryBadge />
          </div>
          {/* Fields */}
          <div style={{ padding: '8px 12px 10px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <VField label="Street address" value="123 Main St" />
            <div style={{ display: 'flex', gap: 8 }}>
              <VField label="City" value="El Segundo" flex={2} />
              <VField label="State" value="CA" flex={1} />
            </div>
            <div style={{ width: '44%' }}>
              <VField label="ZIP code" value="90245" />
            </div>
          </div>
          {/* Options */}
          <div style={{ borderTop: '1px solid #f0f0f0', padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 5 }}>
            <OptionRow label="Make visible to all orgs" on={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Card 3: Power user mode ── */
function CardPowerUser() {
  return (
    <div style={{ width: CARD_W, height: CARD_H, background: '#fff', border: '1px solid #e5e5e5', borderLeft: `3px solid ${VIOLET}`, borderRadius: 8, position: 'relative', padding: 26, display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden' }}>
      <CardLabel label="Power user mode" />

      <div style={{ marginTop: 28 }}>
        {/* Main toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', border: `1px solid ${VIOLET}30`, borderRadius: 7, background: VIOLET + '05', marginBottom: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700, color: '#0a0a0a', marginBottom: 2 }}>Power user mode</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#777' }}>Unlocks shortcuts, dense layouts &amp; advanced controls</div>
          </div>
          <Toggle on={true} />
        </div>

        {/* Sub-features */}
        {[
          { label: 'Keyboard shortcut panel', desc: 'Global ⌘K command palette', enabled: true },
          { label: 'A11y grid headers', desc: 'ARIA table landmarks for screen readers', enabled: true },
          { label: 'Dense mode', desc: 'Compact list view, reduced padding', enabled: true },
          { label: 'Feature flags preview', desc: 'Opt into experimental features early', enabled: false },
          { label: 'Debug overlay', desc: 'Show component tree & render hints', enabled: false },
        ].map((item) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 6, background: '#fafafa', border: '1px solid #f0f0f0', marginBottom: 6 }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="6" cy="6" r="5" fill={item.enabled ? VIOLET + '18' : '#f0f0f0'} />
              <path d="M3.5 6l1.5 1.5L8.5 4" stroke={item.enabled ? VIOLET : '#ccc'} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: '#222' }}>{item.label}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#aaa' }}>{item.desc}</div>
            </div>
            <Toggle on={item.enabled} small />
          </div>
        ))}
      </div>
    </div>
  );
}

export function S6SettingsStates() {
  return (
    <FigureCanvas width={1600} height={700}>
      <div style={{ width: '100%', height: '100%', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 36, padding: '40px 44px' }}>
        <CardEmail />
        <CardContactFields />
        <CardPowerUser />
      </div>
    </FigureCanvas>
  );
}
