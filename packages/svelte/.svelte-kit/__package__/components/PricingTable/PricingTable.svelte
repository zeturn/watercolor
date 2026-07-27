<script lang="ts">
  let {
    plans = [],
    class: className = '',
    onselect,
  }: {
    plans?: Array<{ name: string; price?: string; features?: string[]; cta?: string; highlighted?: boolean }>;
    class?: string;
    onselect?: (plan: any) => void
  } = $props()
</script>

<div class="wc-pricing {className}">
  {#each plans as plan (plan.name)}
    <div class="wc-pricing__card {plan.highlighted ? 'wc-pricing__card--highlighted' : ''}">
      <div class="wc-pricing__name">{plan.name}</div>
      {#if plan.price}<div class="wc-pricing__price">{plan.price}</div>{/if}
      {#if plan.features}
        <ul class="wc-pricing__features">
          {#each plan.features as feature (feature)}<li>{feature}</li>{/each}
        </ul>
      {/if}
      {#if plan.cta}
        <button class="wc-pricing__cta" onclick={() => onselect?.(plan)}>{plan.cta}</button>
      {/if}
    </div>
  {/each}
</div>

<style>
  .wc-pricing { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; box-sizing: border-box; }
  .wc-pricing__card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.1));
    border-radius: 12px;
    background: var(--wc-surface-canvas, #fff);
    color: var(--wc-text-primary, #1a1a1a);
  }
  .wc-pricing__card--highlighted { border-color: var(--wc-accent, #3b82f6); box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15); }
  .wc-pricing__name { font-size: 1.125rem; font-weight: 700; }
  .wc-pricing__price { font-size: 2rem; font-weight: 800; }
  .wc-pricing__features { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; font-size: 0.875rem; color: var(--wc-text-secondary, #6b7280); }
  .wc-pricing__cta {
    margin-top: auto;
    padding: 10px 16px;
    border: 0;
    border-radius: 8px;
    background: var(--wc-accent, #3b82f6);
    color: #fff;
    font: inherit;
    font-weight: 600;
    cursor: pointer;
  }
</style>
