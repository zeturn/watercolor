import React from 'react'

export default function CircularProgress({
  value = 0,
  size = 40,
  thickness = 3.6,
  variant = 'indeterminate', // 'determinate' | 'indeterminate'
  color = 'primary', // tailwind 颜色 key
  showValue = false,
  className = '',
  ...rest
}) {
  const sizeNumber = typeof size === 'string' ? parseInt(size, 10) : size
  const center = sizeNumber / 2
  const radius = (sizeNumber - thickness) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset =
    variant === 'determinate' ? circumference - (value / 100) * circumference : 0

  const progressClasses = [
    'wc-circular-progress inline-flex relative items-center justify-center',
    `wc-circular-progress--${color}`,
    variant === 'indeterminate' && 'wc-circular-progress--indeterminate',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const circleClasses = [
    'wc-circular-progress-circle',
    variant === 'indeterminate' && 'wc-circular-progress-circle--indeterminate',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      className={progressClasses}
      {...rest}
    >
      <svg
        width={sizeNumber}
        height={sizeNumber}
        viewBox={`0 0 ${sizeNumber} ${sizeNumber}`}
        className="wc-circular-progress-svg"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={thickness}
          stroke="currentColor"
          fill="none"
          className="wc-circular-progress-bg"
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={thickness}
          stroke="currentColor"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={circleClasses}
        />
      </svg>
      {showValue && (
        <div className="wc-circular-progress-value">{Math.round(value)}%</div>
      )}
    </div>
  )
} 