<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    elevation = 0,
    rounded = 'md',
    as = 'div',
    class: className = '',
    children,
    ...rest
  }: { elevation?: 0 | 1 | 2 | 3 | 4; rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'; as?: string; class?: string; children?: Snippet; [key: string]: any } = $props()
</script>

<svelte:element this={as} class="wc-paper wc-paper--elevation-{elevation} wc-paper--rounded-{rounded} {className}" {...rest}>{@render children?.()}</svelte:element>

<style>
  .wc-paper {
    box-sizing: border-box;
    background: var(--wc-surface-canvas, #fff);
    color: var(--wc-text-primary, #1a1a1a);
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.08));
  }
  .wc-paper--rounded-none { border-radius: 0; }
  .wc-paper--rounded-sm { border-radius: 4px; }
  .wc-paper--rounded-md { border-radius: 8px; }
  .wc-paper--rounded-lg { border-radius: 12px; }
  .wc-paper--rounded-xl { border-radius: 16px; }
  .wc-paper--rounded-full { border-radius: 999px; }
  .wc-paper--elevation-0 { box-shadow: none; }
  .wc-paper--elevation-1 { box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06); }
  .wc-paper--elevation-2 { box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.06); }
  .wc-paper--elevation-3 { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.08); }
  .wc-paper--elevation-4 { box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12), 0 16px 32px rgba(0, 0, 0, 0.1); }
</style>
