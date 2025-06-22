/**
 * Slider Component Utilities
 * Provides utility functions for slider functionality
 */

// ====== Constants ======
export const SLIDER_ORIENTATIONS = {
  horizontal: 'horizontal',
  vertical: 'vertical'
};

export const SLIDER_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

export const SLIDER_COLORS = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  error: 'error'
};

export const KEY_CODES = {
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  HOME: 36,
  END: 35,
  PAGE_UP: 33,
  PAGE_DOWN: 34
};

// ====== Value Calculation ======

/**
 * Clamp a value between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Calculate percentage from value
 * @param {number} value - Current value
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Percentage (0-100)
 */
export function valueToPercentage(value, min, max) {
  if (max === min) return 0;
  return ((value - min) / (max - min)) * 100;
}

/**
 * Calculate value from percentage
 * @param {number} percentage - Percentage (0-100)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Calculated value
 */
export function percentageToValue(percentage, min, max) {
  return min + (percentage / 100) * (max - min);
}

/**
 * Round value to nearest step
 * @param {number} value - Value to round
 * @param {number} step - Step size
 * @param {number} min - Minimum value
 * @returns {number} Rounded value
 */
export function roundToStep(value, step, min = 0) {
  if (step <= 0) return value;
  
  const stepCount = Math.round((value - min) / step);
  return min + stepCount * step;
}

/**
 * Get closest valid value
 * @param {number} value - Input value
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @param {number} step - Step size
 * @returns {number} Valid value
 */
export function getValidValue(value, min, max, step = 1) {
  const clampedValue = clamp(value, min, max);
  return roundToStep(clampedValue, step, min);
}

// ====== Position Calculation ======

/**
 * Calculate position from mouse/touch event
 * @param {Event} event - Mouse or touch event
 * @param {Element} element - Slider track element
 * @param {string} orientation - Slider orientation
 * @returns {number} Position percentage (0-100)
 */
export function getPositionFromEvent(event, element, orientation = 'horizontal') {
  const rect = element.getBoundingClientRect();
  const clientX = event.clientX || (event.touches && event.touches[0].clientX);
  const clientY = event.clientY || (event.touches && event.touches[0].clientY);
  
  let position;
  
  if (orientation === 'vertical') {
    position = ((rect.bottom - clientY) / rect.height) * 100;
  } else {
    position = ((clientX - rect.left) / rect.width) * 100;
  }
  
  return clamp(position, 0, 100);
}

/**
 * Calculate thumb position from value
 * @param {number} value - Current value
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @param {string} orientation - Slider orientation
 * @returns {Object} Position styles
 */
export function getThumbPosition(value, min, max, orientation = 'horizontal') {
  const percentage = valueToPercentage(value, min, max);
  
  if (orientation === 'vertical') {
    return {
      bottom: `${percentage}%`,
      left: '50%'
    };
  }
  
  return {
    left: `${percentage}%`,
    top: '50%'
  };
}

/**
 * Calculate track fill position for range slider
 * @param {number} startValue - Start value
 * @param {number} endValue - End value
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @param {string} orientation - Slider orientation
 * @returns {Object} Track fill styles
 */
export function getRangeTrackPosition(startValue, endValue, min, max, orientation = 'horizontal') {
  const startPercentage = valueToPercentage(startValue, min, max);
  const endPercentage = valueToPercentage(endValue, min, max);
  const width = endPercentage - startPercentage;
  
  if (orientation === 'vertical') {
    return {
      bottom: `${startPercentage}%`,
      height: `${width}%`,
      width: '100%'
    };
  }
  
  return {
    left: `${startPercentage}%`,
    width: `${width}%`,
    height: '100%'
  };
}

// ====== Keyboard Navigation ======

/**
 * Handle keyboard navigation
 * @param {Event} event - Keyboard event
 * @param {number} value - Current value
 * @param {Object} config - Slider configuration
 * @returns {number|null} New value or null if no change
 */
