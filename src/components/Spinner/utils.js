/**
 * Spinner Component Utilities
 * 加载指示器组件工具函数
 */

// ====== Constants ====== //

export const SPINNER_SIZES = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl'
}

export const SPINNER_COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info',
  WHITE: 'white',
  BLACK: 'black'
}

export const SPINNER_VARIANTS = {
  SPIN: 'spin',
  PULSE: 'pulse',
  DOTS: 'dots',
  BARS: 'bars',
  RING: 'ring',
  GRADIENT: 'gradient'
}

export const SPINNER_POSITIONS = {
  INLINE: 'inline',
  CENTERED: 'centered',
  OVERLAY: 'overlay',
  ABSOLUTE: 'absolute'
}

// ====== Utility Functions ====== //

/**
 * 生成Spinner类名
 * @param {Object} options - 选项
 * @returns {string} 类名字符串
 */
export function getSpinnerClasses(options = {}) {
  const {
    size = SPINNER_SIZES.MD,
    color = SPINNER_COLORS.PRIMARY,
    variant = SPINNER_VARIANTS.SPIN,
    position,
    loading = true,
    className = ''
  } = options
  
  const classes = ['wc-spinner']
  
  // 尺寸
  if (size !== SPINNER_SIZES.MD) {
    classes.push(`wc-spinner--${size}`)
  }
  
  // 颜色
  if (color !== SPINNER_COLORS.PRIMARY) {
    classes.push(`wc-spinner--${color}`)
  }
  
  // 变体
  if (variant !== SPINNER_VARIANTS.SPIN) {
    classes.push(`wc-spinner--${variant}`)
  }
  
  // 位置
  if (position) {
    classes.push(`wc-spinner--${position}`)
  }
  
  // 状态
  if (loading) {
    classes.push('wc-spinner--loading')
  } else {
    classes.push('wc-spinner--hidden')
  }
  
  // 自定义类名
  if (className) {
    classes.push(className)
  }
  
  return classes.join(' ')
}

/**
 * 获取Spinner样式对象
 * @param {Object} options - 选项
 * @returns {Object} 样式对象
 */
export function getSpinnerStyles(options = {}) {
  const {
    size,
    color,
    thickness,
    duration = 1
  } = options
  
  const styles = {}
  
  // 自定义尺寸
  if (typeof size === 'number') {
    styles.width = `${size}px`
    styles.height = `${size}px`
  } else if (typeof size === 'string' && !Object.values(SPINNER_SIZES).includes(size)) {
    styles.width = size
    styles.height = size
  }
  
  // 自定义颜色
  if (color && !Object.values(SPINNER_COLORS).includes(color)) {
    styles.borderTopColor = color
  }
  
  // 自定义粗细
  if (typeof thickness === 'number') {
    styles.borderWidth = `${thickness}px`
  }
  
  // 自定义动画时长
  if (duration !== 1) {
    styles.animationDuration = `${duration}s`
  }
  
  return styles
}

/**
 * 创建加载状态管理器
 * @param {Object} options - 选项
 * @returns {Object} 加载状态管理器
 */
export function createLoadingManager(options = {}) {
  const {
    initialState = false,
    onStateChange = null
  } = options
  
  let isLoading = initialState
  let loadingCount = 0
  
  return {
    /**
     * 开始加载
     * @param {string} id - 加载标识
     */
    start(id = 'default') {
      loadingCount++
      const wasLoading = isLoading
      isLoading = true
      
      if (!wasLoading && onStateChange) {
        onStateChange(true, loadingCount)
      }
    },
    
    /**
     * 结束加载
     * @param {string} id - 加载标识
     */
    stop(id = 'default') {
      loadingCount = Math.max(0, loadingCount - 1)
      const wasLoading = isLoading
      isLoading = loadingCount > 0
      
      if (wasLoading && !isLoading && onStateChange) {
        onStateChange(false, loadingCount)
      }
    },
    
    /**
     * 获取加载状态
     * @returns {boolean} 是否正在加载
     */
    isLoading() {
      return isLoading
    },
    
    /**
     * 获取加载计数
     * @returns {number} 加载计数
     */
    getCount() {
      return loadingCount
    },
    
    /**
     * 重置状态
     */
    reset() {
      isLoading = false
      loadingCount = 0
      if (onStateChange) {
        onStateChange(false, 0)
      }
    }
  }
}

