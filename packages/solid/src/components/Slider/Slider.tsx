import { createSignal, createEffect, createMemo, onMount, onCleanup, useId, Show, For, Index } from 'solid-js'

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
  const [value, setValue] = createSignal(valueProp !== undefined ? valueProp : defaultValue)
  const inputId = useId()

  createEffect(() => {
    if (valueProp !== undefined) setValue(valueProp)
  }, [valueProp])

  const percentage = createMemo(() => {
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
      class={['wc-slider', disabled && 'wc-slider--disabled', className].filter(Boolean).join(' ')}
      style={style}
    >
      {(label || valueLabelDisplay !== 'off') && (
        <div class="wc-slider__header">
          {label && <label htmlFor={inputId} class="wc-slider__label">{label}</label>}
          {valueLabelDisplay !== 'off' && <output htmlFor={inputId} class="wc-slider__value">{value()}</output>}
        </div>
      )}
      <input
        id={inputId}
        type="range"
        class="wc-slider__input"
        min={min}
        max={max}
        step={step}
        value={value()}
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
