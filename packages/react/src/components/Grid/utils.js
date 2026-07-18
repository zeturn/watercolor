/**
 * Grid组件工具函数
 * 提供网格布局相关的工具函数
 */

// 断点映射
export const BREAKPOINTS = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl'
}

// 方向映射
export const DIRECTION_MAP = {
  'row': 'wc-grid-container--row',
  'column': 'wc-grid-container--column',
  'row-reverse': 'wc-grid-container--row-reverse',
  'column-reverse': 'wc-grid-container--column-reverse'
}

// 水平对齐映射
export const JUSTIFY_CONTENT_MAP = {
  'flex-start': 'wc-grid-container--justify-start',
  'center': 'wc-grid-container--justify-center',
  'flex-end': 'wc-grid-container--justify-end',
  'space-between': 'wc-grid-container--justify-between',
  'space-around': 'wc-grid-container--justify-around',
  'space-evenly': 'wc-grid-container--justify-evenly'
}

// 垂直对齐映射
export const ALIGN_ITEMS_MAP = {
  'flex-start': 'wc-grid-container--align-start',
  'center': 'wc-grid-container--align-center',
  'flex-end': 'wc-grid-container--align-end',
  'stretch': 'wc-grid-container--align-stretch',
  'baseline': 'wc-grid-container--align-baseline'
}

// 有效的间距值
export const VALID_SPACING_VALUES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

/**
 * 获取容器类名
 * @param {Object} props - 组件属性
 * @returns {Array} 类名数组
 */
export const getContainerClasses = (props) => {
  const { direction = 'row', justifyContent = 'flex-start', alignItems = 'stretch', spacing = 0 } = props
  const classes = ['wc-grid', 'wc-grid-container']
  
  // 添加方向类
  if (DIRECTION_MAP[direction]) {
    classes.push(DIRECTION_MAP[direction])
  }
  
  // 添加水平对齐类
  if (JUSTIFY_CONTENT_MAP[justifyContent]) {
    classes.push(JUSTIFY_CONTENT_MAP[justifyContent])
  }
  
  // 添加垂直对齐类
  if (ALIGN_ITEMS_MAP[alignItems]) {
    classes.push(ALIGN_ITEMS_MAP[alignItems])
  }
  
  // 添加间距类
  classes.push(...getSpacingClasses(spacing))
  
  return classes
}

/**
 * 获取项目类名
 * @param {Object} props - 组件属性
 * @returns {Array} 类名数组
 */
export const getItemClasses = (props) => {
  const { xs, sm, md, lg, xl } = props
  const classes = ['wc-grid', 'wc-grid-item']
  
  // 添加响应式宽度类
  Object.entries(BREAKPOINTS).forEach(([breakpoint, prefix]) => {
    const value = props[breakpoint]
    if (value !== undefined) {
      classes.push(...getBreakpointClasses(value, prefix))
    }
  })
  
  return classes
}

/**
 * 获取间距类名
 * @param {number|string} spacing - 间距值
 * @returns {Array} 类名数组
 */
export const getSpacingClasses = (spacing) => {
  const numericSpacing = Number(spacing)
  const normalizedSpacing = Number.isFinite(numericSpacing)
    ? Math.max(0, Math.min(12, Math.round(numericSpacing)))
    : 0

  return [`wc-grid-container--spacing-${normalizedSpacing}`]
}

/**
 * 获取断点类名
 * @param {number|string|boolean} value - 断点值
 * @param {string} prefix - 断点前缀
 * @returns {Array} 类名数组
 */
export const getBreakpointClasses = (value, breakpoint) => {
  // Vue casts an absent prop to false when Boolean is one of its accepted
  // types. Treat false/null as "not configured" instead of coercing them to
  // a numeric column span.
  if (value === false || value === null || value === undefined) {
    return []
  }

  if (value === 'auto') {
    return [`wc-grid-item--${breakpoint}-auto`]
  }
  
  if (value === true) {
    return [`wc-grid-item--${breakpoint}-true`]
  }
  
  const numericValue = Number(value)
  if (Number.isFinite(numericValue) && numericValue >= 1 && numericValue <= 12) {
    return [`wc-grid-item--${breakpoint}-${Math.round(numericValue)}`]
  }
  
  return []
}

/**
 * 获取宽度类名
 * @param {number} width - 宽度百分比
 * @returns {string} 宽度类名
 */
export const getWidthClass = (width) => {
  switch (width) {
    case 100:
      return 'full'
    case 50:
      return '1/2'
    case 25:
      return '1/4'
    case 75:
      return '3/4'
    case 33:
      return '1/3'
    case 67:
      return '2/3'
    case 17:
      return '1/6'
    case 83:
      return '5/6'
    default:
      return `[${width}%]`
  }
}

/**
 * 获取Grid类名
 * @param {Object} props - 组件属性
 * @returns {Array} 类名数组
 */
export const getGridClasses = (props) => {
  const { container = false, item = false, className = '' } = props
  const classes = []
  
  if (container) {
    classes.push(...getContainerClasses(props))
  }
  
  if (item) {
    classes.push(...getItemClasses(props))
  }
  
  // 添加自定义类名
  if (className) {
    classes.push(className)
  }
  
  return classes
}

/**
 * 验证方向值
 * @param {string} direction - 方向值
 * @returns {boolean} 是否有效
 */
export const isValidDirection = (direction) => {
  return Object.keys(DIRECTION_MAP).includes(direction)
}

