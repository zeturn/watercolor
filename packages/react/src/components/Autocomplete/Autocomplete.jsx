import React, { useState, useRef, useEffect } from 'react'
import './style.css'

const Autocomplete = ({
  value = null,
  onChange,
  options = [],
  placeholder = 'Type to search...',
  label = '',
  helperText = '',
  error = false,
  errorMessage = '',
  required = false,
  disabled = false,
  readonly = false,
  multiple = false,
  freeSolo = false,
  clearable = true,
  fullWidth = false,
  size = 'md',
  variant = 'outlined',
  minSearchLength = 0,
  noOptionsText = 'No options found',
  name = '',
  id = '',
  className = '',
  style = {},
  onFocus,
  onBlur,
  onInputChange,
  filterOptions,
  renderOption,
  renderInput,
  getOptionLabel,
  getOptionValue,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const autocompleteRef = useRef(null)
  const inputRef = useRef(null)

  // Default functions
  const defaultGetOptionLabel = (option) => {
    if (!option) return ''
    return typeof option === 'object' ? (option.label || option.value || '') : String(option)
  }

  const defaultGetOptionValue = (option) => {
    if (!option) return null
    return typeof option === 'object' ? (option.value !== undefined ? option.value : option) : option
  }

  const getLabel = getOptionLabel || defaultGetOptionLabel
  const getValue = getOptionValue || defaultGetOptionValue

  // Initialize search query from value
  useEffect(() => {
    if (!multiple && value) {
      setSearchQuery(getLabel(value))
    } else if (!value) {
      setSearchQuery('')
    }
  }, [value, multiple])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const defaultFilterOptions = (options, query) => {
    if (!query || query.length < minSearchLength) {
      return options
    }
    return options.filter(option => 
      getLabel(option).toLowerCase().includes(query.toLowerCase())
    )
  }

  const filteredOptions = filterOptions 
    ? filterOptions(options, searchQuery)
    : defaultFilterOptions(options, searchQuery)

  const isSelected = (option) => {
    const optionValue = getValue(option)
    if (multiple && Array.isArray(value)) {
      return value.some(v => getValue(v) === optionValue)
    }
    return getValue(value) === optionValue
  }

  const getAutocompleteClasses = () => {
    const classes = ['wc-autocomplete']
    if (fullWidth) classes.push('wc-autocomplete--full-width')
    return classes.concat(className).filter(Boolean).join(' ')
  }

  const getLabelClasses = () => {
    const classes = ['wc-autocomplete__label']
    classes.push(`wc-autocomplete__label--${size}`)
    if (error) classes.push('wc-autocomplete__label--error')
    return classes.join(' ')
  }

  const getContainerClasses = () => {
    const classes = ['wc-autocomplete__container']
    classes.push(`wc-autocomplete__container--${variant}`)
    classes.push(`wc-autocomplete__container--${size}`)
    if (disabled) classes.push('wc-autocomplete__container--disabled')
    if (error) classes.push('wc-autocomplete__container--error')
    if (isOpen) classes.push('wc-autocomplete__container--open')
    return classes.join(' ')
  }

  const getOptionClasses = (option, index) => {
    const classes = ['wc-autocomplete__option']
    if (isSelected(option)) classes.push('wc-autocomplete__option--selected')
    if (index === highlightedIndex) classes.push('wc-autocomplete__option--highlighted')
    if (option.disabled) classes.push('wc-autocomplete__option--disabled')
    return classes.join(' ')
  }

  const handleFocus = (e) => {
    setIsOpen(true)
    onFocus?.(e)
  }

  const handleBlur = (e) => {
    setTimeout(() => {
      setIsOpen(false)
      onBlur?.(e)
    }, 200)
  }

  const handleInputChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    setIsOpen(true)
    setHighlightedIndex(-1)
    onInputChange?.(query)

    if (freeSolo) {
      onChange?.({ target: { name, value: query } })
    }
  }

  const handleClear = (e) => {
    e.stopPropagation()
    setSearchQuery('')
    setIsOpen(false)
    setHighlightedIndex(-1)
    const newValue = multiple ? [] : null
    onChange?.({ target: { name, value: newValue } })
  }

  const handleOptionClick = (option) => {
    if (option.disabled) return

    const optionValue = getValue(option)
    let newValue

    if (multiple) {
      const currentValues = Array.isArray(value) ? [...value] : []
      const index = currentValues.findIndex(v => getValue(v) === optionValue)
      
      if (index > -1) {
        currentValues.splice(index, 1)
      } else {
        currentValues.push(option)
      }
      newValue = currentValues
      setSearchQuery('')
    } else {
      newValue = option
      setSearchQuery(getLabel(option))
      setIsOpen(false)
    }

    setHighlightedIndex(-1)
    onChange?.({ target: { name, value: newValue } })
  }

  const handleKeyDown = (e) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setIsOpen(true)
      e.preventDefault()
      return
    }

    if (!isOpen || filteredOptions.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setHighlightedIndex(prev => 
          Math.min(prev + 1, filteredOptions.length - 1)
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex(prev => Math.max(prev - 1, 0))
        break
      case 'Enter':
        e.preventDefault()
        if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
          handleOptionClick(filteredOptions[highlightedIndex])
        }
        break
      case 'Escape':
        setIsOpen(false)
        setHighlightedIndex(-1)
        inputRef.current?.blur()
        break
      default:
        break
    }
  }

  const autocompleteId = id || name || `autocomplete-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className={getAutocompleteClasses()} ref={autocompleteRef} style={style}>
      {label && (
        <label
          htmlFor={autocompleteId}
          className={getLabelClasses()}
        >
          {label}
          {required && <span className="wc-autocomplete__required">*</span>}
        </label>
      )}
      
      <div className={getContainerClasses()}>
        {renderInput ? (
          renderInput({
            id: autocompleteId,
            value: searchQuery,
            onChange: handleInputChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onKeyDown: handleKeyDown,
            placeholder,
            disabled,
            readonly,
            ref: inputRef
          })
        ) : (
          <input
            id={autocompleteId}
            ref={inputRef}
            type="text"
            className="wc-autocomplete__input"
            placeholder={placeholder}
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            readOnly={readonly}
            autoComplete="off"
          />
        )}
        
        <div className="wc-autocomplete__indicators">
          {clearable && searchQuery && (
            <button
              type="button"
              className="wc-autocomplete__clear"
              onClick={handleClear}
              tabIndex={-1}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </button>
          )}
          <div className={`wc-autocomplete__arrow${isOpen && filteredOptions.length > 0 ? ' wc-autocomplete__arrow--open' : ''}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6,9 12,15 18,9" />
            </svg>
          </div>
        </div>
      </div>

      {isOpen && searchQuery.length >= minSearchLength && (
        <div className="wc-autocomplete__dropdown">
          {filteredOptions.length === 0 ? (
            <div className="wc-autocomplete__no-options">
              {noOptionsText}
            </div>
          ) : (
            <div className="wc-autocomplete__options">
              {filteredOptions.map((option, index) => (
                <div
                  key={getValue(option) || index}
                  className={getOptionClasses(option, index)}
                  onClick={() => handleOptionClick(option)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {renderOption ? (
                    renderOption(option, { selected: isSelected(option) })
                  ) : (
                    <span className="wc-autocomplete__option-text">
                      {getLabel(option)}
                    </span>
                  )}
                  {isSelected(option) && (
                    <svg 
                      className="wc-autocomplete__option-check" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {(error || helperText) && (
        <div>
          {error ? (
            <p className="wc-autocomplete__error">{errorMessage || error}</p>
          ) : (
            <p className="wc-autocomplete__helper">{helperText}</p>
          )}
        </div>
      )}
    </div>
  )
}

Autocomplete.displayName = 'Autocomplete'

export default Autocomplete
