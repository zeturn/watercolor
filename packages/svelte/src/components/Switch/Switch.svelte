<script lang="ts">
  let {
    checked = $bindable(false),
    label = '',
    disabled = false,
    color = 'primary',
    size = 'md',
    class: className = '',
    onchange,
    ...rest
  }: {
    checked?: boolean;
    label?: string;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    onchange?: (e: Event) => void;
    [key: string]: any
  } = $props()
</script>

<label class="wc-switch wc-switch--{color} wc-switch--{size} {disabled ? 'wc-switch--disabled' : ''} {className}">
  <input type="checkbox" class="wc-switch__input" bind:checked {disabled} {onchange} {...rest} />
  <span class="wc-switch__track" aria-hidden="true"><span class="wc-switch__thumb"></span></span>
  {#if label}<span class="wc-switch__label">{label}</span>{/if}
</label>

<style>
  .wc-switch {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: var(--wc-text-primary, #1a1a1a);
    font-size: 0.875rem;
  }
  .wc-switch--disabled { cursor: not-allowed; opacity: 0.6; }
  .wc-switch__input { position: absolute; opacity: 0; width: 0; height: 0; }
  .wc-switch__track {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 40px;
    height: 22px;
    border-radius: 999px;
    background: var(--wc-surface-subtle, #d1d5db);
    transition: background 0.2s ease;
    flex: 0 0 auto;
  }
  .wc-switch__thumb {
    position: absolute;
    left: 2px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease;
  }
  .wc-switch__input:checked + .wc-switch__track { background: var(--wc-accent, #3b82f6); }
  .wc-switch__input:checked + .wc-switch__track .wc-switch__thumb { transform: translateX(18px); }
  .wc-switch--success .wc-switch__input:checked + .wc-switch__track { background: var(--wc-success-600, #16a34a); }
  .wc-switch--warning .wc-switch__input:checked + .wc-switch__track { background: var(--wc-warning-600, #d97706); }
  .wc-switch--error .wc-switch__input:checked + .wc-switch__track { background: var(--wc-danger, #ef4444); }
  .wc-switch--info .wc-switch__input:checked + .wc-switch__track { background: var(--wc-info-600, #2563eb); }
  .wc-switch--sm .wc-switch__track { width: 32px; height: 18px; }
  .wc-switch--sm .wc-switch__thumb { width: 14px; height: 14px; }
  .wc-switch--sm .wc-switch__input:checked + .wc-switch__track .wc-switch__thumb { transform: translateX(14px); }
  .wc-switch--lg .wc-switch__track { width: 48px; height: 26px; }
  .wc-switch--lg .wc-switch__thumb { width: 22px; height: 22px; }
  .wc-switch--lg .wc-switch__input:checked + .wc-switch__track .wc-switch__thumb { transform: translateX(22px); }
  .wc-switch__input:focus-visible + .wc-switch__track { box-shadow: 0 0 0 3px var(--wc-state-focus-ring, rgba(59, 130, 246, 0.25)); }
</style>
