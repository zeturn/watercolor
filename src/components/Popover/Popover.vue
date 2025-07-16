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
        :aria-expanded="isOpen.toString()"
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
          role="dialog"
          v-outside="close"
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
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import './style.css'

export default {
  name: 'Popover',
  directives: {
    outside: {
      beforeMount(el, binding) {
        el.__clickOutside__ = (e) => {
          if (!el.contains(e.target)) {
            binding.value(e)
          }
        }
        document.addEventListener('mousedown', el.__clickOutside__)
      },
      unmounted(el) {
        document.removeEventListener('mousedown', el.__clickOutside__)
      },
    },
  },
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
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', positionPopover)
      window.removeEventListener('scroll', positionPopover)
    })

    return { isOpen, open, close, toggle, triggerWrapper, popoverRef }
  },
}
</script> 