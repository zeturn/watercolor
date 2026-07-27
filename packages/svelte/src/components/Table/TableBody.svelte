<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children }: { class?: string; children?: Snippet } = $props()
</script>
<tbody class="wc-table-body {className}">{@render children?.()}</tbody>
