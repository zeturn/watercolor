// Menu 组件共用工具函数

export const shadowMap = {
  0: 'wc-menu--elevation-0',
  1: 'wc-menu--elevation-1',
  2: 'wc-menu--elevation-2',
  3: 'wc-menu--elevation-3',
  4: 'wc-menu--elevation-4',
  6: 'wc-menu--elevation-6',
  8: 'wc-menu--elevation-8',
  12: 'wc-menu--elevation-12',
  16: 'wc-menu--elevation-16',
  24: 'wc-menu--elevation-24'
}

export const getMenuClasses = (
  elevation,
  className = '',
  variant = 'popover'
) => {
  if (variant === 'inline') {
    return ['wc-menu', 'wc-menu--inline', className]
      .filter(Boolean)
      .join(' ')
  }

  // popover 默认
  const classes = [
    'wc-menu',
    shadowMap[elevation] || shadowMap[8],
    className
  ].filter(Boolean)

  return classes.join(' ')
}

export const computeMenuPosition = (anchorEl, anchorOrigin, maxHeight) => {
  if (!anchorEl) return { top: 0, left: 0 }
  
  const rect = anchorEl.getBoundingClientRect()
  const styles = {}
  
  // Vertical positioning
  if (anchorOrigin.vertical === 'bottom') {
    styles.top = `${rect.bottom + window.scrollY}px`
  } else if (anchorOrigin.vertical === 'top') {
    styles.top = `${rect.top + window.scrollY}px`
  } else {
    styles.top = `${rect.top + rect.height / 2 + window.scrollY}px`
  }
  
  // Horizontal positioning
  if (anchorOrigin.horizontal === 'left') {
    styles.left = `${rect.left + window.scrollX}px`
  } else if (anchorOrigin.horizontal === 'right') {
    styles.left = `${rect.right + window.scrollX}px`
  } else {
    styles.left = `${rect.left + rect.width / 2 + window.scrollX}px`
  }
  
  // Max height
  if (maxHeight !== 'auto') {
    styles.maxHeight = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight
    styles.overflowY = 'auto'
  }
  
  return styles
} 