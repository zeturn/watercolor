<template>
  <component
    :is="iconComponent"
    v-if="iconComponent"
    :class="iconClasses"
    :style="iconStyles"
    v-bind="iconProps"
  />
  <span
    v-else-if="featherIconHtml"
    :class="iconClasses"
    :style="iconStyles"
    v-html="featherIconHtml"
  />
  <span
    v-else-if="htmlIcon"
    :class="iconClasses"
    :style="iconStyles"
    v-html="htmlIcon"
  />
  <span
    v-else
    :class="iconClasses"
    :style="iconStyles"
  >
    <slot />
  </span>
</template>

<script setup>
import { computed, defineAsyncComponent, ref, watchEffect, h } from 'vue'
import './style.css'

// 用于在图标库缺失或加载失败时渲染的占位符组件
const StubIcon = {
  name: 'StubIcon',
  render () {
    return h('span')
  }
}

const ICON_PACKAGES = {
  lucide: '@zeturn/watercolor-icons-lucide-vue',
  heroicons: '@zeturn/watercolor-icons-heroicons-vue',
  tabler: '@zeturn/watercolor-icons-tabler-vue',
  phosphor: '@zeturn/watercolor-icons-phosphor-vue',
  feather: '@zeturn/watercolor-icons-feather'
}

const loadIconPackage = async (library) => {
  const packageName = ICON_PACKAGES[library]
  if (!packageName) {
    return null
  }

  return import(/* @vite-ignore */ packageName)
}

const props = defineProps({
  // Icon库和名称
  library: {
    type: String,
    default: 'lucide',
    validator: (value) => ['lucide', 'heroicons', 'tabler', 'phosphor', 'feather', 'html'].includes(value)
  },
  name: {
    type: String,
    default: ''
  },
  // HTML图标（用于自定义SVG或字体图标）
  html: {
    type: String,
    default: ''
  },
  // 尺寸
  size: {
    type: [String, Number],
    default: 24
  },
  // 颜色
  color: {
    type: String,
    default: 'currentColor'
  },
  // 描边宽度（适用于支持的图标库）
  strokeWidth: {
    type: [String, Number],
    default: 2
  },
  // 样式变体（适用于heroicons）
  variant: {
    type: String,
    default: 'outline',
    validator: (value) => ['outline', 'solid', 'mini'].includes(value)
  },
  // 自定义CSS类
  className: {
    type: String,
    default: ''
  }
})

// 动态导入图标组件
const iconComponent = computed(() => {
  if (!props.name) return null

  try {
    switch (props.library) {
      case 'lucide':
        return defineAsyncComponent(async () => {
          try {
            const module = await loadIconPackage('lucide')
            return module.getIcon?.(props.name) || StubIcon
          } catch (error) {
            console.warn('[Icon] Lucide 图标库加载失败，已使用占位符图标。', error)
            return StubIcon
          }
        })
      
      case 'heroicons':
        return defineAsyncComponent(async () => {
          try {
            const module = await loadIconPackage('heroicons')
            return module.getIcon?.(props.name, props.variant) || StubIcon
          } catch (error) {
            console.warn('[Icon] Heroicons 图标库加载失败，已使用占位符图标。', error)
            return StubIcon
          }
        })
      
      case 'tabler':
        return defineAsyncComponent(async () => {
          try {
            const module = await loadIconPackage('tabler')
            return module.getIcon?.(props.name) || StubIcon
          } catch (error) {
            console.warn('[Icon] Tabler 图标库加载失败，已使用占位符图标。', error)
            return StubIcon
          }
        })
      
      case 'phosphor':
        return defineAsyncComponent(async () => {
          try {
            const module = await loadIconPackage('phosphor')
            return module.getIcon?.(props.name) || StubIcon
          } catch (error) {
            console.warn('[Icon] Phosphor 图标库加载失败，已使用占位符图标。', error)
            return StubIcon
          }
        })
      
      default:
        return null
    }
  } catch (error) {
    console.warn(`Icon "${props.name}" not found in library "${props.library}"`)
    return null
  }
})

// HTML图标内容
const htmlIcon = computed(() => {
  if (props.library === 'html' && props.html) {
    return props.html
  }
  return ''
})

// Feather图标的HTML内容
const featherIconHtml = ref('')

watchEffect(async () => {
  if (props.library === 'feather' && props.name) {
    try {
      const sizeValue = getSizeValue(props.size)
      const { getFeatherSvg } = (await loadIconPackage('feather')) || {}
      featherIconHtml.value = await getFeatherSvg(props.name, {
        width: sizeValue,
        height: sizeValue,
        strokeWidth: Number(props.strokeWidth),
      })
    } catch (error) {
      console.warn(`Feather icon "${props.name}" not found`)
      featherIconHtml.value = ''
    }
  } else {
    featherIconHtml.value = ''
  }
})

// 图标CSS类
const iconClasses = computed(() => {
  const classes = ['wc-icon']
  
  if (props.className) {
    classes.push(props.className)
  }
  
  return classes
})

// 将语义化尺寸转换为像素值
const getSizeValue = (size) => {
  if (typeof size === 'number') return size
  
  const sizeMap = {
    'xs': 16,
    'sm': 20,
    'md': 24,
    'lg': 32,
    'xl': 48
  }
  
  return sizeMap[size] || parseInt(size) || 24
}

// 图标样式
const iconStyles = computed(() => {
  const styles = {}
  
  if (props.color && props.color !== 'currentColor') {
    styles.color = props.color
  }
  
  if (props.size) {
    const sizeValue = getSizeValue(props.size)
    styles.width = `${sizeValue}px`
    styles.height = `${sizeValue}px`
  }
  
  return styles
})

// 传递给图标组件的属性
const iconProps = computed(() => {
  const sizeValue = getSizeValue(props.size)
  
  const iconProps = {
    size: sizeValue,
    color: props.color
  }
  
  // Lucide特有属性
  if (props.library === 'lucide') {
    iconProps.strokeWidth = props.strokeWidth
  }
  
  // Tabler特有属性
  if (props.library === 'tabler') {
    iconProps.stroke = props.strokeWidth
  }
  
  return iconProps
})
</script>
