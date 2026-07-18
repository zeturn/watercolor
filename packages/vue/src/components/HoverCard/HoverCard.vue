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
    @focusin="showCard"
    @focusout="hideCard"
  >
    <!-- 触发元素 -->
    <span
      ref="triggerRef"
      class="hover-card-trigger"
      :id="triggerId"
      :tabindex="disabled ? -1 : 0"
      :aria-describedby="isVisible ? cardId : undefined"
    >
      <slot>{{ triggerText }}</slot>
    </span>

    <!-- 预览卡片 -->
    <teleport to="body">
      <transition
        name="hover-card-transition"
      >
        <div
          v-if="isVisible"
          ref="cardRef"
          class="hover-card-popup"
          :class="[
            `hover-card-position-${resolvedPlacement}`,
            `hover-card-card-size-${cardSize}`
          ]"
          :id="cardId"
          role="dialog"
          :aria-labelledby="cardData.title ? `${cardId}-title` : undefined"
          @mouseenter="showCard"
          @mouseleave="hideCard"
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
                :id="`${cardId}-title`"
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
    </teleport>
  </div>
</template>

<script>
import { computed, ref, useId, onBeforeUnmount } from 'vue'
import { useFloatingPosition, useOverlayLayer } from '../../interactions'
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
      default: false
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
    const triggerRef = ref(null)
    const cardId = useId()
    const triggerId = `${cardId}-trigger`
    const showTimer = ref(null)
    const hideTimer = ref(null)

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

    const placement = computed(() => props.position)
    const offset = ref(8)
    const { resolvedPlacement } = useFloatingPosition({
      open: isVisible,
      anchorRef: triggerRef,
      floatingRef: cardRef,
      placement,
      offset
    })

    useOverlayLayer({
      open: isVisible,
      elementRef: cardRef,
      refs: [triggerRef],
      closeOnEscape: true,
      closeOnPointerDownOutside: true,
      onEscapeKeyDown: () => {
        isVisible.value = false
        emit('hide')
        triggerRef.value?.focus()
      },
      onPointerDownOutside: () => {
        isVisible.value = false
        emit('hide')
      },
      zIndex: 1000
    })

    return {
      isVisible,
      cardRef,
      triggerRef,
      resolvedPlacement,
      triggerId,
      cardId,
      showCard,
      hideCard,
      handleAction
    }
  }
}
</script>
