<script lang="ts">
  import type { Snippet } from 'svelte'
  let { variant = 'default', dense = false, class: className = '', children }: { variant?: 'default' | 'dense' | 'prominent'; dense?: boolean; class?: string; children?: Snippet } = $props()
</script>

<div class="wc-toolbar wc-toolbar--{variant} {dense ? 'wc-toolbar--dense' : ''} {className}">{@render children?.()}</div>

<style>
  .wc-toolbar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: var(--wc-surface-subtle, #f1f3f5);
    border-radius: 8px;
    box-sizing: border-box;
  }
  .wc-toolbar--dense { padding: 4px 8px; }
  .wc-toolbar--prominent { padding: 12px 16px; }
</style>
