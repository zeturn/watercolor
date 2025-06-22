import React from 'react'
import { getBoxClasses, getBoxStyles } from './utils.js'
import './style.css'

/**
 * 通用布局组件 Box (React)
 * 和 Vue 版保持接口一致，尽量通过 style 而非 class 实现，保证灵活性
 */
export default function Box({
  component: Comp = 'div',
  children,
  className = '',
  // Spacing
  p, pt, pr, pb, pl, px, py,
  m, mt, mr, mb, ml, mx, my,
  // Flex & layout
  display,
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  gap,
  // Colors & border
  bgcolor,
  color,
  border,
  borderRadius,
  // Size
  width, height, minWidth, minHeight, maxWidth, maxHeight,
  style: styleProp = {},
  ...rest
}) {
  const boxClasses = getBoxClasses({
    display, flexDirection, justifyContent, alignItems, flexWrap, gap
  }).concat(className).filter(Boolean).join(' ')

  const boxStyles = {
    ...getBoxStyles({
      p, pt, pr, pb, pl, px, py,
      m, mt, mr, mb, ml, mx, my,
      display, flexDirection, justifyContent, alignItems, flexWrap, gap,
      bgcolor, color, border, borderRadius,
      width, height, minWidth, minHeight, maxWidth, maxHeight
    }),
    ...styleProp
  }

  return (
    <Comp className={boxClasses} style={boxStyles} {...rest}>
      {children}
    </Comp>
  )
}