'use client'

import { useEffect } from 'react'

export default function FontAwesomeWatcher() {
  useEffect(() => {
    // Kit watcher removed: switching to local SVG icons via @fortawesome packages
    // This file is retained as a no-op for now for compatibility.

    function cleanup() {
      // noop
    }

    return cleanup
  }, [])

  return null
}
