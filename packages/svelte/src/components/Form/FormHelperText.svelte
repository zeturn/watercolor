<script lang="ts">
  import type { Snippet } from 'svelte'
  let { error = false, class: className = '', children }: { error?: boolean; class?: string; children?: Snippet } = $props()
</script>

<div class="wc-form-helper-text {error ? 'wc-form-helper-text--error' : ''} {className}" role={error ? 'alert' : undefined}>{@render children?.()}</div>

<style>
  .wc-form-helper-text {
    font-size: 0.75rem;
    line-height: 1.4;
    color: var(--wc-text-secondary, #6b7280);
  }
  .wc-form-helper-text--error { color: var(--wc-danger, #ef4444); }
</style>
