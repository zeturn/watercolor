<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    header,
    footer,
    class: className = '',
    children,
  }: { header?: Snippet; footer?: Snippet; class?: string; children?: Snippet } = $props()
</script>

<div class="wc-page {className}">
  {#if header}<header class="wc-page__header">{@render header()}</header>{/if}
  <main class="wc-page__body">{@render children?.()}</main>
  {#if footer}<footer class="wc-page__footer">{@render footer()}</footer>{/if}
</div>

<style>
  .wc-page { display: flex; flex-direction: column; min-height: 100%; box-sizing: border-box; }
  .wc-page__header { padding: 16px; border-bottom: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.08)); }
  .wc-page__body { flex: 1 1 auto; padding: 16px; min-width: 0; }
  .wc-page__footer { padding: 16px; border-top: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.08)); }
</style>
