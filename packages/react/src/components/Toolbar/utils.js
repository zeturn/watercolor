// Toolbar 组件共用工具函数

export const getToolbarClasses = (variant, disableGutters, className = '') => {
  const baseClasses = 'flex items-center w-full'
  const classes = [baseClasses]
  
  // Height variants
  if (variant === 'dense') {
    classes.push('min-h-12 py-2')
  } else {
    classes.push('min-h-16 py-3')
  }
  
  // Gutters (horizontal padding)
  if (!disableGutters) {
    classes.push('px-4 sm:px-6 lg:px-8')
  }
  
  if (className) {
    classes.push(className)
  }
  
  return classes.join(' ')
} 