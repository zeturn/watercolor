<script lang="ts">
  let {
    variant = 'text',
    width = '100%',
    height = undefined,
    animation = true,
    class: className = '',
  }: { variant?: 'text' | 'rect' | 'circle'; width?: string | number; height?: string | number; animation?: boolean; class?: string } = $props()
</script>

<span
  class="wc-skeleton wc-skeleton--{variant} {animation ? 'wc-skeleton--animated' : ''} {className}"
  style="width: {typeof width === 'number' ? `${width}px` : width}; {height ? `height: ${typeof height === 'number' ? `${height}px` : height};` : ''}"
  aria-hidden="true"
></span>

<style>
  .wc-skeleton {
    display: block;
    background: var(--wc-surface-subtle, #f1f3f5);
    border-radius: 4px;
    box-sizing: border-box;
  }
  .wc-skeleton--text { height: 0.8em; border-radius: 4px; margin-block: 0.2em; }
  .wc-skeleton--rect { border-radius: 8px; min-height: 16px; }
  .wc-skeleton--circle { border-radius: 50%; aspect-ratio: 1 / 1; }
  .wc-skeleton--animated {
    background: linear-gradient(90deg, var(--wc-surface-subtle, #f1f3f5) 25%, rgba(0, 0, 0, 0.06) 37%, var(--wc-surface-subtle, #f1f3f5) 63%);
    background-size: 400% 100%;
    animation: wc-skeleton-shimmer 1.4s ease infinite;
  }
  @keyframes wc-skeleton-shimmer {
    0% { background-position: 100% 50%; }
    100% { background-position: 0 50%; }
  }
</style>
