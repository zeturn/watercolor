<template>
  <component
    :is="as"
    class="wc-split"
    :data-ratio="ratio"
    :data-gap="gap"
    :data-align="align"
    :data-collapse="collapse"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import {
  COMPOSITION_ALIGNS,
  COMPOSITION_GAPS,
  SPLIT_COLLAPSE,
  SPLIT_RATIOS
} from '../../composition'
import type {
  CompositionAlign,
  CompositionGap,
  SplitCollapse,
  SplitRatio
} from '@zeturn/watercolor-core'
import type { PropType } from 'vue'
import './style.css'

defineOptions({ inheritAttrs: false })
defineProps({
  as: { type: String, default: 'div' },
  ratio: {
    type: String as PropType<SplitRatio>,
    default: 'equal',
    validator: (value: string) => SPLIT_RATIOS.includes(value as SplitRatio)
  },
  gap: {
    type: String as PropType<CompositionGap>,
    default: 'xl',
    validator: (value: string) => COMPOSITION_GAPS.includes(value as CompositionGap)
  },
  align: {
    type: String as PropType<CompositionAlign>,
    default: 'stretch',
    validator: (value: string) => COMPOSITION_ALIGNS.includes(value as CompositionAlign)
  },
  collapse: {
    type: String as PropType<SplitCollapse>,
    default: 'md',
    validator: (value: string) => SPLIT_COLLAPSE.includes(value as SplitCollapse)
  }
})
</script>
