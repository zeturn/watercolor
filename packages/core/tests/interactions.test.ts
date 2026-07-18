import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  applyFloatingPosition,
  createFocusTrap,
  createOverlayLayer,
  lockDocumentScroll,
} from '../src/interactions/index.js'

afterEach(() => {
  document.body.innerHTML = ''
  document.body.style.overflow = ''
})

const button = (text: string) => {
  const element = document.createElement('button')
  element.textContent = text
  document.body.appendChild(element)
  return element
}

describe('interaction primitives', () => {
  it('locks scroll with nesting and restores the original overflow only after the last unlock', () => {
    document.body.style.overflow = 'auto'
    const unlockA = lockDocumentScroll(document)
    const unlockB = lockDocumentScroll(document)

    expect(document.body.style.overflow).toBe('hidden')
    unlockA()
    expect(document.body.style.overflow).toBe('hidden')
    unlockB()
    expect(document.body.style.overflow).toBe('auto')
  })

  it('restores trigger focus when an overlay layer is destroyed', () => {
    const trigger = button('Trigger')
    const overlay = document.createElement('div')
    overlay.tabIndex = -1
    document.body.appendChild(overlay)
    trigger.focus()

    const layer = createOverlayLayer({ element: overlay, restoreFocus: true })
    overlay.focus()
    expect(document.activeElement).toBe(overlay)

    layer.destroy()
    expect(document.activeElement).toBe(trigger)
  })

  it('routes Escape only to the topmost overlay layer', () => {
    const lower = document.createElement('div')
    const upper = document.createElement('div')
    document.body.append(lower, upper)
    const onLowerEscape = vi.fn()
    const onUpperEscape = vi.fn()

    const lowerLayer = createOverlayLayer({ element: lower, onEscapeKeyDown: onLowerEscape })
    const upperLayer = createOverlayLayer({ element: upper, onEscapeKeyDown: onUpperEscape })

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))

    expect(onUpperEscape).toHaveBeenCalledTimes(1)
    expect(onLowerEscape).not.toHaveBeenCalled()

    upperLayer.destroy()
    lowerLayer.destroy()
  })

  it('does not dismiss an outer layer when pointer down happens inside a nested overlay', () => {
    const outer = document.createElement('div')
    const inner = document.createElement('div')
    document.body.append(outer, inner)
    const onOuterOutside = vi.fn()
    const onInnerOutside = vi.fn()

    const outerLayer = createOverlayLayer({ element: outer, onPointerDownOutside: onOuterOutside })
    const innerLayer = createOverlayLayer({ element: inner, onPointerDownOutside: onInnerOutside })

    inner.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))

    expect(onInnerOutside).not.toHaveBeenCalled()
    expect(onOuterOutside).not.toHaveBeenCalled()

    innerLayer.destroy()
    outerLayer.destroy()
  })

  it('traps Tab focus inside the provided scope', () => {
    const scope = document.createElement('div')
    scope.tabIndex = -1
    const first = document.createElement('button')
    const last = document.createElement('button')
    scope.append(first, last)
    document.body.append(scope)

    const cleanup = createFocusTrap(scope, { initialFocus: false })
    last.focus()
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }))
    expect(document.activeElement).toBe(first)

    first.focus()
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true }))
    expect(document.activeElement).toBe(last)

    cleanup()
  })

  it('flips and shifts floating position within the viewport', () => {
    const anchor = document.createElement('button')
    const floating = document.createElement('div')
    document.body.append(anchor, floating)

    vi.spyOn(anchor, 'getBoundingClientRect').mockReturnValue({
      top: 4,
      bottom: 24,
      left: 2,
      right: 42,
      width: 40,
      height: 20,
      x: 2,
      y: 4,
      toJSON: () => {},
    })
    vi.spyOn(floating, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 80,
      left: 0,
      right: 160,
      width: 160,
      height: 80,
      x: 0,
      y: 0,
      toJSON: () => {},
    })

    const position = applyFloatingPosition(anchor, floating, { placement: 'top', boundaryPadding: 12 })

    expect(position.placement).toBe('bottom')
    expect(position.left).toBeGreaterThanOrEqual(12)
    expect(position.top).toBeGreaterThanOrEqual(12)
    expect(floating.style.position).toBe('fixed')
  })

  it('supports start and end aligned floating placements', () => {
    const anchor = document.createElement('button')
    const floating = document.createElement('div')
    document.body.append(anchor, floating)

    vi.spyOn(anchor, 'getBoundingClientRect').mockReturnValue({
      top: 100,
      bottom: 120,
      left: 80,
      right: 180,
      width: 100,
      height: 20,
      x: 80,
      y: 100,
      toJSON: () => {},
    })
    vi.spyOn(floating, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 40,
      left: 0,
      right: 60,
      width: 60,
      height: 40,
      x: 0,
      y: 0,
      toJSON: () => {},
    })

    expect(applyFloatingPosition(anchor, floating, { placement: 'bottom-start' }).left).toBe(80)
    expect(applyFloatingPosition(anchor, floating, { placement: 'bottom-end' }).left).toBe(120)
    expect(applyFloatingPosition(anchor, floating, { placement: 'right-start' }).top).toBe(100)
    expect(applyFloatingPosition(anchor, floating, { placement: 'right-end' }).top).toBe(80)
  })
})
