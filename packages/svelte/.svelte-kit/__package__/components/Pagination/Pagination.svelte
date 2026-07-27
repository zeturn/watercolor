<script lang="ts">
  let {
    page = $bindable(1),
    count = 1,
    class: className = '',
    onchange,
  }: { page?: number; count?: number; class?: string; onchange?: (page: number) => void } = $props()

  const pages = $derived(Array.from({ length: Math.max(1, count) }, (_, i) => i + 1))

  function go(p: number) {
    if (p >= 1 && p <= count && p !== page) {
      page = p
      onchange?.(p)
    }
  }
</script>

<div class="wc-pagination {className}" role="navigation" aria-label="Pagination">
  <button class="wc-pagination__btn" disabled={page <= 1} onclick={() => go(page - 1)} aria-label="Previous">‹</button>
  {#each pages as p (p)}
    <button
      class="wc-pagination__btn {page === p ? 'wc-pagination__btn--active' : ''}"
      aria-current={page === p ? 'page' : undefined}
      onclick={() => go(p)}
    >{p}</button>
  {/each}
  <button class="wc-pagination__btn" disabled={page >= count} onclick={() => go(page + 1)} aria-label="Next">›</button>
</div>

<style>
  .wc-pagination { display: inline-flex; align-items: center; gap: 4px; box-sizing: border-box; }
  .wc-pagination__btn {
    min-width: 36px;
    height: 36px;
    padding: 0 8px;
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.12));
    background: var(--wc-surface-canvas, #fff);
    color: var(--wc-text-primary, #1a1a1a);
    border-radius: 8px;
    font: inherit;
    cursor: pointer;
  }
  .wc-pagination__btn:hover:not(:disabled) { background: var(--wc-state-hover-bg, rgba(0, 0, 0, 0.04)); }
  .wc-pagination__btn--active { background: var(--wc-accent, #3b82f6); border-color: var(--wc-accent, #3b82f6); color: #fff; }
  .wc-pagination__btn:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
