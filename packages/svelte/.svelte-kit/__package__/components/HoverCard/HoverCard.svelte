<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    trigger,
    placement = 'top',
    class: className = '',
    children,
  }: { trigger?: Snippet; placement?: 'top' | 'bottom' | 'left' | 'right'; class?: string; children?: Snippet } = $props()

  let open = $state(false)
</script>

<span
  class="wc-hover-card {className}"
  role="presentation"
  onmouseenter={() => (open = true)}
  onmouseleave={() => (open = false)}
  onfocusin={() => (open = true)}
  onfocusout={() => (open = false)}
>
  {#if trigger}{@render trigger()}{/if}
  {#if open && children}
    <span class="wc-hover-card__pop wc-hover-card__pop--{placement}" role="dialog">{@render children()}</span>
  {/if}
</span>

<style>
  .wc-hover-card { position: relative; display: inline-flex; }
  .wc-hover-card__pop {
    position: absolute;
    z-index: 1100;
    max-width: 280px;
    padding: 10px 12px;
    border-radius: 8px;
    background: var(--wc-surface-canvas, #fff);
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.1));
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    font-size: 0.8125rem;
    color: var(--wc-text-primary, #1a1a1a);
  }
  .wc-hover-card__pop--top { bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 8px; }
  .wc-hover-card__pop--bottom { top: 100%; left: 50%; transform: translateX(-50%); margin-top: 8px; }
  .wc-hover-card__pop--left { right: 100%; top: 50%; transform: translateY(-50%); margin-right: 8px; }
  .wc-hover-card__pop--right { left: 100%; top: 50%; transform: translateY(-50%); margin-left: 8px; }
</style>
