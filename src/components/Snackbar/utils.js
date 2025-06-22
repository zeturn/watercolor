/**
 * Snackbar Component Utilities
 * Provides utility functions for snackbar/toast notification functionality
 */

// ====== Constants ======
export const SNACKBAR_POSITIONS = {
  topLeft: 'top-left',
  topCenter: 'top-center',
  topRight: 'top-right',
  bottomLeft: 'bottom-left',
  bottomCenter: 'bottom-center',
  bottomRight: 'bottom-right'
};

export const SNACKBAR_SEVERITIES = {
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info',
  default: 'default'
};

export const SNACKBAR_VARIANTS = {
  filled: 'filled',
  outlined: 'outlined',
  minimal: 'minimal',
  elevated: 'elevated'
};

export const ANIMATION_TYPES = {
  slideUp: 'slide-up',
  slideDown: 'slide-down',
  slideLeft: 'slide-left',
  slideRight: 'slide-right',
  fade: 'fade'
};

export const DEFAULT_DURATION = 6000;
export const PERSIST_DURATION = -1;

// ====== Snackbar Manager ======

/**
 * Snackbar Manager Class
 * Manages multiple snackbars with queue, positioning, and lifecycle
 */
export class SnackbarManager {
  constructor(config = {}) {
    this.snackbars = new Map();
    this.queue = [];
    this.maxVisible = config.maxVisible || 5;
    this.defaultPosition = config.defaultPosition || SNACKBAR_POSITIONS.bottomLeft;
    this.defaultDuration = config.defaultDuration || DEFAULT_DURATION;
    this.nextId = 1;
    this.containers = new Map();
  }

  /**
   * Show a snackbar
   * @param {Object} options - Snackbar options
   * @returns {string} Snackbar ID
   */
  show(options = {}) {
    const snackbar = this.createSnackbar(options);
    
    if (this.shouldQueue(snackbar)) {
      this.queue.push(snackbar);
      return snackbar.id;
    }
    
    this.displaySnackbar(snackbar);
    return snackbar.id;
  }

  /**
   * Hide a snackbar by ID
   * @param {string} id - Snackbar ID
   */
  hide(id) {
    const snackbar = this.snackbars.get(id);
    if (snackbar) {
      this.removeSnackbar(id);
    }
  }

  /**
   * Hide all snackbars
   */
  hideAll() {
    Array.from(this.snackbars.keys()).forEach(id => {
      this.hide(id);
    });
    this.queue = [];
  }

  /**
   * Create snackbar object
   * @param {Object} options - Snackbar options
   * @returns {Object} Snackbar object
   */
  createSnackbar(options) {
    const id = `snackbar-${this.nextId++}`;
    const timestamp = Date.now();
    
    return {
      id,
      timestamp,
      message: options.message || '',
      title: options.title,
      severity: options.severity || SNACKBAR_SEVERITIES.default,
      variant: options.variant || SNACKBAR_VARIANTS.filled,
      position: options.position || this.defaultPosition,
      duration: options.duration !== undefined ? options.duration : this.defaultDuration,
      persistent: options.duration === PERSIST_DURATION,
      showCloseButton: options.showCloseButton !== false,
      showIcon: options.showIcon !== false,
      showProgress: options.showProgress !== false,
      actions: options.actions || [],
      onClose: options.onClose,
      onAction: options.onAction,
      autoHideDuration: options.autoHideDuration || this.defaultDuration,
      ...options
    };
  }

  /**
   * Check if snackbar should be queued
   * @param {Object} snackbar - Snackbar object
   * @returns {boolean} Should queue
   */
  shouldQueue(snackbar) {
    const visibleCount = this.getVisibleCount(snackbar.position);
    return visibleCount >= this.maxVisible;
  }

  /**
   * Get visible snackbar count for position
   * @param {string} position - Position
   * @returns {number} Count
   */
  getVisibleCount(position) {
    return Array.from(this.snackbars.values())
      .filter(snackbar => snackbar.position === position).length;
  }

