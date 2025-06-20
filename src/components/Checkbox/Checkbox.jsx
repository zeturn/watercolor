import React, { useState } from 'react'

const Checkbox = ({
  checked = false,
  onChange,
  indeterminate = false,
  disabled = false,
  required = false,
  size = 'md',
  color = 'primary',
  label = '',
  labelPlacement = 'end',
  value = '',
  name = '',
  id = '',
  icon = null,
  checkedIcon = null,
  indeterminateIcon = null,
  className = '',
  style = {},
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const getCheckboxClasses = () => {
    const classes = ['wc-checkbox']
    
    classes.push(`wc-checkbox--${size}`)
    classes.push(`wc-checkbox--${color}`)
    classes.push(`wc-checkbox--label-${labelPlacement}`)
    
    if (checked) classes.push('wc-checkbox--checked')
    if (indeterminate) classes.push('wc-checkbox--indeterminate')
    if (disabled) classes.push('wc-checkbox--disabled')
    if (isFocused) classes.push('wc-checkbox--focused')
    
    return classes.concat(className).filter(Boolean).join(' ')
  }

  const getCheckboxStyles = () => {
    const styles = { ...style }
    
    // Use CSS variables for theming
    if (checked || indeterminate) {
      styles.borderColor = `var(--wc-${color}-500)`
      styles.backgroundColor = `var(--wc-${color}-500)`
    } else {
      styles.borderColor = 'var(--wc-neutral-300)'
      styles.backgroundColor = 'transparent'
    }
    
    return styles
  }

  const handleChange = (e) => {
    if (!disabled) {
      onChange?.({ 
        target: { 
          name, 
          value, 
          checked: !checked 
        },
        preventDefault: () => {},
        stopPropagation: () => {}
      })
    }
  }

  const handleFocus = (e) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      handleChange(e)
    }
  }

  const renderIcon = () => {
    if (indeterminate) {
      return indeterminateIcon || (
        <svg className="wc-checkbox__icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 13H5v-2h14v2z"/>
        </svg>
      )
    } else if (checked) {
      return checkedIcon || (
        <svg className="wc-checkbox__icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      )
    } else {
      return icon || null
    }
  }

  const checkboxId = id || name || `checkbox-${Math.random().toString(36).substr(2, 9)}`

  const checkboxElement = (
    <div
      className="wc-checkbox__container"
      onClick={handleChange}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      role="checkbox"
      aria-checked={indeterminate ? 'mixed' : checked}
      aria-disabled={disabled}
      aria-required={required}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <input
        type="checkbox"
        className="wc-checkbox__input"
        checked={checked}
        onChange={() => {}} // Controlled by container click
        disabled={disabled}
        required={required}
        value={value}
        name={name}
        id={checkboxId}
        tabIndex={-1}
        {...props}
      />
      <div 
        className="wc-checkbox__box"
        style={getCheckboxStyles()}
      >
        {renderIcon()}
      </div>
    </div>
  )

  if (label) {
    return (
      <label className={getCheckboxClasses()} htmlFor={checkboxId}>
        {labelPlacement === 'start' && (
          <span className="wc-checkbox__label">{label}</span>
        )}
        {checkboxElement}
        {labelPlacement === 'end' && (
          <span className="wc-checkbox__label">{label}</span>
        )}
      </label>
    )
  }

  return (
    <div className={getCheckboxClasses()}>
      {checkboxElement}
    </div>
  )
}

Checkbox.displayName = 'Checkbox'

export default Checkbox