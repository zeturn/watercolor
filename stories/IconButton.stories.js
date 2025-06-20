import IconButton from '../src/components/Button/IconButton.vue'

export default {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的图标按钮组件，完全兼容Material-UI的IconButton API。支持多种颜色、尺寸和边缘定位。'
      }
    }
  },
  argTypes: {
    color: {
      description: '颜色主题',
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success']
    },
    size: {
      description: '尺寸',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    edge: {
      description: '边缘定位',
      control: { type: 'select' },
      options: [false, 'start', 'end']
    },
    disabled: {
      description: '是否禁用',
      control: { type: 'boolean' }
    },
    icon: {
      description: '图标HTML内容',
      control: { type: 'text' }
    }
  },
  tags: ['autodocs']
}

export const Default = {
  args: {
    icon: '★'
  }
}

export const Colors = {
  render: () => ({
    components: { IconButton },
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <div style="text-align: center;">
          <IconButton color="default" icon="⚙" />
          <div style="margin-top: 4px; font-size: 12px; color: #6b7280;">
            Default
          </div>
        </div>
        
        <div style="text-align: center;">
          <IconButton color="primary" icon="♥" />
          <div style="margin-top: 4px; font-size: 12px; color: #6b7280;">
            Primary
          </div>
        </div>
        
        <div style="text-align: center;">
          <IconButton color="secondary" icon="★" />
          <div style="margin-top: 4px; font-size: 12px; color: #6b7280;">
            Secondary
          </div>
        </div>
        
        <div style="text-align: center;">
          <IconButton color="error" icon="✖" />
          <div style="margin-top: 4px; font-size: 12px; color: #6b7280;">
            Error
          </div>
        </div>
        
        <div style="text-align: center;">
          <IconButton color="warning" icon="⚠" />
          <div style="margin-top: 4px; font-size: 12px; color: #6b7280;">
            Warning
          </div>
        </div>
        
        <div style="text-align: center;">
          <IconButton color="info" icon="ⓘ" />
          <div style="margin-top: 4px; font-size: 12px; color: #6b7280;">
            Info
          </div>
        </div>
        
        <div style="text-align: center;">
          <IconButton color="success" icon="✓" />
          <div style="margin-top: 4px; font-size: 12px; color: #6b7280;">
            Success
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示IconButton的各种颜色主题。'
      }
    }
  }
}

export const Sizes = {
  render: () => ({
    components: { IconButton },
    template: `
      <div style="display: flex; gap: 20px; align-items: center;">
        <div style="text-align: center;">
          <IconButton size="sm" icon="★" />
          <div style="margin-top: 8px; font-size: 12px; color: #6b7280;">
            小尺寸
          </div>
        </div>
        
        <div style="text-align: center;">
          <IconButton size="md" icon="★" />
          <div style="margin-top: 8px; font-size: 12px; color: #6b7280;">
            中等尺寸
          </div>
        </div>
        
        <div style="text-align: center;">
          <IconButton size="lg" icon="★" />
          <div style="margin-top: 8px; font-size: 12px; color: #6b7280;">
            大尺寸
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示IconButton的三种尺寸。'
      }
    }
  }
}

export const EdgePositioning = {
  render: () => ({
    components: { IconButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="display: flex; align-items: center; padding: 16px; background: #f9fafb; border-radius: 8px;">
          <IconButton edge="start" icon="☰" />
          <span style="margin: 0 16px; flex: 1;">开始边缘定位</span>
          <IconButton edge="end" icon="⋮" />
        </div>
        
        <div style="display: flex; align-items: center; padding: 16px; background: #f9fafb; border-radius: 8px;">
          <IconButton icon="☰" />
          <span style="margin: 0 16px; flex: 1;">普通定位</span>
          <IconButton icon="⋮" />
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示edge属性的效果，用于在容器边缘对齐图标按钮。'
      }
    }
  }
}

export const States = {
  render: () => ({
    components: { IconButton },
    template: `
      <div style="display: flex; gap: 20px; align-items: center;">
        <div style="text-align: center;">
          <IconButton icon="♥" />
          <div style="margin-top: 8px; font-size: 12px; color: #6b7280;">
            正常状态
          </div>
        </div>
        
        <div style="text-align: center;">
          <IconButton icon="♥" disabled />
          <div style="margin-top: 8px; font-size: 12px; color: #6b7280;">
            禁用状态
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示IconButton的各种状态。'
      }
    }
  }
}

export const CommonIcons = {
  render: () => ({
    components: { IconButton },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); gap: 16px; max-width: 600px;">
        <div style="text-align: center;">
          <IconButton icon="⚙" title="设置" />
          <div style="margin-top: 4px; font-size: 10px; color: #6b7280;">设置</div>
        </div>
        
        <div style="text-align: center;">
          <IconButton icon="🏠" title="首页" />
          <div style="margin-top: 4px; font-size: 10px; color: #6b7280;">首页</div>
        </div>
        
        <div style="text-align: center;">
          <IconButton icon="💬" title="消息" />
          <div style="margin-top: 4px; font-size: 10px; color: #6b7280;">消息</div>
        </div>
        
        <div style="text-align: center;">
          <IconButton icon="👤" title="用户" />
          <div style="margin-top: 4px; font-size: 10px; color: #6b7280;">用户</div>
        </div>
        
        <div style="text-align: center;">
          <IconButton icon="🔍" title="搜索" />
          <div style="margin-top: 4px; font-size: 10px; color: #6b7280;">搜索</div>
        </div>
        
        <div style="text-align: center;">
          <IconButton icon="✎" title="编辑" />
          <div style="margin-top: 4px; font-size: 10px; color: #6b7280;">编辑</div>
        </div>
        
        <div style="text-align: center;">
          <IconButton icon="🗑" title="删除" color="error" />
          <div style="margin-top: 4px; font-size: 10px; color: #6b7280;">删除</div>
        </div>
        
        <div style="text-align: center;">
          <IconButton icon="+" title="添加" color="primary" />
          <div style="margin-top: 4px; font-size: 10px; color: #6b7280;">添加</div>
        </div>
        
        <div style="text-align: center;">
          <IconButton icon="♥" title="喜欢" />
          <div style="margin-top: 4px; font-size: 10px; color: #6b7280;">喜欢</div>
        </div>
        
        <div style="text-align: center;">
          <IconButton icon="★" title="收藏" color="warning" />
          <div style="margin-top: 4px; font-size: 10px; color: #6b7280;">收藏</div>
        </div>
        
        <div style="text-align: center;">
          <IconButton icon="↻" title="刷新" />
          <div style="margin-top: 4px; font-size: 10px; color: #6b7280;">刷新</div>
        </div>
        
        <div style="text-align: center;">
          <IconButton icon="⚠" title="警告" color="warning" />
          <div style="margin-top: 4px; font-size: 10px; color: #6b7280;">警告</div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示常用图标的IconButton示例。'
      }
    }
  }
}

export const InAppBar = {
  render: () => ({
    components: { IconButton },
    template: `
      <div style="background: #3b82f6; color: white; padding: 8px 16px; border-radius: 8px; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
          <IconButton edge="start" icon="☰" style="color: white;" />
          <h3 style="margin: 0 0 0 8px; font-size: 18px;">应用标题</h3>
        </div>
        
        <div style="display: flex; align-items: center;">
          <IconButton icon="🔍" style="color: white;" />
          <IconButton icon="♥" style="color: white;" />
          <IconButton edge="end" icon="⋮" style="color: white;" />
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示IconButton在应用栏中的典型使用场景。'
      }
    }
  }
} 