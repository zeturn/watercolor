<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    direction = 'column',
    gap = 'md',
    align = 'stretch',
    justify = 'start',
    wrap = false,
    class: className = '',
    children,
  }: {
    direction?: 'row' | 'column';
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around';
    wrap?: boolean;
    class?: string;
    children?: Snippet
  } = $props()
</script>

<div
  class="wc-stack wc-stack--{direction} wc-stack--gap-{gap} wc-stack--align-{align} wc-stack--justify-{justify} {wrap ? 'wc-stack--wrap' : ''} {className}"
>{@render children?.()}</div>

<style>
  .wc-stack {
    display: flex;
    box-sizing: border-box;
    min-width: 0;
  }
  .wc-stack--column { flex-direction: column; }
  .wc-stack--row { flex-direction: row; }
  .wc-stack--wrap { flex-wrap: wrap; }
  .wc-stack--gap-none { gap: 0; }
  .wc-stack--gap-xs { gap: 0.25rem; }
  .wc-stack--gap-sm { gap: 0.5rem; }
  .wc-stack--gap-md { gap: 1rem; }
  .wc-stack--gap-lg { gap: 1.5rem; }
  .wc-stack--gap-xl { gap: 2.5rem; }
  .wc-stack--align-start { align-items: flex-start; }
  .wc-stack--align-center { align-items: center; }
  .wc-stack--align-end { align-items: flex-end; }
  .wc-stack--align-stretch { align-items: stretch; }
  .wc-stack--justify-start { justify-content: flex-start; }
  .wc-stack--justify-center { justify-content: center; }
  .wc-stack--justify-end { justify-content: flex-end; }
  .wc-stack--justify-between { justify-content: space-between; }
  .wc-stack--justify-around { justify-content: space-around; }
</style>