/**
 * 创建按钮加载状态
 * @param {HTMLElement} button - 按钮元素
 * @param {Object} options - 选项
 * @returns {Object} 按钮加载控制器
 */
export function createButtonLoading(button, options = {}) {
  const {
    spinnerSize = SPINNER_SIZES.SM,
    spinnerColor = SPINNER_COLORS.WHITE,
    disableButton = true
  } = options
  
  let isLoading = false
  let originalText = ''
  let originalDisabled = false
  
  return {
    /**
     * 开始加载
     */
    start() {
      if (isLoading) return
      
      isLoading = true
      originalText = button.textContent || ''
      originalDisabled = button.disabled
      
      // 添加加载类
      button.classList.add('wc-button--loading')
      
      // 禁用按钮
      if (disableButton) {
        button.disabled = true
      }
      
      // 创建spinner
      const spinner = document.createElement('div')
      spinner.className = getSpinnerClasses({
        size: spinnerSize,
        color: spinnerColor
      })
      spinner.setAttribute('aria-hidden', 'true')
      
      button.appendChild(spinner)
    },
    
    /**
     * 结束加载
     */
    stop() {
      if (!isLoading) return
      
      isLoading = false
      
      // 移除加载类
      button.classList.remove('wc-button--loading')
      
      // 恢复按钮状态
      button.disabled = originalDisabled
      
      // 移除spinner
      const spinner = button.querySelector('.wc-spinner')
      if (spinner) {
        spinner.remove()
      }
    },
    
    /**
     * 获取加载状态
     * @returns {boolean} 是否正在加载
     */
    isLoading() {
      return isLoading
    }
  }
}

/**
 * 创建全局加载遮罩
 * @param {Object} options - 选项
 * @returns {Object} 遮罩控制器
 */
export function createGlobalSpinner(options = {}) {
  const {
    size = SPINNER_SIZES.LG,
    color = SPINNER_COLORS.PRIMARY,
    variant = SPINNER_VARIANTS.SPIN,
    message = '加载中...',
    zIndex = 9999,
    backdrop = true
  } = options
  
  let overlay = null
  let isVisible = false
  
  return {
    /**
     * 显示加载遮罩
     */
    show() {
      if (isVisible) return
      
      isVisible = true
      
      // 创建遮罩
      overlay = document.createElement('div')
      overlay.className = 'wc-spinner-overlay'
      overlay.style.zIndex = zIndex
      
      if (!backdrop) {
        overlay.style.backgroundColor = 'transparent'
        overlay.style.backdropFilter = 'none'
      }
      
      // 创建容器
      const container = document.createElement('div')
      container.style.textAlign = 'center'
      
      // 创建spinner
      const spinner = document.createElement('div')
      spinner.className = getSpinnerClasses({ size, color, variant })
      spinner.setAttribute('aria-label', message)
      
      container.appendChild(spinner)
      
      // 添加消息
      if (message) {
        const messageEl = document.createElement('div')
        messageEl.textContent = message
        messageEl.style.marginTop = '16px'
        messageEl.style.color = 'var(--wc-neutral-600)'
        messageEl.style.fontSize = '14px'
        container.appendChild(messageEl)
      }
      
      overlay.appendChild(container)
      document.body.appendChild(overlay)
      
      // 阻止页面滚动
      document.body.style.overflow = 'hidden'
    },
    
    /**
     * 隐藏加载遮罩
     */
    hide() {
      if (!isVisible || !overlay) return
      
      isVisible = false
      
      // 移除遮罩
      overlay.remove()
      overlay = null
      
      // 恢复页面滚动
      document.body.style.overflow = ''
    },
    
    /**
     * 获取显示状态
     * @returns {boolean} 是否显示
     */
    isVisible() {
      return isVisible
    }
  }
}

/**
 * 延迟显示Spinner
 * @param {Function} showFn - 显示函数
 * @param {number} delay - 延迟时间（毫秒）
 * @returns {Function} 取消函数
 */
