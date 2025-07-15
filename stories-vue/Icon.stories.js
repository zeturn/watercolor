import { IconVue } from '../src/index.ts'
import { LUCIDE_ICONS, HEROICONS, ICON_PRESETS } from '../src/utils/icons.ts'

export default {
  title: 'Components/Icon (Vue)',
  component: IconVue,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '图标组件，支持多个开源图标库，包括 Lucide、Heroicons、Tabler、Phosphor 和 Feather。'
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
    name: 'heart',
    size: 'md',
    color: 'currentColor',
    strokeWidth: 2
  }
}

export const Sizes = {
  render: () => ({
    components: { IconVue },
    template: `
      <div class="size-showcase">
        <div class="size-item">
          <IconVue library="lucide" name="heart" size="xs" />
          <span class="size-label">xs (16px)</span>
        </div>
        <div class="size-item">
          <IconVue library="lucide" name="heart" size="sm" />
          <span class="size-label">sm (20px)</span>
        </div>
        <div class="size-item">
          <IconVue library="lucide" name="heart" size="md" />
          <span class="size-label">md (24px)</span>
        </div>
        <div class="size-item">
          <IconVue library="lucide" name="heart" size="lg" />
          <span class="size-label">lg (32px)</span>
        </div>
        <div class="size-item">
          <IconVue library="lucide" name="heart" size="xl" />
          <span class="size-label">xl (48px)</span>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '不同尺寸的图标展示，支持预设尺寸和数字尺寸。'
      }
    }
  }
}

export const Colors = {
  render: () => ({
    components: { IconVue },
    template: `
      <div class="color-showcase">
        <div class="color-item">
          <IconVue library="lucide" name="heart" size="lg" color="#3b82f6" />
          <span class="color-label">Primary</span>
        </div>
        <div class="color-item">
          <IconVue library="lucide" name="heart" size="lg" color="#10b981" />
          <span class="color-label">Success</span>
        </div>
        <div class="color-item">
          <IconVue library="lucide" name="heart" size="lg" color="#f59e0b" />
          <span class="color-label">Warning</span>
        </div>
        <div class="color-item">
          <IconVue library="lucide" name="heart" size="lg" color="#ef4444" />
          <span class="color-label">Error</span>
        </div>
        <div class="color-item">
          <IconVue library="lucide" name="heart" size="lg" color="#8b5cf6" />
          <span class="color-label">Purple</span>
        </div>
        <div class="color-item">
          <IconVue library="lucide" name="heart" size="lg" color="#06b6d4" />
          <span class="color-label">Cyan</span>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '不同颜色的图标展示，支持主题色和自定义颜色。'
      }
    }
  }
}

