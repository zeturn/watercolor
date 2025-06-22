import React from 'react'
import { getAppBarClasses } from './utils.js'
import './style.css'

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
  const classes = getAppBarClasses(position, color, elevation, variant, className)

  return (
    <div className={classes} style={style} {...rest}>
      {children}
    </div>
  )
}

export default AppBar 