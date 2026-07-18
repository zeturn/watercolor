/**
 * Tabs Component Utilities
 * Provides utility functions for tabs functionality
 */

// ====== Constants ======
export const TAB_VARIANTS = {
  default: 'default',
  pills: 'pills',
  underline: 'underline',
  bordered: 'bordered',
  segmented: 'segmented',
  minimal: 'minimal',
  filled: 'filled'
};

export const TAB_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

export const TAB_ORIENTATIONS = {
  horizontal: 'horizontal',
  vertical: 'vertical'
};

export const KEY_CODES = {
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  HOME: 36,
  END: 35,
  ENTER: 13,
  SPACE: 32
};

// ====== Tab Management ======

/**
 * Tab Manager Class
 * Manages tab state, navigation, and lifecycle
 */
export class TabManager {
  constructor(config = {}) {
    this.tabs = [];
    this.activeIndex = config.activeIndex || 0;
    this.orientation = config.orientation || TAB_ORIENTATIONS.horizontal;
    this.variant = config.variant || TAB_VARIANTS.default;
    this.size = config.size || TAB_SIZES.md;
    this.allowKeyboardNavigation = config.allowKeyboardNavigation !== false;
    this.lazy = config.lazy || false;
    this.keepAlive = config.keepAlive || false;
    this.onChange = config.onChange;
    this.onTabLoad = config.onTabLoad;
    this.loadedTabs = new Set();
  }

  /**
   * Add tab to manager
   * @param {Object} tab - Tab configuration
   * @returns {number} Tab index
   */
  addTab(tab) {
    const index = this.tabs.length;
    this.tabs.push({
      id: tab.id || `tab-${index}`,
      title: tab.title,
      content: tab.content,
      disabled: tab.disabled || false,
      closable: tab.closable || false,
      icon: tab.icon,
      badge: tab.badge,
      loading: tab.loading || false,
      ...tab
    });
    return index;
  }

  /**
   * Remove tab by index
   * @param {number} index - Tab index
   * @returns {boolean} Success
   */
  removeTab(index) {
    if (index < 0 || index >= this.tabs.length) return false;
    
    const wasActive = index === this.activeIndex;
    this.tabs.splice(index, 1);
    this.loadedTabs.delete(index);
    
    // Adjust active index if necessary
    if (wasActive && this.tabs.length > 0) {
      this.activeIndex = Math.min(this.activeIndex, this.tabs.length - 1);
      this.notifyChange(this.activeIndex);
    } else if (index < this.activeIndex) {
      this.activeIndex--;
    }
    
    return true;
  }

  /**
   * Set active tab
   * @param {number} index - Tab index
   * @returns {boolean} Success
   */
  setActiveTab(index) {
    if (index < 0 || index >= this.tabs.length) return false;
    
    const tab = this.tabs[index];
    if (tab.disabled) return false;
    
    this.activeIndex = index;
    this.markTabAsLoaded(index);
    this.notifyChange(index);
    return true;
  }

  /**
   * Get active tab
   * @returns {Object|null} Active tab
   */
  getActiveTab() {
    return this.tabs[this.activeIndex] || null;
  }

  /**
   * Get tab by index
   * @param {number} index - Tab index
   * @returns {Object|null} Tab
   */
  getTab(index) {
    return this.tabs[index] || null;
  }

  /**
   * Mark tab as loaded
   * @param {number} index - Tab index
   */
  markTabAsLoaded(index) {
    this.loadedTabs.add(index);
    if (this.onTabLoad && typeof this.onTabLoad === 'function') {
      this.onTabLoad(index, this.tabs[index]);
    }
  }

  /**
   * Check if tab is loaded
   * @param {number} index - Tab index
   * @returns {boolean} Is loaded
   */
  isTabLoaded(index) {
    return !this.lazy || this.loadedTabs.has(index);
  }

  /**
   * Notify change listeners
   * @param {number} index - New active index
   */
  notifyChange(index) {
    if (this.onChange && typeof this.onChange === 'function') {
      this.onChange(index, this.tabs[index]);
    }
  }

  /**
   * Update tab properties
   * @param {number} index - Tab index
   * @param {Object} updates - Properties to update
   * @returns {boolean} Success
   */
  updateTab(index, updates) {
    if (index < 0 || index >= this.tabs.length) return false;
    
    Object.assign(this.tabs[index], updates);
    return true;
  }
}

// ====== Navigation Utilities ======