export function handleKeyboardNavigation(event, value, config = {}) {
  const {
    min = 0,
    max = 100,
    step = 1,
    orientation = 'horizontal',
    largeStep = step * 10
  } = config;
  
  const keyCode = event.keyCode || event.which;
  let newValue = value;
  
  switch (keyCode) {
    case KEY_CODES.ARROW_LEFT:
    case KEY_CODES.ARROW_DOWN:
      if (orientation === 'horizontal' && keyCode === KEY_CODES.ARROW_LEFT) {
        newValue = value - step;
      } else if (orientation === 'vertical' && keyCode === KEY_CODES.ARROW_DOWN) {
        newValue = value - step;
      }
      break;
      
    case KEY_CODES.ARROW_RIGHT:
    case KEY_CODES.ARROW_UP:
      if (orientation === 'horizontal' && keyCode === KEY_CODES.ARROW_RIGHT) {
        newValue = value + step;
      } else if (orientation === 'vertical' && keyCode === KEY_CODES.ARROW_UP) {
        newValue = value + step;
      }
      break;
      
    case KEY_CODES.HOME:
      newValue = min;
      break;
      
    case KEY_CODES.END:
      newValue = max;
      break;
      
    case KEY_CODES.PAGE_UP:
      newValue = value + largeStep;
      break;
      
    case KEY_CODES.PAGE_DOWN:
      newValue = value - largeStep;
      break;
      
    default:
      return null;
  }
  
  event.preventDefault();
  return getValidValue(newValue, min, max, step);
}

// ====== Marks and Labels ======

/**
 * Generate marks for slider
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @param {number|Array} marks - Mark configuration
 * @returns {Array} Array of mark objects
 */
export function generateMarks(min, max, marks) {
  if (typeof marks === 'number') {
    // Generate evenly spaced marks
    const markCount = marks;
    const step = (max - min) / (markCount - 1);
    return Array.from({ length: markCount }, (_, i) => ({
      value: min + i * step,
      label: min + i * step
    }));
  }
  
  if (Array.isArray(marks)) {
    return marks.map(mark => {
      if (typeof mark === 'number') {
        return { value: mark, label: mark };
      }
      return mark;
    });
  }
  
  return [];
}

/**
 * Get mark position
 * @param {number} value - Mark value
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @param {string} orientation - Slider orientation
 * @returns {Object} Position styles
 */
export function getMarkPosition(value, min, max, orientation = 'horizontal') {
  const percentage = valueToPercentage(value, min, max);
  
  if (orientation === 'vertical') {
    return {
      bottom: `${percentage}%`,
      left: '50%'
    };
  }
  
  return {
    left: `${percentage}%`,
    top: '50%'
  };
}

// ====== Value Formatting ======

/**
 * Format value for display
 * @param {number} value - Value to format
 * @param {Object} config - Formatting configuration
 * @returns {string} Formatted value
 */
export function formatValue(value, config = {}) {
  const {
    precision = 0,
    prefix = '',
    suffix = '',
    formatter = null
  } = config;
  
  if (formatter && typeof formatter === 'function') {
    return formatter(value);
  }
  
  const formattedValue = Number(value).toFixed(precision);
  return `${prefix}${formattedValue}${suffix}`;
}

/**
 * Parse string value to number
 * @param {string} value - String value
 * @param {number} fallback - Fallback value
 * @returns {number} Parsed number
 */
export function parseValue(value, fallback = 0) {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? fallback : parsed;
}

// ====== Drag Utilities ======

/**
 * Create drag handler for slider thumb
 * @param {Object} config - Drag configuration
 * @returns {Object} Drag handlers
 */
export function createDragHandler(config = {}) {
  const {
    onDragStart = () => {},
    onDrag = () => {},
    onDragEnd = () => {},
    trackElement = null,
    orientation = 'horizontal',
    min = 0,
    max = 100,
    step = 1
  } = config;
  
  let isDragging = false;
  let startValue = 0;
  
  const handleStart = (event) => {
    isDragging = true;
    startValue = getValueFromEvent(event);
    onDragStart(startValue, event);
    
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('touchend', handleEnd);
  };
  
  const handleMove = (event) => {
    if (!isDragging) return;
    
    event.preventDefault();
    const newValue = getValueFromEvent(event);
    onDrag(newValue, event);
  };
  
  const handleEnd = (event) => {
    if (!isDragging) return;
    
    isDragging = false;
    const finalValue = getValueFromEvent(event);
    onDragEnd(finalValue, event);
    
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleEnd);
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('touchend', handleEnd);
  };
  
  const getValueFromEvent = (event) => {
    if (!trackElement) return startValue;
    
    const position = getPositionFromEvent(event, trackElement, orientation);
    const value = percentageToValue(position, min, max);
    return getValidValue(value, min, max, step);
  };
  
  return {
    handleStart,
    handleMove,
    handleEnd,
    isDragging: () => isDragging
  };
}

