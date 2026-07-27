<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    value = $bindable(0),
    variant = 'default',
    options = [],
    class: className = '',
    children,
    onchange,
  }: {
    value?: any;
    variant?: 'default' | 'contained' | 'pill';
    options?: Array<{ value: any; label: string; disabled?: boolean }>;
    class?: string;
    children?: Snippet;
    onchange?: (value: any) => void
  } = $props()
</script>

<div class="wc-tabs wc-tabs--{variant} {className}">
  <div class="wc-tabs__list" role="tablist">
    {#each options as opt, i (opt.value ?? i)}
      <button
        class="wc-tabs__tab {value === opt.value ? 'wc-tabs__tab--active' : ''}"
        role="tab"
        aria-selected={value === opt.value}
        disabled={opt.disabled}
        onclick={() => {
          if (opt.disabled) return
          value = opt.value
          onchange?.(opt.value)
        }}
      >{opt.label}</button>
    {/each}
  </div>
  {#if children}{@render children()}{/if}
</div>

<style>
  .wc-tabs { box-sizing: border-box; }
  .wc-tabs__list {
    display: flex;
    gap: 4px;
    border-bottom: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.1));
    overflow-x: auto;
  }
  .wc-tabs__tab {
    border: 0;
    background: transparent;
    padding: 10px 16px;
    font: inherit;
    color: var(--wc-text-secondary, #6b7280);
    cursor: pointer;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
  }
  .wc-tabs__tab:hover:not(:disabled) { color: var(--wc-text-primary, #1a1a1a); }
  .wc-tabs__tab--active { color: var(--wc-accent, #3b82f6); border-bottom-color: var(--wc-accent, #3b82f6); font-weight: 600; }
  .wc-tabs__tab:disabled { opacity: 0.5; cursor: not-allowed; }
  .wc-tabs--pill .wc-tabs__list { border-bottom: 0; gap: 6px; }
  .wc-tabs--pill .wc-tabs__tab { border-radius: 999px; border-bottom: 0; }
  .wc-tabs--pill .wc-tabs__tab--active { background: var(--wc-accent, #3b82f6); color: #fff; }
  .wc-tabs--contained .wc-tabs__list { border-bottom: 0; background: var(--wc-surface-subtle, #f1f3f5); border-radius: 8px; padding: 4px; }
  .wc-tabs--contained .wc-tabs__tab--active { background: var(--wc-surface-canvas, #fff); border-radius: 6px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); }
</style>
