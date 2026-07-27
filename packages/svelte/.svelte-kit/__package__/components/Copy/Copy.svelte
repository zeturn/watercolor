<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    text = '',
    label = 'Copy',
    copiedLabel = 'Copied',
    timeout = 1500,
    class: className = '',
    children,
  }: { text?: string; label?: string; copiedLabel?: string; timeout?: number; class?: string; children?: Snippet } = $props()

  let copied = $state(false)
  let timer: ReturnType<typeof setTimeout> | undefined

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      copied = true
      clearTimeout(timer)
      timer = setTimeout(() => (copied = false), timeout)
    } catch {
      /* clipboard unavailable */
    }
  }
</script>

<button class="wc-copy {className}" type="button" onclick={copy}>{#if children}{@render children()}{:else}{copied ? copiedLabel : label}{/if}</button>

<style>
  .wc-copy {
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.15));
    background: var(--wc-surface-canvas, #fff);
    color: var(--wc-text-primary, #1a1a1a);
    padding: 6px 12px;
    border-radius: 8px;
    font: inherit;
    font-size: 0.8125rem;
    cursor: pointer;
  }
  .wc-copy:hover { background: var(--wc-state-hover-bg, rgba(0, 0, 0, 0.04)); }
</style>
