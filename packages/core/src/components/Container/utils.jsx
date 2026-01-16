// Container 组件工具函数

/**
 * 有效的Container最大宽度选项
 */
export const validMaxWidths = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']

/**
 * 验证Container最大宽度
 * @param {string} maxWidth - 要验证的最大宽度
 * @returns {boolean} 是否为有效最大宽度
 */
export function isValidMaxWidth(maxWidth) {
  return validMaxWidths.includes(maxWidth)
}

/**
 * Tailwind宽度映射
 */
export const widthMap = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-4xl',
  xl: 'max-w-6xl',
  '2xl': 'max-w-7xl',
}

/**
 * 获取Container的CSS类名
 * @param {Object} props - Container的props
 * @returns {Array<string>} CSS类名数组
 */
export function getContainerClasses(props) {
  const {
    maxWidth = 'lg',
    fluid = false,
    fixed = false,
    className = ''
  } = props

  const classes = ['wc-container']

  if (fluid) {
    classes.push('wc-container--fluid')
  } else if (fixed) {
    classes.push('wc-container--fixed')
  } else if (maxWidth && isValidMaxWidth(maxWidth)) {
    classes.push(`wc-container--${maxWidth}`)
  }

  if (className) classes.push(className)

  return classes.filter(Boolean)
}

/**
 * 获取Tailwind版本的Container类名
 * @param {Object} props - Container的props
 * @returns {Array<string>} CSS类名数组
 */
export function getTailwindContainerClasses(props) {
  const {
    maxWidth = 'lg',
    fluid = false,
    fixed = false,
    className = ''
  } = props

  const base = 'mx-auto px-4 sm:px-6 lg:px-8'
  const classes = [base]

  if (fluid || fixed) {
    classes.push('w-full')
  } else if (maxWidth && widthMap[maxWidth]) {
    classes.push(widthMap[maxWidth])
  }

  if (className) classes.push(className)

  return classes.filter(Boolean)
} 