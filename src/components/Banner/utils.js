// Banner 组件工具函数

/**
 * Banner类型的颜色映射
 */
export const typeColorClasses = {
  success: 'bg-success-600 dark:bg-success-500 text-neutral-0',
  info: 'bg-info-600 dark:bg-info-500 text-neutral-0',
  warning: 'bg-warning-600 dark:bg-warning-500 text-neutral-0',
  error: 'bg-error-600 dark:bg-error-500 text-neutral-0',
}

/**
 * Banner图标映射
 */
export const iconMap = {
  success: '✓',
  info: '📢',
  warning: '⚠',
  error: '✕',
}

/**
 * 有效的Banner类型
 */
export const validTypes = ['success', 'info', 'warning', 'error']

/**
 * 有效的Banner位置
 */
export const validPositions = ['top', 'bottom']

/**
 * 验证Banner类型
 * @param {string} type - 要验证的类型
 * @returns {boolean} 是否为有效类型
 */
export function isValidType(type) {
  return validTypes.includes(type)
}

/**
 * 验证Banner位置
 * @param {string} position - 要验证的位置
 * @returns {boolean} 是否为有效位置
 */
export function isValidPosition(position) {
  return validPositions.includes(position)
}

/**
 * 获取Banner的CSS类名
 * @param {string} type - Banner类型
 * @param {string} position - Banner位置
 * @param {boolean} sticky - 是否固定
 * @returns {string} 完整的CSS类名字符串
 */
export function getBannerClasses(type, position, sticky) {
  const classes = [
    'wc-banner',
    `wc-banner--${type}`,
    `wc-banner--${position}`
  ]
  
  if (sticky) {
    classes.push('wc-banner--sticky')
  }
  
  return classes.join(' ')
}

/**
 * 获取Banner图标
 * @param {string} type - Banner类型
 * @returns {string} 图标字符
 */
export function getBannerIcon(type) {
  return iconMap[type] || iconMap.info
}

/**
 * 获取Banner的内联样式
 * @param {number} zIndex - z-index值
 * @returns {Object} 内联样式对象
 */
export function getBannerStyles(zIndex) {
  return { zIndex }
}

/**
 * 处理Banner关闭事件
 * @param {Function} setVisible - 设置可见性的函数
 * @param {Function} onClose - 关闭回调函数
 */
export function handleBannerClose(setVisible, onClose) {
  setVisible(false)
  if (onClose) {
    onClose()
  }
}

/**
 * 处理Banner动作事件
 * @param {Function} onAction - 动作回调函数
 */
export function handleBannerAction(onAction) {
  if (onAction) {
    onAction()
  }
} 