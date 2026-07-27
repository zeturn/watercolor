<script lang="ts">
  let {
    value = $bindable(''),
    options = [],
    placeholder = '',
    disabled = false,
    error = false,
    multiple = false,
    size = 'md',
    class: className = '',
    onchange,
    ...rest
  }: {
    value?: any;
    options?: Array<{ value: any; label: string; disabled?: boolean }>;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    multiple?: boolean;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    onchange?: (e: Event) => void;
    [key: string]: any
  } = $props()
</script>

<div class="wc-select wc-select--{size} {error ? 'wc-select--error' : ''} {disabled ? 'wc-select--disabled' : ''} {className}">
  {#if multiple}
    <select class="wc-select__field" bind:value {disabled} multiple {onchange} {...rest}>
      {#each options as option (option.value)}
        <option value={option.value} disabled={option.disabled}>{option.label}</option>
      {/each}
    </select>
  {:else}
    <select class="wc-select__field" bind:value {disabled} {onchange} {...rest}>
      {#if placeholder}
        <option value="" disabled selected={value === ''}>{placeholder}</option>
      {/if}
      {#each options as option (option.value)}
        <option value={option.value} disabled={option.disabled}>{option.label}</option>
      {/each}
    </select>
  {/if}
  <span class="wc-select__arrow" aria-hidden="true">▾</span>
</div>

<style>
  .wc-select {
    position: relative;
    display: inline-flex;
    width: 100%;
    box-sizing: border-box;
  }
  .wc-select__field {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.15));
    border-radius: 8px;
    background: var(--wc-surface-canvas, #fff);
    color: var(--wc-text-primary, #1a1a1a);
    font: inherit;
    cursor: pointer;
    box-sizing: border-box;
  }
  .wc-select--sm .wc-select__field { min-height: 32px; padding: 0 28px 0 10px; font-size: 0.8125rem; }
  .wc-select--md .wc-select__field { min-height: 40px; padding: 0 30px 0 12px; font-size: 0.875rem; }
  .wc-select--lg .wc-select__field { min-height: 48px; padding: 0 32px 0 14px; font-size: 1rem; }
  .wc-select__field:focus { outline: none; border-color: var(--wc-accent, #3b82f6); box-shadow: 0 0 0 3px var(--wc-state-focus-ring, rgba(59, 130, 246, 0.25)); }
  .wc-select--error .wc-select__field { border-color: var(--wc-danger, #ef4444); }
  .wc-select--disabled .wc-select__field { background: var(--wc-surface-subtle, #f1f3f5); opacity: 0.7; cursor: not-allowed; }
  .wc-select__arrow {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: var(--wc-text-secondary, #6b7280);
    font-size: 0.75rem;
  }
</style>
