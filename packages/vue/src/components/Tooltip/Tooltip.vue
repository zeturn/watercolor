<template>
  <span
    ref="triggerRef"
    class="wc-tooltip-wrapper"
    :class="className"
    :aria-describedby="show ? tooltipId : undefined"
    @mouseenter="show = true"
    @mouseleave="show = false"
    @focusin="show = true"
    @focusout="show = false"
  >
    <slot />
    <teleport to="body">
      <transition name="tooltip-fade">
        <div
          v-if="show"
          ref="tooltipRef"
          :id="tooltipId"
          class="wc-tooltip"
          :class="placementClass"
          role="tooltip"
        >
          {{ text }}
        </div>
      </transition>
    </teleport>
  </span>
</template>

<script setup lang="ts">
import { ref, computed, useId } from 'vue'
import { getPlacementClass, validatePlacement } from './utils'
import { useFloatingPosition } from '../../interactions'
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
const triggerRef = ref<HTMLElement | null>(null)
const tooltipRef = ref<HTMLElement | null>(null)

const requestedPlacement = computed(() => props.placement)
const { resolvedPlacement } = useFloatingPosition({
  open: show,
  anchorRef: triggerRef,
  floatingRef: tooltipRef,
  placement: requestedPlacement,
  offset: ref(8)
})

const placementClass = computed(() => getPlacementClass(resolvedPlacement.value))
</script>
