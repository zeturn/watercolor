import { createSignal, createEffect, createMemo, onMount, onCleanup, useId, Show, For, Index } from 'solid-js'

import { useLocale } from '../../LocaleSolid'
import { useOverlayLayer } from '../../interactions'
import './style.css'
import { getColorPickerClasses, getPreviewStyles, isValidHexColor } from './utils.js'

const DEFAULT_SWATCHES = [
  '#111827', '#4b5563', '#ffffff',
  '#2563eb', '#7c3aed', '#db2777',
  '#dc2626', '#ea580c', '#d97706',
  '#16a34a', '#0891b2', '#0f766e'
]

function normalizeHex(value) {
  if (!value || typeof value !== 'string') return '#ffffff'
  const nextValue = value.trim()
  if (!isValidHexColor(nextValue)) return '#ffffff'
  if (nextValue.length === 4) {
    return `#${nextValue[1]}${nextValue[1]}${nextValue[2]}${nextValue[2]}${nextValue[3]}${nextValue[3]}`.toLowerCase()
  }
  return nextValue.toLowerCase()
}

export default function ColorPicker({ 
  value = '#ffffff', 
  onChange,
  size = 'md',
  shape = 'circle',
  disabled = false,
  swatches = DEFAULT_SWATCHES,
  className = ''
}) {
  const { messages } = useLocale()
  const normalizedValue = normalizeHex(value)
  const [isOpen, setIsOpen] = createSignal(false)
  const [draftValue, setDraftValue] = createSignal(normalizedValue)
  let rootRef = null
  let popoverRef = null

  createEffect(() => {
    setDraftValue(normalizedValue)
  }, [normalizedValue])

  const closePicker = () => {
    setIsOpen(false)
  }

  useOverlayLayer({
    open: isOpen,
    elementRef: popoverRef,
    refs: [rootRef],
    closeOnEscape: true,
    closeOnPointerDownOutside: true,
    onEscapeKeyDown: closePicker,
    onPointerDownOutside: closePicker,
    zIndex: 1000,
  })

  const colorPickerClasses = getColorPickerClasses({
    size,
    shape,
    disabled,
    className
  }).join(' ')

  const previewStyles = getPreviewStyles(normalizedValue)

  const commitColor = (nextValue) => {
    const normalizedNextValue = normalizeHex(nextValue)
    setDraftValue(normalizedNextValue)
    onChange?.(normalizedNextValue)
  }

  const handleDraftChange = (event) => {
    const nextValue = event.target.value
    setDraftValue(nextValue)
    if (isValidHexColor(nextValue)) {
      commitColor(nextValue)
    }
  }

  const handleToggle = () => {
    if (disabled) return
    setIsOpen((open) => !open)
  }

  return (
    <span class={colorPickerClasses} ref={rootRef}>
      <button
        type="button"
        disabled={disabled}
        class="wc-color-picker__trigger"
        aria-label={messages.colorPicker}
        aria-haspopup="dialog"
        aria-expanded={isOpen()}
        onClick={handleToggle}
      >
        <span
          class="wc-color-picker__preview"
          style={previewStyles}
        />
      </button>

      {isOpen && (
        <div class="wc-color-picker__popover" ref={popoverRef} role="dialog" aria-label={messages.colorPicker}>
          <div class="wc-color-picker__current">
            <span class="wc-color-picker__current-preview" style={previewStyles} />
            <label class="wc-color-picker__field">
              <span class="wc-color-picker__field-label">Hex</span>
              <input
                class="wc-color-picker__hex-input"
                value={draftValue()}
                onChange={handleDraftChange}
                onBlur={() => setDraftValue(normalizedValue)}
                spellCheck={false}
                inputMode="text"
              />
            </label>
          </div>
          <div class="wc-color-picker__swatches" role="listbox" aria-label="Color swatches">
            {swatches.map((swatch) => {
              const normalizedSwatch = normalizeHex(swatch)
              const isSelected = normalizedSwatch === normalizedValue
              return (
                <button
                  type="button"
                  key={normalizedSwatch}
                  class={`wc-color-picker__swatch ${isSelected ? 'wc-color-picker__swatch--selected' : ''}`}
                  style={getPreviewStyles(normalizedSwatch)}
                  aria-label={normalizedSwatch}
                  aria-selected={isSelected}
                  role="option"
                  onClick={() => commitColor(normalizedSwatch)}
                />
              )
            })}
          </div>
        </div>
      )}
    </span>
  )
}
