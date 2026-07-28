/**
 * Rating Component Utilities
 * 评分组件工具函数
 */

// ====== Constants ====== //

export const RATING_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl'
}

export const RATING_COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info'
}

export const RATING_ICONS = {
  STAR: 'star',
  HEART: 'heart',
  THUMBS: 'thumbs',
  CUSTOM: 'custom'
}

export const RATING_VARIANTS = {
  STANDARD: 'standard',
  OUTLINED: 'outlined',
  FILLED: 'filled',
  ANIMATED: 'animated',
  GLOW: 'glow',
  BOUNCE: 'bounce'
}

// ====== Validation Functions ====== //

/**
 * 验证评分值
 * @param {number} value - 评分值
 * @param {number} max - 最大评分
 * @param {number} min - 最小评分
 * @returns {boolean} 是否有效
 */
export function validateRating(value, max = 5, min = 0) {
  if (typeof value !== 'number') return false
  if (isNaN(value)) return false
  return value >= min && value <= max
}

/**
 * 规范化评分值
 * @param {number} value - 评分值
 * @param {number} max - 最大评分
 * @param {number} min - 最小评分
 * @param {number} step - 步长
 * @returns {number} 规范化后的值
 */
export function normalizeRating(value, max = 5, min = 0, step = 1) {
  if (typeof value !== 'number' || isNaN(value)) {
    return min
  }
  
  // 限制在范围内
  const clamped = Math.max(min, Math.min(max, value))
  
  // 按步长对齐
  if (step > 0) {
    return Math.round(clamped / step) * step
  }
  
  return clamped
}

/**
 * 验证评分配置
 * @param {Object} config - 评分配置
 * @returns {Object} 验证结果
 */
export function validateRatingConfig(config = {}) {
  const errors = []
  const warnings = []
  
  const { max = 5, min = 0, step = 1, value = 0 } = config
  
  // 验证最大值
  if (typeof max !== 'number' || max <= 0) {
    errors.push('最大评分必须是大于0的数字')
  }
  
  // 验证最小值
  if (typeof min !== 'number' || min < 0) {
    errors.push('最小评分必须是大于等于0的数字')
  }
  
  // 验证范围
  if (min >= max) {
    errors.push('最小评分必须小于最大评分')
  }
  
  // 验证步长
  if (typeof step !== 'number' || step <= 0) {
    errors.push('步长必须是大于0的数字')
  }
  
  // 验证当前值
  if (!validateRating(value, max, min)) {
    warnings.push('当前评分值超出有效范围')
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  }
}

// ====== Utility Functions ====== //

/**
 * 生成评分项数组
 * @param {number} max - 最大评分
 * @param {number} value - 当前值
 * @param {number} hovered - 悬停值
 * @returns {Array} 评分项数组
 */
export function generateRatingItems(max = 5, value = 0, hovered = 0) {
  const items = []
  
  for (let i = 1; i <= max; i++) {
    const isActive = i <= (hovered || value)
    const isFilled = i <= value
    const isHovered = hovered > 0 && i <= hovered
    
    items.push({
      index: i,
      value: i,
      active: isActive,
      filled: isFilled,
      hovered: isHovered,
      empty: !isActive
    })
  }
  
  return items
}

/**
 * 计算精确评分的填充百分比
 * @param {number} value - 当前值
 * @param {number} itemIndex - 项目索引
 * @returns {number} 填充百分比 (0-100)
 */
export function calculateFillPercentage(value, itemIndex) {
  if (value >= itemIndex) {
    return 100
  } else if (value > itemIndex - 1) {
    return (value - (itemIndex - 1)) * 100
  } else {
    return 0
  }
}

/**
 * 从鼠标位置计算评分值
 * @param {MouseEvent} event - 鼠标事件
 * @param {HTMLElement} container - 容器元素
 * @param {number} max - 最大评分
 * @param {boolean} allowHalf - 是否允许半星
 * @returns {number} 计算出的评分值
 */
export function calculateRatingFromPosition(event, container, max = 5, allowHalf = false) {
  const rect = container.getBoundingClientRect()
  const x = event.clientX - rect.left
  const width = rect.width
  const percentage = Math.max(0, Math.min(1, x / width))
  
  let rating = percentage * max
  
  if (allowHalf) {
    rating = Math.round(rating * 2) / 2
  } else {
    rating = Math.ceil(rating)
  }
  
  return Math.max(0, Math.min(max, rating))
}

