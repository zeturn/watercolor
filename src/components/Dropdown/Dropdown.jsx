import React, { useState, useRef, useEffect } from 'react'

const Dropdown = ({
  items = [],
  triggerText = '选择选项',
  placement = 'bottom-start',
  disabled = false,
  trigger = 'click',
  onSelect,
  onOpen,
  onClose,
  children,
  triggerContent,
  dropdownContent,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const triggerRef = useRef(null)

  const dropdownClasses = [
    'wc-dropdown__menu',
    `wc-dropdown__menu--${placement}`,
    className
  ].filter(Boolean).join(' ')

  const handleToggle = () => {
    if (disabled) return
    
    setIsOpen(!isOpen)
    
    if (!isOpen) {
      onOpen && onOpen()
    } else {
      onClose && onClose()
    }
  }

  const handleItemClick = (item, index) => {
    if (item.disabled || item.divider) return
    
    onSelect && onSelect(item, index)
    setIsOpen(false)
    onClose && onClose()
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
      onClose && onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div 
      className="wc-dropdown" 
      ref={dropdownRef}
      style={{
        position: 'relative',
        display: 'inline-block'
      }}
      {...props}
    >
      <div
        className="wc-dropdown__trigger"
        onClick={handleToggle}
        ref={triggerRef}
        style={{ cursor: 'pointer' }}
      >
        {triggerContent || children || (
          <button 
            className="wc-dropdown__button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 16px',
              backgroundColor: '#ffffff',
              border: '1px solid #e4e4e7',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#3f3f46',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              minWidth: '120px'
            }}
          >
            {triggerText}
            <span 
              style={{
                fontSize: '12px',
                transition: 'transform 0.2s ease',
                marginLeft: '8px',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
              }}
            >
              ▼
            </span>
          </button>
        )}
      </div>

      {isOpen && (
        <div
          className={dropdownClasses}
          style={{
            position: 'absolute',
            zIndex: 1000,
            backgroundColor: '#ffffff',
            border: '1px solid #e4e4e7',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            padding: '4px 0',
            minWidth: '120px',
            top: placement.startsWith('bottom') ? '100%' : 'auto',
            bottom: placement.startsWith('top') ? '100%' : 'auto',
            left: placement.endsWith('start') ? 0 : 'auto',
            right: placement.endsWith('end') ? 0 : 'auto',
            marginTop: placement.startsWith('bottom') ? '4px' : 0,
            marginBottom: placement.startsWith('top') ? '4px' : 0
          }}
        >
          {dropdownContent || (
            items.map((item, index) => (
              <div
                key={item.key || index}
                onClick={() => handleItemClick(item, index)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: item.divider ? '0' : '8px 16px',
                  fontSize: '14px',
                  color: item.disabled ? 'rgba(63, 63, 70, 0.5)' : '#3f3f46',
                  cursor: item.disabled || item.divider ? 'default' : 'pointer',
                  transition: 'background-color 0.2s ease',
                  height: item.divider ? '1px' : 'auto',
                  margin: item.divider ? '4px 0' : '0',
                  backgroundColor: item.divider ? '#e4e4e7' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!item.disabled && !item.divider) {
                    e.target.style.backgroundColor = '#f4f4f5'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.disabled && !item.divider) {
                    e.target.style.backgroundColor = 'transparent'
                  }
                }}
              >
                {!item.divider && (
                  <>
                    {item.icon && (
                      <span style={{ marginRight: '8px', fontSize: '16px' }}>
                        {item.icon}
                      </span>
                    )}
                    <span style={{ flex: 1 }}>
                      {item.label}
                    </span>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

Dropdown.displayName = 'Dropdown'

export default Dropdown 