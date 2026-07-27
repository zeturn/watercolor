<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    text = 'WATERMARK',
    content = '',
    rotate = -20,
    opacity = 0.12,
    class: className = '',
    children,
  }: { text?: string; content?: string; rotate?: number; opacity?: number; class?: string; children?: Snippet } = $props()

  const label = $derived(content || text)
</script>

<div class="wc-watermark {className}">
  <div class="wc-watermark__layer" style="opacity: {opacity}; --wc-wm-rotate: {rotate}deg" aria-hidden="true">
    {#each Array(9) as _, r (r)}
      <div class="wc-watermark__row">
        {#each Array(6) as _, c (c)}
          <span class="wc-watermark__item">{label}</span>
        {/each}
      </div>
    {/each}
  </div>
  <div class="wc-watermark__content">{@render children?.()}</div>
</div>

<style>
  .wc-watermark { position: relative; box-sizing: border-box; }
  .wc-watermark__layer {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    pointer-events: none;
    overflow: hidden;
    transform: rotate(var(--wc-wm-rotate, -20deg));
    z-index: 0;
  }
  .wc-watermark__row { display: flex; gap: 48px; justify-content: center; }
  .wc-watermark__item { font-size: 1.25rem; font-weight: 700; color: var(--wc-text-primary, #1a1a1a); white-space: nowrap; }
  .wc-watermark__content { position: relative; z-index: 1; }
</style>
