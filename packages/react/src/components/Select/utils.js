/**
 * Select Component Utilities
 * Provides utility functions for select functionality
 */

// ====== Constants ======
export const SELECT_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

export const SELECT_VARIANTS = {
  outlined: 'outlined',
  filled: 'filled',
  standard: 'standard'
};

export const KEY_CODES = {
  ENTER: 13,
  ESCAPE: 27,
  SPACE: 32,
  ARROW_UP: 38,
  ARROW_DOWN: 40,
  HOME: 36,
  END: 35,
  TAB: 9
};

// ====== Option Processing ======

/**
 * Normalize options to a consistent format
 * @param {Array} options - Array of options
 * @returns {Array} Normalized options
 */
export function normalizeOptions(options = []) {
  return options.map((option, index) => {
    if (typeof option === 'string' || typeof option === 'number') {
      return {
        value: option,
        label: String(option),
        id: `option-${index}`,
        disabled: false
      };
    }
    
    return {
      value: option.value,
      label: option.label || String(option.value),
      id: option.id || `option-${index}`,
      disabled: Boolean(option.disabled),
      description: option.description,
      group: option.group,
      ...option
    };
  });
}

/**
 * Group options by their group property
 * @param {Array} options - Array of normalized options
 * @returns {Array} Grouped options
 */
export function groupOptions(options = []) {
  const grouped = {};
  const ungrouped = [];
  
  options.forEach(option => {
    if (option.group) {
      if (!grouped[option.group]) {
        grouped[option.group] = [];
      }
      grouped[option.group].push(option);
    } else {
      ungrouped.push(option);
    }
  });
  
  const result = [];
  
  // Add ungrouped options first
  if (ungrouped.length > 0) {
    result.push(...ungrouped);
  }
  
  // Add grouped options
  Object.keys(grouped).forEach(groupName => {
    result.push({
      type: 'group',
      label: groupName,
      options: grouped[groupName]
    });
  });
  
  return result;
}

// ====== Search and Filter ======

/**
 * Filter options based on search query
 * @param {Array} options - Array of options
 * @param {string} query - Search query
 * @param {Object} config - Filter configuration
 * @returns {Array} Filtered options
 */
export function filterOptions(options = [], query = '', config = {}) {
  const {
    searchFields = ['label', 'value'],
    caseSensitive = false,
    matchStart = false,
    highlightMatch = false
  } = config;
  
  if (!query.trim()) {
    return options;
  }
  
  const searchTerm = caseSensitive ? query : query.toLowerCase();
  
  return options.filter(option => {
    return searchFields.some(field => {
      const fieldValue = option[field];
      if (!fieldValue) return false;
      
      const value = caseSensitive ? String(fieldValue) : String(fieldValue).toLowerCase();
      
      if (matchStart) {
        return value.startsWith(searchTerm);
      }
      
      return value.includes(searchTerm);
    });
  }).map(option => {
    if (highlightMatch) {
      return {
        ...option,
        highlightedLabel: highlightText(option.label, query, caseSensitive)
      };
    }
    return option;
  });
}

/**
 * Highlight matching text in a string
 * @param {string} text - Text to highlight
 * @param {string} query - Search query
 * @param {boolean} caseSensitive - Case sensitive search
 * @returns {string} Text with highlighted matches
 */
export function highlightText(text, query, caseSensitive = false) {
  if (!query.trim()) return text;
  
  const flags = caseSensitive ? 'g' : 'gi';
  const regex = new RegExp(`(${escapeRegExp(query)})`, flags);
  
  return text.replace(regex, '<mark>$1</mark>');
}

/**
 * Escape special regex characters
 * @param {string} string - String to escape
 * @returns {string} Escaped string
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ====== Selection Management ======

/**
 * Handle single selection
 * @param {*} value - Selected value
 * @param {*} currentValue - Current selected value
 * @returns {*} New selected value
 */
export function handleSingleSelection(value, currentValue) {
  return value === currentValue ? null : value;
}

/**
 * Handle multiple selection
 * @param {*} value - Value to toggle
 * @param {Array} currentValues - Current selected values
 * @param {Object} config - Selection configuration
 * @returns {Array} New selected values
 */
export function handleMultipleSelection(value, currentValues = [], config = {}) {
  const { maxSelections = Infinity, allowDeselect = true } = config;
  
  const isSelected = currentValues.includes(value);
  
  if (isSelected) {
    return allowDeselect 
      ? currentValues.filter(v => v !== value)
      : currentValues;
  }
  
  if (currentValues.length >= maxSelections) {
    return currentValues;
  }
  
  return [...currentValues, value];
}

