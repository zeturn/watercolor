<template>
  <nav
    class="wc-breadcrumb"
    aria-label="面包屑导航"
    role="navigation"
  >
    <ol class="wc-breadcrumb-list">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="['wc-breadcrumb-item', { 'wc-breadcrumb-item--current': index === items.length - 1 }]"
      >
        <component
          :is="getComponent(item, index)"
          :class="['wc-breadcrumb-link', { 'wc-breadcrumb-link--disabled': item.disabled }]"
          :href="getHref(item, index)"
          :aria-current="index === items.length - 1 ? 'page' : undefined"
          @click="handleClick($event, item, index)"
        >
          <span v-if="item.icon" class="wc-breadcrumb-icon" v-html="item.icon"></span>
          {{ item.label }}
        </component>
        <span
          v-if="index < items.length - 1"
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
    validator: (value) => ['default', 'underlined', 'contained'].includes(value)
  }
})

const emit = defineEmits(['click'])

const processedItems = computed(() => {
  let items = [...props.items]
  
  // 添加首页链接
  if (props.showHome && items.length > 0 && items[0].label !== '首页') {
    items.unshift({
      label: '首页',
      icon: props.homeIcon,
      href: '/',
      to: '/'
    })
  }
  
  // 处理最大显示项数
  if (props.maxItems > 0 && items.length > props.maxItems) {
    const ellipsisIndex = Math.max(1, props.maxItems - 2)
    items = [
      ...items.slice(0, ellipsisIndex),
      { label: '...', disabled: true, isEllipsis: true },
      ...items.slice(-1)
    ]
  }
  
  return items
})

const getComponent = (item, index) => {
  if (index === props.items.length - 1 || item.disabled || item.isEllipsis) {
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
  if (index === props.items.length - 1 || item.disabled || item.isEllipsis) {
    return undefined
  }
  return item.href
}

const handleClick = (event, item, index) => {
  if (item.disabled || item.isEllipsis || index === props.items.length - 1) {
    event.preventDefault()
    return
  }
  
  emit('click', { event, item, index })
}
</script>

<style scoped>
.wc-breadcrumb {
  font-family: var(--wc-font-family);
}

.wc-breadcrumb-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.wc-breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.wc-breadcrumb-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.4;
  color: var(--wc-neutral-500, #6b7280);
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.wc-breadcrumb-link:hover:not(.wc-breadcrumb-link--disabled) {
  color: var(--wc-primary-500, #3D5AFE);
  background-color: var(--wc-neutral-100, #f3f4f6);
}

.wc-breadcrumb-link--disabled {
  color: var(--wc-neutral-400, #9ca3af);
  cursor: default;
}

.wc-breadcrumb-item--current .wc-breadcrumb-link {
  color: var(--wc-neutral-900, #1f2937);
  font-weight: 500;
  cursor: default;
}

.wc-breadcrumb-icon {
  font-size: 12px;
  line-height: 1;
}

.wc-breadcrumb-separator {
  color: var(--wc-neutral-400, #9ca3af);
  font-size: 14px;
  user-select: none;
  margin: 0 4px;
}

/* 变体样式 */
.wc-breadcrumb.wc-breadcrumb--underlined .wc-breadcrumb-link:hover:not(.wc-breadcrumb-link--disabled) {
  background: none;
  border-bottom: 1px solid var(--wc-primary-500, #3D5AFE);
}

.wc-breadcrumb.wc-breadcrumb--underlined .wc-breadcrumb-item--current .wc-breadcrumb-link {
  border-bottom: 2px solid var(--wc-primary-500, #3D5AFE);
}

.wc-breadcrumb.wc-breadcrumb--contained .wc-breadcrumb-link {
  background-color: var(--wc-neutral-100, #f3f4f6);
  border: 1px solid var(--wc-neutral-200, #e5e7eb);
}

.wc-breadcrumb.wc-breadcrumb--contained .wc-breadcrumb-link:hover:not(.wc-breadcrumb-link--disabled) {
  background-color: var(--wc-neutral-200, #e5e7eb);
  border-color: var(--wc-primary-500, #3D5AFE);
}

.wc-breadcrumb.wc-breadcrumb--contained .wc-breadcrumb-item--current .wc-breadcrumb-link {
  background-color: var(--wc-primary-500, #3D5AFE);
  color: var(--wc-neutral-0, #ffffff);
  border-color: var(--wc-primary-500, #3D5AFE);
}

/* 深色模式（使用 .dark 类代替媒体查询） */
:deep(.dark) .wc-breadcrumb-link {
  color: var(--wc-neutral-300, #d1d5db);
}

:deep(.dark) .wc-breadcrumb-link:hover:not(.wc-breadcrumb-link--disabled) {
  color: var(--wc-primary-400, #6D85FE);
  background-color: var(--wc-neutral-700, #374151);
}

:deep(.dark) .wc-breadcrumb-link--disabled {
  color: var(--wc-neutral-600, #6b7280);
}

:deep(.dark) .wc-breadcrumb-item--current .wc-breadcrumb-link {
  color: var(--wc-neutral-50, #f9fafb);
}

:deep(.dark) .wc-breadcrumb-separator {
  color: var(--wc-neutral-600, #6b7280);
}

:deep(.dark) .wc-breadcrumb.wc-breadcrumb--underlined .wc-breadcrumb-link:hover:not(.wc-breadcrumb-link--disabled) {
  background: none;
  border-bottom-color: var(--wc-primary-400, #6D85FE);
}

:deep(.dark) .wc-breadcrumb.wc-breadcrumb--underlined .wc-breadcrumb-item--current .wc-breadcrumb-link {
  border-bottom-color: var(--wc-primary-400, #6D85FE);
}

:deep(.dark) .wc-breadcrumb.wc-breadcrumb--contained .wc-breadcrumb-link {
  background-color: var(--wc-neutral-700, #374151);
  border-color: var(--wc-neutral-600, #4b5563);
}

:deep(.dark) .wc-breadcrumb.wc-breadcrumb--contained .wc-breadcrumb-link:hover:not(.wc-breadcrumb-link--disabled) {
  background-color: var(--wc-neutral-600, #4b5563);
  border-color: var(--wc-primary-400, #6D85FE);
}

:deep(.dark) .wc-breadcrumb.wc-breadcrumb--contained .wc-breadcrumb-item--current .wc-breadcrumb-link {
  background-color: var(--wc-primary-400, #6D85FE);
  color: var(--wc-neutral-900, #1f2937);
  border-color: var(--wc-primary-400, #6D85FE);
}

/* 响应式设计 */
@media (max-width: 480px) {
  .wc-breadcrumb-link {
    padding: 3px 6px;
    font-size: 13px;
  }
  
  .wc-breadcrumb-separator {
    font-size: 13px;
    margin: 0 2px;
  }
  
  .wc-breadcrumb-icon {
    font-size: 11px;
  }
}
</style> 