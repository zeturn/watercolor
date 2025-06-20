import React from 'react'

const MenuItem = ({
  children,
  disabled = false,
  dense = false,
  divider = false,
  selected = false,
  className = '',
  onClick,
  ...rest
}) => {
  const classes = [
    'flex items-center text-sm transition-colors duration-150 cursor-pointer focus:outline-none',
    dense ? 'px-3 py-1' : 'px-4 py-2',
    disabled ? 'opacity-50 cursor-not-allowed text-neutral-400' : (selected ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700'),
    divider && 'border-b border-neutral-200 dark:border-neutral-700',
    className
  ].filter(Boolean).join(' ')

  const handleClick = (e) => {
    if (!disabled) {
      onClick?.(e)
    }
  }

  return (
    <div
      role="menuitem"
      tabIndex={0}
      className={classes}
      onClick={handleClick}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
          handleClick(e)
        }
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export default MenuItem