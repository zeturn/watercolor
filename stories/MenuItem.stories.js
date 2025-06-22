import MenuItem from '../src/components/MenuItem/MenuItem.vue'

export default {
  title: 'Navigation/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'MenuItem 组件用于创建菜单项，支持禁用、密集模式、分割线和选中状态。'
      }
    }
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用菜单项'
    },
    dense: {
      control: { type: 'boolean' },
      description: '是否使用密集模式（更小的内边距）'
    },
    divider: {
      control: { type: 'boolean' },
      description: '是否显示下边框分割线'
    },
    selected: {
      control: { type: 'boolean' },
      description: '是否为选中状态'
    }
  }
}

export const Default = {
  args: {
    disabled: false,
    dense: false,
    divider: false,
    selected: false
  },
  render: (args) => ({
    components: { MenuItem },
    setup() {
      const handleClick = () => {
        alert('菜单项被点击')
      }
      return { args, handleClick }
    },
    template: `
      <div class="w-64 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-2">
        <MenuItem v-bind="args" @click="handleClick">
          默认菜单项
        </MenuItem>
      </div>
    `
  })
}

export const WithIcon = {
  args: {
    disabled: false,
    dense: false,
    divider: false,
    selected: false
  },
  render: (args) => ({
    components: { MenuItem },
    setup() {
      const handleClick = () => {
        alert('菜单项被点击')
      }
      return { args, handleClick }
    },
    template: `
      <div class="w-64 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-2">
        <MenuItem v-bind="args" @click="handleClick">
          <template #icon>
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
            </svg>
          </template>
          带图标的菜单项
        </MenuItem>
      </div>
    `
  })
}

export const States = {
  render: () => ({
    components: { MenuItem },
    setup() {
      const handleClick = () => {
        alert('菜单项被点击')
      }
      return { handleClick }
    },
    template: `
      <div class="w-64 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-2 space-y-1">
        <MenuItem @click="handleClick">普通状态</MenuItem>
        <MenuItem selected @click="handleClick">选中状态</MenuItem>
        <MenuItem disabled>禁用状态</MenuItem>
        <MenuItem dense @click="handleClick">密集模式</MenuItem>
        <MenuItem divider @click="handleClick">带分割线</MenuItem>
      </div>
    `
  })
}

export const WithSuffix = {
  render: () => ({
    components: { MenuItem },
    setup() {
      const handleClick = () => {
        alert('菜单项被点击')
      }
      return { handleClick }
    },
    template: `
      <div class="w-64 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-2">
        <MenuItem @click="handleClick">
          <template #icon>
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
          </template>
          带后缀的菜单项
          <template #suffix>
            <span class="text-xs text-neutral-500">Ctrl+S</span>
          </template>
        </MenuItem>
      </div>
    `
  })
} 