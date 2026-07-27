<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    trigger,
    items = [],
    placement = 'bottom-start',
    class: className = '',
    children,
  }: {
    trigger?: Snippet;
    items?: Array<{ value: any; label: string; disabled?: boolean; onclick?: () => void }>;
    placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
    class?: string;
    children?: Snippet
  } = $props()

  let open = $state(false)

  function select(item: { value: any; label: string; disabled?: boolean; onclick?: () => void }) {
    item.onclick?.()
    open = false
  }
</script>

<div class="wc-menu {className}">
  <button class="wc-menu__trigger" type="button" aria-haspopup="menu" aria-expanded={open} onclick={() => (open = !open)}>{#if trigger}{@render trigger()}{:else}☰{/if}</button>
  {#if open}
    <ul class="wc-menu__list wc-menu__list--{placement}" role="menu">
      {#each items as item (item.value)}
        <li role="none">
          <button class="wc-menu__item" role="menuitem" disabled={item.disabled} onclick={() => select(item)}>{item.label}</button>
        </li>
      {/each}
      {#if children}{@render children()}{/if}
    </ul>
  {/if}
</div>

<style>
  .wc-menu { position: relative; display: inline-block; }
  .wc-menu__trigger { border: 0; background: transparent; cursor: pointer; font: inherit; color: inherit; padding: 4px; border-radius: 6px; }
  .wc-menu__trigger:hover { background: var(--wc-state-hover-bg, rgba(0, 0, 0, 0.05)); }
  .wc-menu__list {
    position: absolute;
    z-index: 1100;
    min-width: 160px;
    margin: 4px 0 0;
    padding: 4px;
    list-style: none;
    background: var(--wc-surface-canvas, #fff);
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.1));
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
  .wc-menu__list--bottom-start { top: 100%; left: 0; }
  .wc-menu__list--bottom-end { top: 100%; right: 0; }
  .wc-menu__list--top-start { bottom: 100%; left: 0; }
  .wc-menu__list--top-end { bottom: 100%; right: 0; }
  .wc-menu__item {
    display: block;
    width: 100%;
    text-align: left;
    padding: 8px 12px;
    border: 0;
    background: transparent;
    color: var(--wc-text-primary, #1a1a1a);
    font: inherit;
    cursor: pointer;
    border-radius: 6px;
  }
  .wc-menu__item:hover:not(:disabled) { background: var(--wc-state-hover-bg, rgba(0, 0, 0, 0.05)); }
  .wc-menu__item:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
