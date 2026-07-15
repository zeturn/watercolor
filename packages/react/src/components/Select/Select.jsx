import React, { useState, useRef, useEffect, useId } from 'react'
import './style.css'

const Select = ({
  value = '',
  onChange,
  options = [],
  placeholder = 'Select an option',
  label = '',
  helperText = '',
  error = false,
  errorMessage = '',
  required = false,
  disabled = false,
  multiple = false,
  clearable = false,
  fullWidth = false,
  size = 'md',
  variant = 'filled',
  color = 'primary',
  maxHeight = 200,
  name = '',
  id = '',
  className = '',
  style = {},
  onFocus,
  onBlur,
  onSearch,
  renderOption,
  renderValue,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const selectRef = useRef(null)
  const optionsRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
        setIsFocused(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const selectedOption = multiple 
    ? options.filter(option => value.includes(option.value))
    : options.find(option => option.value === value)

  const getSelectClasses = () => {
    const classes = ['wc-select']
    
    classes.push(`wc-select--${variant}`)
    classes.push(`wc-select--${size}`)
    
    if (error) classes.push('wc-select--error')
    if (disabled) classes.push('wc-select--disabled')
    if (isOpen) classes.push('wc-select--open')
    if (isFocused) classes.push('wc-select--focused')
    if (fullWidth) classes.push('wc-select--full-width')
    if (multiple) classes.push('wc-select--multiple')
    
    return classes.concat(className).filter(Boolean).join(' ')
  }

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
      setIsFocused(!isOpen)
    }
  }

  const handleOptionClick = (option) => {
    if (option.disabled) return

    let newValue
    if (multiple) {
      const currentValues = Array.isArray(value) ? value : []
      if (currentValues.includes(option.value)) {
        newValue = currentValues.filter(v => v !== option.value)
      } else {
        newValue = [...currentValues, option.value]
      }
    } else {
      newValue = option.value
      setIsOpen(false)
      setIsFocused(false)
    }

    onChange?.({ target: { name, value: newValue } })
  }

  const handleClear = (e) => {
    e.stopPropagation()
    const newValue = multiple ? [] : ''
    onChange?.({ target: { name, value: newValue } })
  }

  const handleFocus = (e) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e) => {
    // Don't blur immediately if clicking on options
    setTimeout(() => {
      if (!selectRef.current?.contains(document.activeElement)) {
        setIsFocused(false)
        onBlur?.(e)
      }
    }, 100)
  }

  const handleKeyDown = (e) => {
    if (disabled) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggle()
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      setIsFocused(false)
    }
  }

  const renderSelectedValue = () => {
    if (multiple && Array.isArray(selectedOption)) {
      if (selectedOption.length === 0) {
        return <span className="wc-select__placeholder">{placeholder}</span>
      }
      return (
        <div className="wc-select__chips">
          {selectedOption.map(option => (
            <span key={option.value} className="wc-select__chip">
              {renderValue ? renderValue(option) : (option.label || option.value)}
            </span>
          ))}
        </div>
      )
    } else if (selectedOption) {
      return renderValue ? renderValue(selectedOption) : (selectedOption.label || selectedOption.value)
    } else {
      return <span className="wc-select__placeholder">{placeholder}</span>
    }
  }

  const getLabelClasses = () => {
    const classes = ['wc-select__label']
    classes.push(`wc-select__label--${size}`)
    if (error) classes.push('wc-select__label--error')
    if (isFocused || selectedOption) classes.push('wc-select__label--active')
    return classes.join(' ')
  }
  const getContainerClasses = () => {
    const classes = ['wc-select__container']
    classes.push(`wc-select__container--${variant}`)
    classes.push(`wc-select__container--${size}`)
    if (disabled) classes.push('wc-select__container--disabled')
    if (error) classes.push('wc-select__container--error')
    if (isFocused) classes.push('wc-select__container--focused')
    if (isOpen) classes.push('wc-select__container--open')
    return classes.join(' ')
  }
  const getOptionClasses = (option, isSelected) => {
    const classes = ['wc-select__option']
    if (isSelected) classes.push('wc-select__option--selected')
    if (option.disabled) classes.push('wc-select__option--disabled')
    return classes.join(' ')
  }

  const generatedId = useId()
  const selectId = id || name || generatedId

  return (
    <div className={getSelectClasses()} style={style} ref={selectRef}>
      {label && (
        <label
          htmlFor={selectId}
          id={`${selectId}-label`}
          className={getLabelClasses()}
        >
          {label}
          {required && <span className="wc-select__required">*</span>}
        </label>
      )}
      <div className={getContainerClasses()}>
        <div
          className="wc-select__control"
          id={selectId}
          onClick={handleToggle}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby={label ? `${selectId}-label` : undefined}
          aria-controls={`${selectId}-options`}
          aria-disabled={disabled}
          aria-required={required}
        >
          <div className="wc-select__value">
            {renderSelectedValue()}
          </div>
          <div className="wc-select__indicators">
            {clearable && (selectedOption || (multiple && value?.length > 0)) && (
              <button
                type="button"
                className="wc-select__clear"
                onClick={handleClear}
                tabIndex={-1}
              >
                ×
              </button>
            )}
            <div className={`wc-select__arrow${isOpen ? ' wc-select__arrow--open' : ''}`}>
              ▼
            </div>
          </div>
        </div>
        {isOpen && (
          <div
            className="wc-select__dropdown"
            id={`${selectId}-options`}
            style={{ maxHeight }}
            ref={optionsRef}
          >
            <div className="wc-select__options" role="listbox">
              {options.length === 0 ? (
                <div className="wc-select__no-options">没有可选项</div>
              ) : (
                options.map((option, index) => {
                  const isSelected = multiple
                    ? Array.isArray(value) && value.includes(option.value)
                    : value === option.value
                  return (
                    <div
                      key={option.value || index}
                      className={getOptionClasses(option, isSelected)}
                      onClick={() => handleOptionClick(option)}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <span className="wc-select__option-text">
                        {renderOption ? renderOption(option) : (option.label || option.value)}
                      </span>
                      {isSelected && (
                        <svg className="wc-select__option-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20,6 9,17 4,12" />
                        </svg>
                      )}
                    </div>
                  )
                })
              )}
            </div>
          </div>
        )}
      </div>
      {(error || helperText) && (
        <div>
          {error ? (
            <p className="wc-select__error">{errorMessage || error}</p>
          ) : (
            <p className="wc-select__helper">{helperText}</p>
          )}
        </div>
      )}
    </div>
  )
}

Select.displayName = 'Select'

export default Select