export const LucideIcons = {
  render: () => ({
    components: { IconVue },
    setup() {
      const iconCategories = {
        '基础图标': [
          'heart', 'star', 'user', 'home', 'search', 'menu', 'x', 'check', 'plus', 'minus',
          'circle', 'square', 'triangle', 'diamond', 'hexagon', 'octagon'
        ],
        '箭头&导航': [
          'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ChevronUp', 'ChevronDown',
          'ChevronLeft', 'ChevronRight', 'ArrowUpCircle', 'ArrowDownCircle', 'Move', 'Navigation'
        ],
        '状态&反馈': [
          'info', 'alert-triangle', 'alert-circle', 'check-circle', 'CircleQuestionMark', 'x-circle',
          'alert-octagon', 'shield', 'shield-check', 'shield-alert', 'eye', 'eye-off'
        ],
        '操作&工具': [
          'edit', 'trash-2', 'copy', 'download', 'upload', 'share', 'save', 'printer',
          'scissors', 'paperclip', 'link', 'external-link', 'rotate-cw', 'refresh-cw'
        ],
        '媒体&通信': [
          'play', 'pause', 'square', 'volume-2', 'volume-x', 'mail', 'phone', 'message-circle',
          'video', 'camera', 'mic', 'mic-off', 'headphones', 'speaker'
        ],
        '文件&文档': [
          'file', 'folder', 'image', 'file-text', 'book', 'bookmark', 'archive', 'database',
          'hard-drive', 'cloud', 'file-plus', 'folder-plus'
        ]
      }
      return { iconCategories }
    },
    template: `
      <div>
        <div v-for="(icons, category) in iconCategories" :key="category" class="library-showcase">
          <h3 class="library-title">{{ category }}</h3>
          <div class="icon-showcase">
            <div 
              v-for="iconName in icons" 
              :key="iconName"
              class="icon-card"
            >
              <IconVue library="lucide" :name="iconName" size="lg" />
              <span class="icon-name">{{ iconName }}</span>
            </div>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Lucide Icons 图标库的分类展示。Lucide 是一个现代的、轻量级的图标库，拥有超过1000个精美图标。'
      }
    }
  }
}

export const TablerIcons = {
  render: () => ({
    components: { IconVue },
    setup() {
      const tablerCategories = {
        '基础图标': [
          'heart', 'star', 'user', 'home', 'search', 'menu-2', 'x', 'check', 'plus', 'minus',
          'circle', 'square', 'triangle', 'diamond', 'hexagon', 'octagon'
        ],
        '箭头&导航': [
          'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'chevron-up', 'chevron-down',
          'chevrons-up', 'chevrons-down', 'arrow-narrow-up', 'arrow-narrow-down', 'navigation', 'compass'
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
      return { tablerCategories }
    },
    template: `
      <div>
        <div class="library-showcase">
          <h2 class="library-title">
            🎨 Tabler Icons
          </h2>
          <p class="library-description">
            Tabler Icons 是一个拥有超过4000个免费SVG图标的开源图标库，专为Web界面设计。
          </p>
        </div>
        <div v-for="(icons, category) in tablerCategories" :key="category" class="library-showcase">
          <h3 class="library-title">{{ category }}</h3>
          <div class="icon-showcase">
            <div 
              v-for="iconName in icons" 
              :key="iconName"
              class="icon-card"
            >
              <IconVue library="tabler" :name="iconName" size="lg" />
              <span class="icon-name">{{ iconName }}</span>
            </div>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Tabler Icons 图标库展示。拥有超过4000个高质量的免费图标，适合现代Web应用。'
      }
    }
  }
}

export const PhosphorIcons = {
  render: () => ({
    components: { IconVue },
    setup() {
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
      return { phosphorCategories }
    },
    template: `
      <div>
        <div class="library-showcase">
          <h2 class="library-title">
            ⚡ Phosphor Icons
          </h2>
          <p class="library-description">
            Phosphor 是一个灵活的图标系列，拥有6种重量变化，超过6000个图标，专为系统和界面设计。
          </p>
        </div>
        <div v-for="(icons, category) in phosphorCategories" :key="category" class="library-showcase">
          <h3 class="library-title">{{ category }}</h3>
          <div class="icon-showcase">
            <div 
              v-for="iconName in icons" 
              :key="iconName"
              class="icon-card"
            >
              <IconVue library="phosphor" :name="iconName" size="lg" />
              <span class="icon-name">{{ iconName }}</span>
            </div>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Phosphor Icons 图标库展示。提供多种重量的图标变体，适合不同的设计需求。'
      }
    }
  }
}

export const FeatherIcons = {
  render: () => ({
    components: { IconVue },
    setup() {
      const featherIcons = [
        'heart', 'star', 'user', 'home', 'search', 'menu', 'x', 'check', 'plus', 'minus',
        'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'chevron-up', 'chevron-down',
        'info', 'alert-triangle', 'alert-circle', 'check-circle', 'help-circle', 'x-circle',
        'edit', 'trash-2', 'copy', 'download', 'upload', 'share', 'save', 'printer',
        'play', 'pause', 'square', 'volume-2', 'volume-x', 'mail', 'phone', 'message-circle',
        'file', 'folder', 'image', 'camera', 'video', 'music', 'headphones', 'mic'
      ]
      return { featherIcons }
    },
    template: `
      <div>
        <div class="library-showcase">
          <h2 class="library-title">
            🪶 Feather Icons
          </h2>
          <p class="library-description">
            Feather 是一个简洁、美观的开源图标库，包含280+个精心设计的24x24像素图标。
          </p>
          <div class="icon-showcase">
            <div 
              v-for="iconName in featherIcons" 
              :key="iconName"
              class="icon-card"
            >
              <IconVue library="feather" :name="iconName" size="lg" />
              <span class="icon-name">{{ iconName }}</span>
            </div>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Feather Icons 图标库展示。简洁优雅的线性图标，适合极简设计风格。'
      }
    }
  }
}