// ====== Class Name Generation ====== //

/**
 * 生成评分容器类名
 * @param {Object} options - 选项
 * @returns {string} 类名字符串
 */
export function getRatingClasses(options = {}) {
  const {
    size = RATING_SIZES.MD,
    color = RATING_COLORS.WARNING,
    variant = RATING_VARIANTS.STANDARD,
    readonly = false,
    disabled = false,
    vertical = false,
    compact = false,
    className = ''
  } = options
  
  const classes = ['wc-rating']
  
  // 尺寸
  if (size !== RATING_SIZES.MD) {
    classes.push(`wc-rating--${size}`)
  }
  
  // 颜色
  if (color !== RATING_COLORS.WARNING) {
    classes.push(`wc-rating--${color}`)
  }
  
  // 变体
  if (variant !== RATING_VARIANTS.STANDARD) {
    classes.push(`wc-rating--${variant}`)
  }
  
  // 状态
  if (readonly) {
    classes.push('wc-rating--readonly')
  }
  
  if (disabled) {
    classes.push('wc-rating--disabled')
  }
  
  if (vertical) {
    classes.push('wc-rating--vertical')
  }
  
  if (compact) {
    classes.push('wc-rating--compact')
  }
  
  // 自定义类名
  if (className) {
    classes.push(className)
  }
  
  return classes.join(' ')
}

/**
 * 生成评分项类名
 * @param {Object} options - 选项
 * @returns {string} 类名字符串
 */
export function getRatingItemClasses(options = {}) {
  const {
    active = false,
    filled = false,
    hovered = false,
    disabled = false,
    size = RATING_SIZES.MD,
    className = ''
  } = options
  
  const classes = ['wc-rating-item']
  
  // 状态
  if (active) {
    classes.push('active')
  }
  
  if (filled) {
    classes.push('filled')
  }
  
  if (hovered) {
    classes.push('hovered')
  }
  
  if (disabled) {
    classes.push('disabled')
  }
  
  // 尺寸
  if (size !== RATING_SIZES.MD) {
    classes.push(`wc-rating-item--${size}`)
  }
  
  // 自定义类名
  if (className) {
    classes.push(className)
  }
  
  return classes.join(' ')
}

// ====== Icon Management ====== //

/**
 * 获取评分图标
 * @param {string} iconType - 图标类型
 * @param {boolean} filled - 是否填充
 * @returns {string} 图标字符
 */
export function getRatingIcon(iconType = RATING_ICONS.STAR, filled = false) {
  const iconMap = {
    [RATING_ICONS.STAR]: {
      filled: '★',
      empty: '☆'
    },
    [RATING_ICONS.HEART]: {
      filled: '♥',
      empty: '♡'
    },
    [RATING_ICONS.THUMBS]: {
      filled: '👍',
      empty: '👍'
    }
  }
  
  const icons = iconMap[iconType] || iconMap[RATING_ICONS.STAR]
  return filled ? icons.filled : icons.empty
}

/**
 * 创建自定义图标元素
 * @param {string} iconName - 图标名称
 * @param {boolean} filled - 是否填充
 * @returns {string} SVG 图标 HTML
 */
export function createCustomIcon(iconName, filled = false) {
  const iconSVGs = {
    star: filled 
      ? '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    heart: filled
      ? '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
  }
  
  return iconSVGs[iconName] || iconSVGs.star
}

// ====== Event Handlers ====== //

/**
 * 创建评分点击处理器
 * @param {Function} onChange - 变化回调
 * @param {Object} options - 选项
 * @returns {Function} 点击处理器
 */
export function createRatingClickHandler(onChange, options = {}) {
  const { readonly = false, allowClear = true } = options
  
  return function handleClick(value, currentValue) {
    if (readonly) return
    
    let newValue = value
    
    // 如果点击当前值且允许清除，则设为0
    if (allowClear && value === currentValue) {
      newValue = 0
    }
    
    onChange?.(newValue)
  }
}

/**
 * 创建评分悬停处理器
 * @param {Function} onHover - 悬停回调
 * @param {Object} options - 选项
 * @returns {Object} 悬停处理器对象
 */
export function createRatingHoverHandlers(onHover, options = {}) {
  const { readonly = false } = options
  
  return {
    onMouseEnter(value) {
      if (readonly) return
      onHover?.(value)
    },
    
    onMouseLeave() {
      if (readonly) return
      onHover?.(0)
    }
  }
}

