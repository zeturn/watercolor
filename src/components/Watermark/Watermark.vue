<template>
  <div
    v-if="show"
    class="wc-watermark"
    :style="watermarkStyle"
  />
  <slot />
</template>

<script setup lang="ts">
import { watch, ref, computed } from 'vue'
import { defaultProps, createCanvasUrl, createWatermarkStyle } from './utils'
import './style.css'

const props = defineProps({
  content: String,
  cross: { type: Boolean, default: defaultProps.cross },
  debug: { type: Boolean, default: defaultProps.debug },
  fontSize: { type: Number, default: defaultProps.fontSize },
  fontFamily: { type: String, default: defaultProps.fontFamily },
  fontStyle: { type: String, default: defaultProps.fontStyle },
  fontVariant: { type: String, default: defaultProps.fontVariant },
  fontWeight: { type: Number, default: defaultProps.fontWeight },
  fontColor: { type: String, default: 'var(--wc-neutral-500, rgba(128,128,128,.3))' },
  fullscreen: { type: Boolean, default: defaultProps.fullscreen },
  globalRotate: { type: Number, default: defaultProps.globalRotate },
  lineHeight: { type: Number, default: defaultProps.lineHeight },
  height: { type: Number, default: defaultProps.height },
  width: { type: Number, default: defaultProps.width },
  image: String,
  imageHeight: Number,
  imageWidth: Number,
  imageOpacity: { type: Number, default: defaultProps.imageOpacity },
  rotate: { type: Number, default: defaultProps.rotate },
  selectable: { type: Boolean, default: defaultProps.selectable },
  textAlign: { type: String, default: defaultProps.textAlign },
  xGap: { type: Number, default: defaultProps.xGap },
  yGap: { type: Number, default: defaultProps.yGap },
  xOffset: { type: Number, default: defaultProps.xOffset },
  yOffset: { type: Number, default: defaultProps.yOffset },
  zIndex: { type: Number, default: defaultProps.zIndex }
})

const url = ref('')
const show = computed(() => !!props.content || !!props.image)

async function generate() {
  if (!show.value) return
  url.value = await createCanvasUrl(props)
}

watch(() => ({ ...props }), generate, { immediate: true, deep: true })

const watermarkStyle = computed(() => createWatermarkStyle(props, url.value))
</script>

<style scoped>
.wc-watermark {
  mix-blend-mode: multiply;
}
</style> 