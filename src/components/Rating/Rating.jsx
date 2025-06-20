import React, { useState, useEffect } from 'react'

/**
 * Rating (React)
 * 支持 0- `max` 星级评分，可只读。
 */
const Rating = ({ value = 0, max = 5, readOnly = false, onChange = () => {}, className = '', style = {}, ...rest }) => {
  const [hovered, setHovered] = useState(0)
  const [internal, setInternal] = useState(value)

  useEffect(() => setInternal(value), [value])

  // 注入样式
  useEffect(() => {
    if (document.getElementById('wc-rating-style')) return
    const s = document.createElement('style')
    s.id = 'wc-rating-style'
    s.innerHTML = `
      .wc-rating{display:inline-flex;gap:4px;}
      .wc-rating-item{background:none;border:none;cursor:pointer;font-size:1.5rem;line-height:1;padding:0;color:var(--wc-neutral-300);transition:color 0.2s ease;}
      .wc-rating-item.active{color:var(--wc-warning-500);}
      .wc-rating-item:hover{transform:scale(1.1);}
      .wc-rating-item:disabled{cursor:default;}
      .dark .wc-rating-item{color:var(--wc-neutral-500);}
      .dark .wc-rating-item.active{color:var(--wc-warning-400);}
    `
    document.head.appendChild(s)
  }, [])

  const handleSelect = (n) => {
    if (readOnly) return
    const newVal = n === internal ? 0 : n
    setInternal(newVal)
    onChange(newVal)
  }

  const handleHover = (n) => {
    if (readOnly) return
    setHovered(n)
  }

  const items = []
  for (let n = 1; n <= max; n++) {
    const active = n <= hovered || n <= internal
    items.push(
      <button
        key={n}
        type="button"
        className={`wc-rating-item ${active ? 'active' : ''}`}
        onMouseEnter={() => handleHover(n)}
        onMouseLeave={() => handleHover(0)}
        onClick={() => handleSelect(n)}
        disabled={readOnly}
        aria-checked={n === internal}
        role="radio"
      >
        {active ? '★' : '☆'}
      </button>
    )
  }

  return (
    <div className={`wc-rating ${className}`} role="radiogroup" aria-label="评分组件" style={style} {...rest}>
      {items}
    </div>
  )
}

export default Rating