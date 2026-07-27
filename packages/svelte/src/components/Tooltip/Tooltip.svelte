<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    text = '',
    placement = 'top',
    class: className = '',
    children,
  }: { text?: string; placement?: 'top' | 'bottom' | 'left' | 'right'; class?: string; children?: Snippet } = $props()

  let visible = $state(false)
</script>

<span
  class="wc-tooltip {className}"
  role="presentation"
  onmouseenter={() => (visible = true)}
  onmouseleave={() => (visible = false)}
  onfocusin={() => (visible = true)}
  onfocusout={() => (visible = false)}
>
  {@render children?.()}
  {#if visible && text}
    <span class="wc-tooltip__bubble wc-tooltip__bubble--{placement}" role="tooltip">{text}</span>
  {/if}
</span>

<style>
  .wc-tooltip {
    position: relative;
    display: inline-flex;
  }
  .wc-tooltip__bubble {
    position: absolute;
    z-index: 1200;
    padding: 4px 8px;
    border-radius: 6px;
    background: var(--wc-text-primary, #1a1a1a);
    color: var(--wc-surface-canvas, #fff);
    font-size: 0.75rem;
    line-height: 1.4;
    white-space: nowrap;
    pointer-events: none;
  }
  .wc-tooltip__bubble--top { bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 6px; }
  .wc-tooltip__bubble--bottom { top: 100%; left: 50%; transform: translateX(-50%); margin-top: 6px; }
  .wc-tooltip__bubble--left { right: 100%; top: 50%; transform: translateY(-50%); margin-right: 6px; }
  .wc-tooltip__bubble--right { left: 100%; top: 50%; transform: translateY(-50%); margin-left: 6px; }
</style>
