/**
 * Radio Component Utilities
 * 单选按钮组件工具函数
 */

// ====== Constants ====== //

export const RADIO_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg'
}

export const RADIO_COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
}

export const RADIO_VARIANTS = {
  STANDARD: 'standard',
  OUTLINED: 'outlined',
  CARD: 'card',
  BUTTON: 'button'
}

export const RADIO_ORIENTATIONS = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
  INLINE: 'inline'
}

// ====== Validation Functions ====== //

/**
 * 验证单选按钮值
 * @param {*} value - 要验证的值
 * @param {Array} options - 可选值数组
 * @returns {boolean} 是否有效
 */
export function validateRadioValue(value, options = []) {
  if (options.length === 0) return true
  return options.some(option => {
    const optionValue = typeof option === 'object' ? option.value : option
    return optionValue === value
  })
}

/**
 * 验证单选按钮组配置
 * @param {Object} config - 配置对象
 * @returns {Object} 验证结果
 */
export function validateRadioGroupConfig(config = {}) {
  const errors = []
  const warnings = []
  
  const { options = [], value, name } = config
  
  // 验证选项
  if (!Array.isArray(options)) {
    errors.push('选项必须是数组')
  } else if (options.length === 0) {
    warnings.push('选项数组为空')
  }
  
  // 验证名称
  if (!name || typeof name !== 'string') {
    errors.push('单选按钮组必须有名称')
  }
  
  // 验证当前值
  if (value !== undefined && value !== null) {
    if (!validateRadioValue(value, options)) {
      warnings.push('当前值不在可选项中')
    }
  }
  
  // 验证选项格式
  if (Array.isArray(options)) {
    options.forEach((option, index) => {
      if (typeof option === 'object') {
        if (!option.hasOwnProperty('value')) {
          errors.push(`选项 ${index + 1} 缺少 value 属性`)
        }
        if (!option.hasOwnProperty('label') && !option.hasOwnProperty('children')) {
          warnings.push(`选项 ${index + 1} 缺少 label 或 children 属性`)
        }
      }
    })
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  }
}

// ====== Utility Functions ====== //

/**
 * 规范化选项数组
 * @param {Array} options - 原始选项
 * @returns {Array} 规范化后的选项
 */
export function normalizeRadioOptions(options = []) {
  return options.map((option, index) => {
    if (typeof option === 'string' || typeof option === 'number') {
      return {
        value: option,
        label: String(option),
        id: `radio-option-${index}`,
        disabled: false
      }
    } else if (typeof option === 'object' && option !== null) {
      return {
        value: option.value,
        label: option.label || String(option.value),
        id: option.id || `radio-option-${index}`,
        disabled: Boolean(option.disabled),
        description: option.description,
        ...option
      }
    } else {
      return {
        value: option,
        label: 'Invalid Option',
        id: `radio-option-${index}`,
        disabled: true
      }
    }
  })
}

/**
 * 查找选中的选项
 * @param {*} value - 当前值
 * @param {Array} options - 选项数组
 * @returns {Object|null} 选中的选项
 */
export function findSelectedOption(value, options = []) {
  const normalizedOptions = normalizeRadioOptions(options)
  return normalizedOptions.find(option => option.value === value) || null
}

/**
 * 获取下一个可用选项
 * @param {*} currentValue - 当前值
 * @param {Array} options - 选项数组
 * @param {boolean} loop - 是否循环
 * @returns {Object|null} 下一个选项
 */
export function getNextRadioOption(currentValue, options = [], loop = true) {
  const normalizedOptions = normalizeRadioOptions(options)
  const enabledOptions = normalizedOptions.filter(option => !option.disabled)
  
  if (enabledOptions.length === 0) return null
  
  const currentIndex = enabledOptions.findIndex(option => option.value === currentValue)
  
  if (currentIndex === -1) {
    return enabledOptions[0]
  }
  
  const nextIndex = currentIndex + 1
  
  if (nextIndex >= enabledOptions.length) {
    return loop ? enabledOptions[0] : null
  }
  
  return enabledOptions[nextIndex]
}

/**
 * 获取上一个可用选项
 * @param {*} currentValue - 当前值
 * @param {Array} options - 选项数组
 * @param {boolean} loop - 是否循环
 * @returns {Object|null} 上一个选项
 */
export function getPreviousRadioOption(currentValue, options = [], loop = true) {
  const normalizedOptions = normalizeRadioOptions(options)
  const enabledOptions = normalizedOptions.filter(option => !option.disabled)
  
  if (enabledOptions.length === 0) return null
  
  const currentIndex = enabledOptions.findIndex(option => option.value === currentValue)
  
  if (currentIndex === -1) {
    return enabledOptions[enabledOptions.length - 1]
  }
  
  const prevIndex = currentIndex - 1
  
  if (prevIndex < 0) {
    return loop ? enabledOptions[enabledOptions.length - 1] : null
  }
  
  return enabledOptions[prevIndex]
}

