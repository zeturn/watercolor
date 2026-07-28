export const validVariants = ['solid', 'dashed', 'dotted']
export const validOrientations = ['horizontal', 'vertical']

export const getDividerClasses = ({
  variant = 'solid',
  orientation = 'horizontal',
  flexItem = false,
  className = ''
}) => {
  const classes = ['wc-divider']

  // 添加变体类
  if (validVariants.includes(variant)) {
    classes.push(`wc-divider--${variant}`)
  }

  // 添加方向类
  if (validOrientations.includes(orientation)) {
    classes.push(`wc-divider--${orientation}`)
  }

  // 添加 flexItem 类
  if (flexItem) {
    classes.push('wc-divider--flex-item')
  }

  if (className) {
    classes.push(className)
  }

  return classes.join(' ')
}
