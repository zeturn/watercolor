// Menu 组件共用工具函数

export const shadowMap = {
  0: 'shadow-none',
  1: 'shadow-sm',
  2: 'shadow',
  3: 'shadow-md',
  4: 'shadow-lg',
  6: 'shadow-xl',
  8: 'shadow-2xl',
  12: 'shadow-2xl',
  16: 'shadow-2xl',
  24: 'shadow-2xl'
}

export const getMenuClasses = (elevation, className = '') => {
  const classes = [
    'absolute bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 py-2 min-w-32 max-w-xs transition-all duration-150 origin-top-left',
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