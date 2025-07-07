import CountdownVue from '../src/components/Countdown/Countdown.vue'
import { ref } from 'vue'

export default {
  title: 'Components/Countdown (Vue)',
  component: CountdownVue,
  tags: ['autodocs'],
  argTypes: {
    seconds: { control: { type: 'number', min: 1, step: 1 }, description: '初始倒计时秒数' },
    autoStart: { control: 'boolean', description: '是否自动开始' },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg', 'xl'], description: '尺寸' },
    fontSize: { control: 'text', description: '字体大小' },
    color: { control: { type: 'select' }, options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'], description: '颜色主题' },
    customColor: { control: 'color', description: '自定义颜色（优先级更高）' },
    warningTime: { control: { type: 'number', min: 1, step: 1 }, description: '触发警告色的剩余秒数' },
    onFinish: { action: 'finish' },
  },
}

const Template = (args) => ({
  components: { CountdownVue },
  setup() {
    return { args }
  },
  template: `<CountdownVue v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  seconds: 90,
  autoStart: true,
  size: 'md',
  fontSize: '24px',
  color: 'default',
}

export const CustomStyle = Template.bind({})
CustomStyle.args = {
  ...Default.args,
  fontSize: '3rem',
  customColor: '#3b82f6',
}

export const Restartable = () => ({
  components: { CountdownVue },
  setup() {
    const key = ref(0)
    const restart = () => {
      key.value += 1
    }
    return { key, restart }
  },
  template: `
    <div class="flex flex-col items-center gap-4">
      <CountdownVue :key="key" :seconds="10" font-size="2rem" />
      <button @click="restart" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">重新开始</button>
    </div>
  `,
}) 