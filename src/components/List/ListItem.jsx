import React, { useContext } from 'react'
import { ListContext } from './List'

const ListItem = ({
  children,
  button = false,
  disabled = false,
  divider = false,
  dense: denseProp,
  selected = false,
  disableGutters = false,
  className = '',
  onClick,
  ...rest
}) => {
  const { dense: contextDense } = useContext(ListContext)
  const isDense = denseProp !== undefined ? denseProp : contextDense

  // 组合类名
  const classes = [
    'flex items-center w-full transition-colors duration-150',
    !disableGutters && (isDense ? 'px-4 py-1' : 'px-4 py-2'),
    button && !disabled && 'cursor-pointer focus:outline-none',
    disabled && 'opacity-50 cursor-not-allowed',
    divider && 'border-b border-neutral-200 dark:border-neutral-700',
    // 选中/悬浮状态
    selected && button && !disabled && 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400',
    !selected && button && !disabled && 'hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:bg-neutral-100 dark:focus:bg-neutral-700',
    className
  ].filter(Boolean).join(' ')

  const handleClick = (e) => {
    if (button && !disabled) {
      onClick?.(e)
    }
  }

  return (
    <li
      role="listitem"
      tabIndex={button ? 0 : -1}
      className={classes}
      onClick={handleClick}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && button && !disabled) {
          handleClick(e)
        }
      }}
      {...rest}
    >
      {children}
    </li>
  )
}

export default ListItem