// ====== Class Name Generation ====== //

/**
 * 生成单选按钮容器类名
 * @param {Object} options - 选项
 * @returns {string} 类名字符串
 */
export function getRadioClasses(options = {}) {
  const {
    size = RADIO_SIZES.MD,
    variant = RADIO_VARIANTS.STANDARD,
    disabled = false,
    checked = false,
    focused = false,
    className = ''
  } = options
  
  const classes = ['wc-radio']
  
  // 尺寸
  if (size !== RADIO_SIZES.MD) {
    classes.push(`wc-radio--${size}`)
  }
  
  // 变体
  if (variant !== RADIO_VARIANTS.STANDARD) {
    classes.push(`wc-radio--${variant}`)
  }
  
  // 状态
  if (disabled) {
    classes.push('wc-radio--disabled')
  }
  
  if (checked) {
    classes.push('wc-radio--checked')
  }
  
  if (focused) {
    classes.push('wc-radio--focused')
  }
  
  // 自定义类名
  if (className) {
    classes.push(className)
  }
  
  return classes.join(' ')
}

/**
 * 生成单选按钮类名
 * @param {Object} options - 选项
 * @returns {string} 类名字符串
 */
export function getRadioButtonClasses(options = {}) {
  const {
    size = RADIO_SIZES.MD,
    color = RADIO_COLORS.PRIMARY,
    checked = false,
    className = ''
  } = options
  
  const classes = ['wc-radio__button']
  
  // 尺寸
  classes.push(`wc-radio__button--${size}`)
  
  // 颜色
  classes.push(`wc-radio__button--${color}`)
  
  // 选中状态
  if (checked) {
    classes.push('wc-radio__button--checked')
  }
  
  // 自定义类名
  if (className) {
    classes.push(className)
  }
  
  return classes.join(' ')
}

/**
 * 生成单选按钮组类名
 * @param {Object} options - 选项
 * @returns {string} 类名字符串
 */
export function getRadioGroupClasses(options = {}) {
  const {
    orientation = RADIO_ORIENTATIONS.VERTICAL,
    size = RADIO_SIZES.MD,
    disabled = false,
    className = ''
  } = options
  
  const classes = ['wc-radio-group']
  
  // 方向
  if (orientation !== RADIO_ORIENTATIONS.VERTICAL) {
    classes.push(`wc-radio-group--${orientation}`)
  }
  
  // 尺寸
  if (size !== RADIO_SIZES.MD) {
    classes.push(`wc-radio-group--${size}`)
  }
  
  // 禁用状态
  if (disabled) {
    classes.push('wc-radio-group--disabled')
  }
  
  // 自定义类名
  if (className) {
    classes.push(className)
  }
  
  return classes.join(' ')
}

// ====== Event Handlers ====== //

/**
 * 创建单选按钮变化处理器
 * @param {Function} onChange - 变化回调
 * @param {Object} options - 选项
 * @returns {Function} 处理器函数
 */
export function createRadioChangeHandler(onChange, options = {}) {
  const { disabled = false, value } = options
  
  return function handleChange(event) {
    if (disabled) return
    
    const newValue = event.target ? event.target.value : value
    onChange?.(newValue, event)
  }
}

/**
 * 创建单选按钮键盘处理器
 * @param {Function} onChange - 变化回调
 * @param {Array} options - 选项数组
 * @param {*} currentValue - 当前值
 * @returns {Function} 键盘处理器
 */
export function createRadioKeyboardHandler(onChange, options = [], currentValue) {
  return function handleKeyDown(event) {
    let nextOption = null
    
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        nextOption = getNextRadioOption(currentValue, options)
        break
      case 'ArrowUp':
      case 'ArrowLeft':
        nextOption = getPreviousRadioOption(currentValue, options)
        break
      case 'Home':
        const enabledOptions = normalizeRadioOptions(options).filter(opt => !opt.disabled)
        nextOption = enabledOptions[0] || null
        break
      case 'End':
        const enabledOptionsEnd = normalizeRadioOptions(options).filter(opt => !opt.disabled)
        nextOption = enabledOptionsEnd[enabledOptionsEnd.length - 1] || null
        break
      default:
        return
    }
    
    if (nextOption) {
      event.preventDefault()
      onChange?.(nextOption.value, event)
    }
  }
}

// ====== RadioGroup Manager ====== //

/**
 * 单选按钮组管理器
 */
export class RadioGroupManager {
  constructor(options = {}) {
    this.options = {
      name: '',
      value: null,
      options: [],
      disabled: false,
      required: false,
      onChange: null,
      ...options
    }
    
    this.state = {
      value: this.options.value,
      focused: false,
      touched: false
    }
  }
  
