<script lang="ts">
  import Input from '../Input/Input.svelte'
  let {
    value = $bindable(''),
    id = undefined,
    label = '',
    placeholder = '',
    helperText = '',
    error = false,
    disabled = false,
    required = false,
    type = 'text',
    size = 'md',
    class: className = '',
    oninput,
    onchange,
  }: {
    value?: string;
    id?: string;
    label?: string;
    placeholder?: string;
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
    required?: boolean;
    type?: string;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    oninput?: (e: Event) => void;
    onchange?: (e: Event) => void;
  } = $props()
</script>

<div class="wc-text-field {error ? 'wc-text-field--error' : ''} {disabled ? 'wc-text-field--disabled' : ''} {className}">
  {#if label}
    <label class="wc-text-field__label" for={id}>
      {label}{#if required}<span class="wc-text-field__required">*</span>{/if}
    </label>
  {/if}
  <Input bind:value {id} {type} {placeholder} {disabled} {error} {size} {oninput} {onchange} />
  {#if helperText}<div class="wc-text-field__helper">{helperText}</div>{/if}
</div>

<style>
  .wc-text-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    box-sizing: border-box;
  }
  .wc-text-field__label { font-size: 0.8125rem; font-weight: 500; color: var(--wc-text-primary, #1a1a1a); }
  .wc-text-field__required { color: var(--wc-danger, #ef4444); margin-left: 2px; }
  .wc-text-field__helper { font-size: 0.75rem; color: var(--wc-text-secondary, #6b7280); }
  .wc-text-field--error .wc-text-field__helper { color: var(--wc-danger, #ef4444); }
</style>
