import ToastVue from '../src/components/Toast/Toast.vue'

export default {
  title: 'Components/Toast',
  component: ToastVue,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toast 通知组件，支持多种类型和位置。'
      }
    }
  },
  tags: ['autodocs'],
  args: {
    message: '这是一条通知消息',
    type: 'info',
    position: 'top-right',
    duration: 0,
    closable: true,
    showIcon: true,
    title: ''
  },
  argTypes: {
    message: {
      control: { type: 'text' },
      description: '通知内容',
      table: { category: 'Content' }
    },
    title: {
      control: { type: 'text' },
      description: '通知标题',
      table: { category: 'Content' }
    },
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: '通知类型',
      table: { category: 'Appearance' }
    },
    position: {
      control: { type: 'select' },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: '显示位置',
      table: { category: 'Layout' }
    },
    duration: {
      control: { type: 'number', min: 0, max: 10000, step: 500 },
      description: '自动关闭时间（毫秒，0表示不自动关闭）',
      table: { category: 'Behavior' }
    },
    closable: {
      control: { type: 'boolean' },
      description: '是否可手动关闭',
      table: { category: 'Behavior' }
    },
    showIcon: {
      control: { type: 'boolean' },
      description: '是否显示图标',
      table: { category: 'Appearance' }
    }
  }
}

// Vue 示例 - 默认通知（可交互）
export const Default = {
  render: (args) => ({
    components: { ToastVue },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 200px; position: relative; display: flex; align-items: center; justify-content: center;">
        <ToastVue v-bind="args" />
      </div>
    `
  })
}

// Vue 示例 - 成功通知
export const Success = {
  render: (args) => ({
    components: { ToastVue },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 200px; position: relative; display: flex; align-items: center; justify-content: center;">
        <ToastVue v-bind="args" />
      </div>
    `
  }),
  args: {
    message: '操作成功完成！',
    type: 'success',
    title: '成功',
    duration: 0
  }
}

// Vue 示例 - 警告通知
export const Warning = {
  render: (args) => ({
    components: { ToastVue },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 200px; position: relative; display: flex; align-items: center; justify-content: center;">
        <ToastVue v-bind="args" />
      </div>
    `
  }),
  args: {
    message: '请注意检查您的输入内容',
    type: 'warning',
    title: '警告',
    duration: 0
  }
}

// Vue 示例 - 错误通知
export const Error = {
  render: (args) => ({
    components: { ToastVue },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 200px; position: relative; display: flex; align-items: center; justify-content: center;">
        <ToastVue v-bind="args" />
      </div>
    `
  }),
  args: {
    message: '操作失败，请重试',
    type: 'error',
    title: '错误',
    duration: 0
  }
}

// Vue 示例 - 不同位置
export const Positions = {
  render: (args) => ({
    components: { ToastVue },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 400px; width: 600px; position: relative; border: 1px dashed #ccc;">
        <ToastVue message="左上角通知" type="info" position="top-left" :duration="0" />
        <ToastVue message="右上角通知" type="success" position="top-right" :duration="0" />
        <ToastVue message="左下角通知" type="warning" position="bottom-left" :duration="0" />
        <ToastVue message="右下角通知" type="error" position="bottom-right" :duration="0" />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示 Toast 在不同位置的显示效果'
      }
    }
  }
} 