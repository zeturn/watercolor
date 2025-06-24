import List from '../src/components/List/List.vue'
import ListItem from '../src/components/List/ListItem.vue'
import ListItemIcon from '../src/components/List/ListItemIcon.vue'
import ListItemText from '../src/components/List/ListItemText.vue'

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的列表组件，用于显示一系列相关的内容项。支持密集模式、交互功能和自定义内容。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    dense: {
      description: '是否使用密集模式',
      control: { type: 'boolean' }
    },
    disablePadding: {
      description: '是否禁用内边距',
      control: { type: 'boolean' }
    },
    subheader: {
      description: '子标题',
      control: { type: 'text' }
    }
  }
}

export const Primary = {
  args: {
    dense: false,
    disablePadding: false
  },
  render: (args) => ({
    components: { List, ListItem, ListItemText },
    setup() {
      return { args }
    },
    template: `
      <List v-bind="args" class="border rounded-lg max-w-md">
        <ListItem>
          <ListItemText primary="列表项目 1" secondary="这是第一个列表项目的描述信息" />
        </ListItem>
        <ListItem>
          <ListItemText primary="列表项目 2" secondary="这是第二个列表项目的描述信息" />
        </ListItem>
        <ListItem>
          <ListItemText primary="列表项目 3" secondary="这是第三个列表项目的描述信息" />
        </ListItem>
      </List>
    `
  })
}

export const BasicList = {
  render: () => ({
    components: { List, ListItem, ListItemText },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">基础列表</h3>
          <List class="border rounded-lg max-w-md">
            <ListItem>
              <ListItemText primary="收件箱" />
            </ListItem>
            <ListItem>
              <ListItemText primary="已发送" />
            </ListItem>
            <ListItem>
              <ListItemText primary="草稿" />
            </ListItem>
            <ListItem>
              <ListItemText primary="垃圾箱" />
            </ListItem>
          </List>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">带描述的列表</h3>
          <List class="border rounded-lg max-w-md">
            <ListItem>
              <ListItemText 
                primary="工作邮件" 
                secondary="处理日常工作相关的邮件通信" 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="个人邮件" 
                secondary="家人朋友的私人邮件" 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="订阅邮件" 
                secondary="各种订阅和通知邮件" 
              />
            </ListItem>
          </List>
        </div>
      </div>
    `
  })
}

export const WithIcons = {
  render: () => ({
    components: { List, ListItem, ListItemIcon, ListItemText },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">带图标的列表</h3>
          <List class="border rounded-lg max-w-md">
            <ListItem>
              <template #icon>
                <ListItemIcon>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </ListItemIcon>
              </template>
              <ListItemText primary="电话" secondary="+86 138 0013 8000" />
            </ListItem>
            
            <ListItem>
              <template #icon>
                <ListItemIcon>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </ListItemIcon>
              </template>
              <ListItemText primary="邮箱" secondary="user@example.com" />
            </ListItem>
            
            <ListItem>
              <template #icon>
                <ListItemIcon>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                </ListItemIcon>
              </template>
              <ListItemText primary="地址" secondary="北京市朝阳区某某街道123号" />
            </ListItem>
          </List>
        </div>
      </div>
    `
  })
}

export const Interactive = {
  render: () => ({
    components: { List, ListItem, ListItemIcon, ListItemText },
    data() {
      return {
        selectedItems: [0],
        menuItems: [
          { id: 0, name: '首页', icon: 'home' },
          { id: 1, name: '产品', icon: 'grid' },
          { id: 2, name: '服务', icon: 'cog' }
        ]
      }
    },
    methods: {
      handleItemClick(id) {
        if (this.selectedItems.includes(id)) {
          this.selectedItems = this.selectedItems.filter(item => item !== id)
        } else {
          this.selectedItems = [id]
        }
      }
    },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">可选择的列表</h3>
          <List class="border rounded-lg max-w-md">
            <ListItem 
              v-for="item in menuItems"
              :key="item.id"
              button
              :selected="selectedItems.includes(item.id)"
              @click="handleItemClick(item.id)"
            >
              <ListItemText :primary="item.name" />
            </ListItem>
          </List>
        </div>
      </div>
    `
  })
} 