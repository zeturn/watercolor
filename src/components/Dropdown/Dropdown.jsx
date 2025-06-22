import React, { useState, useRef, useEffect } from 'react'
import { 
  getDropdownClasses,
  getDropdownMenuClasses,
  getDropdownButtonClasses,
  getDropdownItemClasses,
  getArrowClasses,
  handleDropdownToggle,
  handleItemClick,
  createOutsideClickListener
} from './utils.js'
import './style.css'

const Dropdown = ({
  items = [],
  triggerText = '选择选项',
  placement = 'bottom-start',
  size = 'md',
  variant = 'default',
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

  const dropdownClasses = getDropdownClasses({ size, variant, disabled, className }).join(' ')
  const menuClasses = getDropdownMenuClasses(placement).join(' ')
  const buttonClasses = getDropdownButtonClasses({ disabled }).join(' ')
  const arrowClasses = getArrowClasses(isOpen).join(' ')

  const handleToggle = () => {
    handleDropdownToggle(isOpen, disabled, setIsOpen, onOpen, onClose)
  }

  const handleItemSelect = (item, index) => {
    handleItemClick(item, index, onSelect, setIsOpen, onClose)
  }

  const outsideClickListener = createOutsideClickListener((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
    <div className={dropdownClasses} ref={dropdownRef} {...props}>
      <div
        className="wc-dropdown__trigger"
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
        <div className={menuClasses}>
          {dropdownContent || (
            items.map((item, index) => {
              if (item.divider) {
                return <div key={item.key || index} className="wc-dropdown__divider" />
              }
              
              const itemClasses = getDropdownItemClasses(item).join(' ')
              
              return (
                <div
                  key={item.key || index}
                  className={itemClasses}
                  onClick={() => handleItemSelect(item, index)}
                >
                  {item.icon && (
                    <span className="wc-dropdown__icon">
                      {item.icon}
                    </span>
                  )}
                  <span className="wc-dropdown__label">
                    {item.label}
                  </span>
                </div>
              )
            })
          )}
        </div>
      )}
    </div>
  )
}

Dropdown.displayName = 'Dropdown'

export default Dropdown 