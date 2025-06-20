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

const accordionClasses = computed(() => ({
  'wc-accordion': true,
  'wc-accordion--bordered': props.variant === 'bordered',
  'wc-accordion--filled': props.variant === 'filled'
}))

const toggleItem = (index) => {
  if (props.multiple) {
    const activeIndex = activeItems.value.indexOf(index)
    if (activeIndex > -1) {
      activeItems.value.splice(activeIndex, 1)
    } else {
      activeItems.value.push(index)
    }
  } else {
    activeItems.value = activeItems.value.includes(index) ? [] : [index]
  }
  
  emit('toggle', index, activeItems.value.includes(index))
}
</script>

<style scoped>
.wc-accordion {
  width: 100%;
  font-family: var(--wc-font-family);
  border-radius: 8px;
  overflow: hidden;
}

.wc-accordion-item {
  border-bottom: 1px solid #e5e7eb;
}

.wc-accordion-item:last-child {
  border-bottom: none;
}

.wc-accordion-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
  font-weight: 500;
  color: #374151;
  text-align: left;
}

.wc-accordion-header:hover {
  background-color: #f9fafb;
}

.wc-accordion-header--active {
  color: #1a8cff;
  background-color: #f0f9ff;
}

.wc-accordion-title {
  flex: 1;
}

.wc-accordion-icon {
  transition: transform 0.3s ease;
  font-size: 12px;
  color: #9ca3af;
}

.wc-accordion-icon--rotated {
  transform: rotate(180deg);
}

.wc-accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.wc-accordion-content--open {
  max-height: 1000px;
}

.wc-accordion-content-inner {
  padding: 0 20px 16px;
  color: #6b7280;
  line-height: 1.6;
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  .wc-accordion-item {
    border-bottom-color: #374151;
  }
  
  .wc-accordion-header {
    color: #f3f4f6;
  }
  
  .wc-accordion-header:hover {
    background-color: #1f2937;
  }
  
  .wc-accordion-header--active {
    color: #60a5fa;
    background-color: #1e3a8a;
  }
  
  .wc-accordion-content-inner {
    color: #d1d5db;
  }
  
  .wc-accordion-icon {
    color: #6b7280;
  }
}

/* 变体样式 */
.wc-accordion.wc-accordion--bordered .wc-accordion-item {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 8px;
}

.wc-accordion.wc-accordion--bordered .wc-accordion-item:last-child {
  margin-bottom: 0;
}

.wc-accordion.wc-accordion--filled .wc-accordion-header {
  background-color: #f3f4f6;
}

.wc-accordion.wc-accordion--filled .wc-accordion-header:hover {
  background-color: #e5e7eb;
}

@media (prefers-color-scheme: dark) {
  .wc-accordion.wc-accordion--bordered .wc-accordion-item {
    border-color: #374151;
  }
  
  .wc-accordion.wc-accordion--filled .wc-accordion-header {
    background-color: #374151;
  }
  
  .wc-accordion.wc-accordion--filled .wc-accordion-header:hover {
    background-color: #4b5563;
  }
}
</style> 