import React from 'react'
import './style.css'
import { 
  calculateCircleParams, 
  calculateStrokeDashoffset, 
  getCircularProgressClasses, 
  getCircleClasses, 
  formatDisplayValue,
  getAriaProps
} from './utils.js'

export default function CircularProgress({
  value = 0,
  size = 40,
  thickness = 3.6,
  variant = 'indeterminate', // 'determinate' | 'indeterminate'
  color = 'primary',
  showValue = false,
  className = '',
  ...rest
}) {
  const { sizeNumber, center, radius, circumference } = calculateCircleParams(size, thickness)
  const strokeDashoffset = calculateStrokeDashoffset(variant, value, circumference)
  
  const progressClasses = getCircularProgressClasses({
    color,
    variant,
    className
  }).join(' ')
  
  const circleClasses = getCircleClasses(variant).join(' ')
  const ariaProps = getAriaProps({ value, variant })

  return (
    <div
      className={progressClasses}
      {...ariaProps}
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
        <div className="wc-circular-progress-value">{formatDisplayValue(value)}%</div>
      )}
    </div>
  )
} 