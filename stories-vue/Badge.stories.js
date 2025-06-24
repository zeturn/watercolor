import BadgeVue from '../src/components/Badge/Badge.vue'

export default {
  title: 'Components/Badge',
  component: BadgeVue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink'],
      description: '徽章变体',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '徽章尺寸',
    },
    dot: {
      control: 'boolean',
      description: '是否为圆点模式',
    },
  },
}

export const VueDefault = {
  args: {
    variant: 'primary',
    size: 'md',
    dot: false,
  },
  render: (args) => ({
    components: { BadgeVue },
    setup() {
      return { args }
    },
    template: `
      <BadgeVue 
        :variant="args.variant"
        :size="args.size"
        :dot="args.dot"
      >
        {{ args.dot ? '' : '徽章文本' }}
      </BadgeVue>
    `,
  }),
}

export const VueVariants = {
  render: () => ({
    components: { BadgeVue },
    template: `
      <div class="flex flex-wrap gap-3">
        <BadgeVue variant="primary">主要</BadgeVue>
        <BadgeVue variant="secondary">次要</BadgeVue>
        <BadgeVue variant="success">成功</BadgeVue>
        <BadgeVue variant="warning">警告</BadgeVue>
        <BadgeVue variant="error">错误</BadgeVue>
        <BadgeVue variant="purple">紫色</BadgeVue>
        <BadgeVue variant="orange">橙色</BadgeVue>
        <BadgeVue variant="cyan">青色</BadgeVue>
        <BadgeVue variant="pink">粉色</BadgeVue>
      </div>
    `,
  }),
}

export const VueSizes = {
  render: () => ({
    components: { BadgeVue },
    template: `
      <div class="flex items-center gap-3">
        <BadgeVue size="sm" variant="primary">小徽章</BadgeVue>
        <BadgeVue size="md" variant="primary">中徽章</BadgeVue>
        <BadgeVue size="lg" variant="primary">大徽章</BadgeVue>
      </div>
    `,
  }),
}

export const VueDots = {
  render: () => ({
    components: { BadgeVue },
    template: `
      <div class="flex items-center gap-3">
        <BadgeVue dot variant="primary" />
        <BadgeVue dot variant="success" />
        <BadgeVue dot variant="warning" />
        <BadgeVue dot variant="error" />
        <BadgeVue dot variant="purple" />
        <BadgeVue dot variant="orange" />
      </div>
    `,
  }),
} 