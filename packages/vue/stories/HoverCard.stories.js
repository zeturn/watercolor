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
      image: 'https://avatars.githubusercontent.com/u/62530500?v=4',
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
      <div style="width: 100%; max-width: 28rem; padding: 2rem; margin-top: 16rem;">
        <p style="text-align: center; color: var(--wc-text-secondary); margin-bottom: 1rem;">
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
      image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp16-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=Nys1UFFBTmI1T0VnWWNyeEZhdDFYamhTSEZFNjlmT2xUUDNBTjljV1BxWVk4UDMvOWNCVUEyZk1VN2FtQlpZWXZvdUZlR0V0VUdJSjBWaDVNVG95YlBROXI4TlIyY1pzUUZwNVlXcEFNb2c',
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
      <div style="width: 100%; max-width: 28rem; padding: 2rem; margin-top: 16rem;">
        <div style="background-color: var(--wc-bg-surface); padding: 1rem; border-radius: var(--wc-radius-2xl);">
          <h3 style="font-size: var(--wc-font-size-md); font-weight: var(--wc-font-weight-medium); margin-bottom: 0.5rem;">热门产品</h3>
          <p style="color: var(--wc-text-secondary);">
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
    triggerText: '@zeturn',
    cardData: {
      title: 'zeturn',
      description: '前端开发工程师，专注于Vue.js和React开发，3年工作经验。后端开发工程师，专注于PHP和Python开发，5年工作经验。',
      image: 'https://avatars.githubusercontent.com/u/62530500?v=4',
      imageAlt: 'zeturn头像',
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
      <div style="width: 100%; max-width: 28rem; padding: 2rem; margin-top: 16rem;">
        <div style="background-color: var(--wc-bg-surface); border: 1px solid var(--wc-border-default); padding: 1rem; border-radius: var(--wc-radius-2xl);">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <div style="width: 2rem; height: 2rem; background-color: var(--wc-bg-surface-hover); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--wc-text-primary); font-size: var(--wc-font-size-sm);">
              我
            </div>
            <span style="font-size: var(--wc-font-size-sm); color: var(--wc-text-secondary);">刚刚</span>
          </div>
          <p style="color: var(--wc-text-primary);">
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
      <div style="width: 100%; max-width: 28rem; padding: 2rem; margin-top: 16rem;">
        <div style="background-color: var(--wc-bg-surface); padding: 1rem; border-radius: var(--wc-radius-2xl);">
          <p style="color: var(--wc-text-secondary);">
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
      <div style="width: 100%; max-width: 28rem; padding: 2rem; margin-top: 16rem;">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; align-items: center;">
          <div></div>
          <div style="text-align: center;">
            <HoverCardVue 
              trigger-text="顶部位置"
              :card-data="cardData"
              position="top"
              variant="outlined"
            />
          </div>
          <div></div>
          
          <div style="text-align: center;">
            <HoverCardVue 
              trigger-text="左侧位置"
              :card-data="cardData"
              position="left"
              variant="filled"
            />
          </div>
          <div style="text-align: center;">
            <span style="color: var(--wc-text-secondary);">中心区域</span>
          </div>
          <div style="text-align: center;">
            <HoverCardVue 
              trigger-text="右侧位置"
              :card-data="cardData"
              position="right"
              variant="default"
            />
          </div>
          
          <div></div>
          <div style="text-align: center;">
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
      <div style="width: 100%; max-width: 28rem; padding: 2rem; margin-top: 16rem;">
        <div>
          <h3 style="font-size: var(--wc-font-size-sm); font-weight: var(--wc-font-weight-medium); margin-bottom: 0.5rem;">默认样式</h3>
          <HoverCardVue 
            trigger-text="默认样式触发器"
            :card-data="cardData"
            variant="default"
          />
        </div>
        
        <div>
          <h3 style="font-size: var(--wc-font-size-sm); font-weight: var(--wc-font-weight-medium); margin-bottom: 0.5rem;">边框样式</h3>
          <HoverCardVue 
            trigger-text="边框样式触发器"
            :card-data="cardData"
            variant="outlined"
          />
        </div>
        
        <div>
          <h3 style="font-size: var(--wc-font-size-sm); font-weight: var(--wc-font-weight-medium); margin-bottom: 0.5rem;">填充样式</h3>
          <HoverCardVue 
            trigger-text="填充样式触发器"
            :card-data="cardData"
            variant="filled"
          />
        </div>
        
        <div>
          <h3 style="font-size: var(--wc-font-size-sm); font-weight: var(--wc-font-weight-medium); margin-bottom: 0.5rem;">简洁样式</h3>
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
      <div style="width: 100%; max-width: 28rem; padding: 2rem; margin-top: 16rem;">
        <div>
          <h3 style="font-size: var(--wc-font-size-sm); font-weight: var(--wc-font-weight-medium); margin-bottom: 0.5rem;">小尺寸 (触发器 + 卡片)</h3>
          <HoverCardVue 
            trigger-text="小尺寸"
            :card-data="cardData"
            size="sm"
            card-size="sm"
          />
        </div>
        
        <div>
          <h3 style="font-size: var(--wc-font-size-sm); font-weight: var(--wc-font-weight-medium); margin-bottom: 0.5rem;">中等尺寸 (触发器 + 卡片)</h3>
          <HoverCardVue 
            trigger-text="中等尺寸"
            :card-data="cardData"
            size="md"
            card-size="md"
          />
        </div>
        
        <div>
          <h3 style="font-size: var(--wc-font-size-sm); font-weight: var(--wc-font-weight-medium); margin-bottom: 0.5rem;">大尺寸 (触发器 + 卡片)</h3>
          <HoverCardVue 
            trigger-text="大尺寸"
            :card-data="cardData"
            size="lg"
            card-size="lg"
          />
        </div>
        
        <div>
          <h3 style="font-size: var(--wc-font-size-sm); font-weight: var(--wc-font-weight-medium); margin-bottom: 0.5rem;">特大卡片</h3>
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
      <div style="width: 100%; max-width: 28rem; padding: 2rem; margin-top: 16rem;">
        <p style="color: var(--wc-text-secondary); margin-bottom: 0.5rem;">
          这个示例展示了如何使用插槽自定义触发器和卡片内容。
        </p>
        
        <HoverCardVue :card-data="cardData" position="bottom">
          <template #default>
            <span style="display: inline-flex; align-items: center; padding: 0.5rem 1rem; border-radius: var(--wc-radius-2xl); font-size: var(--wc-font-size-sm); font-weight: var(--wc-font-weight-medium); background-color: var(--wc-bg-surface-secondary); color: var(--wc-text-primary);">
              🎨 自定义触发器
            </span>
          </template>
          
          <template #card="{ data }">
            <div style="padding: 1rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <div style="width: 2rem; height: 2rem; background-color: var(--wc-bg-surface-hover); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--wc-text-primary); font-size: var(--wc-font-size-sm);">
                  🎨
                </div>
                <div>
                  <h3 style="font-size: var(--wc-font-size-sm); font-weight: var(--wc-font-weight-medium); color: var(--wc-text-primary);">{{ data.title }}</h3>
                  <p style="font-size: var(--wc-font-size-sm); color: var(--wc-text-secondary);">自定义设计</p>
                </div>
              </div>
              
              <p style="font-size: var(--wc-font-size-sm); color: var(--wc-text-secondary); margin-bottom: 0.5rem;">{{ data.description }}</p>
              
              <div style="display: flex; gap: 0.5rem;">
                <span style="padding: 0.25rem 0.5rem; background-color: var(--wc-bg-surface-secondary); color: var(--wc-text-primary); font-size: var(--wc-font-size-xs); border-radius: var(--wc-radius-sm);">创意</span>
                <span style="padding: 0.25rem 0.5rem; background-color: var(--wc-bg-surface-secondary); color: var(--wc-text-primary); font-size: var(--wc-font-size-xs); border-radius: var(--wc-radius-sm);">Vue.js</span>
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
      <div style="width: 100%; max-width: 28rem; padding: 2rem; margin-top: 16rem;">
        <p style="text-align: center; color: var(--wc-text-secondary); margin-bottom: 0.5rem;">
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