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