/**
 * Handle keyboard navigation
 * @param {Event} event - Keyboard event
 * @param {number} currentIndex - Current tab index
 * @param {Array} tabs - Array of tabs
 * @param {string} orientation - Tab orientation
 * @returns {number} New tab index
 */
export function handleKeyboardNavigation(event, currentIndex, tabs, orientation = TAB_ORIENTATIONS.horizontal) {
  if (!tabs || tabs.length === 0) return currentIndex;
  
  const keyCode = event.keyCode || event.which;
  const isHorizontal = orientation === TAB_ORIENTATIONS.horizontal;
  
  let newIndex = currentIndex;
  
  switch (keyCode) {
    case KEY_CODES.ARROW_LEFT:
      if (isHorizontal) {
        newIndex = findPreviousEnabledTab(currentIndex, tabs);
        event.preventDefault();
      }
      break;
      
    case KEY_CODES.ARROW_RIGHT:
      if (isHorizontal) {
        newIndex = findNextEnabledTab(currentIndex, tabs);
        event.preventDefault();
      }
      break;
      
    case KEY_CODES.ARROW_UP:
      if (!isHorizontal) {
        newIndex = findPreviousEnabledTab(currentIndex, tabs);
        event.preventDefault();
      }
      break;
      
    case KEY_CODES.ARROW_DOWN:
      if (!isHorizontal) {
        newIndex = findNextEnabledTab(currentIndex, tabs);
        event.preventDefault();
      }
      break;
      
    case KEY_CODES.HOME:
      newIndex = findFirstEnabledTab(tabs);
      event.preventDefault();
      break;
      
    case KEY_CODES.END:
      newIndex = findLastEnabledTab(tabs);
      event.preventDefault();
      break;
  }
  
  return newIndex;
}

/**
 * Find next enabled tab
 * @param {number} currentIndex - Current index
 * @param {Array} tabs - Array of tabs
 * @returns {number} Next enabled tab index
 */
export function findNextEnabledTab(currentIndex, tabs) {
  for (let i = 1; i < tabs.length; i++) {
    const index = (currentIndex + i) % tabs.length;
    if (!tabs[index].disabled) {
      return index;
    }
  }
  return currentIndex;
}

/**
 * Find previous enabled tab
 * @param {number} currentIndex - Current index
 * @param {Array} tabs - Array of tabs
 * @returns {number} Previous enabled tab index
 */
export function findPreviousEnabledTab(currentIndex, tabs) {
  for (let i = 1; i < tabs.length; i++) {
    const index = (currentIndex - i + tabs.length) % tabs.length;
    if (!tabs[index].disabled) {
      return index;
    }
  }
  return currentIndex;
}

/**
 * Find first enabled tab
 * @param {Array} tabs - Array of tabs
 * @returns {number} First enabled tab index
 */
export function findFirstEnabledTab(tabs) {
  for (let i = 0; i < tabs.length; i++) {
    if (!tabs[i].disabled) {
      return i;
    }
  }
  return 0;
}

/**
 * Find last enabled tab
 * @param {Array} tabs - Array of tabs
 * @returns {number} Last enabled tab index
 */
export function findLastEnabledTab(tabs) {
  for (let i = tabs.length - 1; i >= 0; i--) {
    if (!tabs[i].disabled) {
      return i;
    }
  }
  return tabs.length - 1;
}

// ====== Class Name Utilities ======

/**
 * Generate tabs wrapper classes
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getTabsWrapperClasses(props = {}) {
  const {
    orientation = TAB_ORIENTATIONS.horizontal,
    animated = false
  } = props;
  
  const classes = ['wc-tabs-wrapper'];
  
  if (orientation === TAB_ORIENTATIONS.vertical) {
    classes.push('wc-tabs-wrapper--vertical');
  }
  
  if (animated) {
    classes.push('wc-tabs-wrapper--animated');
  }
  
  return classes.join(' ');
}

/**
 * Generate tabs container classes
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getTabsClasses(props = {}) {
  const {
    variant = TAB_VARIANTS.default,
    size = TAB_SIZES.md,
    scrollable = false,
    rounded = false,
    square = false,
    animated = false
  } = props;
  
  const classes = ['wc-tabs'];
  
  classes.push(`wc-tabs--${variant}`);
  classes.push(`wc-tabs--${size}`);
  
  if (scrollable) classes.push('wc-tabs--scrollable');
  if (rounded) classes.push('wc-tabs--rounded');
  if (square) classes.push('wc-tabs--square');
  if (animated) classes.push('wc-tabs--animated');
  
  return classes.join(' ');
}

/**
 * Generate tab classes
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getTabClasses(props = {}) {
  const {
    active = false,
    disabled = false,
    loading = false,
    closable = false
  } = props;
  
  const classes = ['wc-tab'];
  
  if (active) classes.push('wc-tab--active');
  if (disabled) classes.push('wc-tab--disabled');
  if (loading) classes.push('wc-tab--loading');
  if (closable) classes.push('wc-tab--closable');
  
  return classes.join(' ');
}

/**
 * Generate tab content classes
 * @param {Object} props - Component props
 * @returns {string} Class names
 */
