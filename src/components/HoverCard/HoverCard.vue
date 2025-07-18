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
import './style.css'

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

 