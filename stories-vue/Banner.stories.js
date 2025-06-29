import BannerVue from '../src/components/Banner/Banner.vue'

export default {
  title: 'Components/Banner (Vue)',
  component: BannerVue,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'error'],
      description: '横幅类型',
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom'],
      description: '横幅位置',
    },
    title: {
      control: 'text',
      description: '横幅标题',
    },
    message: {
      control: 'text',
      description: '横幅消息',
    },
    closable: {
      control: 'boolean',
      description: '是否可关闭',
    },
    showIcon: {
      control: 'boolean',
      description: '是否显示图标',
    },
    showDefaultAction: {
      control: 'boolean',
      description: '是否显示默认行动按钮',
    },
    actionText: {
      control: 'text',
      description: '行动按钮文字',
    },
    sticky: {
      control: 'boolean',
      description: '是否固定定位',
    },
    zIndex: {
      control: { type: 'number' },
      description: 'z-index层级',
    },
    onClose: { action: 'close' },
    onAction: { action: 'action' },
  },
}

export const TopSuccess = {
  args: {
    type: 'success',
    position: 'top',
    title: '系统升级完成',
    message: '我们的系统已成功升级到最新版本，新功能现已可用！',
    closable: true,
    showIcon: true,
    showDefaultAction: true,
    actionText: '了解更多',
    sticky: false,
    zIndex: 1000,
  },
  render: (args) => ({
    components: { BannerVue },
    setup() {
      return { args }
    },
    template: `
      <div class="min-h-screen bg-gray-100">
        <BannerVue 
          :type="args.type"
          :position="args.position"
          :title="args.title"
          :message="args.message"
          :closable="args.closable"
          :show-icon="args.showIcon"
          :show-default-action="args.showDefaultAction"
          :action-text="args.actionText"
          :sticky="args.sticky"
          :z-index="args.zIndex"
          @close="args.onClose"
          @action="args.onAction"
        />
        <div class="p-8">
          <h1 class="text-2xl font-bold mb-4">页面内容</h1>
          <p class="text-gray-600">这里是页面的主要内容。横幅会显示在页面顶部。</p>
        </div>
      </div>
    `,
  }),
}

export const BottomWarning = {
  args: {
    type: 'warning',
    position: 'bottom',
    title: 'Cookie政策',
    message: '我们使用Cookie来改善您的体验。继续使用本网站即表示您同意我们的Cookie政策。',
    closable: true,
    showIcon: true,
    showDefaultAction: true,
    actionText: '接受',
    sticky: false,
    zIndex: 1000,
  },
  render: (args) => ({
    components: { BannerVue },
    setup() {
      return { args }
    },
    template: `
      <div class="min-h-screen bg-gray-100">
        <div class="p-8">
          <h1 class="text-2xl font-bold mb-4">页面内容</h1>
          <p class="text-gray-600">这里是页面的主要内容。横幅会显示在页面底部。</p>
        </div>
        <BannerVue 
          :type="args.type"
          :position="args.position"
          :title="args.title"
          :message="args.message"
          :closable="args.closable"
          :show-icon="args.showIcon"
          :show-default-action="args.showDefaultAction"
          :action-text="args.actionText"
          :sticky="args.sticky"
          :z-index="args.zIndex"
          @close="args.onClose"
          @action="args.onAction"
        />
      </div>
    `,
  }),
}

export const InfoBanner = {
  args: {
    type: 'info',
    position: 'top',
    title: '新功能发布',
    message: '我们很高兴地宣布推出新的数据分析功能，帮助您更好地了解业务趋势。',
    closable: true,
    showIcon: true,
    showDefaultAction: true,
    actionText: '立即体验',
    sticky: false,
    zIndex: 1000,
  },
  render: (args) => ({
    components: { BannerVue },
    setup() {
      return { args }
    },
    template: `
      <div class="min-h-screen bg-gray-100">
        <BannerVue 
          :type="args.type"
          :position="args.position"
          :title="args.title"
          :message="args.message"
          :closable="args.closable"
          :show-icon="args.showIcon"
          :show-default-action="args.showDefaultAction"
          :action-text="args.actionText"
          :sticky="args.sticky"
          :z-index="args.zIndex"
          @close="args.onClose"
          @action="args.onAction"
        />
        <div class="p-8">
          <h1 class="text-2xl font-bold mb-4">页面内容</h1>
          <p class="text-gray-600">这里是页面的主要内容。</p>
        </div>
      </div>
    `,
  }),
}

