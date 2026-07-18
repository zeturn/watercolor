// Blockquote 组件工具函数

/**
 * 获取Blockquote的CSS类名
 * @param {string} className - 额外的CSS类名
 * @param {string} variant - 变体样式 ('default', 'minimal', 'card')
 * @param {boolean} noBorder - 是否无边框
 * @param {boolean} interactive - 是否启用交互效果
 * @param {string} size - 尺寸 ('small', 'medium', 'large')
 * @param {string} color - 颜色 ('default', 'primary', 'success', 'warning', 'error', 'info')
 * @returns {string} 完整的CSS类名字符串
 */
export function getBlockquoteClasses(
  className = '', 
  variant = 'default', 
  noBorder = true, 
  interactive = true, 
  size = 'medium',
  color = 'default'
) {
  const classes = ['wc-blockquote']
  
  // 添加变体类名
  if (variant && variant !== 'default' && variant !== 'card') {
    classes.push(`wc-blockquote--${variant}`)
  }
  
  // 添加无边框类名
  if (noBorder) {
    classes.push('wc-blockquote--no-border')
  }
  
  // 添加交互效果类名
  if (interactive) {
    classes.push('wc-blockquote--interactive')
  }
  
  // 添加尺寸类名
  if (size && size !== 'medium') {
    classes.push(`wc-blockquote--${size}`)
  }
  
  // 添加颜色类名
  if (color && color !== 'default') {
    classes.push(`wc-blockquote--${color}`)
  }
  
  // 添加自定义类名
  if (className) {
    classes.push(className)
  }
  
  return classes.filter(Boolean).join(' ')
} 