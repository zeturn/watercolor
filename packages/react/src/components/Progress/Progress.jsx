import React from 'react'
import { useLocale } from '../../LocaleReact'
import './style.css'

const Progress = ({
  value = 0,
  label = '',
  showPercent = false,
  color = 'primary',
  size = 'md',
  animated = false,
  className = '',
  ...props
}) => {
  const { messages } = useLocale()
  const validColors = ['primary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink']
  const safeColor = validColors.includes(color) ? color : 'primary'

  const numericValue = Number(value)
  const safeValue = Number.isNaN(numericValue) ? 0 : Math.max(0, Math.min(100, numericValue))

  const progressClasses = ['wc-progress', `wc-progress--${size}`]

  const barClasses = [
    'wc-progress__bar',
    `wc-progress__bar--${safeColor}`,
    animated && 'wc-progress__bar--animated'
  ].filter(Boolean).join(' ')

  const barStyle = {
    width: `${safeValue}%`
  }

  return (
    <div className={`wc-progress-wrapper ${className}`} {...props}>
      {(label || showPercent) && (
        <div className="wc-progress-header">
          {label && (
            <span className="wc-progress-label">
              {label}
            </span>
          )}
          {showPercent && (
            <span className="wc-progress-percent">
              {Math.round(safeValue)}%
            </span>
          )}
        </div>
      )}

      <div
        className={progressClasses.join(' ')}
        role="progressbar"
        aria-label={label || messages.progress}
        aria-valuenow={safeValue}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className={barClasses}
          style={barStyle}
        />
      </div>
    </div>
  )
}

Progress.displayName = 'Progress'

export default Progress
