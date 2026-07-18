import React from 'react'
import { useLocale } from '../../LocaleReact'
import './style.css'
import { getColorPickerClasses, handleColorChange, getPreviewStyles } from './utils.js'

export default function ColorPicker({ 
  value = '#ffffff', 
  onChange,
  size = 'md',
  shape = 'circle',
  disabled = false,
  className = ''
}) {
  const { messages } = useLocale()
  const normalizedValue = value ?? ''
  const colorPickerClasses = getColorPickerClasses({
    size,
    shape,
    disabled,
    className
  }).join(' ')

  const previewStyles = getPreviewStyles(normalizedValue)

  const handleInput = (e) => {
    handleColorChange(e, disabled, onChange)
  }

  return (
    <label className={colorPickerClasses}>
      <input
        type="color"
        value={normalizedValue}
        onChange={handleInput}
        disabled={disabled}
        className="wc-color-picker__input"
        aria-label={messages.colorPicker}
      />
      <span
        className="wc-color-picker__preview"
        style={previewStyles}
      />
    </label>
  )
}
