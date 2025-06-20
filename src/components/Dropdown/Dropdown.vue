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
            :class="['wc-dropdown__item', {
              'wc-dropdown__item--disabled': item.disabled,
              'wc-dropdown__item--divider': item.divider
            }]"
            @click="handleItemClick(item, index)"
          >
            <span v-if="item.icon" class="wc-dropdown__icon">{{ item.icon }}</span>
            <span class="wc-dropdown__text">{{ item.label }}</span>
          </div>
        </slot>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

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

<style scoped>
.wc-dropdown {
  position: relative;
  display: inline-block;
}

.wc-dropdown__trigger {
  cursor: pointer;
}

.wc-dropdown__button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: #ffffff;
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  font-size: 14px;
  color: #3f3f46;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;
}

.wc-dropdown__button:hover {
  border-color: #1a8cff;
}

.wc-dropdown__arrow {
  font-size: 12px;
  transition: transform 0.2s ease;
  margin-left: 8px;
}

.wc-dropdown__arrow--open {
  transform: rotate(180deg);
}

.wc-dropdown__menu {
  position: absolute;
  z-index: 1000;
  background-color: #ffffff;
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 4px 0;
  margin-top: 4px;
}

.wc-dropdown__menu--bottom-start {
  top: 100%;
  left: 0;
}

.wc-dropdown__menu--bottom-end {
  top: 100%;
  right: 0;
}

.wc-dropdown__menu--top-start {
  bottom: 100%;
  left: 0;
  margin-top: 0;
  margin-bottom: 4px;
}

.wc-dropdown__menu--top-end {
  bottom: 100%;
  right: 0;
  margin-top: 0;
  margin-bottom: 4px;
}

.wc-dropdown__item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  font-size: 14px;
  color: #3f3f46;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.wc-dropdown__item:hover:not(.wc-dropdown__item--disabled):not(.wc-dropdown__item--divider) {
  background-color: #f4f4f5;
}

.wc-dropdown__item--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.wc-dropdown__item--divider {
  height: 1px;
  padding: 0;
  margin: 4px 0;
  background-color: #e4e4e7;
  cursor: default;
}

.wc-dropdown__icon {
  margin-right: 8px;
  font-size: 16px;
}

.wc-dropdown__text {
  flex: 1;
}

/* 动画效果 */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
  transform-origin: top;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: scaleY(0.8);
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  .wc-dropdown__button {
    background-color: #27272a;
    border-color: #3f3f46;
    color: #d4d4d8;
  }
  
  .wc-dropdown__button:hover {
    border-color: #1a8cff;
  }
  
  .wc-dropdown__menu {
    background-color: #27272a;
    border-color: #3f3f46;
  }
  
  .wc-dropdown__item {
    color: #d4d4d8;
  }
  
  .wc-dropdown__item:hover:not(.wc-dropdown__item--disabled):not(.wc-dropdown__item--divider) {
    background-color: #3f3f46;
  }
  
  .wc-dropdown__item--divider {
    background-color: #3f3f46;
  }
}
</style> 