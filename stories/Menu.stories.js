import { ref } from 'vue'
import Menu from '../src/components/Menu/Menu.vue'
import MenuItem from '../src/components/MenuItem/MenuItem.vue'
import Button from '../src/components/Button/Button.vue'

export default {
  title: 'Navigation/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Menu 组件用于创建下拉菜单，支持多种位置和阴影效果。'
      }
    }
  },
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: '菜单是否打开'
    },
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
      description: '菜单的阴影高度'
    },
    anchorOrigin: {
      control: { type: 'object' },
      description: '锚点原点位置'
    },
    maxHeight: {
      control: { type: 'text' },
      description: '菜单最大高度'
    }
  }
}

export const Default = {
  render: () => ({
    components: { Menu, MenuItem, Button },
    setup() {
      const open = ref(false)
      const anchorEl = ref(null)
      
      const handleClick = () => {
        open.value = true
      }
      
      const handleClose = () => {
        open.value = false
      }
      
      return {
        open,
        anchorEl,
        handleClick,
        handleClose
      }
    },
    template: `
      <div class="p-8">
        <Button 
          ref="anchorEl"
          @click="handleClick"
          variant="contained"
        >
          打开菜单
        </Button>
        
        <Menu 
          :open="open"
          :anchorEl="anchorEl"
          @close="handleClose"
        >
          <MenuItem @click="handleClose">菜单项 1</MenuItem>
          <MenuItem @click="handleClose">菜单项 2</MenuItem>
          <MenuItem divider @click="handleClose">菜单项 3</MenuItem>
          <MenuItem @click="handleClose">菜单项 4</MenuItem>
        </Menu>
      </div>
    `
  })
}

export const WithIcons = {
  render: () => ({
    components: { Menu, MenuItem, Button },
    setup() {
      const open = ref(false)
      const anchorEl = ref(null)
      
      const handleClick = () => {
        open.value = true
      }
      
      const handleClose = () => {
        open.value = false
      }
      
      return {
        open,
        anchorEl,
        handleClick,
        handleClose
      }
    },
    template: `
      <div class="p-8">
        <Button 
          ref="anchorEl"
          @click="handleClick"
          variant="contained"
        >
          带图标的菜单
        </Button>
        
        <Menu 
          :open="open"
          :anchorEl="anchorEl"
          @close="handleClose"
        >
          <MenuItem @click="handleClose">
            <template #icon>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
            </template>
            查看
          </MenuItem>
          <MenuItem @click="handleClose">
            <template #icon>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
              </svg>
            </template>
            编辑
          </MenuItem>
          <MenuItem divider @click="handleClose">
            <template #icon>
              <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414L7.586 12l-1.293 1.293a1 1 0 101.414 1.414L9 13.414l1.293 1.293a1 1 0 001.414-1.414L10.414 12l1.293-1.293z" clip-rule="evenodd"/>
              </svg>
            </template>
            删除
          </MenuItem>
        </Menu>
      </div>
    `
  })
}

export const HighElevation = {
  render: () => ({
    components: { Menu, MenuItem, Button },
    setup() {
      const open = ref(false)
      const anchorEl = ref(null)
      
      const handleClick = () => {
        open.value = true
      }
      
      const handleClose = () => {
        open.value = false
      }
      
      return {
        open,
        anchorEl,
        handleClick,
        handleClose
      }
    },
    template: `
      <div class="p-8">
        <Button 
          ref="anchorEl"
          @click="handleClick"
          variant="contained"
        >
          高阴影菜单
        </Button>
        
        <Menu 
          :open="open"
          :anchorEl="anchorEl"
          :elevation="16"
          @close="handleClose"
        >
          <MenuItem @click="handleClose">高阴影效果</MenuItem>
          <MenuItem @click="handleClose">菜单项 2</MenuItem>
          <MenuItem @click="handleClose">菜单项 3</MenuItem>
        </Menu>
      </div>
    `
  })
} 