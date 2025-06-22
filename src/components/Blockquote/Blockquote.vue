<template>
  <blockquote :class="blockquoteClasses">
    <p class="quote-text"><slot>这里是引用内容</slot></p>
    <footer v-if="cite" class="quote-cite">— {{ cite }}</footer>
  </blockquote>
</template>

<script setup>
import { computed } from 'vue'
import { getBlockquoteClasses } from './utils.js'
import './style.css'

const props = defineProps({
  cite: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  }
})

const blockquoteClasses = computed(() => getBlockquoteClasses(props.className))
</script> 