  /**
   * Display snackbar
   * @param {Object} snackbar - Snackbar object
   */
  displaySnackbar(snackbar) {
    this.snackbars.set(snackbar.id, snackbar);
    
    // Set auto-hide timer
    if (!snackbar.persistent && snackbar.duration > 0) {
      snackbar.timer = setTimeout(() => {
        this.removeSnackbar(snackbar.id);
      }, snackbar.duration);
    }
    
    // Process queue
    this.processQueue();
  }

  /**
   * Remove snackbar
   * @param {string} id - Snackbar ID
   */
  removeSnackbar(id) {
    const snackbar = this.snackbars.get(id);
    if (!snackbar) return;
    
    // Clear timer
    if (snackbar.timer) {
      clearTimeout(snackbar.timer);
    }
    
    // Call onClose callback
    if (typeof snackbar.onClose === 'function') {
      snackbar.onClose(snackbar);
    }
    
    // Remove from map
    this.snackbars.delete(id);
    
    // Process queue
    this.processQueue();
  }

  /**
   * Process queue to show next snackbar
   */
  processQueue() {
    if (this.queue.length === 0) return;
    
    // Find next snackbar that can be shown
    for (let i = 0; i < this.queue.length; i++) {
      const snackbar = this.queue[i];
      if (!this.shouldQueue(snackbar)) {
        this.queue.splice(i, 1);
        this.displaySnackbar(snackbar);
        break;
      }
    }
  }

  /**
   * Pause auto-hide timer
   * @param {string} id - Snackbar ID
   */
  pauseTimer(id) {
    const snackbar = this.snackbars.get(id);
    if (snackbar && snackbar.timer) {
      clearTimeout(snackbar.timer);
      snackbar.paused = true;
      snackbar.remainingTime = snackbar.duration - (Date.now() - snackbar.timestamp);
    }
  }

  /**
   * Resume auto-hide timer
   * @param {string} id - Snackbar ID
   */
  resumeTimer(id) {
    const snackbar = this.snackbars.get(id);
    if (snackbar && snackbar.paused && !snackbar.persistent) {
      snackbar.paused = false;
      snackbar.timer = setTimeout(() => {
        this.removeSnackbar(id);
      }, snackbar.remainingTime || snackbar.duration);
    }
  }

  /**
   * Get all snackbars by position
   * @param {string} position - Position
   * @returns {Array} Snackbars
   */
  getSnackbarsByPosition(position) {
    return Array.from(this.snackbars.values())
      .filter(snackbar => snackbar.position === position)
      .sort((a, b) => a.timestamp - b.timestamp);
  }

  /**
   * Get snackbar by ID
   * @param {string} id - Snackbar ID
   * @returns {Object} Snackbar
   */
  getSnackbar(id) {
    return this.snackbars.get(id);
  }
}

// ====== Helper Functions ======

/**
 * Create default snackbar manager instance
 */
let defaultManager = null;

export function getDefaultManager() {
  if (!defaultManager) {
    defaultManager = new SnackbarManager();
  }
  return defaultManager;
}

/**
 * Show success snackbar
 * @param {string|Object} message - Message or options
 * @param {Object} options - Additional options
 * @returns {string} Snackbar ID
 */
export function showSuccess(message, options = {}) {
  const manager = getDefaultManager();
  const config = typeof message === 'string' 
    ? { message, ...options }
    : { ...message, ...options };
  
  return manager.show({
    ...config,
    severity: SNACKBAR_SEVERITIES.success
  });
}

/**
 * Show warning snackbar
 * @param {string|Object} message - Message or options
 * @param {Object} options - Additional options
 * @returns {string} Snackbar ID
 */
export function showWarning(message, options = {}) {
  const manager = getDefaultManager();
  const config = typeof message === 'string' 
    ? { message, ...options }
    : { ...message, ...options };
  
  return manager.show({
    ...config,
    severity: SNACKBAR_SEVERITIES.warning
  });
}

/**
 * Show error snackbar
 * @param {string|Object} message - Message or options
 * @param {Object} options - Additional options
 * @returns {string} Snackbar ID
 */
