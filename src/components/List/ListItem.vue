<template>
  <component
    :is="componentTag"
    :class="itemClasses"
    role="listitem"
    :disabled="button && disabled"
    v-bind="$attrs"
  >
    <!-- 可选插槽：图标、主要内容、操作区 -->
    <slot name="icon" />
    <slot />
    <slot name="action" />
  </component>
</template>

<script setup>
import { computed, inject } from 'vue'
import { getListItemClasses } from './utils.js'
import './style.css'

const props = defineProps({
  button: Boolean,
  disabled: Boolean,
  divider: Boolean,
  selected: Boolean,
  disableGutters: Boolean,
  multiselect: Boolean,
  className: {
    type: String,
    default: ''
  },
  component: {
    type: String,
    default: ''
  }
})

// 从父级 List 提供的上下文中获取 dense 信息
const listContext = inject('listContext', { dense: false })

// 计算实际渲染的标签：显式 component > button? 'button' : 'div'
const componentTag = computed(() => props.component || (props.button ? 'button' : 'div'))

// 计算样式类
const itemClasses = computed(() => getListItemClasses({
  button: props.button,
  disabled: props.disabled,
  divider: props.divider,
  dense: listContext.dense,
  selected: props.selected,
  disableGutters: props.disableGutters,
  multiselect: props.multiselect,
  className: props.className
}).join(' '))
</script> 