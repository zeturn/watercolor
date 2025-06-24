import MarqueeVue from '../src/components/Marquee/Marquee.vue'

export default {
  title: 'Components/Marquee',
  component: MarqueeVue,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: '滚动文本内容',
    },
    speed: {
      control: { type: 'number', min: 1, max: 200 },
      description: '滚动速度 (1-200)',
    },
    direction: {
      control: { type: 'select' },
      options: ['left', 'right', 'up', 'down'],
      description: '滚动方向',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled', 'gradient'],
      description: '外观变体',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: '组件尺寸',
    },
    pauseOnHover: {
      control: 'boolean',
      description: '鼠标悬停时暂停',
    },
    loop: {
      control: 'boolean',
      description: '无限循环',
    },
    showGradient: {
      control: 'boolean',
      description: '显示渐变遮罩',
    },
    showControls: {
      control: 'boolean',
      description: '显示控制按钮',
    },
    allowReverse: {
      control: 'boolean',
      description: '允许反向',
    },
    allowSpeedControl: {
      control: 'boolean',
      description: '允许速度控制',
    },
    autoStart: {
      control: 'boolean',
      description: '自动开始',
    },
    loading: {
      control: 'boolean',
      description: '加载状态',
    },
    height: {
      control: 'text',
      description: '组件高度',
    },
    backgroundColor: {
      control: 'color',
      description: '背景颜色',
    },
    textColor: {
      control: 'color',
      description: '文字颜色',
    },
    onStart: { action: 'start' },
    onPause: { action: 'pause' },
    onResume: { action: 'resume' },
    onComplete: { action: 'complete' },
    onDirectionChange: { action: 'direction-change' },
    onSpeedChange: { action: 'speed-change' },
  },
}

