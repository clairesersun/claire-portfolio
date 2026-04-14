import { FigureCanvas } from './FigureCanvas';
import { BrowserFrame } from './BrowserFrame';

const VIOLET = '#5B21B6';
// Slightly lighter gray for After — subtle, not heavy
const FIELD_BORDER = '#bdbdbd';
const FIELD_LABEL = '#9e9e9e';

/* ─── Sidebar ─────────────────────────────────────────────────────────────── */
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

function Toggle({ on, small }: { on?: boolean; small?: boolean }) {
  const w = small ? 28 : 34, h = small ? 16 : 19;
  return (
    <div style={{ width: w, height: h, borderRadius: h / 2, background: on ? VIOLET : '#d1d5db', position: 'relative', flexShrink: 0 }}>
      <div style={{ position: 'absolute', top: 2.5, left: on ? (small ? 14 : 17) : 3, width: small ? 11 : 14, height: small ? 11 : 14, borderRadius: '50%', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
    </div>
  );
}

function Checkbox({ checked }: { checked?: boolean }) {
  return (
    <div style={{ width: 14, height: 14, borderRadius: 3, border: `2px solid ${checked ? VIOLET : '#ccc'}`, background: checked ? VIOLET : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      {checked && (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M1.5 4L3 5.5L6.5 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

/* ─── BEFORE: Dark-bg page with centered settings div ───────────────────── */
const beforeRows: Array<{ label: string; type: 'toggle'; value?: boolean } | { label: string; type: 'text'; value: string } | { label: string; type: 'checkbox'; value?: boolean }> = [
  { label: 'Email notifications', type: 'toggle', value: true },
  { label: 'Display name', type: 'text', value: 'Jane Doe' },
  { label: 'Push alerts', type: 'toggle', value: false },
  { label: 'Show avatars', type: 'checkbox', value: true },
  { label: 'Organization role', type: 'text', value: 'UX Designer' },
  { label: 'SMS alerts', type: 'toggle', value: false },
  { label: 'Reduce motion', type: 'checkbox', value: false },
  { label: 'Language', type: 'text', value: 'English (US)' },
  { label: 'Two-factor auth', type: 'toggle', value: true },
  { label: 'Show keyboard shortcuts', type: 'checkbox', value: true },
  { label: 'Font size', type: 'text', value: '14 px' },
  { label: 'Sound alerts', type: 'toggle', value: false },
  { label: 'Compact view', type: 'checkbox', value: false },
  { label: 'Timezone', type: 'text', value: 'Pacific Time (UTC−8)' },
  { label: 'Auto-save drafts', type: 'toggle', value: true },
  { label: 'Theme', type: 'text', value: 'System default' },
  { label: 'Accessibility mode', type: 'toggle', value: false },
  { label: 'Screen reader support', type: 'checkbox', value: false },
  { label: 'High contrast', type: 'toggle', value: false },
  { label: 'Notification sounds', type: 'toggle', value: true },
  { label: 'Badge count', type: 'checkbox', value: true },
  { label: 'Date format', type: 'text', value: 'MM/DD/YYYY' },
  { label: 'Profile visibility', type: 'text', value: 'Org members only' },
  { label: 'Show online status', type: 'toggle', value: true },
  { label: 'Auto-play media', type: 'toggle', value: false },
  { label: 'Spell check', type: 'checkbox', value: true },
  { label: 'Link previews', type: 'toggle', value: true },
  { label: 'Cursor style', type: 'text', value: 'Default' },
  { label: 'Remember login', type: 'toggle', value: true },
  { label: 'Dark mode', type: 'toggle', value: true },
  { label: 'Color scheme', type: 'text', value: 'Blue' },
  { label: 'Sync across devices', type: 'toggle', value: true },
  { label: 'Usage analytics', type: 'checkbox', value: false },
  { label: 'Download quality', type: 'text', value: 'High' },
  { label: 'Session timeout', type: 'text', value: '30 min' },
  { label: 'Show typing indicator', type: 'toggle', value: true },
  { label: 'Bold unread channels', type: 'checkbox', value: true },
  { label: 'Inline image preview', type: 'toggle', value: false },
  { label: 'Message grouping', type: 'toggle', value: true },
  { label: 'Emoji style', type: 'text', value: 'Native' },
  { label: 'Grid density', type: 'text', value: 'Comfortable' },
];

function BeforeRow({ row }: { row: typeof beforeRows[number] }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
      <span style={{ flex: 1, fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#222' }}>{row.label}</span>
      {row.type === 'toggle' && <Toggle on={row.value} small />}
      {row.type === 'checkbox' && <Checkbox checked={row.value} />}
      {row.type === 'text' && (
        <div style={{ padding: '2px 8px', border: '1px solid #ddd', borderRadius: 3, background: '#fafafa', minWidth: 72 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#444' }}>{row.value}</span>
        </div>
      )}
    </div>
  );
}

function SettingsBefore() {
  return (
    /* Dark gray page background — full height */
    <div style={{ background: '#2c2c2c', height: '100%', display: 'flex', flexDirection: 'column', overflowY: 'hidden' }}>
      {/* "Settings" page header — light gray, black text, does NOT touch center panel */}
      <div style={{ background: '#f5f5f5', padding: '14px 20px', flexShrink: 0, borderBottom: '1px solid #e0e0e0' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 700, color: '#0a0a0a' }}>Settings</span>
      </div>

      {/* Content area — dark gray, center-aligned, Vuetify 32px spacing from header */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '32px 0 0', overflowY: 'hidden', background: '#2c2c2c' }}>
        {/* Centered white panel — fills available height */}
        <div style={{ width: 360, background: '#fff', borderRadius: 4, boxShadow: '0 4px 24px rgba(0,0,0,0.35)', display: 'flex', flexDirection: 'column', overflow: 'hidden', flex: '0 0 auto', alignSelf: 'stretch' }}>
          {/* Filter bar — inside the centered panel */}
          <div style={{ padding: '10px 12px', borderBottom: '1px solid #eee', background: '#fff', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 10px', background: '#f5f5f5', borderRadius: 4, border: '1px solid #e8e8e8' }}>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <circle cx="5" cy="5" r="4" stroke="#bbb" strokeWidth="1.3" />
                <line x1="8.5" y1="8.5" x2="11" y2="11" stroke="#bbb" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#bbb' }}>Filter settings…</span>
            </div>
          </div>
          {/* Settings rows — no section headers, mixed types */}
          <div style={{ flex: 1, overflowY: 'hidden' }}>
            {beforeRows.map((row, i) => <BeforeRow key={i} row={row} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── AFTER helpers ──────────────────────────────────────────────────────── */

/* Material / Vuetify outlined field — slightly lighter gray */
function VField({ label, value, flex, disabled }: { label: string; value: string; flex?: number; disabled?: boolean }) {
  return (
    <div style={{ position: 'relative', flex }}>
      <div style={{ position: 'absolute', top: -8, left: 10, background: disabled ? '#f8f8f8' : '#fff', padding: '0 4px', fontFamily: "'Inter', sans-serif", fontSize: 9, color: disabled ? '#bbb' : FIELD_LABEL, zIndex: 1, lineHeight: 1 }}>
        {label}
      </div>
      <div style={{ border: `1.5px solid ${disabled ? '#e0e0e0' : FIELD_BORDER}`, borderRadius: 4, padding: '7px 10px', background: disabled ? '#f8f8f8' : '#fff', opacity: disabled ? 0.75 : 1 }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: disabled ? '#999' : '#0a0a0a' }}>{value}</span>
      </div>
    </div>
  );
}

function OptionRow({ label, on }: { label: string; on?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '3px 0' }}>
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

/* Phone card — gray outline, primary top-right (well-spaced), stacked options */
function PhoneCard({ phone, isPrimary }: { phone: string; isPrimary: boolean }) {
  return (
    <div style={{ border: '1px solid #e0e0e0', borderRadius: 6, marginBottom: 8, background: '#fff' }}>
      {/* Primary — top right, padded away from field */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 12px 6px' }}>
        {isPrimary ? <PrimaryBadge /> : <MakePrimaryLink />}
      </div>
      {/* Input — top padding for floating label */}
      <div style={{ padding: '8px 12px 10px' }}>
        <VField label="Phone number" value={phone} />
      </div>
      <div style={{ borderTop: '1px solid #f0f0f0', padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <OptionRow label="Make visible to all orgs" on={isPrimary} />
        <OptionRow label="Enable SMS" on={isPrimary} />
      </div>
    </div>
  );
}

/* Address card — gray outline, separate fields, primary top-right */
function AddressCard({ street, city, state, zip, isPrimary }: { street: string; city: string; state: string; zip: string; isPrimary: boolean }) {
  return (
    <div style={{ border: '1px solid #e0e0e0', borderRadius: 6, marginBottom: 8, background: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 12px 6px' }}>
        {isPrimary ? <PrimaryBadge /> : <MakePrimaryLink />}
      </div>
      <div style={{ padding: '8px 12px 10px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <VField label="Street address" value={street} />
        <div style={{ display: 'flex', gap: 10 }}>
          <VField label="City" value={city} flex={2} />
          <VField label="State" value={state} flex={1} />
        </div>
        <div style={{ width: '44%' }}>
          <VField label="ZIP code" value={zip} />
        </div>
      </div>
      <div style={{ borderTop: '1px solid #f0f0f0', padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <OptionRow label="Make visible to all orgs" on={isPrimary} />
      </div>
    </div>
  );
}

function SectionHead({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, marginTop: 16 }}>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{label}</span>
      <div style={{ padding: '2px 8px', border: '1px solid #bdbdbd', borderRadius: 4, cursor: 'pointer' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, color: '#555' }}>+ Add</span>
      </div>
    </div>
  );
}

function DiscordSettingsAfter() {
  return (
    <div style={{ display: 'flex', height: '100%', background: '#fff' }}>
      {/* Sidebar — flat, no section headings */}
      <div style={{ width: 168, flexShrink: 0, background: '#f2f3f5', padding: '10px 8px', borderRight: '1px solid #e3e3e3', overflowY: 'hidden' }}>
        {sidebarItems.map((item) => (
          <div key={item.id} style={{ padding: '7px 10px', borderRadius: 4, background: item.id === 'account' ? VIOLET + '18' : 'transparent', marginBottom: 1 }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: item.id === 'account' ? VIOLET : '#444', fontWeight: item.id === 'account' ? 600 : 400 }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'hidden', padding: '16px 18px' }}>
        {/* User overview */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: VIOLET, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700, color: '#fff' }}>JD</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: '#0a0a0a' }}>Jane Doe</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#888' }}>UX Designer · El Segundo USD</div>
          </div>
          <div style={{ padding: '4px 9px', border: '1px solid #bdbdbd', borderRadius: 4, cursor: 'pointer', flexShrink: 0 }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: '#555' }}>Edit avatar</span>
          </div>
        </div>

        {/* Email — read-only */}
        <div style={{ marginBottom: 12, position: 'relative' }}>
          <VField label="Email address" value="jane.doe@elsegundousd.net" disabled />
          <div style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}>
            <div style={{ padding: '1px 6px', background: '#f3f0ff', borderRadius: 8, border: `1px solid ${VIOLET}25` }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, color: VIOLET, fontWeight: 600 }}>Read-only</span>
            </div>
          </div>
        </div>

        <SectionHead label="Phone Numbers" />
        <PhoneCard phone="+1 (310) 555-0192" isPrimary={true} />
        <PhoneCard phone="+1 (424) 555-0041" isPrimary={false} />

        <SectionHead label="Addresses" />
        <AddressCard street="123 Main St" city="El Segundo" state="CA" zip="90245" isPrimary={true} />
        <AddressCard street="456 Maple Ave" city="Los Angeles" state="CA" zip="90001" isPrimary={false} />
      </div>
    </div>
  );
}

export function S1SettingsHero() {
  return (
    <FigureCanvas width={1600} height={900}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', background: '#f0f0f0' }}>
        <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
          {/* ── LEFT — Before: dark bg, centered panel ── */}
          <div style={{ width: 790, display: 'flex', flexDirection: 'column', padding: '22px 22px 14px' }}>
            <BrowserFrame url="app.io/settings" label="Before" background="#2c2c2c" style={{ flex: 1 }}>
              <SettingsBefore />
            </BrowserFrame>
          </div>

          <div style={{ width: 1, background: '#ccc', flexShrink: 0, margin: '22px 0 0' }} />

          {/* ── RIGHT — After ── */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '22px 22px 14px' }}>
            <BrowserFrame url="app.io/settings/account" label="After" background="#fff" style={{ flex: 1 }}>
              <DiscordSettingsAfter />
            </BrowserFrame>
          </div>
        </div>
      </div>
    </FigureCanvas>
  );
}