<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    as = 'div',
    class: className = '',
    children,
    ...rest
  }: { as?: string; class?: string; children?: Snippet; [key: string]: any } = $props()
</script>

<svelte:element this={as} class="wc-box {className}" {...rest}>{@render children?.()}</svelte:element>

<style>
  .wc-box {
    box-sizing: border-box;
  }
</style>
