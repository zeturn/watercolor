import React from 'react'

export default function ColorPicker({ value = '#ffffff', onChange }) {
  const handleInput = (e) => {
    onChange?.(e.target.value)
  }
  return (
    <label className="wc-color-picker inline-flex relative cursor-pointer">
      <input
        type="color"
        value={value}
        onChange={handleInput}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <span
        className="wc-color-picker__preview w-10 h-10 rounded-full border-2 border-neutral-200 dark:border-neutral-600 shadow hover:shadow-md transition-transform"
        style={{ backgroundColor: value }}
      />
    </label>
  )
}