export function delayedSpinner(showFn, delay = 300) {
  const timer = setTimeout(() => {
    showFn()
  }, delay)
  
  return function cancel() {
    clearTimeout(timer)
  }
}

/**
 * 最小显示时间Spinner
 * @param {Function} showFn - 显示函数
 * @param {Function} hideFn - 隐藏函数
 * @param {number} minTime - 最小显示时间（毫秒）
 * @returns {Object} 控制器
 */
export function minimumTimeSpinner(showFn, hideFn, minTime = 500) {
  let startTime = null
  let hideRequested = false
  
  return {
    show() {
      startTime = Date.now()
      hideRequested = false
      showFn()
    },
    
    hide() {
      if (!startTime) return
      
      const elapsed = Date.now() - startTime
      hideRequested = true
      
      if (elapsed >= minTime) {
        hideFn()
        startTime = null
        hideRequested = false
      } else {
        setTimeout(() => {
          if (hideRequested) {
            hideFn()
            startTime = null
            hideRequested = false
          }
        }, minTime - elapsed)
      }
    }
  }
}

// ====== Animation Control ====== //

/**
 * 暂停Spinner动画
 * @param {HTMLElement} spinner - Spinner元素
 */
export function pauseSpinner(spinner) {
  if (spinner) {
    spinner.style.animationPlayState = 'paused'
  }
}

/**
 * 恢复Spinner动画
 * @param {HTMLElement} spinner - Spinner元素
 */
export function resumeSpinner(spinner) {
  if (spinner) {
    spinner.style.animationPlayState = 'running'
  }
}

/**
 * 设置Spinner动画速度
 * @param {HTMLElement} spinner - Spinner元素
 * @param {number} speed - 速度倍数
 */
export function setSpinnerSpeed(spinner, speed = 1) {
  if (spinner) {
    const duration = 1 / speed
    spinner.style.animationDuration = `${duration}s`
  }
}

// ====== Accessibility ====== //

/**
 * 生成Spinner可访问性属性
 * @param {Object} options - 选项
 * @returns {Object} 可访问性属性
 */
export function getSpinnerAccessibilityProps(options = {}) {
  const {
    label = '加载中',
    live = 'polite',
    hidden = false
  } = options
  
  const props = {
    role: 'status',
    'aria-live': live,
    'aria-label': label
  }
  
  if (hidden) {
    props['aria-hidden'] = 'true'
  }
  
  return props
}

/**
 * 创建屏幕阅读器友好的加载状态
 * @param {string} message - 加载消息
 * @returns {HTMLElement} 隐藏的状态元素
 */
export function createScreenReaderStatus(message = '加载中') {
  const status = document.createElement('div')
  status.setAttribute('role', 'status')
  status.setAttribute('aria-live', 'polite')
  status.setAttribute('aria-label', message)
  status.style.position = 'absolute'
  status.style.left = '-9999px'
  status.style.width = '1px'
  status.style.height = '1px'
  status.style.overflow = 'hidden'
  
  return status
}

// ====== Performance ====== //

/**
 * 节流函数
 * @param {Function} func - 要节流的函数
 * @param {number} limit - 限制时间
 * @returns {Function} 节流后的函数
 */
export function throttle(func, limit) {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * 防抖函数
 * @param {Function} func - 要防抖的函数
 * @param {number} wait - 等待时间
 * @returns {Function} 防抖后的函数
 */
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// ====== Export Default ====== //

export default {
  // Constants
  SPINNER_SIZES,
  SPINNER_COLORS,
  SPINNER_VARIANTS,
  SPINNER_POSITIONS,
  
  // Utilities
  getSpinnerClasses,
  getSpinnerStyles,
  
  // Managers
  createLoadingManager,
  createButtonLoading,
  createGlobalSpinner,
  
  // Timing
  delayedSpinner,
  minimumTimeSpinner,
  
  // Animation
  pauseSpinner,
  resumeSpinner,
  setSpinnerSpeed,
  
  // Accessibility
  getSpinnerAccessibilityProps,
  createScreenReaderStatus,
  
  // Performance
  throttle,
  debounce
} 