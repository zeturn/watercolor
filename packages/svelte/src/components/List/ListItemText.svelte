<script lang="ts">
  import type { Snippet } from 'svelte'
  let { primary = '', secondary = '', class: className = '', children }: { primary?: string; secondary?: string; class?: string; children?: Snippet } = $props()
</script>

<span class="wc-list-item__text {className}">
  {#if children}{@render children()}{:else}
    {#if primary}<span class="wc-list-item__primary">{primary}</span>{/if}
    {#if secondary}<span class="wc-list-item__secondary">{secondary}</span>{/if}
  {/if}
</span>

<style>
  .wc-list-item__text { display: flex; flex-direction: column; min-width: 0; }
  .wc-list-item__primary { font-size: 0.875rem; color: var(--wc-text-primary, #1a1a1a); }
  .wc-list-item__secondary { font-size: 0.75rem; color: var(--wc-text-secondary, #6b7280); }
</style>
