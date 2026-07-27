<script lang="ts">
  import type { Snippet } from 'svelte'
  let { icon = '', class: className = '', children }: { icon?: string; class?: string; children?: Snippet } = $props()
</script>

<span class="wc-list-item__icon {className}">{#if children}{@render children()}{:else if icon}{@html icon}{/if}</span>

<style>
  .wc-list-item__icon { display: inline-flex; align-items: center; justify-content: center; color: var(--wc-text-secondary, #6b7280); flex: 0 0 auto; }
</style>
