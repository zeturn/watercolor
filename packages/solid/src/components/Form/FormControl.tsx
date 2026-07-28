import { createSignal, createEffect, createMemo, onMount, onCleanup, useId, Show, For, Index } from 'solid-js'

import './style.css'
import { getFormControlClasses } from './utils.js'

export const FormControlContext = createContext(null)

const FormControl = ({
  disabled = false,
  error = false,
  required = false,
  variant = 'filled', // outlined | filled | standard
  size = 'md', // sm | md | lg
  fullWidth = false,
  margin = 'normal', // none | dense | normal
  className = '',
  style = {},
  children,
  ...props
}) => {
  const contextValue = createMemo(() => ({
    disabled,
    error,
    required,
    variant,
    size
  }), [disabled, error, required, variant, size])

  const classes = [
    'form-control',
    fullWidth && 'form-control--full-width',
    margin === 'dense' && 'form-control--margin-dense',
    margin === 'normal' && 'form-control--margin-normal',
    disabled && 'form-control--disabled',
    error && 'form-control--error',
    className
  ].filter(Boolean).join(' ')

  return (
    <FormControlContext.Provider value={contextValue}>
      <div class={classes} style={style} {...props}>
        {children}
      </div>
    </FormControlContext.Provider>
  )
}

FormControl.displayName = 'FormControl'

export default FormControl