/**
 * Remove a value from multiple selection
 * @param {*} value - Value to remove
 * @param {Array} currentValues - Current selected values
 * @returns {Array} New selected values
 */
export function removeFromSelection(value, currentValues = []) {
  return currentValues.filter(v => v !== value);
}

// ====== Keyboard Navigation ======

/**
 * Handle keyboard navigation in options list
 * @param {Event} event - Keyboard event
 * @param {Array} options - Array of options
 * @param {number} currentIndex - Current focused index
 * @param {Object} config - Navigation configuration
 * @returns {Object} Navigation result
 */
export function handleKeyboardNavigation(event, options = [], currentIndex = -1, config = {}) {
  const { loop = true, skipDisabled = true } = config;
  const keyCode = event.keyCode || event.which;
  
  let newIndex = currentIndex;
  let action = null;
  
  switch (keyCode) {
    case KEY_CODES.ARROW_DOWN:
      event.preventDefault();
      newIndex = getNextIndex(options, currentIndex, 1, { loop, skipDisabled });
      action = 'navigate';
      break;
      
    case KEY_CODES.ARROW_UP:
      event.preventDefault();
      newIndex = getNextIndex(options, currentIndex, -1, { loop, skipDisabled });
      action = 'navigate';
      break;
      
    case KEY_CODES.HOME:
      event.preventDefault();
      newIndex = getFirstEnabledIndex(options);
      action = 'navigate';
      break;
      
    case KEY_CODES.END:
      event.preventDefault();
      newIndex = getLastEnabledIndex(options);
      action = 'navigate';
      break;
      
    case KEY_CODES.ENTER:
    case KEY_CODES.SPACE:
      event.preventDefault();
      action = 'select';
      break;
      
    case KEY_CODES.ESCAPE:
      event.preventDefault();
      action = 'close';
      break;
      
    case KEY_CODES.TAB:
      action = 'close';
      break;
      
    default:
      // Letter navigation
      if (event.key && event.key.length === 1) {
        newIndex = findOptionByLetter(options, event.key, currentIndex);
        action = 'navigate';
      }
      break;
  }
  
  return {
    index: newIndex,
    action,
    option: options[newIndex] || null
  };
}

/**
 * Get next valid index in options array
 * @param {Array} options - Array of options
 * @param {number} currentIndex - Current index
 * @param {number} direction - Direction (1 or -1)
 * @param {Object} config - Configuration
 * @returns {number} Next valid index
 */
function getNextIndex(options, currentIndex, direction, config = {}) {
  const { loop = true, skipDisabled = true } = config;
  let index = currentIndex + direction;
  
  while (index >= 0 && index < options.length) {
    const option = options[index];
    if (!skipDisabled || !option.disabled) {
      return index;
    }
    index += direction;
  }
  
  if (loop) {
    if (direction > 0) {
      return getFirstEnabledIndex(options);
    } else {
      return getLastEnabledIndex(options);
    }
  }
  
  return currentIndex;
}

/**
 * Get first enabled option index
 * @param {Array} options - Array of options
 * @returns {number} First enabled index
 */
function getFirstEnabledIndex(options) {
  for (let i = 0; i < options.length; i++) {
    if (!options[i].disabled) {
      return i;
    }
  }
  return 0;
}

/**
 * Get last enabled option index
 * @param {Array} options - Array of options
 * @returns {number} Last enabled index
 */
function getLastEnabledIndex(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    if (!options[i].disabled) {
      return i;
    }
  }
  return options.length - 1;
}

/**
 * Find option by first letter
 * @param {Array} options - Array of options
 * @param {string} letter - Letter to search for
 * @param {number} startIndex - Starting index
 * @returns {number} Found option index
 */
function findOptionByLetter(options, letter, startIndex = -1) {
  const searchLetter = letter.toLowerCase();
  
  // Search from current position forward
  for (let i = startIndex + 1; i < options.length; i++) {
    const option = options[i];
    if (!option.disabled && option.label.toLowerCase().startsWith(searchLetter)) {
      return i;
    }
  }
  
  // Search from beginning to current position
  for (let i = 0; i <= startIndex; i++) {
    const option = options[i];
    if (!option.disabled && option.label.toLowerCase().startsWith(searchLetter)) {
      return i;
    }
  }
  
  return startIndex;
}

// ====== Class Name Utilities ======

