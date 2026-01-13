<template>
  <div
    ref="menuRef"
    :class="['wc-menu', { 'dark': isDarkMode }]"
    :style="{ backgroundColor: 'var(--wc-bg-surface)', color: 'var(--wc-text-primary)' }"
  >
    <div
      ref="triggerRef"
      class="wc-menu__trigger"
      @click="handleToggle"
    >
      <slot name="trigger">
        <button class="wc-menu__button">
          {{ triggerText }}
          <span :class="['wc-menu__arrow', { 'wc-menu__arrow--open': isOpen }]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6,9 12,15 18,9" />
            </svg>
          </span>
        </button>
      </slot>
    </div>

    <Transition name="menu">
      <div
        v-if="isOpen"
        ref="panelRef"
        :class="menuClasses"
        :style="menuStyles"
      >
        <slot name="content">
          <div v-if="variant === 'card'" class="wc-menu__card">
            <!-- 左侧示意图区域 -->
            <div class="wc-menu__card-illustration">
              <slot name="illustration">
                <img 
                  v-if="illustration" 
                  :src="illustration" 
                  :alt="illustrationAlt"
                  class="wc-menu__illustration-image"
                />
                <div v-else class="wc-menu__illustration-placeholder">
                  <span>🎨</span>
                </div>
              </slot>
              <div v-if="cardTitle || cardDescription" class="wc-menu__card-info">
                <h4 v-if="cardTitle" class="wc-menu__card-title">{{ cardTitle }}</h4>
                <p v-if="cardDescription" class="wc-menu__card-description">{{ cardDescription }}</p>
              </div>
            </div>
            
            <!-- 右侧列表区域 -->
            <div class="wc-menu__card-list">
              <div
                v-for="(item, index) in items"
                :key="item.key || index"
                :class="[
                  item.divider ? 'wc-menu__divider' : 'wc-menu__item',
                  {
                    'wc-menu__item--disabled': item.disabled && !item.divider
                  }
                ]"
                @click="handleItemClick(item, index)"
              >
                <span
                  v-if="item.icon"
                  class="wc-menu__icon"
                >{{ item.icon }}</span>
                <span class="wc-menu__label">{{ item.label }}</span>
              </div>
            </div>
          </div>
          
          <!-- 默认样式 -->
          <div v-else>
            <div
              v-for="(item, index) in items"
              :key="item.key || index"
              :class="[
                item.divider ? 'wc-menu__divider' : 'wc-menu__item',
                {
                  'wc-menu__item--disabled': item.disabled && !item.divider
                }
              ]"
              @click="handleItemClick(item, index)"
            >
              <span
                v-if="item.icon"
                class="wc-menu__icon"
              >{{ item.icon }}</span>
              <span class="wc-menu__label">{{ item.label }}</span>
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
  },
  isDarkMode: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['select', 'open', 'close'])

const isOpen = ref(false)
const menuRef = ref(null)
const triggerRef = ref(null)
const panelRef = ref(null)

const menuClasses = computed(() => {
  const classes = ['wc-menu__menu', `wc-menu__menu--${props.placement}`]
  if (props.variant === 'card') {
    classes.push('wc-menu__menu--card')
  }
  return classes
})

const menuStyles = computed(() => {
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
  if (menuRef.value && !menuRef.value.contains(event.target)) {
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

 