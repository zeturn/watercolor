import React from 'react'

const AppBar = ({
  children,
  position = 'fixed',
  color = 'primary',
  elevation = 4,
  variant = 'elevation',
  className = '',
  style = {},
  ...rest
}) => {
  const positionMap = {
    fixed: 'fixed top-0 left-0 right-0',
    absolute: 'absolute top-0 left-0 right-0',
    sticky: 'sticky top-0',
    static: 'static',
    relative: 'relative'
  }

  const colorMap = {
    primary: 'bg-primary-500 text-white',
    secondary: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100',
    transparent: 'bg-transparent',
    inherit: 'bg-inherit text-inherit'
  }

  const shadowMap = {
    0: 'shadow-none',
    1: 'shadow-sm',
    2: 'shadow',
    3: 'shadow-md',
    4: 'shadow-lg',
    6: 'shadow-xl',
    8: 'shadow-2xl',
    12: 'shadow-2xl',
    16: 'shadow-2xl',
    24: 'shadow-2xl'
  }

  const classes = [
    'w-full transition-all duration-250 z-50',
    positionMap[position] || positionMap.fixed,
    colorMap[color] || colorMap.primary,
    variant === 'outlined' ? 'border-b border-neutral-200 dark:border-neutral-700' : (shadowMap[elevation] || shadowMap[4]),
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} style={style} {...rest}>
      {children}
    </div>
  )
}

export default AppBar