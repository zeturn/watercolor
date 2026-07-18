import React, { useEffect, useId, useRef, useState } from 'react'
import { Portal, useFloatingPosition, useOverlayLayer } from '../../interactions.jsx'
import './style.css'
import {
  getMenuClasses,
  getMenuMenuClasses,
  getMenuButtonClasses,
  getMenuItemClasses,
  getArrowClasses,
  handleMenuToggle,
  handleItemClick,
} from './utils.js'

const normalizePlacement = (placement) => placement.startsWith('top') ? 'top' : 'bottom'

const Menu = ({
  items = [],
  triggerText = '选择选项',
  placement = 'bottom-start',
  size = 'md',
  variant = 'default',
  disabled = false,
  trigger = 'click',
  illustration = '',
  illustrationAlt = '示意图',
  cardTitle = '',
  cardDescription = '',
  onSelect,
  onOpen,
  onClose,
  children,
  triggerContent,
  menuContent,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()
  const rootRef = useRef(null)
  const panelRef = useRef(null)
  const triggerRef = useRef(null)

  const menuClasses = getMenuClasses({ size, variant, disabled, className }).join(' ')
  const panelClasses = getMenuMenuClasses(placement, variant === 'card' ? 'wc-menu__menu--card' : '').join(' ')
  const buttonClasses = getMenuButtonClasses({ disabled }).join(' ')
  const arrowClasses = getArrowClasses(isOpen).join(' ')

  const menuStyles = variant === 'card' ? { minWidth: '320px', maxWidth: '450px' } : { minWidth: '120px' }

  const handleToggle = () => {
    handleMenuToggle(isOpen, disabled, setIsOpen, onOpen, onClose)
  }

  const handleItemSelect = (item, index) => {
    handleItemClick(item, index, onSelect, setIsOpen, onClose)
  }

  const closeMenu = () => {
    if (!isOpen) return
    setIsOpen(false)
    onClose?.()
  }

  const focusMenuItem = (target = 'first') => {
    const items = Array.from(panelRef.current?.querySelectorAll('[role="menuitem"]:not(:disabled)') || [])
    if (!items.length) return
    const activeIndex = items.indexOf(document.activeElement)
    let nextIndex = target === 'last' ? items.length - 1 : 0
    if (target === 'next') nextIndex = activeIndex < 0 ? 0 : (activeIndex + 1) % items.length
    if (target === 'previous') nextIndex = activeIndex <= 0 ? items.length - 1 : activeIndex - 1
    items[nextIndex]?.focus()
  }

  useEffect(() => {
    if (isOpen) {
      queueMicrotask(() => focusMenuItem('first'))
    }
  }, [isOpen])

  const resolvedPlacement = useFloatingPosition({
    open: isOpen,
    anchorRef: triggerRef,
    floatingRef: panelRef,
    placement: normalizePlacement(placement),
    offset: 6,
  })

  useOverlayLayer({
    open: isOpen,
    elementRef: panelRef,
    refs: [triggerRef],
    closeOnEscape: true,
    closeOnPointerDownOutside: true,
    onEscapeKeyDown: () => {
      closeMenu()
      triggerRef.current?.focus()
    },
    onPointerDownOutside: closeMenu,
    zIndex: 1000,
  })

  const handleTriggerKeyDown = (event) => {
    if (disabled) return
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (!isOpen) {
        setIsOpen(true)
        onOpen?.()
      } else {
        focusMenuItem('next')
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (!isOpen) {
        setIsOpen(true)
        onOpen?.()
        queueMicrotask(() => focusMenuItem('last'))
      } else {
        focusMenuItem('previous')
      }
    }
  }

  const handlePanelKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      focusMenuItem('next')
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      focusMenuItem('previous')
    } else if (event.key === 'Home') {
      event.preventDefault()
      focusMenuItem('first')
    } else if (event.key === 'End') {
      event.preventDefault()
      focusMenuItem('last')
    } else if (event.key === 'Tab') {
      closeMenu()
    }
  }

  const menuPanel = isOpen ? (
    <Portal>
      <div
        ref={panelRef}
        className={`${panelClasses} wc-menu__menu--resolved-${resolvedPlacement}`.trim()}
        id={menuId}
        style={menuStyles}
        role="menu"
        onKeyDown={handlePanelKeyDown}
      >
        {menuContent || (
          variant === 'card' ? (
            <div className="wc-menu__card">
              <div className="wc-menu__card-illustration">
                {illustration ? (
                  <img
                    src={illustration}
                    alt={illustrationAlt}
                    className="wc-menu__illustration-image"
                  />
                ) : (
                  <div className="wc-menu__illustration-placeholder">
                    <span>🎨</span>
                  </div>
                )}
                {(cardTitle || cardDescription) && (
                  <div className="wc-menu__card-info">
                    {cardTitle && <h4 className="wc-menu__card-title">{cardTitle}</h4>}
                    {cardDescription && <p className="wc-menu__card-description">{cardDescription}</p>}
                  </div>
                )}
              </div>

              <div className="wc-menu__card-list">
                {items.map((item, index) => {
                  if (item.divider) {
                    return <div key={item.key || index} className="wc-menu__divider" role="separator" />
                  }

                  const itemClasses = getMenuItemClasses(item).join(' ')

                  return (
                    <button
                      type="button"
                      role="menuitem"
                      key={item.key || index}
                      className={itemClasses}
                      disabled={item.disabled}
                      onClick={() => handleItemSelect(item, index)}
                    >
                      {item.icon && (
                        <span className="wc-menu__icon">
                          {item.icon}
                        </span>
                      )}
                      <span className="wc-menu__label">
                        {item.label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          ) : (
            items.map((item, index) => {
              if (item.divider) {
                return <div key={item.key || index} className="wc-menu__divider" role="separator" />
              }

              const itemClasses = getMenuItemClasses(item).join(' ')

              return (
                <button
                  type="button"
                  role="menuitem"
                  key={item.key || index}
                  className={itemClasses}
                  disabled={item.disabled}
                  onClick={() => handleItemSelect(item, index)}
                >
                  {item.icon && (
                    <span className="wc-menu__icon">
                      {item.icon}
                    </span>
                  )}
                  <span className="wc-menu__label">
                    {item.label}
                  </span>
                </button>
              )
            })
          )
        )}
      </div>
    </Portal>
  ) : null

  return (
    <div className={menuClasses} ref={rootRef} {...props}>
      <div
        className="wc-menu__trigger"
        onClick={handleToggle}
        onKeyDown={handleTriggerKeyDown}
        ref={triggerRef}
      >
        {triggerContent || children || (
          <button
            type="button"
            className={buttonClasses}
            disabled={disabled}
            aria-haspopup="menu"
            aria-expanded={isOpen}
            aria-controls={isOpen ? menuId : undefined}
          >
            {triggerText}
            <span className={arrowClasses}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6,9 12,15 18,9" />
              </svg>
            </span>
          </button>
        )}
      </div>

      {menuPanel}
    </div>
  )
}

Menu.displayName = 'Menu'

export default Menu
