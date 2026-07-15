<template>
  <div
    class="pricing-grid"
    :style="gridStyle"
  >
    <div
      v-for="plan in plans"
      :key="plan.name"
      class="plan-card"
      :class="{ popular: plan.popular }"
    >
      <h3 class="plan-name">
        {{ plan.name }}
      </h3>
      <p class="plan-price">
        {{ plan.price }}
      </p>
      <ul class="plan-features">
        <li
          v-for="f in plan.features"
          :key="f"
        >
          {{ f }}
        </li>
      </ul>
      <button class="plan-btn">
        {{ plan.button || '选择' }}
      </button>
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

<style src="./style.css"></style>
