<script lang="ts">
  import type { Snippet } from 'svelte'
  import './style.css'

  let {
    variant = 'circular',
    size = 'md',
    color = 'primary',
    disabled = false,
    label = '',
    icon = '',
    children,
    onclick,
    onfocus,
    onblur,
  }: {
    variant?: 'circular' | 'extended'
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary' | 'inherit'
    disabled?: boolean
    label?: string
    icon?: string
    children?: Snippet
    onclick?: (event: MouseEvent) => void
    onfocus?: (event: FocusEvent) => void
    onblur?: (event: FocusEvent) => void
  } = $props()

  const buttonClasses = $derived(
    [
      'wc-fab',
      `wc-fab--${variant}`,
      `wc-fab--${size}`,
      `wc-fab--${color}`,
      disabled && 'wc-fab--disabled',
    ].filter(Boolean)
  )

  function handleClick(event: MouseEvent) {
    if (!disabled) onclick?.(event)
  }
</script>

<button
  class={buttonClasses}
  disabled={disabled}
  type="button"
  onclick={handleClick}
  onfocus={onfocus}
  onblur={onblur}
>
  <span class="fab-icon">
    {#if icon}{@html icon}{/if}
    {#if variant !== 'extended'}{@render children?.()}{/if}
  </span>
  {#if variant === 'extended'}
    <span class="fab-label">{label}{@render children?.()}</span>
  {/if}
</button>
