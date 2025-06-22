// MenuItem 组件共用工具函数

export const getMenuItemClasses = (disabled, dense, divider, selected, className = '') => {
  const baseClasses = 'flex items-center text-sm transition-colors duration-150 cursor-pointer focus:outline-none'
  const classes = [baseClasses]
  
  // Padding based on density
  if (dense) {
    classes.push('px-3 py-1')
  } else {
    classes.push('px-4 py-2')
  }
  
  // States
  if (disabled) {
    classes.push('opacity-50 cursor-not-allowed text-neutral-400')
  } else {
    if (selected) {
      classes.push('bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400')
    } else {
      classes.push('text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700')
    }
  }
  
  // Divider
  if (divider) {
    classes.push('border-b border-neutral-200 dark:border-neutral-700')
  }
  
  if (className) {
    classes.push(className)
  }
  
  return classes.join(' ')
}

export const handleMenuItemClick = (event, disabled, onClick) => {
  if (!disabled && onClick) {
    onClick(event)
  }
}

export const handleMenuItemKeyDown = (event, disabled, onClick) => {
  if ((event.key === 'Enter' || event.key === ' ') && !disabled && onClick) {
    event.preventDefault()
    onClick(event)
  }
} 