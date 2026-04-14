import { ReactNode, CSSProperties } from 'react';

interface BrowserFrameProps {
  children: ReactNode;
  url?: string;
  background?: string;
  style?: CSSProperties;
  label?: string;
  labelColor?: string;
}

export function BrowserFrame({
  children,
  url = 'app.io/settings',
  background = '#ffffff',
  style,
  label,
  labelColor = '#999',
}: BrowserFrameProps) {
  return (
    <div
      style={{
        borderRadius: 8,
        overflow: 'hidden',
        border: '1px solid #d0d0d0',
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      {/* Chrome bar */}
      <div
        style={{
          background: '#e8e8e8',
          padding: '7px 10px',
          display: 'flex',
          gap: 5,
          alignItems: 'center',
          flexShrink: 0,
          borderBottom: '1px solid #d4d4d4',
        }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', flexShrink: 0 }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', flexShrink: 0 }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28ca41', flexShrink: 0 }} />
        <div
          style={{
            flex: 1,
            background: '#d8d8d8',
            borderRadius: 3,
            height: 18,
            marginLeft: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: 9, color: '#777', fontFamily: "'Inter', sans-serif" }}>{url}</span>
        </div>
        {label && (
          <span
            style={{
              fontSize: 9,
              color: labelColor,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              marginLeft: 6,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {label}
          </span>
        )}
      </div>
      {/* Content */}
      <div style={{ flex: 1, background, overflow: 'hidden', position: 'relative' }}>{children}</div>
    </div>
  );
}
