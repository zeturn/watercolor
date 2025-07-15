import React, { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './style.css'
import { getMenuClasses, computeMenuPosition } from './utils.js'

const DEFAULT_ANCHOR_ORIGIN = { vertical: 'bottom', horizontal: 'left' }

const Menu = ({
  // 默认使用 inline 模式，符合侧边栏菜单使用场景
  variant = 'inline',
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

  // inline 模式始终渲染，不受 open 控制
  if (variant === 'inline') {
    const inlineClasses = getMenuClasses(elevation, className, 'inline')
    return (
      <nav ref={menuRef} className={inlineClasses}>
        {children}
      </nav>
    )
  }

  // popover 模式遵循 open 状态
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
    <div className="wc-menu__container">
      <div className="wc-menu__backdrop" onClick={onClose} />
      <div ref={menuRef} className={menuClasses} style={styles} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Menu 