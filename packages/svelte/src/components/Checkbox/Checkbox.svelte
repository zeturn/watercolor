<script lang="ts">
  let {
    checked = $bindable(false),
    label = '',
    disabled = false,
    color = 'primary',
    indeterminate = false,
    class: className = '',
    onchange,
    ...rest
  }: {
    checked?: boolean;
    label?: string;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    indeterminate?: boolean;
    class?: string;
    onchange?: (e: Event) => void;
    [key: string]: any
  } = $props()
</script>

<label class="wc-checkbox wc-checkbox--{color} {disabled ? 'wc-checkbox--disabled' : ''} {className}">
  <input
    type="checkbox"
    class="wc-checkbox__input"
    bind:checked
    {indeterminate}
    {disabled}
    {onchange}
    {...rest}
  />
  <span class="wc-checkbox__box" aria-hidden="true">
    {#if indeterminate}
      <svg viewBox="0 0 24 24" class="wc-checkbox__mark"><path d="M5 12h14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" /></svg>
    {:else if checked}
      <svg viewBox="0 0 24 24" class="wc-checkbox__mark"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" /></svg>
    {/if}
  </span>
  {#if label}<span class="wc-checkbox__label">{label}</span>{/if}
</label>

<style>
  .wc-checkbox {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: var(--wc-text-primary, #1a1a1a);
    font-size: 0.875rem;
  }
  .wc-checkbox--disabled { cursor: not-allowed; opacity: 0.6; }
  .wc-checkbox__input { position: absolute; opacity: 0; width: 0; height: 0; }
  .wc-checkbox__box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 2px solid var(--wc-border-strong, rgba(0, 0, 0, 0.3));
    border-radius: 6px;
    background: var(--wc-surface-canvas, #fff);
    color: #fff;
    box-sizing: border-box;
    transition: background 0.15s ease, border-color 0.15s ease;
  }
  .wc-checkbox__input:checked + .wc-checkbox__box,
  .wc-checkbox__input:indeterminate + .wc-checkbox__box {
    background: var(--wc-accent, #3b82f6);
    border-color: var(--wc-accent, #3b82f6);
  }
  .wc-checkbox--success .wc-checkbox__input:checked + .wc-checkbox__box,
  .wc-checkbox--success .wc-checkbox__input:indeterminate + .wc-checkbox__box { background: var(--wc-success-600, #16a34a); border-color: var(--wc-success-600, #16a34a); }
  .wc-checkbox--warning .wc-checkbox__input:checked + .wc-checkbox__box,
  .wc-checkbox--warning .wc-checkbox__input:indeterminate + .wc-checkbox__box { background: var(--wc-warning-600, #d97706); border-color: var(--wc-warning-600, #d97706); }
  .wc-checkbox--error .wc-checkbox__input:checked + .wc-checkbox__box,
  .wc-checkbox--error .wc-checkbox__input:indeterminate + .wc-checkbox__box { background: var(--wc-danger, #ef4444); border-color: var(--wc-danger, #ef4444); }
  .wc-checkbox--info .wc-checkbox__input:checked + .wc-checkbox__box,
  .wc-checkbox--info .wc-checkbox__input:indeterminate + .wc-checkbox__box { background: var(--wc-info-600, #2563eb); border-color: var(--wc-info-600, #2563eb); }
  .wc-checkbox__input:focus-visible + .wc-checkbox__box { box-shadow: 0 0 0 3px var(--wc-state-focus-ring, rgba(59, 130, 246, 0.25)); }
  .wc-checkbox__mark { width: 14px; height: 14px; }
</style>
