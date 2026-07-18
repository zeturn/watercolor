// Modal 组件工具函数

/**
 * 有效的Modal尺寸
 */
export const validSizes = ['xs', 'sm', 'md', 'lg', 'xl']

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
 * @param {Object} options - 配置选项
 * @returns {string} 完整的CSS类名字符串
 */
export function getModalClasses({
  size = 'md',
  fullWidth = false,
  fullScreen = false,
  scroll = 'paper',
  position = 'center',
  className = ''
} = {}) {
  const classes = ['wc-modal']
  
  // 尺寸
  if (size && !fullScreen) {
    classes.push(`wc-modal--${size}`)
  }
  
  // 全屏
  if (fullScreen) {
    classes.push('wc-modal--fullscreen')
  }
  
  // 全宽
  if (fullWidth && !fullScreen) {
    classes.push('wc-modal--full-width')
  }
  
  // 滚动行为
  if (scroll === 'body') {
    classes.push('wc-modal--scroll-body')
  } else {
    classes.push('wc-modal--scroll-paper')
  }
  
  // 位置
  if (position && position !== 'center') {
    classes.push(`wc-modal--${position}`)
  }
  
  // 自定义类名
  if (className) {
    classes.push(className)
  }
  
  return classes.filter(Boolean).join(' ')
}

/**
 * 获取Modal覆盖层的CSS类名
 * @param {Object} options - 配置选项
 * @returns {string} 覆盖层CSS类名
 */
export function getOverlayClasses({
  centered = true,
  position = 'center'
} = {}) {
  const classes = ['wc-modal-overlay']
  
  if (centered || position === 'center') {
    classes.push('wc-modal-overlay--centered')
  }
  
  if (position && position !== 'center') {
    classes.push(`wc-modal-overlay--${position}`)
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
    xs: '320px',
    sm: '448px',
    md: '512px',
    lg: '672px',
    xl: '896px'
  }
  
  return maxWidths[size] || maxWidths.md
}

/**
 * 获取Modal样式
 * @param {Object} options - 配置选项
 * @returns {Object} 样式对象
 */
export function getModalStyles({
  size = 'md',
  fullWidth = false,
  fullScreen = false,
  scroll = 'paper'
} = {}) {
  const styles = {}

  if (!fullScreen) {
    const maxWidth = getMaxWidth(size)
    if (maxWidth) {
      styles.maxWidth = maxWidth
      if (!fullWidth) {
        styles.margin = '0 auto'
      }
    }

    // 垂直边距
    styles.marginTop = '32px'
    styles.marginBottom = '32px'
  }

  // 滚动行为
  styles.maxHeight = scroll === 'body' ? '100vh' : '90vh'

  return styles
}

/**
 * 处理Modal关闭事件
 * @param {Function} setIsVisible - 设置可见性的函数
 * @param {Function} onClose - 关闭回调函数
 * @param {number} delay - 延迟时间（毫秒）
 */
export function handleModalClose(setIsVisible, onClose, delay = 0) {
  setIsVisible(false)
  if (onClose) {
    if (delay > 0) {
      setTimeout(() => {
        onClose()
      }, delay)
    } else {
      onClose()
    }
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

/**
 * 焦点管理 - 将焦点设置到对话框
 * @param {HTMLElement} dialogElement - 对话框元素
 */
export function focusDialog(dialogElement) {
  if (dialogElement) {
    // 查找第一个可聚焦元素
    const focusableElements = dialogElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    } else {
      dialogElement.focus()
    }
  }
}

/**
 * 焦点陷阱 - 将焦点限制在对话框内
 * @param {HTMLElement} dialogElement - 对话框元素
 */
export function createFocusTrap(dialogElement) {
  if (!dialogElement) return () => {}

  const focusableElements = dialogElement.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }
  }

  dialogElement.addEventListener('keydown', handleKeyDown)
  
  return () => {
    dialogElement.removeEventListener('keydown', handleKeyDown)
  }
}

/**
 * 管理body滚动
 * @param {boolean} open - 是否打开
 */
export function manageBodyScroll(open) {
  if (open) {
    // 禁用body滚动
    document.body.style.overflow = 'hidden'
  } else {
    // 恢复body滚动
    document.body.style.overflow = ''
  }
}

/**
 * 生成唯一ID
 * @param {string} prefix - 前缀
 * @returns {string} 唯一ID
 */
export function generateId(prefix = 'modal') {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * 检查点击是否在元素外部
 * @param {Event} event - 点击事件
 * @param {HTMLElement} element - 目标元素
 * @returns {boolean} 是否在外部点击
 */
export function isClickOutside(event, element) {
  return element && !element.contains(event.target)
} 