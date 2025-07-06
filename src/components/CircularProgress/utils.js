// CircularProgress 组件工具函数

/**
 * 有效的CircularProgress变体
 */
export const validVariants = ['determinate', 'indeterminate']

/**
 * 有效的CircularProgress颜色
 */
export const validColors = ['primary', 'secondary', 'success', 'warning', 'error', 'inherit']

/**
 * 验证CircularProgress变体
 * @param {string} variant - 要验证的变体
 * @returns {boolean} 是否为有效变体
 */
export function isValidVariant(variant) {
  return validVariants.includes(variant)
}

/**
 * 验证CircularProgress颜色
 * @param {string} color - 要验证的颜色
 * @returns {boolean} 是否为有效颜色
 */
export function isValidColor(color) {
  return validColors.includes(color)
}

/**
 * 验证值范围
 * @param {number} value - 要验证的值
 * @returns {boolean} 是否在有效范围内
 */
export function isValidValue(value) {
  return typeof value === 'number' && value >= 0 && value <= 100
}

/**
 * 计算圆的相关参数
 * @param {number|string} size - 尺寸
 * @param {number} thickness - 厚度
 * @returns {Object} 圆的参数
 */
export function calculateCircleParams(size, thickness) {
  const sizeNumber = typeof size === 'string' ? parseInt(size, 10) : size
  const center = sizeNumber / 2
  const radius = (sizeNumber - thickness) / 2
  const circumference = 2 * Math.PI * radius
  
  return {
    sizeNumber,
    center,
    radius,
    circumference
  }
}

/**
 * 计算stroke-dashoffset值
 * @param {string} variant - 变体
 * @param {number} value - 进度值
 * @param {number} circumference - 圆周长
 * @returns {number} stroke-dashoffset值
 */
export function calculateStrokeDashoffset(variant, value, circumference) {
  if (variant === 'determinate') {
    return circumference - (value / 100) * circumference
  }
  return 0
}

/**
 * 获取CircularProgress的CSS类名
 * @param {Object} props - CircularProgress的props
 * @returns {Array<string>} CSS类名数组
 */
export function getCircularProgressClasses(props) {
  const {
    color = 'primary',
    variant = 'indeterminate',
    className = ''
  } = props

  const classes = [
    'wc-circular-progress',
    'inline-flex',
    'relative',
    'items-center',
    'justify-center'
  ]
  
  classes.push(`wc-circular-progress--${color}`)
  
  if (variant === 'indeterminate') {
    classes.push('wc-circular-progress--indeterminate')
  }
  
  if (className) classes.push(className)
  
  return classes.filter(Boolean)
}

/**
 * 获取圆形进度条圆圈的CSS类名
 * @param {string} variant - 变体
 * @returns {Array<string>} CSS类名数组
 */
export function getCircleClasses(variant) {
  const classes = ['wc-circular-progress-circle']
  
  if (variant === 'indeterminate') {
    classes.push('wc-circular-progress-circle--indeterminate')
  }
  
  return classes.filter(Boolean)
}

/**
 * 格式化显示值
 * @param {number} value - 原始值
 * @returns {number} 格式化后的值
 */
export function formatDisplayValue(value) {
  return Math.round(value)
}

/**
 * 获取ARIA属性
 * @param {Object} props - CircularProgress的props
 * @returns {Object} ARIA属性对象
 */
export function getAriaProps(props) {
  const { value = 0, variant } = props
  
  const ariaProps = {
    role: 'progressbar',
    'aria-valuemin': 0,
    'aria-valuemax': 100
  }
  
  if (variant === 'determinate') {
    ariaProps['aria-valuenow'] = value
  }
  
  return ariaProps
} 