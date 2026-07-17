import FeatureVue from '../src/components/Feature/Feature.vue'

export default {
  title: 'Components/Feature (Vue)',
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

export const WithImage = Template.bind({})
WithImage.args = {
  title: '图片支持',
  description: '除了图标，你还可以使用图片作为视觉元素。',
  icon: '<img src="https://via.placeholder.com/100" alt="placeholder" class="rounded-lg" />',
  ctaLabel: '查看示例',
}

export const MultipleFeatures = {
  render: () => ({
    components: { FeatureVue },
    template: `
      <div class="grid md:grid-cols-3 gap-8 p-8">
        <FeatureVue 
          title="安全可靠"
          description="企业级数据加密，保障您的数据安全。"
          icon="🛡️"
          align="center"
          bgColor="#f0f9ff"
        />
        <FeatureVue 
          title="跨平台支持"
          description="支持Web、iOS、Android等多端同步。"
          icon="💻"
          align="center"
          bgColor="#f0fdf4"
        />
        <FeatureVue 
          title="24/7 技术支持"
          description="随时为您解答任何疑问，提供专业支持。"
          icon="💬"
          align="center"
          bgColor="#faf5ff"
        />
      </div>
    `
  })
}
