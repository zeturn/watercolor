import React, { useState, useEffect } from 'react'
import './style.css'

const Tabs = ({
  tabs = [],
  activeIndex: controlledActiveIndex,
  onChange,
  variant = 'default',
  children,
  className = '',
  ...props
}) => {
  const [internalActiveIndex, setInternalActiveIndex] = useState(controlledActiveIndex || 0)
  
  const isControlled = controlledActiveIndex !== undefined
  const activeIndex = isControlled ? controlledActiveIndex : internalActiveIndex
  
  useEffect(() => {
    if (isControlled) {
      setInternalActiveIndex(controlledActiveIndex)
    }
  }, [controlledActiveIndex, isControlled])
  
  const tabsClasses = [
    'wc-tabs',
    variant === 'pills' && 'bg-neutral-100 dark:bg-neutral-800 rounded-xl p-1',
    variant === 'underline' && 'bg-transparent border-b border-neutral-200 dark:border-neutral-700 p-0 space-x-0',
    className
  ].filter(Boolean).join(' ')
  
  const getTabClasses = (index, disabled) => {
    const baseClasses = 'wc-tab'
    const activeClass = activeIndex === index ? 'wc-tab--active' : ''
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : ''
    
    let variantClasses = ''
    if (variant === 'underline') {
      variantClasses = 'border-b-2 border-transparent rounded-none px-4 py-2 -mb-px'
      if (activeIndex === index) {
        variantClasses += ' border-primary-500 bg-transparent text-primary-600 dark:text-primary-400'
      }
    }
    
    return [baseClasses, activeClass, disabledClass, variantClasses].filter(Boolean).join(' ')
  }
  
  const handleTabClick = (index, tab) => {
    if (tab.disabled) return
    
    if (!isControlled) {
      setInternalActiveIndex(index)
    }
    
    if (onChange) {
      onChange(index, tab)
    }
  }
  
  const activeTab = tabs[activeIndex]
  
  return (
    <div className="wc-tabs-wrapper" {...props}>
      <div className={tabsClasses}>
        {tabs.map((tab, index) => (
          <button
            key={tab.key || index}
            className={getTabClasses(index, tab.disabled)}
            onClick={() => handleTabClick(index, tab)}
            disabled={tab.disabled}
            type="button"
          >
            {tab.title}
          </button>
        ))}
      </div>
      
      <div className="wc-tab-content mt-6">
        {typeof children === 'function' 
          ? children({ activeTab, activeIndex })
          : children
        }
      </div>
    </div>
  )
}

Tabs.displayName = 'Tabs'

export default Tabs 