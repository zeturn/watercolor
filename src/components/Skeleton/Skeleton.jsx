import React, { useMemo, useEffect } from 'react'
import './style.css'

const variants = {
  text: 'wc-skeleton--text',
  rectangular: 'wc-skeleton--rectangular',
  rounded: 'wc-skeleton--rounded',
  circular: 'wc-skeleton--circular'
}

const Skeleton = ({ animation = 'pulse', component: Component = 'div', height, width, variant = 'text', style = {}, className = '', ...rest }) => {
  const classes = useMemo(() => {
    let cls = ['wc-skeleton', variants[variant] || variants.text]
    if (animation === 'pulse') cls.push('wc-skeleton--pulse')
    if (animation === 'wave') cls.push('wc-skeleton--wave')
    return cls.join(' ')
  }, [animation, variant])

  useEffect(() => {
    // 注入样式, 若已存在则跳过
    if (!document.getElementById('wc-skeleton-style')) {
      const styleEl = document.createElement('style')
      styleEl.id = 'wc-skeleton-style'
      styleEl.innerHTML = `
      .wc-skeleton{background-color:var(--wc-neutral-200);display:block;position:relative;overflow:hidden;}
      .wc-skeleton--text{border-radius:4px;}
      .wc-skeleton--rectangular{border-radius:4px;}
      .wc-skeleton--rounded{border-radius:8px;}
      .wc-skeleton--circular{border-radius:50%;}
      .wc-skeleton--pulse{animation:wc-skeleton-pulse 1.5s ease-in-out infinite;}
      @keyframes wc-skeleton-pulse{0%,100%{opacity:1;}50%{opacity:0.4;}}
      .wc-skeleton--wave::after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background:linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent);animation:wc-skeleton-wave 1.6s linear infinite;}
      @keyframes wc-skeleton-wave{0%{transform:translateX(-100%);}50%{transform:translateX(100%);}100%{transform:translateX(100%);}}
      .dark .wc-skeleton{background-color:var(--wc-neutral-700);}
      `
      document.head.appendChild(styleEl)
    }
  }, [])

  const sizeStyle = { ...style }
  if (width !== undefined) sizeStyle.width = typeof width === 'number' ? `${width}px` : width
  if (height !== undefined) sizeStyle.height = typeof height === 'number' ? `${height}px` : height
  if (!width && !height) {
    if (variant === 'circular') {
      sizeStyle.width = '40px'
      sizeStyle.height = '40px'
    } else if (variant === 'text') {
      sizeStyle.width = '100%'
      sizeStyle.height = '16px'
    } else {
      sizeStyle.width = '100%'
      sizeStyle.height = '128px'
    }
  }

  return <Component className={`${classes} ${className}`} style={sizeStyle} role="status" aria-live="polite" {...rest} />
}

export default Skeleton