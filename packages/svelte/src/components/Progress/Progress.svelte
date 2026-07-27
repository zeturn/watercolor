<script lang="ts">
  let {
    value = 0,
    color = 'primary',
    size = 'md',
    indeterminate = false,
    class: className = '',
  }: { value?: number; color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'; size?: 'sm' | 'md' | 'lg'; indeterminate?: boolean; class?: string } = $props()

  const pct = $derived(Math.max(0, Math.min(100, value)))
</script>

<div
  class="wc-progress wc-progress--{size} wc-progress--{color} {indeterminate ? 'wc-progress--indeterminate' : ''} {className}"
  role="progressbar"
  aria-valuemin={0}
  aria-valuemax={100}
  aria-valuenow={indeterminate ? undefined : pct}
>
  <div class="wc-progress__bar" style="width: {indeterminate ? 40 : pct}%"></div>
</div>

<style>
  .wc-progress {
    width: 100%;
    background: var(--wc-surface-subtle, #f1f3f5);
    border-radius: 999px;
    overflow: hidden;
    box-sizing: border-box;
  }
  .wc-progress--sm { height: 4px; }
  .wc-progress--md { height: 8px; }
  .wc-progress--lg { height: 12px; }
  .wc-progress__bar {
    height: 100%;
    background: var(--wc-accent, #3b82f6);
    border-radius: 999px;
    transition: width 0.3s ease;
  }
  .wc-progress--secondary .wc-progress__bar { background: var(--wc-text-secondary, #6b7280); }
  .wc-progress--success .wc-progress__bar { background: var(--wc-success-600, #16a34a); }
  .wc-progress--warning .wc-progress__bar { background: var(--wc-warning-600, #d97706); }
  .wc-progress--error .wc-progress__bar { background: var(--wc-danger, #ef4444); }
  .wc-progress--info .wc-progress__bar { background: var(--wc-info-600, #2563eb); }
  .wc-progress--indeterminate .wc-progress__bar {
    animation: wc-progress-indeterminate 1.2s ease-in-out infinite;
  }
  @keyframes wc-progress-indeterminate {
    0% { margin-left: -40%; }
    100% { margin-left: 100%; }
  }
</style>
