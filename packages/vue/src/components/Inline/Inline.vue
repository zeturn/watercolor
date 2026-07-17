<template>
  <component
    :is="as"
    class="wc-inline"
    :data-gap="gap"
    :data-align="align"
    :data-justify="justify"
    :data-wrap="String(wrap)"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import {
  COMPOSITION_ALIGNS,
  COMPOSITION_GAPS,
  INLINE_JUSTIFY
} from '../../composition'
import type { CompositionAlign, CompositionGap, InlineJustify } from '@zeturn/watercolor-core'
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
    default: 'center',
    validator: (value: string) => COMPOSITION_ALIGNS.includes(value as CompositionAlign)
  },
  justify: {
    type: String as PropType<InlineJustify>,
    default: 'start',
    validator: (value: string) => INLINE_JUSTIFY.includes(value as InlineJustify)
  },
  wrap: { type: Boolean, default: true }
})
</script>