export const CustomHTML = {
  render: () => ({
    components: { IconVue },
    setup() {
      const customSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="m2 17 10 5 10-5"/>
        <path d="m2 12 10 5 10-5"/>
      </svg>`
      
      const logoSVG = `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>`
      
      return { customSVG, logoSVG }
    },
    template: `
      <div>
        <div class="library-showcase">
          <h2 class="library-title">🎨 自定义图标</h2>
          <p class="library-description">
            支持自定义 HTML、SVG 或 Emoji 作为图标，满足特殊设计需求。
          </p>
          <div class="icon-showcase">
            <div class="icon-card">
              <IconVue library="html" :html="customSVG" size="xl" color="#3b82f6" />
              <span class="icon-name">自定义 SVG</span>
            </div>
            <div class="icon-card">
              <IconVue library="html" :html="logoSVG" size="xl" color="#10b981" />
              <span class="icon-name">品牌 Logo</span>
            </div>
            <div class="icon-card">
              <IconVue library="html" html="⭐" size="xl" />
              <span class="icon-name">星星 Emoji</span>
            </div>
            <div class="icon-card">
              <IconVue library="html" html="🎨" size="xl" />
              <span class="icon-name">艺术 Emoji</span>
            </div>
            <div class="icon-card">
              <IconVue library="html" html="🚀" size="xl" />
              <span class="icon-name">火箭 Emoji</span>
            </div>
            <div class="icon-card">
              <IconVue library="html" html="💎" size="xl" />
              <span class="icon-name">钻石 Emoji</span>
            </div>
            <div class="icon-card">
              <IconVue library="html" html="🎯" size="xl" />
              <span class="icon-name">目标 Emoji</span>
            </div>
            <div class="icon-card">
              <IconVue library="html" html="🔥" size="xl" />
              <span class="icon-name">火焰 Emoji</span>
            </div>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '使用自定义 HTML、SVG 或 Emoji 作为图标。适用于特殊需求或自定义图标设计。'
      }
    }
  }
}

