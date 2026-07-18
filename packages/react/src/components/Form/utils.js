/**
 * Form 共用工具函数
 */

/**
 * 获取FormControl类名
 * @param {Object} options - 配置选项
 * @returns {string} 类名字符串
 */
export function getFormControlClasses({
  fullWidth = false,
  margin = 'normal',
  disabled = false,
  error = false,
  className = ''
} = {}) {
  const classes = ['form-control']
  
  if (fullWidth) classes.push('form-control--full-width')
  if (margin !== 'normal') classes.push(`form-control--margin-${margin}`)
  if (disabled) classes.push('form-control--disabled')
  if (error) classes.push('form-control--error')
  if (className) classes.push(className)
  
  return classes.filter(Boolean).join(' ')
}

/**
 * 获取FormControlLabel类名
 * @param {Object} options - 配置选项
 * @returns {string} 类名字符串
 */
export function getFormControlLabelClasses({
  labelPlacement = 'end',
  disabled = false,
  className = ''
} = {}) {
  const classes = [
    'form-control-label',
    `form-control-label--placement-${labelPlacement}`
  ]
  
  if (disabled) classes.push('form-control-label--disabled')
  if (className) classes.push(className)
  
  return classes.filter(Boolean).join(' ')
}

/**
 * 获取FormGroup类名
 * @param {Object} options - 配置选项
 * @returns {string} 类名字符串
 */
export function getFormGroupClasses({
  row = false,
  className = ''
} = {}) {
  const classes = ['form-group']
  
  if (row) {
    classes.push('form-group--row')
  } else {
    classes.push('form-group--column')
  }
  
  if (className) classes.push(className)
  
  return classes.filter(Boolean).join(' ')
}

/**
 * 获取FormHelperText类名
 * @param {Object} options - 配置选项
 * @returns {string} 类名字符串
 */
export function getFormHelperTextClasses({
  variant = 'standard',
  className = ''
} = {}) {
  const classes = ['form-helper-text']
  
  if (variant !== 'standard') {
    classes.push(`form-helper-text--${variant}`)
  }
  
  if (className) classes.push(className)
  
  return classes.filter(Boolean).join(' ')
}

/**
 * 创建表单上下文
 * @param {Object} formData - 表单数据
 * @param {Object} options - 选项
 * @returns {Object} 表单上下文对象
 */
export function createFormContext(formData = {}, options = {}) {
  const {
    disabled = false,
    error = false,
    required = false,
    variant = 'outlined',
    size = 'md'
  } = options
  
  return {
    disabled,
    error,
    required,
    variant,
    size,
    ...formData
  }
}

/**
 * 验证表单字段
 * @param {any} value - 字段值
 * @param {Object} rules - 验证规则
 * @returns {Object} 验证结果 { isValid, errors }
 */
export function validateFormField(value, rules = {}) {
  const errors = []
  
  const {
    required = false,
    minLength,
    maxLength,
    min,
    max,
    pattern,
    email = false,
    url = false,
    custom = []
  } = rules
  
  // 必填验证
  if (required && (value === null || value === undefined || value === '')) {
    errors.push('此字段为必填项')
    return { isValid: false, errors }
  }
  
  // 如果值为空且不是必填，跳过其他验证
  if (value === null || value === undefined || value === '') {
    return { isValid: true, errors: [] }
  }
  
  const stringValue = String(value)
  
  // 长度验证
  if (minLength !== undefined && stringValue.length < minLength) {
    errors.push(`最少需要${minLength}个字符`)
  }
  
  if (maxLength !== undefined && stringValue.length > maxLength) {
    errors.push(`最多允许${maxLength}个字符`)
  }
  
  // 数值范围验证
  if (min !== undefined) {
    const numValue = Number(value)
    if (!isNaN(numValue) && numValue < min) {
      errors.push(`值不能小于${min}`)
    }
  }
  
  if (max !== undefined) {
    const numValue = Number(value)
    if (!isNaN(numValue) && numValue > max) {
      errors.push(`值不能大于${max}`)
    }
  }
  
  // 正则验证
  if (pattern) {
    const regex = typeof pattern === 'string' ? new RegExp(pattern) : pattern
    if (!regex.test(stringValue)) {
      errors.push('格式不正确')
    }
  }
  
  // 邮箱验证
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(stringValue)) {
      errors.push('请输入有效的邮箱地址')
    }
  }
  
  // URL验证
  if (url) {
    try {
      new URL(stringValue)
    } catch {
      errors.push('请输入有效的URL地址')
    }
  }
  
  // 自定义验证
  if (Array.isArray(custom)) {
    custom.forEach(validator => {
      if (typeof validator === 'function') {
        const result = validator(value)
        if (result !== true) {
          errors.push(result || '验证失败')
        }
      }
    })
  }
  
  return { isValid: errors.length === 0, errors }
}

