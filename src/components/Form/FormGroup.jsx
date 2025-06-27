import React from 'react'
import './style.css'
import { getFormGroupClasses } from './utils.js'

const FormGroup = ({
  row = false,
  spacing = 'normal', // compact | normal | comfortable
  className = '',
  style = {},
  children,
  ...props
}) => {
  const classes = [
    'form-group',
    row && 'form-group--row',
    spacing === 'compact' && 'form-group--spacing-compact',
    spacing === 'comfortable' && 'form-group--spacing-comfortable',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} style={style} {...props}>
      {children}
    </div>
  )
}

FormGroup.displayName = 'FormGroup'

export default FormGroup