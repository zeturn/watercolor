import React from 'react'

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
  // Convert spacing numbers to rem like Vue version
  const spacingMap = { 0: '0', 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem', 5: '1.25rem', 6: '1.5rem', 8: '2rem', 10: '2.5rem', 12: '3rem', 16: '4rem', 20: '5rem', 24: '6rem' }
  const sizeVal = (v) => (typeof v === 'number' ? `${v}px` : v)

  const style = {
    // Spacing
    ...(p !== undefined && { padding: spacingMap[p] || sizeVal(p) }),
    ...(pt !== undefined && { paddingTop: spacingMap[pt] || sizeVal(pt) }),
    ...(pr !== undefined && { paddingRight: spacingMap[pr] || sizeVal(pr) }),
    ...(pb !== undefined && { paddingBottom: spacingMap[pb] || sizeVal(pb) }),
    ...(pl !== undefined && { paddingLeft: spacingMap[pl] || sizeVal(pl) }),
    ...(px !== undefined && { paddingLeft: spacingMap[px] || sizeVal(px), paddingRight: spacingMap[px] || sizeVal(px) }),
    ...(py !== undefined && { paddingTop: spacingMap[py] || sizeVal(py), paddingBottom: spacingMap[py] || sizeVal(py) }),
    ...(m !== undefined && { margin: spacingMap[m] || sizeVal(m) }),
    ...(mt !== undefined && { marginTop: spacingMap[mt] || sizeVal(mt) }),
    ...(mr !== undefined && { marginRight: spacingMap[mr] || sizeVal(mr) }),
    ...(mb !== undefined && { marginBottom: spacingMap[mb] || sizeVal(mb) }),
    ...(ml !== undefined && { marginLeft: spacingMap[ml] || sizeVal(ml) }),
    ...(mx !== undefined && { marginLeft: spacingMap[mx] || sizeVal(mx), marginRight: spacingMap[mx] || sizeVal(mx) }),
    ...(my !== undefined && { marginTop: spacingMap[my] || sizeVal(my), marginBottom: spacingMap[my] || sizeVal(my) }),
    // Layout
    ...(display && { display }),
    ...(flexDirection && { flexDirection }),
    ...(justifyContent && { justifyContent }),
    ...(alignItems && { alignItems }),
    ...(flexWrap && { flexWrap }),
    ...(gap !== undefined && { gap: sizeVal(gap) }),
    // Color & border
    ...(bgcolor && { backgroundColor: bgcolor }),
    ...(color && { color }),
    ...(border && { border }),
    ...(borderRadius !== undefined && { borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius }),
    // Size
    ...(width !== undefined && { width: sizeVal(width) }),
    ...(height !== undefined && { height: sizeVal(height) }),
    ...(minWidth !== undefined && { minWidth: sizeVal(minWidth) }),
    ...(minHeight !== undefined && { minHeight: sizeVal(minHeight) }),
    ...(maxWidth !== undefined && { maxWidth: sizeVal(maxWidth) }),
    ...(maxHeight !== undefined && { maxHeight: sizeVal(maxHeight) }),
    ...styleProp,
  }

  return (
    <Comp className={className} style={style} {...rest}>
      {children}
    </Comp>
  )
}