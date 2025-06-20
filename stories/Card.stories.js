import CardVue from '../src/components/Card/Card.vue'
import ButtonVue from '../src/components/Button/Button.vue'

export default {
  title: 'Components/Card',
  component: CardVue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '卡片标题',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated'],
      description: '卡片变体',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      description: '内边距大小',
    },
  },
}

export const VueDefault = {
  args: {
    title: '卡片标题',
    variant: 'default',
    padding: 'md',
  },
  render: (args) => ({
    components: { CardVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-96">
        <CardVue 
          :title="args.title"
          :variant="args.variant"
          :padding="args.padding"
        >
          <p class="text-neutral-600 dark:text-neutral-400">
            这是一个极简设计的卡片组件。它遵循扁平化设计原则，
            没有阴影，边框简洁，专注于内容的展示。
          </p>
        </CardVue>
      </div>
    `,
  }),
}

export const VueWithContent = {
  render: () => ({
    components: { CardVue, ButtonVue },
    template: `
      <div class="w-96">
        <CardVue title="用户资料">
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                <span class="text-primary-600 dark:text-primary-400 font-semibold">JD</span>
              </div>
              <div>
                <h4 class="font-medium text-neutral-900 dark:text-neutral-100">张三</h4>
                <p class="text-sm text-neutral-500 dark:text-neutral-400">前端工程师</p>
              </div>
            </div>
            
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-neutral-500 dark:text-neutral-400">邮箱</span>
                <span class="text-neutral-900 dark:text-neutral-100">zhangsan@example.com</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-neutral-500 dark:text-neutral-400">部门</span>
                <span class="text-neutral-900 dark:text-neutral-100">技术部</span>
              </div>
            </div>
          </div>
          
          <template #footer>
            <div class="flex justify-end space-x-2">
              <ButtonVue variant="secondary">取消</ButtonVue>
              <ButtonVue variant="filled">编辑</ButtonVue>
            </div>
          </template>
        </CardVue>
      </div>
    `,
  }),
}

export const VueElevated = {
  render: () => ({
    components: { CardVue },
    template: `
      <div class="w-96">
        <CardVue title="带阴影的卡片" variant="elevated">
          <p class="text-neutral-600 dark:text-neutral-400">
            这个卡片使用了 elevated 变体，在 hover 时会显示轻微的阴影效果，
            保持了极简的设计风格。
          </p>
        </CardVue>
      </div>
    `,
  }),
}

export const VuePaddingVariants = {
  render: () => ({
    components: { CardVue },
    template: `
      <div class="space-y-4 w-96">
        <CardVue title="无内边距" padding="none">
          <div class="p-4 bg-neutral-100 dark:bg-neutral-800">
            <p class="text-neutral-600 dark:text-neutral-400">
              这个卡片没有内边距，内容紧贴边缘。
            </p>
          </div>
        </CardVue>
        
        <CardVue title="小内边距" padding="sm">
          <p class="text-neutral-600 dark:text-neutral-400">
            这个卡片使用小号内边距。
          </p>
        </CardVue>
        
        <CardVue title="中等内边距" padding="md">
          <p class="text-neutral-600 dark:text-neutral-400">
            这个卡片使用中等内边距（默认）。
          </p>
        </CardVue>
        
        <CardVue title="大内边距" padding="lg">
          <p class="text-neutral-600 dark:text-neutral-400">
            这个卡片使用大号内边距。
          </p>
        </CardVue>
      </div>
    `,
  }),
}

export const VueCustomHeader = {
  render: () => ({
    components: { CardVue, ButtonVue },
    template: `
      <div class="w-96">
        <CardVue>
          <template #header>
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  自定义头部
                </h3>
                <p class="text-sm text-neutral-500 dark:text-neutral-400">
                  使用插槽自定义头部内容
                </p>
              </div>
              <ButtonVue variant="secondary" size="sm">设置</ButtonVue>
            </div>
          </template>
          
          <p class="text-neutral-600 dark:text-neutral-400">
            这个卡片使用了自定义的头部插槽，可以放置更复杂的内容。
          </p>
        </CardVue>
      </div>
    `,
  }),
}

export const VueGrid = {
  render: () => ({
    components: { CardVue },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <CardVue title="统计数据">
          <div class="text-center">
            <div class="text-3xl font-bold text-primary-500">1,234</div>
            <p class="text-sm text-neutral-500 dark:text-neutral-400">总用户数</p>
          </div>
        </CardVue>
        
        <CardVue title="今日收入" variant="elevated">
          <div class="text-center">
            <div class="text-3xl font-bold text-success-500">¥56,789</div>
            <p class="text-sm text-neutral-500 dark:text-neutral-400">较昨日 +12%</p>
          </div>
        </CardVue>
        
        <CardVue title="待处理">
          <div class="text-center">
            <div class="text-3xl font-bold text-warning-500">42</div>
            <p class="text-sm text-neutral-500 dark:text-neutral-400">待审核订单</p>
          </div>
        </CardVue>
      </div>
    `,
  }),
} 