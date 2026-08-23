import { mergeProps, Show } from 'solid-js'

import { Portal, useOverlayLayer } from '../../interactions'
import { useLocale } from '../../LocaleSolid.tsx'
import './style.css'

/**
 * SlideOver (Solid)
 * 侧滑面板，支持左右方向、宽度自定义。
 */
const SlideOver = (rawProps) => {
  const props = mergeProps({ open: false, placement: 'right', width: 400 }, rawProps)
  let panelRef = null
  const { messages } = useLocale()

  const handleClose = () => {
    props.onClose?.()
  }

  useOverlayLayer({
    open: () => props.open,
    elementRef: () => panelRef,
    modal: true,
    lockScroll: true,
    restoreFocus: true,
    initialFocus: true,
    closeOnEscape: true,
    closeOnPointerDownOutside: false,
    onEscapeKeyDown: handleClose,
    zIndex: 3000,
  })

  return (
    <Show when={props.open}>
      <Portal>
        <div class="wc-slideover-wrapper">
          <div class="wc-slideover-overlay" onClick={handleClose} />
          <div
            ref={(el) => { panelRef = el }}
            class={`wc-slideover-panel wc-slideover-${props.placement}`}
            style={{ width: typeof props.width === 'number' ? `${props.width}px` : props.width }}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
          >
            {props.header && <header class="wc-slideover-header">{props.header}</header>}
            <div class="wc-slideover-body">{props.children}</div>
            {props.footer && <footer class="wc-slideover-footer">{props.footer}</footer>}
            <button class="wc-slideover-close" type="button" onClick={handleClose} aria-label={messages.closeDialog}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
        </div>
      </Portal>
    </Show>
  )
}

export default SlideOver
