/**
 * TextField 共用工具函数
 */

/**
 * 获取TextField容器类名
 * @param {Object} options - 配置选项
 * @returns {string} 类名字符串
 */
export function getTextFieldClasses({
  variant = 'outlined',
  size = 'md',
  error = false,
  disabled = false,
  focused = false,
  hasValue = false,
  fullWidth = false,
  multiline = false,
  floatingLabel = false,
  className = ''
} = {}) {
  const classes = ['wc-textfield']
  
  if (fullWidth) classes.push('wc-textfield--full-width')
  if (multiline) classes.push('wc-textfield--multiline')
  if (floatingLabel) classes.push('wc-textfield--floating-label')
  if (className) classes.push(className)
  
  return classes.filter(Boolean).join(' ')
}

/**
 * 获取TextField容器类名
 * @param {Object} options - 配置选项
 * @returns {string} 类名字符串
 */
export function getTextFieldContainerClasses({
  variant = 'outlined',
  size = 'md',
  error = false,
  disabled = false,
  focused = false,
  hasValue = false
} = {}) {
  const classes = [
    'wc-textfield__container',
    `wc-textfield__container--${variant}`,
    `wc-textfield__container--${size}`
  ]
  
  if (error) classes.push('wc-textfield__container--error')
  if (disabled) classes.push('wc-textfield__container--disabled')
  if (focused) classes.push('wc-textfield__container--focused')
  if (hasValue) classes.push('wc-textfield__container--has-value')
  
  return classes.join(' ')
}

/**
 * 获取TextField标签类名
 * @param {Object} options - 配置选项
 * @returns {string} 类名字符串
 */
export function getTextFieldLabelClasses({
  size = 'md',
  error = false,
  focused = false,
  active = false
} = {}) {
  const classes = [
    'wc-textfield__label',
    `wc-textfield__label--${size}`
  ]
  
  if (error) classes.push('wc-textfield__label--error')
  if (focused) classes.push('wc-textfield__label--focused')
  if (active) classes.push('wc-textfield__label--active')
  
  return classes.join(' ')
}

/**
 * 获取TextField输入框类名
 * @param {Object} options - 配置选项
 * @returns {string} 类名字符串
 */
export function getTextFieldInputClasses({
  size = 'md',
  multiline = false
} = {}) {
  const classes = [
    'wc-textfield__input',
    `wc-textfield__input--${size}`
  ]
  
  if (multiline) classes.push('wc-textfield__textarea')
  
  return classes.join(' ')
}

/**
 * 生成唯一的输入框ID
 * @param {string} name - 输入框名称
 * @param {string} prefix - ID前缀
 * @returns {string} 唯一ID
 */
export function generateInputId(name = '', prefix = 'textfield') {
  const suffix = name || Math.random().toString(36).substr(2, 9)
  return `${prefix}-${suffix}`
}

/**
 * 验证输入值
 * @param {string} value - 输入值
 * @param {Object} rules - 验证规则
 * @returns {Object} 验证结果 { isValid, error }
 */
export function validateInput(value, rules = {}) {
  const {
    required = false,
    minLength,
    maxLength,
    pattern,
    email = false,
    url = false,
    number = false,
    custom
  } = rules
  
  // 必填验证
  if (required && (!value || value.trim() === '')) {
    return { isValid: false, error: '此字段为必填项' }
  }
  
  // 如果值为空且不是必填，则跳过其他验证
  if (!value || value.trim() === '') {
    return { isValid: true, error: '' }
  }
  
  // 最小长度验证
  if (minLength && value.length < minLength) {
    return { isValid: false, error: `最少需要${minLength}个字符` }
  }
  
  // 最大长度验证
  if (maxLength && value.length > maxLength) {
    return { isValid: false, error: `最多允许${maxLength}个字符` }
  }
  
  // 正则表达式验证
  if (pattern && !new RegExp(pattern).test(value)) {
    return { isValid: false, error: '格式不正确' }
  }
  
  // 邮箱验证
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      return { isValid: false, error: '请输入有效的邮箱地址' }
    }
  }
  
  // URL验证
  if (url) {
    try {
      new URL(value)
    } catch {
      return { isValid: false, error: '请输入有效的URL地址' }
    }
  }
  
  // 数字验证
  if (number && isNaN(Number(value))) {
    return { isValid: false, error: '请输入有效的数字' }
  }
  
  // 自定义验证
  if (custom && typeof custom === 'function') {
    const customResult = custom(value)
    if (customResult !== true) {
      return { isValid: false, error: customResult || '验证失败' }
    }
  }
  
  return { isValid: true, error: '' }
}

