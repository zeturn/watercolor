import React, { useMemo, lazy, Suspense } from 'react'
import PropTypes from 'prop-types'

// 动态导入图标组件的函数
const createIconComponent = (library, name, variant) => {
  switch (library) {
    case 'lucide':
      return lazy(() => 
        import('lucide-react').then(module => {
          const iconName = name.charAt(0).toUpperCase() + name.slice(1)
          return { default: module[iconName] || module.HelpCircle }
        })
      )
    
    case 'heroicons':
      // Heroicons 需要特殊处理，暂时禁用
      console.warn('Heroicons support is currently disabled due to build constraints')
      return null
    
    case 'tabler':
      return lazy(() =>
        import('@tabler/icons-react').then(module => {
          const iconName = 'Icon' + name.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join('')
          return { default: module[iconName] || module.IconHelp }
        })
      )
    
    case 'phosphor':
      return lazy(() =>
        import('@phosphor-icons/react').then(module => {
          const iconName = name.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join('')
          return { default: module[iconName] || module.Question }
        })
      )
    
    default:
      return null
  }
}

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

const Icon = ({
  library = 'lucide',
  name = '',
  html = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  variant = 'outline',
  className = '',
  children,
  ...props
}) => {
  // 动态图标组件
  const IconComponent = useMemo(() => {
    if (!name) return null
    
    try {
      return createIconComponent(library, name, variant)
    } catch (error) {
      console.warn(`Icon "${name}" not found in library "${library}"`)
      return null
    }
  }, [library, name, variant])

  // Feather图标组件
  const FeatherIconComponent = useMemo(() => {
    if (library === 'feather' && name) {
      return lazy(async () => {
        try {
          const feather = await import('feather-icons')
          const featherLib = feather.default || feather
          const sizeValue = getSizeValue(size)
          const iconSvg = featherLib.icons[name]?.toSvg({
            width: sizeValue,
            height: sizeValue,
            'stroke-width': strokeWidth
          }) || ''
          
          return { 
            default: ({ className, style }) => (
              <span 
                className={className} 
                style={style} 
                dangerouslySetInnerHTML={{ __html: iconSvg }} 
              />
            )
          }
        } catch (error) {
          console.warn(`Feather icon "${name}" not found`)
          return { default: () => <span /> }
        }
      })
    }
    return null
  }, [library, name, size, strokeWidth])

  // HTML图标内容
  const htmlIcon = useMemo(() => {
    if (library === 'html' && html) {
      return html
    }
    return ''
  }, [library, html])

  // 图标样式
  const iconStyles = useMemo(() => {
    const styles = {}
    
    if (color && color !== 'currentColor') {
      styles.color = color
    }
    
    if (size) {
      const sizeValue = getSizeValue(size)
      styles.width = `${sizeValue}px`
      styles.height = `${sizeValue}px`
    }
    
    return styles
  }, [color, size])

  // 图标属性
  const iconProps = useMemo(() => {
    const sizeValue = getSizeValue(size)
    
    const iconProps = {
      size: sizeValue,
      color,
      ...props
    }
    
    // Lucide特有属性
    if (library === 'lucide') {
      iconProps.strokeWidth = strokeWidth
    }
    
    // Tabler特有属性
    if (library === 'tabler') {
      iconProps.stroke = strokeWidth
    }
    
    return iconProps
  }, [library, size, color, strokeWidth, props])

  // CSS类名
  const iconClasses = `wc-icon ${className}`.trim()

  // 渲染Feather图标组件
  if (FeatherIconComponent) {
    return (
      <Suspense fallback={<span className={iconClasses} style={iconStyles} />}>
        <FeatherIconComponent
          className={iconClasses}
          style={iconStyles}
        />
      </Suspense>
    )
  }

  // 渲染动态图标组件
  if (IconComponent) {
    return (
      <Suspense fallback={<span className={iconClasses} style={iconStyles} />}>
        <IconComponent
          className={iconClasses}
          style={iconStyles}
          {...iconProps}
        />
      </Suspense>
    )
  }

  // 渲染HTML图标
  if (htmlIcon) {
    return (
      <span
        className={iconClasses}
        style={iconStyles}
        dangerouslySetInnerHTML={{ __html: htmlIcon }}
      />
    )
  }

  // 渲染子元素
  return (
    <span className={iconClasses} style={iconStyles}>
      {children}
    </span>
  )
}

Icon.propTypes = {
  library: PropTypes.oneOf(['lucide', 'heroicons', 'tabler', 'phosphor', 'feather', 'html']),
  name: PropTypes.string,
  html: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.oneOf(['outline', 'solid', 'mini']),
  className: PropTypes.string,
  children: PropTypes.node
}

export default Icon 