// Box 组件工具函数

/**
 * 间距映射表
 */
export const spacingMap = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem'
}

/**
 * 显示类型映射
 */
export const displayMap = {
  'flex': 'flex',
  'block': 'block',
  'inline': 'inline',
  'inline-block': 'inline-block',
  'none': 'hidden',
  'grid': 'grid'
}

/**
 * flex方向映射
 */
export const directionMap = {
  'row': 'flex-row',
  'column': 'flex-col',
  'row-reverse': 'flex-row-reverse',
  'column-reverse': 'flex-col-reverse'
}

/**
 * justify-content映射
 */
export const justifyMap = {
  'flex-start': 'justify-start',
  'center': 'justify-center',
  'flex-end': 'justify-end',
  'space-between': 'justify-between',
  'space-around': 'justify-around',
  'space-evenly': 'justify-evenly'
}

/**
 * align-items映射
 */
export const alignMap = {
  'flex-start': 'items-start',
  'center': 'items-center',
  'flex-end': 'items-end',
  'stretch': 'items-stretch',
  'baseline': 'items-baseline'
}

/**
 * flex-wrap映射
 */
export const wrapMap = {
  'wrap': 'flex-wrap',
  'nowrap': 'flex-nowrap',
  'wrap-reverse': 'flex-wrap-reverse'
}

/**
 * 转换尺寸值
 * @param {string|number} value - 输入值
 * @returns {string} 处理后的值
 */
export function sizeVal(value) {
  return typeof value === 'number' ? `${value}px` : value
}

/**
 * 获取Box的CSS类名
 * @param {Object} props - Box的props
 * @returns {Array<string>} CSS类名数组
 */
export function getBoxClasses(props) {
  const classes = ['wc-box']

  // Display classes
  if (props.display && displayMap[props.display]) {
    classes.push(displayMap[props.display])
  }

  // Flexbox classes
  if (props.flexDirection && directionMap[props.flexDirection]) {
    classes.push(directionMap[props.flexDirection])
  }

  if (props.justifyContent && justifyMap[props.justifyContent]) {
    classes.push(justifyMap[props.justifyContent])
  }

  if (props.alignItems && alignMap[props.alignItems]) {
    classes.push(alignMap[props.alignItems])
  }

  if (props.flexWrap && wrapMap[props.flexWrap]) {
    classes.push(wrapMap[props.flexWrap])
  }

  // Gap classes
  if (props.gap !== undefined) {
    const gapValue = props.gap.toString()
    if (['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24'].includes(gapValue)) {
      classes.push(`gap-${gapValue}`)
    }
  }

  return classes
}

/**
 * 获取Box的内联样式
 * @param {Object} props - Box的props
 * @returns {Object} 内联样式对象
 */
export function getBoxStyles(props) {
  const styles = {}

  // Spacing
  if (props.p !== undefined) styles.padding = spacingMap[props.p] || sizeVal(props.p)
  if (props.pt !== undefined) styles.paddingTop = spacingMap[props.pt] || sizeVal(props.pt)
  if (props.pr !== undefined) styles.paddingRight = spacingMap[props.pr] || sizeVal(props.pr)
  if (props.pb !== undefined) styles.paddingBottom = spacingMap[props.pb] || sizeVal(props.pb)
  if (props.pl !== undefined) styles.paddingLeft = spacingMap[props.pl] || sizeVal(props.pl)
  if (props.px !== undefined) {
    const value = spacingMap[props.px] || sizeVal(props.px)
    styles.paddingLeft = value
    styles.paddingRight = value
  }
  if (props.py !== undefined) {
    const value = spacingMap[props.py] || sizeVal(props.py)
    styles.paddingTop = value
    styles.paddingBottom = value
  }

  if (props.m !== undefined) styles.margin = spacingMap[props.m] || sizeVal(props.m)
  if (props.mt !== undefined) styles.marginTop = spacingMap[props.mt] || sizeVal(props.mt)
  if (props.mr !== undefined) styles.marginRight = spacingMap[props.mr] || sizeVal(props.mr)
  if (props.mb !== undefined) styles.marginBottom = spacingMap[props.mb] || sizeVal(props.mb)
  if (props.ml !== undefined) styles.marginLeft = spacingMap[props.ml] || sizeVal(props.ml)
  if (props.mx !== undefined) {
    const value = spacingMap[props.mx] || sizeVal(props.mx)
    styles.marginLeft = value
    styles.marginRight = value
  }
  if (props.my !== undefined) {
    const value = spacingMap[props.my] || sizeVal(props.my)
    styles.marginTop = value
    styles.marginBottom = value
  }

  // Layout
  if (props.display) styles.display = props.display
  if (props.flexDirection) styles.flexDirection = props.flexDirection
  if (props.justifyContent) styles.justifyContent = props.justifyContent
  if (props.alignItems) styles.alignItems = props.alignItems
  if (props.flexWrap) styles.flexWrap = props.flexWrap
  if (props.gap !== undefined) styles.gap = sizeVal(props.gap)

  // Color & border
  if (props.bgcolor) styles.backgroundColor = props.bgcolor
  if (props.color) styles.color = props.color
  if (props.border) styles.border = props.border
  if (props.borderRadius !== undefined) {
    styles.borderRadius = typeof props.borderRadius === 'number'
      ? `${props.borderRadius}px`
      : props.borderRadius
  }

  // Size
  if (props.width !== undefined) styles.width = sizeVal(props.width)
  if (props.height !== undefined) styles.height = sizeVal(props.height)
  if (props.minWidth !== undefined) styles.minWidth = sizeVal(props.minWidth)
  if (props.minHeight !== undefined) styles.minHeight = sizeVal(props.minHeight)
  if (props.maxWidth !== undefined) styles.maxWidth = sizeVal(props.maxWidth)
  if (props.maxHeight !== undefined) styles.maxHeight = sizeVal(props.maxHeight)

  return styles
}
