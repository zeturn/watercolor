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
import { computed, defineAsyncComponent, ref, watchEffect } from 'vue'

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
        return defineAsyncComponent(() => 
          import('lucide-vue-next').then(module => {
            const iconName = props.name.charAt(0).toUpperCase() + props.name.slice(1)
            return module[iconName] || module.HelpCircle
          })
        )
      
      case 'heroicons':
        // Heroicons 需要特殊处理，暂时禁用
        console.warn('Heroicons support is currently disabled due to build constraints')
        return null
      
      case 'tabler':
        return defineAsyncComponent(() =>
          import('@tabler/icons-vue').then(module => {
            const iconName = 'Icon' + props.name.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join('')
            return module[iconName] || module.IconHelp
          })
        )
      
      case 'phosphor':
        return defineAsyncComponent(() =>
          import('@phosphor-icons/vue').then(module => {
            const iconName = 'Ph' + props.name.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join('')
            return module[iconName] || module.PhQuestion
          })
        )
      
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

<style scoped>
.wc-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  user-select: none;
  vertical-align: middle;
}

.wc-icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
</style> 