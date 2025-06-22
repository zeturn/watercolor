<template>
  <div class="wc-dropdown" ref="dropdownRef">
    <div
      class="wc-dropdown__trigger"
      @click="handleToggle"
      ref="triggerRef"
    >
      <slot name="trigger">
        <button class="wc-dropdown__button">
          {{ triggerText }}
          <span :class="['wc-dropdown__arrow', { 'wc-dropdown__arrow--open': isOpen }]">
            ▼
          </span>
        </button>
      </slot>
    </div>

    <Transition name="dropdown">
      <div
        v-if="isOpen"
        :class="dropdownClasses"
        :style="dropdownStyles"
        ref="menuRef"
      >
        <slot name="content">
          <div
            v-for="(item, index) in items"
            :key="item.key || index"
            :class="[
              item.divider ? 'wc-dropdown__divider' : 'wc-dropdown__item',
              {
                'wc-dropdown__item--disabled': item.disabled && !item.divider
              }
            ]"
            @click="handleItemClick(item, index)"
          >
            <span v-if="item.icon" class="wc-dropdown__icon">{{ item.icon }}</span>
            <span class="wc-dropdown__label">{{ item.label }}</span>
          </div>
        </slot>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import './style.css'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  triggerText: {
    type: String,
    default: '选择选项'
  },
  placement: {
    type: String,
    default: 'bottom-start',
    validator: (value) => ['bottom-start', 'bottom-end', 'top-start', 'top-end'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  trigger: {
    type: String,
    default: 'click',
    validator: (value) => ['click', 'hover'].includes(value)
  }
})

const emit = defineEmits(['select', 'open', 'close'])

const isOpen = ref(false)
const dropdownRef = ref(null)
const triggerRef = ref(null)
const menuRef = ref(null)

const dropdownClasses = computed(() => {
  return ['wc-dropdown__menu', `wc-dropdown__menu--${props.placement}`]
})

const dropdownStyles = computed(() => {
  return {
    minWidth: '120px'
  }
})

const handleToggle = () => {
  if (props.disabled) return
  
  isOpen.value = !isOpen.value
  
  if (isOpen.value) {
    emit('open')
  } else {
    emit('close')
  }
}

const handleItemClick = (item, index) => {
  if (item.disabled || item.divider) return
  
  emit('select', item, index)
  isOpen.value = false
  emit('close')
}

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

 