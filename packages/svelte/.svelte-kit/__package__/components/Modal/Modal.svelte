<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    open = $bindable(false),
    title = '',
    size = 'md',
    closeOnBackdrop = true,
    showClose = true,
    class: className = '',
    children,
    onclose,
  }: {
    open?: boolean;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    closeOnBackdrop?: boolean;
    showClose?: boolean;
    class?: string;
    children?: Snippet;
    onclose?: () => void
  } = $props()

  function close() {
    open = false
    onclose?.()
  }
  function backdrop(e: MouseEvent) {
    if (e.target === e.currentTarget && closeOnBackdrop) close()
  }
  function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape' && open) close()
  }
</script>

<svelte:window onkeydown={onKey} />

{#if open}
  <div class="wc-modal-overlay" role="presentation" onclick={backdrop}>
    <div class="wc-modal wc-modal--{size} {className}" role="dialog" aria-modal="true">
      {#if title || showClose}
        <div class="wc-modal__header">
          {#if title}<div class="wc-modal__title">{title}</div>{/if}
          {#if showClose}<button class="wc-modal__close" type="button" aria-label="Close" onclick={close}>×</button>{/if}
        </div>
      {/if}
      <div class="wc-modal__body">{@render children?.()}</div>
    </div>
  </div>
{/if}

<style>
  .wc-modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 1300;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
  }
  .wc-modal {
    width: 100%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    background: var(--wc-surface-canvas, #fff);
    color: var(--wc-text-primary, #1a1a1a);
    border-radius: 12px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.24);
    overflow: hidden;
  }
  .wc-modal--sm { max-width: 400px; }
  .wc-modal--md { max-width: 560px; }
  .wc-modal--lg { max-width: 800px; }
  .wc-modal--xl { max-width: 1040px; }
  .wc-modal--full { max-width: none; width: auto; }
  .wc-modal__header { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.08)); }
  .wc-modal__title { font-size: 1.125rem; font-weight: 600; }
  .wc-modal__close { border: 0; background: transparent; color: inherit; font-size: 1.5rem; line-height: 1; cursor: pointer; padding: 0 4px; }
  .wc-modal__body { padding: 20px; overflow-y: auto; }
</style>
