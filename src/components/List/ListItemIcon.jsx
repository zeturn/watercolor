import React from 'react'
import { getListItemIconClasses } from './utils.js'
import './style.css'

const ListItemIcon = ({ children, position = 'start', className = '', ...rest }) => {
  const classes = getListItemIconClasses({ position, className }).join(' ')
  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  )
}

export default ListItemIcon 