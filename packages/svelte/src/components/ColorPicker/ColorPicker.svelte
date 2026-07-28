<script lang="ts">
  import { useLocale } from '../../hooks.js'

  let {
    value = $bindable('#ffffff'),
    size = 'md',
    shape = 'circle',
    disabled = false,
    swatches = [
      '#111827', '#4b5563', '#ffffff',
      '#2563eb', '#7c3aed', '#db2777',
      '#dc2626', '#ea580c', '#d97706',
      '#16a34a', '#0891b2', '#0f766e',
    ],
    class: className = '',
    onchange,
  }: {
    value?: string
    size?: 'sm' | 'md' | 'lg'
    shape?: 'circle' | 'square' | 'rounded'
    disabled?: boolean
    swatches?: string[]
    class?: string
    onchange?: (value: string) => void
  } = $props()

  const localeStore = useLocale()

  let open = $state(false)
  let rootEl: HTMLElement | null = $state(null)

  function isValidHexColor(input: string): boolean {
    return /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(input.trim())
  }

  function normalizeHex(input?: string): string {
    if (!input || typeof input !== 'string') return '#ffffff'
    const nextValue = input.trim()
    if (!isValidHexColor(nextValue)) return '#ffffff'
    if (nextValue.length === 4) {
      return `#${nextValue[1]}${nextValue[1]}${nextValue[2]}${nextValue[2]}${nextValue[3]}${nextValue[3]}`.toLowerCase()
    }
    return nextValue.toLowerCase()
  }

  const normalizedValue = $derived(normalizeHex(value))
  const normalizedSwatches = $derived(swatches.map(normalizeHex))

  let draftValue = $state('#ffffff')

  $effect(() => {
    draftValue = normalizedValue
  })

  function togglePicker() {
    if (disabled) return
    open = !open
  }

  function commitColor(next: string) {
    const nextValue = normalizeHex(next)
    draftValue = nextValue
    value = nextValue
    onchange?.(nextValue)
  }

  function handleDraftInput(e: Event) {
    const target = e.target as HTMLInputElement
    draftValue = target.value
    if (isValidHexColor(target.value)) {
      commitColor(target.value)
    }
  }

  $effect(() => {
    if (!open || typeof document === 'undefined') return
    const handlePointerDown = (e: PointerEvent) => {
      if (rootEl && !rootEl.contains(e.target as Node)) open = false
    }
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') open = false
    }
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeydown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeydown)
    }
  })
</script>

<span
  bind:this={rootEl}
  class="wc-color-picker wc-color-picker--{size} wc-color-picker--{shape} {className}"
  class:wc-color-picker--disabled={disabled}
>
  <button
    class="wc-color-picker__trigger"
    type="button"
    {disabled}
    aria-label={localeStore.messages.colorPicker}
    aria-haspopup="dialog"
    aria-expanded={open}
    onclick={togglePicker}
  >
    <span class="wc-color-picker__preview" style="background-color: {normalizedValue};"></span>
  </button>

  {#if open}
    <div class="wc-color-picker__popover" role="dialog" aria-label={localeStore.messages.colorPicker}>
      <div class="wc-color-picker__current">
        <span class="wc-color-picker__current-preview" style="background-color: {normalizedValue};"></span>
        <label class="wc-color-picker__field">
          <span class="wc-color-picker__field-label">Hex</span>
          <input
            class="wc-color-picker__hex-input"
            value={draftValue}
            spellcheck="false"
            inputmode="text"
            oninput={handleDraftInput}
            onblur={() => (draftValue = normalizedValue)}
          />
        </label>
      </div>

      <div class="wc-color-picker__swatches" role="listbox" aria-label="Color swatches">
        {#each normalizedSwatches as swatch (swatch)}
          <button
            type="button"
            class="wc-color-picker__swatch"
            class:wc-color-picker__swatch--selected={swatch === normalizedValue}
            style="background-color: {swatch};"
            aria-label={swatch}
            aria-selected={swatch === normalizedValue}
            role="option"
            onclick={() => commitColor(swatch)}
          ></button>
        {/each}
      </div>
    </div>
  {/if}
</span>

<style>
  .wc-color-picker {
    position: relative;
    display: inline-flex;
  }
  .wc-color-picker--disabled {
    opacity: 0.5;
  }
  .wc-color-picker__trigger {
    padding: 3px;
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.15));
    background: var(--wc-surface-canvas, #fff);
    border-radius: 50%;
    cursor: pointer;
    display: inline-flex;
  }
  .wc-color-picker--square .wc-color-picker__trigger { border-radius: 4px; }
  .wc-color-picker--rounded .wc-color-picker__trigger { border-radius: 8px; }
  .wc-color-picker__trigger:disabled {
    cursor: not-allowed;
  }
  .wc-color-picker__preview {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: inherit;
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.1));
  }
  .wc-color-picker--sm .wc-color-picker__preview { width: 16px; height: 16px; }
  .wc-color-picker--lg .wc-color-picker__preview { width: 26px; height: 26px; }
  .wc-color-picker__popover {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    z-index: 1000;
    width: 220px;
    padding: 12px;
    background: var(--wc-surface-canvas, #fff);
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.1));
    border-radius: 10px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  .wc-color-picker__current {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }
  .wc-color-picker__current-preview {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.1));
    flex-shrink: 0;
  }
  .wc-color-picker__field {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
  }
  .wc-color-picker__field-label {
    font-size: 0.7rem;
    color: var(--wc-text-secondary, #6b7280);
  }
  .wc-color-picker__hex-input {
    width: 100%;
    padding: 4px 8px;
    font-size: 0.85rem;
    font-family: monospace;
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.15));
    border-radius: 6px;
    background: var(--wc-surface-muted, rgba(0, 0, 0, 0.02));
    color: var(--wc-text-primary, #1a1a1a);
  }
  .wc-color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
  }
  .wc-color-picker__swatch {
    aspect-ratio: 1;
    border-radius: 6px;
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.1));
    cursor: pointer;
    padding: 0;
  }
  .wc-color-picker__swatch--selected {
    outline: 2px solid var(--wc-color-primary, #3b82f6);
    outline-offset: 1px;
  }
</style>
