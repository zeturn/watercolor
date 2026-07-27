<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    code = '',
    language = '',
    class: className = '',
    children,
  }: { code?: string; language?: string; class?: string; children?: Snippet } = $props()
</script>

<div class="wc-code-block {className}">
  {#if language}<div class="wc-code-block__header"><span class="wc-code-block__lang">{language}</span></div>{/if}
  <pre class="wc-code-block__pre"><code>{#if children}{@render children()}{:else}{code}{/if}</code></pre>
</div>

<style>
  .wc-code-block {
    background: var(--wc-surface-subtle, #1e1e2e);
    color: #e4e4e7;
    border-radius: 8px;
    overflow: hidden;
    box-sizing: border-box;
  }
  .wc-code-block__header { padding: 6px 12px; font-size: 0.75rem; color: #a1a1aa; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
  .wc-code-block__pre { margin: 0; padding: 12px 16px; overflow-x: auto; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.8125rem; line-height: 1.5; }
</style>
