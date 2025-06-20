import React, { useEffect, useRef, useState } from 'react'

/**
 * NumberAnimation 数字递增动画
 */
const NumberAnimation = ({
  active = true,
  duration = 3000,
  from = 0,
  to,
  locale = '',
  precision = 0,
  showSeparator = false,
  onFinish,
  className = '',
  style = {},
  ...rest
}) => {
  const [value, setValue] = useState(from)
  const startTimeRef = useRef(null)
  const rafRef = useRef(null)

  const step = (timestamp) => {
    if (startTimeRef.current === null) startTimeRef.current = timestamp
    const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
    setValue(from + (to - from) * progress)
    if (progress < 1 && active) {
      rafRef.current = requestAnimationFrame(step)
    } else {
      setValue(to)
      onFinish?.()
    }
  }

  const start = () => {
    cancel()
    startTimeRef.current = null
    if (active) {
      rafRef.current = requestAnimationFrame(step)
    } else {
      setValue(to)
    }
  }

  const cancel = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }

  // Restart when dependencies change
  useEffect(() => {
    start()
    return cancel
  }, [active, from, to, duration])

  const formatNumber = (val) => {
    const fixed = val.toFixed(precision)
    if (showSeparator) {
      const num = Number(fixed)
      return num.toLocaleString(locale || undefined, {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision
      })
    }
    return fixed
  }

  return (
    <span className={`wc-number-animation ${className}`} style={style} {...rest}>
      {formatNumber(value)}
    </span>
  )
}

export default NumberAnimation