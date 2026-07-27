<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children, onclick }: { class?: string; children?: Snippet; onclick?: (e: MouseEvent) => void } = $props()
</script>
<tr class="wc-table-row {className}" {onclick}>{@render children?.()}</tr>

<style>
  :global(.wc-table-row:hover td) { background: var(--wc-state-hover-bg, rgba(0, 0, 0, 0.03)); }
</style>
