import ButtonVue from '../src/components/Button/Button.vue'
import ButtonReact from '../src/components/Button/Button.jsx'

export default {
  title: 'Components/Button',
  component: ButtonVue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'filled', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink'],
      description: '按钮变体',
    },
    buttonStyle: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled'],
      description: '按钮样式模式',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '按钮大小',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    onClick: { action: 'clicked' },
  },
}

// Vue 版本的故事
export const VuePrimary = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    components: { ButtonVue },
    setup() {
      return { args }
    },
    template: `
      <ButtonVue 
        :variant="args.variant" 
        :size="args.size" 
        :disabled="args.disabled"
        @click="args.onClick"
      >
        点击按钮
      </ButtonVue>
    `,
  }),
}

export const VueSecondary = {
  args: {
    variant: 'secondary',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    components: { ButtonVue },
    setup() {
      return { args }
    },
    template: `
      <ButtonVue 
        :variant="args.variant" 
        :size="args.size" 
        :disabled="args.disabled"
        @click="args.onClick"
      >
        次要按钮
      </ButtonVue>
    `,
  }),
}

export const VueFilled = {
  args: {
    variant: 'filled',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    components: { ButtonVue },
    setup() {
      return { args }
    },
    template: `
      <ButtonVue 
        :variant="args.variant" 
        :size="args.size" 
        :disabled="args.disabled"
        @click="args.onClick"
      >
        填充按钮
      </ButtonVue>
    `,
  }),
}

export const VueSizes = {
  render: () => ({
    components: { ButtonVue },
    template: `
      <div class="flex items-center gap-4">
        <ButtonVue size="sm" variant="primary">小按钮</ButtonVue>
        <ButtonVue size="md" variant="primary">中等按钮</ButtonVue>
        <ButtonVue size="lg" variant="primary">大按钮</ButtonVue>
      </div>
    `,
  }),
}

export const VueVariants = {
  render: () => ({
    components: { ButtonVue },
    template: `
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <ButtonVue variant="primary">主要按钮</ButtonVue>
          <ButtonVue variant="secondary">次要按钮</ButtonVue>
          <ButtonVue variant="filled">填充按钮</ButtonVue>
        </div>
        <div class="flex items-center gap-4">
          <ButtonVue variant="success">成功按钮</ButtonVue>
          <ButtonVue variant="warning">警告按钮</ButtonVue>
          <ButtonVue variant="error">错误按钮</ButtonVue>
        </div>
        <div class="flex items-center gap-4">
          <ButtonVue variant="purple">紫色按钮</ButtonVue>
          <ButtonVue variant="orange">橙色按钮</ButtonVue>
          <ButtonVue variant="cyan">青色按钮</ButtonVue>
          <ButtonVue variant="pink">粉色按钮</ButtonVue>
        </div>
      </div>
    `,
  }),
}

export const VueDisabled = {
  render: () => ({
    components: { ButtonVue },
    template: `
      <div class="flex items-center gap-4">
        <ButtonVue variant="primary" disabled>禁用主要</ButtonVue>
        <ButtonVue variant="secondary" disabled>禁用次要</ButtonVue>
        <ButtonVue variant="filled" disabled>禁用填充</ButtonVue>
      </div>
    `,
  }),
}

export const VueButtonStyles = {
  render: () => ({
    components: { ButtonVue },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="mb-3 text-lg font-semibold">默认样式 (Default)</h3>
          <p class="mb-3 text-sm text-gray-600">只有彩色的字，没有背景，hover时才有浅色的背景，没有边框</p>
          <div class="flex items-center gap-4">
            <ButtonVue variant="primary" buttonStyle="default">主要按钮</ButtonVue>
            <ButtonVue variant="success" buttonStyle="default">成功按钮</ButtonVue>
            <ButtonVue variant="warning" buttonStyle="default">警告按钮</ButtonVue>
            <ButtonVue variant="error" buttonStyle="default">错误按钮</ButtonVue>
            <ButtonVue variant="purple" buttonStyle="default">紫色按钮</ButtonVue>
          </div>
        </div>
        
        <div>
          <h3 class="mb-3 text-lg font-semibold">边框样式 (Outlined)</h3>
          <p class="mb-3 text-sm text-gray-600">只有彩色的字，没有背景，hover时才有浅色的背景，有边框</p>
          <div class="flex items-center gap-4">
            <ButtonVue variant="primary" buttonStyle="outlined">主要按钮</ButtonVue>
            <ButtonVue variant="success" buttonStyle="outlined">成功按钮</ButtonVue>
            <ButtonVue variant="warning" buttonStyle="outlined">警告按钮</ButtonVue>
            <ButtonVue variant="error" buttonStyle="outlined">错误按钮</ButtonVue>
            <ButtonVue variant="purple" buttonStyle="outlined">紫色按钮</ButtonVue>
          </div>
        </div>
        
        <div>
          <h3 class="mb-3 text-lg font-semibold">填充样式 (Filled)</h3>
          <p class="mb-3 text-sm text-gray-600">只有白色的字，彩色填充背景，hover时有更深色的背景</p>
          <div class="flex items-center gap-4">
            <ButtonVue variant="primary" buttonStyle="filled">主要按钮</ButtonVue>
            <ButtonVue variant="success" buttonStyle="filled">成功按钮</ButtonVue>
            <ButtonVue variant="warning" buttonStyle="filled">警告按钮</ButtonVue>
            <ButtonVue variant="error" buttonStyle="filled">错误按钮</ButtonVue>
            <ButtonVue variant="purple" buttonStyle="filled">紫色按钮</ButtonVue>
          </div>
        </div>
      </div>
    `,
  }),
}

export const VueStyleComparison = {
  render: () => ({
    components: { ButtonVue },
    template: `
      <div class="space-y-4">
        <div class="grid grid-cols-3 gap-4">
          <div class="text-center">
            <h4 class="mb-2 font-medium">Default</h4>
            <ButtonVue variant="primary" buttonStyle="default">按钮</ButtonVue>
          </div>
          <div class="text-center">
            <h4 class="mb-2 font-medium">Outlined</h4>
            <ButtonVue variant="primary" buttonStyle="outlined">按钮</ButtonVue>
          </div>
          <div class="text-center">
            <h4 class="mb-2 font-medium">Filled</h4>
            <ButtonVue variant="primary" buttonStyle="filled">按钮</ButtonVue>
          </div>
        </div>
        
        <div class="grid grid-cols-3 gap-4">
          <div class="text-center">
            <ButtonVue variant="success" buttonStyle="default">成功</ButtonVue>
          </div>
          <div class="text-center">
            <ButtonVue variant="success" buttonStyle="outlined">成功</ButtonVue>
          </div>
          <div class="text-center">
            <ButtonVue variant="success" buttonStyle="filled">成功</ButtonVue>
          </div>
        </div>
        
        <div class="grid grid-cols-3 gap-4">
          <div class="text-center">
            <ButtonVue variant="error" buttonStyle="default">错误</ButtonVue>
          </div>
          <div class="text-center">
            <ButtonVue variant="error" buttonStyle="outlined">错误</ButtonVue>
          </div>
          <div class="text-center">
            <ButtonVue variant="error" buttonStyle="filled">错误</ButtonVue>
          </div>
        </div>
      </div>
    `,
  }),
} 