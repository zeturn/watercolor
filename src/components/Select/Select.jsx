import React, { useState, useRef, useEffect } from 'react'

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
  searchable = false,
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
  const [searchQuery, setSearchQuery] = useState('')
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

  const filteredOptions = searchable && searchQuery
    ? options.filter(option => 
        (option.label || option.value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options

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

  const getSelectStyles = () => {
    const styles = { ...style }
    
    // Use CSS variables for theming
    if (variant === 'outlined') {
      styles.borderColor = error ? 'var(--wc-error-500)' : `var(--wc-${color}-500)`
    } else if (variant === 'filled') {
      styles.backgroundColor = 'var(--wc-neutral-50)'
    }
    
    return styles
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

  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearch?.(query)
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

  const selectId = id || name || `select-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className={getSelectClasses()} ref={selectRef}>
      {label && (
        <label
          htmlFor={selectId}
          className={`wc-select__label ${(isFocused || selectedOption) ? 'wc-select__label--active' : ''}`}
        >
          {label}
          {required && <span className="wc-select__required">*</span>}
        </label>
      )}
      
      <div className="wc-select__container">
        <div
          className="wc-select__control"
          style={getSelectStyles()}
          onClick={handleToggle}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex={disabled ? -1 : 0}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby={label ? `${selectId}-label` : undefined}
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
            <div className={`wc-select__arrow ${isOpen ? 'wc-select__arrow--open' : ''}`}>
              ▼
            </div>
          </div>
        </div>
        
        {isOpen && (
          <div 
            className="wc-select__menu"
            style={{ maxHeight }}
            ref={optionsRef}
          >
            {searchable && (
              <div className="wc-select__search">
                <input
                  type="text"
                  className="wc-select__search-input"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  autoFocus
                />
              </div>
            )}
            
            <div className="wc-select__options" role="listbox">
              {filteredOptions.length === 0 ? (
                <div className="wc-select__no-options">No options found</div>
              ) : (
                filteredOptions.map((option, index) => {
                  const isSelected = multiple 
                    ? Array.isArray(value) && value.includes(option.value)
                    : value === option.value
                  
                  return (
                    <div
                      key={option.value || index}
                      className={`wc-select__option ${isSelected ? 'wc-select__option--selected' : ''} ${option.disabled ? 'wc-select__option--disabled' : ''}`}
                      onClick={() => handleOptionClick(option)}
                      role="option"
                      aria-selected={isSelected}
                    >
                      {multiple && (
                        <span className={`wc-select__checkbox ${isSelected ? 'wc-select__checkbox--checked' : ''}`}>
                          {isSelected && '✓'}
                        </span>
                      )}
                      {renderOption ? renderOption(option) : (option.label || option.value)}
                    </div>
                  )
                })
              )}
            </div>
          </div>
        )}
      </div>
      
      {(helperText || (error && errorMessage)) && (
        <div className={`wc-select__helper-text ${error ? 'wc-select__helper-text--error' : ''}`}>
          {error && errorMessage ? errorMessage : helperText}
        </div>
      )}
    </div>
  )
}

Select.displayName = 'Select'

export default Select