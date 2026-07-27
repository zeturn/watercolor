<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    open = $bindable(false),
    message = '',
    actionText = '',
    duration = 4000,
    class: className = '',
    children,
    onaction,
    onclose,
  }: {
    open?: boolean;
    message?: string;
    actionText?: string;
    duration?: number;
    class?: string;
    children?: Snippet;
    onaction?: () => void;
    onclose?: () => void
  } = $props()

  let timer: ReturnType<typeof setTimeout> | undefined

  $effect(() => {
    if (open && duration > 0) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        open = false
        onclose?.()
      }, duration)
    }
  })

  function act() {
    onaction?.()
    open = false
  }
</script>

{#if open}
  <div class="wc-snackbar {className}" role="status">
    <span class="wc-snackbar__message">{#if children}{@render children()}{:else}{message}{/if}</span>
    {#if actionText}<button class="wc-snackbar__action" onclick={act}>{actionText}</button>{/if}
  </div>
{/if}

<style>
  .wc-snackbar {
    position: fixed;
    left: 50%;
    bottom: 24px;
    transform: translateX(-50%);
    z-index: 1400;
    display: flex;
    align-items: center;
    gap: 16px;
    max-width: 90vw;
    padding: 12px 16px;
    border-radius: 8px;
    background: var(--wc-text-primary, #1a1a1a);
    color: var(--wc-surface-canvas, #fff);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
    font-size: 0.875rem;
  }
  .wc-snackbar__message { flex: 1 1 auto; }
  .wc-snackbar__action {
    border: 0;
    background: transparent;
    color: var(--wc-accent, #3b82f6);
    font: inherit;
    font-weight: 600;
    cursor: pointer;
    padding: 0;
    white-space: nowrap;
  }
</style>