/**
 * Generate class names for select container
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getSelectClasses(props = {}) {
  const {
    size = 'md',
    variant = 'outlined',
    disabled = false,
    error = false,
    focused = false,
    open = false,
    fullWidth = false
  } = props;
  
  const classes = ['wc-select'];
  
  if (fullWidth) classes.push('wc-select--full-width');
  if (disabled) classes.push('wc-select--disabled');
  
  return classes.join(' ');
}

/**
 * Generate class names for select container
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getContainerClasses(props = {}) {
  const {
    size = 'md',
    variant = 'outlined',
    error = false,
    focused = false,
    open = false
  } = props;
  
  const classes = ['wc-select__container'];
  
  classes.push(`wc-select__container--${size}`);
  classes.push(`wc-select__container--${variant}`);
  
  if (error) classes.push('wc-select__container--error');
  if (focused) classes.push('wc-select__container--focused');
  if (open) classes.push('wc-select__container--open');
  
  return classes.join(' ');
}

/**
 * Generate class names for option
 * @param {Object} option - Option object
 * @param {boolean} selected - Is selected
 * @param {boolean} focused - Is focused
 * @returns {string} Class names
 */
export function getOptionClasses(option = {}, selected = false, focused = false) {
  const classes = ['wc-select__option'];
  
  if (selected) classes.push('wc-select__option--selected');
  if (focused) classes.push('wc-select__option--focused');
  if (option.disabled) classes.push('wc-select__option--disabled');
  
  return classes.join(' ');
}

// ====== Validation ======

/**
 * Validate select value
 * @param {*} value - Value to validate
 * @param {Array} options - Available options
 * @param {Object} rules - Validation rules
 * @returns {Object} Validation result
 */
export function validateValue(value, options = [], rules = {}) {
  const { required = false, multiple = false } = rules;
  const errors = [];
  
  // Required validation
  if (required) {
    if (multiple) {
      if (!Array.isArray(value) || value.length === 0) {
        errors.push('This field is required');
      }
    } else {
      if (value === null || value === undefined || value === '') {
        errors.push('This field is required');
      }
    }
  }
  
  // Valid option validation
  if (value !== null && value !== undefined && value !== '') {
    const optionValues = options.map(opt => opt.value);
    
    if (multiple) {
      if (Array.isArray(value)) {
        const invalidValues = value.filter(v => !optionValues.includes(v));
        if (invalidValues.length > 0) {
          errors.push(`Invalid options: ${invalidValues.join(', ')}`);
        }
      }
    } else {
      if (!optionValues.includes(value)) {
        errors.push('Invalid option selected');
      }
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// ====== Accessibility ======

/**
 * Generate ARIA attributes for select
 * @param {Object} props - Component props
 * @returns {Object} ARIA attributes
 */
export function getAriaAttributes(props = {}) {
  const {
    id,
    open = false,
    multiple = false,
    disabled = false,
    error = false,
    describedBy,
    labelledBy
  } = props;
  
  return {
    role: 'combobox',
    'aria-expanded': open,
    'aria-haspopup': 'listbox',
    'aria-multiselectable': multiple || undefined,
    'aria-disabled': disabled || undefined,
    'aria-invalid': error || undefined,
    'aria-describedby': describedBy,
    'aria-labelledby': labelledBy,
    'aria-controls': open ? `${id}-listbox` : undefined
  };
}

// ====== Performance Utilities ======

/**
 * Debounce function for search input
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, delay = 300) {
  let timeoutId;
  
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

/**
 * Virtual scrolling helper for large option lists
 * @param {Array} options - All options
 * @param {Object} viewport - Viewport configuration
 * @returns {Object} Virtual scrolling data
 */
export function getVirtualScrollData(options = [], viewport = {}) {
  const {
    containerHeight = 250,
    itemHeight = 32,
    overscan = 5
  } = viewport;
  
  const totalItems = options.length;
  const visibleItems = Math.ceil(containerHeight / itemHeight);
  const totalHeight = totalItems * itemHeight;
  
  return {
    totalItems,
    visibleItems,
    totalHeight,
    itemHeight,
    overscan,
    getVisibleRange: (scrollTop) => {
      const start = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
      const end = Math.min(totalItems, start + visibleItems + overscan * 2);
      return { start, end };
    }
  };
}

// ====== Export All Utilities ======
export default {
  // Constants
  SELECT_SIZES,
  SELECT_VARIANTS,
  KEY_CODES,
  
  // Option processing
  normalizeOptions,
  groupOptions,
  
  // Search and filter
  filterOptions,
  highlightText,
  
  // Selection management
  handleSingleSelection,
  handleMultipleSelection,
  removeFromSelection,
  
  // Keyboard navigation
  handleKeyboardNavigation,
  
  // Class utilities
  getSelectClasses,
  getContainerClasses,
  getOptionClasses,
  
  // Validation
  validateValue,
  
  // Accessibility
  getAriaAttributes,
  
  // Performance
  debounce,
  getVirtualScrollData
}; 