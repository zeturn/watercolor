import Fab from '../src/components/Button/Fab.vue'

export default {
  title: 'Components/Fab (Vue)',
  component: Fab,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的浮动操作按钮组件，完全兼容Material-UI的Fab API。支持圆形和扩展变体，多种尺寸和颜色。'
      }
    }
  },
  argTypes: {
    variant: {
      description: '变体类型',
      control: { type: 'select' },
      options: ['circular', 'extended']
    },
    size: {
      description: '尺寸',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    color: {
      description: '颜色主题',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'inherit']
    },
    disabled: {
      description: '是否禁用',
      control: { type: 'boolean' }
    },
    label: {
      description: '标签文本（仅扩展变体）',
      control: { type: 'text' }
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
    icon: '+'
  }
}

export const Variants = {
  render: () => ({
    components: { Fab },
    template: `
      <div style="display: flex; gap: 20px; align-items: center;">
        <div style="text-align: center;">
          <Fab icon="+" />
          <div style="margin-top: 8px; font-size: 12px; color: #6b7280;">
            圆形（默认）
          </div>
        </div>
        
        <div style="text-align: center;">
          <Fab variant="extended" label="创建" icon="+" />
          <div style="margin-top: 8px; font-size: 12px; color: #6b7280;">
            扩展型
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示Fab的两种变体：圆形（默认）和扩展型。'
      }
    }
  }
}

export const Sizes = {
  render: () => ({
    components: { Fab },
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <div style="text-align: center;">
          <Fab size="sm" icon="+" />
          <div style="margin-top: 8px; font-size: 12px; color: #6b7280;">
            小尺寸
          </div>
        </div>
        
        <div style="text-align: center;">
          <Fab size="md" icon="+" />
          <div style="margin-top: 8px; font-size: 12px; color: #6b7280;">
            中等尺寸
          </div>
        </div>
        
        <div style="text-align: center;">
          <Fab size="lg" icon="+" />
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
        story: '展示Fab的三种尺寸。'
      }
    }
  }
}

export const Colors = {
  render: () => ({
    components: { Fab },
    template: `
      <div style="display: flex; gap: 20px; align-items: center;">
        <div style="text-align: center;">
          <Fab color="primary" icon="♥" />
          <div style="margin-top: 8px; font-size: 12px; color: #6b7280;">
            Primary
          </div>
        </div>
        
        <div style="text-align: center;">
          <Fab color="secondary" icon="★" />
          <div style="margin-top: 8px; font-size: 12px; color: #6b7280;">
            Secondary
          </div>
        </div>
        
        <div style="text-align: center;">
          <Fab color="inherit" icon="✎" />
          <div style="margin-top: 8px; font-size: 12px; color: #6b7280;">
            Inherit
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示Fab的各种颜色主题。'
      }
    }
  }
}

export const ExtendedSizes = {
  render: () => ({
    components: { Fab },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
        <Fab 
          variant="extended" 
          size="sm" 
          label="小尺寸" 
          icon="📁" 
        />
        <Fab 
          variant="extended" 
          size="md" 
          label="中等尺寸" 
          icon="📁" 
        />
        <Fab 
          variant="extended" 
          size="lg" 
          label="大尺寸" 
          icon="📁" 
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示扩展型Fab的各种尺寸。'
      }
    }
  }
}

export const WithIcons = {
  render: () => ({
    components: { Fab },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Fab icon="+" title="添加" />
        <Fab icon="✎" title="编辑" />
        <Fab icon="♥" title="喜欢" />
        <Fab icon="★" title="收藏" />
        <Fab icon="↑" title="向上" />
        <Fab icon="⚙" title="设置" />
        <Fab icon="🏠" title="首页" />
        <Fab icon="💬" title="消息" />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示各种图标的浮动操作按钮。'
      }
    }
  }
}

export const States = {
  render: () => ({
    components: { Fab },
    template: `
      <div style="display: flex; gap: 20px; align-items: center;">
        <div style="text-align: center;">
          <Fab icon="+" />
          <div style="margin-top: 8px; font-size: 12px; color: #6b7280;">
            正常状态
          </div>
        </div>
        
        <div style="text-align: center;">
          <Fab icon="+" disabled />
          <div style="margin-top: 8px; font-size: 12px; color: #6b7280;">
            禁用状态
          </div>
        </div>
        
        <div style="text-align: center;">
          <Fab variant="extended" label="禁用" icon="+" disabled />
          <div style="margin-top: 8px; font-size: 12px; color: #6b7280;">
            扩展型禁用
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示Fab的各种状态。'
      }
    }
  }
}

export const Positioning = {
  render: () => ({
    components: { Fab },
    template: `
      <div style="position: relative; height: 300px; background: #f9fafb; border-radius: 8px; overflow: hidden;">
        <div style="padding: 20px;">
          <h3 style="margin: 0 0 16px 0;">Fab定位示例</h3>
          <p style="margin: 0; color: #6b7280;">
            浮动操作按钮通常固定在屏幕右下角，用于执行主要操作。
          </p>
        </div>
        
        <!-- Bottom Right -->
        <Fab 
          icon="+" 
          style="position: absolute; bottom: 16px; right: 16px;"
        />
        
        <!-- Bottom Left -->
        <Fab 
          icon="💬" 
          color="secondary"
          style="position: absolute; bottom: 16px; left: 16px;"
          size="sm"
        />
        
        <!-- Top Right -->
        <Fab 
          variant="extended"
          label="创建"
          icon="+"
          style="position: absolute; top: 16px; right: 16px;"
          size="sm"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示Fab的典型定位场景。'
      }
    }
  }
} 