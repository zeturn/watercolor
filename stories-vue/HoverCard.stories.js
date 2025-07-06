import HoverCardVue from '../src/components/HoverCard/HoverCard.vue'

export default {
  title: 'Components/HoverCard (Vue)',
  component: HoverCardVue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    triggerText: {
      control: 'text',
      description: '触发元素的文本',
    },
    cardData: {
      control: 'object',
      description: '卡片数据对象',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled', 'minimal'],
      description: '触发器变体',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '触发器大小',
    },
    cardSize: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: '卡片大小',
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: '卡片位置',
    },
    delay: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: '显示延迟(毫秒)',
    },
    hideDelay: {
      control: { type: 'number', min: 0, max: 1000, step: 50 },
      description: '隐藏延迟(毫秒)',
    },
    showArrow: {
      control: 'boolean',
      description: '是否显示箭头',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    onShow: { action: 'show' },
    onHide: { action: 'hide' },
    onAction: { action: 'action' },
  },
}

export const Default = {
  args: {
    triggerText: '悬停查看详情',
    cardData: {
      title: '用户信息',
      description: '这是一个用户信息预览卡片，显示了基本的用户详情。',
      image: 'https://via.placeholder.com/200x150/3b82f6/ffffff?text=User',
      imageAlt: '用户头像',
      meta: ['在线', '最近活跃'],
      actions: [
        { label: '查看资料', onClick: () => console.log('查看资料') },
        { label: '发送消息', onClick: () => console.log('发送消息') }
      ]
    },
    variant: 'default',
    size: 'md',
    cardSize: 'md',
    position: 'top',
    delay: 300,
    hideDelay: 100,
    showArrow: true,
    disabled: false,
  },
  render: (args) => ({
    components: { HoverCardVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-md p-8">
        <p class="text-center text-gray-600 mb-4">
          将鼠标悬停在下面的文本上查看预览卡片
        </p>
        <HoverCardVue 
          :trigger-text="args.triggerText"
          :card-data="args.cardData"
          :variant="args.variant"
          :size="args.size"
          :card-size="args.cardSize"
          :position="args.position"
          :delay="args.delay"
          :hide-delay="args.hideDelay"
          :show-arrow="args.showArrow"
          :disabled="args.disabled"
          @show="args.onShow"
          @hide="args.onHide"
          @action="args.onAction"
        />
      </div>
    `,
  }),
}

export const ProductPreview = {
  args: {
    triggerText: 'MacBook Pro 16"',
    cardData: {
      title: 'MacBook Pro 16英寸',
      description: '配备M3 Max芯片的强大笔记本电脑，专为专业用户设计。',
      image: 'https://via.placeholder.com/280x200/1f2937/ffffff?text=MacBook+Pro',
      imageAlt: 'MacBook Pro',
      meta: ['现货', '¥25,999'],
      actions: [
        { label: '立即购买', onClick: () => console.log('立即购买') },
        { label: '加入购物车', onClick: () => console.log('加入购物车') }
      ]
    },
    variant: 'outlined',
    size: 'md',
    cardSize: 'lg',
    position: 'bottom',
    delay: 200,
    hideDelay: 150,
    showArrow: true,
    disabled: false,
  },
  render: (args) => ({
    components: { HoverCardVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-2xl p-8">
        <div class="bg-gray-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4">热门产品</h3>
          <p class="text-gray-600">
            查看我们最新的
            <HoverCardVue 
              :trigger-text="args.triggerText"
              :card-data="args.cardData"
              :variant="args.variant"
              :size="args.size"
              :card-size="args.cardSize"
              :position="args.position"
              :delay="args.delay"
              :hide-delay="args.hideDelay"
              :show-arrow="args.showArrow"
              :disabled="args.disabled"
              @show="args.onShow"
              @hide="args.onHide"
              @action="args.onAction"
            />
            型号，性能强劲，设计精美。
          </p>
        </div>
      </div>
    `,
  }),
}

export const UserMention = {
  args: {
    triggerText: '@张小明',
    cardData: {
      title: '张小明',
      description: '前端开发工程师，专注于Vue.js和React开发，5年工作经验。',
      image: 'https://via.placeholder.com/120x120/8b5cf6/ffffff?text=张',
      imageAlt: '张小明头像',
      meta: ['开发组', '在线'],
      actions: [
        { label: '发私信', onClick: () => console.log('发私信') },
        { label: '查看资料', onClick: () => console.log('查看资料') }
      ]
    },
    variant: 'filled',
    size: 'sm',
    cardSize: 'md',
    position: 'right',
    delay: 400,
    hideDelay: 100,
    showArrow: true,
    disabled: false,
  },
  render: (args) => ({
    components: { HoverCardVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-lg p-8">
        <div class="bg-white border rounded-lg p-4">
          <div class="flex items-center space-x-2 mb-3">
            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-content text-white text-sm">
              我
            </div>
            <span class="text-sm text-gray-500">刚刚</span>
          </div>
          <p class="text-gray-800">
            <HoverCardVue 
              :trigger-text="args.triggerText"
              :card-data="args.cardData"
              :variant="args.variant"
              :size="args.size"
              :card-size="args.cardSize"
              :position="args.position"
              :delay="args.delay"
              :hide-delay="args.hideDelay"
              :show-arrow="args.showArrow"
              :disabled="args.disabled"
              @show="args.onShow"
              @hide="args.onHide"
              @action="args.onAction"
            />
            你好，项目进展如何？有什么需要帮助的吗？
          </p>
        </div>
      </div>
    `,
  }),
}

export const LinkPreview = {
  args: {
    triggerText: 'github.com/vuejs/vue',
    cardData: {
      title: 'Vue.js',
      description: 'The Progressive JavaScript Framework. Vue.js is an approachable, performant and versatile framework for building web user interfaces.',
      image: 'https://via.placeholder.com/300x200/4fc08d/ffffff?text=Vue.js',
      imageAlt: 'Vue.js Logo',
      meta: ['⭐ 207k', '🍴 33.7k', 'JavaScript'],
      actions: [
        { label: '访问仓库', onClick: () => console.log('访问仓库') },
        { label: '克隆代码', onClick: () => console.log('克隆代码') }
      ]
    },
    variant: 'minimal',
    size: 'md',
    cardSize: 'lg',
    position: 'top',
    delay: 500,
    hideDelay: 200,
    showArrow: true,
    disabled: false,
  },
  render: (args) => ({
    components: { HoverCardVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-xl p-8">
        <div class="prose">
          <p>
            Vue.js是一个渐进式JavaScript框架，非常适合构建用户界面。
            你可以在 
            <HoverCardVue 
              :trigger-text="args.triggerText"
              :card-data="args.cardData"
              :variant="args.variant"
              :size="args.size"
              :card-size="args.cardSize"
              :position="args.position"
              :delay="args.delay"
              :hide-delay="args.hideDelay"
              :show-arrow="args.showArrow"
              :disabled="args.disabled"
              @show="args.onShow"
              @hide="args.onHide"
              @action="args.onAction"
            />
            上找到完整的源代码和文档。
          </p>
        </div>
      </div>
    `,
  }),
}

export const Positions = {
  render: () => ({
    components: { HoverCardVue },
    setup() {
      const cardData = {
        title: '位置演示',
        description: '这个卡片展示了不同的位置选项。',
        meta: ['演示', '测试']
      }
      return { cardData }
    },
    template: `
      <div class="w-full max-w-2xl p-16">
        <div class="grid grid-cols-3 gap-8 items-center">
          <div></div>
          <div class="text-center">
            <HoverCardVue 
              trigger-text="顶部位置"
              :card-data="cardData"
              position="top"
              variant="outlined"
            />
          </div>
          <div></div>
          
          <div class="text-center">
            <HoverCardVue 
              trigger-text="左侧位置"
              :card-data="cardData"
              position="left"
              variant="filled"
            />
          </div>
          <div class="text-center">
            <span class="text-gray-500">中心区域</span>
          </div>
          <div class="text-center">
            <HoverCardVue 
              trigger-text="右侧位置"
              :card-data="cardData"
              position="right"
              variant="default"
            />
          </div>
          
          <div></div>
          <div class="text-center">
            <HoverCardVue 
              trigger-text="底部位置"
              :card-data="cardData"
              position="bottom"
              variant="minimal"
            />
          </div>
          <div></div>
        </div>
      </div>
    `,
  }),
}

export const Variants = {
  render: () => ({
    components: { HoverCardVue },
    setup() {
      const cardData = {
        title: '变体演示',
        description: '展示不同的触发器样式变体。',
        meta: ['样式', '变体']
      }
      return { cardData }
    },
    template: `
      <div class="w-full max-w-lg p-8 space-y-6">
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-3">默认样式</h3>
          <HoverCardVue 
            trigger-text="默认样式触发器"
            :card-data="cardData"
            variant="default"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-3">边框样式</h3>
          <HoverCardVue 
            trigger-text="边框样式触发器"
            :card-data="cardData"
            variant="outlined"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-3">填充样式</h3>
          <HoverCardVue 
            trigger-text="填充样式触发器"
            :card-data="cardData"
            variant="filled"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-3">简洁样式</h3>
          <HoverCardVue 
            trigger-text="简洁样式触发器"
            :card-data="cardData"
            variant="minimal"
          />
        </div>
      </div>
    `,
  }),
}

export const Sizes = {
  render: () => ({
    components: { HoverCardVue },
    setup() {
      const cardData = {
        title: '尺寸演示',
        description: '展示不同的触发器和卡片尺寸。',
        meta: ['尺寸', '演示']
      }
      return { cardData }
    },
    template: `
      <div class="w-full max-w-lg p-8 space-y-6">
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-3">小尺寸 (触发器 + 卡片)</h3>
          <HoverCardVue 
            trigger-text="小尺寸"
            :card-data="cardData"
            size="sm"
            card-size="sm"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-3">中等尺寸 (触发器 + 卡片)</h3>
          <HoverCardVue 
            trigger-text="中等尺寸"
            :card-data="cardData"
            size="md"
            card-size="md"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-3">大尺寸 (触发器 + 卡片)</h3>
          <HoverCardVue 
            trigger-text="大尺寸"
            :card-data="cardData"
            size="lg"
            card-size="lg"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-medium text-gray-700 mb-3">特大卡片</h3>
          <HoverCardVue 
            trigger-text="特大卡片"
            :card-data="cardData"
            size="md"
            card-size="xl"
          />
        </div>
      </div>
    `,
  }),
}

export const CustomContent = {
  render: () => ({
    components: { HoverCardVue },
    setup() {
      const cardData = {
        title: '自定义内容',
        description: '使用插槽可以完全自定义卡片内容。'
      }
      return { cardData }
    },
    template: `
      <div class="w-full max-w-lg p-8">
        <p class="text-gray-600 mb-4">
          这个示例展示了如何使用插槽自定义触发器和卡片内容。
        </p>
        
        <HoverCardVue :card-data="cardData" position="bottom">
          <template #default>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              🎨 自定义触发器
            </span>
          </template>
          
          <template #card="{ data }">
            <div class="p-4">
              <div class="flex items-center space-x-3 mb-3">
                <div class="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  🎨
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">{{ data.title }}</h3>
                  <p class="text-sm text-gray-500">自定义设计</p>
                </div>
              </div>
              
              <p class="text-gray-600 text-sm mb-4">{{ data.description }}</p>
              
              <div class="flex space-x-2">
                <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">设计</span>
                <span class="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded">创意</span>
                <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Vue.js</span>
              </div>
            </div>
          </template>
        </HoverCardVue>
      </div>
    `,
  }),
}

export const Disabled = {
  args: {
    triggerText: '禁用状态',
    cardData: {
      title: '禁用演示',
      description: '这个卡片处于禁用状态，不会显示预览。',
    },
    variant: 'default',
    size: 'md',
    disabled: true,
  },
  render: (args) => ({
    components: { HoverCardVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-md p-8">
        <p class="text-center text-gray-600 mb-4">
          下面的触发器已被禁用，悬停不会显示卡片
        </p>
        <HoverCardVue 
          :trigger-text="args.triggerText"
          :card-data="args.cardData"
          :variant="args.variant"
          :size="args.size"
          :disabled="args.disabled"
          @show="args.onShow"
          @hide="args.onHide"
          @action="args.onAction"
        />
      </div>
    `,
  }),
} 