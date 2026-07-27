<script lang="ts">
  import type { Snippet } from 'svelte'
  import Radio from './Radio.svelte'
  let {
    value = $bindable(undefined),
    name = `wc-radio-group-${Math.random().toString(36).slice(2)}`,
    label = '',
    options = [],
    disabled = false,
    color = 'primary',
    direction = 'column',
    class: className = '',
    children,
    onchange,
  }: {
    value?: any;
    name?: string;
    label?: string;
    options?: Array<{ value: any; label?: string; disabled?: boolean }>;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    direction?: 'row' | 'column';
    class?: string;
    children?: Snippet;
    onchange?: (value: any, event: Event) => void;
  } = $props()

  function handleChange(optionValue: any, event: Event) {
    value = optionValue
    onchange?.(optionValue, event)
  }
</script>

<fieldset class="wc-radio-group wc-radio-group--{direction} {className}" {disabled}>
  {#if label}<legend class="wc-radio-group__label">{label}</legend>{/if}
  {#if options.length}
    {#each options as option (option.value)}
      <Radio
        value={option.value}
        checked={value === option.value}
        {name}
        {color}
        disabled={disabled || option.disabled}
        label={option.label ?? String(option.value)}
        onchange={(e: Event) => handleChange(option.value, e)}
      />
    {/each}
  {:else if children}
    {@render children()}
  {/if}
</fieldset>

<style>
  .wc-radio-group {
    display: flex;
    gap: 12px;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  .wc-radio-group--column { flex-direction: column; }
  .wc-radio-group--row { flex-direction: row; flex-wrap: wrap; }
  .wc-radio-group__label { font-size: 0.8125rem; font-weight: 500; padding: 0; margin-bottom: 4px; }
</style>
