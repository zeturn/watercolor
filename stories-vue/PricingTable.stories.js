import PricingTableVue from '../src/components/PricingTable/PricingTable.vue'

export default {
  title: 'Components/PricingTable (Vue)',
  component: PricingTableVue,
  tags: ['autodocs'],
  argTypes: { columns: { control: 'number' } },
}

const plans = [
  { name: '基础', price: '¥0', features: ['1 项目', '社区支持'] },
  { name: '专业', price: '¥99/月', features: ['无限项目', '优先支持'], popular: true },
  { name: '企业', price: '联系我们', features: ['定制方案', '专属顾问'] },
]

export const Basic = {
  args: { plans, columns: 3 },
  render: (args) => ({
    components: { PricingTableVue },
    setup() { return { args } },
    template: `<div class="p-8"><PricingTableVue v-bind="args" /></div>`,
  }),
} 