/**
 * Paper 组件工具函数
 */

// 阴影等级映射
export const elevationMap = {
  0: 'none',
  1: 'xs',
  2: 'sm', 
  3: 'md',
  4: 'lg',
  5: 'xl',
  6: '2xl'
}

// 变体类型
export const variants = {
  ELEVATION: 'elevation',
  OUTLINED: 'outlined'
}

// 形状类型
export const shapes = {
  SQUARE: 'square',
  ROUNDED_SM: 'rounded-sm',
  ROUNDED_LG: 'rounded-lg',
  ROUNDED_XL: 'rounded-xl',
  ROUNDED_2XL: 'rounded-2xl',
  ROUNDED_FULL: 'rounded-full'
}

// 尺寸类型
export const sizes = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl'
}

// 颜色类型
export const colors = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info'
}

/**
 * 生成 Paper 组件的 CSS 类名
 * @param {Object} options - 配置选项
 * @returns {string} 生成的类名字符串
 */
export function getPaperClasses(options = {}) {
  const {
    variant = variants.ELEVATION,
    elevation = 1,
    square = false,
    shape = null,
    size = null,
    color = colors.DEFAULT,
    hoverable = false,
    clickable = false,
    gradient = false,
    frosted = false,
    textured = false,
    className = ''
  } = options

  const classes = ['wc-paper']

  // 变体样式
  if (variant === variants.OUTLINED) {
    classes.push('wc-paper--outlined')
  } else {
    classes.push('wc-paper--elevation')
    
    // 阴影等级
    if (elevation >= 0 && elevation <= 6) {
      classes.push(`wc-paper--elevation-${elevation}`)
    }
  }

  // 形状处理
  if (square) {
    classes.push('wc-paper--square')
  } else if (shape && shapes[shape.toUpperCase()]) {
    classes.push(`wc-paper--${shape}`)
  }

  // 尺寸
  if (size && sizes[size.toUpperCase()]) {
    classes.push(`wc-paper--${size}`)
  }

  // 颜色
  if (color !== colors.DEFAULT && colors[color.toUpperCase()]) {
    classes.push(`wc-paper--${color}`)
  }

  // 交互状态
  if (hoverable) {
    classes.push('wc-paper--hoverable')
  }
  
  if (clickable) {
    classes.push('wc-paper--clickable')
  }

  // 特殊效果
  if (gradient) {
    classes.push('wc-paper--gradient')
  }
  
  if (frosted) {
    classes.push('wc-paper--frosted')
  }
  
  if (textured) {
    classes.push('wc-paper--textured')
  }

  // 自定义类名
  if (className) {
    classes.push(className)
  }

  return classes.join(' ')
}

/**
 * 验证阴影等级
 * @param {number} elevation - 阴影等级
 * @returns {number} 有效的阴影等级
 */
export function validateElevation(elevation) {
  const level = Number(elevation)
  if (isNaN(level)) return 1
  return Math.max(0, Math.min(6, Math.floor(level)))
}

/**
 * 获取阴影等级对应的CSS类名
 * @param {number} elevation - 阴影等级
 * @returns {string} CSS类名
 */
export function getElevationClass(elevation) {
  const validElevation = validateElevation(elevation)
  return `wc-paper--elevation-${validElevation}`
}

/**
 * 根据内容自动计算合适的阴影等级
 * @param {Object} options - 配置选项
 * @returns {number} 推荐的阴影等级
 */
export function getRecommendedElevation(options = {}) {
  const {
    hasHeader = false,
    hasFooter = false,
    isInteractive = false,
    contentLength = 0,
    isModal = false,
    isFloating = false
  } = options

  let baseElevation = 1

  // 根据结构复杂度调整
  if (hasHeader || hasFooter) {
    baseElevation += 1
  }

  // 交互性调整
  if (isInteractive) {
    baseElevation += 1
  }

  // 内容长度调整
  if (contentLength > 500) {
    baseElevation += 1
  }

  // 特殊用途调整
  if (isModal) {
    baseElevation = 6
  } else if (isFloating) {
    baseElevation = Math.max(baseElevation, 4)
  }

  return validateElevation(baseElevation)
}

/**
 * 主题工具函数
 */
