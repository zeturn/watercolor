<template>
  <div :class="textClasses" v-bind="$attrs">
    <p v-if="primary" class="list-item-text-primary">{{ primary }}</p>
    <p v-if="secondary" class="list-item-text-secondary">{{ secondary }}</p>
    <slot v-else />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getListItemTextClasses } from './utils.js'
import './style.css'

const props = defineProps({
  primary: {
    type: String,
    default: ''
  },
  secondary: {
    type: String,
    default: ''
  },
  inset: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
})

const textClasses = computed(() => getListItemTextClasses({
  inset: props.inset,
  className: props.className
}).join(' '))
</script> 