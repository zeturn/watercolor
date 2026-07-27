<script lang="ts">
  import type { Snippet } from 'svelte'
  let {
    items = [],
    class: className = '',
    children,
  }: { items?: Array<{ label: string; href?: string }>; class?: string; children?: Snippet } = $props()
</script>

<nav class="wc-breadcrumb {className}" aria-label="Breadcrumb">
  {#if items.length}
    <ol class="wc-breadcrumb__list">
      {#each items as item, i (i)}
        <li class="wc-breadcrumb__item">
          {#if item.href}
            <a href={item.href} class="wc-breadcrumb__link">{item.label}</a>
          {:else}
            <span class="wc-breadcrumb__current" aria-current="page">{item.label}</span>
          {/if}
          {#if i < items.length - 1}<span class="wc-breadcrumb__sep" aria-hidden="true">/</span>{/if}
        </li>
      {/each}
    </ol>
  {:else if children}
    {@render children()}
  {/if}
</nav>

<style>
  .wc-breadcrumb { box-sizing: border-box; }
  .wc-breadcrumb__list { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; margin: 0; padding: 0; list-style: none; font-size: 0.875rem; }
  .wc-breadcrumb__link { color: var(--wc-text-secondary, #6b7280); text-decoration: none; }
  .wc-breadcrumb__link:hover { color: var(--wc-accent, #3b82f6); text-decoration: underline; }
  .wc-breadcrumb__current { color: var(--wc-text-primary, #1a1a1a); font-weight: 500; }
  .wc-breadcrumb__sep { color: var(--wc-text-secondary, #9ca3af); }
</style>
