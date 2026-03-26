// Chip 组件工具函数
import React from 'react'

/**
 * 有效的Chip尺寸
 */
export const validSizes = ['sm', 'md', 'lg']

/**
 * 有效的Chip变体
 */
export const validVariants = ['filled', 'outlined', 'text']

/**
 * 有效的Chip颜色
 */
export const validColors = ['default', 'primary', 'secondary', 'success', 'warning', 'error']

/**
 * 验证Chip尺寸
 * @param {string} size - 要验证的尺寸
 * @returns {boolean} 是否为有效尺寸
 */
export function isValidSize(size) {
  return validSizes.includes(size)
}

/**
 * 验证Chip变体
 * @param {string} variant - 要验证的变体
 * @returns {boolean} 是否为有效变体
 */
export function isValidVariant(variant) {
  return validVariants.includes(variant)
}

/**
 * 验证Chip颜色
 * @param {string} color - 要验证的颜色
 * @returns {boolean} 是否为有效颜色
 */
export function isValidColor(color) {
  return validColors.includes(color)
}

/**
 * 获取Chip的CSS类名
 * @param {Object} props - Chip的props
 * @returns {string} CSS类名字符串
 */
export function getChipClasses(props) {
  const {
    size = 'md',
    variant = 'filled',
    color = 'default',
    clickable = false,
    disabled = false,
    className = ''
  } = props

  const classes = ['wc-chip']
  
  classes.push(`wc-chip--${size}`)
  classes.push(`wc-chip--${variant}`)
  classes.push(`wc-chip--${color}`)
  
  if (clickable && !disabled) classes.push('wc-chip--clickable')
  if (disabled) classes.push('wc-chip--disabled')
  
  if (className) classes.push(className)
  
  return classes.filter(Boolean).join(' ')
}

/**
 * 颜色映射（用于Tailwind版本）
 */
export const colorMap = {
  filled: {
    default: 'bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200',
    primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200',
    secondary: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200',
    success: 'bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-200',
    warning: 'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-200',
    error: 'bg-error-100 text-error-800 dark:bg-error-900 dark:text-error-200',
  },
  outlined: {
    default: 'bg-transparent border border-neutral-300 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300',
    primary: 'bg-transparent border border-primary-300 text-primary-700 dark:border-primary-600 dark:text-primary-300',
    secondary: 'bg-transparent border border-neutral-300 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300',
    success: 'bg-transparent border border-success-300 text-success-700 dark:border-success-600 dark:text-success-300',
    warning: 'bg-transparent border border-warning-300 text-warning-700 dark:border-warning-600 dark:text-warning-300',
    error: 'bg-transparent border border-error-300 text-error-700 dark:border-error-600 dark:text-error-300',
  }
}

/**
 * 尺寸类名映射（用于Tailwind版本）
 */
export const sizeClasses = {
  sm: 'px-2 py-1 text-xs min-h-[24px]',
  md: 'px-3 py-1.5 text-sm min-h-[32px]',
  lg: 'px-4 py-2 text-base min-h-[40px]',
}

/**
 * 处理Chip点击事件
 * @param {Event} e - 事件对象
 * @param {boolean} clickable - 是否可点击
 * @param {boolean} disabled - 是否禁用
 * @param {Function} onClick - 点击回调函数
 */
export function handleChipClick(e, clickable, disabled, onClick) {
  if (clickable && !disabled && onClick) {
    onClick(e)
  }
}

/**
 * 处理Chip删除事件
 * @param {Event} e - 事件对象
 * @param {boolean} disabled - 是否禁用
 * @param {Function} onDelete - 删除回调函数
 */
export function handleChipDelete(e, disabled, onDelete) {
  e.stopPropagation()
  if (!disabled && onDelete) {
    onDelete(e)
  }
}

/**
 * 获取删除图标的SVG路径
 * @returns {string} 删除图标的SVG路径
 */
export function getDefaultDeleteIconPath() {
  return 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
}

/**
 * 获取默认删除图标组件
 * @returns {JSX.Element} 删除图标的 React 元素
 */
export function getDefaultDeleteIcon() {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 20 20" 
      fill="currentColor"
      className="w-4 h-4"
    >
      <path 
        fillRule="evenodd" 
        d={getDefaultDeleteIconPath()} 
        clipRule="evenodd"
      />
    </svg>
  )
}

/**
 * 根据变体和颜色获取类名（用于Tailwind版本）
 * @param {string} variant - 变体
 * @param {string} color - 颜色
 * @returns {string} 类名
 */
export function getColorClass(variant, color) {
  return colorMap[variant]?.[color] || colorMap.filled.default
}

/**
 * 生成完整的Chip类名（用于Tailwind版本）
 * @param {Object} props - Chip的props
 * @returns {string} 完整的类名字符串
 */
export function getTailwindChipClasses(props) {
  const {
    size = 'md',
    variant = 'filled',
    color = 'default',
    clickable = false,
    disabled = false
  } = props

  const baseClasses = 'wc-chip inline-flex items-center gap-1 font-medium transition-all duration-200'
  const sizeClass = sizeClasses[size]
  const colorClass = getColorClass(variant, color)
  const interactive = clickable && !disabled ? 'cursor-pointer hover:opacity-80' : ''
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''

  return [baseClasses, sizeClass, colorClass, interactive, disabledClass]
    .filter(Boolean)
    .join(' ')
} 
