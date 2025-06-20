import React, { useId } from 'react'

const Switch = ({
  checked = false,
  onChange,
  label = '',
  description = '',
  disabled = false,
  required = false,
  color = 'primary',
  className = '',
  ...props
}) => {
  const labelId = useId()
  
  const validColors = ['primary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink']
  const safeColor = validColors.includes(color) ? color : 'primary'
  
  const switchClasses = [
    'wc-switch',
    checked && `wc-switch--${safeColor}`,
    checked && 'wc-switch--checked',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  ].filter(Boolean).join(' ')
  
  const thumbClasses = [
    'wc-switch__thumb',
    checked && 'wc-switch__thumb--checked'
  ].filter(Boolean).join(' ')
  
  const handleToggle = () => {
    if (disabled || !onChange) return
    onChange(!checked)
  }
  
  const colorStyles = {
    success: checked ? 'bg-success-500' : '',
    warning: checked ? 'bg-warning-500' : '',
    error: checked ? 'bg-error-500' : '',
    purple: checked ? 'bg-purple-500' : '',
    orange: checked ? 'bg-orange-500' : '',
    cyan: checked ? 'bg-cyan-500' : '',
    pink: checked ? 'bg-pink-500' : '',
  }
  
  return (
    <div className="wc-switch-wrapper">
      {label && (
        <label 
          id={labelId}
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
        >
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="flex items-center">
        <button
          className={`${switchClasses} ${colorStyles[safeColor] || ''}`}
          disabled={disabled}
          onClick={handleToggle}
          type="button"
          role="switch"
          aria-checked={checked}
          aria-labelledby={labelId}
          {...props}
        >
          <span className={thumbClasses} />
        </button>
        
        {description && (
          <span className="ml-3 text-sm text-neutral-500 dark:text-neutral-400">
            {description}
          </span>
        )}
      </div>
    </div>
  )
}

Switch.displayName = 'Switch'

export default Switch 