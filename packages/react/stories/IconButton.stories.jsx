import IconButton from '../src/components/Button/IconButton.jsx'

export default {
  title: 'Components/IconButton (React)',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的图标按钮组件，支持多种颜色、尺寸和边缘定位。'
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
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <IconButton color="default" icon="⚙" />
        <div style={{ marginTop: '4px', fontSize: '12px', color: '#6b7280' }}>
          Default
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <IconButton color="primary" icon="♥" />
        <div style={{ marginTop: '4px', fontSize: '12px', color: '#6b7280' }}>
          Primary
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <IconButton color="secondary" icon="★" />
        <div style={{ marginTop: '4px', fontSize: '12px', color: '#6b7280' }}>
          Secondary
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <IconButton color="error" icon="✖" />
        <div style={{ marginTop: '4px', fontSize: '12px', color: '#6b7280' }}>
          Error
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <IconButton color="warning" icon="⚠" />
        <div style={{ marginTop: '4px', fontSize: '12px', color: '#6b7280' }}>
          Warning
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <IconButton color="info" icon="ⓘ" />
        <div style={{ marginTop: '4px', fontSize: '12px', color: '#6b7280' }}>
          Info
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <IconButton color="success" icon="✓" />
        <div style={{ marginTop: '4px', fontSize: '12px', color: '#6b7280' }}>
          Success
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示IconButton的各种颜色主题。'
      }
    }
  }
}

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <IconButton size="sm" icon="★" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#6b7280' }}>
          小尺寸
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <IconButton size="md" icon="★" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#6b7280' }}>
          中等尺寸
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <IconButton size="lg" icon="★" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#6b7280' }}>
          大尺寸
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示IconButton的三种尺寸。'
      }
    }
  }
}

export const EdgePositioning = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '16px', background: '#f9fafb', borderRadius: '8px' }}>
        <IconButton edge="start" icon="☰" />
        <span style={{ margin: '0 16px', flex: 1 }}>开始边缘定位</span>
        <IconButton edge="end" icon="⋮" />
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', padding: '16px', background: '#f9fafb', borderRadius: '8px' }}>
        <IconButton icon="☰" />
        <span style={{ margin: '0 16px', flex: 1 }}>普通定位</span>
        <IconButton icon="⋮" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示edge属性的效果，用于在容器边缘对齐图标按钮。'
      }
    }
  }
}

export const States = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <IconButton icon="♥" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#6b7280' }}>
          正常状态
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <IconButton icon="♥" disabled />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#6b7280' }}>
          禁用状态
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示IconButton的各种状态。'
      }
    }
  }
}

export const WithIcons = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <IconButton icon="♥" title="喜欢" />
      <IconButton icon="★" title="收藏" />
      <IconButton icon="✎" title="编辑" />
      <IconButton icon="🗑" title="删除" />
      <IconButton icon="⚙" title="设置" />
      <IconButton icon="🔍" title="搜索" />
      <IconButton icon="📱" title="手机" />
      <IconButton icon="💬" title="消息" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示各种图标的图标按钮。'
      }
    }
  }
}

export const InToolbar = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', padding: '16px', background: '#f9fafb', borderRadius: '8px', gap: '8px' }}>
      <IconButton edge="start" icon="☰" />
      <span style={{ flex: 1, fontWeight: 500 }}>工具栏示例</span>
      <IconButton icon="🔍" />
      <IconButton icon="⚙" />
      <IconButton edge="end" icon="⋮" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示IconButton在工具栏中的典型用法。'
      }
    }
  }
} 
