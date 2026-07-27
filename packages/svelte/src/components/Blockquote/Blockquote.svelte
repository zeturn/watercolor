<script lang="ts">
  import type { Snippet } from 'svelte'
  import Card from '../Card/Card.svelte'

  let {
    cite = '',
    variant = 'default',
    noBorder = true,
    interactive = true,
    size = 'medium',
    color = 'default',
    class: className = '',
    children,
  }: {
    cite?: string
    variant?: 'default' | 'minimal' | 'card'
    noBorder?: boolean
    interactive?: boolean
    size?: 'small' | 'medium' | 'large'
    color?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'
    class?: string
    children?: Snippet
  } = $props()

  const isCard = $derived(variant === 'card')

  const blockquoteClasses = $derived(
    [
      'wc-blockquote',
      `wc-blockquote--${variant}`,
      `wc-blockquote--${size}`,
      `wc-blockquote--${color}`,
      noBorder ? 'wc-blockquote--no-border' : '',
      interactive ? 'wc-blockquote--interactive' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')
  )
</script>

{#if isCard}
  <Card variant="filled" {color} {size} {interactive} {noBorder} class={className}>
    <p class="quote-text">{@render children?.()}</p>
    {#if cite}<footer class="quote-cite">— {cite}</footer>{/if}
  </Card>
{:else}
  <blockquote class={blockquoteClasses}>
    <p class="quote-text">{@render children?.()}</p>
    {#if cite}<footer class="quote-cite">— {cite}</footer>{/if}
  </blockquote>
{/if}

<style>
  .wc-blockquote {
    margin: 0;
    padding: 12px 16px;
    border-left: 4px solid var(--wc-color-primary, #3b82f6);
    background: var(--wc-surface-muted, rgba(0, 0, 0, 0.04));
    border-radius: 0 8px 8px 0;
    color: var(--wc-text-primary, #1a1a1a);
  }
  .wc-blockquote--minimal {
    background: transparent;
    border-left-width: 2px;
  }
  .wc-blockquote--no-border.wc-blockquote--minimal {
    border-left-color: var(--wc-border-default, rgba(0, 0, 0, 0.15));
  }
  .wc-blockquote--small { font-size: 0.875rem; padding: 8px 12px; }
  .wc-blockquote--large { font-size: 1.125rem; padding: 16px 20px; }
  .wc-blockquote--primary { border-left-color: var(--wc-color-primary, #3b82f6); }
  .wc-blockquote--success { border-left-color: var(--wc-color-success, #22c55e); }
  .wc-blockquote--warning { border-left-color: var(--wc-color-warning, #f59e0b); }
  .wc-blockquote--error { border-left-color: var(--wc-color-error, #ef4444); }
  .wc-blockquote--info { border-left-color: var(--wc-color-info, #06b6d4); }
  .wc-blockquote--interactive {
    transition: background 0.2s ease;
  }
  .wc-blockquote--interactive:hover {
    background: var(--wc-surface-hover, rgba(0, 0, 0, 0.06));
  }
  .quote-text {
    margin: 0;
    font-style: italic;
    line-height: 1.6;
  }
  .quote-cite {
    margin-top: 8px;
    font-size: 0.85em;
    color: var(--wc-text-secondary, #6b7280);
  }
</style>
