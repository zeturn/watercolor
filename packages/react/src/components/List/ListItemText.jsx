import React from 'react'
import { getListItemTextClasses } from './utils.js'
import './style.css'

const ListItemText = ({
  primary = '',
  secondary = '',
  inset = false,
  className = '',
  ...rest
}) => {
  const classes = getListItemTextClasses({ inset, className }).join(' ')
  return (
    <div className={classes} {...rest}>
      {primary && <p className="list-item-text-primary">{primary}</p>}
      {secondary && <p className="list-item-text-secondary">{secondary}</p>}
    </div>
  )
}

export default ListItemText 