export function showError(message, options = {}) {
  const manager = getDefaultManager();
  const config = typeof message === 'string' 
    ? { message, ...options }
    : { ...message, ...options };
  
  return manager.show({
    ...config,
    severity: SNACKBAR_SEVERITIES.error,
    duration: options.duration !== undefined ? options.duration : 8000
  });
}

/**
 * Show info snackbar
 * @param {string|Object} message - Message or options
 * @param {Object} options - Additional options
 * @returns {string} Snackbar ID
 */
export function showInfo(message, options = {}) {
  const manager = getDefaultManager();
  const config = typeof message === 'string' 
    ? { message, ...options }
    : { ...message, ...options };
  
  return manager.show({
    ...config,
    severity: SNACKBAR_SEVERITIES.info
  });
}

/**
 * Show default snackbar
 * @param {string|Object} message - Message or options
 * @param {Object} options - Additional options
 * @returns {string} Snackbar ID
 */
export function show(message, options = {}) {
  const manager = getDefaultManager();
  const config = typeof message === 'string' 
    ? { message, ...options }
    : { ...message, ...options };
  
  return manager.show(config);
}

/**
 * Hide snackbar by ID
 * @param {string} id - Snackbar ID
 */
export function hide(id) {
  const manager = getDefaultManager();
  manager.hide(id);
}

/**
 * Hide all snackbars
 */
export function hideAll() {
  const manager = getDefaultManager();
  manager.hideAll();
}

// ====== Class Name Utilities ======

/**
 * Generate class names for snackbar container
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getContainerClasses(props = {}) {
  const { position = SNACKBAR_POSITIONS.bottomLeft } = props;
  
  const classes = ['wc-snackbar-container'];
  classes.push(`wc-snackbar-container--${position}`);
  
  return classes.join(' ');
}

/**
 * Generate class names for snackbar
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getSnackbarClasses(props = {}) {
  const {
    severity = SNACKBAR_SEVERITIES.default,
    variant = SNACKBAR_VARIANTS.filled,
    animation = ANIMATION_TYPES.fade,
    animationState = 'entered',
    loading = false
  } = props;
  
  const classes = ['wc-snackbar'];
  
  if (severity !== SNACKBAR_SEVERITIES.default) {
    classes.push(`wc-snackbar--${severity}`);
  }
  
  if (variant !== SNACKBAR_VARIANTS.filled) {
    classes.push(`wc-snackbar--${variant}`);
  }
  
  if (animation && animationState) {
    classes.push(`wc-snackbar--${animation}-${animationState}`);
  }
  
  if (loading) {
    classes.push('wc-snackbar--loading');
  }
  
  return classes.join(' ');
}

// ====== Animation Utilities ======

/**
 * Get animation class based on position and state
 * @param {string} position - Snackbar position
 * @param {string} state - Animation state
 * @returns {string} Animation type
 */
export function getAnimationByPosition(position, state = 'enter') {
  const animationMap = {
    [SNACKBAR_POSITIONS.topLeft]: ANIMATION_TYPES.slideDown,
    [SNACKBAR_POSITIONS.topCenter]: ANIMATION_TYPES.slideDown,
    [SNACKBAR_POSITIONS.topRight]: ANIMATION_TYPES.slideDown,
    [SNACKBAR_POSITIONS.bottomLeft]: ANIMATION_TYPES.slideUp,
    [SNACKBAR_POSITIONS.bottomCenter]: ANIMATION_TYPES.slideUp,
    [SNACKBAR_POSITIONS.bottomRight]: ANIMATION_TYPES.slideUp
  };
  
  return animationMap[position] || ANIMATION_TYPES.fade;
}

/**
 * Calculate progress percentage
 * @param {number} elapsed - Elapsed time
 * @param {number} duration - Total duration
 * @returns {number} Progress percentage
 */
export function calculateProgress(elapsed, duration) {
  if (duration <= 0) return 100;
  return Math.min((elapsed / duration) * 100, 100);
}

// ====== Validation ======

/**
 * Validate snackbar options
 * @param {Object} options - Snackbar options
 * @returns {Object} Validation result
 */
