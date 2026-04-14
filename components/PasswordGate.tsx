'use client'

import { FormEvent, useEffect, useState } from 'react'
import styles from './PasswordGate.module.css'

const STORAGE_KEY = 'cs_unlock'
const PASSWORD = 'welcome'

interface PasswordGateProps {
  children: React.ReactNode
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    setUnlocked(
      typeof window !== 'undefined' &&
        window.localStorage.getItem(STORAGE_KEY) === 'true'
    )
  }, [])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (value.trim().toLowerCase() === PASSWORD) {
      window.localStorage.setItem(STORAGE_KEY, 'true')
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (unlocked === null) return null
  if (unlocked) return <>{children}</>

  return (
    <div className={styles.gate}>
      <div className={styles.card}>
        <span className={styles.badge}>protected</span>
        <p className={styles.copy}>
          Enter the shared password to view. If you&rsquo;re a recruiter or
          hiring team and need access, reach out and I&rsquo;ll share it.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="cs-password" className={styles.label}>
            password
          </label>
          <input
            id="cs-password"
            type="password"
            autoComplete="off"
            autoFocus
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              if (error) setError(false)
            }}
            className={styles.input}
            aria-invalid={error}
            aria-describedby={error ? 'cs-password-error' : undefined}
          />
          {error && (
            <span id="cs-password-error" className={styles.error}>
              That&rsquo;s not quite right. Email me for the password.
            </span>
          )}
          <button type="submit" className={styles.button}>
            Unlock
          </button>
        </form>
      </div>
    </div>
  )
}
