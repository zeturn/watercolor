import PopoverVue from '../src/components/Popover/Popover.vue'

export default {
  title: 'Components/Popover (Vue)',
  component: PopoverVue,
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    triggerText: { control: 'text' },
  },
}

export const Default = {
  args: {
    placement: 'bottom',
    triggerText: '更多信息',
  },
  render: (args) => ({
    components: { PopoverVue },
    setup() { return { args } },
    template: `
      <div class="p-20 text-center">
        <PopoverVue :placement="args.placement" :trigger-text="args.triggerText">
          <template #default>
            <p class="text-sm text-gray-700">这是弹出的内容，可以包含<strong>富文本</strong>或其他组件。</p>
          </template>
        </PopoverVue>
      </div>
    `,
  }),
} 