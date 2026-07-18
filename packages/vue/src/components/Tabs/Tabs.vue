<template>
  <div class="wc-tabs-wrapper">
    <div
      :class="tabsClasses"
      role="tablist"
      :aria-label="messages.tabList"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="tab.key || index"
        :class="getTabClasses(index)"
        :disabled="tab.disabled"
        :id="`${tabsId}-tab-${index}`"
        role="tab"
        :aria-selected="activeIndex === index"
        :aria-controls="`${tabsId}-panel`"
        :tabindex="activeIndex === index ? 0 : -1"
        type="button"
        @click="handleTabClick(index)"
        @keydown="handleTabKeydown($event, index)"
      >
        {{ tab.title }}
      </button>
    </div>
    
    <div
      :id="`${tabsId}-panel`"
      class="wc-tab-content"
      role="tabpanel"
      :aria-labelledby="`${tabsId}-tab-${activeIndex}`"
    >
      <slot
        :active-tab="activeTab"
        :active-index="activeIndex"
      />
    </div>
  </div>
</template>

<script setup>
import './style.css'
import { computed, ref, useId, watch } from 'vue'
import { useLocale } from '../../LocaleVUE'

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
const { messages } = useLocale()

const tabsId = useId()
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
  return ['wc-tab', { 'wc-tab--active': activeIndex.value === index }]
}

const handleTabClick = (index) => {
  if (props.tabs[index]?.disabled) return
  
  activeIndex.value = index
  emit('update:modelValue', index)
  emit('change', index, props.tabs[index])
}

const handleTabKeydown = (event, index) => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return

  event.preventDefault()
  const enabledIndexes = props.tabs
    .map((tab, tabIndex) => (!tab.disabled ? tabIndex : -1))
    .filter(tabIndex => tabIndex >= 0)
  if (!enabledIndexes.length) return

  const position = enabledIndexes.indexOf(index)
  let nextIndex
  if (event.key === 'Home') nextIndex = enabledIndexes[0]
  else if (event.key === 'End') nextIndex = enabledIndexes[enabledIndexes.length - 1]
  else if (event.key === 'ArrowRight') nextIndex = enabledIndexes[(position + 1) % enabledIndexes.length]
  else nextIndex = enabledIndexes[(position - 1 + enabledIndexes.length) % enabledIndexes.length]

  handleTabClick(nextIndex)
  event.currentTarget.parentElement?.querySelectorAll('[role="tab"]')[nextIndex]?.focus()
}

watch(
  () => props.modelValue,
  (newValue) => {
    activeIndex.value = newValue
  }
)
</script>
