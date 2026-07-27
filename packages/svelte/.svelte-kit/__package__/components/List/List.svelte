<script lang="ts">
  import type { Snippet } from 'svelte'
  let { variant = 'default', dense = false, class: className = '', children }: { variant?: 'default' | 'bordered' | 'divided'; dense?: boolean; class?: string; children?: Snippet } = $props()
</script>

<ul class="wc-list wc-list--{variant} {dense ? 'wc-list--dense' : ''} {className}">{@render children?.()}</ul>

<style>
  .wc-list { list-style: none; margin: 0; padding: 0; box-sizing: border-box; }
  .wc-list--bordered { border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.1)); border-radius: 8px; overflow: hidden; }
  .wc-list--divided > :global(li:not(:last-child)) { border-bottom: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.08)); }
</style>
