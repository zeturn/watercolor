<template>
  <div>
    <!-- Inline Variant (always visible) -->
    <nav
      v-if="variant === 'inline'"
      ref="menuRef"
      :class="menuClasses"
    >
      <slot />
    </nav>

    <!-- Popover Variant -->
    <Teleport v-else :to="'body'" v-if="open">
      <div class="wc-menu__container">
        <!-- 背景遮罩 -->
        <div
          class="wc-menu__backdrop"
          @click="handleClose"
        />
        <!-- 菜单内容 -->
        <div
          ref="menuRef"
          :class="menuClasses"
          :style="styles"
          @click.stop
        >
          <slot />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { getMenuClasses, computeMenuPosition } from './utils.js'

// 组件属性
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  anchorEl: {
    type: Object,
    default: null,
  },
  anchorOrigin: {
    type: Object,
    default: () => ({ vertical: 'bottom', horizontal: 'left' }),
  },
  transformOrigin: {
    // 暂未使用，但保持接口一致
    type: Object,
    default: () => ({ vertical: 'top', horizontal: 'left' }),
  },
  elevation: {
    type: Number,
    default: 8,
  },
  maxHeight: {
    type: [String, Number],
    default: 'auto',
  },
  variant: {
    type: String,
    default: 'inline',
    validator: (v) => ['popover', 'inline'].includes(v),
  },
  className: {
    type: [String, Array, Object],
    default: '',
  },
})

const emit = defineEmits(['close'])

const menuRef = ref(null)
const styles = ref({})

// 计算类名
const menuClasses = computed(() => getMenuClasses(props.elevation, props.className, props.variant))

const updatePosition = () => {
  styles.value = computeMenuPosition(props.anchorEl, props.anchorOrigin, props.maxHeight)
}

const handleClose = () => emit('close')

watch(
  () => [props.anchorEl, props.anchorOrigin, props.maxHeight],
  () => {
    if (props.open) updatePosition()
  }
)

if (props.variant === 'popover') {
  onMounted(() => {
    updatePosition()
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updatePosition, true)
    window.removeEventListener('resize', updatePosition)
  })
}
</script>

<style src="./style.css"></style> 