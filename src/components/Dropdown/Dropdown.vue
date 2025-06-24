<template>
  <div
    ref="dropdownRef"
    class="wc-dropdown"
  >
    <div
      ref="triggerRef"
      class="wc-dropdown__trigger"
      @click="handleToggle"
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
        ref="menuRef"
        :class="dropdownClasses"
        :style="dropdownStyles"
      >
        <slot name="content">
          <div v-if="variant === 'card'" class="wc-dropdown__card">
            <!-- 左侧示意图区域 -->
            <div class="wc-dropdown__card-illustration">
              <slot name="illustration">
                <img 
                  v-if="illustration" 
                  :src="illustration" 
                  :alt="illustrationAlt"
                  class="wc-dropdown__illustration-image"
                />
                <div v-else class="wc-dropdown__illustration-placeholder">
                  <span>🎨</span>
                </div>
              </slot>
              <div v-if="cardTitle || cardDescription" class="wc-dropdown__card-info">
                <h4 v-if="cardTitle" class="wc-dropdown__card-title">{{ cardTitle }}</h4>
                <p v-if="cardDescription" class="wc-dropdown__card-description">{{ cardDescription }}</p>
              </div>
            </div>
            
            <!-- 右侧列表区域 -->
            <div class="wc-dropdown__card-list">
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
                <span
                  v-if="item.icon"
                  class="wc-dropdown__icon"
                >{{ item.icon }}</span>
                <span class="wc-dropdown__label">{{ item.label }}</span>
              </div>
            </div>
          </div>
          
          <!-- 默认样式 -->
          <div v-else>
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
              <span
                v-if="item.icon"
                class="wc-dropdown__icon"
              >{{ item.icon }}</span>
              <span class="wc-dropdown__label">{{ item.label }}</span>
            </div>
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
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'card'].includes(value)
  },
  illustration: {
    type: String,
    default: ''
  },
  illustrationAlt: {
    type: String,
    default: '示意图'
  },
  cardTitle: {
    type: String,
    default: ''
  },
  cardDescription: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['select', 'open', 'close'])

const isOpen = ref(false)
const dropdownRef = ref(null)
const triggerRef = ref(null)
const menuRef = ref(null)

const dropdownClasses = computed(() => {
  const classes = ['wc-dropdown__menu', `wc-dropdown__menu--${props.placement}`]
  if (props.variant === 'card') {
    classes.push('wc-dropdown__menu--card')
  }
  return classes
})

const dropdownStyles = computed(() => {
  if (props.variant === 'card') {
    return {
      minWidth: '320px',
      maxWidth: '450px'
    }
  }
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

 