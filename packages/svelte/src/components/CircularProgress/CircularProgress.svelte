<script lang="ts">
  let {
    value = 0,
    size = 'md',
    color = 'primary',
    thickness = 4,
    indeterminate = false,
    class: className = '',
  }: { value?: number; size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'; thickness?: number; indeterminate?: boolean; class?: string } = $props()

  const pct = $derived(Math.max(0, Math.min(100, value)))
  const r = 42
  const circumference = 2 * Math.PI * r
  const offset = $derived(circumference * (1 - pct / 100))
  const dim = $derived({ xs: 24, sm: 32, md: 40, lg: 56, xl: 72 }[size] ?? 40)
</script>

<svg
  class="wc-circular-progress wc-circular-progress--{color} {indeterminate ? 'wc-circular-progress--indeterminate' : ''} {className}"
  width={dim}
  height={dim}
  viewBox="0 0 100 100"
  role="progressbar"
  aria-valuemin={0}
  aria-valuemax={100}
  aria-valuenow={indeterminate ? undefined : pct}
>
  <circle class="wc-circular-progress__track" cx="50" cy="50" r={r} fill="none" stroke-width={thickness} />
  <circle
    class="wc-circular-progress__bar"
    cx="50"
    cy="50"
    r={r}
    fill="none"
    stroke-width={thickness}
    stroke-dasharray={circumference}
    stroke-dashoffset={indeterminate ? circumference * 0.75 : offset}
    stroke-linecap="round"
    transform="rotate(-90 50 50)"
  />
</svg>

<style>
  .wc-circular-progress { display: inline-block; }
  .wc-circular-progress__track { stroke: var(--wc-surface-subtle, #f1f3f5); }
  .wc-circular-progress__bar {
    stroke: var(--wc-accent, #3b82f6);
    transition: stroke-dashoffset 0.3s ease;
  }
  .wc-circular-progress--secondary .wc-circular-progress__bar { stroke: var(--wc-text-secondary, #6b7280); }
  .wc-circular-progress--success .wc-circular-progress__bar { stroke: var(--wc-success-600, #16a34a); }
  .wc-circular-progress--warning .wc-circular-progress__bar { stroke: var(--wc-warning-600, #d97706); }
  .wc-circular-progress--error .wc-circular-progress__bar { stroke: var(--wc-danger, #ef4444); }
  .wc-circular-progress--info .wc-circular-progress__bar { stroke: var(--wc-info-600, #2563eb); }
  .wc-circular-progress--indeterminate {
    animation: wc-circular-spin 1s linear infinite;
  }
  @keyframes wc-circular-spin {
    to { transform: rotate(360deg); }
  }
</style>
