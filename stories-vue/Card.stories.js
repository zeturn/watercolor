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
      options: ['filled', 'outlined', 'minimal', 'elevated'],
      description: '卡片变体样式',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '颜色主题',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '尺寸大小',
    },
    interactive: {
      control: 'boolean',
      description: '是否启用交互效果（hover动画）',
    },
    noBorder: {
      control: 'boolean',
      description: '是否无边框（默认无边框）',
    },
  },
}

export const Default = {
  args: {
    title: '卡片标题',
    variant: 'filled',
    color: 'default',
    size: 'medium',
    interactive: true,
    noBorder: true,
  },
  render: (args) => ({
    components: { CardVue },
    setup() {
      return { args }
    },
    template: `
      <div class="wc-w-96">
        <CardVue 
          :title="args.title"
          :variant="args.variant"
          :color="args.color"
          :size="args.size"
          :interactive="args.interactive"
          :no-border="args.noBorder"
        >
          <p class="wc-opacity-80">
            这是一个简洁现代的卡片组件，默认无边框无阴影的设计。
            浅灰色背景，hover时颜色会变深，并带有轻微的上移动画效果。
          </p>
        </CardVue>
      </div>
    `,
  }),
}

export const Colors = {
  render: () => ({
    components: { CardVue },
    template: `
      <div class="wc-grid wc-grid-cols-1 wc-md-grid-cols-2 wc-gap-6 wc-max-w-4xl">
        <CardVue title="默认色（灰色）" color="default">
          <p class="wc-opacity-80">
            这是默认的浅灰色卡片，简洁清爽的无边框设计。
          </p>
        </CardVue>
        
        <CardVue title="主题色（蓝色）" color="primary">
          <p class="wc-opacity-80">
            使用主题蓝色的卡片，适合重要信息展示。
          </p>
        </CardVue>
        
        <CardVue title="成功色（绿色）" color="success">
          <p class="wc-opacity-80">
            成功状态的绿色卡片，适合显示成功信息。
          </p>
        </CardVue>
        
        <CardVue title="警告色（橙色）" color="warning">
          <p class="wc-opacity-80">
            警告状态的橙色卡片，用于提醒用户注意。
          </p>
        </CardVue>
        
        <CardVue title="错误色（红色）" color="error">
          <p class="wc-opacity-80">
            错误状态的红色卡片，用于显示错误信息。
          </p>
        </CardVue>
        
        <CardVue title="信息色（青色）" color="info">
          <p class="wc-opacity-80">
            信息提示的青色卡片，用于一般信息展示。
          </p>
        </CardVue>
      </div>
    `,
  }),
}

export const Variants = {
  render: () => ({
    components: { CardVue },
    template: `
      <div class="wc-space-y-6 wc-max-w-2xl">
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">填充样式（默认）</h3>
          <CardVue title="填充样式卡片" variant="filled">
            <p class="wc-opacity-80">
              这是默认的填充样式，浅灰色背景，无边框无阴影。
            </p>
          </CardVue>
        </div>
        
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">边框样式</h3>
          <CardVue title="边框样式卡片" variant="outlined">
            <p class="wc-opacity-80">
              透明背景，带有较粗的边框，hover时显示浅色背景。
            </p>
          </CardVue>
        </div>
        
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">简约样式</h3>
          <CardVue title="简约样式卡片" variant="minimal">
            <p class="wc-opacity-80">
              最简洁的样式，无边框，透明背景，内边距较小。
            </p>
          </CardVue>
        </div>
        
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">立体样式</h3>
          <CardVue title="立体样式卡片" variant="elevated">
            <p class="wc-opacity-80">
              带有阴影效果的立体样式，这是唯一有阴影的变体。
            </p>
          </CardVue>
        </div>
      </div>
    `,
  }),
}

