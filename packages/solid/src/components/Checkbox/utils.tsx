// Checkbox 组件工具函数 (JSX)

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

export function isValidSize(size) {
  return validSizes.includes(size)
}
export function isValidColor(color) {
  return validColors.includes(color)
}
export function isValidLabelPlacement(labelPlacement) {
  return validLabelPlacements.includes(labelPlacement)
}

export function getCheckboxClasses(props) {
  const {
    size = 'md',
    color = 'primary',
    labelPlacement = 'end',
    checked = false,
    indeterminate = false,
    disabled = false,
    isFocused = false,
    className = '',
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

export function getCheckboxStyles(props) {
  const { checked, indeterminate, color, style = {} } = props
  const styles = { ...style }
  if (checked || indeterminate) {
    styles.borderColor = `var(--wc-${color}-500)`
    styles.backgroundColor = `var(--wc-${color}-500)`
  } else {
    styles.borderColor = 'var(--wc-neutral-300)'
    styles.backgroundColor = 'transparent'
  }
  return styles
}

export function handleCheckboxChange(e, disabled, checked, name, value, onChange) {
  if (!disabled && onChange) {
    onChange({
      target: { name, value, checked: !checked },
      preventDefault: () => {},
      stopPropagation: () => {},
    })
  }
}

export function handleCheckboxKeyDown(e, handleChange) {
  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault()
    handleChange(e)
  }
}

export function renderCheckboxIcon(indeterminate, checked, indeterminateIcon, checkedIcon, icon) {
  if (indeterminate) {
    return (
      indeterminateIcon || (
        <svg class="wc-checkbox__icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 13H5v-2h14v2z" />
        </svg>
      )
    )
  }
  if (checked) {
    return (
      checkedIcon || (
        <svg class="wc-checkbox__icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      )
    )
  }
  return icon || null
}

export function generateCheckboxId(id, name) {
  return id || name || `checkbox-${Math.random().toString(36).substr(2, 9)}`
} 