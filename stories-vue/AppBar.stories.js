import AppBarVue from '../src/components/AppBar/AppBar.vue'
import DropdownVue from '../src/components/Dropdown/Dropdown.vue'

export default {
  title: 'Components/AppBar',
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
    components: { AppBarVue, DropdownVue },
    setup() {
      return { sampleItems }
    },
    template: `
      <AppBarVue position="static" color="primary" style="padding:0 16px;">
        <div class="flex gap-6">
          <DropdownVue trigger-text="菜单一" :items="sampleItems" />
          <DropdownVue trigger-text="菜单二" :items="sampleItems" />
          <DropdownVue trigger-text="菜单三" :items="sampleItems" />
        </div>
      </AppBarVue>
    `,
  }),
} 