<template>
  <div class="wc-tabs-wrapper">
    <div :class="tabsClasses">
      <button
        v-for="(tab, index) in tabs"
        :key="tab.key || index"
        :class="getTabClasses(index)"
        @click="handleTabClick(index)"
        :disabled="tab.disabled"
        type="button"
      >
        {{ tab.title }}
      </button>
    </div>
    
    <div class="wc-tab-content mt-6">
      <slot :activeTab="activeTab" :activeIndex="activeIndex" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
    validator: (tabs) => tabs.every(tab => tab.title)
  },
  modelValue: {
    type: Number,
    default: 0
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'pills', 'underline'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const activeIndex = ref(props.modelValue)

const activeTab = computed(() => props.tabs[activeIndex.value])

const tabsClasses = computed(() => {
  const baseClasses = 'wc-tabs'
  const variantClass = props.variant === 'pills' ? 'wc-tabs--pills' : ''
  const underlineClass = props.variant === 'underline' ? 'wc-tabs--underline' : ''
  
  return [baseClasses, variantClass, underlineClass]
})

const getTabClasses = (index) => {
  const baseClasses = 'wc-tab'
  const activeClass = activeIndex.value === index ? 'wc-tab--active' : ''
  const disabledClass = props.tabs[index]?.disabled ? 'opacity-50 cursor-not-allowed' : ''
  
  return [baseClasses, activeClass, disabledClass]
}

const handleTabClick = (index) => {
  if (props.tabs[index]?.disabled) return
  
  activeIndex.value = index
  emit('update:modelValue', index)
  emit('change', index, props.tabs[index])
}

watch(
  () => props.modelValue,
  (newValue) => {
    activeIndex.value = newValue
  }
)
</script>

<style scoped>
.wc-tabs--pills {
  @apply bg-neutral-100 dark:bg-neutral-800 rounded-xl p-1;
}

.wc-tabs--underline {
  @apply bg-transparent border-b border-neutral-200 dark:border-neutral-700 p-0 space-x-0;
}

.wc-tabs--underline .wc-tab {
  @apply border-b-2 border-transparent rounded-none px-4 py-2 -mb-px;
}

.wc-tabs--underline .wc-tab--active {
  @apply border-primary-500 bg-transparent text-primary-600 dark:text-primary-400;
}
</style> 