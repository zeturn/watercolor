<template>
  <div :class="['wc-appbar', `wc-appbar--${props.position}`, `wc-appbar--${props.color}`, `wc-appbar--elevation-${props.elevation}`, `wc-appbar--${props.variant}`, props.class]" :style="style">
    <slot />
  </div>
</template>

<script setup>
import './style.css'

const props = defineProps({
  position: {
    type: String,
    default: 'fixed',
    validator: (v) => ['fixed', 'absolute', 'sticky', 'static', 'relative'].includes(v)
  },
  color: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'primary', 'secondary', 'transparent', 'inherit'].includes(v)
  },
  elevation: {
    type: Number,
    default: 0,
  },
  variant: {
    type: String,
    default: 'elevation',
    validator: (v) => ['elevation', 'outlined'].includes(v)
  },
  class: {
    type: [String, Array, Object],
    default: ''
  },
  style: {
    type: [String, Object],
    default: () => ({})
  }
})
</script>
