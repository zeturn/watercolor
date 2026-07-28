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
    
    // 阴影等级 (0-24)
    const validElevation = Math.max(0, Math.min(24, Math.floor(Number(elevation) || 0)))
    classes.push(`wc-paper--elevation-${validElevation}`)
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
 * @param {number} elevation - 阴影等级 (0-24)
 * @returns {number} 有效的阴影等级
 */
export function validateElevation(elevation) {
  const level = Number(elevation)
  if (isNaN(level)) return 1
  return Math.max(0, Math.min(24, Math.floor(level)))
}

/**
 * 获取阴影等级对应的CSS类名
 * @param {number} elevation - 阴影等级 (0-24)
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
    baseElevation = 24
  } else if (isFloating) {
    baseElevation = Math.max(baseElevation, 12)
  }

  return validateElevation(baseElevation)
}

/**
 * 无障碍辅助函数
 */
export const accessibilityUtils = {
  /**
   * 添加键盘支持
   * @param {HTMLElement} element - 目标元素
   * @param {Function} clickHandler - 点击处理函数
   */
  addKeyboardSupport(element, clickHandler) {
    if (!element || typeof clickHandler !== 'function') return

    const handleKeyDown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        clickHandler(event)
      }
    }

    element.addEventListener('keydown', handleKeyDown)
    element.setAttribute('tabindex', '0')
    element.setAttribute('role', 'button')

    return () => {
      element.removeEventListener('keydown', handleKeyDown)
    }
  },

  /**
   * 设置无障碍标签
   * @param {HTMLElement} element - 目标元素
   * @param {Object} labels - 标签配置
   */
  setAriaLabels(element, labels = {}) {
    const {
      label,
      describedBy,
      expanded,
      haspopup,
      selected,
      disabled
    } = labels

    if (label) element.setAttribute('aria-label', label)
    if (describedBy) element.setAttribute('aria-describedby', describedBy)
    if (expanded !== undefined) element.setAttribute('aria-expanded', expanded)
    if (haspopup) element.setAttribute('aria-haspopup', haspopup)
    if (selected !== undefined) element.setAttribute('aria-selected', selected)
    if (disabled !== undefined) element.setAttribute('aria-disabled', disabled)
  }
}

/**
 * 动画工具函数
 */
export const animationUtils = {
  /**
   * 检查是否应该减少动画
   * @returns {boolean}
   */
  shouldReduceMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },

  /**
   * 创建悬停动画
   * @param {HTMLElement} element - 目标元素
   * @param {Object} options - 动画选项
   */
  createHoverAnimation(element, options = {}) {
    const { scale = 1.02, duration = 200 } = options

    const handleMouseEnter = () => {
      element.style.transform = `scale(${scale})`
    }

    const handleMouseLeave = () => {
      element.style.transform = 'scale(1)'
    }

    element.style.transition = `transform ${duration}ms ease`
    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }
}

/**
 * 开发工具函数
 */
export const devUtils = {
  /**
   * 记录组件配置
   * @param {Object} config - 组件配置
   */
  logConfig(config) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Paper Config:', config)
    }
  },

  /**
   * 验证组件配置
   * @param {Object} config - 组件配置
   * @returns {Object} 验证结果
   */
  validateConfig(config) {
    const errors = []
    const warnings = []

    if (config.elevation < 0 || config.elevation > 24) {
      warnings.push('Elevation should be between 0 and 24')
    }

    if (config.variant && !Object.values(variants).includes(config.variant)) {
      errors.push(`Invalid variant: ${config.variant}`)
    }

    return { errors, warnings, isValid: errors.length === 0 }
  }
}

// 默认导出所有工具函数
export default {
  getPaperClasses,
  validateElevation,
  getElevationClass,
  getRecommendedElevation,
  accessibilityUtils,
  animationUtils,
  devUtils,
  variants,
  shapes,
  sizes,
  colors,
  elevationMap
}
