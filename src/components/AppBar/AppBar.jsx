import React from 'react'
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
  const classes = `wc-appbar wc-appbar--${position} wc-appbar--${color} wc-appbar--elevation-${elevation} wc-appbar--${variant} ${className}`

  return (
    <div className={classes} style={style} {...rest}>
      {children}
    </div>
  )
}

export default AppBar 