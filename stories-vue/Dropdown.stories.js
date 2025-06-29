import DropdownVue from '../src/components/Dropdown/Dropdown.vue'

export default {
  title: 'Components/Dropdown',
  component: DropdownVue,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Dropdown 下拉菜单组件，支持多种样式和布局，包括新的卡片变种。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['bottom-start', 'bottom-end', 'top-start', 'top-end'],
      description: '下拉菜单位置'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'card'],
      description: '变种样式，card为新增的卡片变种'
    },
    trigger: {
      control: { type: 'select' },
      options: ['click', 'hover'],
      description: '触发方式'
    },
    triggerText: {
      control: { type: 'text' },
      description: '触发按钮文本'
    },
    illustration: {
      control: { type: 'text' },
      description: '卡片变种的示意图URL'
    },
    illustrationAlt: {
      control: { type: 'text' },
      description: '示意图的alt文本'
    },
    cardTitle: {
      control: { type: 'text' },
      description: '卡片变种的标题'
    },
    cardDescription: {
      control: { type: 'text' },
      description: '卡片变种的描述'
    },
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用'
    }
  }
}

const sampleItems = [
  { label: '选项 1', icon: '📝', key: 'option1' },
  { label: '选项 2', icon: '🔍', key: 'option2' },
  { divider: true },
  { label: '设置', icon: '⚙️', key: 'settings' },
  { label: '帮助', icon: '❓', key: 'help' },
  { label: '退出', icon: '🚪', key: 'logout', danger: true }
]

const cardItems = [
  { label: '快速开始', icon: '🚀', key: 'quickstart' },
  { label: '文档', icon: '📚', key: 'docs' },
  { label: '模板', icon: '📄', key: 'templates' },
  { divider: true },
  { label: '社区', icon: '👥', key: 'community' },
  { label: '支持', icon: '💬', key: 'support' }
]

export const Default = {
  name: '默认样式',
  args: {
    triggerText: '选择选项',
    items: sampleItems,
    placement: 'bottom-start',
    variant: 'default',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: '基本的下拉菜单样式。'
      }
    }
  }
}

export const CardVariant = {
  name: '卡片变种',
  args: {
    triggerText: '了解更多',
    items: cardItems,
    placement: 'bottom-start',
    variant: 'card',
    illustration: './img/watercolorui.png',
    illustrationAlt: 'UI组件库示意图',
    cardTitle: 'Watercolor UI',
    cardDescription: '现代化的水彩风格组件库'
  },
  parameters: {
    docs: {
      description: {
        story: '新增的卡片变种，左侧显示示意图和描述，右侧显示选项列表。适合用于产品介绍、功能展示等场景。'
      }
    }
  }
}

export const CardWithoutImage = {
  name: '卡片变种（无图片）',
  args: {
    triggerText: '产品功能',
    items: cardItems,
    placement: 'bottom-start',
    variant: 'card',
    cardTitle: '功能特色',
    cardDescription: '探索强大的功能'
  },
  parameters: {
    docs: {
      description: {
        story: '不提供图片时，将显示默认的占位符图标。'
      }
    }
  }
}

export const DisabledState = {
  name: '禁用状态',
  args: {
    triggerText: '禁用的下拉菜单',
    items: sampleItems,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: '禁用状态的下拉菜单无法被点击。'
      }
    }
  }
}

export const TopPlacement = {
  name: '顶部位置',
  args: {
    triggerText: '顶部位置',
    items: sampleItems,
    placement: 'top-start'
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '下拉菜单在顶部弹出的示例。'
      }
    }
  }
} 