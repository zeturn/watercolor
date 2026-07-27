<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    size = 'md',
    gutter = 'md',
    class: className = '',
    children,
  }: { size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'; gutter?: 'none' | 'sm' | 'md' | 'lg'; class?: string; children?: Snippet } = $props()
</script>

<div class="wc-container wc-container--{size} wc-container--gutter-{gutter} {className}">{@render children?.()}</div>

<style>
  .wc-container {
    width: 100%;
    margin-inline: auto;
    box-sizing: border-box;
    padding-inline: 1rem;
  }
  .wc-container--sm { max-width: 640px; }
  .wc-container--md { max-width: 960px; }
  .wc-container--lg { max-width: 1280px; }
  .wc-container--xl { max-width: 1536px; }
  .wc-container--full { max-width: none; }
  .wc-container--gutter-none { padding-inline: 0; }
  .wc-container--gutter-sm { padding-inline: 0.5rem; }
  .wc-container--gutter-lg { padding-inline: 2rem; }
</style>
