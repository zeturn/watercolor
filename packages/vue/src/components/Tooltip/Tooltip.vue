<template>
  <span
    class="wc-tooltip-wrapper relative inline-block"
    :class="className"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <slot />
    <transition name="tooltip-fade">
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
import { getPlacementClass, validatePlacement } from './utils'
import './style.css'

interface Props {
  text: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  placement: 'top',
  className: ''
})

// 验证 placement prop
if (!validatePlacement(props.placement)) {
  console.warn(`Invalid tooltip placement: ${props.placement}. Using 'top' as default.`)
}

const show = ref(false)

const placementClass = computed(() => getPlacementClass(props.placement))
</script>