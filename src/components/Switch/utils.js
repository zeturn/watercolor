/**
 * Switch Component Utilities
 * Provides utility functions for switch functionality
 */

// ====== Constants ======
export const SWITCH_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

export const SWITCH_COLORS = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  error: 'error'
};

export const SWITCH_VARIANTS = {
  default: 'default',
  rounded: 'rounded',
  square: 'square',
  flat: 'flat',
  outline: 'outline',
  ios: 'ios',
  material: 'material'
};

export const KEY_CODES = {
  SPACE: 32,
  ENTER: 13
};

// ====== State Management ======

/**
 * Toggle switch state
 * @param {boolean} currentState - Current switch state
 * @param {boolean} disabled - Whether switch is disabled
 * @returns {boolean} New state
 */
export function toggleState(currentState, disabled = false) {
  if (disabled) return currentState;
  return !currentState;
}

/**
 * Handle controlled state change
 * @param {boolean} newState - New state value
 * @param {Function} onChange - Change handler
 * @param {Object} config - Configuration options
 * @returns {boolean} Whether change was handled
 */
export function handleStateChange(newState, onChange, config = {}) {
  const { disabled = false, loading = false } = config;
  
  if (disabled || loading) return false;
  
  if (typeof onChange === 'function') {
    onChange(newState);
    return true;
  }
  
  return false;
}

/**
 * Get switch state from props
 * @param {Object} props - Component props
 * @returns {Object} State information
 */
export function getSwitchState(props = {}) {
  const {
    checked = false,
    defaultChecked = false,
    controlled = false
  } = props;
  
  return {
    isControlled: controlled || checked !== undefined,
    value: controlled ? checked : defaultChecked,
    defaultValue: defaultChecked
  };
}

// ====== Event Handling ======

/**
 * Handle click event
 * @param {Event} event - Click event
 * @param {boolean} currentState - Current state
 * @param {Function} onChange - Change handler
 * @param {Object} config - Configuration
 * @returns {boolean} New state
 */
export function handleClick(event, currentState, onChange, config = {}) {
  const { disabled = false, loading = false, preventDefault = true } = config;
  
  if (preventDefault) {
    event.preventDefault();
  }
  
  if (disabled || loading) return currentState;
  
  const newState = !currentState;
  
  if (handleStateChange(newState, onChange, config)) {
    return newState;
  }
  
  return currentState;
}

/**
 * Handle keyboard event
 * @param {Event} event - Keyboard event
 * @param {boolean} currentState - Current state
 * @param {Function} onChange - Change handler
 * @param {Object} config - Configuration
 * @returns {boolean} New state
 */
export function handleKeyDown(event, currentState, onChange, config = {}) {
  const { disabled = false, loading = false } = config;
  const keyCode = event.keyCode || event.which;
  
  if (disabled || loading) return currentState;
  
  if (keyCode === KEY_CODES.SPACE || keyCode === KEY_CODES.ENTER) {
    event.preventDefault();
    const newState = !currentState;
    
    if (handleStateChange(newState, onChange, config)) {
      return newState;
    }
  }
  
  return currentState;
}

/**
 * Handle focus event
 * @param {Event} event - Focus event
 * @param {Function} onFocus - Focus handler
 * @param {Object} config - Configuration
 */
export function handleFocus(event, onFocus, config = {}) {
  const { disabled = false } = config;
  
  if (disabled) return;
  
  if (typeof onFocus === 'function') {
    onFocus(event);
  }
}

/**
 * Handle blur event
 * @param {Event} event - Blur event
 * @param {Function} onBlur - Blur handler
 * @param {Object} config - Configuration
 */
export function handleBlur(event, onBlur, config = {}) {
  const { disabled = false } = config;
  
  if (disabled) return;
  
  if (typeof onBlur === 'function') {
    onBlur(event);
  }
}

// ====== Class Name Utilities ======

