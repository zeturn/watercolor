import React from 'react'
import './style.css'
import { getFormControlLabelClasses } from './utils.js'

const FormControlLabel = ({
  label,
  labelPlacement = 'end', // start | end | top | bottom
  disabled = false,
  required = false,
  checked,
  value,
  control,
  className = '',
  style = {},
  onChange,
  children,
  ...props
}) => {
  const handleClick = (e) => {
    if (!disabled) {
      onChange?.(e)
    }
  }

  const wrapperClasses = [
    'form-control-label',
    labelPlacement === 'start' && 'form-control-label--placement-start',
    labelPlacement === 'end' && 'form-control-label--placement-end',
    labelPlacement === 'top' && 'form-control-label--placement-top',
    labelPlacement === 'bottom' && 'form-control-label--placement-bottom',
    disabled && 'form-control-label--disabled',
    className
  ].filter(Boolean).join(' ')

  const labelClasses = [
    'form-control-label__text',
    disabled && 'form-control-label__text--disabled'
  ].filter(Boolean).join(' ')

  return (
    <label className={wrapperClasses} onClick={handleClick} style={style} {...props}>
      {labelPlacement === 'start' && (
        <span className={labelClasses}>
          {label}
          {required && <span className="form-control-label__required">*</span>}
        </span>
      )}

      <span className="form-control-label__control">
        {control || children}
      </span>

      {labelPlacement !== 'start' && (
        <span className={labelClasses}>
          {label}
          {required && <span className="form-control-label__required">*</span>}
        </span>
      )}
    </label>
  )
}

FormControlLabel.displayName = 'FormControlLabel'

export default FormControlLabel
