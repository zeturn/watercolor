<template>
  <span
    class="wc-tooltip-wrapper"
    :class="className"
    :aria-describedby="show ? tooltipId : undefined"
    @mouseenter="show = true"
    @mouseleave="show = false"
    @focusin="show = true"
    @focusout="show = false"
  >
    <slot />
    <transition name="tooltip-fade">
      <div
        v-if="show"
        :id="tooltipId"
        class="wc-tooltip"
        :class="placementClass"
        role="tooltip"
      >
        {{ text }}
      </div>
    </transition>
  </span>
</template>

<script setup lang="ts">
import { ref, computed, useId } from 'vue'
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
const tooltipId = useId()

const placementClass = computed(() => getPlacementClass(props.placement))
</script>
