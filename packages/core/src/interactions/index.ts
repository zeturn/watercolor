export type WatercolorSide = 'top' | 'bottom' | 'left' | 'right'
export type WatercolorAlignment = 'start' | 'center' | 'end'
export type WatercolorPlacement =
  | WatercolorSide
  | `${WatercolorSide}-start`
  | `${WatercolorSide}-end`

export interface FloatingPositionOptions {
  placement?: WatercolorPlacement
  offset?: number
  boundaryPadding?: number
}

export interface FloatingPosition {
  top: number
  left: number
  placement: WatercolorPlacement
}

export interface OverlayLayerOptions {
  element: HTMLElement
  refs?: Array<HTMLElement | null | undefined>
  modal?: boolean
  lockScroll?: boolean
  restoreFocus?: boolean
  initialFocus?: boolean | HTMLElement | null
  closeOnEscape?: boolean
  closeOnPointerDownOutside?: boolean
  onEscapeKeyDown?: (event: KeyboardEvent) => void
  onPointerDownOutside?: (event: PointerEvent | MouseEvent) => void
  zIndex?: number
}

export interface OverlayLayer {
  id: number
  zIndex: number
  update: (options: Partial<OverlayLayerOptions>) => void
  destroy: () => void
}

const DEFAULT_Z_INDEX = 1000
const Z_INDEX_STEP = 10

let nextOverlayId = 1
const overlayStack: InternalLayer[] = []
const scrollLocks = new WeakMap<Document, ScrollLockState>()

interface InternalLayer extends OverlayLayerOptions {
  id: number
  zIndex: number
  ownerDocument: Document
  previousActiveElement: Element | null
  focusTrapCleanup?: () => void
  scrollUnlock?: () => void
  restoreFocus?: boolean
}

interface ScrollLockState {
  count: number
  overflow: string
}

const canUseDOM = () => typeof document !== 'undefined'

export const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const selector = [
    'a[href]',
    'area[href]',
    'button:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'iframe',
    'object',
    'embed',
    '[contenteditable="true"]',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',')

  return Array.from(container.querySelectorAll<HTMLElement>(selector)).filter((element) => {
    const style = element.ownerDocument.defaultView?.getComputedStyle(element)
    return !element.hasAttribute('disabled') && element.tabIndex !== -1 && style?.visibility !== 'hidden' && style?.display !== 'none'
  })
}

export const focusFirstElement = (container: HTMLElement): void => {
  const focusable = getFocusableElements(container)
  ;(focusable[0] || container).focus?.()
}

export const restoreFocus = (target: Element | null | undefined): void => {
  if (target && target instanceof HTMLElement && typeof target.focus === 'function' && target.isConnected) {
    target.focus()
  }
}

