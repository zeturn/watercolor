<script lang="ts">
  let {
    checked = $bindable(false),
    value = undefined,
    label = '',
    disabled = false,
    color = 'primary',
    name = undefined,
    class: className = '',
    onchange,
    ...rest
  }: {
    checked?: boolean;
    value?: any;
    label?: string;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    name?: string;
    class?: string;
    onchange?: (e: Event) => void;
    [key: string]: any
  } = $props()
</script>

<label class="wc-radio wc-radio--{color} {disabled ? 'wc-radio--disabled' : ''} {className}">
  <input
    type="radio"
    class="wc-radio__input"
    {checked}
    {value}
    {name}
    {disabled}
    onchange={(e) => {
      checked = (e.currentTarget as HTMLInputElement).checked
      onchange?.(e)
    }}
    {...rest}
  />
  <span class="wc-radio__dot" aria-hidden="true"></span>
  {#if label}<span class="wc-radio__label">{label}</span>{/if}
</label>

<style>
  .wc-radio {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: var(--wc-text-primary, #1a1a1a);
    font-size: 0.875rem;
  }
  .wc-radio--disabled { cursor: not-allowed; opacity: 0.6; }
  .wc-radio__input { position: absolute; opacity: 0; width: 0; height: 0; }
  .wc-radio__dot {
    display: inline-flex;
    width: 20px;
    height: 20px;
    border: 2px solid var(--wc-border-strong, rgba(0, 0, 0, 0.3));
    border-radius: 50%;
    background: var(--wc-surface-canvas, #fff);
    box-sizing: border-box;
    transition: border-color 0.15s ease;
    position: relative;
  }
  .wc-radio__dot::after {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: var(--wc-accent, #3b82f6);
    transform: scale(0);
    transition: transform 0.15s ease;
  }
  .wc-radio__input:checked + .wc-radio__dot { border-color: var(--wc-accent, #3b82f6); }
  .wc-radio__input:checked + .wc-radio__dot::after { transform: scale(1); }
  .wc-radio--success .wc-radio__input:checked + .wc-radio__dot { border-color: var(--wc-success-600, #16a34a); }
  .wc-radio--success .wc-radio__input:checked + .wc-radio__dot::after { background: var(--wc-success-600, #16a34a); }
  .wc-radio--warning .wc-radio__input:checked + .wc-radio__dot { border-color: var(--wc-warning-600, #d97706); }
  .wc-radio--warning .wc-radio__input:checked + .wc-radio__dot::after { background: var(--wc-warning-600, #d97706); }
  .wc-radio--error .wc-radio__input:checked + .wc-radio__dot { border-color: var(--wc-danger, #ef4444); }
  .wc-radio--error .wc-radio__input:checked + .wc-radio__dot::after { background: var(--wc-danger, #ef4444); }
  .wc-radio--info .wc-radio__input:checked + .wc-radio__dot { border-color: var(--wc-info-600, #2563eb); }
  .wc-radio--info .wc-radio__input:checked + .wc-radio__dot::after { background: var(--wc-info-600, #2563eb); }
  .wc-radio__input:focus-visible + .wc-radio__dot { box-shadow: 0 0 0 3px var(--wc-state-focus-ring, rgba(59, 130, 246, 0.25)); }
</style>
