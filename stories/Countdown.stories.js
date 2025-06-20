import Countdown from '../src/components/Countdown/Countdown.vue'

export default {
  title: 'Components/Countdown',
  component: Countdown,
  tags: ['autodocs'],
  argTypes: {
    seconds: {
      control: { type: 'number', min: 1, step: 1 },
      description: '初始倒计时秒数'
    },
    fontSize: {
      control: 'text',
      description: '字体大小'
    },
    color: {
      control: 'color',
      description: '文字颜色'
    }
  }
}

export const Basic = {
  args: {
    seconds: 90,
    fontSize: '24px',
    color: '#ff4d4f'
  },
  render: (args) => ({
    components: { Countdown },
    setup() {
      return { args }
    },
    template: `<Countdown v-bind="args" />`
  })
} 