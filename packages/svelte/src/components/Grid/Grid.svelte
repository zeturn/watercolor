<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    columns = 12,
    gap = 'md',
    class: className = '',
    children,
  }: { columns?: number | string; gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'; class?: string; children?: Snippet } = $props()

  const gridTemplate = $derived(
    typeof columns === 'number' ? `repeat(${columns}, minmax(0, 1fr))` : columns,
  )
</script>

<div class="wc-grid wc-grid--gap-{gap} {className}" style="grid-template-columns: {gridTemplate}">{@render children?.()}</div>

<style>
  .wc-grid {
    display: grid;
    box-sizing: border-box;
  }
  .wc-grid--gap-none { gap: 0; }
  .wc-grid--gap-xs { gap: 0.25rem; }
  .wc-grid--gap-sm { gap: 0.5rem; }
  .wc-grid--gap-md { gap: 1rem; }
  .wc-grid--gap-lg { gap: 1.5rem; }
  .wc-grid--gap-xl { gap: 2.5rem; }
</style>
