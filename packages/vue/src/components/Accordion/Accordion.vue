<template>
  <div
    :class="accordionClasses"
    :style="style"
    role="region"
    :aria-label="ariaLabel || 'Accordion'"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="wc-accordion-item"
    >
      <button
        :class="['wc-accordion-header', { 'wc-accordion-header--active': activeItems.includes(index) }]"
        :id="`${accordionId}-trigger-${index}`"
        :disabled="item.disabled"
        :aria-expanded="activeItems.includes(index)"
        :aria-controls="`${accordionId}-panel-${index}`"
        type="button"
        @click="toggleItem(index)"
      >
        <span class="wc-accordion-title">{{ item.title }}</span>
        <span
          :class="['wc-accordion-icon', { 'wc-accordion-icon--rotated': activeItems.includes(index) }]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </span>
      </button>
      <div
        :id="`${accordionId}-panel-${index}`"
        :class="['wc-accordion-content', { 'wc-accordion-content--open': activeItems.includes(index) }]"
        :aria-labelledby="`${accordionId}-trigger-${index}`"
        :style="{ display: activeItems.includes(index) ? undefined : 'none' }"
      >
        <div class="wc-accordion-content-inner">
          <slot
            :name="`content-${index}`"
            :item="item"
          >
            {{ item.content }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, useId } from 'vue'
import { buildAccordionClasses, toggleActiveItems } from './utils'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  multiple: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'bordered', 'filled'].includes(value)
  },
  class: {
    type: [String, Array, Object],
    default: ''
  },
  style: {
    type: [String, Object],
    default: () => ({})
  },
  ariaLabel: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['toggle'])

const accordionId = useId()
const activeItems = ref([])

const accordionClasses = computed(() => buildAccordionClasses(props.variant, props.class))

const toggleItem = (index) => {
  if (props.items[index]?.disabled) return
  activeItems.value = toggleActiveItems(activeItems.value, index, props.multiple)
  emit('toggle', index, activeItems.value.includes(index))
}
</script>

<style src="./style.css"></style>
