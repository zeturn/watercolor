<template>
  <span :class="iconClasses" v-bind="$attrs">
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { getListItemIconClasses } from './utils.js'
import './style.css'

const props = defineProps({
  position: {
    type: String,
    default: 'start'
  },
  className: {
    type: String,
    default: ''
  }
})

const iconClasses = computed(() => getListItemIconClasses({
  position: props.position,
  className: props.className
}).join(' '))
</script> 