import Paradox from '../src/components/Paradox/Paradox.vue'

export default {
  title: 'Components/Paradox',
  component: Paradox,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text', description: '显示文本' },
    tooltip: { control: 'text', description: '悬停提示' }
  }
}

export const Basic = {
  args: {
    content: '这句话是假。',
    tooltip: '若此句为真，则为假；若此句为假，则为真。'
  },
  render: (args) => ({
    components: { Paradox },
    setup() { return { args } },
    template: `<Paradox v-bind="args" />`
  })
} 