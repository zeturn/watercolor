<template>
  <div :class="accordionClasses">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="wc-accordion-item"
    >
      <button
        :class="['wc-accordion-header', { 'wc-accordion-header--active': activeItems.includes(index) }]"
        @click="toggleItem(index)"
        type="button"
      >
        <span class="wc-accordion-title">{{ item.title }}</span>
        <span
          :class="['wc-accordion-icon', { 'wc-accordion-icon--rotated': activeItems.includes(index) }]"
        >
          &#9660;
        </span>
      </button>
      <div
        :class="['wc-accordion-content', { 'wc-accordion-content--open': activeItems.includes(index) }]"
      >
        <div class="wc-accordion-content-inner">
          <slot :name="`content-${index}`" :item="item">
            {{ item.content }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
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
  }
})

const emit = defineEmits(['toggle'])

const activeItems = ref([])

const accordionClasses = computed(() => buildAccordionClasses(props.variant))

const toggleItem = (index) => {
  activeItems.value = toggleActiveItems(activeItems.value, index, props.multiple)
  emit('toggle', index, activeItems.value.includes(index))
}
</script>

<style src="./style.css"></style> 