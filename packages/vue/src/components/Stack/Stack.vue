<template>
  <component
    :is="as"
    class="wc-stack"
    :data-gap="gap"
    :data-align="align"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { COMPOSITION_ALIGNS, COMPOSITION_GAPS } from '../../composition'
import type { CompositionAlign, CompositionGap } from '@zeturn/watercolor-core'
import type { PropType } from 'vue'
import './style.css'

defineOptions({ inheritAttrs: false })
defineProps({
  as: { type: String, default: 'div' },
  gap: {
    type: String as PropType<CompositionGap>,
    default: 'md',
    validator: (value: string) => COMPOSITION_GAPS.includes(value as CompositionGap)
  },
  align: {
    type: String as PropType<CompositionAlign>,
    default: 'stretch',
    validator: (value: string) => COMPOSITION_ALIGNS.includes(value as CompositionAlign)
  }
})
</script>
