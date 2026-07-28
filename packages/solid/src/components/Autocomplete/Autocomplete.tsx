import { createSignal, createEffect } from 'solid-js'
import { useId } from '../../useId'

import { useOverlayLayer } from '../../interactions'
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
  variant = 'filled',
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
  const [isOpen, setIsOpen] = createSignal(false)
  const [searchQuery, setSearchQuery] = createSignal('')
  const [highlightedIndex, setHighlightedIndex] = createSignal(-1)
  let autocompleteRef = null
  let inputRef = null
  let dropdownRef = null

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
  createEffect(() => {
    if (!multiple && value) {
      setSearchQuery(getLabel(value))
    } else if (!value) {
      setSearchQuery('')
    }
  }, [value, multiple])

  const closeDropdown = () => {
    setIsOpen(false)
    setHighlightedIndex(-1)
  }

  useOverlayLayer({
    open: isOpen,
    elementRef: dropdownRef,
    refs: [autocompleteRef],
    closeOnEscape: true,
    closeOnPointerDownOutside: true,
    onEscapeKeyDown: closeDropdown,
    onPointerDownOutside: closeDropdown,
    zIndex: 1000,
  })

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
    closeDropdown()
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
      closeDropdown()
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
        closeDropdown()
        inputRef?.blur()
        break
      default:
        break
    }
  }

  const generatedId = useId()
  const autocompleteId = id || name || generatedId

  return (
    <div class={getAutocompleteClasses()} ref={autocompleteRef} style={style}>
      {label && (
        <label
          htmlFor={autocompleteId}
          class={getLabelClasses()}
        >
          {label}
          {required && <span class="wc-autocomplete__required">*</span>}
        </label>
      )}
      
      <div class={getContainerClasses()}>
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
            ref: inputRef,
            role: 'combobox',
            'aria-autocomplete': 'list',
            'aria-expanded': isOpen,
            'aria-controls': `${autocompleteId}-options`,
            'aria-activedescendant': highlightedIndex >= 0 ? `${autocompleteId}-option-${highlightedIndex()}` : undefined
          })
        ) : (
          <input
            id={autocompleteId}
            ref={inputRef}
            type="text"
            class="wc-autocomplete__input"
            placeholder={placeholder}
            value={searchQuery()}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            readOnly={readonly}
            autoComplete="off"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={isOpen()}
            aria-controls={`${autocompleteId}-options`}
            aria-activedescendant={highlightedIndex >= 0 ? `${autocompleteId}-option-${highlightedIndex()}` : undefined}
          />
        )}
        
        <div class="wc-autocomplete__indicators">
          {clearable && searchQuery && (
            <button
              type="button"
              class="wc-autocomplete__clear"
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
          <div class={`wc-autocomplete__arrow${isOpen && filteredOptions.length > 0 ? ' wc-autocomplete__arrow--open' : ''}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6,9 12,15 18,9" />
            </svg>
          </div>
        </div>
      </div>

      {isOpen && searchQuery.length >= minSearchLength && (
        <div ref={dropdownRef} class="wc-autocomplete__dropdown" id={`${autocompleteId}-options`} role="listbox">
          {filteredOptions.length === 0 ? (
            <div class="wc-autocomplete__no-options">
              {noOptionsText}
            </div>
          ) : (
            <div class="wc-autocomplete__options">
              {filteredOptions.map((option, index) => (
                <div
                  key={getValue(option) || index}
                  id={`${autocompleteId}-option-${index}`}
                  class={getOptionClasses(option, index)}
                  role="option"
                  aria-selected={isSelected(option)}
                  onClick={() => handleOptionClick(option)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {renderOption ? (
                    renderOption(option, { selected: isSelected(option) })
                  ) : (
                    <span class="wc-autocomplete__option-text">
                      {getLabel(option)}
                    </span>
                  )}
                  {isSelected(option) && (
                    <svg 
                      class="wc-autocomplete__option-check" 
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
            <p class="wc-autocomplete__error">{errorMessage || error}</p>
          ) : (
            <p class="wc-autocomplete__helper">{helperText}</p>
          )}
        </div>
      )}
    </div>
  )
}

Autocomplete.displayName = 'Autocomplete'

export default Autocomplete
