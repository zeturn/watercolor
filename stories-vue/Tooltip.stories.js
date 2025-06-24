import TooltipVue from '../src/components/Tooltip/Tooltip.vue'
import ButtonVue from '../src/components/Button/Button.vue'

export default {
  title: 'Components/Tooltip',
  component: TooltipVue,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
}

const Template = (args) => ({
  components: { TooltipVue, ButtonVue },
  setup() {
    return { args }
  },
  template: `
    <TooltipVue v-bind="args">
      <ButtonVue variant="primary">悬停查看</ButtonVue>
    </TooltipVue>
  `,
})

export const Default = Template.bind({})
Default.args = {
  text: '这是提示文本',
  placement: 'top',
} 