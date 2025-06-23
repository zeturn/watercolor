<template>
  <h2
    :id="titleId"
    :class="dialogTitleClasses"
  >
    <slot />
  </h2>
</template>

<script setup>
import { computed, getCurrentInstance } from 'vue'

const props = defineProps({
  disableTypography: {
    type: Boolean,
    default: false
  }
})

const instance = getCurrentInstance()
const titleId = computed(() => `dialog-title-${instance?.uid || Math.random().toString(36).substr(2, 9)}`)

const dialogTitleClasses = computed(() => {
  const baseClasses = 'wc-dialog-title'
  const classes = [baseClasses]
  
  if (!props.disableTypography) {
    classes.push('text-xl font-semibold text-neutral-900 dark:text-neutral-100 leading-6')
  }
  
  return classes
})
</script>

<style scoped>
.wc-dialog-title {
  margin: 0;
  padding: 0;
}
</style> 