export const createFocusTrap = (
  container: HTMLElement,
  options: { initialFocus?: boolean | HTMLElement | null } = {}
): (() => void) => {
  const ownerDocument = container.ownerDocument

  const focusInitialElement = () => {
    const explicit = options.initialFocus instanceof HTMLElement ? options.initialFocus : null
    if (explicit?.isConnected) {
      explicit.focus()
      return
    }
    if (options.initialFocus !== false) {
      focusFirstElement(container)
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return
    const focusable = getFocusableElements(container)
    if (focusable.length === 0) {
      event.preventDefault()
      container.focus()
      return
    }

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const activeElement = ownerDocument.activeElement

    if (event.shiftKey && activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  ownerDocument.addEventListener('keydown', handleKeyDown)
  queueMicrotask(focusInitialElement)

  return () => {
    ownerDocument.removeEventListener('keydown', handleKeyDown)
  }
}

export const lockDocumentScroll = (ownerDocument: Document = document): (() => void) => {
  const current = scrollLocks.get(ownerDocument)
  if (current) {
    current.count += 1
  } else {
    scrollLocks.set(ownerDocument, {
      count: 1,
      overflow: ownerDocument.body.style.overflow,
    })
    ownerDocument.body.style.overflow = 'hidden'
  }

  let released = false
  return () => {
    if (released) return
    released = true

    const lock = scrollLocks.get(ownerDocument)
    if (!lock) return

    lock.count -= 1
    if (lock.count <= 0) {
      ownerDocument.body.style.overflow = lock.overflow
      scrollLocks.delete(ownerDocument)
    }
  }
}

const containsTarget = (layer: InternalLayer, target: EventTarget | null): boolean => {
  if (!(target instanceof Node)) return false
  const refs = [layer.element, ...(layer.refs || [])].filter(Boolean) as HTMLElement[]
  return refs.some((ref) => ref.contains(target))
}

const getTopmostLayer = (ownerDocument: Document): InternalLayer | undefined => {
  pruneDisconnectedLayers(ownerDocument)
  return [...overlayStack].reverse().find((layer) => layer.ownerDocument === ownerDocument)
}

const cleanupLayer = (layer: InternalLayer, options: { restoreFocus?: boolean } = {}) => {
  layer.focusTrapCleanup?.()
  layer.scrollUnlock?.()
  if (options.restoreFocus && layer.restoreFocus !== false) restoreFocus(layer.previousActiveElement)
}

const pruneDisconnectedLayers = (ownerDocument: Document) => {
  for (let index = overlayStack.length - 1; index >= 0; index -= 1) {
    const layer = overlayStack[index]
    if (layer.ownerDocument === ownerDocument && !layer.element.isConnected) {
      overlayStack.splice(index, 1)
      cleanupLayer(layer, { restoreFocus: false })
    }
  }
}

const syncDocumentListeners = (ownerDocument: Document) => {
  const anyLayer = overlayStack.some((layer) => layer.ownerDocument === ownerDocument)
  const docWithFlag = ownerDocument as Document & { __watercolorOverlayListeners?: boolean }

  if (anyLayer && !docWithFlag.__watercolorOverlayListeners) {
    ownerDocument.addEventListener('keydown', handleDocumentKeyDown, true)
    ownerDocument.addEventListener('pointerdown', handleDocumentPointerDown, true)
    ownerDocument.addEventListener('mousedown', handleDocumentPointerDown, true)
    docWithFlag.__watercolorOverlayListeners = true
  }

  if (!anyLayer && docWithFlag.__watercolorOverlayListeners) {
    ownerDocument.removeEventListener('keydown', handleDocumentKeyDown, true)
    ownerDocument.removeEventListener('pointerdown', handleDocumentPointerDown, true)
    ownerDocument.removeEventListener('mousedown', handleDocumentPointerDown, true)
    docWithFlag.__watercolorOverlayListeners = false
  }
}

const getEventDocument = (event: Event): Document => {
  if (event.target instanceof Node) {
    return event.target.ownerDocument || document
  }
  return document
}

const handleDocumentKeyDown = (event: KeyboardEvent) => {
  if (event.key !== 'Escape') return
  const layer = getTopmostLayer(getEventDocument(event))
  if (!layer || layer.closeOnEscape === false) return
  layer.onEscapeKeyDown?.(event)
}

const handleDocumentPointerDown = (event: PointerEvent | MouseEvent) => {
  const ownerDocument = getEventDocument(event)
  const layer = getTopmostLayer(ownerDocument)
  if (!layer || layer.closeOnPointerDownOutside === false) return
  if (containsTarget(layer, event.target)) return
  layer.onPointerDownOutside?.(event)
}

export const createOverlayLayer = (options: OverlayLayerOptions): OverlayLayer => {
  if (!canUseDOM()) {
    return { id: 0, zIndex: options.zIndex ?? DEFAULT_Z_INDEX, update: () => {}, destroy: () => {} }
  }

  const ownerDocument = options.element.ownerDocument
  pruneDisconnectedLayers(ownerDocument)
  const zIndex = options.zIndex ?? DEFAULT_Z_INDEX + overlayStack.length * Z_INDEX_STEP
  const layer: InternalLayer = {
    ...options,
    id: nextOverlayId++,
    zIndex,
    ownerDocument,
    previousActiveElement: ownerDocument.activeElement,
  }

  if (options.lockScroll) {
    layer.scrollUnlock = lockDocumentScroll(ownerDocument)
  }

  if (options.modal) {
    layer.focusTrapCleanup = createFocusTrap(options.element, { initialFocus: options.initialFocus })
  } else if (options.initialFocus) {
    queueMicrotask(() => focusFirstElement(options.element))
  }

  overlayStack.push(layer)
  syncDocumentListeners(ownerDocument)

  return {
    id: layer.id,
    zIndex,
    update(nextOptions) {
      Object.assign(layer, nextOptions)
    },
    destroy() {
      const index = overlayStack.findIndex((item) => item.id === layer.id)
      if (index >= 0) overlayStack.splice(index, 1)
      cleanupLayer(layer, { restoreFocus: true })
      syncDocumentListeners(ownerDocument)
    },
  }
}

const parsePlacement = (placement: WatercolorPlacement): { side: WatercolorSide; alignment: WatercolorAlignment } => {
  const [side, alignment] = placement.split('-') as [WatercolorSide, WatercolorAlignment | undefined]
  return { side, alignment: alignment ?? 'center' }
}

const formatPlacement = (side: WatercolorSide, alignment: WatercolorAlignment): WatercolorPlacement =>
  alignment === 'center' ? side : `${side}-${alignment}`

const oppositePlacement = (placement: WatercolorPlacement): WatercolorPlacement => {
  const { side, alignment } = parsePlacement(placement)
  switch (side) {
    case 'top':
      return formatPlacement('bottom', alignment)
    case 'bottom':
      return formatPlacement('top', alignment)
    case 'left':
      return formatPlacement('right', alignment)
    case 'right':
      return formatPlacement('left', alignment)
  }
}

const hasRoom = (
  anchorRect: DOMRect,
  floatingRect: DOMRect,
  placement: WatercolorPlacement,
  offset: number,
  padding: number,
  viewportWidth: number,
  viewportHeight: number
) => {
  const { side } = parsePlacement(placement)
  switch (side) {
    case 'top':
      return anchorRect.top - floatingRect.height - offset >= padding
    case 'bottom':
      return anchorRect.bottom + floatingRect.height + offset <= viewportHeight - padding
    case 'left':
      return anchorRect.left - floatingRect.width - offset >= padding
    case 'right':
      return anchorRect.right + floatingRect.width + offset <= viewportWidth - padding
  }
}

export const computeFloatingPosition = (
  anchor: HTMLElement,
  floating: HTMLElement,
  options: FloatingPositionOptions = {}
): FloatingPosition => {
  const placement = options.placement ?? 'bottom'
  const offset = options.offset ?? 8
  const boundaryPadding = options.boundaryPadding ?? 8
  const anchorRect = anchor.getBoundingClientRect()
  const floatingRect = floating.getBoundingClientRect()
  const viewportWidth = anchor.ownerDocument.defaultView?.innerWidth ?? 0
  const viewportHeight = anchor.ownerDocument.defaultView?.innerHeight ?? 0
  let resolvedPlacement = placement

  if (!hasRoom(anchorRect, floatingRect, placement, offset, boundaryPadding, viewportWidth, viewportHeight)) {
    const opposite = oppositePlacement(placement)
    if (hasRoom(anchorRect, floatingRect, opposite, offset, boundaryPadding, viewportWidth, viewportHeight)) {
      resolvedPlacement = opposite
    }
  }

  let top = 0
  let left = 0
  const { side, alignment } = parsePlacement(resolvedPlacement)
  switch (side) {
    case 'top':
      top = anchorRect.top - floatingRect.height - offset
      if (alignment === 'start') left = anchorRect.left
      else if (alignment === 'end') left = anchorRect.right - floatingRect.width
      else left = anchorRect.left + (anchorRect.width - floatingRect.width) / 2
      break
    case 'bottom':
      top = anchorRect.bottom + offset
      if (alignment === 'start') left = anchorRect.left
      else if (alignment === 'end') left = anchorRect.right - floatingRect.width
      else left = anchorRect.left + (anchorRect.width - floatingRect.width) / 2
      break
    case 'left':
      top = anchorRect.top + (anchorRect.height - floatingRect.height) / 2
      left = anchorRect.left - floatingRect.width - offset
      if (alignment === 'start') top = anchorRect.top
      else if (alignment === 'end') top = anchorRect.bottom - floatingRect.height
      break
    case 'right':
      top = anchorRect.top + (anchorRect.height - floatingRect.height) / 2
      left = anchorRect.right + offset
      if (alignment === 'start') top = anchorRect.top
      else if (alignment === 'end') top = anchorRect.bottom - floatingRect.height
      break
  }

  const maxLeft = Math.max(boundaryPadding, viewportWidth - floatingRect.width - boundaryPadding)
  const maxTop = Math.max(boundaryPadding, viewportHeight - floatingRect.height - boundaryPadding)

  return {
    placement: resolvedPlacement,
    left: Math.min(Math.max(left, boundaryPadding), maxLeft),
    top: Math.min(Math.max(top, boundaryPadding), maxTop),
  }
}

export const applyFloatingPosition = (
  anchor: HTMLElement,
  floating: HTMLElement,
  options: FloatingPositionOptions = {}
): FloatingPosition => {
  const position = computeFloatingPosition(anchor, floating, options)
  floating.style.position = 'fixed'
  floating.style.top = `${position.top}px`
  floating.style.left = `${position.left}px`
  floating.dataset.placement = position.placement
  return position
}
