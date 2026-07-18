// Avatar 组件工具函数

/**
 * 有效的Avatar尺寸
 */
export const validSizes = ['xs', 'sm', 'md', 'lg', 'xl']

/**
 * 有效的Avatar变体
 */
export const validVariants = ['circular', 'rounded', 'square']

/**
 * 有效的Avatar颜色
 */
export const validColors = ['default', 'primary', 'secondary', 'success', 'warning', 'error']

/**
 * 验证Avatar尺寸
 * @param {string|number} size - 要验证的尺寸
 * @returns {boolean} 是否为有效尺寸
 */
export function isValidSize(size) {
  if (typeof size === 'number') return size > 0
  return validSizes.includes(size)
}

/**
 * 验证Avatar变体
 * @param {string} variant - 要验证的变体
 * @returns {boolean} 是否为有效变体
 */
export function isValidVariant(variant) {
  return validVariants.includes(variant)
}

/**
 * 验证Avatar颜色
 * @param {string} color - 要验证的颜色
 * @returns {boolean} 是否为有效颜色
 */
export function isValidColor(color) {
  return validColors.includes(color)
}

/**
 * 获取Avatar的CSS类名
 * @param {Object} props - Avatar的props
 * @returns {Array<string>} CSS类名数组
 */
export function getAvatarClasses({ size, variant, color, src, imgError }) {
  const classes = ['wc-avatar']
  
  // 尺寸类名
  if (typeof size === 'string') {
    classes.push(`wc-avatar--${size}`)
  }
  
  // 变体类名
  classes.push(`wc-avatar--${variant}`)
  
  // 颜色类名（仅在没有图片或图片错误时显示）
  if (!src || imgError) {
    classes.push(`wc-avatar--${color}`)
  }
  
  return classes
}

/**
 * 获取Avatar的内联样式
 * @param {number} size - 自定义尺寸
 * @returns {Object} 内联样式对象
 */
export function getAvatarStyles(size) {
  const styles = {}
  
  // 自定义尺寸
  if (typeof size === 'number') {
    styles.width = `${size}px`
    styles.height = `${size}px`
    styles.fontSize = `${size * 0.4}px`
  }
  
  return styles
}

/**
 * 生成Avatar文本（从名称中提取首字母）
 * @param {string} children - 输入的文本
 * @returns {string} 处理后的文本
 */
export function generateAvatarText(children) {
  if (!children) return ''
  
  // 去除首尾空白
  const trimmed = children.trim()
  const firstChar = trimmed.charAt(0)

  // 判断是否为中文字符 (基本汉字区 4E00-9FA5)
  const isChinese = /[\u4e00-\u9fa5]/.test(firstChar)

  // 如果首字符是中文，则始终返回该字符
  if (isChinese) {
    return firstChar
  }

  // 对英文或其它语言，按空格分词，生成首字母（最多两个）
  const words = trimmed.split(/\s+/).filter(Boolean)
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase()
  }
  // words.length >= 2
  return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase()
}

/**
 * 处理图片加载错误
 * @param {Function} setImgError - 设置图片错误状态的函数
 */
export function handleImageError(setImgError) {
  setImgError(true)
}

/**
 * 处理图片加载成功
 * @param {Function} setImgError - 设置图片错误状态的函数
 */
export function handleImageLoad(setImgError) {
  setImgError(false)
} 