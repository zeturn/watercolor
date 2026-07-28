import { createSignal, createEffect, createMemo, onMount, onCleanup, useId, Show, For, Index } from 'solid-js'

import { useLocale } from '../../LocaleSolid'
import './style.css'

const variants = {
  text: 'wc-skeleton--text',
  rectangular: 'wc-skeleton--rectangular',
  rounded: 'wc-skeleton--rounded',
  circular: 'wc-skeleton--circular'
}

const Skeleton = ({ animation = 'pulse', component: Component = 'div', height, width, variant = 'text', style = {}, className = '', ...rest }) => {
  const { messages } = useLocale()
  const classes = createMemo(() => {
    const cls = ['wc-skeleton', variants[variant] || variants.text]
    if (animation === 'pulse') cls.push('wc-skeleton--pulse')
    if (animation === 'wave') cls.push('wc-skeleton--wave')
    return cls.join(' ')
  }, [animation, variant])

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

  return <Component class={`${classes} ${className}`} style={sizeStyle} role="status" aria-live="polite" aria-label={messages.loading} aria-busy="true" {...rest} />
}

export default Skeleton
