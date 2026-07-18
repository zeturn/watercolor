import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { applyFloatingPosition, createOverlayLayer } from '@zeturn/watercolor-core'

const useIsomorphicLayoutEffect = typeof document === 'undefined' ? useEffect : useLayoutEffect

export function Portal({ children, target }) {
  if (typeof document === 'undefined') return null

  const targetElement = typeof target === 'string' ? document.querySelector(target) : target
  return createPortal(children, targetElement || document.body)
}

export function useOverlayLayer({
  open,
  elementRef,
  refs = [],
  modal = false,
  lockScroll = false,
  restoreFocus = true,
  initialFocus = false,
  closeOnEscape = true,
  closeOnPointerDownOutside = true,
  onEscapeKeyDown,
  onPointerDownOutside,
  zIndex,
}) {
  const layerRef = useRef(null)

  useEffect(() => {
    if (!open || !elementRef.current || typeof document === 'undefined') return undefined

    layerRef.current = createOverlayLayer({
      element: elementRef.current,
      refs: refs.map((ref) => ref?.current || ref).filter(Boolean),
      modal,
      lockScroll,
      restoreFocus,
      initialFocus,
      closeOnEscape,
      closeOnPointerDownOutside,
      onEscapeKeyDown,
      onPointerDownOutside,
      zIndex,
    })

    return () => {
      layerRef.current?.destroy()
      layerRef.current = null
    }
  }, [
    open,
    elementRef,
    modal,
    lockScroll,
    restoreFocus,
    initialFocus,
    closeOnEscape,
    closeOnPointerDownOutside,
    onEscapeKeyDown,
    onPointerDownOutside,
    zIndex,
  ])

  useEffect(() => {
    layerRef.current?.update({
      refs: refs.map((ref) => ref?.current || ref).filter(Boolean),
      closeOnEscape,
      closeOnPointerDownOutside,
      onEscapeKeyDown,
      onPointerDownOutside,
    })
  }, [refs, closeOnEscape, closeOnPointerDownOutside, onEscapeKeyDown, onPointerDownOutside])

  return layerRef
}

export function useFloatingPosition({
  open,
  anchorRef,
  floatingRef,
  placement = 'bottom',
  offset = 8,
  boundaryPadding = 8,
}) {
  const [resolvedPlacement, setResolvedPlacement] = useState(placement)

  useIsomorphicLayoutEffect(() => {
    if (!open || !anchorRef.current || !floatingRef.current || typeof window === 'undefined') return undefined

    const updatePosition = () => {
      const position = applyFloatingPosition(anchorRef.current, floatingRef.current, {
        placement,
        offset,
        boundaryPadding,
      })
      setResolvedPlacement(position.placement)
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)

    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
    }
  }, [open, anchorRef, floatingRef, placement, offset, boundaryPadding])

  return resolvedPlacement
}
