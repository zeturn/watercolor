import TabsVue from '../src/components/Tabs/Tabs.vue'
import { ref } from 'vue'

export default {
  title: 'Components/Tabs',
  component: TabsVue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'pills', 'underline'],
      description: '标签页样式',
    },
  },
}

export const VueDefault = {
  args: {
    variant: 'default',
  },
  render: (args) => ({
    components: { TabsVue },
    setup() {
      const activeTab = ref(0)
      const tabs = [
        { title: '主页', key: 'home' },
        { title: '关于', key: 'about' },
        { title: '服务', key: 'services' },
        { title: '联系', key: 'contact' }
      ]
      return { args, activeTab, tabs }
    },
    template: `
      <div class="w-96">
        <TabsVue 
          v-model="activeTab" 
          :tabs="tabs" 
          :variant="args.variant"
        >
          <template #default="{ activeIndex }">
            <div class="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl mt-4">
              <div v-if="activeIndex === 0">
                <h3 class="text-lg font-semibold mb-2">主页内容</h3>
                <p class="text-neutral-600 dark:text-neutral-400">欢迎来到我们的网站主页</p>
              </div>
              <div v-else-if="activeIndex === 1">
                <h3 class="text-lg font-semibold mb-2">关于我们</h3>
                <p class="text-neutral-600 dark:text-neutral-400">了解我们公司的历史和使命</p>
              </div>
              <div v-else-if="activeIndex === 2">
                <h3 class="text-lg font-semibold mb-2">我们的服务</h3>
                <p class="text-neutral-600 dark:text-neutral-400">查看我们提供的各种服务</p>
              </div>
              <div v-else>
                <h3 class="text-lg font-semibold mb-2">联系我们</h3>
                <p class="text-neutral-600 dark:text-neutral-400">获取联系方式和地址信息</p>
              </div>
            </div>
          </template>
        </TabsVue>
      </div>
    `,
  }),
}

export const VueVariants = {
  render: () => ({
    components: { TabsVue },
    setup() {
      const activeTab1 = ref(0)
      const activeTab2 = ref(1)
      const activeTab3 = ref(2)
      const tabs = [
        { title: '选项1', key: 'tab1' },
        { title: '选项2', key: 'tab2' },
        { title: '选项3', key: 'tab3' }
      ]
      return { activeTab1, activeTab2, activeTab3, tabs }
    },
    template: `
      <div class="space-y-8 w-96">
        <div>
          <h3 class="text-lg font-medium mb-4">默认样式</h3>
          <TabsVue v-model="activeTab1" :tabs="tabs" variant="default">
            <template #default="{ activeIndex }">
              <div class="p-4 bg-neutral-50 rounded-xl mt-4">
                <p>默认样式内容 {{ activeIndex + 1 }}</p>
              </div>
            </template>
          </TabsVue>
        </div>
        
        <div>
          <h3 class="text-lg font-medium mb-4">药丸样式</h3>
          <TabsVue v-model="activeTab2" :tabs="tabs" variant="pills">
            <template #default="{ activeIndex }">
              <div class="p-4 bg-neutral-50 rounded-xl mt-4">
                <p>药丸样式内容 {{ activeIndex + 1 }}</p>
              </div>
            </template>
          </TabsVue>
        </div>
        
        <div>
          <h3 class="text-lg font-medium mb-4">下划线样式</h3>
          <TabsVue v-model="activeTab3" :tabs="tabs" variant="underline">
            <template #default="{ activeIndex }">
              <div class="p-4 bg-neutral-50 rounded-xl mt-4">
                <p>下划线样式内容 {{ activeIndex + 1 }}</p>
              </div>
            </template>
          </TabsVue>
        </div>
      </div>
    `,
  }),
}

export const VueWithDisabled = {
  render: () => ({
    components: { TabsVue },
    setup() {
      const activeTab = ref(0)
      const tabs = [
        { title: '可用', key: 'enabled' },
        { title: '禁用', key: 'disabled', disabled: true },
        { title: '可用2', key: 'enabled2' },
        { title: '禁用2', key: 'disabled2', disabled: true }
      ]
      return { activeTab, tabs }
    },
    template: `
      <div class="w-96">
        <TabsVue v-model="activeTab" :tabs="tabs" variant="default">
          <template #default="{ activeIndex }">
            <div class="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl mt-4">
              <p>当前激活标签页: {{ activeIndex + 1 }}</p>
            </div>
          </template>
        </TabsVue>
      </div>
    `,
  }),
} 