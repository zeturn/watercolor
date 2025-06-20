import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'

export const Countdown = forwardRef(function Countdown(
  {
    seconds,
    autoStart = true,
    fontSize = '16px',
    color = '',
    onFinish = () => {},
    className = '',
  }, ref) {
  const [remaining, setRemaining] = useState(seconds)
  const timerRef = useRef(null)

  const clear = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const start = () => {
    if (timerRef.current) return
    timerRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev > 0) return prev - 1
        clear()
        onFinish()
        return 0
      })
    }, 1000)
  }

  useEffect(() => {
    setRemaining(seconds)
    clear()
    if (autoStart) start()
    return () => clear()
  }, [seconds])

  useEffect(() => {
    if (autoStart) start()
  }, [])

  useImperativeHandle(ref, () => ({ start, clear }))

  const pad = (n) => String(n).padStart(2, '0')
  const formatted = () => {
    const h = Math.floor(remaining / 3600)
    const m = Math.floor((remaining % 3600) / 60)
    const s = remaining % 60
    return h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`
  }

  const defaultColor = document.documentElement.classList.contains('dark')
    ? 'var(--wc-neutral-100)'
    : 'var(--wc-neutral-900)'

  return (
    <span
      className={`wc-countdown ${className}`}
      style={{ fontSize, color: color || defaultColor }}
    >
      {formatted()}
    </span>
  )
})

export default Countdown