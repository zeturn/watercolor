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
      <span v-if="n <= hovered || n <= internalValue">★</span>
      <span v-else>☆</span>
    </button>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
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

<style scoped>
.rating {
  display: inline-flex;
  gap: 4px;
}
.rating-item {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  padding: 0;
  color: var(--wc-neutral-300);
  transition: color 0.2s ease;
}
.rating-item.active {
  color: var(--wc-warning-500);
}
.rating-item:hover {
  transform: scale(1.1);
}
.rating-item:disabled {
  cursor: default;
}
/* Dark mode */
.dark .rating-item {
  color: var(--wc-neutral-500);
}

.dark .rating-item.active {
  color: var(--wc-warning-400);
}
</style> 