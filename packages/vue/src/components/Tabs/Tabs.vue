<template>
  <div class="wc-tabs-wrapper">
    <div :class="tabsClasses">
      <button
        v-for="(tab, index) in tabs"
        :key="tab.key || index"
        :class="getTabClasses(index)"
        :disabled="tab.disabled"
        type="button"
        @click="handleTabClick(index)"
      >
        {{ tab.title }}
      </button>
    </div>
    
    <div class="wc-tab-content mt-6">
      <slot
        :active-tab="activeTab"
        :active-index="activeIndex"
      />
    </div>
  </div>
</template>

<script setup>
import './style.css'
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
  const classes = ['wc-tabs']

  switch (props.variant) {
    case 'pills':
      classes.push('wc-tabs--pills')
      break
    case 'underline':
      classes.push('wc-tabs--underline')
      break
    default:
      classes.push('wc-tabs--default')
  }

  return classes
})

const getTabClasses = (index) => {
  const baseClasses = 'wc-tab'
  const activeClass = activeIndex.value === index ? 'wc-tab--active' : ''
  const disabledClass = props.tabs[index]?.disabled ? 'opacity-50 cursor-not-allowed' : ''

  let variantClasses = ''
  if (props.variant === 'underline') {
    variantClasses = 'border-b-2 border-transparent rounded-none px-4 py-2 -mb-px'
    if (activeIndex.value === index) {
      variantClasses += ' border-primary-500 bg-transparent text-primary-600 dark:text-primary-400'
    }
  }

  return [baseClasses, activeClass, disabledClass, variantClasses]
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
