import React from 'react'
import { getColorPickerClasses, handleColorChange, getPreviewStyles } from './utils.js'
import './style.css'

export default function ColorPicker({ 
  value = '#ffffff', 
  onChange,
  size = 'md',
  shape = 'circle',
  disabled = false,
  className = ''
}) {
  const colorPickerClasses = getColorPickerClasses({
    size,
    shape,
    disabled,
    className
  }).join(' ')

  const previewStyles = getPreviewStyles(value)

  const handleInput = (e) => {
    handleColorChange(e, disabled, onChange)
  }

  return (
    <label className={colorPickerClasses}>
      <input
        type="color"
        value={value}
        onChange={handleInput}
        disabled={disabled}
        className="wc-color-picker__input"
      />
      <span
        className="wc-color-picker__preview"
        style={previewStyles}
      />
    </label>
  )
}