import React, { useState, useRef, useEffect, useId } from 'react'
import { Portal, useFloatingPosition, useOverlayLayer } from '../../interactions.jsx'
import './style.css'

const HoverCard = ({
  triggerText = 'Hover me',
  cardData = {},
  variant = 'default', // default | outlined | filled | minimal
  size = 'md', // sm | md | lg
  cardSize = 'md', // sm | md | lg | xl
  position = 'top', // top | bottom | left | right
  delay = 300,
  hideDelay = 100,
  showArrow = false,
  disabled = false,
  onShow,
  onHide,
  onAction,
  className = '',
  style = {},
  children,
  card,
  ...props
}) => {
  const cardId = useId()
  const [visible, setVisible] = useState(false)
  const showTimer = useRef(null)
  const hideTimer = useRef(null)
  const cardRef = useRef(null)
  const triggerRef = useRef(null)
  const triggerId = `${cardId}-trigger`

  const clearTimers = () => {
    clearTimeout(showTimer.current)
    clearTimeout(hideTimer.current)
  }

  const showCard = () => {
    if (disabled) return
    clearTimers()
    showTimer.current = setTimeout(() => {
      setVisible(true)
      onShow?.()
    }, delay)
  }

  const hideCard = () => {
    if (disabled) return
    clearTimers()
    hideTimer.current = setTimeout(() => {
      setVisible(false)
      onHide?.()
    }, hideDelay)
  }

  useEffect(() => () => clearTimers(), [])

  const handleAction = (action) => {
    onAction?.(action)
    action?.onClick?.()
  }

  const wrapperClasses = [
    'hover-card-container',
    `hover-card-${variant}`,
    `hover-card-size-${size}`,
    disabled && 'hover-card-disabled',
    className
  ].filter(Boolean).join(' ')

  const popupClasses = [
    'hover-card-popup',
    `hover-card-position-${position}`,
    `hover-card-card-size-${cardSize}`
  ].join(' ')

  const resolvedPlacement = useFloatingPosition({
    open: visible,
    anchorRef: triggerRef,
    floatingRef: cardRef,
    placement: position,
    offset: 8,
  })

  useOverlayLayer({
    open: visible,
    elementRef: cardRef,
    refs: [triggerRef],
    closeOnEscape: true,
    closeOnPointerDownOutside: true,
    onEscapeKeyDown: () => {
      setVisible(false)
      onHide?.()
      triggerRef.current?.focus()
    },
    onPointerDownOutside: () => {
      setVisible(false)
      onHide?.()
    },
    zIndex: 1000,
  })

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={showCard}
      onMouseLeave={hideCard}
      onTouchStart={showCard}
      onTouchEnd={hideCard}
      onFocus={showCard}
      onBlur={hideCard}
      style={style}
      {...props}
    >
      <span
        ref={triggerRef}
        id={triggerId}
        className="hover-card-trigger"
        tabIndex={disabled ? -1 : 0}
        aria-describedby={visible ? cardId : undefined}
      >
        {children || triggerText}
      </span>

      {visible && (
        <Portal>
        <div
          ref={cardRef}
          id={cardId}
          className={`${popupClasses} hover-card-position-${resolvedPlacement}`.trim()}
          role="dialog"
          aria-labelledby={cardData.title ? `${cardId}-title` : undefined}
          onMouseEnter={showCard}
          onMouseLeave={hideCard}
        >
          {showArrow && <div className={`hover-card-arrow hover-card-arrow-${position}`} />}

          <div className="hover-card-content">
            {card ? (
              typeof card === 'function' ? card(cardData) : card
            ) : (
              <>
                {cardData.image && (
                  <div className="hover-card-image">
                    <img src={cardData.image} alt={cardData.imageAlt || cardData.title} />
                  </div>
                )}
                <div className="hover-card-body">
                  {cardData.title && <h3 id={`${cardId}-title`} className="hover-card-title">{cardData.title}</h3>}
                  {cardData.description && <p className="hover-card-description">{cardData.description}</p>}
                  {cardData.meta?.length && (
                    <div className="hover-card-meta">
                      {cardData.meta.map((m, i) => (
                        <span key={i} className="hover-card-meta-item">{m}</span>
                      ))}
                    </div>
                  )}
                  {cardData.actions?.length && (
                    <div className="hover-card-actions">
                      {cardData.actions.map((a, i) => (
                        <button
                          key={i}
                          className="hover-card-action-btn"
                          onClick={() => handleAction(a)}
                        >
                          {a.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
        </Portal>
      )}
    </div>
  )
}

HoverCard.displayName = 'HoverCard'

export default HoverCard
