// Modal 组件工具函数

/**
 * 有效的Modal尺寸
 */
export const validSizes = ['sm', 'md', 'lg', 'xl']

/**
 * 验证Modal尺寸
 * @param {string} size - 要验证的尺寸
 * @returns {boolean} 是否为有效尺寸
 */
export function isValidSize(size) {
  return validSizes.includes(size)
}

/**
 * 获取Modal的CSS类名
 * @param {string} size - Modal尺寸
 * @param {boolean} centered - 是否居中
 * @param {string} className - 额外的CSS类名
 * @returns {string} 完整的CSS类名字符串
 */
export function getModalClasses(size, centered, className = '') {
  const classes = [
    'wc-modal',
    `wc-modal--${size}`,
    className
  ]
  
  return classes.filter(Boolean).join(' ')
}

/**
 * 获取Modal覆盖层的CSS类名
 * @param {boolean} centered - 是否居中
 * @returns {string} 覆盖层CSS类名
 */
export function getOverlayClasses(centered) {
  const classes = ['wc-modal-overlay']
  
  if (centered) {
    classes.push('wc-modal-overlay--centered')
  }
  
  return classes.join(' ')
}

/**
 * 获取Modal最大宽度映射
 * @param {string} size - Modal尺寸
 * @returns {string} 最大宽度值
 */
export function getMaxWidth(size) {
  const maxWidths = {
    sm: '400px',
    md: '500px',
    lg: '700px',
    xl: '900px'
  }
  
  return maxWidths[size] || maxWidths.md
}

/**
 * 处理Modal关闭事件
 * @param {Function} setIsVisible - 设置可见性的函数
 * @param {Function} onClose - 关闭回调函数
 * @param {number} delay - 延迟时间（毫秒）
 */
export function handleModalClose(setIsVisible, onClose, delay = 300) {
  setIsVisible(false)
  if (onClose) {
    setTimeout(() => {
      onClose()
    }, delay)
  }
}

/**
 * 处理Modal覆盖层点击事件
 * @param {boolean} maskClosable - 是否允许点击遮罩关闭
 * @param {Function} closeHandler - 关闭处理函数
 */
export function handleOverlayClick(maskClosable, closeHandler) {
  if (maskClosable) {
    closeHandler()
  }
}

/**
 * 处理键盘事件
 * @param {KeyboardEvent} e - 键盘事件
 * @param {boolean} closable - 是否可关闭
 * @param {Function} closeHandler - 关闭处理函数
 */
export function handleKeyDown(e, closable, closeHandler) {
  if (e.key === 'Escape' && closable) {
    closeHandler()
  }
} 