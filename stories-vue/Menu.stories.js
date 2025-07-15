import MenuVue from '../src/components/Menu/Menu.vue'
import { ref } from 'vue'

export default {
  title: 'Components/Menu (Vue)',
  component: MenuVue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: { type: 'number', min: 0, max: 24, step: 1 },
      description: '阴影深度',
    },
    className: {
      control: 'text',
      description: '额外的CSS类名',
    },
  },
}

const InlineTemplate = (args) => ({
  components: { MenuVue },
  setup() {
    const openSub = ref(false)
    const toggleSub = () => {
      openSub.value = !openSub.value
    }
    return { args, openSub, toggleSub }
  },
  template: `
    <div style="display:flex; height:380px;">
      <aside style="width:220px; background:var(--wc-bg-surface); border-right:1px solid var(--wc-border-color); padding:16px; box-sizing:border-box;">
        <MenuVue v-bind="args" :open="true" variant="inline">
          <a href="#dashboard" class="active">仪表盘</a>
          <a href="#projects">项目</a>
          <li :class="['has-submenu', { open: openSub }]" @click="toggleSub" style="list-style:none;">
            <a>设置</a>
            <ul>
              <li><a href="#settings/profile">个人资料</a></li>
              <li><a href="#settings/billing">账单</a></li>
            </ul>
          </li>
        </MenuVue>
      </aside>
      <div style="flex:1; padding:16px;">
        <h2 style="font-size:20px; font-weight:600;">内容区域</h2>
      </div>
    </div>
  `,
})

export const SidebarWithSubmenu = InlineTemplate.bind({})
SidebarWithSubmenu.args = {
  elevation: 0,
  variant: 'inline',
} 