// ====== Class Name Utilities ======

/**
 * Generate class names for slider
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getSliderClasses(props = {}) {
  const {
    size = 'md',
    color = 'primary',
    orientation = 'horizontal',
    disabled = false,
    variant = 'default'
  } = props;
  
  const classes = ['wc-slider'];
  
  classes.push(`wc-slider--${size}`);
  classes.push(`wc-slider--${color}`);
  classes.push(`wc-slider--${orientation}`);
  
  if (disabled) classes.push('wc-slider--disabled');
  if (variant !== 'default') classes.push(`wc-slider--${variant}`);
  
  return classes.join(' ');
}

/**
 * Generate class names for thumb
 * @param {Object} props - Thumb props
 * @returns {string} Class names
 */
export function getThumbClasses(props = {}) {
  const {
    dragging = false,
    focused = false,
    position = 'single'
  } = props;
  
  const classes = ['wc-slider__thumb'];
  
  if (dragging) classes.push('wc-slider__thumb--dragging');
  if (focused) classes.push('wc-slider__thumb--focused');
  if (position !== 'single') classes.push(`wc-slider__thumb--${position}`);
  
  return classes.join(' ');
}

// ====== Validation ======

/**
 * Validate slider configuration
 * @param {Object} config - Slider configuration
 * @returns {Object} Validation result
 */
export function validateConfig(config = {}) {
  const { min = 0, max = 100, step = 1, value } = config;
  const errors = [];
  
  if (min >= max) {
    errors.push('Minimum value must be less than maximum value');
  }
  
  if (step <= 0) {
    errors.push('Step must be greater than 0');
  }
  
  if (value !== undefined) {
    if (Array.isArray(value)) {
      // Range slider
      if (value.length !== 2) {
        errors.push('Range value must be an array of exactly 2 values');
      } else {
        const [start, end] = value;
        if (start > end) {
          errors.push('Range start value must be less than or equal to end value');
        }
        if (start < min || end > max) {
          errors.push('Range values must be within min and max bounds');
        }
      }
    } else {
      // Single slider
      if (value < min || value > max) {
        errors.push('Value must be within min and max bounds');
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
 * Generate ARIA attributes for slider
 * @param {Object} props - Component props
 * @returns {Object} ARIA attributes
 */
export function getAriaAttributes(props = {}) {
  const {
    value,
    min = 0,
    max = 100,
    step = 1,
    orientation = 'horizontal',
    disabled = false,
    labelledBy,
    describedBy
  } = props;
  
  return {
    role: 'slider',
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuenow': value,
    'aria-valuetext': formatValue(value),
    'aria-orientation': orientation,
    'aria-disabled': disabled || undefined,
    'aria-labelledby': labelledBy,
    'aria-describedby': describedBy,
    tabIndex: disabled ? -1 : 0
  };
}

// ====== Performance Utilities ======

/**
 * Throttle function for drag events
 * @param {Function} func - Function to throttle
 * @param {number} delay - Throttle delay in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, delay = 16) {
  let timeoutId;
  let lastExecTime = 0;
  
  return function (...args) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}

// ====== Export All Utilities ======
export default {
  // Constants
  SLIDER_ORIENTATIONS,
  SLIDER_SIZES,
  SLIDER_COLORS,
  KEY_CODES,
  
  // Value calculation
  clamp,
  valueToPercentage,
  percentageToValue,
  roundToStep,
  getValidValue,
  
  // Position calculation
  getPositionFromEvent,
  getThumbPosition,
  getRangeTrackPosition,
  
  // Keyboard navigation
  handleKeyboardNavigation,
  
  // Marks and labels
  generateMarks,
  getMarkPosition,
  
  // Value formatting
  formatValue,
  parseValue,
  
  // Drag utilities
  createDragHandler,
  
  // Class utilities
  getSliderClasses,
  getThumbClasses,
  
  // Validation
  validateConfig,
  
  // Accessibility
  getAriaAttributes,
  
  // Performance
  throttle
}; 