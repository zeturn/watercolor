<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children }: { class?: string; children?: Snippet } = $props()
</script>
<thead class="wc-table-head {className}">{@render children?.()}</thead>

<style>
  :global(.wc-table-head th) {
    text-align: left;
    font-weight: 600;
    color: var(--wc-text-secondary, #555);
    border-bottom: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.1));
    background: var(--wc-surface-subtle, #f7f8fa);
  }
</style>
