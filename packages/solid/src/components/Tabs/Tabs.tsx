import { createSignal, createEffect, createMemo, onMount, onCleanup, useId, Show, For, Index } from 'solid-js'

import './style.css'
import { useLocale } from '../../LocaleSolid.tsx'

const Tabs = ({
  tabs = [],
  activeIndex: controlledActiveIndex,
  onChange,
  variant = 'default',
  children,
  className = '',
  ...props
}) => {
  const tabsId = useId()
  const { messages } = useLocale()
  const [internalActiveIndex, setInternalActiveIndex] = createSignal(controlledActiveIndex || 0)
  
  const isControlled = controlledActiveIndex !== undefined
  const activeIndex = isControlled ? controlledActiveIndex : internalActiveIndex
  
  createEffect(() => {
    if (isControlled) {
      setInternalActiveIndex(controlledActiveIndex)
    }
  }, [controlledActiveIndex, isControlled])
  
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

  const handleTabKeyDown = (event, index) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return

    event.preventDefault()
    const enabledIndexes = tabs
      .map((tab, tabIndex) => (!tab.disabled ? tabIndex : -1))
      .filter((tabIndex) => tabIndex >= 0)
    if (!enabledIndexes.length) return

    const position = enabledIndexes.indexOf(index)
    let nextIndex
    if (event.key === 'Home') nextIndex = enabledIndexes[0]
    else if (event.key === 'End') nextIndex = enabledIndexes[enabledIndexes.length - 1]
    else if (event.key === 'ArrowRight') nextIndex = enabledIndexes[(position + 1) % enabledIndexes.length]
    else nextIndex = enabledIndexes[(position - 1 + enabledIndexes.length) % enabledIndexes.length]

    handleTabClick(nextIndex, tabs[nextIndex])
    event.currentTarget.parentElement?.querySelectorAll('[role="tab"]')[nextIndex]?.focus()
  }
  
  return (
    <div class="wc-tabs-wrapper" {...props}>
      <div class={tabsClasses} role="tablist" aria-label={messages.tabList}>
        {tabs.map((tab, index) => (
          <button
            key={tab.key || index}
            class={getTabClasses(index, tab.disabled)}
            onClick={() => handleTabClick(index, tab)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
            disabled={tab.disabled}
            id={`${tabsId}-tab-${index}`}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`${tabsId}-panel`}
            tabIndex={activeIndex === index ? 0 : -1}
            type="button"
          >
            {tab.title}
          </button>
        ))}
      </div>
      
      <div
        id={`${tabsId}-panel`}
        class="wc-tab-content"
        role="tabpanel"
        aria-labelledby={`${tabsId}-tab-${activeIndex}`}
      >
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
