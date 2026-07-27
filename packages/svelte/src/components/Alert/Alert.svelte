<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    severity = 'info',
    title = '',
    class: className = '',
    children,
    onclose,
  }: { severity?: 'info' | 'success' | 'warning' | 'error'; title?: string; class?: string; children?: Snippet; onclose?: (event: MouseEvent) => void } = $props()
</script>

<div class="wc-alert wc-alert--{severity} {className}" role="alert">
  <div class="wc-alert__body">
    {#if title}<div class="wc-alert__title">{title}</div>{/if}
    <div class="wc-alert__content">{@render children?.()}</div>
  </div>
  {#if onclose}
    <button class="wc-alert__close" type="button" aria-label="Close" onclick={onclose}>×</button>
  {/if}
</div>

<style>
  .wc-alert {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 8px;
    border-left: 4px solid var(--wc-info-600, #2563eb);
    background: var(--wc-surface-subtle, #f1f3f5);
    color: var(--wc-text-primary, #1a1a1a);
    box-sizing: border-box;
  }
  .wc-alert--info { border-left-color: var(--wc-info-600, #2563eb); background: var(--wc-bg-info, #eff6ff); }
  .wc-alert--success { border-left-color: var(--wc-success-600, #16a34a); background: var(--wc-bg-success, #f0fdf4); }
  .wc-alert--warning { border-left-color: var(--wc-warning-600, #d97706); background: var(--wc-bg-warning, #fffbeb); }
  .wc-alert--error { border-left-color: var(--wc-danger, #ef4444); background: var(--wc-bg-error, #fef2f2); }
  .wc-alert__body { flex: 1 1 auto; min-width: 0; }
  .wc-alert__title { font-weight: 600; margin-bottom: 2px; }
  .wc-alert__content { font-size: 0.875rem; line-height: 1.5; }
  .wc-alert__close {
    flex: 0 0 auto;
    border: 0;
    background: transparent;
    color: inherit;
    font-size: 1.25rem;
    line-height: 1;
    cursor: pointer;
    padding: 0 4px;
    opacity: 0.7;
  }
  .wc-alert__close:hover { opacity: 1; }
</style>
