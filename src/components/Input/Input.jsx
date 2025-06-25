import React, { useState, useRef, useEffect, useId } from 'react'

const Input = ({
  value = '',
  onChange,
  type = 'text',
  placeholder = '',
  disabled = false,
  readonly = false,
  required = false,
  autoFocus = false,
  maxLength,
  minLength,
  size = 'md',
  variant = 'filled',
  color = 'primary',
  error = false,
  helperText = '',
  label = '',
  startAdornment = null,
  endAdornment = null,
  fullWidth = false,
  multiline = false,
  rows = 4,
  autoComplete = 'off',
  name = '',
  id: providedId = '',
  className = '',
  style = {},
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp,
  onKeyPress,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(Boolean(value))
  const inputRef = useRef(null)
  const autoId = useId();
  const id = providedId || autoId;

  useEffect(() => {
    setHasValue(Boolean(value))
  }, [value])

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  const handleChange = (e) => {
    const newValue = e.target.value
    setHasValue(Boolean(newValue))
    onChange?.(e)
  }

  const handleFocus = (e) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  const getInputClasses = () => {
    const classes = ['wc-input']
    
    // Size classes
    classes.push(`wc-input--${size}`)
    
    // Variant classes
    classes.push(`wc-input--${variant}`)
    
    // State classes
    if (error) classes.push('wc-input--error')
    if (disabled) classes.push('wc-input--disabled')
    if (readonly) classes.push('wc-input--readonly')
    if (isFocused) classes.push('wc-input--focused')
    if (hasValue) classes.push('wc-input--has-value')
    if (fullWidth) classes.push('wc-input--full-width')
    if (startAdornment) classes.push('wc-input--has-start-adornment')
    if (endAdornment) classes.push('wc-input--has-end-adornment')
    
    return classes.concat(className).filter(Boolean).join(' ')
  }

  const getInputStyles = () => {
    const styles = { ...style }
    
    // Use CSS variables for theming
    if (variant === 'outlined') {
      styles.border = `1px solid var(--wc-${color}-500)`
      styles.backgroundColor = 'transparent'
    } else if (variant === 'filled') {
      styles.backgroundColor = 'var(--wc-neutral-50)'
      styles.border = 'none'
    } else if (variant === 'standard') {
      styles.borderTop = 'none'
      styles.borderLeft = 'none'
      styles.borderRight = 'none'
      styles.borderBottom = `1px solid var(--wc-${color}-500)`
      styles.backgroundColor = 'transparent'
      styles.borderRadius = '0'
    }
    
    if (error) {
      styles.borderColor = 'var(--wc-error-500)'
    }
    
    return styles
  }

  const InputComponent = multiline ? 'textarea' : 'input'

  return (
    <div className="wc-input-container">
      {label && (
        <label 
          htmlFor={id}
          className={`wc-input-label ${isFocused || hasValue ? 'wc-input-label--active' : ''} ${error ? 'wc-input-label--error' : ''}`}
        >
          {label}
          {required && <span className="wc-input-label__required">*</span>}
        </label>
      )}
      
      <div className="wc-input-wrapper">
        {startAdornment && (
          <div className="wc-input-adornment wc-input-adornment--start">
            {startAdornment}
          </div>
        )}
        
        <InputComponent
          ref={inputRef}
          className={getInputClasses()}
          style={getInputStyles()}
          type={multiline ? undefined : type}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onKeyPress={onKeyPress}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          rows={multiline ? rows : undefined}
          autoComplete={autoComplete}
          name={name}
          id={id}
          {...props}
        />
        
        {endAdornment && (
          <div className="wc-input-adornment wc-input-adornment--end">
            {endAdornment}
          </div>
        )}
      </div>
      
      {(helperText || error) && (
        <div className={`wc-input-helper-text ${error ? 'wc-input-helper-text--error' : ''}`}>
          {error || helperText}
        </div>
      )}
    </div>
  )
}

Input.displayName = 'Input'

export default Input 