/**
 * 验证整个表单
 * @param {Object} formData - 表单数据
 * @param {Object} validationSchema - 验证模式
 * @returns {Object} 验证结果 { isValid, errors }
 */
export function validateForm(formData, validationSchema) {
  const errors = {}
  let isValid = true
  
  Object.keys(validationSchema).forEach(fieldName => {
    const fieldValue = formData[fieldName]
    const fieldRules = validationSchema[fieldName]
    
    const fieldValidation = validateFormField(fieldValue, fieldRules)
    
    if (!fieldValidation.isValid) {
      errors[fieldName] = fieldValidation.errors
      isValid = false
    }
  })
  
  return { isValid, errors }
}

/**
 * 处理表单提交
 * @param {Event} event - 提交事件
 * @param {Object} formData - 表单数据
 * @param {Object} options - 选项
 * @returns {Promise} 提交Promise
 */
export async function handleFormSubmit(event, formData, options = {}) {
  event.preventDefault()
  
  const {
    validationSchema,
    onSubmit,
    onError,
    onValidationError,
    transform
  } = options
  
  try {
    // 数据转换
    let processedData = formData
    if (transform && typeof transform === 'function') {
      processedData = transform(formData)
    }
    
    // 表单验证
    if (validationSchema) {
      const validation = validateForm(processedData, validationSchema)
      if (!validation.isValid) {
        if (onValidationError) {
          onValidationError(validation.errors)
        }
        return { success: false, errors: validation.errors }
      }
    }
    
    // 提交表单
    if (onSubmit) {
      const result = await onSubmit(processedData)
      return { success: true, data: result }
    }
    
    return { success: true, data: processedData }
  } catch (error) {
    if (onError) {
      onError(error)
    }
    return { success: false, error }
  }
}

/**
 * 创建表单字段更新函数
 * @param {Function} setFormData - 设置表单数据的函数
 * @returns {Function} 字段更新函数
 */
export function createFieldUpdater(setFormData) {
  return (fieldName, value) => {
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value
    }))
  }
}

/**
 * 重置表单数据
 * @param {Object} initialData - 初始数据
 * @param {Function} setFormData - 设置表单数据的函数
 * @param {Function} setErrors - 设置错误信息的函数
 */
export function resetForm(initialData = {}, setFormData, setErrors) {
  if (setFormData) setFormData(initialData)
  if (setErrors) setErrors({})
}

/**
 * 获取嵌套对象的值
 * @param {Object} obj - 对象
 * @param {string} path - 路径，如 'user.name'
 * @returns {any} 值
 */
export function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined
  }, obj)
}

/**
 * 设置嵌套对象的值
 * @param {Object} obj - 对象
 * @param {string} path - 路径，如 'user.name'
 * @param {any} value - 值
 * @returns {Object} 新对象
 */
export function setNestedValue(obj, path, value) {
  const keys = path.split('.')
  const result = { ...obj }
  
  let current = result
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {}
    } else {
      current[key] = { ...current[key] }
    }
    current = current[key]
  }
  
  current[keys[keys.length - 1]] = value
  return result
}

/**
 * 序列化表单数据为URL参数
 * @param {Object} formData - 表单数据
 * @returns {string} URL参数字符串
 */
export function serializeFormData(formData) {
  const params = new URLSearchParams()
  
  Object.keys(formData).forEach(key => {
    const value = formData[key]
    if (value !== null && value !== undefined && value !== '') {
      if (Array.isArray(value)) {
        value.forEach(item => params.append(key, item))
      } else {
        params.append(key, value)
      }
    }
  })
  
  return params.toString()
}

/**
 * 从URL参数反序列化表单数据
 * @param {string} searchParams - URL参数字符串
 * @returns {Object} 表单数据对象
 */
export function deserializeFormData(searchParams) {
  const params = new URLSearchParams(searchParams)
  const formData = {}
  
  for (const [key, value] of params.entries()) {
    if (formData[key]) {
      // 处理多值情况
      if (Array.isArray(formData[key])) {
        formData[key].push(value)
      } else {
        formData[key] = [formData[key], value]
      }
    } else {
      formData[key] = value
    }
  }
  
  return formData
} 