/**
 * 验证水平对齐值
 * @param {string} justifyContent - 水平对齐值
 * @returns {boolean} 是否有效
 */
export const isValidJustifyContent = (justifyContent) => {
  return Object.keys(JUSTIFY_CONTENT_MAP).includes(justifyContent)
}

/**
 * 验证垂直对齐值
 * @param {string} alignItems - 垂直对齐值
 * @returns {boolean} 是否有效
 */
export const isValidAlignItems = (alignItems) => {
  return Object.keys(ALIGN_ITEMS_MAP).includes(alignItems)
}

/**
 * 验证断点值
 * @param {any} value - 断点值
 * @returns {boolean} 是否有效
 */
export const isValidBreakpointValue = (value) => {
  if (value === undefined || value === null) {
    return true
  }
  
  if (value === 'auto' || value === true) {
    return true
  }
  
  if (typeof value === 'number') {
    return value >= 1 && value <= 12
  }
  
  return false
}

/**
 * 验证间距值
 * @param {any} spacing - 间距值
 * @returns {boolean} 是否有效
 */
export const isValidSpacing = (spacing) => {
  if (spacing === undefined || spacing === null) {
    return true
  }
  
  const numSpacing = Number(spacing)
  return !isNaN(numSpacing) && numSpacing >= 0
}

/**
 * 格式化Grid属性
 * @param {Object} props - 原始属性
 * @returns {Object} 格式化后的属性
 */
export const formatGridProps = (props) => {
  const formatted = { ...props }
  
  // 格式化间距
  if (formatted.spacing !== undefined) {
    formatted.spacing = Number(formatted.spacing) || 0
  }
  
  // 格式化断点值
  ['xs', 'sm', 'md', 'lg', 'xl'].forEach(breakpoint => {
    const breakpointValue = formatted[breakpoint]

    if (
      breakpointValue !== undefined &&
      breakpointValue !== null &&
      breakpointValue !== false &&
      breakpointValue !== 'auto' &&
      breakpointValue !== true
    ) {
      const value = Number(breakpointValue)
      if (!isNaN(value)) {
        formatted[breakpoint] = Math.max(1, Math.min(12, value))
      }
    }
  })
  
  return formatted
}

/**
 * 计算Grid项目的实际宽度
 * @param {number} columns - 列数
 * @param {number} totalColumns - 总列数
 * @returns {number} 宽度百分比
 */
export const calculateGridItemWidth = (columns, totalColumns = 12) => {
  if (columns <= 0 || totalColumns <= 0) {
    return 0
  }
  
  return Math.round((columns / totalColumns) * 100)
}

/**
 * 获取响应式断点信息
 * @param {Object} breakpoints - 断点配置
 * @returns {Object} 断点信息
 */
export const getBreakpointInfo = (breakpoints) => {
  const info = {}
  
  Object.entries(BREAKPOINTS).forEach(([breakpoint, prefix]) => {
    if (breakpoints[breakpoint] !== undefined) {
      info[breakpoint] = {
        value: breakpoints[breakpoint],
        prefix,
        classes: getBreakpointClasses(breakpoints[breakpoint], prefix)
      }
    }
  })
  
  return info
}

/**
 * 创建Grid配置对象
 * @param {Object} options - 配置选项
 * @returns {Object} Grid配置
 */
export const createGridConfig = (options = {}) => {
  const {
    container = false,
    item = false,
    spacing = 0,
    direction = 'row',
    justifyContent = 'flex-start',
    alignItems = 'stretch',
    breakpoints = {}
  } = options
  
  return {
    container,
    item,
    spacing,
    direction,
    justifyContent,
    alignItems,
    ...breakpoints
  }
}

/**
 * 合并Grid类名
 * @param {...string} classNames - 类名
 * @returns {string} 合并后的类名
 */
export const mergeGridClasses = (...classNames) => {
  return classNames
    .filter(Boolean)
    .join(' ')
    .split(' ')
    .filter((className, index, array) => array.indexOf(className) === index)
    .join(' ')
}

/**
 * 获取Grid容器样式
 * @param {Object} props - 组件属性
 * @returns {Object} 样式对象
 */
export const getGridContainerStyles = (props) => {
  const { spacing = 0, style = {} } = props
  const styles = { ...style }
  
  // 如果使用自定义间距
  if (spacing > 0 && !VALID_SPACING_VALUES.includes(spacing.toString())) {
    styles.gap = `${spacing * 0.25}rem`
  }
  
  return styles
}

/**
 * 获取Grid项目样式
 * @param {Object} props - 组件属性
 * @returns {Object} 样式对象
 */
export const getGridItemStyles = (props) => {
  const { style = {} } = props
  return { ...style }
}

/**
 * 调试Grid配置
 * @param {Object} props - 组件属性
 * @returns {Object} 调试信息
 */
export const debugGridConfig = (props) => {
  const classes = getGridClasses(props)
  const breakpointInfo = getBreakpointInfo(props)
  
  return {
    props: formatGridProps(props),
    classes,
    breakpointInfo,
    validation: {
      direction: isValidDirection(props.direction),
      justifyContent: isValidJustifyContent(props.justifyContent),
      alignItems: isValidAlignItems(props.alignItems),
      spacing: isValidSpacing(props.spacing),
      breakpoints: {
        xs: isValidBreakpointValue(props.xs),
        sm: isValidBreakpointValue(props.sm),
        md: isValidBreakpointValue(props.md),
        lg: isValidBreakpointValue(props.lg),
        xl: isValidBreakpointValue(props.xl)
      }
    }
  }
}
