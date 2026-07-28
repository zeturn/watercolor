<script lang="ts">
  import { useLocale } from '../../hooks.js'

  let {
    value = $bindable(0),
    max = 5,
    readonly = false,
    ariaLabel = '',
    onchange,
  }: {
    value?: number
    max?: number
    readonly?: boolean
    ariaLabel?: string
    onchange?: (value: number) => void
  } = $props()

  const localeStore = useLocale()
  let hovered = $state(0)

  function select(next: number) {
    if (readonly) return
    const nextValue = next === value ? 0 : next
    value = nextValue
    onchange?.(nextValue)
  }

  function hover(next: number) {
    if (!readonly) hovered = next
  }
</script>

<div class="wc-rating" role="radiogroup" aria-label={ariaLabel || localeStore.messages.rating}>
  {#each Array.from({ length: max }, (_, i) => i + 1) as n (n)}
    <button
      type="button"
      class="wc-rating-item"
      class:wc-rating-item--active={n <= hovered || n <= value}
      aria-label={localeStore.messages.ratingValue(n, max)}
      aria-checked={n === value}
      role="radio"
      disabled={readonly}
      onmouseenter={() => hover(n)}
      onmouseleave={() => hover(0)}
      onclick={() => select(n)}
    >★</button>
  {/each}
</div>

<style>
  .wc-rating {
    display: inline-flex;
    gap: 2px;
  }
  .wc-rating-item {
    background: none;
    border: none;
    padding: 2px;
    font-size: 1.25rem;
    line-height: 1;
    cursor: pointer;
    color: var(--wc-border-default, rgba(0, 0, 0, 0.2));
    transition: color 0.15s ease, transform 0.15s ease;
  }
  .wc-rating-item:disabled {
    cursor: default;
  }
  .wc-rating-item--active {
    color: var(--wc-color-warning, #f59e0b);
  }
  .wc-rating-item:not(:disabled):hover {
    transform: scale(1.15);
  }
</style>
