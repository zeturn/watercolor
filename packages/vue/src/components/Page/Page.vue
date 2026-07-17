<template>
  <component
    :is="as"
    class="wc-page"
    :data-size="size"
    :data-gutter="gutter"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { PAGE_GUTTERS, PAGE_SIZES } from '../../composition'
import type { PageGutter, PageSize } from '@zeturn/watercolor-core'
import type { PropType } from 'vue'
import './style.css'

defineOptions({ inheritAttrs: false })
defineProps({
  as: { type: String, default: 'div' },
  size: {
    type: String as PropType<PageSize>,
    default: 'lg',
    validator: (value: string) => PAGE_SIZES.includes(value as PageSize)
  },
  gutter: {
    type: String as PropType<PageGutter>,
    default: 'md',
    validator: (value: string) => PAGE_GUTTERS.includes(value as PageGutter)
  }
})
</script>
