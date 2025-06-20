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

<style scoped>
.pricing-grid{display:grid;gap:24px;}
.plan-card{border:1px solid var(--color-border,#e5e7eb);border-radius:8px;padding:24px;text-align:center;background:white;display:flex;flex-direction:column;gap:12px;}
.plan-card.popular{border-width:2px;border-color:var(--color-primary,#3b82f6);} .plan-name{margin:0;font-size:1.25rem;font-weight:600;} .plan-price{margin:0;font-size:2rem;color:var(--color-primary,#3b82f6);} .plan-features{list-style:none;padding:0;margin:0;flex:1 1 auto;text-align:left;font-size:0.875rem;}
.plan-btn{padding:8px 16px;border-radius:4px;border:none;background:var(--color-primary,#3b82f6);color:white;cursor:pointer;font-size:0.875rem;}
@media(prefers-color-scheme:dark){.plan-card{background:var(--color-dark-surface,#1f2937);border-color:var(--color-dark-border,#374151);} .plan-btn{background:var(--color-primary,#3b82f6);} }
</style> 