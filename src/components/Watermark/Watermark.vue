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

const props = defineProps({
  content: String,
  cross: { type: Boolean, default: false },
  debug: { type: Boolean, default: false },
  fontSize: { type: Number, default: 14 },
  fontFamily: { type: String, default: 'sans-serif' },
  fontStyle: { type: String, default: 'normal' },
  fontVariant: { type: String, default: '' },
  fontWeight: { type: Number, default: 400 },
  fontColor: { type: String, default: 'var(--wc-neutral-500, rgba(128,128,128,.3))' },
  fullscreen: { type: Boolean, default: false },
  globalRotate: { type: Number, default: 0 },
  lineHeight: { type: Number, default: 14 },
  height: { type: Number, default: 32 },
  width: { type: Number, default: 32 },
  image: String,
  imageHeight: Number,
  imageWidth: Number,
  imageOpacity: { type: Number, default: 1 },
  rotate: { type: Number, default: 0 },
  selectable: { type: Boolean, default: true },
  textAlign: { type: String, default: 'left' },
  xGap: { type: Number, default: 0 },
  yGap: { type: Number, default: 0 },
  xOffset: { type: Number, default: 0 },
  yOffset: { type: Number, default: 0 },
  zIndex: { type: Number, default: 10 }
})

const url = ref('')
const show = computed(() => !!props.content || !!props.image)

function resolveColor(color: string): string {
  if (color.startsWith('var(')) {
    const match = color.match(/--[^, )]+/)
    if (match) {
      const cssValue = getComputedStyle(document.documentElement).getPropertyValue(match[0]).trim()
      return cssValue || color
    }
  }
  return color
}

function createCanvasUrl() {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!

  const tileWidth = props.width + props.xGap
  const tileHeight = props.height + props.yGap
  canvas.width = tileWidth
  canvas.height = tileHeight

  if (props.image) {
    return new Promise<string>((resolve) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        canvas.width = (props.imageWidth || img.width) + props.xGap
        canvas.height = (props.imageHeight || img.height) + props.yGap
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.globalAlpha = props.imageOpacity
        ctx.translate(canvas.width / 2, canvas.height / 2)
        ctx.rotate((props.rotate * Math.PI) / 180)
        const w = props.imageWidth || img.width
        const h = props.imageHeight || img.height
        ctx.drawImage(img, -w / 2, -h / 2, w, h)
        resolve(canvas.toDataURL())
      }
      img.src = props.image!
    })
  }

  // draw text
  const lines = (props.content || '').split(/\\n/)
  ctx.textAlign = props.textAlign as CanvasTextAlign
  ctx.textBaseline = 'middle'
  ctx.fillStyle = resolveColor(props.fontColor)
  ctx.font = `${props.fontStyle} ${props.fontVariant} ${props.fontWeight} ${props.fontSize}px ${props.fontFamily}`

  ctx.translate(tileWidth / 2, tileHeight / 2)
  ctx.rotate((props.rotate * Math.PI) / 180)

  const startY = -(lines.length - 1) * props.lineHeight / 2
  lines.forEach((line, idx) => {
    const y = startY + idx * props.lineHeight
    ctx.fillText(line, 0, y)
  })

  return Promise.resolve(canvas.toDataURL())
}

async function generate() {
  if (!show.value) return
  url.value = await createCanvasUrl()
}

watch(() => ({ ...props }), generate, { immediate: true, deep: true })

const watermarkStyle = computed(() => {
  const style: Record<string, string | number> = {
    position: props.fullscreen ? 'fixed' : 'absolute',
    top: props.fullscreen ? 0 : 0,
    left: props.fullscreen ? 0 : 0,
    width: props.fullscreen ? '100vw' : '100%',
    height: props.fullscreen ? '100vh' : '100%',
    pointerEvents: props.selectable ? 'none' : 'auto',
    backgroundImage: `url(${url.value})`,
    backgroundRepeat: 'repeat',
    backgroundPosition: `${props.xOffset}px ${props.yOffset}px`,
    zIndex: props.zIndex.toString(),
    transform: `rotate(${props.globalRotate}deg)`
  }
  if (props.debug) {
    style.outline = '1px dashed red'
  }
  if (!props.cross) {
    style.overflow = 'hidden'
  }
  return style
})
</script>

<style scoped>
.wc-watermark {
  mix-blend-mode: multiply;
}
</style> 