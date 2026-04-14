import { FigureCanvas } from './FigureCanvas';

const CYAN = '#0C5A6D';
const VIOLET = '#5B21B6';

/* ── OLD IA data: 26 flat settings items ─────────────────────────────────── */
const oldItems = [
  'email_notif_1', 'notif_freq_v2', 'pwd_policy', '2fa_method',
  'ui_theme', 'avatar_url', 'font_sz', 'color_mode',
  'display_nm', 'lang_code', 'tz_offset', 'push_config',
  'sms_notif_2', 'org_region_v2', 'contrast_lvl', 'session_exp',
  'a11y_reader', 'kb_nav_v1', 'reduce_anim', 'org_role_id',
  'access_contrast', 'user_profile_n',
  'beta_flags', 'api_key_v3', 'export_fmt', 'audit_trail',
];

/* ── NEW IA data: 10 categories with leaves ──────────────────────────────── */
const newCategories = [
  { label: 'Account',       color: VIOLET,   leaves: ['Email', 'Phone', 'Address'] },
  { label: 'Profiles',      color: '#0891B2', leaves: ['Avatar', 'Bio', 'Pronouns'] },
  { label: 'Notifications', color: '#059669', leaves: ['Email', 'Push', 'SMS', 'Digest'] },
  { label: 'Sessions',      color: '#7C3AED', leaves: ['Active', 'Timeout'] },
  { label: 'Appearance',    color: '#D97706', leaves: ['Theme', 'Colors', 'Font'] },
  { label: 'Accessibility', color: '#DC2626', leaves: ['Contrast', 'Motion', 'Reader'] },
  { label: 'Keybinds',      color: '#1D4ED8', leaves: ['Shortcuts', 'Bindings'] },
  { label: 'Language',      color: '#0891B2', leaves: ['Language', 'Timezone'] },
  { label: 'Mobile App',    color: '#059669', leaves: ['Sync', 'Push'] },
  { label: 'Advanced',      color: '#7C3AED', leaves: ['Power user', 'Flags'] },
];

/* ── OLD IA tree ─────────────────────────────────────────────────────────── */
const OLD_W = 720;
const OLD_H = 720;
const OLD_ROOT_X = 360;
const OLD_ROOT_Y = 64;

// 26 items spread in 3 rows of 8-9
const oldGrid: { x: number; y: number; label: string }[] = [];
const rowCounts = [9, 9, 8];
const rowYs = [230, 390, 550];
rowCounts.forEach((count, row) => {
  const gap = OLD_W / (count + 1);
  for (let i = 0; i < count; i++) {
    const idx = rowCounts.slice(0, row).reduce((a, b) => a + b, 0) + i;
    if (idx < oldItems.length) {
      oldGrid.push({ x: gap * (i + 1), y: rowYs[row], label: oldItems[idx] });
    }
  }
});

function OldIATree() {
  const LEAF_W = 78;
  const LEAF_H = 22;
  const ROOT_W = 90;
  const ROOT_H = 30;
  return (
    <svg width={OLD_W} height={OLD_H} viewBox={`0 0 ${OLD_W} ${OLD_H}`} style={{ overflow: 'visible' }}>
      {/* Title */}
      <text x={OLD_W / 2} y={20} textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="26" fill="#595959" fontWeight="600">Before</text>
      <text x={OLD_W / 2} y={42} textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="11" fill="#999">System-driven flat structure</text>

      {/* Lines from root to leaves */}
      {oldGrid.map((item, i) => (
        <line key={i}
          x1={OLD_ROOT_X} y1={OLD_ROOT_Y + ROOT_H / 2}
          x2={item.x} y2={item.y - LEAF_H / 2}
          stroke="#ddd" strokeWidth="0.8"
        />
      ))}

      {/* Root */}
      <rect x={OLD_ROOT_X - ROOT_W / 2} y={OLD_ROOT_Y - ROOT_H / 2} width={ROOT_W} height={ROOT_H} rx="5" fill="white" stroke="#999" strokeWidth="1.5" />
      <text x={OLD_ROOT_X} y={OLD_ROOT_Y + 5} textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="12" fontWeight="600" fill="#333">Settings</text>

      {/* Leaves */}
      {oldGrid.map((item, i) => (
        <g key={i}>
          <rect x={item.x - LEAF_W / 2} y={item.y - LEAF_H / 2} width={LEAF_W} height={LEAF_H} rx="3" fill="white" stroke="#ddd" strokeWidth="0.8" />
          <text x={item.x} y={item.y + 4} textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="8" fill="#888">{item.label}</text>
        </g>
      ))}
    </svg>
  );
}

