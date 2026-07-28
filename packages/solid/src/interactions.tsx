import { onMount, onCleanup, createSignal, createEffect, type JSX } from 'solid-js'
import { Portal as SolidPortal } from 'solid-js/web'
import { applyFloatingPosition, createOverlayLayer } from '@zeturn/watercolor-core'

export function Portal(props: { children: JSX.Element; target?: string | HTMLElement | null }) {
  const mount = () => {
    if (typeof props.target === 'string') return document.querySelector(props.target) || document.body
    return props.target || document.body
  }
  return <SolidPortal mount={mount()}>{props.children}</SolidPortal>
}

export function useOverlayLayer(opts: {
  open?: boolean
  elementRef?: any
  refs?: any[]
  modal?: boolean
  lockScroll?: boolean
  restoreFocus?: boolean
  initialFocus?: boolean
  closeOnEscape?: boolean
  closeOnPointerDownOutside?: boolean
  onEscapeKeyDown?: (e: any) => void
  onPointerDownOutside?: (e: any) => void
  zIndex?: number
}) {
  let layer: any = null

  onMount(() => {
    createEffect(() => {
      const open = opts.open
      if (open) {
        if (!layer) {
          layer = createOverlayLayer({
            element: opts.elementRef,
            refs: (opts.refs || []).map((r) => r).filter(Boolean),
            modal: opts.modal,
            lockScroll: opts.lockScroll,
            restoreFocus: opts.restoreFocus,
            initialFocus: opts.initialFocus,
            closeOnEscape: opts.closeOnEscape,
            closeOnPointerDownOutside: opts.closeOnPointerDownOutside,
            onEscapeKeyDown: opts.onEscapeKeyDown,
            onPointerDownOutside: opts.onPointerDownOutside,
            zIndex: opts.zIndex,
          })
        }
      } else if (layer) {
        layer.destroy()
        layer = null
      }
    })
  })

  onCleanup(() => {
    layer?.destroy()
    layer = null
  })

  return layer
}

export function useFloatingPosition(opts: {
  open?: boolean
  anchorRef?: any
  floatingRef?: any
  placement?: string
  offset?: number
  boundaryPadding?: number
}) {
  const [resolvedPlacement, setResolvedPlacement] = createSignal(opts.placement || 'bottom')

  onMount(() => {
    createEffect(() => {
      if (!opts.open || !opts.anchorRef || !opts.floatingRef || typeof window === 'undefined') return undefined

      const updatePosition = () => {
        const position = applyFloatingPosition(opts.anchorRef, opts.floatingRef, {
          placement: opts.placement as any,
          offset: opts.offset,
          boundaryPadding: opts.boundaryPadding,
        })
        setResolvedPlacement(position.placement)
      }

      updatePosition()
      window.addEventListener('resize', updatePosition)
      window.addEventListener('scroll', updatePosition, true)

      onCleanup(() => {
        window.removeEventListener('resize', updatePosition)
        window.removeEventListener('scroll', updatePosition, true)
      })
    })
  })

  return resolvedPlacement
}
