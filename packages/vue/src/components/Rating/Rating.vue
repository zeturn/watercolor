<template>
  <div
    class="wc-rating"
    role="radiogroup"
    aria-label="评分组件"
  >
    <button
      v-for="n in max"
      :key="n"
      type="button"
      :class="['wc-rating-item', { 'wc-rating-item--active': n <= hovered || n <= internalValue }]"
      :aria-label="`${n} / ${max}`"
      :aria-checked="n === internalValue"
      role="radio"
      :disabled="readonly"
      @mouseenter="hover(n)"
      @mouseleave="hover(0)"
      @click="select(n)"
    >★</button>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import './style.css'

export default {
  name: 'Rating',
  props: {
    modelValue: { type: Number, default: 0 },
    max: { type: Number, default: 5 },
    readonly: { type: Boolean, default: false }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const internalValue = ref(props.modelValue)
    const hovered = ref(0)
    watch(() => props.modelValue, (value) => { internalValue.value = value })
    const select = (value) => {
      if (props.readonly) return
      const nextValue = value === internalValue.value ? 0 : value
      internalValue.value = nextValue
      emit('update:modelValue', nextValue)
      emit('change', nextValue)
    }
    const hover = (value) => {
      if (!props.readonly) hovered.value = value
    }
    return { internalValue, hovered, select, hover }
  }
}
</script>
