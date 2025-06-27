import StatusVue from '../src/components/Status/Status.vue'

export default {
  title: 'Components/Status (Vue)',
  component: StatusVue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['default', 'success', 'error', 'warning', 'info', 'pending', 'processing', 'cancelled'],
      description: '状态类型',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '状态指示器尺寸',
    },
    showText: {
      control: 'boolean',
      description: '是否显示状态文本',
    },
    animated: {
      control: 'boolean',
      description: '是否启用动画效果',
    },
    animationType: {
      control: { type: 'select' },
      options: ['auto', 'pulse', 'spin', 'bounce', 'blink', 'shake', 'breathe', 'ripple', 'glow'],
      description: '动画类型（auto表示根据状态自动选择）',
    },
  },
}

export const VueDefault = {
  args: {
    status: 'default',
    size: 'md',
    showText: false,
    animated: false,
    animationType: 'auto',
  },
  render: (args) => ({
    components: { StatusVue },
    setup() {
      return { args }
    },
    template: `
      <StatusVue 
        :status="args.status"
        :size="args.size"
        :show-text="args.showText"
        :animated="args.animated"
        :animation-type="args.animationType"
      />
    `,
  }),
}

export const VueAllStatuses = {
  render: () => ({
    components: { StatusVue },
    template: `
      <div class="flex flex-wrap gap-4 items-center">
        <div class="flex items-center gap-2">
          <StatusVue status="default" />
          <span class="text-sm">默认</span>
        </div>
        <div class="flex items-center gap-2">
          <StatusVue status="success" />
          <span class="text-sm">成功</span>
        </div>
        <div class="flex items-center gap-2">
          <StatusVue status="error" />
          <span class="text-sm">失败</span>
        </div>
        <div class="flex items-center gap-2">
          <StatusVue status="warning" />
          <span class="text-sm">警告</span>
        </div>
        <div class="flex items-center gap-2">
          <StatusVue status="info" />
          <span class="text-sm">信息</span>
        </div>
        <div class="flex items-center gap-2">
          <StatusVue status="pending" />
          <span class="text-sm">等待中</span>
        </div>
        <div class="flex items-center gap-2">
          <StatusVue status="processing" />
          <span class="text-sm">进行中</span>
        </div>
        <div class="flex items-center gap-2">
          <StatusVue status="cancelled" />
          <span class="text-sm">已取消</span>
        </div>
      </div>
    `,
  }),
}

export const VueWithText = {
  render: () => ({
    components: { StatusVue },
    template: `
      <div class="flex flex-col gap-3">
        <StatusVue status="success" show-text />
        <StatusVue status="error" show-text />
        <StatusVue status="warning" show-text />
        <StatusVue status="info" show-text />
        <StatusVue status="pending" show-text />
        <StatusVue status="processing" show-text />
        <StatusVue status="cancelled" show-text />
      </div>
    `,
  }),
}

