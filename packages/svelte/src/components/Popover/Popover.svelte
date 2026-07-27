<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    trigger,
    open = $bindable(false),
    placement = 'bottom',
    class: className = '',
    children,
  }: { trigger?: Snippet; open?: boolean; placement?: 'top' | 'bottom' | 'left' | 'right'; class?: string; children?: Snippet } = $props()
</script>

<div class="wc-popover {className}">
  <button class="wc-popover__trigger" type="button" onclick={() => (open = !open)} aria-expanded={open}>
    {#if trigger}{@render trigger()}{/if}
  </button>
  {#if open && children}
    <div class="wc-popover__content wc-popover__content--{placement}" role="dialog">{@render children()}</div>
  {/if}
</div>

<style>
  .wc-popover { position: relative; display: inline-block; }
  .wc-popover__trigger { display: inline-flex; cursor: pointer; }
  .wc-popover__content {
    position: absolute;
    z-index: 1100;
    min-width: 160px;
    padding: 10px 12px;
    background: var(--wc-surface-canvas, #fff);
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.1));
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    color: var(--wc-text-primary, #1a1a1a);
  }
  .wc-popover__content--top { bottom: 100%; left: 0; margin-bottom: 8px; }
  .wc-popover__content--bottom { top: 100%; left: 0; margin-top: 8px; }
  .wc-popover__content--left { right: 100%; top: 0; margin-right: 8px; }
  .wc-popover__content--right { left: 100%; top: 0; margin-left: 8px; }
</style>
