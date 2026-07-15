<template>
  <button
    type="button"
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <span class="icon-button-icon">
      <slot>
        <span
          v-if="icon"
          v-html="icon"
        />
      </slot>
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import './style.css'

const props = defineProps({
  color: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  edge: {
    type: String,
    default: false,
    validator: (value) => [false, 'start', 'end'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => [
  'wc-icon-button',
  `wc-icon-button--${props.color}`,
  `wc-icon-button--${props.size}`,
  props.edge && `wc-icon-button--edge-${props.edge}`,
  props.disabled && 'wc-icon-button--disabled'
].filter(Boolean))

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>
