import AccordionVue from '../src/components/Accordion/Accordion.vue'

export default {
  title: 'Components/Accordion',
  component: AccordionVue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: '手风琴项目数据',
    },
    multiple: {
      control: 'boolean',
      description: '是否允许同时展开多个项目',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'filled'],
      description: '手风琴变体',
    },
    onToggle: { action: 'toggle' },
  },
}

const defaultItems = [
  {
    title: '什么是Watercolor组件库？',
    content: 'Watercolor是一个现代化的Vue.js组件库，提供了丰富的UI组件，帮助开发者快速构建美观的用户界面。'
  },
  {
    title: '如何安装和使用？',
    content: '您可以通过npm安装：npm install watercolor-ui，然后在您的项目中导入所需的组件。所有组件都支持TypeScript，并提供了完整的类型定义。'
  },
  {
    title: '支持哪些浏览器？',
    content: 'Watercolor支持所有现代浏览器，包括Chrome、Firefox、Safari和Edge的最新版本。对于旧版浏览器，我们提供了相应的polyfill。'
  },
  {
    title: '是否支持主题定制？',
    content: '是的！Watercolor提供了强大的主题系统，您可以通过CSS变量轻松定制颜色、字体、间距等样式属性，满足不同项目的设计需求。'
  }
]

export const Default = {
  args: {
    items: defaultItems,
    multiple: false,
    variant: 'default',
  },
  render: (args) => ({
    components: { AccordionVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-2xl">
        <AccordionVue 
          :items="args.items"
          :multiple="args.multiple"
          :variant="args.variant"
          @toggle="args.onToggle"
        />
      </div>
    `,
  }),
}

export const Multiple = {
  args: {
    items: defaultItems,
    multiple: true,
    variant: 'default',
  },
  render: (args) => ({
    components: { AccordionVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-2xl">
        <AccordionVue 
          :items="args.items"
          :multiple="args.multiple"
          :variant="args.variant"
          @toggle="args.onToggle"
        />
      </div>
    `,
  }),
}

export const Bordered = {
  args: {
    items: defaultItems,
    multiple: false,
    variant: 'bordered',
  },
  render: (args) => ({
    components: { AccordionVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-2xl">
        <AccordionVue 
          :items="args.items"
          :multiple="args.multiple"
          :variant="args.variant"
          @toggle="args.onToggle"
        />
      </div>
    `,
  }),
}

export const Filled = {
  args: {
    items: defaultItems,
    multiple: false,
    variant: 'filled',
  },
  render: (args) => ({
    components: { AccordionVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-2xl">
        <AccordionVue 
          :items="args.items"
          :multiple="args.multiple"
          :variant="args.variant"
          @toggle="args.onToggle"
        />
      </div>
    `,
  }),
}

export const SimpleItems = {
  args: {
    items: [
      {
        title: '基础使用',
        content: '这是一个简单的手风琴示例。'
      },
      {
        title: '高级功能',
        content: '支持多种样式和交互模式。'
      }
    ],
    multiple: false,
    variant: 'default',
  },
  render: (args) => ({
    components: { AccordionVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-2xl">
        <AccordionVue 
          :items="args.items"
          :multiple="args.multiple"
          :variant="args.variant"
          @toggle="args.onToggle"
        />
      </div>
    `,
  }),
}

export const WithCustomContent = {
  render: () => ({
    components: { AccordionVue },
    setup() {
      const items = [
        {
          title: '包含富文本内容',
          content: ''
        },
        {
          title: '包含链接和按钮',
          content: ''
        }
      ]
      return { items }
    },
    template: `
      <div class="w-full max-w-2xl">
        <AccordionVue :items="items">
          <template #content-0>
            <div class="space-y-2">
              <p>这里可以包含<strong>粗体文本</strong>和<em>斜体文本</em>。</p>
              <ul class="list-disc pl-4">
                <li>列表项 1</li>
                <li>列表项 2</li>
                <li>列表项 3</li>
              </ul>
            </div>
          </template>
          <template #content-1>
            <div class="space-y-3">
              <p>您可以在这里添加任何内容，包括：</p>
              <div class="flex gap-2">
                <button class="px-3 py-1 bg-blue-500 text-white rounded text-sm">按钮</button>
                <a href="#" class="text-blue-500 underline">链接</a>
              </div>
            </div>
          </template>
        </AccordionVue>
      </div>
    `,
  }),
} 