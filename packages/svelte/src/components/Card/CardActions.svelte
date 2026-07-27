<script lang="ts">
  import type { Snippet } from 'svelte'
  let { align = 'left', class: className = '', children }: { align?: 'left' | 'center' | 'right' | 'space-between'; class?: string; children?: Snippet } = $props()
</script>

<div class="wc-card-actions wc-card-actions--{align} {className}">{@render children?.()}</div>

<style>
  .wc-card-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-top: 8px;
    margin-top: 8px;
  }
  .wc-card-actions--left { justify-content: flex-start; }
  .wc-card-actions--center { justify-content: center; }
  .wc-card-actions--right { justify-content: flex-end; }
  .wc-card-actions--space-between { justify-content: space-between; }
</style>
