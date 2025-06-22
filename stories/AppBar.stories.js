import AppBar from '../src/components/AppBar/AppBar.jsx'
import AppBarVue from '../src/components/AppBar/AppBar.vue'
import Toolbar from '../src/components/Toolbar/Toolbar.jsx'

export default {
  title: 'Navigation/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'AppBar 组件用于创建顶部应用栏，支持多种位置、颜色和阴影效果。'
      }
    }
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['fixed', 'absolute', 'sticky', 'static', 'relative'],
      description: 'AppBar 的定位方式'
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'transparent', 'inherit'],
      description: 'AppBar 的颜色主题'
    },
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
      description: 'AppBar 的阴影高度'
    },
    variant: {
      control: { type: 'select' },
      options: ['elevation', 'outlined'],
      description: 'AppBar 的变体样式'
    }
  }
}

export const Default = {
  args: {
    position: 'fixed',
    color: 'primary',
    elevation: 4,
    variant: 'elevation'
  },
  render: (args) => ({
    components: { AppBar, Toolbar },
    setup() {
      return { args }
    },
    template: `
      <AppBar v-bind="args">
        <Toolbar>
          <div class="flex-1">
            <h1 class="text-xl font-semibold">应用标题</h1>
          </div>
          <button class="text-white hover:text-gray-200">
            菜单
          </button>
        </Toolbar>
      </AppBar>
    `
  })
}

export const Secondary = {
  args: {
    position: 'static',
    color: 'secondary',
    elevation: 2
  },
  render: (args) => ({
    components: { AppBar, Toolbar },
    setup() {
      return { args }
    },
    template: `
      <AppBar v-bind="args">
        <Toolbar>
          <div class="flex-1">
            <h1 class="text-xl font-semibold">次要颜色 AppBar</h1>
          </div>
        </Toolbar>
      </AppBar>
    `
  })
}

export const Outlined = {
  args: {
    position: 'static',
    color: 'primary',
    variant: 'outlined'
  },
  render: (args) => ({
    components: { AppBar, Toolbar },
    setup() {
      return { args }
    },
    template: `
      <AppBar v-bind="args">
        <Toolbar>
          <div class="flex-1">
            <h1 class="text-xl font-semibold">轮廓样式 AppBar</h1>
          </div>
        </Toolbar>
      </AppBar>
    `
  })
}

export const Transparent = {
  args: {
    position: 'static',
    color: 'transparent',
    elevation: 0
  },
  render: (args) => ({
    components: { AppBar, Toolbar },
    setup() {
      return { args }
    },
    template: `
      <div class="bg-gradient-to-r from-blue-500 to-purple-600 min-h-32">
        <AppBar v-bind="args">
          <Toolbar>
            <div class="flex-1">
              <h1 class="text-xl font-semibold text-white">透明 AppBar</h1>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    `
  })
} 