  /**
   * 获取当前状态
   * @returns {Object} 当前状态
   */
  getState() {
    return {
      ...this.state,
      selectedOption: this.getSelectedOption(),
      isValid: this.isValid()
    }
  }
  
  /**
   * 设置值
   * @param {*} value - 新值
   */
  setValue(value) {
    if (this.options.disabled) return
    
    const oldValue = this.state.value
    this.state.value = value
    this.state.touched = true
    
    if (oldValue !== value) {
      this.options.onChange?.(value, this.getState())
    }
  }
  
  /**
   * 获取选中的选项
   * @returns {Object|null} 选中的选项
   */
  getSelectedOption() {
    return findSelectedOption(this.state.value, this.options.options)
  }
  
  /**
   * 验证当前值
   * @returns {boolean} 是否有效
   */
  isValid() {
    if (this.options.required && (this.state.value === null || this.state.value === undefined)) {
      return false
    }
    
    return validateRadioValue(this.state.value, this.options.options)
  }
  
  /**
   * 获取错误信息
   * @returns {Array} 错误信息数组
   */
  getErrors() {
    const errors = []
    
    if (this.options.required && (this.state.value === null || this.state.value === undefined)) {
      errors.push('请选择一个选项')
    }
    
    if (!validateRadioValue(this.state.value, this.options.options)) {
      errors.push('选择的值无效')
    }
    
    return errors
  }
  
  /**
   * 重置状态
   */
  reset() {
    this.state.value = this.options.value
    this.state.focused = false
    this.state.touched = false
  }
  
  /**
   * 更新选项
   * @param {Object} newOptions - 新选项
   */
  updateOptions(newOptions) {
    Object.assign(this.options, newOptions)
  }
  
  /**
   * 处理焦点事件
   */
  handleFocus() {
    this.state.focused = true
  }
  
  /**
   * 处理失焦事件
   */
  handleBlur() {
    this.state.focused = false
  }
  
  /**
   * 移动到下一个选项
   */
  moveToNext() {
    const nextOption = getNextRadioOption(this.state.value, this.options.options)
    if (nextOption) {
      this.setValue(nextOption.value)
    }
  }
  
  /**
   * 移动到上一个选项
   */
  moveToPrevious() {
    const prevOption = getPreviousRadioOption(this.state.value, this.options.options)
    if (prevOption) {
      this.setValue(prevOption.value)
    }
  }
}

// ====== Accessibility ====== //

/**
 * 生成可访问性属性
 * @param {Object} options - 选项
 * @returns {Object} 可访问性属性
 */
export function getRadioAccessibilityProps(options = {}) {
  const {
    checked = false,
    disabled = false,
    required = false,
    invalid = false,
    describedBy = '',
    labelledBy = ''
  } = options
  
  const props = {
    role: 'radio',
    'aria-checked': checked,
    'aria-disabled': disabled,
    tabIndex: checked ? 0 : -1
  }
  
  if (required) {
    props['aria-required'] = 'true'
  }
  
  if (invalid) {
    props['aria-invalid'] = 'true'
  }
  
  if (describedBy) {
    props['aria-describedby'] = describedBy
  }
  
  if (labelledBy) {
    props['aria-labelledby'] = labelledBy
  }
  
  return props
}

/**
 * 生成单选按钮组可访问性属性
 * @param {Object} options - 选项
 * @returns {Object} 可访问性属性
 */
export function getRadioGroupAccessibilityProps(options = {}) {
  const {
    label = '',
    required = false,
    invalid = false,
    errorId = '',
    helpId = ''
  } = options
  
  const props = {
    role: 'radiogroup'
  }
  
  if (label) {
    props['aria-label'] = label
  }
  
  if (required) {
    props['aria-required'] = 'true'
  }
  
  if (invalid) {
    props['aria-invalid'] = 'true'
  }
  
  const describedBy = []
  if (errorId) describedBy.push(errorId)
  if (helpId) describedBy.push(helpId)
  
  if (describedBy.length > 0) {
    props['aria-describedby'] = describedBy.join(' ')
  }
  
  return props
}

// ====== Export Default ====== //

export default {
  // Constants
  RADIO_SIZES,
  RADIO_COLORS,
  RADIO_VARIANTS,
  RADIO_ORIENTATIONS,
  
  // Validation
  validateRadioValue,
  validateRadioGroupConfig,
  
  // Utilities
  normalizeRadioOptions,
  findSelectedOption,
  getNextRadioOption,
  getPreviousRadioOption,
  
  // Class names
  getRadioClasses,
  getRadioButtonClasses,
  getRadioGroupClasses,
  
  // Event handlers
  createRadioChangeHandler,
  createRadioKeyboardHandler,
  
  // Manager
  RadioGroupManager,
  
  // Accessibility
  getRadioAccessibilityProps,
  getRadioGroupAccessibilityProps
} 