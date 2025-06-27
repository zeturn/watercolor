import React from 'react'
import './style.css'
import { getAppBarClasses } from './utils.js'


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
  const classes = `${getAppBarClasses(position, color, elevation, variant, className)} flex items-center`

  return (
    <div className={classes} style={style} {...rest}>
      {children}
    </div>
  )
}

export default AppBar 