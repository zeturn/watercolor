// ColorPicker 组件工具函数

/**
 * 有效的ColorPicker尺寸
 */
export const validSizes = ['sm', 'md', 'lg']

/**
 * 有效的ColorPicker形状
 */
export const validShapes = ['circle', 'square', 'rounded']

/**
 * 验证ColorPicker尺寸
 * @param {string} size - 要验证的尺寸
 * @returns {boolean} 是否为有效尺寸
 */
export function isValidSize(size) {
  return validSizes.includes(size)
}

/**
 * 验证ColorPicker形状
 * @param {string} shape - 要验证的形状
 * @returns {boolean} 是否为有效形状
 */
export function isValidShape(shape) {
  return validShapes.includes(shape)
}

/**
 * 验证颜色值是否为有效的十六进制颜色
 * @param {string} color - 要验证的颜色值
 * @returns {boolean} 是否为有效颜色
 */
export function isValidHexColor(color) {
  const hexColorRegex = /^#([0-9A-F]{3}){1,2}$/i
  return hexColorRegex.test(color)
}

/**
 * 获取ColorPicker的CSS类名
 * @param {Object} props - ColorPicker的props
 * @returns {Array<string>} CSS类名数组
 */
export function getColorPickerClasses(props) {
  const {
    size = 'md',
    shape = 'circle',
    disabled = false,
    className = ''
  } = props

  const classes = ['wc-color-picker']
  
  classes.push(`wc-color-picker--${size}`)
  classes.push(`wc-color-picker--${shape}`)
  
  if (disabled) classes.push('wc-color-picker--disabled')
  
  if (className) classes.push(className)
  
  return classes.filter(Boolean)
}

/**
 * 处理颜色变化事件
 * @param {Event} e - 事件对象
 * @param {boolean} disabled - 是否禁用
 * @param {Function} onChange - 变化回调函数
 */
export function handleColorChange(e, disabled, onChange) {
  if (!disabled && onChange) {
    onChange(e.target.value)
  }
}

/**
 * 获取颜色预览的内联样式
 * @param {string} color - 颜色值
 * @returns {Object} 内联样式对象
 */
export function getPreviewStyles(color) {
  return {
    backgroundColor: color
  }
}

/**
 * 转换颜色格式：HEX转RGB
 * @param {string} hex - 十六进制颜色值
 * @returns {Object} RGB颜色对象
 */
export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

/**
 * 转换颜色格式：RGB转HEX
 * @param {number} r - 红色值
 * @param {number} g - 绿色值
 * @param {number} b - 蓝色值
 * @returns {string} 十六进制颜色值
 */
export function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

/**
 * 获取颜色的亮度值
 * @param {string} hex - 十六进制颜色值
 * @returns {number} 亮度值 (0-255)
 */
export function getLuminance(hex) {
  const rgb = hexToRgb(hex)
  if (!rgb) return 0
  
  // 使用相对亮度公式
  return 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b
}

/**
 * 判断颜色是否为深色
 * @param {string} hex - 十六进制颜色值
 * @returns {boolean} 是否为深色
 */
export function isDarkColor(hex) {
  return getLuminance(hex) < 128
} 