export const Default = {
  args: {
    text: '欢迎来到 Watercolor UI 组件库！这是一个现代化的 Vue 3 组件库。',
    speed: 50,
    direction: 'left',
    variant: 'default',
    size: 'md',
    pauseOnHover: false,
    loop: true,
    showGradient: true,
    showControls: false,
    allowReverse: true,
    allowSpeedControl: true,
    autoStart: true,
    loading: false,
    height: 'auto',
    backgroundColor: '',
    textColor: '',
  },
  render: (args) => ({
    components: { MarqueeVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full p-8">
        <div class="mb-4">
          <h3 class="text-lg font-semibold mb-2">基本滚动文本</h3>
          <p class="text-gray-600 text-sm">文本从右向左滚动的基本示例</p>
        </div>
        
        <MarqueeVue 
          :text="args.text"
          :speed="args.speed"
          :direction="args.direction"
          :variant="args.variant"
          :size="args.size"
          :pause-on-hover="args.pauseOnHover"
          :loop="args.loop"
          :show-gradient="args.showGradient"
          :show-controls="args.showControls"
          :allow-reverse="args.allowReverse"
          :allow-speed-control="args.allowSpeedControl"
          :auto-start="args.autoStart"
          :loading="args.loading"
          :height="args.height"
          :background-color="args.backgroundColor"
          :text-color="args.textColor"
          @start="args.onStart"
          @pause="args.onPause"
          @resume="args.onResume"
          @complete="args.onComplete"
          @direction-change="args.onDirectionChange"
          @speed-change="args.onSpeedChange"
        />
      </div>
    `,
  }),
}

export const NewsBar = {
  args: {
    text: '🔥 重要通知：系统维护将于今晚22:00-24:00进行，期间可能影响部分功能使用  |  💡 新功能上线：支持暗色模式和多语言切换  |  📢 活动预告：双十一大促即将开始，敬请期待！',
    speed: 60,
    direction: 'left',
    variant: 'filled',
    size: 'md',
    pauseOnHover: true,
    loop: true,
    showGradient: true,
    showControls: true,
    allowReverse: true,
    allowSpeedControl: true,
    autoStart: true,
    loading: false,
    height: '50px',
    backgroundColor: '#3b82f6',
    textColor: 'white',
  },
  render: (args) => ({
    components: { MarqueeVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full">
        <div class="p-4 bg-gray-50">
          <h3 class="text-lg font-semibold mb-2">新闻公告栏</h3>
          <p class="text-gray-600 text-sm mb-4">常用于网站顶部的重要通知滚动显示</p>
        </div>
        
        <MarqueeVue 
          :text="args.text"
          :speed="args.speed"
          :direction="args.direction"
          :variant="args.variant"
          :size="args.size"
          :pause-on-hover="args.pauseOnHover"
          :loop="args.loop"
          :show-gradient="args.showGradient"
          :show-controls="args.showControls"
          :allow-reverse="args.allowReverse"
          :allow-speed-control="args.allowSpeedControl"
          :auto-start="args.autoStart"
          :loading="args.loading"
          :height="args.height"
          :background-color="args.backgroundColor"
          :text-color="args.textColor"
          @start="args.onStart"
          @pause="args.onPause"
          @resume="args.onResume"
          @complete="args.onComplete"
          @direction-change="args.onDirectionChange"
          @speed-change="args.onSpeedChange"
        />
        
        <div class="p-4 bg-gray-50">
          <p class="text-sm text-gray-500">
            💡 提示：鼠标悬停可暂停滚动，点击控制按钮可以暂停/播放、改变方向和速度
          </p>
        </div>
      </div>
    `,
  }),
}

export const StockTicker = {
  args: {
    text: 'AAPL: $175.43 (+2.1%) | GOOGL: $142.56 (-0.8%) | TSLA: $248.87 (+5.2%) | MSFT: $338.11 (+1.4%) | AMZN: $145.98 (-1.2%)',
    speed: 40,
    direction: 'left',
    variant: 'outlined',
    size: 'sm',
    pauseOnHover: true,
    loop: true,
    showGradient: false,
    showControls: false,
    allowReverse: false,
    allowSpeedControl: false,
    autoStart: true,
    loading: false,
    height: '40px',
    backgroundColor: '#1f2937',
    textColor: '#10b981',
  },
  render: (args) => ({
    components: { MarqueeVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full">
        <div class="p-4 bg-gray-900 text-white">
          <h3 class="text-lg font-semibold mb-2">股票行情</h3>
          <p class="text-gray-300 text-sm mb-4">实时股价滚动显示</p>
        </div>
        
        <MarqueeVue 
          :text="args.text"
          :speed="args.speed"
          :direction="args.direction"
          :variant="args.variant"
          :size="args.size"
          :pause-on-hover="args.pauseOnHover"
          :loop="args.loop"
          :show-gradient="args.showGradient"
          :show-controls="args.showControls"
          :allow-reverse="args.allowReverse"
          :allow-speed-control="args.allowSpeedControl"
          :auto-start="args.autoStart"
          :loading="args.loading"
          :height="args.height"
          :background-color="args.backgroundColor"
          :text-color="args.textColor"
          @start="args.onStart"
          @pause="args.onPause"
          @resume="args.onResume"
          @complete="args.onComplete"
          @direction-change="args.onDirectionChange"
          @speed-change="args.onSpeedChange"
        />
      </div>
    `,
  }),
}

export const Directions = {
  render: () => ({
    components: { MarqueeVue },
    setup() {
      const text = 'Watercolor UI 组件库'
      return { text }
    },
    template: `
      <div class="w-full p-8 space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">不同滚动方向</h3>
          <p class="text-gray-600 text-sm mb-6">展示四个方向的滚动效果</p>
        </div>
        
        <div class="space-y-6">
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">向左滚动</h4>
            <MarqueeVue 
              :text="text + ' - 从右到左'"
              direction="left"
              variant="default"
              :speed="50"
            />
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">向右滚动</h4>
            <MarqueeVue 
              :text="text + ' - 从左到右'"
              direction="right"
              variant="outlined"
              :speed="50"
            />
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">向上滚动</h4>
            <MarqueeVue 
              :text="text + ' - 从下到上'"
              direction="up"
              variant="filled"
              :speed="40"
              height="60px"
            />
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">向下滚动</h4>
            <MarqueeVue 
              :text="text + ' - 从上到下'"
              direction="down"
              variant="gradient"
              :speed="40"
              height="60px"
            />
          </div>
        </div>
      </div>
    `,
  }),
}

export const Variants = {
  render: () => ({
    components: { MarqueeVue },
    setup() {
      const text = 'Watercolor UI 设计系统'
      return { text }
    },
    template: `
      <div class="w-full p-8 space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">外观变体</h3>
          <p class="text-gray-600 text-sm mb-6">不同的视觉样式选择</p>
        </div>
        
        <div class="space-y-4">
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">默认样式</h4>
            <MarqueeVue 
              :text="text"
              variant="default"
              :speed="50"
            />
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">边框样式</h4>
            <MarqueeVue 
              :text="text"
              variant="outlined"
              :speed="50"
            />
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">填充样式</h4>
            <MarqueeVue 
              :text="text"
              variant="filled"
              :speed="50"
            />
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">渐变样式</h4>
            <MarqueeVue 
              :text="text"
              variant="gradient"
              :speed="50"
            />
          </div>
        </div>
      </div>
    `,
  }),
}

export const Sizes = {
  render: () => ({
    components: { MarqueeVue },
    setup() {
      const text = 'Watercolor UI'
      return { text }
    },
    template: `
      <div class="w-full p-8 space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">尺寸变体</h3>
          <p class="text-gray-600 text-sm mb-6">不同的组件尺寸</p>
        </div>
        
        <div class="space-y-4">
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">小尺寸</h4>
            <MarqueeVue 
              :text="text"
              size="sm"
              variant="outlined"
              :speed="50"
            />
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">中等尺寸</h4>
            <MarqueeVue 
              :text="text"
              size="md"
              variant="outlined"
              :speed="50"
            />
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">大尺寸</h4>
            <MarqueeVue 
              :text="text"
              size="lg"
              variant="outlined"
              :speed="50"
            />
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">特大尺寸</h4>
            <MarqueeVue 
              :text="text"
              size="xl"
              variant="outlined"
              :speed="50"
            />
          </div>
        </div>
      </div>
    `,
  }),
}

export const Speeds = {
  render: () => ({
    components: { MarqueeVue },
    setup() {
      const text = 'Watercolor UI 滚动速度演示'
      return { text }
    },
    template: `
      <div class="w-full p-8 space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">滚动速度</h3>
          <p class="text-gray-600 text-sm mb-6">不同的滚动速度效果</p>
        </div>
        
        <div class="space-y-4">
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">慢速 (25)</h4>
            <MarqueeVue 
              :text="text + ' - 慢速滚动'"
              :speed="25"
              variant="filled"
            />
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">正常 (50)</h4>
            <MarqueeVue 
              :text="text + ' - 正常速度'"
              :speed="50"
              variant="filled"
            />
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">快速 (100)</h4>
            <MarqueeVue 
              :text="text + ' - 快速滚动'"
              :speed="100"
              variant="filled"
            />
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">极速 (200)</h4>
            <MarqueeVue 
              :text="text + ' - 极速滚动'"
              :speed="200"
              variant="filled"
            />
          </div>
        </div>
      </div>
    `,
  }),
}

export const WithControls = {
  args: {
    text: '🎵 正在播放：Watercolor UI 主题曲 - 现代化的Vue组件库体验',
    speed: 60,
    direction: 'left',
    variant: 'gradient',
    size: 'lg',
    pauseOnHover: true,
    loop: true,
    showGradient: true,
    showControls: true,
    allowReverse: true,
    allowSpeedControl: true,
    autoStart: true,
    loading: false,
    height: '60px',
    backgroundColor: '',
    textColor: '',
  },
  render: (args) => ({
    components: { MarqueeVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full p-8">
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">交互式控制</h3>
          <p class="text-gray-600 text-sm">
            鼠标悬停显示控制按钮：暂停/播放、改变方向、调整速度
          </p>
        </div>
        
        <MarqueeVue 
          :text="args.text"
          :speed="args.speed"
          :direction="args.direction"
          :variant="args.variant"
          :size="args.size"
          :pause-on-hover="args.pauseOnHover"
          :loop="args.loop"
          :show-gradient="args.showGradient"
          :show-controls="args.showControls"
          :allow-reverse="args.allowReverse"
          :allow-speed-control="args.allowSpeedControl"
          :auto-start="args.autoStart"
          :loading="args.loading"
          :height="args.height"
          :background-color="args.backgroundColor"
          :text-color="args.textColor"
          @start="args.onStart"
          @pause="args.onPause"
          @resume="args.onResume"
          @complete="args.onComplete"
          @direction-change="args.onDirectionChange"
          @speed-change="args.onSpeedChange"
        />
        
        <div class="mt-4 p-3 bg-blue-50 rounded-lg">
          <p class="text-sm text-blue-700">
            ✨ 悬停在组件上查看控制按钮，体验交互功能
          </p>
        </div>
      </div>
    `,
  }),
}

export const CustomContent = {
  render: () => ({
    components: { MarqueeVue },
    setup() {
      return {}
    },
    template: `
      <div class="w-full p-8 space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">自定义内容</h3>
          <p class="text-gray-600 text-sm mb-6">使用插槽可以添加任何自定义内容</p>
        </div>
        
        <div class="space-y-6">
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">图标和文字组合</h4>
            <MarqueeVue 
              variant="outlined"
              :speed="50"
              pause-on-hover
            >
              <div class="flex items-center space-x-4">
                <span class="flex items-center space-x-2">
                  <span class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">🔥</span>
                  <span>热门推荐</span>
                </span>
                <span class="text-gray-400">|</span>
                <span class="flex items-center space-x-2">
                  <span class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">📢</span>
                  <span>最新公告</span>
                </span>
                <span class="text-gray-400">|</span>
                <span class="flex items-center space-x-2">
                  <span class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✅</span>
                  <span>系统正常</span>
                </span>
              </div>
            </MarqueeVue>
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-2">产品卡片滚动</h4>
            <MarqueeVue 
              variant="default"
              :speed="40"
              height="120px"
              pause-on-hover
            >
              <div class="flex items-center space-x-6">
                <div class="flex-shrink-0 w-24 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span class="text-blue-600 font-semibold">产品A</span>
                </div>
                <div class="flex-shrink-0 w-24 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                  <span class="text-green-600 font-semibold">产品B</span>
                </div>
                <div class="flex-shrink-0 w-24 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span class="text-purple-600 font-semibold">产品C</span>
                </div>
                <div class="flex-shrink-0 w-24 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span class="text-orange-600 font-semibold">产品D</span>
                </div>
              </div>
            </MarqueeVue>
          </div>
        </div>
      </div>
    `,
  }),
}

export const LoadingState = {
  args: {
    text: '加载中的滚动文本...',
    speed: 50,
    direction: 'left',
    variant: 'default',
    size: 'md',
    pauseOnHover: false,
    loop: true,
    showGradient: true,
    showControls: false,
    allowReverse: true,
    allowSpeedControl: true,
    autoStart: true,
    loading: true,
    height: 'auto',
    backgroundColor: '',
    textColor: '',
  },
  render: (args) => ({
    components: { MarqueeVue },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full p-8">
        <div class="mb-4">
          <h3 class="text-lg font-semibold mb-2">加载状态</h3>
          <p class="text-gray-600 text-sm">组件处于加载状态时的显示效果</p>
        </div>
        
        <MarqueeVue 
          :text="args.text"
          :speed="args.speed"
          :direction="args.direction"
          :variant="args.variant"
          :size="args.size"
          :pause-on-hover="args.pauseOnHover"
          :loop="args.loop"
          :show-gradient="args.showGradient"
          :show-controls="args.showControls"
          :allow-reverse="args.allowReverse"
          :allow-speed-control="args.allowSpeedControl"
          :auto-start="args.autoStart"
          :loading="args.loading"
          :height="args.height"
          :background-color="args.backgroundColor"
          :text-color="args.textColor"
          @start="args.onStart"
          @pause="args.onPause"
          @resume="args.onResume"
          @complete="args.onComplete"
          @direction-change="args.onDirectionChange"
          @speed-change="args.onSpeedChange"
        />
      </div>
    `,
  }),
} 