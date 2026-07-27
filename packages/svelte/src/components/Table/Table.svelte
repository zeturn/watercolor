<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    size = 'md',
    variant = 'default',
    stickyHeader = false,
    class: className = '',
    children,
  }: { size?: 'sm' | 'md' | 'lg'; variant?: 'default' | 'outlined' | 'elevated'; stickyHeader?: boolean; class?: string; children?: Snippet } = $props()
</script>

<div class="wc-table-wrapper {className}">
  <table class="wc-table wc-table--{size} wc-table--{variant} {stickyHeader ? 'wc-table--sticky' : ''}">{@render children?.()}</table>
</div>

<style>
  .wc-table-wrapper { width: 100%; overflow-x: auto; box-sizing: border-box; }
  .wc-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; color: var(--wc-text-primary, #1a1a1a); }
  :global(.wc-table--sm td), :global(.wc-table--sm th) { padding: 6px 10px; }
  :global(.wc-table--md td), :global(.wc-table--md th) { padding: 10px 14px; }
  :global(.wc-table--lg td), :global(.wc-table--lg th) { padding: 14px 18px; }
  .wc-table--outlined, .wc-table--elevated { border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.1)); border-radius: 8px; }
  .wc-table--elevated { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06); }
  :global(.wc-table--sticky thead th) { position: sticky; top: 0; background: var(--wc-surface-canvas, #fff); z-index: 1; }
</style>
