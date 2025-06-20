import React, { useState, useEffect, useMemo } from 'react'

/**
 * Slider (React)
 * 依赖原生 input[type=range]，使用主题变量，简洁扁平化样式。
 */
const Slider = ({ value: valueProp, defaultValue = 0, min = 0, max = 100, step = 1, disabled = false, label = '', valueLabelDisplay = 'off', onChange = () => {}, className = '', style = {}, ...rest }) => {
  const [value, setValue] = useState(valueProp !== undefined ? valueProp : defaultValue)

  // 受控同步
  useEffect(() => {
    if (valueProp !== undefined) setValue(valueProp)
  }, [valueProp])

  const handleChange = (e) => {
    const newVal = Number(e.target.value)
    if (valueProp === undefined) setValue(newVal)
    onChange(newVal)
  }

  // 注入样式
  useEffect(() => {
    if (document.getElementById('wc-slider-style')) return
    const s = document.createElement('style')
    s.id = 'wc-slider-style'
    s.innerHTML = `
      .wc-slider{display:flex;flex-direction:column;gap:8px;width:100%;}
      .wc-slider__label{font-size:0.875rem;font-weight:500;color:var(--wc-neutral-700);}
      .wc-slider__input{appearance:none;width:100%;height:4px;background:var(--wc-neutral-300);border-radius:2px;outline:none;cursor:pointer;}
      .wc-slider__input::-webkit-slider-thumb{appearance:none;width:20px;height:20px;border-radius:50%;background:var(--wc-primary-500);border:2px solid var(--wc-neutral-0);cursor:pointer;}
      .wc-slider__input::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:var(--wc-primary-500);border:2px solid var(--wc-neutral-0);cursor:pointer;}
      .wc-slider__value{font-size:0.875rem;text-align:center;color:var(--wc-neutral-700);} 
    `
    document.head.appendChild(s)
  }, [])

  const percentage = useMemo(() => ((value - min) / (max - min)) * 100, [value, min, max])

  const sliderStyle = {
    background: `linear-gradient(to right, var(--wc-primary-500) 0%, var(--wc-primary-500) ${percentage}%, var(--wc-neutral-300) ${percentage}%, var(--wc-neutral-300) 100%)`
  }

  return (
    <div className={`wc-slider ${className}`} style={style} {...rest}>
      {label && <div className="wc-slider__label">{label}</div>}
      <input
        type="range"
        className="wc-slider__input"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        style={sliderStyle}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        role="slider"
      />
      {valueLabelDisplay !== 'off' && <div className="wc-slider__value">{value}</div>}
    </div>
  )
}

export default Slider