/**
 * Generate class names for switch container
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getSwitchClasses(props = {}) {
  const {
    size = 'md',
    color = 'primary',
    variant = 'default',
    disabled = false,
    loading = false,
    error = false,
    fullWidth = false
  } = props;
  
  const classes = ['wc-switch'];
  
  classes.push(`wc-switch--${size}`);
  classes.push(`wc-switch--${color}`);
  
  if (variant !== 'default') {
    classes.push(`wc-switch--${variant}`);
  }
  
  if (disabled) classes.push('wc-switch--disabled');
  if (loading) classes.push('wc-switch--loading');
  if (error) classes.push('wc-switch--error');
  if (fullWidth) classes.push('wc-switch--full-width');
  
  return classes.join(' ');
}

/**
 * Generate class names for switch track
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getTrackClasses(props = {}) {
  const { variant = 'default' } = props;
  
  const classes = ['wc-switch__track'];
  
  if (variant !== 'default') {
    classes.push(`wc-switch__track--${variant}`);
  }
  
  return classes.join(' ');
}

/**
 * Generate class names for switch thumb
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getThumbClasses(props = {}) {
  const { variant = 'default', loading = false } = props;
  
  const classes = ['wc-switch__thumb'];
  
  if (variant !== 'default') {
    classes.push(`wc-switch__thumb--${variant}`);
  }
  
  if (loading) {
    classes.push('wc-switch__thumb--loading');
  }
  
  return classes.join(' ');
}

// ====== Validation ======

/**
 * Validate switch props
 * @param {Object} props - Component props
 * @returns {Object} Validation result
 */
export function validateProps(props = {}) {
  const {
    size = 'md',
    color = 'primary',
    variant = 'default',
    checked,
    defaultChecked
  } = props;
  
  const errors = [];
  const warnings = [];
  
  // Size validation
  if (!Object.values(SWITCH_SIZES).includes(size)) {
    errors.push(`Invalid size: ${size}. Must be one of: ${Object.values(SWITCH_SIZES).join(', ')}`);
  }
  
  // Color validation
  if (!Object.values(SWITCH_COLORS).includes(color)) {
    errors.push(`Invalid color: ${color}. Must be one of: ${Object.values(SWITCH_COLORS).join(', ')}`);
  }
  
  // Variant validation
  if (!Object.values(SWITCH_VARIANTS).includes(variant)) {
    errors.push(`Invalid variant: ${variant}. Must be one of: ${Object.values(SWITCH_VARIANTS).join(', ')}`);
  }
  
  // Controlled vs uncontrolled validation
  if (checked !== undefined && defaultChecked !== undefined) {
    warnings.push('Both checked and defaultChecked props provided. Component will be controlled.');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Validate switch value
 * @param {*} value - Value to validate
 * @param {Object} rules - Validation rules
 * @returns {Object} Validation result
 */
export function validateValue(value, rules = {}) {
  const { required = false } = rules;
  const errors = [];
  
  // Required validation
  if (required && !value) {
    errors.push('This field is required');
  }
  
  // Type validation
  if (value !== undefined && typeof value !== 'boolean') {
    errors.push('Value must be a boolean');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// ====== Accessibility ======

/**
 * Generate ARIA attributes for switch
 * @param {Object} props - Component props
 * @returns {Object} ARIA attributes
 */
export function getAriaAttributes(props = {}) {
  const {
    checked = false,
    disabled = false,
    loading = false,
    labelledBy,
    describedBy,
    label
  } = props;
  
  return {
    role: 'switch',
    'aria-checked': checked,
    'aria-disabled': disabled || loading || undefined,
    'aria-labelledby': labelledBy,
    'aria-describedby': describedBy,
    'aria-label': label && !labelledBy ? label : undefined,
    tabIndex: disabled ? -1 : 0
  };
}

/**
 * Generate accessibility description
 * @param {Object} props - Component props
 * @returns {string} Accessibility description
 */
export function getAccessibilityDescription(props = {}) {
  const {
    checked = false,
    disabled = false,
    loading = false,
    label = 'Switch'
  } = props;
  
  let description = `${label} switch`;
  
  if (disabled) {
    description += ', disabled';
  } else if (loading) {
    description += ', loading';
  }
  
  description += checked ? ', on' : ', off';
  
  return description;
}

// ====== Animation Utilities ======

/**
 * Get thumb position based on state
 * @param {boolean} checked - Switch state
 * @param {Object} config - Configuration
 * @returns {Object} Position styles
 */
export function getThumbPosition(checked, config = {}) {
  const {
    trackWidth = 44,
    thumbSize = 20,
    thumbOffset = 2
  } = config;
  
  const maxPosition = trackWidth - thumbSize - (thumbOffset * 2);
  
  return {
    transform: checked 
      ? `translateX(${maxPosition}px)` 
      : 'translateX(0)',
    transition: 'transform 0.2s ease'
  };
}

/**
 * Get track background based on state
 * @param {boolean} checked - Switch state
 * @param {Object} config - Configuration
 * @returns {string} Background color
 */
export function getTrackBackground(checked, config = {}) {
  const {
    checkedColor = 'var(--wc-primary-500)',
    uncheckedColor = 'var(--wc-neutral-300)'
  } = config;
  
  return checked ? checkedColor : uncheckedColor;
}

// ====== Form Integration ======

/**
 * Create form field data for switch
 * @param {Object} props - Component props
 * @returns {Object} Form field data
 */
export function createFormField(props = {}) {
  const {
    name,
    value = false,
    required = false,
    disabled = false
  } = props;
  
  return {
    name,
    value,
    type: 'checkbox',
    checked: value,
    required,
    disabled,
    validity: {
      valid: !required || value,
      valueMissing: required && !value
    }
  };
}

/**
 * Extract form data from switch
 * @param {Object} switchData - Switch data
 * @returns {Object} Form data
 */
export function extractFormData(switchData = {}) {
  const { name, value } = switchData;
  
  if (!name) return {};
  
  return {
    [name]: value
  };
}

// ====== Performance Utilities ======

/**
 * Debounce switch change handler
 * @param {Function} handler - Change handler
 * @param {number} delay - Debounce delay
 * @returns {Function} Debounced handler
 */
export function debounceChange(handler, delay = 100) {
  let timeoutId;
  
  return function (value, ...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      handler(value, ...args);
    }, delay);
  };
}

/**
 * Throttle switch change handler
 * @param {Function} handler - Change handler
 * @param {number} delay - Throttle delay
 * @returns {Function} Throttled handler
 */
export function throttleChange(handler, delay = 100) {
  let lastCallTime = 0;
  
  return function (value, ...args) {
    const now = Date.now();
    
    if (now - lastCallTime >= delay) {
      handler(value, ...args);
      lastCallTime = now;
    }
  };
}

// ====== Helper Functions ======

/**
 * Format switch value for display
 * @param {boolean} value - Switch value
 * @param {Object} config - Format configuration
 * @returns {string} Formatted value
 */
export function formatValue(value, config = {}) {
  const {
    trueLabel = 'On',
    falseLabel = 'Off',
    formatter = null
  } = config;
  
  if (formatter && typeof formatter === 'function') {
    return formatter(value);
  }
  
  return value ? trueLabel : falseLabel;
}

/**
 * Parse switch value from string
 * @param {string} value - String value
 * @returns {boolean} Parsed boolean value
 */
export function parseValue(value) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const lowerValue = value.toLowerCase();
    return lowerValue === 'true' || lowerValue === 'on' || lowerValue === '1';
  }
  if (typeof value === 'number') {
    return value !== 0;
  }
  return Boolean(value);
}

