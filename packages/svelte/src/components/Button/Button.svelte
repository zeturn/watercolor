<script lang="ts">
  import { getButtonClasses, handleButtonClick } from './utils.js'
  import type { Snippet } from 'svelte'
  import './style.css'

  let {
    variant = 'primary',
    buttonStyle = 'default',
    size = 'md',
    disabled = false,
    loading = false,
    fullWidth = false,
    type = 'button' as 'button' | 'submit' | 'reset',
    href = null,
    target = '_self',
    startIcon = null,
    endIcon = null,
    rounded = true,
    uppercase = false,
    ripple: _ripple = true,
    children,
    onclick,
    onmouseover,
    onmouseout,
    onfocus,
    onblur,
  }: {
    variant?: string
    buttonStyle?: string
    size?: string
    disabled?: boolean
    loading?: boolean
    fullWidth?: boolean
    type?: 'button' | 'submit' | 'reset'
    href?: string | null
    target?: string
    startIcon?: string | Snippet | null
    endIcon?: string | Snippet | null
    rounded?: boolean | string
    uppercase?: boolean
    ripple?: boolean
    children?: Snippet
    onclick?: (event: MouseEvent) => void
    onmouseover?: (event: MouseEvent) => void
    onmouseout?: (event: MouseEvent) => void
    onfocus?: (event: FocusEvent) => void
    onblur?: (event: FocusEvent) => void
  } = $props()

  const buttonClasses = $derived(
    getButtonClasses({ variant, buttonStyle, size, disabled, loading, fullWidth, uppercase, rounded })
  )

  function handleClick(event: MouseEvent) {
    handleButtonClick({ event, disabled, loading, href: href ?? '', target, onClick: onclick ?? (() => {}) })
  }
</script>

<button
  class={buttonClasses}
  disabled={disabled || loading}
  {type}
  onclick={handleClick}
  onmouseover={onmouseover}
  onmouseout={onmouseout}
  onfocus={onfocus}
  onblur={onblur}
>
  {#if loading}
    <span class="wc-btn__loading">
      <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </span>
  {/if}
  {#if startIcon && !loading}
    <span class="wc-btn__start-icon">
      {#if typeof startIcon === 'function'}
        {@render startIcon()}
      {:else}
        {startIcon}
      {/if}
    </span>
  {/if}
  <span class="wc-btn__content" class:opacity-0={loading}>
    {@render children?.()}
  </span>
  {#if endIcon && !loading}
    <span class="wc-btn__end-icon">
      {#if typeof endIcon === 'function'}
        {@render endIcon()}
      {:else}
        {endIcon}
      {/if}
    </span>
  {/if}
</button>
