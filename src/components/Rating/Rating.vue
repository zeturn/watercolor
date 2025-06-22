<template>
  <div class="rating" role="radiogroup" aria-label="评分组件">
    <button
      v-for="n in max"
      :key="n"
      :class="['rating-item', n <= hovered || n <= internalValue ? 'active' : '']"
      @mouseenter="hover(n)"
      @mouseleave="hover(0)"
      @click="select(n)"
      :aria-checked="n === internalValue ? 'true' : 'false'"
      role="radio"
      :disabled="readonly"
    >
      ★
    </button>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import './style.css'
export default {
  name: 'Rating',
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const internalValue = ref(props.modelValue)
    const hovered = ref(0)

    watch(() => props.modelValue, (v) => internalValue.value = v)

    const select = (n) => {
      if (props.readonly) return
      const newVal = n === internalValue.value ? 0 : n
      internalValue.value = newVal
      emit('update:modelValue', newVal)
      emit('change', newVal)
    }
    const hover = (n) => {
      if (props.readonly) return
      hovered.value = n
    }

    return { internalValue, hovered, select, hover }
  }
}
</script>

 