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
          :class="[`wc-popover-content--${resolvedPlacement}`]"
          :id="popoverId"
          role="dialog"
          :aria-label="messages.closePopover"
          tabindex="-1"
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
import { computed, ref, nextTick, useId, watch } from 'vue'
import { useFloatingPosition, useOverlayLayer } from '../../interactions'
import { useLocale } from '../../LocaleVUE'
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
    const { messages } = useLocale()
    const isOpen = ref(props.modelValue)
    const triggerWrapper = ref(null)
    const popoverRef = ref(null)
    const popoverId = useId()

    const open = () => {
      if (isOpen.value) return
      isOpen.value = true
      emit('update:modelValue', true)
      emit('open')
      nextTick(update)
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

    const placementRef = computed(() => props.placement)
    const offsetRef = computed(() => props.offset)
    const { resolvedPlacement, update } = useFloatingPosition({
      open: isOpen,
      anchorRef: triggerWrapper,
      floatingRef: popoverRef,
      placement: placementRef,
      offset: offsetRef
    })

    useOverlayLayer({
      open: isOpen,
      elementRef: popoverRef,
      refs: [triggerWrapper],
      closeOnEscape: true,
      closeOnPointerDownOutside: true,
      onEscapeKeyDown: close,
      onPointerDownOutside: close,
      zIndex: 2000
    })

    watch(() => props.modelValue, value => {
      isOpen.value = value
      if (value) nextTick(update)
    })

    return { isOpen, open, close, toggle, triggerWrapper, popoverRef, popoverId, resolvedPlacement, messages }
  },
}
</script>
