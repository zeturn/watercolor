/**
 * Input组件工具函数
 * 提供输入框相关的工具函数
 */

// 默认配置
export const DEFAULT_CONFIG = {
  type: 'text',
  size: 'md',
  variant: 'filled',
  color: 'primary',
  autoComplete: 'off',
  multiline: false,
  rows: 4,
  fullWidth: false,
  disabled: false,
  readonly: false,
  required: false,
  error: false
}

// 有效的输入类型
export const VALID_INPUT_TYPES = [
  'text', 'password', 'email', 'number', 'tel', 'url', 'search',
  'date', 'time', 'datetime-local', 'month', 'week',
  'color', 'range', 'file', 'hidden'
]

// 有效的尺寸
export const VALID_SIZES = ['sm', 'md', 'lg']

// 有效的变体
export const VALID_VARIANTS = ['outlined', 'filled', 'standard']

// 有效的颜色
export const VALID_COLORS = ['primary', 'secondary', 'success', 'warning', 'error']

/**
 * 获取输入框类名
 * @param {Object} props - 组件属性
 * @returns {Array} 类名数组
 */
export const getInputClasses = (props) => {
  const {
    size = 'md',
    variant = 'filled',
    error = false,
    disabled = false,
    readonly = false,
    focused = false,
    hasValue = false,
    fullWidth = false,
    startAdornment = null,
    endAdornment = null,
    className = ''
  } = props
  
  const classes = ['wc-input']
  
  // 尺寸类
  classes.push(`wc-input--${size}`)
  
  // 变体类
  classes.push(`wc-input--${variant}`)
  
  // 状态类
  if (error) classes.push('wc-input--error')
  if (disabled) classes.push('wc-input--disabled')
  if (readonly) classes.push('wc-input--readonly')
  if (focused) classes.push('wc-input--focused')
  if (hasValue) classes.push('wc-input--has-value')
  if (fullWidth) classes.push('wc-input--full-width')
  if (startAdornment) classes.push('wc-input--has-start-adornment')
  if (endAdornment) classes.push('wc-input--has-end-adornment')
  
  if (className) {
    classes.push(className)
  }
  
  return classes
}

/**
 * 获取标签类名
 * @param {Object} props - 组件属性
 * @returns {Array} 类名数组
 */
export const getLabelClasses = (props) => {
  const { focused = false, hasValue = false, error = false, required = false } = props
  
  const classes = ['wc-input-label']
  
  if (focused || hasValue) {
    classes.push('wc-input-label--active')
  }
  
  if (error) {
    classes.push('wc-input-label--error')
  }
  
  return classes
}

/**
 * 获取容器类名
 * @param {Object} props - 组件属性
 * @returns {Array} 类名数组
 */
export const getContainerClasses = (props) => {
  const { fullWidth = false, floating = false } = props
  
  const classes = ['wc-input-container']
  
  if (fullWidth) {
    classes.push('wc-input-container--full-width')
  }
  
  if (floating) {
    classes.push('wc-input-container--floating')
  }
  
  return classes
}

/**
 * 获取帮助文本类名
 * @param {Object} props - 组件属性
 * @returns {Array} 类名数组
 */
export const getHelperTextClasses = (props) => {
  const { error = false } = props
  
  const classes = ['wc-input-helper-text']
  
  if (error) {
    classes.push('wc-input-helper-text--error')
  }
  
  return classes
}

/**
 * 验证输入类型
 * @param {string} type - 输入类型
 * @returns {boolean} 是否有效
 */
export const isValidInputType = (type) => {
  return VALID_INPUT_TYPES.includes(type)
}

/**
 * 验证尺寸
 * @param {string} size - 尺寸
 * @returns {boolean} 是否有效
 */
export const isValidSize = (size) => {
  return VALID_SIZES.includes(size)
}

/**
 * 验证变体
 * @param {string} variant - 变体
 * @returns {boolean} 是否有效
 */
export const isValidVariant = (variant) => {
  return VALID_VARIANTS.includes(variant)
}

/**
 * 验证颜色
 * @param {string} color - 颜色
 * @returns {boolean} 是否有效
 */
export const isValidColor = (color) => {
  return VALID_COLORS.includes(color)
}

/**
 * 生成输入框ID
 * @param {string} prefix - 前缀
 * @returns {string} 输入框ID
 */
export const generateInputId = (prefix = 'input') => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * 格式化输入值
 * @param {any} value - 输入值
 * @param {string} type - 输入类型
 * @returns {string} 格式化后的值
 */
export const formatInputValue = (value, type) => {
  if (value === null || value === undefined) {
    return ''
  }
  
  switch (type) {
    case 'number':
      return isNaN(value) ? '' : String(value)
    case 'email':
      return String(value).toLowerCase().trim()
    case 'tel':
      return String(value).replace(/\D/g, '')
    default:
      return String(value)
  }
}

/**
 * 验证输入值
 * @param {any} value - 输入值
 * @param {Object} rules - 验证规则
 * @returns {Object} 验证结果
 */
