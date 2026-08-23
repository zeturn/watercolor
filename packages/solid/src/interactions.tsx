import { onMount, onCleanup, createSignal, createEffect, type JSX } from 'solid-js'
import { Portal as SolidPortal } from 'solid-js/web'
import { applyFloatingPosition, createOverlayLayer } from '@zeturn/watercolor-core'

/** Accepts plain values, signal accessors, or getters and returns the value. */
type MaybeAccessor<T> = T | (() => T)

function access<T>(value: MaybeAccessor<T>): T {
  return typeof value === 'function' ? (value as () => T)() : value
}

export function Portal(props: { children: JSX.Element; target?: string | HTMLElement | null }) {
  const mount = () => {
    if (typeof props.target === 'string') return document.querySelector(props.target) || document.body
    return props.target || document.body
  }
  return <SolidPortal mount={mount()}>{props.children}</SolidPortal>
}

export function useOverlayLayer(opts: {
  open?: MaybeAccessor<boolean>
  elementRef?: MaybeAccessor<any>
  refs?: MaybeAccessor<any[]>
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
      const open = access(opts.open)
      const element = access(opts.elementRef)
      if (open && element) {
        if (!layer) {
          layer = createOverlayLayer({
            element,
            refs: (access(opts.refs) || []).map((r) => access(r)).filter(Boolean),
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
  open?: MaybeAccessor<boolean>
  anchorRef?: MaybeAccessor<any>
  floatingRef?: MaybeAccessor<any>
  placement?: string
  offset?: number
  boundaryPadding?: number
}) {
  const [resolvedPlacement, setResolvedPlacement] = createSignal(opts.placement || 'bottom')

  onMount(() => {
    createEffect(() => {
      const open = access(opts.open)
      const anchor = access(opts.anchorRef)
      const floating = access(opts.floatingRef)
      if (!open || !anchor || !floating || typeof window === 'undefined') return undefined

      const updatePosition = () => {
        const position = applyFloatingPosition(anchor, floating, {
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
