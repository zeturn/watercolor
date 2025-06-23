<template>
  <template v-if="subheader">
    <div class="wc-list-subheader">
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
  const classes = ['wc-list', 'w-full']
  
  if (props.dense) {
    classes.push('wc-list--dense')
  }
  
  if (props.disablePadding) {
    classes.push('wc-list--no-padding')
  } else {
    classes.push('py-2')
  }
  
  if (props.nav) {
    classes.push('wc-list--nav')
  }
  
  return classes
})

// Provide context to child ListItem components
provide('listContext', {
  dense: props.dense
})
</script> 