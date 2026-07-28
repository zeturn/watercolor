import { createSignal, createEffect, createMemo, onMount, onCleanup, useId, Show, For, Index } from 'solid-js'

import './style.css'
import { buildAccordionClasses, toggleActiveItems } from './utils'

const Accordion = ({
  items = [],
  multiple = false,
  variant = 'default',
  onToggle,
  className = '',
  style = {},
  'aria-label': ariaLabel,
  ...props
}) => {
  const accordionId = useId()
  const [activeItems, setActiveItems] = createSignal([])

  // Build classes via shared util
  const accordionClasses = buildAccordionClasses(variant, className)

  const toggleItem = (index) => {
    if (items[index]?.disabled) return
    const newActiveItems = toggleActiveItems(activeItems, index, multiple)
    setActiveItems(newActiveItems)
    onToggle?.(index, newActiveItems.includes(index))
  }

  const isActive = (index) => activeItems.includes(index)

  return (
    <div
      class={accordionClasses}
      style={style}
      role="region"
      aria-label={ariaLabel || 'Accordion'}
      {...props}
    >
      {items.map((item, index) => (
        <div key={index} class="wc-accordion-item">
          <button
            class={`wc-accordion-header ${isActive(index) ? 'wc-accordion-header--active' : ''}`}
            onClick={() => toggleItem(index)}
            id={`${accordionId}-trigger-${index}`}
            disabled={item.disabled}
            aria-expanded={isActive(index)}
            aria-controls={`${accordionId}-panel-${index}`}
            type="button"
          >
            <span class="wc-accordion-title">{item.title}</span>
            <span
              class={`wc-accordion-icon ${isActive(index) ? 'wc-accordion-icon--rotated' : ''}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6,9 12,15 18,9" />
              </svg>
            </span>
          </button>
          <div
            id={`${accordionId}-panel-${index}`}
            class={`wc-accordion-content ${isActive(index) ? 'wc-accordion-content--open' : ''}`}
            aria-labelledby={`${accordionId}-trigger-${index}`}
            style={{ display: isActive(index) ? undefined : 'none' }}
          >
            <div class="wc-accordion-content-inner">
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
