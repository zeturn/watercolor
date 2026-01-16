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
            const module = await import('lucide-vue-next')
            const iconName = props.name.charAt(0).toUpperCase() + props.name.slice(1)
            return module[iconName] || module.HelpCircle || StubIcon
          } catch (error) {
            console.warn('[Icon] lucide-vue-next 加载失败，已使用占位符图标。', error)
            return StubIcon
          }
        })
      
      case 'heroicons':
        // Heroicons 需要特殊处理，暂时禁用
        console.warn('Heroicons support is currently disabled due to build constraints')
        return null
      
      case 'tabler':
        return defineAsyncComponent(async () => {
          try {
            const module = await import('@tabler/icons-vue')
            const iconName = 'Icon' + props.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
            return module[iconName] || module.IconHelp || StubIcon
          } catch (error) {
            console.warn('[Icon] @tabler/icons-vue 加载失败，已使用占位符图标。', error)
            return StubIcon
          }
        })
      
      case 'phosphor':
        return defineAsyncComponent(async () => {
          try {
            const module = await import('@phosphor-icons/vue')
            const iconName = 'Ph' + props.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
            return module[iconName] || module.PhQuestion || StubIcon
          } catch (error) {
            console.warn('[Icon] @phosphor-icons/vue 加载失败，已使用占位符图标。', error)
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
      const feather = await import('feather-icons')
      const featherLib = feather.default || feather
      const sizeValue = getSizeValue(props.size)
      featherIconHtml.value = featherLib.icons[props.name]?.toSvg({
        width: sizeValue,
        height: sizeValue,
        'stroke-width': props.strokeWidth
      }) || ''
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