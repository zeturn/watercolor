<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    label = '',
    row = false,
    class: className = '',
    children,
  }: { label?: string; row?: boolean; class?: string; children?: Snippet } = $props()
</script>

<fieldset class="wc-form-group {row ? 'wc-form-group--row' : ''} {className}">
  {#if label}<legend class="wc-form-group__label">{label}</legend>{/if}
  {@render children?.()}
</fieldset>

<style>
  .wc-form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  .wc-form-group--row { flex-direction: row; flex-wrap: wrap; }
  .wc-form-group__label { font-size: 0.8125rem; font-weight: 500; padding: 0; margin-bottom: 2px; }
</style>