/**
 * 创建键盘导航处理器
 * @param {Function} onChange - 变化回调
 * @param {Object} options - 选项
 * @returns {Function} 键盘处理器
 */
export function createRatingKeyboardHandler(onChange, options = {}) {
  const { max = 5, min = 0, readonly = false } = options
  
  return function handleKeyDown(event, currentValue) {
    if (readonly) return
    
    let newValue = currentValue
    
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        newValue = Math.min(max, currentValue + 1)
        break
      case 'ArrowLeft':
      case 'ArrowDown':
        newValue = Math.max(min, currentValue - 1)
        break
      case 'Home':
        newValue = min
        break
      case 'End':
        newValue = max
        break
      case 'Enter':
      case ' ':
        // 空格或回车确认当前值
        onChange?.(currentValue)
        return
      default:
        return
    }
    
    event.preventDefault()
    onChange?.(newValue)
  }
}

// ====== Formatting Functions ====== //

/**
 * 格式化评分显示
 * @param {number} value - 评分值
 * @param {number} max - 最大评分
 * @param {Object} options - 格式化选项
 * @returns {string} 格式化后的字符串
 */
export function formatRating(value, max = 5, options = {}) {
  const {
    showMax = true,
    precision = 1,
    locale = 'zh-CN'
  } = options
  
  const formattedValue = Number(value).toFixed(precision)
  
  if (showMax) {
    return `${formattedValue}/${max}`
  }
  
  return formattedValue
}

/**
 * 格式化评分描述
 * @param {number} value - 评分值
 * @param {number} max - 最大评分
 * @param {Array} labels - 描述标签数组
 * @returns {string} 描述文本
 */
export function formatRatingDescription(value, max = 5, labels = []) {
  if (labels.length === 0) {
    // 默认描述
    const defaultLabels = ['很差', '较差', '一般', '良好', '优秀']
    labels = defaultLabels.slice(0, max)
  }
  
  const index = Math.floor(value) - 1
  return labels[index] || ''
}

// ====== Accessibility ====== //

/**
 * 生成可访问性属性
 * @param {number} value - 当前值
 * @param {number} max - 最大值
 * @param {boolean} readonly - 是否只读
 * @returns {Object} 可访问性属性
 */
export function getRatingAccessibilityProps(value, max = 5, readonly = false) {
  const props = {
    role: readonly ? 'img' : 'radiogroup',
    'aria-label': `评分 ${value} 分，满分 ${max} 分`,
    'aria-valuemin': 0,
    'aria-valuemax': max,
    'aria-valuenow': value
  }
  
  if (readonly) {
    props['aria-readonly'] = 'true'
  }
  
  return props
}

/**
 * 生成评分项可访问性属性
 * @param {number} itemValue - 项目值
 * @param {number} currentValue - 当前值
 * @param {boolean} readonly - 是否只读
 * @returns {Object} 可访问性属性
 */
export function getRatingItemAccessibilityProps(itemValue, currentValue, readonly = false) {
  const props = {
    role: 'radio',
    'aria-checked': itemValue === currentValue ? 'true' : 'false',
    'aria-label': `${itemValue} 星`,
    'aria-setsize': undefined, // 应该在外部设置
    'aria-posinset': itemValue
  }
  
  if (readonly) {
    props.tabIndex = -1
    props['aria-hidden'] = 'true'
  } else {
    props.tabIndex = itemValue === currentValue ? 0 : -1
  }
  
  return props
}

// ====== Performance ====== //

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

// ====== Export Default ====== //

export default {
  // Constants
  RATING_SIZES,
  RATING_COLORS,
  RATING_ICONS,
  RATING_VARIANTS,
  
  // Validation
  validateRating,
  normalizeRating,
  validateRatingConfig,
  
  // Utilities
  generateRatingItems,
  calculateFillPercentage,
  calculateRatingFromPosition,
  
  // Class names
  getRatingClasses,
  getRatingItemClasses,
  
  // Icons
  getRatingIcon,
  createCustomIcon,
  
  // Event handlers
  createRatingClickHandler,
  createRatingHoverHandlers,
  createRatingKeyboardHandler,
  
  // Formatting
  formatRating,
  formatRatingDescription,
  
  // Accessibility
  getRatingAccessibilityProps,
  getRatingItemAccessibilityProps,
  
  // Performance
  debounce,
  throttle
} 