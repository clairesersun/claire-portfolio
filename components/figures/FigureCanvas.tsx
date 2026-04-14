'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';

interface FigureCanvasProps {
  width: number;
  height: number;
  children: ReactNode;
  background?: string;
}

export function FigureCanvas({ width, height, children, background = '#ffffff' }: FigureCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: `${(height / width) * 100}%`,
        background,
        borderRadius: 8,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${width}px`,
          height: `${height}px`,
          transformOrigin: 'top left',
          transform: `scale(${scale})`,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {children}
      </div>
    </div>
  );
}
