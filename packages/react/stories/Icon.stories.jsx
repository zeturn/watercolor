import React from 'react'
import { IconReact } from '../src/index.ts'

export default {
  title: 'Components/Icon (React)',
  component: IconReact,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'React版本的图标组件，支持多个开源图标库，包括 Lucide、Heroicons、Tabler、Phosphor 和 Feather。'
      }
    }
  },
  argTypes: {
    library: {
      control: { type: 'select' },
      options: ['lucide', 'heroicons', 'tabler', 'phosphor', 'feather', 'html'],
      description: '图标库类型'
    },
    name: {
      control: { type: 'text' },
      description: '图标名称'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 16, 20, 24, 32, 48],
      description: '图标尺寸'
    },
    color: {
      control: { type: 'color' },
      description: '图标颜色'
    },
    strokeWidth: {
      control: { type: 'range', min: 1, max: 4, step: 0.5 },
      description: '描边宽度（适用于支持的图标库）'
    },
    variant: {
      control: { type: 'select' },
      options: ['outline', 'solid', 'mini'],
      description: '图标变体（适用于 Heroicons）'
    },
    className: {
      control: { type: 'text' },
      description: '自定义CSS类名'
    }
  }
}

export const Default = {
  args: {
    library: 'lucide',
    name: 'Heart',
    size: 'md',
    color: 'currentColor',
    strokeWidth: 2
  }
}

export const Sizes = () => (
  <div className="size-showcase">
    <div className="size-item">
      <IconReact library="lucide" name="Heart" size="xs" />
      <span className="size-label">xs (16px)</span>
    </div>
    <div className="size-item">
      <IconReact library="lucide" name="Heart" size="sm" />
      <span className="size-label">sm (20px)</span>
    </div>
    <div className="size-item">
      <IconReact library="lucide" name="Heart" size="md" />
      <span className="size-label">md (24px)</span>
    </div>
    <div className="size-item">
      <IconReact library="lucide" name="Heart" size="lg" />
      <span className="size-label">lg (32px)</span>
    </div>
    <div className="size-item">
      <IconReact library="lucide" name="Heart" size="xl" />
      <span className="size-label">xl (48px)</span>
    </div>
  </div>
)

Sizes.parameters = {
  docs: {
    description: {
      story: '不同尺寸的图标展示，支持预设尺寸和数字尺寸。'
    }
  }
}

export const Colors = () => (
  <div className="color-showcase">
    <div className="color-item">
      <IconReact library="lucide" name="Heart" size="lg" color="#3b82f6" />
      <span className="color-label">Primary</span>
    </div>
    <div className="color-item">
      <IconReact library="lucide" name="Heart" size="lg" color="#10b981" />
      <span className="color-label">Success</span>
    </div>
    <div className="color-item">
      <IconReact library="lucide" name="Heart" size="lg" color="#f59e0b" />
      <span className="color-label">Warning</span>
    </div>
    <div className="color-item">
      <IconReact library="lucide" name="Heart" size="lg" color="#ef4444" />
      <span className="color-label">Error</span>
    </div>
    <div className="color-item">
      <IconReact library="lucide" name="Heart" size="lg" color="#8b5cf6" />
      <span className="color-label">Purple</span>
    </div>
    <div className="color-item">
      <IconReact library="lucide" name="Heart" size="lg" color="#06b6d4" />
      <span className="color-label">Cyan</span>
    </div>
  </div>
)

Colors.parameters = {
  docs: {
    description: {
      story: '不同颜色的图标展示，支持主题色和自定义颜色。'
    }
  }
}

