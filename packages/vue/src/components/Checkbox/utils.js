// Checkbox 组件工具函数

/**
 * 有效的Checkbox尺寸
 */
export const validSizes = ['sm', 'md', 'lg']

/**
 * 有效的Checkbox颜色
 */
export const validColors = ['primary', 'secondary', 'success', 'warning', 'error']

/**
 * 有效的Checkbox标签位置
 */
export const validLabelPlacements = ['start', 'end']

/**
 * 验证Checkbox尺寸
 * @param {string} size - 要验证的尺寸
 * @returns {boolean} 是否为有效尺寸
 */
export function isValidSize(size) {
  return validSizes.includes(size)
}

/**
 * 验证Checkbox颜色
 * @param {string} color - 要验证的颜色
 * @returns {boolean} 是否为有效颜色
 */
export function isValidColor(color) {
  return validColors.includes(color)
}

/**
 * 验证Checkbox标签位置
 * @param {string} labelPlacement - 要验证的标签位置
 * @returns {boolean} 是否为有效标签位置
 */
export function isValidLabelPlacement(labelPlacement) {
  return validLabelPlacements.includes(labelPlacement)
}

/**
 * 获取Checkbox的CSS类名
 * @param {Object} props - Checkbox的props
 * @returns {Array<string>} CSS类名数组
 */
export function getCheckboxClasses(props) {
  const {
    size = 'md',
    color = 'primary',
    labelPlacement = 'end',
    checked = false,
    indeterminate = false,
    disabled = false,
    isFocused = false,
    className = ''
  } = props

  const classes = ['wc-checkbox']
  
  classes.push(`wc-checkbox--${size}`)
  classes.push(`wc-checkbox--${color}`)
  classes.push(`wc-checkbox--label-${labelPlacement}`)
  
  if (checked) classes.push('wc-checkbox--checked')
  if (indeterminate) classes.push('wc-checkbox--indeterminate')
  if (disabled) classes.push('wc-checkbox--disabled')
  if (isFocused) classes.push('wc-checkbox--focused')
  
  if (className) classes.push(className)
  
  return classes.filter(Boolean)
}

/**
 * 获取Checkbox的内联样式
 * @param {Object} props - Checkbox的props
 * @returns {Object} 内联样式对象
 */
export function getCheckboxStyles(props) {
  const { checked, indeterminate, color, style = {} } = props
  
  const styles = { ...style }
  
  // Use CSS variables for theming
  if (checked || indeterminate) {
    styles.borderColor = `var(--wc-${color}-500)`
    styles.backgroundColor = `var(--wc-${color}-500)`
  } else {
    styles.borderColor = 'var(--wc-neutral-300)'
    styles.backgroundColor = 'transparent'
  }
  
  return styles
}

/**
 * 处理Checkbox变化事件
 * @param {Event} e - 事件对象
 * @param {boolean} disabled - 是否禁用
 * @param {boolean} checked - 当前选中状态
 * @param {string} name - 名称
 * @param {string} value - 值
 * @param {Function} onChange - 变化回调函数
 */
export function handleCheckboxChange(e, disabled, checked, name, value, onChange) {
  if (!disabled && onChange) {
    onChange({
      target: {
        name,
        value,
        checked: !checked
      },
      preventDefault: () => {},
      stopPropagation: () => {}
    })
  }
}

/**
 * 处理键盘事件
 * @param {Event} e - 键盘事件对象
 * @param {Function} handleChange - 变化处理函数
 */
export function handleCheckboxKeyDown(e, handleChange) {
  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault()
    handleChange(e)
  }
}

/**
 * 渲染图标内容
 * @param {boolean} indeterminate - 是否为半选状态
 * @param {boolean} checked - 是否选中
 * @param {ReactNode} indeterminateIcon - 半选图标
 * @param {ReactNode} checkedIcon - 选中图标
 * @param {ReactNode} icon - 默认图标
 * @returns {ReactNode} 图标内容
 */
export function renderCheckboxIcon(indeterminate, checked, indeterminateIcon, checkedIcon, icon) {
  if (indeterminate) {
    return indeterminateIcon || (
      <svg className="wc-checkbox__icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 13H5v-2h14v2z"/>
      </svg>
    )
  } else if (checked) {
    return checkedIcon || (
      <svg className="wc-checkbox__icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    )
  } else {
    return icon || null
  }
}

/**
 * 生成唯一ID
 * @param {string} id - 提供的ID
 * @param {string} name - 名称
 * @returns {string} 唯一ID
 */
export function generateCheckboxId(id, name) {
  return id || name || `checkbox-${Math.random().toString(36).substr(2, 9)}`
} 