export const VueSizes = {
  render: () => ({
    components: { StatusVue },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4">
          <span class="w-12 text-sm">小:</span>
          <StatusVue size="sm" status="success" />
          <StatusVue size="sm" status="error" />
          <StatusVue size="sm" status="warning" />
          <StatusVue size="sm" status="info" />
        </div>
        <div class="flex items-center gap-4">
          <span class="w-12 text-sm">中:</span>
          <StatusVue size="md" status="success" />
          <StatusVue size="md" status="error" />
          <StatusVue size="md" status="warning" />
          <StatusVue size="md" status="info" />
        </div>
        <div class="flex items-center gap-4">
          <span class="w-12 text-sm">大:</span>
          <StatusVue size="lg" status="success" />
          <StatusVue size="lg" status="error" />
          <StatusVue size="lg" status="warning" />
          <StatusVue size="lg" status="info" />
        </div>
      </div>
    `,
  }),
}

export const VueAnimated = {
  render: () => ({
    components: { StatusVue },
    template: `
      <div class="flex flex-col gap-4">
        <h4 class="text-md font-semibold mb-2">自动动画（根据状态类型）</h4>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center gap-3">
            <StatusVue status="success" animated show-text />
            <span class="text-sm text-gray-600">成功 - 跳动</span>
          </div>
          <div class="flex items-center gap-3">
            <StatusVue status="error" animated show-text />
            <span class="text-sm text-gray-600">错误 - 震动</span>
          </div>
          <div class="flex items-center gap-3">
            <StatusVue status="warning" animated show-text />
            <span class="text-sm text-gray-600">警告 - 闪烁</span>
          </div>
          <div class="flex items-center gap-3">
            <StatusVue status="info" animated show-text />
            <span class="text-sm text-gray-600">信息 - 扩散</span>
          </div>
          <div class="flex items-center gap-3">
            <StatusVue status="pending" animated show-text />
            <span class="text-sm text-gray-600">等待中 - 脉冲</span>
          </div>
          <div class="flex items-center gap-3">
            <StatusVue status="processing" animated show-text />
            <span class="text-sm text-gray-600">进行中 - 旋转</span>
          </div>
          <div class="flex items-center gap-3">
            <StatusVue status="cancelled" animated show-text />
            <span class="text-sm text-gray-600">已取消 - 呼吸</span>
          </div>
          <div class="flex items-center gap-3">
            <StatusVue status="default" animated show-text />
            <span class="text-sm text-gray-600">默认 - 发光</span>
          </div>
        </div>
      </div>
    `,
  }),
}

export const VueCustomAnimations = {
  render: () => ({
    components: { StatusVue },
    template: `
      <div class="flex flex-col gap-4">
        <h4 class="text-md font-semibold mb-2">自定义动画类型</h4>
        <div class="grid grid-cols-3 gap-4">
          <div class="flex flex-col items-center gap-2">
            <StatusVue status="success" animated animation-type="pulse" />
            <span class="text-sm">脉冲动画</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <StatusVue status="success" animated animation-type="spin" />
            <span class="text-sm">旋转动画</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <StatusVue status="success" animated animation-type="bounce" />
            <span class="text-sm">跳动动画</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <StatusVue status="success" animated animation-type="blink" />
            <span class="text-sm">闪烁动画</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <StatusVue status="success" animated animation-type="shake" />
            <span class="text-sm">震动动画</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <StatusVue status="success" animated animation-type="breathe" />
            <span class="text-sm">呼吸动画</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <StatusVue status="success" animated animation-type="ripple" />
            <span class="text-sm">扩散动画</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <StatusVue status="success" animated animation-type="glow" />
            <span class="text-sm">发光动画</span>
          </div>
        </div>
      </div>
    `,
  }),
}

export const VueUseCase = {
  render: () => ({
    components: { StatusVue },
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold mb-4">实际应用场景</h3>
        
        <div class="space-y-3">
          <div class="flex items-center justify-between p-3 border rounded-lg">
            <span>用户注册</span>
            <StatusVue status="success" show-text />
          </div>
          
          <div class="flex items-center justify-between p-3 border rounded-lg">
            <span>邮件验证</span>
            <StatusVue status="pending" animated show-text />
          </div>
          
          <div class="flex items-center justify-between p-3 border rounded-lg">
            <span>文件上传</span>
            <StatusVue status="processing" animated show-text />
          </div>
          
          <div class="flex items-center justify-between p-3 border rounded-lg">
            <span>支付处理</span>
            <StatusVue status="error" show-text />
          </div>
          
          <div class="flex items-center justify-between p-3 border rounded-lg">
            <span>订单状态</span>
            <StatusVue status="cancelled" show-text />
          </div>
          
          <div class="flex items-center justify-between p-3 border rounded-lg">
            <span>系统警告</span>
            <StatusVue status="warning" show-text />
          </div>
        </div>
      </div>
    `,
  }),
} 