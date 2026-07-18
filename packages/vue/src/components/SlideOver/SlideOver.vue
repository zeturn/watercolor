<template>
  <teleport to="body">
    <transition name="slideover">
      <div
        v-if="model"
        class="wc-slideover-wrapper"
        tabindex="-1"
        @keydown.esc="close"
      >
        <div
          class="wc-slideover-overlay"
          @click="close"
        />
        <div
          ref="panelRef"
          class="wc-slideover-panel"
          :class="[`wc-slideover-${placement}`]"
          :style="panelStyle"
          role="dialog"
          aria-modal="true"
          tabindex="-1"
        >
          <header
            v-if="$slots.header"
            class="wc-slideover-header"
          >
            <slot name="header" />
          </header>
          <div class="wc-slideover-body">
            <slot />
          </div>
          <footer
            v-if="$slots.footer"
            class="wc-slideover-footer"
          >
            <slot name="footer" />
          </footer>
          <button
            class="wc-slideover-close"
            type="button"
            :aria-label="messages.closeDialog"
            @click="close"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useOverlayLayer } from '../../interactions'
import { useLocale } from '../../LocaleVUE'
import './style.css'
export default {
  name: 'SlideOver',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'right',
      validator: (v) => ['left', 'right'].includes(v)
    },
    width: {
      type: [String, Number],
      default: '400px'
    }
  },
  emits: ['update:modelValue', 'open', 'close'],
  setup(props, { emit }) {
    const panelRef = ref(null)
    const { messages } = useLocale()

    const model = computed({
      get: () => props.modelValue,
      set: (v) => emit('update:modelValue', v)
    })
    const close = () => {
      model.value = false
      emit('close')
    }
    const panelStyle = computed(() => ({ width: typeof props.width === 'number' ? props.width + 'px' : props.width }))

    useOverlayLayer({
      open: model,
      elementRef: panelRef,
      modal: true,
      lockScroll: true,
      restoreFocus: true,
      initialFocus: true,
      closeOnEscape: true,
      closeOnPointerDownOutside: false,
      onEscapeKeyDown: close,
      zIndex: 3000
    })

    watch(() => props.modelValue, (open) => {
      if (open) {
        emit('open')
      }
    }, { immediate: true })

    return { model, close, panelStyle, panelRef, messages }
  }
}
</script>
