import React, { useEffect, useRef, useState } from 'react'
import './style.css'

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
  prefix = '',
  suffix = '',
  separator = '',
  formatter = null,
  easing = 'linear',
  onFinish,
  className = '',
  style = {},
  ...rest
}) => {
  const [value, setValue] = useState(from)
  const [isAnimating, setIsAnimating] = useState(false)
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
      setIsAnimating(false)
      onFinish?.()
    }
  }

  const start = () => {
    cancel()
    startTimeRef.current = null
    if (active) {
      setIsAnimating(true)
      rafRef.current = requestAnimationFrame(step)
    } else {
      setValue(to)
      setIsAnimating(false)
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
    if (formatter) {
      return formatter(val)
    }

    const fixed = val.toFixed(precision)

    let formatted = fixed

    // 千分位分隔符
    if (showSeparator || separator) {
      if (separator) {
        const parts = fixed.split('.')
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)
        formatted = parts.join('.')
      } else {
        formatted = Number(fixed).toLocaleString(locale || undefined, {
          minimumFractionDigits: precision,
          maximumFractionDigits: precision
        })
      }
    }

    return `${prefix}${formatted}${suffix}`
  }

  const classes = [
    'wc-number-animation',
    isAnimating ? 'wc-number-animation--playing' : '',
    easing && ['ease-in', 'ease-out', 'ease-in-out'].includes(easing) ? `wc-number-animation--${easing}` : '',
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} style={style} {...rest}>
      {formatNumber(value)}
    </span>
  )
}

export default NumberAnimation
