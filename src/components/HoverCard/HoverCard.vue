<template>
  <div 
    class="hover-card-container"
    :class="[
      `hover-card-${variant}`,
      `hover-card-size-${size}`,
      disabled && 'hover-card-disabled'
    ]"
    @mouseenter="showCard"
    @mouseleave="hideCard"
    @touchstart="showCard"
    @touchend="hideCard"
  >
    <!-- 触发元素 -->
    <span class="hover-card-trigger">
      <slot>{{ triggerText }}</slot>
    </span>

    <!-- 预览卡片 -->
    <transition 
      name="hover-card-transition"
      @enter="onEnter"
      @leave="onLeave"
    >
      <div 
        v-if="isVisible"
        ref="cardRef"
        class="hover-card-popup"
        :class="[
          `hover-card-position-${position}`,
          `hover-card-card-size-${cardSize}`
        ]"
        :style="cardStyle"
        role="tooltip"
        :aria-describedby="triggerId"
      >
        <!-- 箭头 -->
        <div 
          v-if="showArrow"
          class="hover-card-arrow"
          :class="`hover-card-arrow-${position}`"
        />

        <!-- 卡片内容 -->
        <div class="hover-card-content">
          <!-- 自定义内容插槽 -->
          <slot
            name="card"
            :data="cardData"
          >
            <!-- 默认卡片布局 -->
            <div
              v-if="cardData.image"
              class="hover-card-image"
            >
              <img
                :src="cardData.image"
                :alt="cardData.imageAlt || cardData.title"
              >
            </div>
            
            <div class="hover-card-body">
              <h3
                v-if="cardData.title"
                class="hover-card-title"
              >
                {{ cardData.title }}
              </h3>
              
              <p
                v-if="cardData.description"
                class="hover-card-description"
              >
                {{ cardData.description }}
              </p>
              
              <div
                v-if="cardData.meta"
                class="hover-card-meta"
              >
                <span
                  v-for="(item, index) in cardData.meta"
                  :key="index"
                  class="hover-card-meta-item"
                >
                  {{ item }}
                </span>
              </div>
              
              <div
                v-if="cardData.actions"
                class="hover-card-actions"
              >
                <button 
                  v-for="(action, index) in cardData.actions"
                  :key="index"
                  class="hover-card-action-btn"
                  @click="handleAction(action)"
                >
                  {{ action.label }}
                </button>
              </div>
            </div>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'HoverCard',
  props: {
    triggerText: {
      type: String,
      default: 'Hover me'
    },
    cardData: {
      type: Object,
      default: () => ({
        title: 'Card Title',
        description: 'This is a preview card that appears on hover.',
        image: null,
        imageAlt: '',
        meta: [],
        actions: []
      })
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'outlined', 'filled', 'minimal'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    cardSize: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
    },
    position: {
      type: String,
      default: 'top',
      validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value)
    },
    delay: {
      type: Number,
      default: 300
    },
    hideDelay: {
      type: Number,
      default: 100
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['show', 'hide', 'action'],
  setup(props, { emit }) {
    const isVisible = ref(false)
    const cardRef = ref(null)
    const triggerId = ref(`hover-card-${Math.random().toString(36).substr(2, 9)}`)
    const showTimer = ref(null)
    const hideTimer = ref(null)

    const cardStyle = computed(() => {
      return {
        zIndex: 1000
      }
    })

    const showCard = () => {
      if (props.disabled) return
      
      clearTimeout(hideTimer.value)
      showTimer.value = setTimeout(() => {
        isVisible.value = true
        emit('show')
      }, props.delay)
    }

    const hideCard = () => {
      if (props.disabled) return
      
      clearTimeout(showTimer.value)
      hideTimer.value = setTimeout(() => {
        isVisible.value = false
        emit('hide')
      }, props.hideDelay)
    }

    const onEnter = (el) => {
      el.style.opacity = '0'
      el.style.transform = 'scale(0.95)'
      
      nextTick(() => {
        el.style.transition = 'opacity 0.2s ease, transform 0.2s ease'
        el.style.opacity = '1'
        el.style.transform = 'scale(1)'
      })
    }

    const onLeave = (el) => {
      el.style.transition = 'opacity 0.15s ease, transform 0.15s ease'
      el.style.opacity = '0'
      el.style.transform = 'scale(0.95)'
    }

    const handleAction = (action) => {
      emit('action', action)
      if (action.onClick) {
        action.onClick()
      }
    }

    onBeforeUnmount(() => {
      clearTimeout(showTimer.value)
      clearTimeout(hideTimer.value)
    })

    return {
      isVisible,
      cardRef,
      triggerId,
      cardStyle,
      showCard,
      hideCard,
      onEnter,
      onLeave,
      handleAction
    }
  }
}
</script>

<style scoped>
.hover-card-container {
  position: relative;
  display: inline-block;
}

.hover-card-trigger {
  cursor: pointer;
  transition: all 0.2s ease;
}