export const Sizes = {
  render: () => ({
    components: { CardVue },
    template: `
      <div class="wc-space-y-6 wc-max-w-2xl">
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">小尺寸</h3>
          <CardVue title="小卡片" size="small">
            <p class="wc-opacity-80">内边距较小的紧凑卡片。</p>
          </CardVue>
        </div>
        
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">中等尺寸（默认）</h3>
          <CardVue title="中等卡片" size="medium">
            <p class="wc-opacity-80">标准尺寸的卡片，平衡美观与空间利用。</p>
          </CardVue>
        </div>
        
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">大尺寸</h3>
          <CardVue title="大卡片" size="large">
            <p class="wc-opacity-80">内边距较大的宽松卡片，适合重要内容展示。</p>
          </CardVue>
        </div>
      </div>
    `,
  }),
}

export const Interactive = {
  render: () => ({
    components: { CardVue },
    template: `
      <div class="wc-grid wc-grid-cols-1 wc-md-grid-cols-2 wc-gap-6 wc-max-w-4xl">
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">启用交互效果（默认）</h3>
          <CardVue title="交互卡片" :interactive="true" color="primary">
            <p class="wc-opacity-80">
              鼠标悬停时会有背景色变化和上移动画效果。
            </p>
          </CardVue>
        </div>
        
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-3">禁用交互效果</h3>
          <CardVue title="静态卡片" :interactive="false" color="success">
            <p class="wc-opacity-80">
              没有hover效果的静态卡片。
            </p>
          </CardVue>
        </div>
      </div>
    `,
  }),
}

export const WithContent = {
  render: () => ({
    components: { CardVue, ButtonVue },
    template: `
      <div class="wc-w-96">
        <CardVue title="用户资料" color="primary">
          <div class="wc-space-y-4">
            <div class="wc-flex wc-items-center wc-space-x-3">
              <div class="wc-w-12 wc-h-12 wc-bg-white/20 wc-rounded-full wc-flex wc-items-center wc-justify-center">
                <span class="wc-font-semibold">张三</span>
              </div>
              <div>
                <h4 class="wc-font-medium">张三</h4>
                <p class="wc-text-sm wc-opacity-75">前端工程师</p>
              </div>
            </div>
            
            <div class="wc-space-y-2">
              <div class="wc-flex wc-justify-between wc-text-sm">
                <span class="wc-opacity-75">邮箱</span>
                <span>zhangsan@example.com</span>
              </div>
              <div class="wc-flex wc-justify-between wc-text-sm">
                <span class="wc-opacity-75">部门</span>
                <span>技术部</span>
              </div>
            </div>
          </div>
          
          <template #footer>
            <div class="wc-flex wc-justify-end wc-space-x-2">
              <ButtonVue variant="secondary" size="sm">取消</ButtonVue>
              <ButtonVue variant="filled" size="sm">编辑</ButtonVue>
            </div>
          </template>
        </CardVue>
      </div>
    `,
  }),
}

export const ColoredVariants = {
  render: () => ({
    components: { CardVue },
    template: `
      <div class="wc-space-y-8 wc-max-w-2xl">
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-4">成功主题 - 不同变体</h3>
          <div class="wc-space-y-4">
            <CardVue title="填充样式" color="success" variant="filled">
              <p class="wc-opacity-80">成功色的填充样式卡片。</p>
            </CardVue>
            <CardVue title="边框样式" color="success" variant="outlined">
              <p class="wc-opacity-80">成功色的边框样式卡片。</p>
            </CardVue>
            <CardVue title="立体样式" color="success" variant="elevated">
              <p class="wc-opacity-80">成功色的立体样式卡片。</p>
            </CardVue>
          </div>
        </div>
        
        <div>
          <h3 class="wc-text-lg wc-font-semibold wc-mb-4">警告主题 - 不同尺寸</h3>
          <div class="wc-space-y-4">
            <CardVue title="小卡片" color="warning" size="small">
              <p class="wc-opacity-80">警告色的小尺寸卡片。</p>
            </CardVue>
            <CardVue title="中等卡片" color="warning" size="medium">
              <p class="wc-opacity-80">警告色的中等尺寸卡片。</p>
            </CardVue>
            <CardVue title="大卡片" color="warning" size="large">
              <p class="wc-opacity-80">警告色的大尺寸卡片。</p>
            </CardVue>
          </div>
        </div>
      </div>
    `,
  }),
}

// 保持向后兼容
export const VueDefault = Default 