import { FigureCanvas } from './FigureCanvas';

const YELLOW_FILL = '#FCD34D';
const YELLOW_TEXT = '#92400E';

interface StickyNote {
  label: string;
  x: number;
  y: number;
  rotate: number;
}

interface Group {
  title: string;
  titleCrossed?: string;
  titleReplacement?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  stickies: StickyNote[];
  warning?: boolean;
}

const groups: Group[] = [
  {
    title: 'Notifications',
    x: 50,
    y: 120,
    w: 260,
    h: 300,
    stickies: [
      { label: 'Email digest', x: 68, y: 180, rotate: -2 },
      { label: 'Push alerts', x: 180, y: 188, rotate: 1.5 },
      { label: 'SMS', x: 68, y: 285, rotate: -1 },
      { label: 'Mentions', x: 180, y: 278, rotate: 2 },
    ],
  },
  {
    title: 'Profile',
    titleCrossed: 'Profile',
    titleReplacement: 'Account',
    x: 360,
    y: 80,
    w: 240,
    h: 340,
    stickies: [
      { label: 'Display name', x: 378, y: 150, rotate: 1 },
      { label: 'Avatar', x: 480, y: 145, rotate: -2 },
      { label: 'Email', x: 378, y: 238, rotate: 2 },
      { label: 'Password', x: 475, y: 245, rotate: -1 },
      { label: 'Phone number', x: 415, y: 325, rotate: 1.5 },
    ],
  },
  {
    title: 'Team/Org Settings',
    titleCrossed: 'Team/Org Settings',
    titleReplacement: 'Organizations',
    x: 650,
    y: 110,
    w: 280,
    h: 260,
    stickies: [
      { label: 'Org name', x: 668, y: 178, rotate: -1.5 },
      { label: 'Role', x: 778, y: 172, rotate: 1 },
      { label: 'Members', x: 668, y: 268, rotate: 1.5 },
    ],
  },
  {
    title: 'A11y !!',
    x: 990,
    y: 100,
    w: 250,
    h: 280,
    stickies: [
      { label: 'Contrast', x: 1008, y: 168, rotate: 2 },
      { label: 'Font size', x: 1118, y: 162, rotate: -1 },
      { label: 'Screen reader', x: 1008, y: 264, rotate: -2 },
      { label: 'Reduce motion', x: 1115, y: 270, rotate: 1.5 },
    ],
  },
  {
    title: 'Advanced',
    x: 1290,
    y: 90,
    w: 240,
    h: 220,
    stickies: [
      { label: 'API access', x: 1308, y: 158, rotate: -1 },
      { label: 'Beta flags', x: 1412, y: 152, rotate: 2 },
      { label: 'Export data', x: 1308, y: 248, rotate: 1 },
    ],
  },
  {
    title: 'legacy',
    x: 150,
    y: 510,
    w: 280,
    h: 240,
    warning: true,
    stickies: [
      { label: 'old_flag_v1', x: 168, y: 575, rotate: 1 },
      { label: 'deprecated', x: 278, y: 568, rotate: -1.5 },
      { label: 'audit_trail', x: 168, y: 665, rotate: 2 },
      { label: 'session_v0', x: 280, y: 658, rotate: -1 },
    ],
  },
  {
    title: 'Security',
    x: 500,
    y: 470,
    w: 260,
    h: 260,
    stickies: [
      { label: '2FA', x: 518, y: 538, rotate: -2 },
      { label: 'SSO Config', x: 628, y: 532, rotate: 1 },
      { label: 'Sessions', x: 518, y: 638, rotate: 1.5 },
      { label: 'Audit log', x: 625, y: 645, rotate: -1 },
    ],
  },
];

function StickyNote({ note }: { note: StickyNote }) {
  return (
    <g transform={`rotate(${note.rotate}, ${note.x + 52}, ${note.y + 34})`}>
      <rect x={note.x} y={note.y} width={104} height={60} rx="3" fill={YELLOW_FILL} style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.15))' }} />
      <text
        x={note.x + 52}
        y={note.y + 36}
        textAnchor="middle"
        fontFamily="'Caveat', cursive"
        fontSize="18"
        fill={YELLOW_TEXT}
        fontWeight="600"
      >
        {note.label}
      </text>
    </g>
  );
}

