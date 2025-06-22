import React from 'react'
import { getMenuItemClasses, handleMenuItemClick, handleMenuItemKeyDown } from './utils.js'
import './style.css'

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
  const classes = getMenuItemClasses(disabled, dense, divider, selected, className)

  return (
    <div
      role="menuitem"
      tabIndex={0}
      className={classes}
      onClick={(e) => handleMenuItemClick(e, disabled, onClick)}
      onKeyDown={(e) => handleMenuItemKeyDown(e, disabled, onClick)}
      {...rest}
    >
      {children}
    </div>
  )
}

export default MenuItem 