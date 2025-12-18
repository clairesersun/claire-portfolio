"use client"
import EffectsToggle from "./EffectsToggle"

import { useCallback } from "react"

export default function FloatingEffectsToggle() {
  // This handler is now local, not passed from layout
  const handleChange = useCallback((enabled: boolean) => {
    if (typeof window !== 'undefined') {
      const evt = new CustomEvent('effects-toggle', { detail: { enabled } })
      window.dispatchEvent(evt)
    }
  }, [])
  return <EffectsToggle onChange={handleChange} defaultEnabled={true} />
}
