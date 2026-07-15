<template>
  <div
    ref="triggerWrapper"
    class="wc-popover-container"
  >
    <slot
      name="trigger"
      :open="open"
      :close="close"
    >
      <button
        class="wc-popover-trigger"
        type="button"
        :aria-expanded="isOpen.toString()"
        aria-haspopup="dialog"
        :aria-controls="popoverId"
        @click="toggle"
      >
        {{ triggerText }}
      </button>
    </slot>

    <teleport to="body">
      <transition name="wc-popover-fade">
        <div
          v-if="isOpen"
          ref="popoverRef"
          class="wc-popover-content"
          :class="[`wc-popover-content--${placement}`]"
          :id="popoverId"
          role="dialog"
          aria-label="弹出内容"
          tabindex="-1"
          @keydown.esc="close"
        >
          <slot>
            这是默认的弹出内容。
          </slot>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, nextTick, useId, watch } from 'vue'
import './style.css'

export default {
  name: 'Popover',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    triggerText: {
      type: String,
      default: '打开弹窗',
    },
    placement: {
      type: String,
      default: 'bottom',
      validator: (v) => ['top', 'bottom', 'left', 'right'].includes(v),
    },
    offset: {
      type: Number,
      default: 8,
    },
  },
  emits: ['update:modelValue', 'open', 'close'],
  setup(props, { emit }) {
    const isOpen = ref(props.modelValue)
    const triggerWrapper = ref(null)
    const popoverRef = ref(null)
    const popoverId = useId()

    const open = () => {
      if (isOpen.value) return
      isOpen.value = true
      emit('update:modelValue', true)
      emit('open')
      nextTick(positionPopover)
    }

    const close = () => {
      if (!isOpen.value) return
      isOpen.value = false
      emit('update:modelValue', false)
      emit('close')
    }

    const toggle = () => {
      isOpen.value ? close() : open()
    }

    const handleDocumentPointerDown = (event) => {
      if (!isOpen.value) return
      if (triggerWrapper.value?.contains(event.target)) return
      if (popoverRef.value?.contains(event.target)) return
      close()
    }

    const positionPopover = () => {
      const triggerEl = triggerWrapper.value
      const popoverEl = popoverRef.value
      if (!triggerEl || !popoverEl) return

      const triggerRect = triggerEl.getBoundingClientRect()
      const popRect = popoverEl.getBoundingClientRect()
      const { placement, offset } = props

      let top = 0
      let left = 0
      switch (placement) {
        case 'top':
          top = triggerRect.top - popRect.height - offset
          left = triggerRect.left + (triggerRect.width - popRect.width) / 2
          break
        case 'bottom':
          top = triggerRect.bottom + offset
          left = triggerRect.left + (triggerRect.width - popRect.width) / 2
          break
        case 'left':
          top = triggerRect.top + (triggerRect.height - popRect.height) / 2
          left = triggerRect.left - popRect.width - offset
          break
        case 'right':
          top = triggerRect.top + (triggerRect.height - popRect.height) / 2
          left = triggerRect.right + offset
          break
      }

      popoverEl.style.top = `${top + window.scrollY}px`
      popoverEl.style.left = `${left + window.scrollX}px`
    }

    onMounted(() => {
      if (isOpen.value) nextTick(positionPopover)
      window.addEventListener('resize', positionPopover)
      window.addEventListener('scroll', positionPopover)
      document.addEventListener('mousedown', handleDocumentPointerDown)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', positionPopover)
      window.removeEventListener('scroll', positionPopover)
      document.removeEventListener('mousedown', handleDocumentPointerDown)
    })

    watch(() => props.modelValue, value => {
      isOpen.value = value
      if (value) nextTick(positionPopover)
    })

    return { isOpen, open, close, toggle, triggerWrapper, popoverRef, popoverId }
  },
}
</script>
