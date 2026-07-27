<script lang="ts">
  import type { Snippet } from 'svelte'
  import './style.css'

  let {
    color = 'default',
    size = 'md',
    edge = false,
    disabled = false,
    icon = '',
    children,
    onclick,
  }: {
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
    size?: 'sm' | 'md' | 'lg'
    edge?: boolean | 'start' | 'end'
    disabled?: boolean
    icon?: string
    children?: Snippet
    onclick?: (event: MouseEvent) => void
  } = $props()

  const buttonClasses = $derived(
    [
      'wc-icon-button',
      `wc-icon-button--${color}`,
      `wc-icon-button--${size}`,
      edge && `wc-icon-button--edge-${edge}`,
      disabled && 'wc-icon-button--disabled',
    ].filter(Boolean)
  )

  function handleClick(event: MouseEvent) {
    if (!disabled) onclick?.(event)
  }
</script>

<button type="button" class={buttonClasses} disabled={disabled} onclick={handleClick}>
  <span class="icon-button-icon">
    {#if children}{@render children()}{:else if icon}{@html icon}{/if}
  </span>
</button>
