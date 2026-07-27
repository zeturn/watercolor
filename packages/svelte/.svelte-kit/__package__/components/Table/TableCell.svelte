<script lang="ts">
  import type { Snippet } from 'svelte'
  let { as = 'td', align = 'left', class: className = '', children, ...rest }: { as?: 'td' | 'th'; align?: 'left' | 'center' | 'right'; class?: string; children?: Snippet; [key: string]: any } = $props()
</script>
<svelte:element this={as} class="wc-table-cell wc-table-cell--{align} {className}" {...rest}>{@render children?.()}</svelte:element>

<style>
  .wc-table-cell { border-bottom: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.08)); }
  .wc-table-cell--left { text-align: left; }
  .wc-table-cell--center { text-align: center; }
  .wc-table-cell--right { text-align: right; }
</style>
