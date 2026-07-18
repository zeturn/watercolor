import React, { useEffect, useState } from 'react'
import './style.css'
import { useLocale } from '../../LocaleReact.tsx'

const Rating = ({ value = 0, max = 5, readOnly = false, onChange = () => {}, className = '', style = {}, ariaLabel, ...rest }) => {
  const [hovered, setHovered] = useState(0)
  const [internal, setInternal] = useState(value)
  const { messages } = useLocale()

  useEffect(() => setInternal(value), [value])

  const handleSelect = (next) => {
    if (readOnly) return
    const nextValue = next === internal ? 0 : next
    setInternal(nextValue)
    onChange(nextValue)
  }

  return (
    <div className={['wc-rating', className].filter(Boolean).join(' ')} role="radiogroup" aria-label={ariaLabel || messages.rating} style={style} {...rest}>
      {Array.from({ length: max }, (_, index) => {
        const itemValue = index + 1
        const active = itemValue <= hovered || itemValue <= internal
        return (
          <button
            key={itemValue}
            type="button"
            className={['wc-rating-item', active && 'wc-rating-item--active'].filter(Boolean).join(' ')}
            onMouseEnter={() => !readOnly && setHovered(itemValue)}
            onMouseLeave={() => !readOnly && setHovered(0)}
            onClick={() => handleSelect(itemValue)}
            disabled={readOnly}
            aria-label={messages.ratingValue(itemValue, max)}
            aria-checked={itemValue === internal}
            role="radio"
          >★</button>
        )
      })}
    </div>
  )
}

Rating.displayName = 'Rating'
export default Rating
