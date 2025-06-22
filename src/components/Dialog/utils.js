/**
 * Dialog 共用工具函数
 */

/**
 * 获取对话框样式类名
 * @param {Object} options - 配置选项
 * @returns {string} 类名字符串
 */
export function getDialogClasses({
  maxWidth = 'sm',
  fullWidth = false,
  fullScreen = false,
  scroll = 'paper'
} = {}) {
  const classes = ['wc-dialog']
  
  if (fullScreen) {
    classes.push('wc-dialog--fullscreen')
  } else {
    if (maxWidth && maxWidth !== false) {
      classes.push(`wc-dialog--${maxWidth}`)
    }
    if (fullWidth) {
      classes.push('wc-dialog--full-width')
    }
  }
  
  if (scroll === 'body') {
    classes.push('wc-dialog--scroll-body')
  } else {
    classes.push('wc-dialog--scroll-paper')
  }
  
  return classes.join(' ')
}

/**
 * 获取对话框样式
 * @param {Object} options - 配置选项
 * @returns {Object} 样式对象
 */
export function getDialogStyles({
  maxWidth = 'sm',
  fullWidth = false,
  fullScreen = false,
  scroll = 'paper'
} = {}) {
  const styles = {}

  if (!fullScreen) {
    const maxWidthMap = {
      xs: '320px',
      sm: '448px',
      md: '512px',
      lg: '672px',
      xl: '896px',
    }

    if (maxWidth && maxWidthMap[maxWidth]) {
      styles.maxWidth = maxWidthMap[maxWidth]
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
 * 处理键盘事件
 * @param {KeyboardEvent} event - 键盘事件
 * @param {Function} onClose - 关闭回调
 * @param {boolean} disableEscapeKeyDown - 是否禁用ESC键关闭
 */
export function handleKeyDown(event, onClose, disableEscapeKeyDown = false) {
  if (event.key === 'Escape' && !disableEscapeKeyDown) {
    onClose()
  }
}

/**
 * 处理背景点击
 * @param {Function} onClose - 关闭回调
 * @param {boolean} disableBackdropClick - 是否禁用背景点击关闭
 */
export function handleBackdropClick(onClose, disableBackdropClick = false) {
  if (!disableBackdropClick) {
    onClose()
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
 * 添加键盘事件监听器
 * @param {Function} handler - 事件处理器
 */
export function addKeyboardEventListener(handler) {
  document.addEventListener('keydown', handler)
  return () => document.removeEventListener('keydown', handler)
}

/**
 * 生成唯一ID
 * @param {string} prefix - 前缀
 * @returns {string} 唯一ID
 */
export function generateId(prefix = 'dialog') {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
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
 * 检查点击是否在元素外部
 * @param {Event} event - 点击事件
 * @param {HTMLElement} element - 目标元素
 * @returns {boolean} 是否在外部点击
 */
export function isClickOutside(event, element) {
  return element && !element.contains(event.target)
} 