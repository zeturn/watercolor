<template>
  <div class="pricing-grid" :style="gridStyle">
    <div v-for="plan in plans" :key="plan.name" class="plan-card" :class="{ popular: plan.popular }">
      <h3 class="plan-name">{{ plan.name }}</h3>
      <p class="plan-price">{{ plan.price }}</p>
      <ul class="plan-features">
        <li v-for="f in plan.features" :key="f">{{ f }}</li>
      </ul>
      <button class="plan-btn">{{ plan.button || '选择' }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingTable',
  props: {
    plans: { type: Array, default: () => [] },
    columns: { type: Number, default: 3 },
  },
  computed: {
    gridStyle() { return { gridTemplateColumns: `repeat(${this.columns}, minmax(0,1fr))` } }
  }
}
</script>

<style>
.pricing-grid{display:grid;gap:24px;}
.plan-card{border:1px solid var(--wc-neutral-200);border-radius:8px;padding:24px;text-align:center;background:var(--wc-neutral-0);display:flex;flex-direction:column;gap:12px;transition:background-color .25s ease;}
.plan-card.popular{border-width:2px;border-color:var(--wc-primary-500);} .plan-name{margin:0;font-size:1.25rem;font-weight:600;} .plan-price{margin:0;font-size:2rem;color:var(--wc-primary-500);} .plan-features{list-style:none;padding:0;margin:0;flex:1 1 auto;text-align:left;font-size:0.875rem;}
.plan-btn{padding:8px 16px;border-radius:4px;border:1px solid var(--wc-primary-500);background:var(--wc-primary-500);color:var(--wc-neutral-0);cursor:pointer;font-size:0.875rem;transition:all .2s ease;}
.plan-btn:hover{background:var(--wc-primary-400);border-color:var(--wc-primary-400);}

/* Dark mode */
.dark .plan-card{background:var(--wc-neutral-800);border-color:var(--wc-neutral-700);} .dark .plan-price{color:var(--wc-primary-400);} .dark .plan-btn{background:var(--wc-primary-400);border-color:var(--wc-primary-400);} .dark .plan-btn:hover{background:var(--wc-primary-300);border-color:var(--wc-primary-300);}
</style> 