export function getTabContentClasses(props = {}) {
  const {
    noPadding = false,
    animated = false
  } = props;
  
  const classes = ['wc-tab-content'];
  
  if (noPadding) classes.push('wc-tab-content--no-padding');
  if (animated) classes.push('wc-tab-content--animated');
  
  return classes.join(' ');
}

// ====== State Management ======

/**
 * Create controlled tab state
 * @param {Object} config - Configuration
 * @returns {Object} State management object
 */
export function createTabState(config = {}) {
  const {
    defaultActiveIndex = 0,
    controlled = false,
    onChange
  } = config;
  
  let activeIndex = defaultActiveIndex;
  let listeners = [];
  
  return {
    get activeIndex() {
      return activeIndex;
    },
    
    setActiveIndex(newIndex) {
      if (!controlled) {
        activeIndex = newIndex;
        this.notifyListeners(newIndex);
      }
      
      if (onChange && typeof onChange === 'function') {
        onChange(newIndex);
      }
    },
    
    addListener(listener) {
      listeners.push(listener);
    },
    
    removeListener(listener) {
      listeners = listeners.filter(l => l !== listener);
    },
    
    notifyListeners(index) {
      listeners.forEach(listener => {
        if (typeof listener === 'function') {
          listener(index);
        }
      });
    }
  };
}

// ====== Animation Utilities ======

/**
 * Animate tab content transition
 * @param {Element} element - Content element
 * @param {Object} options - Animation options
 * @returns {Promise} Animation promise
 */
