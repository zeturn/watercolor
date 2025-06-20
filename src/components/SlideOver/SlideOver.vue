<template>
  <teleport to="body">
    <transition name="slideover">
      <div v-if="model" class="slideover-wrapper" @keydown.esc="close" tabindex="-1">
        <div class="slideover-overlay" @click="close"></div>
        <div class="slideover-panel" :class="[`slideover-${placement}`]" :style="panelStyle">
          <header v-if="$slots.header" class="slideover-header">
            <slot name="header" />
          </header>
          <div class="slideover-body">
            <slot />
          </div>
          <footer v-if="$slots.footer" class="slideover-footer">
            <slot name="footer" />
          </footer>
          <button class="slideover-close" @click="close" aria-label="关闭">✕</button>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { computed } from 'vue'
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
    const model = computed({
      get: () => props.modelValue,
      set: (v) => emit('update:modelValue', v)
    })
    const close = () => {
      model.value = false
      emit('close')
    }
    const panelStyle = computed(() => ({ width: typeof props.width === 'number' ? props.width + 'px' : props.width }))
    return { model, close, panelStyle }
  }
}
</script>

<style scoped>
.slideover-wrapper {
  position: fixed;
  inset: 0;
  z-index: 3000;
  display: flex;
}
.slideover-overlay {
  flex: 1 1 auto;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(2px);
}
.slideover-panel {
  position: relative;
  background: white;
  max-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 12px rgba(0,0,0,0.1);
}
.slideover-left { order: 0; }
.slideover-right { order: 1; }
.slideover-close {
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
}
.slideover-header, .slideover-footer { padding: 16px; border-bottom: 1px solid #e5e7eb; }
.slideover-footer { border-top: 1px solid #e5e7eb; border-bottom: none; }
.slideover-body { padding: 16px; flex: 1 1 auto; }

.slideover-enter-active, .slideover-leave-active { transition: transform 0.3s ease, opacity 0.3s ease; }
.slideover-enter-from, .slideover-leave-to { opacity: 0; }
.slideover-right.slideover-panel.slideover-enter-from { transform: translateX(100%); }
.slideover-right.slideover-panel.slideover-leave-to { transform: translateX(100%); }
.slideover-left.slideover-panel.slideover-enter-from { transform: translateX(-100%); }
.slideover-left.slideover-panel.slideover-leave-to { transform: translateX(-100%); }

@media (prefers-color-scheme: dark) {
  .slideover-panel { background: var(--color-dark-surface, #1f2937); color: var(--color-dark-text, #f9fafb); }
  .slideover-header, .slideover-footer { border-color: var(--color-dark-border, #374151); }
}
</style> 