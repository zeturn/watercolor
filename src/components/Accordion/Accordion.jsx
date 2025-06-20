import React, { useState } from 'react'

const Accordion = ({
  items = [],
  multiple = false,
  variant = 'default',
  onToggle,
  className = '',
  style = {},
  ...props
}) => {
  const [activeItems, setActiveItems] = useState([])

  // Validate variant
  const validVariants = ['default', 'bordered', 'filled']
  const safeVariant = validVariants.includes(variant) ? variant : 'default'

  // Build classes
  const accordionClasses = [
    'wc-accordion',
    safeVariant !== 'default' ? `wc-accordion--${safeVariant}` : '',
    className
  ].filter(Boolean).join(' ')

  const toggleItem = (index) => {
    let newActiveItems
    
    if (multiple) {
      const activeIndex = activeItems.indexOf(index)
      if (activeIndex > -1) {
        newActiveItems = activeItems.filter(item => item !== index)
      } else {
        newActiveItems = [...activeItems, index]
      }
    } else {
      newActiveItems = activeItems.includes(index) ? [] : [index]
    }
    
    setActiveItems(newActiveItems)
    onToggle?.(index, newActiveItems.includes(index))
  }

  const isActive = (index) => activeItems.includes(index)

  return (
    <div className={accordionClasses} style={style} {...props}>
      {items.map((item, index) => (
        <div key={index} className="wc-accordion-item">
          <button
            className={`wc-accordion-header ${isActive(index) ? 'wc-accordion-header--active' : ''}`}
            onClick={() => toggleItem(index)}
            type="button"
          >
            <span className="wc-accordion-title">{item.title}</span>
            <span
              className={`wc-accordion-icon ${isActive(index) ? 'wc-accordion-icon--rotated' : ''}`}
            >
              &#9660;
            </span>
          </button>
          <div
            className={`wc-accordion-content ${isActive(index) ? 'wc-accordion-content--open' : ''}`}
          >
            <div className="wc-accordion-content-inner">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

Accordion.displayName = 'Accordion'

export default Accordion