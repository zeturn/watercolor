<template>
  <span
    class="wc-tooltip-wrapper relative inline-block"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <slot />
    <transition name="fade">
      <div
        v-if="show"
        class="wc-tooltip absolute z-50 px-2 py-1 rounded text-xs whitespace-nowrap"
        :class="placementClass"
      >
        {{ text }}
      </div>
    </transition>
  </span>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { getPlacementClass } from './utils'
import './style.css'

const props = defineProps({
  text: { type: String, required: true },
  placement: {
    type: String,
    default: 'top',
    validator: (v: string) => ['top', 'bottom', 'left', 'right'].includes(v),
  },
})

const show = ref(false)

const placementClass = computed(() => getPlacementClass(props.placement))
</script>

<style scoped>
.wc-tooltip {
  background: var(--wc-neutral-900);
  color: var(--wc-neutral-0);
  pointer-events: none;
  opacity: 0.9;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 