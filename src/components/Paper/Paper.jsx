import React from 'react'

/**
 * Paper – React 组件
 * Props
 *  variant   elevation | outlined
 *  elevation 0-24
 *  square    boolean – 是否直角
 */
export default function Paper({
  variant = 'elevation',
  elevation = 1,
  square = false,
  className = '',
  children,
  ...rest
}) {
  const classes = []

  // 基本样式
  classes.push('transition-all duration-250 bg-[var(--wc-neutral-0)] dark:bg-[var(--wc-neutral-800)]')

  if (!square) {
    classes.push('rounded-lg')
  }

  if (variant === 'outlined') {
    classes.push('border border-[var(--wc-neutral-200)] dark:border-[var(--wc-neutral-700)]')
  } else {
    if (elevation > 0) {
      classes.push('border border-[var(--wc-neutral-200)] dark:border-[var(--wc-neutral-700)]')
    }
  }

  if (className) classes.push(className)

  return (
    <div className={classes.join(' ')} {...rest}>
      {children}
    </div>
  )
}