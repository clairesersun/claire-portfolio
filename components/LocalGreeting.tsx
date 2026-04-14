'use client'

import { useEffect, useState } from 'react'

const weatherCodeMap: Record<number, string> = {
  0: 'clear',
  1: 'mostly clear',
  2: 'partly cloudy',
  3: 'cloudy',
  45: 'foggy',
  48: 'foggy',
  51: 'drizzly',
  53: 'drizzly',
  55: 'drizzly',
  56: 'icy',
  57: 'icy',
  61: 'rainy',
  63: 'rainy',
  65: 'rainy',
  66: 'icy',
  67: 'icy',
  71: 'snowy',
  73: 'snowy',
  75: 'snowy',
  77: 'snowy',
  80: 'showery',
  81: 'showery',
  82: 'showery',
  85: 'snowy',
  86: 'snowy',
  95: 'stormy',
  96: 'stormy',
  99: 'stormy',
}

type Weather = { desc: string; isDay: boolean } | null
type Place = { city: string; region: string } | null

export function LocalGreeting({ className }: { className?: string }) {
  const [time, setTime] = useState<string>('')
  const [weather, setWeather] = useState<Weather>(null)
  const [place, setPlace] = useState<Place>(null)

  useEffect(() => {
    const tick = () => {
      const d = new Date()
      setTime(
        d.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      )
    }
    tick()
    const id = setInterval(tick, 30_000)
    const onVisible = () => {
      if (document.visibilityState === 'visible') tick()
    }
    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('focus', tick)
    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('focus', tick)
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    async function loadWeather() {
      try {
        const ipRes = await fetch('https://ipapi.co/json/')
        if (!ipRes.ok) return
        const ip: {
          latitude?: number
          longitude?: number
          city?: string
          region?: string
          country_name?: string
        } = await ipRes.json()
        if (ip.latitude == null || ip.longitude == null) return
        if (!cancelled && ip.city) {
          setPlace({
            city: ip.city,
            region: ip.country_name || ip.region || '',
          })
        }
        const wRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${ip.latitude}&longitude=${ip.longitude}&current=weather_code,is_day`
        )
        if (!wRes.ok) return
        const w = await wRes.json()
        const code: number = w?.current?.weather_code ?? 3
        const isDay: boolean = (w?.current?.is_day ?? 1) === 1
        if (!cancelled) {
          setWeather({ desc: weatherCodeMap[code] ?? 'cloudy', isDay })
        }
      } catch {
        /* silent — fall back to time-only greeting */
      }
    }
    loadWeather()
    return () => {
      cancelled = true
    }
  }, [])

  if (!time) {
    return <p className={className}>&nbsp;</p>
  }

  const placeLine = place
    ? ` in ${place.city}${place.region ? `, ${place.region}` : ''}`
    : ''

  return (
    <p className={className}>
      Hi, internet flâneuse! It&rsquo;s currently {time}
      {weather ? ` and ${weather.desc}` : ''}
      {placeLine}.
    </p>
  )
}
