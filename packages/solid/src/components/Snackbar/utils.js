/**
 * Enhanced Snackbar Component Utilities
 * Integrated functionality from Toast and Snackbar components
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
  elevated: 'elevated',
  standard: 'standard'
};

export const ANIMATION_TYPES = {
  slideUp: 'slide-up',
  slideDown: 'slide-down',
  slideLeft: 'slide-left',
  slideRight: 'slide-right',
  fade: 'fade'
};

// Icon mapping from Toast
export const ICON_MAP = {
  success: '✓',
  info: 'ℹ',
  warning: '⚠',
  error: '✕'
};

// Color mapping from Toast
export const COLOR_MAP = {
  info: { 
    bg: '#e8f4ff', 
    text: '#0070f3', 
    border: '#1a8cff' 
  },
  success: { 
    bg: '#ecfdf5', 
    text: '#047857', 
    border: '#10b981' 
  },
  warning: { 
    bg: '#fffbeb', 
    text: '#b45309', 
    border: '#f59e0b' 
  },
  error: { 
    bg: '#fef2f2', 
    text: '#b91c1c', 
    border: '#ef4444' 
  }
};

export const DEFAULT_DURATION = 6000;
export const PERSIST_DURATION = -1;

// ====== Enhanced Snackbar Manager ======

/**
 * Enhanced Snackbar Manager Class
 * Manages multiple snackbars with queue, positioning, and lifecycle
 * Integrated with Toast functionality
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
   * Show a snackbar with enhanced options
   * @param {Object} options - Enhanced snackbar options
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
   * Create enhanced snackbar object
   * @param {Object} options - Snackbar options
   * @returns {Object} Enhanced snackbar object
   */
  createSnackbar(options) {
    const id = `snackbar-${this.nextId++}`;
    const timestamp = Date.now();
    
    return {
      id,
      timestamp,
      message: options.message || '',
      title: options.title || '', // From Toast
      severity: options.severity || SNACKBAR_SEVERITIES.info,
      variant: options.variant || SNACKBAR_VARIANTS.filled,
      position: options.position || this.defaultPosition,
      duration: options.duration !== undefined ? options.duration : this.defaultDuration,
      persistent: options.duration === PERSIST_DURATION,
      showCloseButton: options.showCloseButton !== false,
      showIcon: options.showIcon !== false, // From Toast
      showProgress: options.showProgress !== false, // Enhanced feature
      closable: options.closable !== false,
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
   * Pause snackbar timer
   * @param {string} id - Snackbar ID
   */
  pauseTimer(id) {
    const snackbar = this.snackbars.get(id);
    if (snackbar && snackbar.timer) {
      clearTimeout(snackbar.timer);
      snackbar.pausedAt = Date.now();
      snackbar.timer = null;
    }
  }

  /**
   * Resume snackbar timer
   * @param {string} id - Snackbar ID
   */
  resumeTimer(id) {
    const snackbar = this.snackbars.get(id);
    if (snackbar && snackbar.pausedAt && !snackbar.persistent) {
      const elapsed = snackbar.pausedAt - snackbar.timestamp;
      const remaining = Math.max(0, snackbar.duration - elapsed);
      
      if (remaining > 0) {
        snackbar.timer = setTimeout(() => {
          this.removeSnackbar(id);
        }, remaining);
      } else {
        this.removeSnackbar(id);
      }
      
      snackbar.pausedAt = null;
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

// ====== Global Manager Instance ======
let defaultManager = null;

export function getDefaultManager() {
  if (!defaultManager) {
    defaultManager = new SnackbarManager();
  }
  return defaultManager;
}

// ====== Enhanced Convenience Functions ======

/**
 * Show success snackbar with enhanced options
 * @param {string} message - Message text
 * @param {Object} options - Additional options
 * @returns {string} Snackbar ID
 */
export function showSuccess(message, options = {}) {
  return getDefaultManager().show({
    message,
    severity: SNACKBAR_SEVERITIES.success,
    ...options
  });
}

/**
 * Show warning snackbar with enhanced options
 * @param {string} message - Message text
 * @param {Object} options - Additional options
 * @returns {string} Snackbar ID
 */
export function showWarning(message, options = {}) {
  return getDefaultManager().show({
    message,
    severity: SNACKBAR_SEVERITIES.warning,
    ...options
  });
}

/**
 * Show error snackbar with enhanced options
 * @param {string} message - Message text
 * @param {Object} options - Additional options
 * @returns {string} Snackbar ID
 */
export function showError(message, options = {}) {
  return getDefaultManager().show({
    message,
    severity: SNACKBAR_SEVERITIES.error,
    ...options
  });
}

/**
 * Show info snackbar with enhanced options
 * @param {string} message - Message text
 * @param {Object} options - Additional options
 * @returns {string} Snackbar ID
 */
export function showInfo(message, options = {}) {
  return getDefaultManager().show({
    message,
    severity: SNACKBAR_SEVERITIES.info,
    ...options
  });
}

/**
 * Show snackbar with custom options
 * @param {string} message - Message text
 * @param {Object} options - Snackbar options
 * @returns {string} Snackbar ID
 */
export function show(message, options = {}) {
  return getDefaultManager().show({
    message,
    ...options
  });
}

/**
 * Hide snackbar by ID
 * @param {string} id - Snackbar ID
 */
export function hide(id) {
  getDefaultManager().hide(id);
}

/**
 * Hide all snackbars
 */
export function hideAll() {
  getDefaultManager().hideAll();
}

// ====== Enhanced Utility Functions ======

/**
 * Get snackbar icon
 * @param {string} severity - Severity type
 * @returns {string} Icon character
 */
export function getSnackbarIcon(severity) {
  return ICON_MAP[severity] || ICON_MAP.info;
}

/**
 * Get snackbar colors
 * @param {string} severity - Severity type
 * @returns {Object} Color object
 */
export function getSnackbarColors(severity) {
  return COLOR_MAP[severity] || COLOR_MAP.info;
}

/**
 * Validate snackbar position
 * @param {string} position - Position string
 * @returns {boolean} Is valid position
 */
export function isValidPosition(position) {
  return Object.values(SNACKBAR_POSITIONS).includes(position);
}

/**
 * Validate snackbar severity
 * @param {string} severity - Severity string
 * @returns {boolean} Is valid severity
 */
export function isValidSeverity(severity) {
  return Object.values(SNACKBAR_SEVERITIES).includes(severity);
}

/**
 * Get enhanced container classes
 * @param {Object} props - Component props
 * @returns {string} CSS classes
 */
export function getContainerClasses(props = {}) {
  const { position = SNACKBAR_POSITIONS.bottomLeft } = props;
  
  const baseClasses = 'fixed z-50 pointer-events-none flex flex-col gap-2';
  const positionClasses = {
    [SNACKBAR_POSITIONS.topLeft]: 'top-4 left-4 items-start',
    [SNACKBAR_POSITIONS.topCenter]: 'top-4 left-1/2 transform -translate-x-1/2 items-center',
    [SNACKBAR_POSITIONS.topRight]: 'top-4 right-4 items-end',
    [SNACKBAR_POSITIONS.bottomLeft]: 'bottom-4 left-4 items-start flex-col-reverse',
    [SNACKBAR_POSITIONS.bottomCenter]: 'bottom-4 left-1/2 transform -translate-x-1/2 items-center flex-col-reverse',
    [SNACKBAR_POSITIONS.bottomRight]: 'bottom-4 right-4 items-end flex-col-reverse'
  };
  
  return `${baseClasses} ${positionClasses[position] || positionClasses[SNACKBAR_POSITIONS.bottomLeft]}`;
}

/**
 * Get enhanced snackbar classes
 * @param {Object} props - Component props
 * @returns {string} CSS classes
 */
export function getSnackbarClasses(props = {}) {
  const {
    severity = SNACKBAR_SEVERITIES.info,
    variant = SNACKBAR_VARIANTS.filled,
    className = ''
  } = props;
  
  const baseClasses = 'pointer-events-auto max-w-sm w-full rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out';
  
  let variantClasses = '';
  if (variant === SNACKBAR_VARIANTS.filled) {
    const colorMap = {
      [SNACKBAR_SEVERITIES.success]: 'bg-success-500 text-white border border-success-500',
      [SNACKBAR_SEVERITIES.info]: 'bg-primary-500 text-white border border-primary-500',
      [SNACKBAR_SEVERITIES.warning]: 'bg-warning-500 text-white border border-warning-500',
      [SNACKBAR_SEVERITIES.error]: 'bg-error-500 text-white border border-error-500'
    };
    variantClasses = colorMap[severity] || 'bg-neutral-800 text-white border border-neutral-700';
  } else if (variant === SNACKBAR_VARIANTS.outlined) {
    const colorMap = {
      [SNACKBAR_SEVERITIES.success]: 'bg-white dark:bg-neutral-800 border-success-500 text-success-600 dark:text-success-400 border-l-4',
      [SNACKBAR_SEVERITIES.info]: 'bg-white dark:bg-neutral-800 border-primary-500 text-primary-600 dark:text-primary-400 border-l-4',
      [SNACKBAR_SEVERITIES.warning]: 'bg-white dark:bg-neutral-800 border-warning-500 text-warning-600 dark:text-warning-400 border-l-4',
      [SNACKBAR_SEVERITIES.error]: 'bg-white dark:bg-neutral-800 border-error-500 text-error-600 dark:text-error-400 border-l-4'
    };
    variantClasses = colorMap[severity] || 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100';
  } else {
    variantClasses = 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100';
  }
  
  return `${baseClasses} ${variantClasses} ${className}`.trim();
}

/**
 * Get animation classes by position
 * @param {string} position - Position
 * @param {string} state - Animation state
 * @returns {string} Animation classes
 */
export function getAnimationByPosition(position, state = 'enter') {
  const animationMap = {
    [SNACKBAR_POSITIONS.topLeft]: state === 'enter' ? 'animate-slide-down' : 'animate-slide-up',
    [SNACKBAR_POSITIONS.topCenter]: state === 'enter' ? 'animate-slide-down' : 'animate-slide-up',
    [SNACKBAR_POSITIONS.topRight]: state === 'enter' ? 'animate-slide-down' : 'animate-slide-up',
    [SNACKBAR_POSITIONS.bottomLeft]: state === 'enter' ? 'animate-slide-up' : 'animate-slide-down',
    [SNACKBAR_POSITIONS.bottomCenter]: state === 'enter' ? 'animate-slide-up' : 'animate-slide-down',
    [SNACKBAR_POSITIONS.bottomRight]: state === 'enter' ? 'animate-slide-up' : 'animate-slide-down'
  };
  
  return animationMap[position] || 'animate-fade';
}

/**
 * Calculate progress percentage
 * @param {number} elapsed - Elapsed time
 * @param {number} duration - Total duration
 * @returns {number} Progress percentage
 */
export function calculateProgress(elapsed, duration) {
  if (duration <= 0) return 0;
  return Math.max(0, Math.min(100, 100 - (elapsed / duration) * 100));
}

/**
 * Enhanced validation for options
 * @param {Object} options - Options to validate
 * @returns {Object} Validated and normalized options
 */
export function validateOptions(options = {}) {
  const normalized = { ...options };
  
  // Validate and normalize position
  if (!isValidPosition(normalized.position)) {
    normalized.position = SNACKBAR_POSITIONS.bottomLeft;
  }
  
  // Validate and normalize severity
  if (!isValidSeverity(normalized.severity)) {
    normalized.severity = SNACKBAR_SEVERITIES.info;
  }
  
  // Validate and normalize variant
  if (!Object.values(SNACKBAR_VARIANTS).includes(normalized.variant)) {
    normalized.variant = SNACKBAR_VARIANTS.filled;
  }
  
  // Validate duration
  if (typeof normalized.duration !== 'number' || normalized.duration < 0) {
    normalized.duration = DEFAULT_DURATION;
  }
  
  // Ensure boolean properties
  normalized.closable = Boolean(normalized.closable !== false);
  normalized.showIcon = Boolean(normalized.showIcon !== false);
  normalized.showProgress = Boolean(normalized.showProgress);
  
  // Validate callbacks
  if (normalized.onClose && typeof normalized.onClose !== 'function') {
    delete normalized.onClose;
  }
  
  if (normalized.onAction && typeof normalized.onAction !== 'function') {
    delete normalized.onAction;
  }
  
  return normalized;
}

/**
 * Get ARIA attributes for accessibility
 * @param {Object} props - Component props
 * @returns {Object} ARIA attributes
 */
export function getAriaAttributes(props = {}) {
  const { severity = SNACKBAR_SEVERITIES.info, message = '', title = '' } = props;
  
  const roleMap = {
    [SNACKBAR_SEVERITIES.error]: 'alert',
    [SNACKBAR_SEVERITIES.warning]: 'alert',
    [SNACKBAR_SEVERITIES.success]: 'status',
    [SNACKBAR_SEVERITIES.info]: 'status'
  };
  
  return {
    role: roleMap[severity] || 'status',
    'aria-live': severity === SNACKBAR_SEVERITIES.error ? 'assertive' : 'polite',
    'aria-atomic': 'true',
    'aria-label': title || message || `${severity} notification`
  };
}

/**
 * Create error snackbar from Error object
 * @param {Error} error - Error object
 * @param {Object} options - Additional options
 * @returns {string} Snackbar ID
 */
export function createErrorSnackbar(error, options = {}) {
  const message = error.message || 'An unexpected error occurred';
  const title = options.title || 'Error';
  
  return showError(message, {
    title,
    duration: options.duration || 8000, // Longer duration for errors
    showIcon: true,
    ...options
  });
}

/**
 * Format duration for display
 * @param {number} duration - Duration in milliseconds
 * @returns {string} Formatted duration
 */
export function formatDuration(duration) {
  if (duration < 0) return 'Persistent';
  if (duration < 1000) return `${duration}ms`;
  return `${(duration / 1000).toFixed(1)}s`;
}

/**
 * Truncate message if too long
 * @param {string} message - Original message
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated message
 */
export function truncateMessage(message, maxLength = 200) {
  if (typeof message !== 'string') return '';
  if (message.length <= maxLength) return message;
  return message.substring(0, maxLength - 3) + '...';
}

/**
 * Debounce snackbar calls to prevent spam
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export function debounceSnackbar(func, delay = 500) {
  let timeoutId;
  const messageMap = new Map();
  
  return function (...args) {
    const [message] = args;
    const now = Date.now();
    
    // Check if same message was shown recently
    if (messageMap.has(message)) {
      const lastShown = messageMap.get(message);
      if (now - lastShown < delay) {
        return; // Skip showing duplicate message
      }
    }
    
    messageMap.set(message, now);
    
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, 100); // Small delay to batch calls
  };
}