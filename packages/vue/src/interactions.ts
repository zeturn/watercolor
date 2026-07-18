import { nextTick, onBeforeUnmount, ref, type Ref, watch } from 'vue'
import { applyFloatingPosition, createOverlayLayer, type OverlayLayer, type WatercolorPlacement } from '@zeturn/watercolor-core'

export const resolveTeleportTarget = (target?: string | HTMLElement | null): string | HTMLElement => {
  if (!target) return 'body'
  return target
}

export const useOverlayLayer = (options: {
  open: Ref<boolean>
  elementRef: Ref<HTMLElement | null>
  refs?: Array<Ref<HTMLElement | null>>
  modal?: boolean
  lockScroll?: boolean
  restoreFocus?: boolean
  initialFocus?: boolean | HTMLElement | null
  closeOnEscape?: boolean
  closeOnPointerDownOutside?: boolean
  onEscapeKeyDown?: (event: KeyboardEvent) => void
  onPointerDownOutside?: (event: PointerEvent | MouseEvent) => void
  zIndex?: number
}) => {
  let layer: OverlayLayer | null = null
  let pendingTimer: ReturnType<typeof setTimeout> | null = null

  const destroy = () => {
    if (pendingTimer) {
      clearTimeout(pendingTimer)
      pendingTimer = null
    }
    layer?.destroy()
    layer = null
  }

  watch([options.open, options.elementRef], async ([open]) => {
    destroy()
    if (!open) return
    await nextTick()

    const register = (attempt = 0) => {
      const element = options.elementRef.value
      if (!element) {
        if (attempt < 5) {
          pendingTimer = setTimeout(() => register(attempt + 1), 0)
        }
        return
      }

      layer = createOverlayLayer({
        element,
        refs: (options.refs || []).map((item) => item.value).filter(Boolean),
        modal: options.modal,
        lockScroll: options.lockScroll,
        restoreFocus: options.restoreFocus,
        initialFocus: options.initialFocus,
        closeOnEscape: options.closeOnEscape,
        closeOnPointerDownOutside: options.closeOnPointerDownOutside,
        onEscapeKeyDown: options.onEscapeKeyDown,
        onPointerDownOutside: options.onPointerDownOutside,
        zIndex: options.zIndex,
      })
    }

    register()
  }, { immediate: true, flush: 'post' })

  onBeforeUnmount(destroy)

  return {
    destroy,
  }
}

export const useFloatingPosition = (options: {
  open: Ref<boolean>
  anchorRef: Ref<HTMLElement | null>
  floatingRef: Ref<HTMLElement | null>
  placement?: Ref<WatercolorPlacement>
  offset?: Ref<number>
  boundaryPadding?: Ref<number>
}) => {
  const resolvedPlacement = ref<WatercolorPlacement>(options.placement?.value || 'bottom')

  const update = () => {
    const anchor = options.anchorRef.value
    const floating = options.floatingRef.value
    if (!options.open.value || !anchor || !floating) return

    const position = applyFloatingPosition(anchor, floating, {
      placement: options.placement?.value || 'bottom',
      offset: options.offset?.value ?? 8,
      boundaryPadding: options.boundaryPadding?.value ?? 8,
    })
    resolvedPlacement.value = position.placement
  }

  watch(options.open, async (open, _previousOpen, onCleanup) => {
    if (!open || typeof window === 'undefined') return
    await nextTick()
    update()
    window.addEventListener('resize', update)
    window.addEventListener('scroll', update, true)
    onCleanup(() => {
      window.removeEventListener('resize', update)
      window.removeEventListener('scroll', update, true)
    })
  }, { immediate: true, flush: 'post' })

  onBeforeUnmount(() => {
    if (typeof window === 'undefined') return
    window.removeEventListener('resize', update)
    window.removeEventListener('scroll', update, true)
  })

  watch([
    options.placement || ref('bottom' as WatercolorPlacement),
    options.offset || ref(8),
    options.boundaryPadding || ref(8),
  ], async () => {
    await nextTick()
    update()
  })

  return {
    resolvedPlacement,
    update,
  }
}
