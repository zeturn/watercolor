<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    color = 'default',
    dot = false,
    max = 99,
    value = undefined,
    class: className = '',
    children,
  }: { color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'; dot?: boolean; max?: number; value?: number; class?: string; children?: Snippet } = $props()

  const display = $derived(value === undefined ? '' : value > max ? `${max}+` : `${value}`)
</script>

<span class="wc-badge wc-badge--{color} {className}">
  {#if dot}<span class="wc-badge__dot"></span>{/if}
  {#if children}{@render children()}{:else if display}{display}{/if}
</span>

<style>
  .wc-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: 999px;
    font-size: 0.6875rem;
    font-weight: 600;
    line-height: 1;
    color: #fff;
    background: var(--wc-text-secondary, #6b7280);
    box-sizing: border-box;
  }
  .wc-badge--primary,
  .wc-badge--secondary { background: var(--wc-accent, #3b82f6); }
  .wc-badge--success { background: var(--wc-success-600, #16a34a); }
  .wc-badge--warning { background: var(--wc-warning-600, #d97706); }
  .wc-badge--error { background: var(--wc-danger, #ef4444); }
  .wc-badge--info { background: var(--wc-info-600, #2563eb); }
  .wc-badge__dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }
</style>