export const LucideIcons = () => {
  const iconCategories = {
    '基础图标': [
      'Heart', 'Star', 'User', 'Home', 'Search', 'Menu', 'X', 'Check', 'Plus', 'Minus',
      'Circle', 'Square', 'Triangle', 'Diamond', 'Hexagon', 'Octagon'
    ],
    '箭头&导航': [
      'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ChevronUp', 'ChevronDown',
      'ChevronLeft', 'ChevronRight', 'ArrowUpCircle', 'ArrowDownCircle', 'Move', 'Navigation'
    ],
    '状态&反馈': [
      'Info', 'AlertTriangle', 'AlertCircle', 'CheckCircle', 'CircleQuestionMark', 'XCircle',
      'AlertOctagon', 'Shield', 'ShieldCheck', 'ShieldAlert', 'Eye', 'EyeOff'
    ],
    '操作&工具': [
      'Edit', 'Trash2', 'Copy', 'Download', 'Upload', 'Share', 'Save', 'Printer',
      'Scissors', 'Paperclip', 'Link', 'ExternalLink', 'RotateCw', 'RefreshCw'
    ],
    '媒体&通信': [
      'Play', 'Pause', 'Square', 'Volume2', 'VolumeX', 'Mail', 'Phone', 'MessageCircle',
      'Video', 'Camera', 'Mic', 'MicOff', 'Headphones', 'Speaker'
    ],
    '文件&文档': [
      'File', 'Folder', 'Image', 'FileText', 'Book', 'Bookmark', 'Archive', 'Database',
      'HardDrive', 'Cloud', 'FilePlus', 'FolderPlus'
    ]
  }

  return (
    <div>
      {Object.entries(iconCategories).map(([category, icons]) => (
        <div key={category} className="library-showcase">
          <h3 className="library-title">{category}</h3>
          <div className="icon-showcase">
            {icons.map(iconName => (
              <div key={iconName} className="icon-card">
                <IconReact library="lucide" name={iconName} size="lg" />
                <span className="icon-name">{iconName}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

LucideIcons.parameters = {
  docs: {
    description: {
      story: 'Lucide Icons 图标库的常用图标展示。Lucide 是一个现代的、轻量级的图标库。'
    }
  }
}

export const TablerIcons = () => {
  const tablerCategories = {
    '基础图标': [
      'heart', 'star', 'user', 'home', 'search', 'menu-2', 'x', 'check', 'plus', 'minus',
      'circle', 'square', 'triangle', 'diamond', 'hexagon', 'octagon'
    ],
    '箭头&导航': [
      'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ChevronUp', 'ChevronDown',
      'ChevronsUp', 'ChevronsDown', 'ArrowNarrowUp', 'ArrowNarrowDown', 'Navigation', 'Compass'
    ],
    '商业&购物': [
      'shopping-cart', 'shopping-bag', 'credit-card', 'coin', 'currency-dollar', 'receipt',
      'building-store', 'gift', 'tag', 'tags', 'discount', 'percentage'
    ],
    '社交&通信': [
      'mail', 'phone', 'message', 'brand-twitter', 'brand-facebook', 'brand-instagram',
      'brand-linkedin', 'brand-github', 'share', 'send', 'at', 'hash'
    ]
  }

  return (
    <div>
      <div className="library-showcase">
        <h2 className="library-title">🎨 Tabler Icons</h2>
        <p className="library-description">
          Tabler Icons 是一个拥有超过4000个免费SVG图标的开源图标库，专为Web界面设计。
        </p>
      </div>
      {Object.entries(tablerCategories).map(([category, icons]) => (
        <div key={category} className="library-showcase">
          <h3 className="library-title">{category}</h3>
          <div className="icon-showcase">
            {icons.map(iconName => (
              <div key={iconName} className="icon-card">
                <IconReact library="tabler" name={iconName} size="lg" />
                <span className="icon-name">{iconName}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

TablerIcons.parameters = {
  docs: {
    description: {
      story: 'Tabler Icons 图标库展示。拥有超过4000个高质量的免费图标，适合现代Web应用。'
    }
  }
}

export const PhosphorIcons = () => {
  const phosphorCategories = {
    '系统&界面': [
      'house', 'user', 'gear', 'bell', 'magnifying-glass', 'list', 'x', 'check', 'plus', 'minus',
      'eye', 'eye-slash', 'lock', 'lock-open', 'shield', 'warning'
    ],
    '媒体&文件': [
      'play', 'pause', 'stop', 'music-note', 'image', 'file', 'folder', 'camera', 'video-camera',
      'microphone', 'speaker-high', 'download', 'upload', 'cloud', 'hard-drive', 'floppy-disk'
    ],
    '商务&金融': [
      'money', 'credit-card', 'bank', 'chart-line', 'chart-bar', 'trend-up', 'trend-down',
      'calculator', 'receipt', 'handshake', 'briefcase', 'building'
    ]
  }

  return (
    <div>
      <div className="library-showcase">
        <h2 className="library-title">⚡ Phosphor Icons</h2>
        <p className="library-description">
          Phosphor 是一个灵活的图标系列，拥有6种重量变化，超过6000个图标，专为系统和界面设计。
        </p>
      </div>
      {Object.entries(phosphorCategories).map(([category, icons]) => (
        <div key={category} className="library-showcase">
          <h3 className="library-title">{category}</h3>
          <div className="icon-showcase">
            {icons.map(iconName => (
              <div key={iconName} className="icon-card">
                <IconReact library="phosphor" name={iconName} size="lg" />
                <span className="icon-name">{iconName}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

PhosphorIcons.parameters = {
  docs: {
    description: {
      story: 'Phosphor Icons 图标库展示。提供多种重量的图标变体，适合不同的设计需求。'
    }
  }
}

export const FeatherIcons = () => {
  const featherIcons = [
    'heart', 'star', 'user', 'home', 'search', 'menu', 'x', 'check', 'plus', 'minus',
    'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'chevron-up', 'chevron-down',
    'info', 'alert-triangle', 'alert-circle', 'check-circle', 'help-circle', 'x-circle',
    'edit', 'trash-2', 'copy', 'download', 'upload', 'share', 'save', 'printer',
    'play', 'pause', 'square', 'volume-2', 'volume-x', 'mail', 'phone', 'message-circle',
    'file', 'folder', 'image', 'camera', 'video', 'music', 'headphones', 'mic'
  ]

  return (
    <div>
      <div className="library-showcase">
        <h2 className="library-title">🪶 Feather Icons</h2>
        <p className="library-description">
          Feather 是一个简洁、美观的开源图标库，包含280+个精心设计的24x24像素图标。
        </p>
        <div className="icon-showcase">
          {featherIcons.map(iconName => (
            <div key={iconName} className="icon-card">
              <IconReact library="feather" name={iconName} size="lg" />
              <span className="icon-name">{iconName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

FeatherIcons.parameters = {
  docs: {
    description: {
      story: 'Feather Icons 图标库展示。简洁优雅的线性图标，适合极简设计风格。'
    }
  }
}

export const CustomHTML = () => {
  const customSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="m2 17 10 5 10-5"/>
    <path d="m2 12 10 5 10-5"/>
  </svg>`
  
  const logoSVG = `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>`

  return (
    <div>
      <div className="library-showcase">
        <h2 className="library-title">🎨 自定义图标</h2>
        <p className="library-description">
          支持自定义 HTML、SVG 或 Emoji 作为图标，满足特殊设计需求。
        </p>
        <div className="icon-showcase">
          <div className="icon-card">
            <IconReact library="html" html={customSVG} size="xl" color="#3b82f6" />
            <span className="icon-name">自定义 SVG</span>
          </div>
          <div className="icon-card">
            <IconReact library="html" html={logoSVG} size="xl" color="#10b981" />
            <span className="icon-name">品牌 Logo</span>
          </div>
          <div className="icon-card">
            <IconReact library="html" html="⭐" size="xl" />
            <span className="icon-name">星星 Emoji</span>
          </div>
          <div className="icon-card">
            <IconReact library="html" html="🎨" size="xl" />
            <span className="icon-name">艺术 Emoji</span>
          </div>
          <div className="icon-card">
            <IconReact library="html" html="🚀" size="xl" />
            <span className="icon-name">火箭 Emoji</span>
          </div>
          <div className="icon-card">
            <IconReact library="html" html="💎" size="xl" />
            <span className="icon-name">钻石 Emoji</span>
          </div>
          <div className="icon-card">
            <IconReact library="html" html="🎯" size="xl" />
            <span className="icon-name">目标 Emoji</span>
          </div>
          <div className="icon-card">
            <IconReact library="html" html="🔥" size="xl" />
            <span className="icon-name">火焰 Emoji</span>
          </div>
        </div>
      </div>
    </div>
  )
}

CustomHTML.parameters = {
  docs: {
    description: {
      story: '使用自定义 HTML、SVG 或 Emoji 作为图标。适用于特殊需求或自定义图标。'
    }
  }
}

export const WithAnimations = () => (
  <div>
    <div className="library-showcase">
      <h2 className="library-title">✨ 动画效果展示</h2>
      <p className="library-description">
        通过添加 CSS 类来为图标添加各种动画效果，让界面更加生动有趣。
      </p>
      <div className="animation-showcase">
        <div className="animation-item">
          <IconReact library="lucide" name="Loader" size="xl" className="wc-icon--spinning" color="#3b82f6" />
          <span className="animation-label">旋转动画</span>
        </div>
        <div className="animation-item">
          <IconReact library="lucide" name="Heart" size="xl" className="wc-icon--pulse" color="#ef4444" />
          <span className="animation-label">脉冲效果</span>
        </div>
        <div className="animation-item">
          <IconReact library="lucide" name="Star" size="xl" className="wc-icon--bounce" color="#f59e0b" />
          <span className="animation-label">弹跳动画</span>
        </div>
        <div className="animation-item">
          <IconReact library="lucide" name="Bell" size="xl" className="wc-icon--wiggle" color="#8b5cf6" />
          <span className="animation-label">摇摆动画</span>
        </div>
        <div className="animation-item">
          <IconReact library="lucide" name="Cloud" size="xl" className="wc-icon--float" color="#06b6d4" />
          <span className="animation-label">悬浮效果</span>
        </div>
        <div className="animation-item">
          <IconReact library="lucide" name="Sparkles" size="xl" className="wc-icon--gradient" />
          <span className="animation-label">渐变动画</span>
        </div>
      </div>
    </div>
  </div>
)

WithAnimations.parameters = {
  docs: {
    description: {
      story: '图标的动画效果，包括旋转、脉冲和点击效果。通过 className 属性添加预设的 CSS 类。'
    }
  }
}

export const InButtons = () => (
  <div>
    <div className="library-showcase">
      <h2 className="library-title">🔘 按钮中的图标应用</h2>
      <p className="library-description">
        图标与按钮的完美结合，提升用户界面的可用性和美观度。
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '24px' }}>
        {/* 主要操作按钮 */}
        <div>
          <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '12px' }}>主要操作</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 20px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s' }}>
              <IconReact library="lucide" name="Download" size="sm" />
              下载文件
            </button>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 20px', background: '#10b981', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s' }}>
              <IconReact library="lucide" name="Check" size="sm" />
              确认提交
            </button>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 20px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s' }}>
              <IconReact library="lucide" name="Trash2" size="sm" />
              删除项目
            </button>
          </div>
        </div>

        {/* 次要操作按钮 */}
        <div>
          <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '12px' }}>次要操作</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 20px', background: 'white', color: '#374151', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s' }}>
              <IconReact library="lucide" name="Share" size="sm" />
              分享链接
            </button>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 20px', background: 'white', color: '#374151', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s' }}>
              <IconReact library="lucide" name="Copy" size="sm" />
              复制内容
            </button>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 20px', background: 'white', color: '#374151', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s' }}>
              <IconReact library="lucide" name="Edit" size="sm" />
              编辑信息
            </button>
          </div>
        </div>

        {/* 图标按钮 */}
        <div>
          <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '12px' }}>图标按钮</h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: '#f3f4f6', color: '#374151', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s' }}>
              <IconReact library="lucide" name="Heart" size="sm" />
            </button>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: '#f3f4f6', color: '#374151', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s' }}>
              <IconReact library="lucide" name="Bookmark" size="sm" />
            </button>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: '#f3f4f6', color: '#374151', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s' }}>
              <IconReact library="lucide" name="MoreHorizontal" size="sm" />
            </button>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: '#f3f4f6', color: '#374151', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s' }}>
              <IconReact library="lucide" name="Settings" size="sm" />
            </button>
          </div>
        </div>

        {/* 加载状态按钮 */}
        <div>
          <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '12px' }}>加载状态</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 20px', background: '#6b7280', color: 'white', border: 'none', borderRadius: '8px', cursor: 'not-allowed', fontWeight: '500' }} disabled>
              <IconReact library="lucide" name="Loader" size="sm" className="wc-icon--spinning" />
              处理中...
            </button>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 20px', background: '#10b981', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' }}>
              <IconReact library="lucide" name="CheckCircle" size="sm" />
              已完成
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

InButtons.parameters = {
  docs: {
    description: {
      story: '图标在按钮中的应用示例，包括主要操作、次要操作、图标按钮和加载状态等多种场景。'
    }
  }
} 