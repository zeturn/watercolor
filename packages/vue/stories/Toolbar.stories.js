import ToolbarVue from '../src/components/Toolbar/Toolbar.vue'
import ButtonVue from '../src/components/Button/Button.vue'

export default {
  title: 'Components/Toolbar (vue)',
  component: ToolbarVue,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['regular', 'dense'],
      description: '高度变体',
    },
    disableGutters: {
      control: 'boolean',
      description: '禁用左右内边距',
    },
  },
}

const Template = (args) => ({
  components: { ToolbarVue, ButtonVue },
  setup() {
    return { args }
  },
  template: `
    <ToolbarVue v-bind="args">
      <div class="flex-1">标题</div>
      <ButtonVue size="sm" variant="primary">操作</ButtonVue>
    </ToolbarVue>
  `,
})

export const Default = Template.bind({})
Default.args = {
  variant: 'regular',
  disableGutters: false,
} 