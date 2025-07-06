import ProgressVue from '../src/components/Progress/Progress.vue'

export default {
  title: 'Components/Progress',
  component: ProgressVue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: '进度值（0-100）',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink'],
      description: '进度条颜色',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '进度条尺寸',
    },
    showPercent: {
      control: 'boolean',
      description: '显示百分比',
    },
    animated: {
      control: 'boolean',
      description: '动画效果',
    },
    label: {
      control: 'text',
      description: '标签文本',
    },
  },
}

export const VueDefault = {
  args: {
    value: 65,
    color: 'primary',
    size: 'md',
    showPercent: true,
    animated: false,
    label: '完成进度',
  },
  render: (args) => ({
    components: { ProgressVue },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 400px;">
        <ProgressVue 
          :value="args.value"
          :color="args.color"
          :size="args.size"
          :show-percent="args.showPercent"
          :animated="args.animated"
          :label="args.label"
        />
      </div>
    `,
  }),
}

export const VueColors = {
  render: () => ({
    components: { ProgressVue },
    template: `
      <div style="width: 400px; display:flex; flex-direction:column; gap:1rem;">
        <ProgressVue :value="75" color="primary" label="主色调" show-percent />
        <ProgressVue :value="60" color="success" label="成功色" show-percent />
        <ProgressVue :value="45" color="warning" label="警告色" show-percent />
        <ProgressVue :value="30" color="error" label="错误色" show-percent />
        <ProgressVue :value="85" color="purple" label="紫色" show-percent />
        <ProgressVue :value="70" color="orange" label="橙色" show-percent />
        <ProgressVue :value="55" color="cyan" label="青色" show-percent />
        <ProgressVue :value="40" color="pink" label="粉色" show-percent />
      </div>
    `,
  }),
}

export const VueSizes = {
  render: () => ({
    components: { ProgressVue },
    template: `
      <div style="width: 400px; display:flex; flex-direction:column; gap:1rem;">
        <ProgressVue :value="65" size="sm" label="小尺寸" show-percent />
        <ProgressVue :value="65" size="md" label="中尺寸" show-percent />
        <ProgressVue :value="65" size="lg" label="大尺寸" show-percent />
      </div>
    `,
  }),
}

export const VueAnimated = {
  render: () => ({
    components: { ProgressVue },
    template: `
      <div style="width: 400px; display:flex; flex-direction:column; gap:1rem;">
        <ProgressVue :value="45" color="primary" label="正在加载..." animated show-percent />
        <ProgressVue :value="75" color="success" label="上传中..." animated show-percent />
        <ProgressVue :value="30" color="warning" label="处理中..." animated show-percent />
      </div>
    `,
  }),
} 