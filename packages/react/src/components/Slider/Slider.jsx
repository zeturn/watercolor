import React, { useEffect, useId, useMemo, useState } from 'react'
import './style.css'

const Slider = ({
  value: valueProp,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  label = '',
  valueLabelDisplay = 'off',
  onChange = () => {},
  className = '',
  style = {},
  ...rest
}) => {
  const [value, setValue] = useState(valueProp !== undefined ? valueProp : defaultValue)
  const inputId = useId()

  useEffect(() => {
    if (valueProp !== undefined) setValue(valueProp)
  }, [valueProp])

  const percentage = useMemo(() => {
    if (max === min) return 0
    const clamped = Math.min(Math.max(value, min), max)
    return ((clamped - min) / (max - min)) * 100
  }, [value, min, max])

  const handleInput = (event) => {
    const nextValue = Number(event.target.value)
    if (valueProp === undefined) setValue(nextValue)
    onChange(nextValue)
  }

  return (
    <div
      className={['wc-slider', disabled && 'wc-slider--disabled', className].filter(Boolean).join(' ')}
      style={style}
    >
      {(label || valueLabelDisplay !== 'off') && (
        <div className="wc-slider__header">
          {label && <label htmlFor={inputId} className="wc-slider__label">{label}</label>}
          {valueLabelDisplay !== 'off' && <output htmlFor={inputId} className="wc-slider__value">{value}</output>}
        </div>
      )}
      <input
        id={inputId}
        type="range"
        className="wc-slider__input"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        aria-label={label || 'Slider'}
        onChange={handleInput}
        style={{ '--wc-slider-percentage': `${percentage}%` }}
        {...rest}
      />
    </div>
  )
}

Slider.displayName = 'Slider'
export default Slider
