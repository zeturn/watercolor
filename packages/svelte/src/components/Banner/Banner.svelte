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

<div class="wc-banner wc-banner--{severity} {className}" role="status">
  <div class="wc-banner__body">
    {#if title}<div class="wc-banner__title">{title}</div>{/if}
    <div class="wc-banner__content">{@render children?.()}</div>
  </div>
  {#if onclose}
    <button class="wc-banner__close" type="button" aria-label="Close" onclick={onclose}>×</button>
  {/if}
</div>

<style>
  .wc-banner {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
    padding: 10px 16px;
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.08));
    box-sizing: border-box;
    color: var(--wc-text-primary, #1a1a1a);
  }
  .wc-banner--info { background: var(--wc-bg-info, #eff6ff); border-color: var(--wc-info-600, #2563eb); }
  .wc-banner--success { background: var(--wc-bg-success, #f0fdf4); border-color: var(--wc-success-600, #16a34a); }
  .wc-banner--warning { background: var(--wc-bg-warning, #fffbeb); border-color: var(--wc-warning-600, #d97706); }
  .wc-banner--error { background: var(--wc-bg-error, #fef2f2); border-color: var(--wc-danger, #ef4444); }
  .wc-banner__body { flex: 1 1 auto; min-width: 0; }
  .wc-banner__title { font-weight: 600; margin-bottom: 2px; }
  .wc-banner__content { font-size: 0.875rem; line-height: 1.5; }
  .wc-banner__close {
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
  .wc-banner__close:hover { opacity: 1; }
</style>
