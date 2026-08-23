import { createSignal, createEffect } from 'solid-js'

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
  const [value, setValue] = createSignal(from)
  const [isAnimating, setIsAnimating] = createSignal(false)
  let startTimeRef = null
  let rafRef = null

  const step = (timestamp) => {
    if (startTimeRef === null) startTimeRef = timestamp
    const progress = Math.min((timestamp - startTimeRef) / duration, 1)
    setValue(from + (to - from) * progress)
    if (progress < 1 && active) {
      rafRef = requestAnimationFrame(step)
    } else {
      setValue(to)
      setIsAnimating(false)
      onFinish?.()
    }
  }

  const start = () => {
    cancel()
    startTimeRef = null
    if (active) {
      setIsAnimating(true)
      rafRef = requestAnimationFrame(step)
    } else {
      setValue(to)
      setIsAnimating(false)
    }
  }

  const cancel = () => {
    if (rafRef) {
      cancelAnimationFrame(rafRef)
      rafRef = null
    }
  }

  // Restart when dependencies change
  createEffect(() => {
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

  const classes = () => [
    'wc-number-animation',
    isAnimating() ? 'wc-number-animation--playing' : '',
    easing && ['ease-in', 'ease-out', 'ease-in-out'].includes(easing) ? `wc-number-animation--${easing}` : '',
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span class={classes()} style={style} {...rest}>
      {formatNumber(value())}
    </span>
  )
}

export default NumberAnimation