export function animateTabContent(element, options = {}) {
  const {
    duration = 300,
    easing = 'ease-out',
    direction = 'fade'
  } = options;
  
  if (!element || typeof element.animate !== 'function') {
    return Promise.resolve();
  }
  
  let keyframes = [];
  
  switch (direction) {
    case 'fade':
      keyframes = [
        { opacity: 0, transform: 'translateY(8px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ];
      break;
      
    case 'slide-left':
      keyframes = [
        { opacity: 0, transform: 'translateX(20px)' },
        { opacity: 1, transform: 'translateX(0)' }
      ];
      break;
      
    case 'slide-right':
      keyframes = [
        { opacity: 0, transform: 'translateX(-20px)' },
        { opacity: 1, transform: 'translateX(0)' }
      ];
      break;
      
    default:
      keyframes = [
        { opacity: 0 },
        { opacity: 1 }
      ];
  }
  
  return element.animate(keyframes, {
    duration,
    easing,
    fill: 'both'
  }).finished;
}

// ====== Accessibility Utilities ======

/**
 * Generate ARIA attributes for tabs
 * @param {Object} props - Component props
 * @returns {Object} ARIA attributes
 */
export function getTabsAriaAttributes(props = {}) {
  const {
    orientation = TAB_ORIENTATIONS.horizontal,
    label = 'Tabs'
  } = props;
  
  return {
    role: 'tablist',
    'aria-label': label,
    'aria-orientation': orientation
  };
}

/**
 * Generate ARIA attributes for individual tab
 * @param {Object} props - Component props
 * @returns {Object} ARIA attributes
 */
export function getTabAriaAttributes(props = {}) {
  const {
    id,
    panelId,
    active = false,
    disabled = false,
    index
  } = props;
  
  return {
    role: 'tab',
    id: id || `tab-${index}`,
    'aria-controls': panelId || `panel-${index}`,
    'aria-selected': active,
    'aria-disabled': disabled || undefined,
    tabIndex: active ? 0 : -1
  };
}

/**
 * Generate ARIA attributes for tab panel
 * @param {Object} props - Component props
 * @returns {Object} ARIA attributes
 */
export function getTabPanelAriaAttributes(props = {}) {
  const {
    id,
    tabId,
    active = false,
    index
  } = props;
  
  return {
    role: 'tabpanel',
    id: id || `panel-${index}`,
    'aria-labelledby': tabId || `tab-${index}`,
    hidden: !active || undefined,
    tabIndex: active ? 0 : -1
  };
}

// ====== Validation ======

/**
 * Validate tabs configuration
 * @param {Array} tabs - Tabs array
 * @returns {Object} Validation result
 */
export function validateTabs(tabs) {
  const errors = [];
  const warnings = [];
  
  if (!Array.isArray(tabs)) {
    errors.push('Tabs must be an array');
    return { isValid: false, errors, warnings };
  }
  
  if (tabs.length === 0) {
    warnings.push('No tabs provided');
  }
  
  tabs.forEach((tab, index) => {
    if (!tab.title) {
      errors.push(`Tab at index ${index} is missing a title`);
    }
    
    if (tab.id && tabs.filter(t => t.id === tab.id).length > 1) {
      errors.push(`Duplicate tab ID: ${tab.id}`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Validate tab props
 * @param {Object} props - Component props
 * @returns {Object} Validation result
 */
export function validateTabProps(props = {}) {
  const errors = [];
  const warnings = [];
  
  // Variant validation
  if (props.variant && !Object.values(TAB_VARIANTS).includes(props.variant)) {
    errors.push(`Invalid variant: ${props.variant}`);
  }
  
  // Size validation
  if (props.size && !Object.values(TAB_SIZES).includes(props.size)) {
    errors.push(`Invalid size: ${props.size}`);
  }
  
  // Orientation validation
  if (props.orientation && !Object.values(TAB_ORIENTATIONS).includes(props.orientation)) {
    errors.push(`Invalid orientation: ${props.orientation}`);
  }
  
  // Active index validation
  if (props.activeIndex !== undefined && props.tabs) {
    if (props.activeIndex < 0 || props.activeIndex >= props.tabs.length) {
      errors.push('Active index is out of bounds');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

// ====== Utility Functions ======

/**
 * Debounce tab change handler
 * @param {Function} handler - Change handler
 * @param {number} delay - Debounce delay
 * @returns {Function} Debounced handler
 */
export function debounceTabChange(handler, delay = 100) {
  let timeoutId;
  
  return function (index, tab, ...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      handler(index, tab, ...args);
    }, delay);
  };
}

/**
 * Throttle tab change handler
 * @param {Function} handler - Change handler
 * @param {number} delay - Throttle delay
 * @returns {Function} Throttled handler
 */
export function throttleTabChange(handler, delay = 100) {
  let lastCallTime = 0;
  
  return function (index, tab, ...args) {
    const now = Date.now();
    
    if (now - lastCallTime >= delay) {
      handler(index, tab, ...args);
      lastCallTime = now;
    }
  };
}

/**
 * Create tab ID generator
 * @param {string} prefix - ID prefix
 * @returns {Function} ID generator function
 */
export function createTabIdGenerator(prefix = 'tab') {
  let counter = 0;
  
  return function () {
    return `${prefix}-${++counter}`;
  };
}

/**
 * Scroll tab into view
 * @param {Element} tabElement - Tab element
 * @param {Element} containerElement - Container element
 * @param {Object} options - Scroll options
 */
export function scrollTabIntoView(tabElement, containerElement, options = {}) {
  if (!tabElement || !containerElement) return;
  
  const {
    behavior = 'smooth',
    block = 'nearest',
    inline = 'center'
  } = options;
  
  tabElement.scrollIntoView({
    behavior,
    block,
    inline
  });
}

// ====== Export All Utilities ======
export default {
  // Constants
  TAB_VARIANTS,
  TAB_SIZES,
  TAB_ORIENTATIONS,
  KEY_CODES,
  
  // Classes
  TabManager,
  
  // Navigation
  handleKeyboardNavigation,
  findNextEnabledTab,
  findPreviousEnabledTab,
  findFirstEnabledTab,
  findLastEnabledTab,
  
  // Class utilities
  getTabsWrapperClasses,
  getTabsClasses,
  getTabClasses,
  getTabContentClasses,
  
  // State management
  createTabState,
  
  // Animation
  animateTabContent,
  
  // Accessibility
  getTabsAriaAttributes,
  getTabAriaAttributes,
  getTabPanelAriaAttributes,
  
  // Validation
  validateTabs,
  validateTabProps,
  
  // Utilities
  debounceTabChange,
  throttleTabChange,
  createTabIdGenerator,
  scrollTabIntoView
};