/* 触发器变体 */
.hover-card-default .hover-card-trigger {
  color: var(--color-primary, #3b82f6);
  text-decoration: underline;
  text-decoration-style: dotted;
}

.hover-card-default .hover-card-trigger:hover {
  color: var(--color-primary-dark, #2563eb);
}

.hover-card-outlined .hover-card-trigger {
  padding: 2px 6px;
  border: 1px solid var(--color-border, #d1d5db);
  border-radius: 4px;
  background: transparent;
}

.hover-card-outlined .hover-card-trigger:hover {
  border-color: var(--color-primary, #3b82f6);
  background: var(--color-primary-light, #eff6ff);
}

.hover-card-filled .hover-card-trigger {
  padding: 2px 8px;
  background: var(--color-primary-light, #eff6ff);
  color: var(--color-primary, #3b82f6);
  border-radius: 4px;
}

.hover-card-filled .hover-card-trigger:hover {
  background: var(--color-primary, #3b82f6);
  color: white;
}

.hover-card-minimal .hover-card-trigger {
  color: inherit;
  border-bottom: 1px dotted var(--color-text-secondary, #6b7280);
}

.hover-card-minimal .hover-card-trigger:hover {
  border-bottom-style: solid;
}

/* 触发器尺寸 */
.hover-card-size-sm .hover-card-trigger {
  font-size: 0.875rem;
}

.hover-card-size-md .hover-card-trigger {
  font-size: 1rem;
}

.hover-card-size-lg .hover-card-trigger {
  font-size: 1.125rem;
}

/* 禁用状态 */
.hover-card-disabled .hover-card-trigger {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 弹出卡片 */
.hover-card-popup {
  position: absolute;
  background: white;
  border: 1px solid var(--color-border, #e5e7eb);
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-width: 300px;
  min-width: 200px;
}

/* 卡片尺寸 */
.hover-card-card-size-sm {
  max-width: 200px;
  min-width: 150px;
}

.hover-card-card-size-md {
  max-width: 300px;
  min-width: 200px;
}

.hover-card-card-size-lg {
  max-width: 400px;
  min-width: 280px;
}

.hover-card-card-size-xl {
  max-width: 500px;
  min-width: 350px;
}

/* 位置 */
.hover-card-position-top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
}

.hover-card-position-bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 8px;
}

.hover-card-position-left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 8px;
}

.hover-card-position-right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 8px;
}

/* 箭头 */
.hover-card-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border: 6px solid transparent;
}

.hover-card-arrow-top {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: white;
  border-bottom: none;
}

.hover-card-arrow-bottom {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-color: white;
  border-top: none;
}

.hover-card-arrow-left {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-left-color: white;
  border-right: none;
}

.hover-card-arrow-right {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-right-color: white;
  border-left: none;
}

/* 卡片内容 */
.hover-card-content {
  padding: 16px;
}

.hover-card-image {
  margin: -16px -16px 12px -16px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.hover-card-image img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  display: block;
}

.hover-card-title {
  margin: 0 0 8px 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text, #111827);
  line-height: 1.4;
}

.hover-card-description {
  margin: 0 0 12px 0;
  font-size: 0.875rem;
  color: var(--color-text-secondary, #6b7280);
  line-height: 1.5;
}

.hover-card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.hover-card-meta-item {
  font-size: 0.75rem;
  color: var(--color-text-tertiary, #9ca3af);
  background: var(--color-gray-100, #f3f4f6);
  padding: 2px 6px;
  border-radius: 4px;
}

.hover-card-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.hover-card-action-btn {
  padding: 4px 12px;
  font-size: 0.75rem;
  border: 1px solid var(--color-border, #d1d5db);
  border-radius: 4px;
  background: white;
  color: var(--color-text, #111827);
  cursor: pointer;
  transition: all 0.2s ease;
}

.hover-card-action-btn:hover {
  background: var(--wc-neutral-50, #f9fafb);
  border-color: var(--color-primary, #3b82f6);
}

.hover-card-action-btn:active {
  transform: scale(0.98);
}

/* 过渡动画 */
.hover-card-transition-enter-active,
.hover-card-transition-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.hover-card-transition-enter-from,
.hover-card-transition-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  .hover-card-popup {
    background: var(--wc-neutral-800, #1f2937);
    border-color: var(--color-dark-border, #374151);
  }
  
  .hover-card-arrow-top {
    border-top-color: var(--wc-neutral-800, #1f2937);
  }
  
  .hover-card-arrow-bottom {
    border-bottom-color: var(--wc-neutral-800, #1f2937);
  }
  
  .hover-card-arrow-left {
    border-left-color: var(--wc-neutral-800, #1f2937);
  }
  
  .hover-card-arrow-right {
    border-right-color: var(--wc-neutral-800, #1f2937);
  }
  
  .hover-card-title {
    color: var(--color-dark-text, #f9fafb);
  }
  
  .hover-card-description {
    color: var(--color-dark-text-secondary, #d1d5db);
  }
  
  .hover-card-meta-item {
    background: var(--color-dark-gray, #374151);
    color: var(--color-dark-text-tertiary, #9ca3af);
  }
  
  .hover-card-action-btn {
    background: var(--wc-neutral-800, #1f2937);
    border-color: var(--color-dark-border, #374151);
    color: var(--color-dark-text, #f9fafb);
  }
  
  .hover-card-action-btn:hover {
    background: var(--color-dark-hover, #374151);
  }
}

/* 响应式 */
@media (max-width: 640px) {
  .hover-card-popup {
    max-width: calc(100vw - 32px);
  }
  
  .hover-card-position-left,
  .hover-card-position-right {
    position: fixed;
    top: auto;
    bottom: auto;
    left: 16px;
    right: 16px;
    transform: none;
    margin: 0;
  }
}
</style> 