/**
 * 格式化输入值
 * @param {string} value - 输入值
 * @param {Object} options - 格式化选项
 * @returns {string} 格式化后的值
 */
export function formatInputValue(value, options = {}) {
  const {
    type = 'text',
    uppercase = false,
    lowercase = false,
    trim = true,
    removeSpaces = false,
    phone = false,
    currency = false
  } = options
  
  if (!value) return value
  
  let formatted = String(value)
  
  // 去除首尾空格
  if (trim) {
    formatted = formatted.trim()
  }
  
  // 移除所有空格
  if (removeSpaces) {
    formatted = formatted.replace(/\s/g, '')
  }
  
  // 转换大小写
  if (uppercase) {
    formatted = formatted.toUpperCase()
  } else if (lowercase) {
    formatted = formatted.toLowerCase()
  }
  
  // 手机号格式化
  if (phone) {
    formatted = formatted.replace(/\D/g, '')
    if (formatted.length > 3 && formatted.length <= 7) {
      formatted = formatted.replace(/(\d{3})(\d+)/, '$1-$2')
    } else if (formatted.length > 7) {
      formatted = formatted.replace(/(\d{3})(\d{4})(\d+)/, '$1-$2-$3')
    }
  }
  
  // 货币格式化
  if (currency) {
    const num = parseFloat(formatted.replace(/[^\d.-]/g, ''))
    if (!isNaN(num)) {
      formatted = num.toLocaleString('zh-CN', {
        style: 'currency',
        currency: 'CNY'
      })
    }
  }
  
  return formatted
}

/**
 * 处理输入事件
 * @param {Event} event - 输入事件
 * @param {Function} onChange - 变化回调
 * @param {Object} options - 处理选项
 */
export function handleInputChange(event, onChange, options = {}) {
  const { target } = event
  const { value } = target
  const { 
    formatOptions,
    validationRules,
    debounce = 0
  } = options
  
  let processedValue = value
  
  // 格式化值
  if (formatOptions) {
    processedValue = formatInputValue(value, formatOptions)
    
    // 如果值被格式化，更新输入框
    if (processedValue !== value) {
      target.value = processedValue
    }
  }
  
  // 验证值
  let validation = { isValid: true, error: '' }
  if (validationRules) {
    validation = validateInput(processedValue, validationRules)
  }
  
  // 调用回调
  const callChange = () => {
    if (onChange) {
      onChange({
        value: processedValue,
        originalValue: value,
        event,
        validation
      })
    }
  }
  
  // 防抖处理
  if (debounce > 0) {
    clearTimeout(handleInputChange.debounceTimer)
    handleInputChange.debounceTimer = setTimeout(callChange, debounce)
  } else {
    callChange()
  }
}

/**
 * 处理焦点事件
 * @param {Event} event - 焦点事件
 * @param {Function} callback - 回调函数
 * @param {Object} context - 上下文对象
 */
export function handleInputFocus(event, callback, context = {}) {
  if (callback) {
    callback(event, context)
  }
}

/**
 * 处理失焦事件
 * @param {Event} event - 失焦事件
 * @param {Function} callback - 回调函数
 * @param {Object} context - 上下文对象
 */
export function handleInputBlur(event, callback, context = {}) {
  if (callback) {
    callback(event, context)
  }
}

/**
 * 处理键盘事件
 * @param {KeyboardEvent} event - 键盘事件
 * @param {Object} handlers - 事件处理器对象
 */
export function handleKeyDown(event, handlers = {}) {
  const { key } = event
  const {
    onEnter,
    onEscape,
    onTab,
    onArrowUp,
    onArrowDown,
    custom = {}
  } = handlers
  
  switch (key) {
    case 'Enter':
      if (onEnter) onEnter(event)
      break
    case 'Escape':
      if (onEscape) onEscape(event)
      break
    case 'Tab':
      if (onTab) onTab(event)
      break
    case 'ArrowUp':
      if (onArrowUp) onArrowUp(event)
      break
    case 'ArrowDown':
      if (onArrowDown) onArrowDown(event)
      break
    default:
      if (custom[key]) custom[key](event)
  }
}

/**
 * 获取输入框焦点
 * @param {HTMLElement} inputElement - 输入框元素
 * @param {Object} options - 选项
 */
export function focusInput(inputElement, options = {}) {
  const { selectAll = false, cursorPosition } = options
  
  if (!inputElement) return
  
  inputElement.focus()
  
  if (selectAll) {
    inputElement.select()
  } else if (typeof cursorPosition === 'number') {
    inputElement.setSelectionRange(cursorPosition, cursorPosition)
  }
} 