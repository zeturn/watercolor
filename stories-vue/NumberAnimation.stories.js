import NumberAnimation from '../src/components/NumberAnimation/NumberAnimation.vue'

export default {
  title: 'Components/NumberAnimation',
  component: NumberAnimation,
  tags: ['autodocs'],
  argTypes: {
    from: { control: 'number' },
    to: { control: 'number' },
    duration: { control: { type: 'number', min: 500, step: 100 } },
    precision: { control: { type: 'number', min: 0, max: 4, step: 1 } },
    showSeparator: { control: 'boolean' },
    locale: { control: 'text' }
  }
}

export const Basic = {
  args: {
    from: 0,
    to: 12345,
    duration: 3000,
    precision: 0,
    showSeparator: true,
    active: true
  },
  render: (args) => ({
    components: { NumberAnimation },
    setup() {
      return { args }
    },
    template: `<NumberAnimation v-bind="args" style="font-size:32px; font-weight:bold;" />`
  })
} 