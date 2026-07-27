<script lang="ts">
  import type { Snippet } from 'svelte'
  let { gap = 'md', class: className = '', children }: { gap?: 'none' | 'sm' | 'md' | 'lg'; class?: string; children?: Snippet } = $props()
</script>

<div class="wc-feed wc-feed--gap-{gap} {className}">{@render children?.()}</div>

<style>
  .wc-feed { display: flex; flex-direction: column; box-sizing: border-box; }
  .wc-feed--gap-none { gap: 0; }
  .wc-feed--gap-sm { gap: 8px; }
  .wc-feed--gap-md { gap: 16px; }
  .wc-feed--gap-lg { gap: 24px; }
</style>
