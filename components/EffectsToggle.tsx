"use client"
import { useEffect, useState } from "react"

const STORAGE_KEY = "effects-enabled"

export default function EffectsToggle({
  onChange,
  defaultEnabled = false
}: {
  onChange?: (enabled: boolean) => void
  defaultEnabled?: boolean
}) {
  // Fix hydration: Start with default, hydrate from localStorage after mount
  const [enabled, setEnabled] = useState<boolean>(defaultEnabled)
  const [mounted, setMounted] = useState(false)

  // Hydrate from localStorage after mount to avoid SSR mismatch
  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored !== null) {
      setEnabled(stored === "true")
    }
  }, [])

  // Save to localStorage and notify parent when enabled changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, String(enabled))
      onChange?.(enabled)
    }
  }, [enabled, onChange, mounted])

  return (
    <button
      type="button"
      aria-pressed={enabled}
      aria-label={enabled ? "Turn off effects" : "Turn on effects"}
      onClick={() => setEnabled((v) => !v)}
      style={{
        position: "fixed",
        left: 16,
        bottom: 16,
        zIndex: 1000,
        background: "var(--color-bg, #fff)",
        color: "var(--color-text-primary, #222)",
        border: "1px solid var(--color-border, #ccc)",
        borderRadius: 24,
        padding: "8px 18px",
        fontSize: 16,
        fontWeight: 500,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        cursor: "pointer"
      }}
    >
      Effects: <span aria-live="polite" style={{marginLeft:4}}>{enabled ? "On" : "Off"}</span>
    </button>
  )
}