function GroupBox({ group }: { group: Group }) {
  const hasCross = !!group.titleCrossed;
  return (
    <g>
      {/* Group outline */}
      <rect
        x={group.x}
        y={group.y}
        width={group.w}
        height={group.h}
        rx="4"
        fill="none"
        stroke="#333"
        strokeWidth="2"
        strokeDasharray={group.warning ? '8,4' : 'none'}
      />

      {/* Title area */}
      {hasCross ? (
        <>
          {/* Crossed-out title */}
          <text
            x={group.x + 12}
            y={group.y - 6}
            fontFamily="'Caveat', cursive"
            fontSize="22"
            fill="#999"
            fontWeight="500"
            textDecoration="line-through"
          >
            {group.titleCrossed}
          </text>
          {/* Replacement */}
          <text
            x={group.x + 12}
            y={group.y + 18}
            fontFamily="'Caveat', cursive"
            fontSize="22"
            fill="#0a0a0a"
            fontWeight="700"
          >
            → {group.titleReplacement}
          </text>
        </>
      ) : (
        <text
          x={group.x + 12}
          y={group.y - 6}
          fontFamily="'Caveat', cursive"
          fontSize="22"
          fill="#0a0a0a"
          fontWeight="700"
        >
          {group.title}
        </text>
      )}

      {/* Warning sticky */}
      {group.warning && (
        <g>
          <rect x={group.x + group.w - 90} y={group.y - 28} width={90} height={30} rx="3" fill="#FEE2E2" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }} />
          <text x={group.x + group.w - 45} y={group.y - 9} textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="14" fill="#991B1B" fontWeight="700">⚠ DO NOT TOUCH</text>
        </g>
      )}

      {/* Sticky notes */}
      {group.stickies.map((s, i) => (
        <StickyNote key={i} note={s} />
      ))}
    </g>
  );
}

export function S4Whiteboard() {
  return (
    <FigureCanvas width={1600} height={1000} background="#fafaf5">
      <svg width="1600" height="1000" viewBox="0 0 1600 1000" style={{ background: '#fafaf5' }}>
        {/* Subtle grid */}
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#e8e6df" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="1600" height="1000" fill="url(#grid)" />

        {/* Group boxes */}
        {groups.map((g, i) => (
          <GroupBox key={i} group={g} />
        ))}

        {/* Arrow: Security ← Sessions split note */}
        <path
          d="M 500 530 Q 480 560 430 590"
          fill="none"
          stroke="#333"
          strokeWidth="1.8"
          markerEnd="url(#arrow)"
        />

        {/* Arrow: legacy → Security */}
        <path
          d="M 430 635 Q 480 650 500 620"
          fill="none"
          stroke="#333"
          strokeWidth="1.8"
          markerEnd="url(#arrow)"
        />

        {/* Notifications — confirm keep */}
        <text x="60" y="125" fontFamily="'Caveat', cursive" fontSize="17" fill="#555">✓ keeping as-is</text>

        {/* Security — note SSO cut */}
        <text x="505" y="750" fontFamily="'Caveat', cursive" fontSize="15" fill="#991B1B" fontWeight="600">SSO config + audit log → cut</text>

        {/* Annotation: "Advanced" crossed out + re-added note */}
        <text x="1290" y="455" fontFamily="'Caveat', cursive" fontSize="18" fill="#555">
          ← re-added separately
        </text>

        {/* Coffee ring stain */}
        <ellipse cx="920" cy="660" rx="42" ry="40" fill="none" stroke="rgba(139,90,43,0.12)" strokeWidth="6" />
        <ellipse cx="920" cy="660" rx="36" ry="34" fill="none" stroke="rgba(139,90,43,0.07)" strokeWidth="3" />

        {/* Question mark near a disputed item */}
        <text x="820" y="680" fontFamily="'Caveat', cursive" fontSize="32" fill="#bbb" fontWeight="700">?</text>

        {/* SVG arrow marker */}
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 Z" fill="#555" />
          </marker>
        </defs>

        {/* Title */}
        <text x="800" y="960" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="28" fill="#bbb">
          Card sorting · whiteboard recreation
        </text>
      </svg>
    </FigureCanvas>
  );
}