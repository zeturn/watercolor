import { createSignal, createEffect } from 'solid-js'
import { useId } from '../../useId'

import './style.css'
import { getInputClasses } from './utils.js'

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
  const [isFocused, setIsFocused] = createSignal(false)
  const [hasValue, setHasValue] = createSignal(Boolean(value))
  let inputRef = null
  const autoId = useId();
  const id = providedId || autoId;

  createEffect(() => {
    setHasValue(Boolean(value))
  }, [value])

  createEffect(() => {
    if (autoFocus && inputRef) {
      inputRef.focus()
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
    // 统一交由全局 CSS 控制，保留用户自定义的 style 覆盖
    return { ...style }
  }

  const InputComponent = multiline ? 'textarea' : 'input'

  return (
    <div class="wc-input-container">
      {label && (
        <label 
          htmlFor={id}
          class={`wc-input-label ${isFocused || hasValue ? 'wc-input-label--active' : ''} ${error ? 'wc-input-label--error' : ''}`}
        >
          {label}
          {required && <span class="wc-input-label__required">*</span>}
        </label>
      )}
      
      <div class="wc-input-wrapper">
        {startAdornment && (
          <div class="wc-input-adornment wc-input-adornment--start">
            {startAdornment}
          </div>
        )}
        
        <InputComponent
          ref={inputRef}
          class={getInputClasses()}
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
          <div class="wc-input-adornment wc-input-adornment--end">
            {endAdornment}
          </div>
        )}
      </div>
      
      {(helperText || error) && (
        <div class={`wc-input-helper-text ${error ? 'wc-input-helper-text--error' : ''}`}>
          {error || helperText}
        </div>
      )}
    </div>
  )
}

Input.displayName = 'Input'

export default Input 