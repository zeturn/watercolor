import { ref } from 'vue'
import SlideOverVue from '../src/components/SlideOver/SlideOver.vue'

export default {
  title: 'Components/SlideOver',
  component: SlideOverVue,
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'select', options: ['left', 'right'] },
    width: { control: 'text' },
  },
}

export const Basic = {
  args: { placement: 'right', width: '400px' },
  render: (args) => ({
    components: { SlideOverVue },
    setup() {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <div class="p-8">
        <button class="px-4 py-2 bg-blue-600 text-white rounded" @click="open = true">打开面板</button>
        <SlideOverVue v-model="open" :placement="args.placement" :width="args.width">
          <template #header>
            <h3 class="text-lg font-semibold">侧边栏标题</h3>
          </template>
          <p class="text-sm text-gray-700 mb-4">这里可以放任何内容，例如表单、信息等。</p>
          <template #footer>
            <button class="px-4 py-2 bg-gray-200 rounded" @click="open=false">关闭</button>
          </template>
        </SlideOverVue>
      </div>
    `,
  }),
} 