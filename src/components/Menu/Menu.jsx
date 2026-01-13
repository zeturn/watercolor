import React, { useState, useRef, useEffect } from 'react'
import './style.css'
import { 
  getMenuClasses,
  getMenuMenuClasses,
  getMenuButtonClasses,
  getMenuItemClasses,
  getArrowClasses,
  handleMenuToggle,
  handleItemClick,
  createOutsideClickListener
} from './utils.js'

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
  const menuRef = useRef(null)
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

  const outsideClickListener = createOutsideClickListener((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false)
      onClose && onClose()
    }
  })

  useEffect(() => {
    if (isOpen) {
      outsideClickListener.add()
    } else {
      outsideClickListener.remove()
    }
    
    return () => outsideClickListener.remove()
  }, [isOpen])

  return (
    <div className={menuClasses} ref={menuRef} {...props} style={{ backgroundColor: 'var(--wc-bg-surface)', color: 'var(--wc-text-primary)' }}>
      <div
        className="wc-menu__trigger"
        onClick={handleToggle}
        ref={triggerRef}
      >
        {triggerContent || children || (
          <button className={buttonClasses}>
            {triggerText}
            <span className={arrowClasses}>▼</span>
          </button>
        )}
      </div>

      {isOpen && (
        <div className={panelClasses} style={menuStyles}>
          {menuContent || (
            variant === 'card' ? (
              <div className="wc-menu__card">
                {/* 左侧示意图区域 */}
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
                
                {/* 右侧列表区域 */}
                <div className="wc-menu__card-list">
                  {items.map((item, index) => {
                    if (item.divider) {
                      return <div key={item.key || index} className="wc-menu__divider" />
                    }
                    
                    const itemClasses = getMenuItemClasses(item).join(' ')
                    
                    return (
                      <div
                        key={item.key || index}
                        className={itemClasses}
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
                      </div>
                    )
                  })}
                </div>
              </div>
            ) : (
              items.map((item, index) => {
                if (item.divider) {
                  return <div key={item.key || index} className="wc-menu__divider" />
                }
                
                const itemClasses = getMenuItemClasses(item).join(' ')
                
                return (
                  <div
                    key={item.key || index}
                    className={itemClasses}
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
                  </div>
                )
              })
            )
          )}
        </div>
      )}
    </div>
  )
}

Menu.displayName = 'Menu'

export default Menu 