export function validateOptions(options = {}) {
  const errors = [];
  const warnings = [];
  
  // Message validation
  if (!options.message && !options.title) {
    errors.push('Either message or title is required');
  }
  
  // Severity validation
  if (options.severity && !Object.values(SNACKBAR_SEVERITIES).includes(options.severity)) {
    errors.push(`Invalid severity: ${options.severity}`);
  }
  
  // Position validation
  if (options.position && !Object.values(SNACKBAR_POSITIONS).includes(options.position)) {
    errors.push(`Invalid position: ${options.position}`);
  }
  
  // Duration validation
  if (options.duration !== undefined && typeof options.duration !== 'number') {
    errors.push('Duration must be a number');
  }
  
  // Actions validation
  if (options.actions && !Array.isArray(options.actions)) {
    errors.push('Actions must be an array');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

// ====== Accessibility ======

/**
 * Generate ARIA attributes for snackbar
 * @param {Object} props - Component props
 * @returns {Object} ARIA attributes
 */
export function getAriaAttributes(props = {}) {
  const {
    severity = SNACKBAR_SEVERITIES.default,
    persistent = false,
    id
  } = props;
  
  const roleMap = {
    [SNACKBAR_SEVERITIES.error]: 'alert',
    [SNACKBAR_SEVERITIES.warning]: 'alert',
    [SNACKBAR_SEVERITIES.success]: 'status',
    [SNACKBAR_SEVERITIES.info]: 'status',
    [SNACKBAR_SEVERITIES.default]: 'status'
  };
  
  return {
    role: roleMap[severity],
    'aria-live': severity === SNACKBAR_SEVERITIES.error ? 'assertive' : 'polite',
    'aria-atomic': 'true',
    'aria-relevant': 'additions text',
    'aria-label': persistent ? 'Notification' : 'Notification, will close automatically',
    id: id || undefined
  };
}

// ====== Utility Functions ======

/**
 * Format duration for display
 * @param {number} duration - Duration in milliseconds
 * @returns {string} Formatted duration
 */
export function formatDuration(duration) {
  if (duration === PERSIST_DURATION) return 'Persistent';
  if (duration < 1000) return `${duration}ms`;
  return `${(duration / 1000).toFixed(1)}s`;
}

/**
 * Truncate message if too long
 * @param {string} message - Message text
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated message
 */
export function truncateMessage(message, maxLength = 200) {
  if (!message || message.length <= maxLength) return message;
  return message.substring(0, maxLength - 3) + '...';
}

/**
 * Debounce function for rapid snackbar calls
 * @param {Function} func - Function to debounce
 * @param {number} delay - Debounce delay
 * @returns {Function} Debounced function
 */
export function debounceSnackbar(func, delay = 500) {
  let timeoutId;
  let lastArgs;
  
  return function (...args) {
    lastArgs = args;
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func.apply(this, lastArgs);
    }, delay);
  };
}

/**
 * Create snackbar from error object
 * @param {Error} error - Error object
 * @param {Object} options - Additional options
 * @returns {Object} Snackbar options
 */
export function createErrorSnackbar(error, options = {}) {
  return {
    message: error.message || 'An error occurred',
    title: options.title || 'Error',
    severity: SNACKBAR_SEVERITIES.error,
    duration: 8000,
    showCloseButton: true,
    ...options
  };
}

// ====== Export All Utilities ======
export default {
  // Constants
  SNACKBAR_POSITIONS,
  SNACKBAR_SEVERITIES,
  SNACKBAR_VARIANTS,
  ANIMATION_TYPES,
  DEFAULT_DURATION,
  PERSIST_DURATION,
  
  // Manager
  SnackbarManager,
  getDefaultManager,
  
  // Show functions
  show,
  showSuccess,
  showWarning,
  showError,
  showInfo,
  hide,
  hideAll,
  
  // Class utilities
  getContainerClasses,
  getSnackbarClasses,
  
  // Animation utilities
  getAnimationByPosition,
  calculateProgress,
  
  // Validation
  validateOptions,
  
  // Accessibility
  getAriaAttributes,
  
  // Utility functions
  formatDuration,
  truncateMessage,
  debounceSnackbar,
  createErrorSnackbar
};