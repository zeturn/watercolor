import Toolbar from '../src/components/Toolbar/Toolbar.vue'
import AppBar from '../src/components/AppBar/AppBar.vue'
import Button from '../src/components/Button/Button.vue'

export default {
  title: 'Navigation/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Toolbar 组件用于创建工具栏，通常与 AppBar 组件一起使用，支持常规和密集两种变体。'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['regular', 'dense'],
      description: 'Toolbar 的变体，影响高度和内边距'
    },
    disableGutters: {
      control: { type: 'boolean' },
      description: '是否禁用水平内边距'
    }
  }
}

export const Default = {
  args: {
    variant: 'regular',
    disableGutters: false
  },
  render: (args) => ({
    components: { Toolbar, Button },
    setup() {
      return { args }
    },
    template: `
      <div class="bg-primary-500 text-white">
        <Toolbar v-bind="args">
          <div class="flex-1">
            <h1 class="text-xl font-semibold">应用标题</h1>
          </div>
          <Button variant="text" color="inherit">
            登录
          </Button>
        </Toolbar>
      </div>
    `
  })
}

export const Dense = {
  args: {
    variant: 'dense',
    disableGutters: false
  },
  render: (args) => ({
    components: { Toolbar, Button },
    setup() {
      return { args }
    },
    template: `
      <div class="bg-secondary-500 text-white">
        <Toolbar v-bind="args">
          <div class="flex-1">
            <h1 class="text-lg font-semibold">密集工具栏</h1>
          </div>
          <Button variant="text" color="inherit" size="small">
            操作
          </Button>
        </Toolbar>
      </div>
    `
  })
}

export const WithoutGutters = {
  args: {
    variant: 'regular',
    disableGutters: true
  },
  render: (args) => ({
    components: { Toolbar, Button },
    setup() {
      return { args }
    },
    template: `
      <div class="bg-neutral-800 text-white">
        <Toolbar v-bind="args">
          <div class="flex-1 px-4">
            <h1 class="text-xl font-semibold">无内边距工具栏</h1>
          </div>
          <div class="px-4">
            <Button variant="text" color="inherit">
              菜单
            </Button>
          </div>
        </Toolbar>
      </div>
    `
  })
}

export const InAppBar = {
  args: {
    variant: 'regular',
    disableGutters: false
  },
  render: (args) => ({
    components: { AppBar, Toolbar, Button },
    setup() {
      return { args }
    },
    template: `
      <AppBar position="static" color="primary">
        <Toolbar v-bind="args">
          <Button variant="text" color="inherit">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
            </svg>
          </Button>
          <div class="flex-1 ml-4">
            <h1 class="text-xl font-semibold">在 AppBar 中的工具栏</h1>
          </div>
          <Button variant="text" color="inherit">
            搜索
          </Button>
          <Button variant="text" color="inherit">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
            </svg>
          </Button>
        </Toolbar>
      </AppBar>
    `
  })
}

export const WithNavigation = {
  args: {
    variant: 'regular',
    disableGutters: false
  },
  render: (args) => ({
    components: { Toolbar, Button },
    setup() {
      return { args }
    },
    template: `
      <div class="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700">
        <Toolbar v-bind="args">
          <div class="flex-1">
            <nav class="flex space-x-6">
              <a href="#" class="text-primary-600 dark:text-primary-400 font-medium">首页</a>
              <a href="#" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-600">产品</a>
              <a href="#" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-600">服务</a>
              <a href="#" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-600">关于</a>
            </nav>
          </div>
          <div class="flex space-x-2">
            <Button variant="text">登录</Button>
            <Button variant="contained">注册</Button>
          </div>
        </Toolbar>
      </div>
    `
  })
} 