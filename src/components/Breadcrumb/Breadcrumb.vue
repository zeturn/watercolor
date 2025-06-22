<template>
  <nav
    :class="breadcrumbClasses"
    aria-label="面包屑导航"
    role="navigation"
  >
    <ol class="wc-breadcrumb-list">
      <li
        v-for="(item, index) in processedItems"
        :key="index"
        :class="getBreadcrumbItemClasses(index, processedItems.length)"
      >
        <component
          :is="getComponent(item, index)"
          :class="getBreadcrumbLinkClasses(item.disabled)"
          :href="getHref(item, index)"
          :aria-current="index === processedItems.length - 1 ? 'page' : undefined"
          @click="handleClick($event, item, index)"
        >
          <span v-if="item.icon" class="wc-breadcrumb-icon" v-html="item.icon"></span>
          {{ item.label }}
        </component>
        <span
          v-if="index < processedItems.length - 1"
          class="wc-breadcrumb-separator"
          aria-hidden="true"
        >
          {{ separator }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { 
  isValidVariant,
  processBreadcrumbItems,
  getBreadcrumbClasses,
  getBreadcrumbItemClasses,
  getBreadcrumbLinkClasses,
  handleBreadcrumbClick,
  shouldRenderAsLink
} from './utils.js'
import './style.css'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  separator: {
    type: String,
    default: '/'
  },
  maxItems: {
    type: Number,
    default: 0
  },
  showHome: {
    type: Boolean,
    default: false
  },
  homeIcon: {
    type: String,
    default: '🏠'
  },
  variant: {
    type: String,
    default: 'default',
    validator: isValidVariant
  }
})

const emit = defineEmits(['click'])

const breadcrumbClasses = computed(() => getBreadcrumbClasses(props.variant))

const processedItems = computed(() => 
  processBreadcrumbItems(props.items, props.showHome, props.homeIcon, props.maxItems)
)

const getComponent = (item, index) => {
  if (!shouldRenderAsLink(index, processedItems.value.length, item.disabled, item.isEllipsis)) {
    return 'span'
  }
  if (item.href) {
    return 'a'
  }
  if (item.to) {
    return 'router-link'
  }
  return 'button'
}

const getHref = (item, index) => {
  if (!shouldRenderAsLink(index, processedItems.value.length, item.disabled, item.isEllipsis)) {
    return undefined
  }
  return item.href
}

const handleClick = (event, item, index) => {
  const shouldContinue = handleBreadcrumbClick(
    event, 
    item, 
    index, 
    processedItems.value.length, 
    (e, item, idx) => emit('click', { event: e, item, index: idx })
  )
  
  if (!shouldContinue) {
    return
  }
}
</script> 