/**
 * Check if switch should show loading state
 * @param {Object} props - Component props
 * @returns {boolean} Whether to show loading
 */
export function shouldShowLoading(props = {}) {
  const { loading = false, disabled = false } = props;
  return loading && !disabled;
}

/**
 * Check if switch is interactive
 * @param {Object} props - Component props
 * @returns {boolean} Whether switch is interactive
 */
export function isInteractive(props = {}) {
  const { disabled = false, loading = false } = props;
  return !disabled && !loading;
}

// ====== Export All Utilities ======
export default {
  // Constants
  SWITCH_SIZES,
  SWITCH_COLORS,
  SWITCH_VARIANTS,
  KEY_CODES,
  
  // State management
  toggleState,
  handleStateChange,
  getSwitchState,
  
  // Event handling
  handleClick,
  handleKeyDown,
  handleFocus,
  handleBlur,
  
  // Class utilities
  getSwitchClasses,
  getTrackClasses,
  getThumbClasses,
  
  // Validation
  validateProps,
  validateValue,
  
  // Accessibility
  getAriaAttributes,
  getAccessibilityDescription,
  
  // Animation utilities
  getThumbPosition,
  getTrackBackground,
  
  // Form integration
  createFormField,
  extractFormData,
  
  // Performance
  debounceChange,
  throttleChange,
  
  // Helper functions
  formatValue,
  parseValue,
  shouldShowLoading,
  isInteractive
};