<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    items = [],
    multiple = false,
    class: className = '',
    children,
  }: { items?: Array<{ title: string; content: string }>; multiple?: boolean; class?: string; children?: Snippet } = $props()

  let openSet = $state(new Set<number>())

  function toggle(i: number) {
    const next = new Set(openSet)
    if (next.has(i)) next.delete(i)
    else {
      if (!multiple) next.clear()
      next.add(i)
    }
    openSet = next
  }
</script>

<div class="wc-accordion {className}">
  {#each items as item, i (i)}
    <div class="wc-accordion__item">
      <button class="wc-accordion__header" type="button" aria-expanded={openSet.has(i)} onclick={() => toggle(i)}>
        <span>{item.title}</span>
        <span class="wc-accordion__icon">{openSet.has(i) ? '−' : '+'}</span>
      </button>
      {#if openSet.has(i)}<div class="wc-accordion__panel">{item.content}</div>{/if}
    </div>
  {/each}
  {#if children}{@render children()}{/if}
</div>

<style>
  .wc-accordion { border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.1)); border-radius: 8px; overflow: hidden; box-sizing: border-box; }
  .wc-accordion__item + .wc-accordion__item { border-top: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.08)); }
  .wc-accordion__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 16px;
    border: 0;
    background: var(--wc-surface-canvas, #fff);
    color: var(--wc-text-primary, #1a1a1a);
    font: inherit;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
  }
  .wc-accordion__header:hover { background: var(--wc-state-hover-bg, rgba(0, 0, 0, 0.03)); }
  .wc-accordion__icon { font-size: 1.25rem; line-height: 1; }
  .wc-accordion__panel { padding: 0 16px 12px; font-size: 0.875rem; color: var(--wc-text-secondary, #6b7280); line-height: 1.5; }
</style>
