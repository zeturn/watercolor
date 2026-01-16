import React from 'react'
import { getToolbarClasses } from './utils.js'
import './style.css'

const Toolbar = ({
  children,
  variant = 'regular',
  disableGutters = false,
  className = '',
  style = {},
  ...rest
}) => {
  const classes = getToolbarClasses(variant, disableGutters, className)

  return (
    <div className={classes} style={style} {...rest}>
      {children}
    </div>
  )
}

export default Toolbar 