export const themeUtils = {
  /**
   * 检测当前主题
   * @returns {string} 主题名称
   */
  getCurrentTheme() {
    if (document.documentElement.classList.contains('dark')) {
      return 'dark'
    }
    
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    
    return 'light'
  },

  /**
   * 切换主题
   * @param {string} theme - 主题名称
   */
  setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },

  /**
   * 获取主题相关的CSS变量值
   * @param {string} varName - 变量名
   * @returns {string} 变量值
   */
  getCSSVariable(varName) {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim()
  }
}

/**
 * 可访问性工具函数
 */
export const a11yUtils = {
  /**
   * 为可点击的Paper添加键盘支持
   * @param {HTMLElement} element - Paper元素
   * @param {Function} clickHandler - 点击处理函数
   */
  addKeyboardSupport(element, clickHandler) {
    if (!element || typeof clickHandler !== 'function') return

    element.setAttribute('tabindex', '0')
    element.setAttribute('role', 'button')

    const handleKeyDown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        clickHandler(event)
      }
    }

    element.addEventListener('keydown', handleKeyDown)

    // 返回清理函数
    return () => {
      element.removeEventListener('keydown', handleKeyDown)
    }
  },

  /**
   * 设置ARIA标签
   * @param {HTMLElement} element - Paper元素
   * @param {Object} labels - 标签配置
   */
  setAriaLabels(element, labels = {}) {
    if (!element) return

    const {
      label,
      labelledBy,
      describedBy,
      expanded,
      controls
    } = labels

    if (label) element.setAttribute('aria-label', label)
    if (labelledBy) element.setAttribute('aria-labelledby', labelledBy)
    if (describedBy) element.setAttribute('aria-describedby', describedBy)
    if (expanded !== undefined) element.setAttribute('aria-expanded', expanded)
    if (controls) element.setAttribute('aria-controls', controls)
  }
}

/**
 * 动画工具函数
 */
export const animationUtils = {
  /**
   * 检测是否应该减少动画
   * @returns {boolean}
   */
  shouldReduceMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },

  /**
   * 创建悬浮动画
   * @param {HTMLElement} element - 目标元素
   * @param {Object} options - 动画选项
   */
  createHoverAnimation(element, options = {}) {
    if (!element || this.shouldReduceMotion()) return

    const {
      translateY = -2,
      duration = 200,
      easing = 'ease'
    } = options

    const handleMouseEnter = () => {
      element.style.transform = `translateY(${translateY}px)`
      element.style.transition = `transform ${duration}ms ${easing}`
    }

    const handleMouseLeave = () => {
      element.style.transform = 'translateY(0)'
    }

    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    // 返回清理函数
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }
}

/**
 * 调试工具函数
 */
export const debugUtils = {
  /**
   * 打印Paper配置信息
   * @param {Object} config - 配置对象
   */
  logConfig(config) {
    if (process.env.NODE_ENV === 'development') {
      console.group('Paper Component Config')
      console.table(config)
      console.groupEnd()
    }
  },

  /**
   * 验证配置
   * @param {Object} config - 配置对象
   * @returns {Array} 警告信息数组
   */
  validateConfig(config) {
    const warnings = []

    if (config.elevation && (config.elevation < 0 || config.elevation > 6)) {
      warnings.push(`Invalid elevation: ${config.elevation}. Must be between 0 and 6.`)
    }

    if (config.variant && !Object.values(variants).includes(config.variant)) {
      warnings.push(`Invalid variant: ${config.variant}. Must be one of: ${Object.values(variants).join(', ')}.`)
    }

    if (config.color && !Object.values(colors).includes(config.color)) {
      warnings.push(`Invalid color: ${config.color}. Must be one of: ${Object.values(colors).join(', ')}.`)
    }

    if (process.env.NODE_ENV === 'development' && warnings.length > 0) {
      console.warn('Paper Component Warnings:', warnings)
    }

    return warnings
  }
}

// 默认导出
export default {
  getPaperClasses,
  validateElevation,
  getElevationClass,
  getRecommendedElevation,
  themeUtils,
  a11yUtils,
  animationUtils,
  debugUtils,
  variants,
  shapes,
  sizes,
  colors,
  elevationMap
} 