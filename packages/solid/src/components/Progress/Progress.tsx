
import { useLocale } from '../../LocaleSolid'
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
    <div class={`wc-progress-wrapper ${className}`} {...props}>
      {(label || showPercent) && (
        <div class="wc-progress-header">
          {label && (
            <span class="wc-progress-label">
              {label}
            </span>
          )}
          {showPercent && (
            <span class="wc-progress-percent">
              {Math.round(safeValue)}%
            </span>
          )}
        </div>
      )}

      <div
        class={progressClasses.join(' ')}
        role="progressbar"
        aria-label={label || messages.progress}
        aria-valuenow={safeValue}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class={barClasses}
          style={barStyle}
        />
      </div>
    </div>
  )
}

Progress.displayName = 'Progress'

export default Progress
