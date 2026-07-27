<script lang="ts">
  let {
    src = '',
    alt = '',
    label = '',
    size = 'md',
    shape = 'circle',
    color = 'default',
  }: { src?: string; alt?: string; label?: string; size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; shape?: 'circle' | 'square'; color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' } = $props()

  const initials = $derived(
    (label || alt)
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => word[0] ?? '')
      .slice(0, 2)
      .join('')
      .toUpperCase()
  )
</script>

<span class="wc-avatar wc-avatar--{size} wc-avatar--{shape} wc-avatar--{color}">
  {#if src}
    <img class="wc-avatar__img" src={src} alt={alt} />
  {:else}
    <span class="wc-avatar__initials">{initials}</span>
  {/if}
</span>

<style>
  .wc-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex: 0 0 auto;
    background: var(--wc-surface-subtle, #f1f3f5);
    color: var(--wc-text-primary, #1a1a1a);
    font-weight: 600;
    box-sizing: border-box;
  }
  .wc-avatar--circle { border-radius: 50%; }
  .wc-avatar--square { border-radius: 8px; }
  .wc-avatar--xs { width: 24px; height: 24px; font-size: 0.625rem; }
  .wc-avatar--sm { width: 32px; height: 32px; font-size: 0.75rem; }
  .wc-avatar--md { width: 40px; height: 40px; font-size: 0.875rem; }
  .wc-avatar--lg { width: 56px; height: 56px; font-size: 1.125rem; }
  .wc-avatar--xl { width: 72px; height: 72px; font-size: 1.5rem; }
  .wc-avatar--primary,
  .wc-avatar--secondary { background: var(--wc-accent, #3b82f6); color: #fff; }
  .wc-avatar--success { background: var(--wc-success-600, #16a34a); color: #fff; }
  .wc-avatar--warning { background: var(--wc-warning-600, #d97706); color: #fff; }
  .wc-avatar--error { background: var(--wc-danger, #ef4444); color: #fff; }
  .wc-avatar--info { background: var(--wc-info-600, #2563eb); color: #fff; }
  .wc-avatar__img { width: 100%; height: 100%; object-fit: cover; }
</style>
