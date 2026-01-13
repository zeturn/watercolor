import AppBarVue from '../src/components/AppBar/AppBar.vue'
import MenuVue from '../src/components/Menu/Menu.vue'

export default {
  title: 'Components/AppBar (Vue)',
  component: AppBarVue,
  tags: ['autodocs'],
}

const sampleItems = [
  { label: '选项 1' },
  { label: '选项 2' },
  { label: '选项 3' },
]

export const Navbar = {
  render: () => ({
    components: { AppBarVue, MenuVue },
    setup() {
      return { sampleItems }
    },
    template: `
      <AppBarVue position="static" color="primary" style="padding:0 16px;">
        <div style="display: flex; gap: 16px;">
          <MenuVue trigger-text="菜单一" :items="sampleItems" />
          <MenuVue trigger-text="菜单二" :items="sampleItems" />
          <MenuVue trigger-text="菜单三" :items="sampleItems" />
        </div>
      </AppBarVue>
    `,
  }),
} 