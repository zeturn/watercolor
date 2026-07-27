<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    color = 'default',
    label = '',
    icon = '',
    disabled = false,
    class: className = '',
    children,
    onclick,
    onclose,
  }: {
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    label?: string;
    icon?: string;
    disabled?: boolean;
    class?: string;
    children?: Snippet;
    onclick?: (event: MouseEvent) => void;
    onclose?: (event: MouseEvent) => void;
  } = $props()
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<span
  class="wc-chip wc-chip--{color} {disabled ? 'wc-chip--disabled' : ''} {className}"
  role={onclick ? 'button' : undefined}
  tabindex={disabled ? undefined : onclick ? 0 : undefined}
  onclick={disabled ? undefined : onclick}
  onkeydown={(e) => { if (disabled || !onclick) return; if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onclick(e as unknown as MouseEvent) } }}
>
  {#if icon}<span class="wc-chip__icon">{@html icon}</span>{/if}
  <span class="wc-chip__label">{label}{@render children?.()}</span>
  {#if onclose}
    <button class="wc-chip__close" type="button" aria-label="Remove" onclick={(e) => { e.stopPropagation(); onclose(e) }}>×</button>
  {/if}
</span>

<style>
  .wc-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    max-width: 100%;
    height: 32px;
    padding: 0 12px;
    border-radius: 999px;
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1;
    color: var(--wc-text-primary, #1a1a1a);
    background: var(--wc-surface-subtle, #f1f3f5);
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.08));
    box-sizing: border-box;
    cursor: default;
    user-select: none;
  }
  .wc-chip--primary,
  .wc-chip--secondary { color: #fff; background: var(--wc-accent, #3b82f6); border-color: transparent; }
  .wc-chip--success { color: #fff; background: var(--wc-success-600, #16a34a); border-color: transparent; }
  .wc-chip--warning { color: #fff; background: var(--wc-warning-600, #d97706); border-color: transparent; }
  .wc-chip--error { color: #fff; background: var(--wc-danger, #ef4444); border-color: transparent; }
  .wc-chip--info { color: #fff; background: var(--wc-info-600, #2563eb); border-color: transparent; }
  .wc-chip--disabled { opacity: 0.55; cursor: not-allowed; }
  .wc-chip__label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .wc-chip__icon { display: inline-flex; }
  .wc-chip__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    margin-right: -4px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: inherit;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
  }
  .wc-chip__close:hover { background: rgba(0, 0, 0, 0.08); }
</style>
