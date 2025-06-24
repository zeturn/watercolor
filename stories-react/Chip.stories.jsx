import React, { useState } from 'react'
import Chip from '@/components/Chip/Chip.jsx'

export default {
  title: 'Components/Chip (React)',
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的标签芯片组件，用于显示标签、过滤器或其他简短信息。支持多种样式、尺寸和交互方式。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: '芯片显示的文本',
      control: { type: 'text' }
    },
    avatar: {
      description: '头像图片链接',
      control: { type: 'text' }
    },
    variant: {
      description: '芯片样式变体',
      control: { type: 'select' },
      options: ['filled', 'outlined']
    },
    size: {
      description: '芯片尺寸',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    color: {
      description: '芯片颜色主题',
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error']
    },
    clickable: {
      description: '是否可点击',
      control: { type: 'boolean' }
    },
    deletable: {
      description: '是否可删除',
      control: { type: 'boolean' }
    },
    disabled: {
      description: '是否禁用',
      control: { type: 'boolean' }
    },
    onClick: { 
      action: 'click',
      description: '点击时触发'
    },
    onDelete: { 
      action: 'delete',
      description: '删除时触发'
    },
  }
}

export const Primary = {
  args: {
    label: '标签芯片',
    variant: 'filled',
    size: 'md',
    color: 'primary'
  }
}

export const Variants = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">填充样式 (Filled)</h3>
        <div className="flex flex-wrap gap-2">
          <Chip label="默认" variant="filled" color="default" />
          <Chip label="主色调" variant="filled" color="primary" />
          <Chip label="次要" variant="filled" color="secondary" />
          <Chip label="成功" variant="filled" color="success" />
          <Chip label="警告" variant="filled" color="warning" />
          <Chip label="错误" variant="filled" color="error" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">轮廓样式 (Outlined)</h3>
        <div className="flex flex-wrap gap-2">
          <Chip label="默认" variant="outlined" color="default" />
          <Chip label="主色调" variant="outlined" color="primary" />
          <Chip label="次要" variant="outlined" color="secondary" />
          <Chip label="成功" variant="outlined" color="success" />
          <Chip label="警告" variant="outlined" color="warning" />
          <Chip label="错误" variant="outlined" color="error" />
        </div>
      </div>
    </div>
  )
}

export const Sizes = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">不同尺寸</h3>
        <div className="flex items-center flex-wrap gap-4">
          <div className="text-center">
            <Chip label="小尺寸" size="sm" color="primary" />
            <p className="text-xs mt-2">Small</p>
          </div>
          <div className="text-center">
            <Chip label="中等尺寸" size="md" color="primary" />
            <p className="text-xs mt-2">Medium</p>
          </div>
          <div className="text-center">
            <Chip label="大尺寸" size="lg" color="primary" />
            <p className="text-xs mt-2">Large</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">不同样式的尺寸对比</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-16 text-sm">Filled:</span>
            <Chip label="小" size="sm" variant="filled" color="primary" />
            <Chip label="中" size="md" variant="filled" color="primary" />
            <Chip label="大" size="lg" variant="filled" color="primary" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-16 text-sm">Outlined:</span>
            <Chip label="小" size="sm" variant="outlined" color="primary" />
            <Chip label="中" size="md" variant="outlined" color="primary" />
            <Chip label="大" size="lg" variant="outlined" color="primary" />
          </div>
        </div>
      </div>
    </div>
  )
}

export const WithAvatars = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">带头像的芯片</h3>
        <div className="flex flex-wrap gap-2">
          <Chip 
            label="John Doe" 
            avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
            color="primary" 
          />
          <Chip 
            label="Jane Smith" 
            avatar="https://images.unsplash.com/photo-1494790108755-2616b612b602?w=50&h=50&fit=crop&crop=face"
            color="success" 
          />
          <Chip 
            label="Bob Johnson" 
            avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
            color="warning" 
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">不同尺寸的头像芯片</h3>
        <div className="flex items-center gap-4">
          <Chip 
            label="小尺寸" 
            avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
            size="sm"
            color="primary" 
          />
          <Chip 
            label="中等尺寸" 
            avatar="https://images.unsplash.com/photo-1494790108755-2616b612b602?w=50&h=50&fit=crop&crop=face"
            size="md"
            color="primary" 
          />
          <Chip 
            label="大尺寸" 
            avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
            size="lg"
            color="primary" 
          />
        </div>
      </div>
    </div>
  )
}

export const Interactive = {
  render: () => {
    const [chips, setChips] = useState([
      { id: 1, label: 'React', color: 'primary' },
      { id: 2, label: 'Vue', color: 'success' },
      { id: 3, label: 'Angular', color: 'warning' },
      { id: 4, label: 'Svelte', color: 'error' },
    ])

    const handleClick = (id) => {
      console.log('点击了芯片:', id)
    }

    const handleDelete = (id) => {
      setChips(prev => prev.filter(chip => chip.id !== id))
    }

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">可点击的芯片</h3>
          <div className="flex flex-wrap gap-2">
            <Chip label="可点击" clickable onClick={() => handleClick('clickable')} color="primary" />
            <Chip label="不可点击" color="secondary" />
            <Chip label="禁用状态" disabled color="warning" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">可删除的芯片 (试试删除它们)</h3>
          <div className="flex flex-wrap gap-2">
            {chips.map(chip => (
              <Chip
                key={chip.id}
                label={chip.label}
                color={chip.color}
                deletable
                onDelete={() => handleDelete(chip.id)}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export const FilterTags = {
  render: () => {
    const [selectedTags, setSelectedTags] = useState(['React', 'JavaScript'])
    
    const allTags = ['React', 'Vue', 'Angular', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Go']
    
    const skillColor = (skill) => {
      const colors = {
        'React': 'primary',
        'Vue': 'success',
        'Angular': 'error',
        'JavaScript': 'warning',
        'TypeScript': 'primary',
        'Node.js': 'success',
        'Python': 'warning',
        'Go': 'primary'
      }
      return colors[skill] || 'default'
    }

    const toggleTag = (tag) => {
      setSelectedTags(prev => 
        prev.includes(tag) 
          ? prev.filter(t => t !== tag)
          : [...prev, tag]
      )
    }

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">技能标签筛选器</h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <Chip
              key={tag}
              label={tag}
              color={skillColor(tag)}
              variant={selectedTags.includes(tag) ? 'filled' : 'outlined'}
              clickable
              onClick={() => toggleTag(tag)}
            />
          ))}
        </div>
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">
            已选择: {selectedTags.length > 0 ? selectedTags.join(', ') : '无'}
          </p>
        </div>
      </div>
    )
  }
}
