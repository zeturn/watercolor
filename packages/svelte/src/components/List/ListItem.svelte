<script lang="ts">
  import type { Snippet } from 'svelte'
  let { disabled = false, class: className = '', children, onclick }: { disabled?: boolean; class?: string; children?: Snippet; onclick?: (e: MouseEvent) => void } = $props()
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<li class="wc-list-item {disabled ? 'wc-list-item--disabled' : ''} {className}" role={onclick ? 'button' : undefined} tabindex={onclick && !disabled ? 0 : undefined} {onclick} onkeydown={(e) => { if (onclick && !disabled && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); onclick(e as unknown as MouseEvent) } }}>{@render children?.()}</li>

<style>
  .wc-list-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    color: var(--wc-text-primary, #1a1a1a);
    box-sizing: border-box;
  }
  .wc-list-item--disabled { opacity: 0.55; cursor: not-allowed; }
  .wc-list-item[role='button'] { cursor: pointer; }
  .wc-list-item[role='button']:hover { background: var(--wc-state-hover-bg, rgba(0, 0, 0, 0.03)); }
</style>
