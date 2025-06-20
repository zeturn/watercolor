import React from 'react'

const widthMap = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-4xl',
  xl: 'max-w-6xl',
  '2xl': 'max-w-7xl',
}

export function Container({
  maxWidth = 'lg',
  fluid = false,
  fixed = false,
  className = '',
  children,
}) {
  const base = 'mx-auto px-4 sm:px-6 lg:px-8'
  const classes = [base]

  if (fluid || fixed) {
    classes.push('w-full')
  } else if (maxWidth) {
    classes.push(widthMap[maxWidth])
  }

  if (className) classes.push(className)

  return <div className={classes.join(' ')}>{children}</div>
}

export default Container