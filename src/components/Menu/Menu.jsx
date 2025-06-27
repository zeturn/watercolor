import React, { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './style.css'
import { getMenuClasses, computeMenuPosition } from './utils.js'

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

  const menuClasses = getMenuClasses(elevation, className)
  const styles = computeMenuPosition(anchorEl, anchorOrigin, maxHeight)

  // Re-calculate on window resize/scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        const newStyles = computeMenuPosition(anchorEl, anchorOrigin, maxHeight)
        Object.assign(menuRef.current.style, newStyles)
      }
    }
    window.addEventListener('scroll', handleScroll, true)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll, true)
      window.removeEventListener('resize', handleScroll)
    }
  }, [anchorEl, anchorOrigin, maxHeight])

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