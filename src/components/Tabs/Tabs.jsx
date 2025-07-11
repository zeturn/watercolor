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
  
  // 统一使用原生 CSS 类而非 Tailwind 工具类
  const tabsClasses = [
    'wc-tabs',
    variant === 'pills' && 'wc-tabs--pills',
    variant === 'underline' && 'wc-tabs--underline',
    (variant === 'default' || !['pills', 'underline'].includes(variant)) && 'wc-tabs--default',
    className,
  ]
    .filter(Boolean)
    .join(' ')
  
  const getTabClasses = (index, disabled) => {
    const classes = ['wc-tab']
    if (activeIndex === index) classes.push('wc-tab--active')
    if (disabled) classes.push('opacity-50 cursor-not-allowed') // 额外语义化 class，可考虑移除
    return classes.join(' ')
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