export const ErrorBanner = {
  args: {
    type: 'error',
    position: 'top',
    title: '服务异常',
    message: '部分服务可能暂时不可用，我们正在努力修复问题。',
    closable: true,
    showIcon: true,
    showDefaultAction: false,
    actionText: '重试',
    sticky: false,
    zIndex: 1000,
  },
  render: (args) => ({
    components: { BannerVue },
    setup() {
      return { args }
    },
    template: `
      <div class="min-h-screen bg-gray-100">
        <BannerVue 
          :type="args.type"
          :position="args.position"
          :title="args.title"
          :message="args.message"
          :closable="args.closable"
          :show-icon="args.showIcon"
          :show-default-action="args.showDefaultAction"
          :action-text="args.actionText"
          :sticky="args.sticky"
          :z-index="args.zIndex"
          @close="args.onClose"
          @action="args.onAction"
        />
        <div class="p-8">
          <h1 class="text-2xl font-bold mb-4">页面内容</h1>
          <p class="text-gray-600">这里是页面的主要内容。</p>
        </div>
      </div>
    `,
  }),
}

export const StickyBanner = {
  args: {
    type: 'warning',
    position: 'top',
    title: '重要通知',
    message: '系统将在明天凌晨进行维护，请提前保存您的工作。',
    closable: true,
    showIcon: true,
    showDefaultAction: true,
    actionText: '查看详情',
    sticky: true,
    zIndex: 1000,
  },
  render: (args) => ({
    components: { BannerVue },
    setup() {
      return { args }
    },
    template: `
      <div class="min-h-screen bg-gray-100">
        <BannerVue 
          :type="args.type"
          :position="args.position"
          :title="args.title"
          :message="args.message"
          :closable="args.closable"
          :show-icon="args.showIcon"
          :show-default-action="args.showDefaultAction"
          :action-text="args.actionText"
          :sticky="args.sticky"
          :z-index="args.zIndex"
          @close="args.onClose"
          @action="args.onAction"
        />
        <div class="p-8 pt-20">
          <h1 class="text-2xl font-bold mb-4">页面内容</h1>
          <p class="text-gray-600 mb-4">这个横幅是固定定位的，会始终显示在页面顶部。</p>
          <div class="h-screen bg-gradient-to-b from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
            <p class="text-lg text-gray-700">滚动页面测试固定定位效果</p>
          </div>
        </div>
      </div>
    `,
  }),
}

export const WithCustomActions = {
  render: () => ({
    components: { BannerVue },
    template: `
      <div class="min-h-screen bg-gray-100">
        <BannerVue 
          type="info"
          position="top"
          title="更新提醒"
          message="发现新版本，是否立即更新？"
          :closable="true"
          :show-icon="true"
          :show-default-action="false"
        >
          <template #actions>
            <button class="px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 text-white rounded-lg text-sm hover:bg-opacity-30 transition-all">
              稍后提醒
            </button>
            <button class="px-4 py-2 bg-white text-blue-600 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all">
              立即更新
            </button>
          </template>
        </BannerVue>
        <div class="p-8">
          <h1 class="text-2xl font-bold mb-4">自定义操作按钮</h1>
          <p class="text-gray-600">这个横幅包含自定义的操作按钮。</p>
        </div>
      </div>
    `,
  }),
}

export const MinimalBanner = {
  args: {
    type: 'success',
    position: 'top',
    title: '',
    message: '操作成功完成！',
    closable: false,
    showIcon: false,
    showDefaultAction: false,
    sticky: false,
    zIndex: 1000,
  },
  render: (args) => ({
    components: { BannerVue },
    setup() {
      return { args }
    },
    template: `
      <div class="min-h-screen bg-gray-100">
        <BannerVue 
          :type="args.type"
          :position="args.position"
          :title="args.title"
          :message="args.message"
          :closable="args.closable"
          :show-icon="args.showIcon"
          :show-default-action="args.showDefaultAction"
          :sticky="args.sticky"
          :z-index="args.zIndex"
        />
        <div class="p-8">
          <h1 class="text-2xl font-bold mb-4">简洁横幅</h1>
          <p class="text-gray-600">这是一个最简洁的横幅示例。</p>
        </div>
      </div>
    `,
  }),
} 