/* ── NEW IA tree ─────────────────────────────────────────────────────────── */
const NEW_W = 720;
const NEW_H = 720;
const NEW_ROOT_X = 360;
const NEW_ROOT_Y = 64;
const CAT_COUNT = newCategories.length;
const CAT_SPACING = NEW_W / (CAT_COUNT + 1);
const CAT_Y = 230;
const CAT_W = 62;
const CAT_H = 28;
const LEAF_Y_START = 370;
const LEAF_GAP = 36;
const LEAF_W = 62;
const LEAF_H = 22;
const ROOT_W = 90;
const ROOT_H = 30;

function NewIATree() {
  return (
    <svg width={NEW_W} height={NEW_H} viewBox={`0 0 ${NEW_W} ${NEW_H}`} style={{ overflow: 'visible' }}>
      {/* Title */}
      <text x={NEW_W / 2} y={20} textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="26" fill="#0a0a0a" fontWeight="600">After</text>
      <text x={NEW_W / 2} y={42} textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="11" fill={CYAN}>User-centered structure</text>

      {/* Lines root → categories */}
      {newCategories.map((cat, i) => {
        const cx = CAT_SPACING * (i + 1);
        return (
          <line key={i}
            x1={NEW_ROOT_X} y1={NEW_ROOT_Y + ROOT_H / 2}
            x2={cx} y2={CAT_Y - CAT_H / 2}
            stroke={`${CYAN}55`} strokeWidth="1"
          />
        );
      })}

      {/* Root */}
      <rect x={NEW_ROOT_X - ROOT_W / 2} y={NEW_ROOT_Y - ROOT_H / 2} width={ROOT_W} height={ROOT_H} rx="5" fill="white" stroke={CYAN} strokeWidth="2" />
      <text x={NEW_ROOT_X} y={NEW_ROOT_Y + 5} textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="12" fontWeight="600" fill="#0a0a0a">Settings</text>

      {/* Categories + leaves */}
      {newCategories.map((cat, i) => {
        const cx = CAT_SPACING * (i + 1);
        return (
          <g key={i}>
            {/* Lines cat → leaves */}
            {cat.leaves.map((_, j) => (
              <line key={j}
                x1={cx} y1={CAT_Y + CAT_H / 2}
                x2={cx} y2={LEAF_Y_START + j * LEAF_GAP - LEAF_H / 2}
                stroke={`${cat.color}40`} strokeWidth="0.8"
              />
            ))}

            {/* Category box */}
            <rect
              x={cx - CAT_W / 2} y={CAT_Y - CAT_H / 2}
              width={CAT_W} height={CAT_H} rx="4"
              fill={`${cat.color}15`} stroke={cat.color} strokeWidth="1"
            />
            <text x={cx} y={CAT_Y + 5} textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="8.5" fontWeight="600" fill={cat.color}>
              {cat.label}
            </text>

            {/* Leaf boxes */}
            {cat.leaves.map((leaf, j) => (
              <g key={j}>
                <rect
                  x={cx - LEAF_W / 2} y={LEAF_Y_START + j * LEAF_GAP - LEAF_H / 2}
                  width={LEAF_W} height={LEAF_H} rx="3"
                  fill="white" stroke={`${cat.color}50`} strokeWidth="0.8"
                />
                <text
                  x={cx} y={LEAF_Y_START + j * LEAF_GAP + 4.5}
                  textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="8" fill="#444"
                >
                  {leaf}
                </text>
              </g>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export function S3SettingsIA() {
  return (
    <FigureCanvas width={1600} height={900}>
      <div style={{ width: '100%', height: '100%', background: '#ffffff', display: 'flex', flexDirection: 'column' }}>
        {/* Two trees */}
        <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
          {/* Old tree */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 30px' }}>
            <OldIATree />
          </div>
          <div style={{ width: 1, background: '#e5e5e5', margin: '20px 0' }} />
          {/* New tree */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 30px' }}>
            <NewIATree />
          </div>
        </div>
      </div>
    </FigureCanvas>
  );
}
