import BreadcrumbVue from '../src/components/Breadcrumb/Breadcrumb.vue'

export default {
  title: 'Components/Breadcrumb',
  component: BreadcrumbVue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: '面包屑项目数据',
    },
    separator: {
      control: 'text',
      description: '分隔符',
    },
    maxItems: {
      control: { type: 'number' },
      description: '最大显示项目数',
    },
    showHome: {
      control: 'boolean',
      description: '是否显示首页链接',
    },
    homeIcon: {
      control: 'text',
      description: '首页图标',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'underlined', 'contained'],
      description: '面包屑变体',
    },
    onClick: { action: 'click' },
  },
}

const defaultItems = [
  { label: '首页', href: '/' },
  { label: '产品', href: '/products' },
  { label: '电子设备', href: '/products/electronics' },
  { label: '智能手机', href: '/products/electronics/phones' },
  { label: 'iPhone 15', href: '/products/electronics/phones/iphone-15' }
]

export const Default = {
  args: {
    items: defaultItems,
    separator: '/',
    maxItems: 0,
    showHome: false,
    homeIcon: '🏠',
    variant: 'default',
  },
  render: (args) => ({
    components: { BreadcrumbVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-2xl">
        <BreadcrumbVue 
          :items="args.items"
          :separator="args.separator"
          :max-items="args.maxItems"
          :show-home="args.showHome"
          :home-icon="args.homeIcon"
          :variant="args.variant"
          @click="args.onClick"
        />
      </div>
    `,
  }),
}

export const WithHome = {
  args: {
    items: defaultItems.slice(1),
    separator: '/',
    maxItems: 0,
    showHome: true,
    homeIcon: '🏠',
    variant: 'default',
  },
  render: (args) => ({
    components: { BreadcrumbVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-2xl">
        <BreadcrumbVue 
          :items="args.items"
          :separator="args.separator"
          :max-items="args.maxItems"
          :show-home="args.showHome"
          :home-icon="args.homeIcon"
          :variant="args.variant"
          @click="args.onClick"
        />
      </div>
    `,
  }),
}

export const WithMaxItems = {
  args: {
    items: defaultItems,
    separator: '/',
    maxItems: 3,
    showHome: false,
    homeIcon: '🏠',
    variant: 'default',
  },
  render: (args) => ({
    components: { BreadcrumbVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-2xl">
        <BreadcrumbVue 
          :items="args.items"
          :separator="args.separator"
          :max-items="args.maxItems"
          :show-home="args.showHome"
          :home-icon="args.homeIcon"
          :variant="args.variant"
          @click="args.onClick"
        />
      </div>
    `,
  }),
}

export const Underlined = {
  args: {
    items: defaultItems,
    separator: '/',
    maxItems: 0,
    showHome: false,
    homeIcon: '🏠',
    variant: 'underlined',
  },
  render: (args) => ({
    components: { BreadcrumbVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-2xl">
        <BreadcrumbVue 
          :items="args.items"
          :separator="args.separator"
          :max-items="args.maxItems"
          :show-home="args.showHome"
          :home-icon="args.homeIcon"
          :variant="args.variant"
          @click="args.onClick"
        />
      </div>
    `,
  }),
}

export const Contained = {
  args: {
    items: defaultItems,
    separator: '/',
    maxItems: 0,
    showHome: false,
    homeIcon: '🏠',
    variant: 'contained',
  },
  render: (args) => ({
    components: { BreadcrumbVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-2xl">
        <BreadcrumbVue 
          :items="args.items"
          :separator="args.separator"
          :max-items="args.maxItems"
          :show-home="args.showHome"
          :home-icon="args.homeIcon"
          :variant="args.variant"
          @click="args.onClick"
        />
      </div>
    `,
  }),
}

export const CustomSeparator = {
  args: {
    items: defaultItems,
    separator: '>',
    maxItems: 0,
    showHome: false,
    homeIcon: '🏠',
    variant: 'default',
  },
  render: (args) => ({
    components: { BreadcrumbVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-2xl">
        <BreadcrumbVue 
          :items="args.items"
          :separator="args.separator"
          :max-items="args.maxItems"
          :show-home="args.showHome"
          :home-icon="args.homeIcon"
          :variant="args.variant"
          @click="args.onClick"
        />
      </div>
    `,
  }),
}

export const WithIcons = {
  render: () => ({
    components: { BreadcrumbVue },
    setup() {
      const items = [
        { label: '首页', href: '/', icon: '🏠' },
        { label: '文档', href: '/docs', icon: '📚' },
        { label: '组件', href: '/docs/components', icon: '🧩' },
        { label: '面包屑', href: '/docs/components/breadcrumb', icon: '🍞' }
      ]
      return { items }
    },
    template: `
      <div class="w-full max-w-2xl">
        <BreadcrumbVue 
          :items="items"
          separator="/"
          variant="default"
        />
      </div>
    `,
  }),
}

export const SimpleBreadcrumb = {
  render: () => ({
    components: { BreadcrumbVue },
    setup() {
      const items = [
        { label: '首页', href: '/' },
        { label: '当前页面' }
      ]
      return { items }
    },
    template: `
      <div class="w-full max-w-2xl">
        <BreadcrumbVue 
          :items="items"
          separator="/"
          variant="default"
        />
      </div>
    `,
  }),
}

export const AllVariants = {
  render: () => ({
    components: { BreadcrumbVue },
    setup() {
      const items = [
        { label: '首页', href: '/' },
        { label: '产品', href: '/products' },
        { label: '详情页面' }
      ]
      return { items }
    },
    template: `
      <div class="space-y-6 w-full max-w-2xl">
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">默认样式</h3>
          <BreadcrumbVue 
            :items="items"
            variant="default"
          />
        </div>
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">下划线样式</h3>
          <BreadcrumbVue 
            :items="items"
            variant="underlined"
          />
        </div>
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-2">容器样式</h3>
          <BreadcrumbVue 
            :items="items"
            variant="contained"
          />
        </div>
      </div>
    `,
  }),
}

export const WithDisabledItems = {
  render: () => ({
    components: { BreadcrumbVue },
    setup() {
      const items = [
        { label: '首页', href: '/' },
        { label: '受限页面', disabled: true },
        { label: '子页面', href: '/restricted/child' },
        { label: '当前页面' }
      ]
      return { items }
    },
    template: `
      <div class="w-full max-w-2xl">
        <BreadcrumbVue 
          :items="items"
          separator="/"
          variant="default"
        />
      </div>
    `,
  }),
} 