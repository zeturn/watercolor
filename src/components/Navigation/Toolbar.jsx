import React from 'react'

const Toolbar = ({
  children,
  variant = 'regular',
  disableGutters = false,
  className = '',
  style = {},
  ...rest
}) => {
  const classes = [
    'flex items-center w-full',
    variant === 'dense' ? 'min-h-12 py-2' : 'min-h-16 py-3',
    !disableGutters && 'px-4 sm:px-6 lg:px-8',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} style={style} {...rest}>
      {children}
    </div>
  )
}

export default Toolbar