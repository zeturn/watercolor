import React, { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

const Menu = ({
  open = false,
  anchorEl = null,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  transformOrigin = { vertical: 'top', horizontal: 'left' }, // 暂未使用
  elevation = 8,
  maxHeight = 'auto',
  onClose,
  children,
  className = ''
}) => {
  const menuRef = useRef(null)

  if (!open) return null

  const shadowMap = {
    0: 'shadow-none',
    1: 'shadow-sm',
    2: 'shadow',
    3: 'shadow-md',
    4: 'shadow-lg',
    6: 'shadow-xl',
    8: 'shadow-2xl',
    12: 'shadow-2xl',
    16: 'shadow-2xl',
    24: 'shadow-2xl'
  }
  const menuClasses = [
    'absolute bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 py-2 min-w-32 max-w-xs transition-all duration-150 origin-top-left',
    shadowMap[elevation] || shadowMap[8],
    className
  ].filter(Boolean).join(' ')

  const computeStyles = () => {
    if (!anchorEl) return { top: 0, left: 0 }
    const rect = anchorEl.getBoundingClientRect()
    const styles = {}
    // Vertical
    if (anchorOrigin.vertical === 'bottom') {
      styles.top = `${rect.bottom + window.scrollY}px`
    } else if (anchorOrigin.vertical === 'top') {
      styles.top = `${rect.top + window.scrollY}px`
    } else {
      styles.top = `${rect.top + rect.height / 2 + window.scrollY}px`
    }
    // Horizontal
    if (anchorOrigin.horizontal === 'left') {
      styles.left = `${rect.left + window.scrollX}px`
    } else if (anchorOrigin.horizontal === 'right') {
      styles.left = `${rect.right + window.scrollX}px`
    } else {
      styles.left = `${rect.left + rect.width / 2 + window.scrollX}px`
    }
    if (maxHeight !== 'auto') {
      styles.maxHeight = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight
      styles.overflowY = 'auto'
    }
    return styles
  }

  const styles = computeStyles()

  // Re-calculate on window resize/scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        Object.assign(menuRef.current.style, computeStyles())
      }
    }
    window.addEventListener('scroll', handleScroll, true)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll, true)
      window.removeEventListener('resize', handleScroll)
    }
  }, [anchorEl])

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black bg-opacity-25" onClick={onClose} />
      <div ref={menuRef} className={menuClasses} style={styles} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Menu