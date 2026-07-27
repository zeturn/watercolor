<script lang="ts">
  import type { Snippet } from 'svelte'
  let { class: className = '', children }: { class?: string; children?: Snippet } = $props()
</script>

<div class="wc-card-content {className}">{@render children?.()}</div>

<style>
  .wc-card-content {
    flex: 1 1 auto;
    min-width: 0;
  }
</style>
