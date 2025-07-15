<template>
  <template v-if="subheader">
    <div class="list-subheader">
      {{ subheader }}
    </div>
    <component
      :is="component"
      :class="listClasses"
      role="list"
    >
      <slot />
    </component>
  </template>
  <component
    :is="component"
    v-else
    :class="listClasses"
    role="list"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed, provide } from 'vue'
import './style.css'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  dense: {
    type: Boolean,
    default: false
  },
  disablePadding: {
    type: Boolean,
    default: false
  },
  subheader: {
    type: String,
    default: ''
  },
  component: {
    type: String,
    default: 'ul'
  },
  nav: {
    type: Boolean,
    default: false
  }
})

const listClasses = computed(() => {
  const classes = ['list']
  
  if (props.dense) {
    classes.push('list--dense')
  }
  
  if (props.disablePadding) {
    classes.push('list--no-padding')
  }
  
  if (props.nav) {
    classes.push('list--nav')
  }
  
  return classes
})

// Provide context to child ListItem components
provide('listContext', {
  dense: props.dense
})
</script> 