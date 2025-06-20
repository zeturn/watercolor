import FeatureVue from '../src/components/Feature/Feature.vue'

export default {
  title: 'Components/Feature',
  component: FeatureVue,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    icon: { control: 'text' },
    align: { control: { type: 'radio' }, options: ['left', 'center'] },
    reverse: { control: 'boolean' },
    bgColor: { control: 'color' },
    ctaLabel: { control: 'text' },
  },
}

const Template = (args) => ({
  components: { FeatureVue },
  setup() {
    return { args }
  },
  template: `<div class='p-8'><FeatureVue v-bind="args" /></div>`,
})

export const Basic = Template.bind({})
Basic.args = {
  title: '实时协作',
  description: '多人同时编辑，毫秒级同步',
  icon: '🚀',
}

export const Center = Template.bind({})
Center.args = {
  ...Basic.args,
  align: 'center',
  bgColor: '#fef3c7',
  ctaLabel: '了解更多',
}

export const Reversed = Template.bind({})
Reversed.args = {
  ...Basic.args,
  reverse: true,
} 