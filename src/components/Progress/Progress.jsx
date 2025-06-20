import React from 'react'

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
  const validColors = ['primary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink']
  const safeColor = validColors.includes(color) ? color : 'primary'
  
  const safeValue = Math.max(0, Math.min(100, value))
  
  const progressClasses = ['wc-progress']
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  }
  progressClasses.push(sizeClasses[size])
  
  const barClasses = [
    'wc-progress__bar',
    `bg-${safeColor}-500`,
    animated && 'animate-pulse'
  ].filter(Boolean).join(' ')
  
  const barStyle = {
    width: `${safeValue}%`
  }
  
  return (
    <div className={`wc-progress-wrapper ${className}`} {...props}>
      {(label || showPercent) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              {label}
            </label>
          )}
          {showPercent && (
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              {Math.round(safeValue)}%
            </span>
          )}
        </div>
      )}
      
      <div className={progressClasses.join(' ')}>
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