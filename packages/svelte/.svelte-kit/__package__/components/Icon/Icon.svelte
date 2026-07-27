<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    path = '',
    size = '1.25em',
    color = 'currentColor',
    strokeWidth = 2,
    class: className = '',
    title = '',
    children,
  }: { path?: string; size?: string | number; color?: string; strokeWidth?: number; class?: string; title?: string; children?: Snippet } = $props()

  const dim = $derived(typeof size === 'number' ? `${size}px` : size)
</script>

<svg
  class="wc-icon {className}"
  width={dim}
  height={dim}
  viewBox="0 0 24 24"
  fill="none"
  stroke={color}
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  role={title ? 'img' : undefined}
  aria-hidden={title ? undefined : true}
>
  {#if title}<title>{title}</title>{/if}
  {#if path}
    <path d={path} />
  {:else}
    {@render children?.()}
  {/if}
</svg>

<style>
  .wc-icon {
    display: inline-block;
    flex: 0 0 auto;
    vertical-align: middle;
  }
</style>
