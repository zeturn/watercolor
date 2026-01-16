import React, { useContext } from 'react'
import './style.css'
import { getFormHelperTextClasses } from './utils.js'
import { FormControlContext } from './FormControl'

const FormHelperText = ({
  disabled = false,
  error = false,
  filled = false,
  focused = false,
  margin = 'normal', // normal | dense | none
  required = false,
  variant = 'outlined', // standard | outlined | filled
  id,
  size = 'md',
  className = '',
  style = {},
  children,
  ...props
}) => {
  const formContext = useContext(FormControlContext) || {}

  const isError = error || formContext.error
  const isDisabled = disabled || formContext.disabled

  const classes = [
    'form-helper-text',
    size === 'sm' && 'form-helper-text--size-sm',
    size === 'lg' && 'form-helper-text--size-lg',
    margin === 'dense' && 'form-helper-text--margin-dense',
    margin === 'normal' && 'form-helper-text--margin-normal',
    isError && 'form-helper-text--error',
    isDisabled && 'form-helper-text--disabled',
    focused && 'form-helper-text--focused',
    className
  ].filter(Boolean).join(' ')

  return (
    <p id={id} className={classes} style={style} {...props}>
      {children}
    </p>
  )
}

FormHelperText.displayName = 'FormHelperText'

export default FormHelperText