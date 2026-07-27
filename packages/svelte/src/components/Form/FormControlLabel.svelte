<script lang="ts">
  import type { Snippet } from 'svelte'
  let { label = '', disabled = false, class: className = '', children }: { label?: string; disabled?: boolean; class?: string; children?: Snippet } = $props()
</script>

<label class="wc-form-control-label {disabled ? 'wc-form-control-label--disabled' : ''} {className}">
  {#if children}<span class="wc-form-control-label__control">{@render children()}</span>{/if}
  {#if label}<span class="wc-form-control-label__text">{label}</span>{/if}
</label>

<style>
  .wc-form-control-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: var(--wc-text-primary, #1a1a1a);
    font-size: 0.875rem;
  }
  .wc-form-control-label--disabled { cursor: not-allowed; opacity: 0.6; }
  .wc-form-control-label__control { display: inline-flex; }
</style>