export const WithAnimations = {
  render: () => ({
    components: { IconVue },
    template: `
      <div>
        <div class="library-showcase">
          <h2 class="library-title">✨ 动画效果展示</h2>
          <p class="library-description">
            通过添加 CSS 类来为图标添加各种动画效果，让界面更加生动有趣。
          </p>
          <div class="animation-showcase">
            <div class="animation-item">
              <IconVue library="lucide" name="loader" size="xl" className="wc-icon--spinning" color="#3b82f6" />
              <span class="animation-label">旋转动画</span>
            </div>
            <div class="animation-item">
              <IconVue library="lucide" name="heart" size="xl" className="wc-icon--pulse" color="#ef4444" />
              <span class="animation-label">脉冲效果</span>
            </div>
            <div class="animation-item">
              <IconVue library="lucide" name="star" size="xl" className="wc-icon--bounce" color="#f59e0b" />
              <span class="animation-label">弹跳动画</span>
            </div>
            <div class="animation-item">
              <IconVue library="lucide" name="bell" size="xl" className="wc-icon--wiggle" color="#8b5cf6" />
              <span class="animation-label">摇摆动画</span>
            </div>
            <div class="animation-item">
              <IconVue library="lucide" name="cloud" size="xl" className="wc-icon--float" color="#06b6d4" />
              <span class="animation-label">悬浮效果</span>
            </div>
            <div class="animation-item">
              <IconVue library="lucide" name="sparkles" size="xl" className="wc-icon--gradient" />
              <span class="animation-label">渐变动画</span>
            </div>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '图标的各种动画效果展示。包括旋转、脉冲、弹跳、摇摆、悬浮和渐变等动画效果。'
      }
    }
  }
}

export const InButtons = {
  render: () => ({
    components: { IconVue },
    template: `
      <div>
        <div class="library-showcase">
          <h2 class="library-title">🔘 按钮中的图标应用</h2>
          <p class="library-description">
            图标与按钮的完美结合，提升用户界面的可用性和美观度。
          </p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-bottom: 24px;">
            <!-- 主要操作按钮 -->
            <div>
              <h4 style="font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 12px;">主要操作</h4>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <button style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 20px; background: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500; transition: all 0.2s;">
                  <IconVue library="lucide" name="download" size="sm" />
                  下载文件
                </button>
                <button style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 20px; background: #10b981; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500; transition: all 0.2s;">
                  <IconVue library="lucide" name="check" size="sm" />
                  确认提交
                </button>
                <button style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 20px; background: #ef4444; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500; transition: all 0.2s;">
                  <IconVue library="lucide" name="trash-2" size="sm" />
                  删除项目
                </button>
              </div>
            </div>

            <!-- 次要操作按钮 -->
            <div>
              <h4 style="font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 12px;">次要操作</h4>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <button style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 20px; background: white; color: #374151; border: 1px solid #d1d5db; border-radius: 8px; cursor: pointer; font-weight: 500; transition: all 0.2s;">
                  <IconVue library="lucide" name="share" size="sm" />
                  分享链接
                </button>
                <button style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 20px; background: white; color: #374151; border: 1px solid #d1d5db; border-radius: 8px; cursor: pointer; font-weight: 500; transition: all 0.2s;">
                  <IconVue library="lucide" name="copy" size="sm" />
                  复制内容
                </button>
                <button style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 20px; background: white; color: #374151; border: 1px solid #d1d5db; border-radius: 8px; cursor: pointer; font-weight: 500; transition: all 0.2s;">
                  <IconVue library="lucide" name="edit" size="sm" />
                  编辑信息
                </button>
              </div>
            </div>

            <!-- 图标按钮 -->
            <div>
              <h4 style="font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 12px;">图标按钮</h4>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #f3f4f6; color: #374151; border: none; border-radius: 8px; cursor: pointer; transition: all 0.2s;">
                  <IconVue library="lucide" name="heart" size="sm" />
                </button>
                <button style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #f3f4f6; color: #374151; border: none; border-radius: 8px; cursor: pointer; transition: all 0.2s;">
                  <IconVue library="lucide" name="bookmark" size="sm" />
                </button>
                <button style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #f3f4f6; color: #374151; border: none; border-radius: 8px; cursor: pointer; transition: all 0.2s;">
                  <IconVue library="lucide" name="more-horizontal" size="sm" />
                </button>
                <button style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #f3f4f6; color: #374151; border: none; border-radius: 8px; cursor: pointer; transition: all 0.2s;">
                  <IconVue library="lucide" name="settings" size="sm" />
                </button>
              </div>
            </div>

            <!-- 加载状态按钮 -->
            <div>
              <h4 style="font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 12px;">加载状态</h4>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <button style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 20px; background: #6b7280; color: white; border: none; border-radius: 8px; cursor: not-allowed; font-weight: 500;" disabled>
                  <IconVue library="lucide" name="loader" size="sm" className="wc-icon--spinning" />
                  处理中...
                </button>
                <button style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 20px; background: #10b981; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500;">
                  <IconVue library="lucide" name="check-circle" size="sm" />
                  已完成
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '图标在按钮中的应用示例，包括主要操作、次要操作、图标按钮和加载状态等多种场景。'
      }
    }
  }
} 