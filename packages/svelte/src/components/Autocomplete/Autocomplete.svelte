<script lang="ts">
  import type { Snippet } from 'svelte'

  type OptionType = string | number | Record<string, unknown>

  let {
    value = $bindable(null),
    options = [],
    label = '',
    placeholder = '请输入或选择...',
    disabled = false,
    readonly = false,
    required = false,
    error = '',
    helperText = '',
    size = 'md',
    variant = 'filled',
    multiple = false,
    clearable = true,
    freeSolo = false,
    valueKey = 'value',
    labelKey = 'label',
    filterOptions = null,
    noOptionsText = '没有找到选项',
    minSearchLength = 0,
    onchange,
    oninputchange,
    onfocus,
    onblur,
    option: optionSnippet,
    noOptions: noOptionsSnippet,
  }: {
    value?: unknown
    options?: OptionType[]
    label?: string
    placeholder?: string
    disabled?: boolean
    readonly?: boolean
    required?: boolean
    error?: string
    helperText?: string
    size?: 'sm' | 'md' | 'lg'
    variant?: 'outlined' | 'filled' | 'standard'
    multiple?: boolean
    clearable?: boolean
    freeSolo?: boolean
    valueKey?: string
    labelKey?: string
    filterOptions?: ((options: OptionType[], query: string) => OptionType[]) | null
    noOptionsText?: string
    minSearchLength?: number
    onchange?: (value: unknown) => void
    oninputchange?: (query: string) => void
    onfocus?: (event: FocusEvent) => void
    onblur?: (event: FocusEvent) => void
    option?: Snippet<[OptionType]>
    noOptions?: Snippet
  } = $props()

  const autocompleteId = `autocomplete-${Math.random().toString(36).slice(2, 11)}`

  let open = $state(false)
  let searchQuery = $state('')
  let highlightedIndex = $state(-1)
  let rootEl: HTMLElement | null = $state(null)

  function getOptionValue(option: OptionType | null | undefined): unknown {
    if (option === null || option === undefined) return null
    return typeof option === 'object' ? (option as Record<string, unknown>)[valueKey] : option
  }

  function getOptionLabel(option: OptionType | null | undefined): string {
    if (option === null || option === undefined) return ''
    return typeof option === 'object'
      ? String((option as Record<string, unknown>)[labelKey] ?? '')
      : String(option)
  }

  const filteredOptions = $derived.by(() => {
    if (searchQuery.length < minSearchLength) return []
    if (filterOptions) return filterOptions(options, searchQuery)
    if (!searchQuery) return options
    return options.filter((option) => getOptionLabel(option).toLowerCase().includes(searchQuery.toLowerCase()))
  })

  function isSelected(option: OptionType): boolean {
    const optionValue = getOptionValue(option)
    if (multiple && Array.isArray(value)) {
      return value.some((v) => (typeof v === 'object' && v !== null ? getOptionValue(v as OptionType) : v) === optionValue)
    }
    if (!value) return false
    const currentValue = typeof value === 'object' && value !== null ? getOptionValue(value as OptionType) : value
    return currentValue === optionValue
  }

  function closeDropdown() {
    open = false
    highlightedIndex = -1
  }

  function handleFocus(e: FocusEvent) {
    open = true
    onfocus?.(e)
  }

  function handleBlur(e: FocusEvent) {
    setTimeout(() => {
      closeDropdown()
      onblur?.(e)
    }, 200)
  }

  function handleInput() {
    open = true
    highlightedIndex = -1
    oninputchange?.(searchQuery)
    if (freeSolo) {
      value = searchQuery
      onchange?.(searchQuery)
    }
  }

  function handleClear() {
    searchQuery = ''
    closeDropdown()
    const next = multiple ? [] : null
    value = next
    onchange?.(next)
  }

  function selectOption(option: OptionType) {
    const optionValue = getOptionValue(option)
    if (multiple) {
      const currentValue = Array.isArray(value) ? [...value] : []
      const index = currentValue.findIndex(
        (v) => (typeof v === 'object' && v !== null ? getOptionValue(v as OptionType) : v) === optionValue
      )
      if (index > -1) {
        currentValue.splice(index, 1)
      } else {
        currentValue.push(option)
      }
      value = currentValue
      onchange?.(currentValue)
      searchQuery = ''
    } else {
      value = option
      onchange?.(option)
      searchQuery = getOptionLabel(option)
      closeDropdown()
    }
    highlightedIndex = -1
  }

  function handleKeydown(e: KeyboardEvent) {
    if (!open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      open = true
      e.preventDefault()
      return
    }
    if (!open || filteredOptions.length === 0) return
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        highlightedIndex = Math.min(highlightedIndex + 1, filteredOptions.length - 1)
        break
      case 'ArrowUp':
        e.preventDefault()
        highlightedIndex = Math.max(highlightedIndex - 1, 0)
        break
      case 'Enter':
        e.preventDefault()
        if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
          selectOption(filteredOptions[highlightedIndex])
        }
        break
      case 'Escape':
        closeDropdown()
        break
    }
  }

  $effect(() => {
    if (!multiple && value) {
      if (typeof value === 'object') {
        searchQuery = getOptionLabel(value as OptionType)
      } else {
        const matched = options.find((opt) => getOptionValue(opt) === value)
        searchQuery = matched ? getOptionLabel(matched) : String(value)
      }
    } else if (!value) {
      searchQuery = ''
    }
  })

  $effect(() => {
    if (!open || typeof document === 'undefined') return
    const handlePointerDown = (e: PointerEvent) => {
      if (rootEl && !rootEl.contains(e.target as Node)) closeDropdown()
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  })
</script>

<div bind:this={rootEl} class="wc-autocomplete">
  {#if label}
    <label
      for={autocompleteId}
      class="wc-autocomplete__label wc-autocomplete__label--{size}"
      class:wc-autocomplete__label--error={Boolean(error)}
    >
      {label}
      {#if required}<span class="wc-autocomplete__required">*</span>{/if}
    </label>
  {/if}

  <div
    class="wc-autocomplete__container wc-autocomplete__container--{variant} wc-autocomplete__container--{size}"
    class:wc-autocomplete__container--disabled={disabled}
    class:wc-autocomplete__container--error={Boolean(error)}
    class:wc-autocomplete__container--open={open}
  >
    <input
      id={autocompleteId}
      bind:value={searchQuery}
      type="text"
      {placeholder}
      {disabled}
      {readonly}
      class="wc-autocomplete__input"
      autocomplete="off"
      role="combobox"
      aria-autocomplete="list"
      aria-expanded={open}
      aria-controls="{autocompleteId}-options"
      aria-activedescendant={highlightedIndex >= 0 ? `${autocompleteId}-option-${highlightedIndex}` : undefined}
      onfocus={handleFocus}
      onblur={handleBlur}
      oninput={handleInput}
      onkeydown={handleKeydown}
    />

    {#if clearable && searchQuery}
      <button type="button" class="wc-autocomplete__clear" tabindex="-1" onclick={handleClear} aria-label="Clear">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </button>
    {/if}

    <div class="wc-autocomplete__indicators">
      <div class="wc-autocomplete__arrow" class:wc-autocomplete__arrow--open={open && filteredOptions.length > 0}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6,9 12,15 18,9" />
        </svg>
      </div>
    </div>
  </div>

  {#if open && filteredOptions.length > 0}
    <div class="wc-autocomplete__dropdown" id="{autocompleteId}-options" role="listbox">
      <div class="wc-autocomplete__options">
        {#each filteredOptions as opt, index (getOptionValue(opt))}
          <div
            id="{autocompleteId}-option-{index}"
            class="wc-autocomplete__option"
            class:wc-autocomplete__option--selected={isSelected(opt)}
            class:wc-autocomplete__option--highlighted={index === highlightedIndex}
            role="option"
            aria-selected={isSelected(opt)}
            onclick={() => selectOption(opt)}
            onmouseenter={() => (highlightedIndex = index)}
            onkeydown={(e) => e.key === 'Enter' && selectOption(opt)}
            tabindex="-1"
          >
            {#if optionSnippet}
              {@render optionSnippet(opt)}
            {:else}
              <span class="wc-autocomplete__option-text">{getOptionLabel(opt)}</span>
            {/if}
            {#if isSelected(opt)}
              <svg class="wc-autocomplete__option-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12" />
              </svg>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {/if}

  {#if open && searchQuery && filteredOptions.length === 0}
    <div class="wc-autocomplete__dropdown" role="status">
      <div class="wc-autocomplete__no-options">
        {#if noOptionsSnippet}{@render noOptionsSnippet()}{:else}{noOptionsText}{/if}
      </div>
    </div>
  {/if}

  {#if error}
    <p class="wc-autocomplete__error">{error}</p>
  {:else if helperText}
    <p class="wc-autocomplete__helper">{helperText}</p>
  {/if}
</div>

<style>
  .wc-autocomplete {
    position: relative;
    display: inline-block;
    min-width: 220px;
  }
  .wc-autocomplete__label {
    display: block;
    margin-bottom: 4px;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--wc-text-primary, #1a1a1a);
  }
  .wc-autocomplete__label--error {
    color: var(--wc-color-error, #ef4444);
  }
  .wc-autocomplete__required {
    color: var(--wc-color-error, #ef4444);
    margin-left: 2px;
  }
  .wc-autocomplete__container {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.15));
    background: var(--wc-surface-canvas, #fff);
    transition: border-color 0.15s ease;
  }
  .wc-autocomplete__container--filled {
    background: var(--wc-surface-muted, rgba(0, 0, 0, 0.04));
  }
  .wc-autocomplete__container--standard {
    border-width: 0 0 1px;
    border-radius: 0;
    background: transparent;
  }
  .wc-autocomplete__container--sm { padding: 5px 10px; }
  .wc-autocomplete__container--lg { padding: 11px 14px; }
  .wc-autocomplete__container--open,
  .wc-autocomplete__container:hover:not(.wc-autocomplete__container--disabled) {
    border-color: var(--wc-color-primary, #3b82f6);
  }
  .wc-autocomplete__container--error {
    border-color: var(--wc-color-error, #ef4444);
  }
  .wc-autocomplete__container--disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  .wc-autocomplete__input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 0.9rem;
    color: var(--wc-text-primary, #1a1a1a);
    min-width: 0;
  }
  .wc-autocomplete__clear {
    display: inline-flex;
    width: 18px;
    height: 18px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    color: var(--wc-text-secondary, #6b7280);
    flex-shrink: 0;
  }
  .wc-autocomplete__clear svg {
    width: 100%;
    height: 100%;
  }
  .wc-autocomplete__indicators {
    display: inline-flex;
    flex-shrink: 0;
  }
  .wc-autocomplete__arrow {
    width: 18px;
    height: 18px;
    color: var(--wc-text-secondary, #6b7280);
    transition: transform 0.15s ease;
  }
  .wc-autocomplete__arrow svg {
    width: 100%;
    height: 100%;
  }
  .wc-autocomplete__arrow--open {
    transform: rotate(180deg);
  }
  .wc-autocomplete__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    margin-top: 4px;
    max-height: 240px;
    overflow-y: auto;
    background: var(--wc-surface-canvas, #fff);
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.1));
    border-radius: 10px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  .wc-autocomplete__options {
    padding: 4px;
  }
  .wc-autocomplete__option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 10px;
    border-radius: 6px;
    font-size: 0.9rem;
    cursor: pointer;
    color: var(--wc-text-primary, #1a1a1a);
  }
  .wc-autocomplete__option--highlighted {
    background: var(--wc-surface-hover, rgba(0, 0, 0, 0.06));
  }
  .wc-autocomplete__option--selected {
    color: var(--wc-color-primary, #3b82f6);
    font-weight: 500;
  }
  .wc-autocomplete__option-check {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
  .wc-autocomplete__no-options {
    padding: 12px;
    font-size: 0.85rem;
    text-align: center;
    color: var(--wc-text-secondary, #6b7280);
  }
  .wc-autocomplete__error {
    margin: 4px 0 0;
    font-size: 0.75rem;
    color: var(--wc-color-error, #ef4444);
  }
  .wc-autocomplete__helper {
    margin: 4px 0 0;
    font-size: 0.75rem;
    color: var(--wc-text-secondary, #6b7280);
  }
</style>
