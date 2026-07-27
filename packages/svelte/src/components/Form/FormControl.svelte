<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    size = 'md',
    error = false,
    disabled = false,
    fullWidth = true,
    class: className = '',
    children,
  }: { size?: 'sm' | 'md' | 'lg'; error?: boolean; disabled?: boolean; fullWidth?: boolean; class?: string; children?: Snippet } = $props()
</script>

<div class="wc-form-control wc-form-control--{size} {error ? 'wc-form-control--error' : ''} {disabled ? 'wc-form-control--disabled' : ''} {fullWidth ? 'wc-form-control--full' : ''} {className}">{@render children?.()}</div>

<style>
  .wc-form-control { display: inline-flex; flex-direction: column; gap: 4px; box-sizing: border-box; }
  .wc-form-control--full { width: 100%; }
</style>
