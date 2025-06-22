import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import { 
  getCountdownClasses, 
  formatTime, 
  createTimer,
  getDefaultColor 
} from './utils.js'
import './style.css'

export const Countdown = forwardRef(function Countdown(
  {
    seconds,
    autoStart = true,
    size = 'md',
    color = 'default',
    format = 'simple',
    fontSize = '',
    customColor = '',
    warningTime = null,
    onFinish = () => {},
    className = '',
  }, ref) {
  const [remaining, setRemaining] = useState(seconds)
  const timerRef = useRef(null)

  const timer = createTimer(() => {
    setRemaining((prev) => {
      if (prev > 0) return prev - 1
      timer.stop()
      onFinish()
      return 0
    })
  })

  const clear = () => {
    timer.stop()
  }

  const start = () => {
    timer.start()
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

  const countdownClasses = getCountdownClasses({
    size,
    color,
    format,
    finished: remaining === 0,
    warningTime,
    remaining,
    className
  }).join(' ')

  const formatted = formatTime(remaining)
  
  const finalColor = customColor || 
    (fontSize ? getDefaultColor() : undefined)

  const style = {}
  if (fontSize) style.fontSize = fontSize
  if (finalColor) style.color = finalColor

  return (
    <span
      className={countdownClasses}
      style={style}
    >
      {formatted}
    </span>
  )
})

export default Countdown