export const validateInput = (value, rules = {}) => {
  const errors = []
  const {
    required = false,
    minLength = 0,
    maxLength = Infinity,
    pattern = null,
    min = null,
    max = null,
    type = 'text'
  } = rules
  
  // 必填验证
  if (required && (!value || String(value).trim() === '')) {
    errors.push('此字段为必填项')
  }
  
  if (value && String(value).trim() !== '') {
    const strValue = String(value)
    
    // 长度验证
    if (strValue.length < minLength) {
      errors.push(`最少需要${minLength}个字符`)
    }
    
    if (strValue.length > maxLength) {
      errors.push(`最多允许${maxLength}个字符`)
    }
    
    // 数值范围验证
    if (type === 'number') {
      const numValue = parseFloat(value)
      if (!isNaN(numValue)) {
        if (min !== null && numValue < min) {
          errors.push(`值不能小于${min}`)
        }
        if (max !== null && numValue > max) {
          errors.push(`值不能大于${max}`)
        }
      } else {
        errors.push('请输入有效数字')
      }
    }
    
    // 模式验证
    if (pattern) {
      const regex = pattern instanceof RegExp ? pattern : new RegExp(pattern)
      if (!regex.test(strValue)) {
        errors.push('输入格式不正确')
      }
    }
    
    // 特定类型验证
    switch (type) {
      case 'email':
        if (!isValidEmail(strValue)) {
          errors.push('请输入有效的邮箱地址')
        }
        break
      case 'url':
        if (!isValidUrl(strValue)) {
          errors.push('请输入有效的URL')
        }
        break
      case 'tel':
        if (!isValidPhone(strValue)) {
          errors.push('请输入有效的电话号码')
        }
        break
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  }
}

/**
 * 验证邮箱格式
 * @param {string} email - 邮箱地址
 * @returns {boolean} 是否有效
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * 验证URL格式
 * @param {string} url - URL地址
 * @returns {boolean} 是否有效
 */
export const isValidUrl = (url) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * 验证电话号码格式
 * @param {string} phone - 电话号码
 * @returns {boolean} 是否有效
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
}

/**
 * 自动完成建议
 * @param {string} value - 输入值
 * @param {Array} suggestions - 建议列表
 * @returns {Array} 匹配的建议
 */
export const getAutocompleteSuggestions = (value, suggestions) => {
  if (!value || !suggestions || !Array.isArray(suggestions)) {
    return []
  }
  
  const searchTerm = value.toLowerCase().trim()
  
  return suggestions.filter(suggestion => {
    const text = typeof suggestion === 'string' ? suggestion : suggestion.label || suggestion.value
    return text && text.toLowerCase().includes(searchTerm)
  }).slice(0, 10) // 限制最多10个建议
}

/**
 * 格式化电话号码
 * @param {string} phone - 电话号码
 * @param {string} format - 格式化模式
 * @returns {string} 格式化后的电话号码
 */
export const formatPhoneNumber = (phone, format = 'default') => {
  const cleaned = phone.replace(/\D/g, '')
  
  switch (format) {
    case 'us':
      if (cleaned.length === 10) {
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
      }
      break
    case 'china':
      if (cleaned.length === 11) {
        return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 7)} ${cleaned.slice(7)}`
      }
      break
    default:
      return phone
  }
  
  return phone
}

/**
 * 密码强度检查
 * @param {string} password - 密码
 * @returns {Object} 强度信息
 */
export const checkPasswordStrength = (password) => {
  if (!password) {
    return { score: 0, level: 'weak', suggestions: [] }
  }
  
  let score = 0
  const suggestions = []
  
  // 长度检查
  if (password.length >= 8) {
    score += 1
  } else {
    suggestions.push('至少8个字符')
  }
  
  // 包含小写字母
  if (/[a-z]/.test(password)) {
    score += 1
  } else {
    suggestions.push('包含小写字母')
  }
  
  // 包含大写字母
  if (/[A-Z]/.test(password)) {
    score += 1
  } else {
    suggestions.push('包含大写字母')
  }
  
  // 包含数字
  if (/\d/.test(password)) {
    score += 1
  } else {
    suggestions.push('包含数字')
  }
  
  // 包含特殊字符
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    score += 1
  } else {
    suggestions.push('包含特殊字符')
  }
  
  // 确定强度等级
  let level = 'weak'
  if (score >= 4) {
    level = 'strong'
  } else if (score >= 3) {
    level = 'medium'
  }
  
  return { score, level, suggestions }
}

/**
 * 输入框焦点管理
 * @param {HTMLElement} element - 输入框元素
 * @returns {Object} 焦点管理器
 */
export const createFocusManager = (element) => {
  const focus = () => {
    if (element && typeof element.focus === 'function') {
      element.focus()
    }
  }
  
  const blur = () => {
    if (element && typeof element.blur === 'function') {
      element.blur()
    }
  }
  
  const select = () => {
    if (element && typeof element.select === 'function') {
      element.select()
    }
  }
  
  const setCursorPosition = (position) => {
    if (element && typeof element.setSelectionRange === 'function') {
      element.setSelectionRange(position, position)
    }
  }
  
  return { focus, blur, select, setCursorPosition }
}

/**
 * 防抖处理
 * @param {Function} func - 要防抖的函数
 * @param {number} delay - 延迟时间
 * @returns {Function} 防抖后的函数
 */
export const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(null, args), delay)
  }
}

/**
 * 节流处理
 * @param {Function} func - 要节流的函数
 * @param {number} delay - 延迟时间
 * @returns {Function} 节流后的函数
 */
export const throttle = (func, delay) => {
  let lastCall = 0
  return (...args) => {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      func.apply(null, args)
    }
  }
}

/**
 * 创建输入框配置
 * @param {Object} options - 配置选项
 * @returns {Object} 完整配置
 */
export const createInputConfig = (options = {}) => {
  return {
    ...DEFAULT_CONFIG,
    ...options
  }
}

/**
 * 调试输入框配置
 * @param {Object} props - 组件属性
 * @returns {Object} 调试信息
 */
export const debugInputConfig = (props) => {
  const config = createInputConfig(props)
  
  return {
    config,
    validation: {
      type: isValidInputType(config.type),
      size: isValidSize(config.size),
      variant: isValidVariant(config.variant),
      color: isValidColor(config.color)
    },
    classes: {
      input: getInputClasses(config),
      label: getLabelClasses(config),
      container: getContainerClasses(config),
      helperText: getHelperTextClasses(config)
    }
  }
} 