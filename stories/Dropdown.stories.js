import DropdownVue from '../src/components/Dropdown/Dropdown.vue'
import ButtonVue from '../src/components/Button/Button.vue'

export default {
  title: 'Components/Dropdown',
  component: DropdownVue,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Dropdown 下拉菜单组件，支持多种位置和配置。'
      }
    }
  },
  tags: ['autodocs'],
  args: {
    triggerText: '下拉菜单',
    placement: 'bottom-start',
    disabled: false,
    trigger: 'click'
  },
  argTypes: {
    triggerText: {
      control: { type: 'text' },
      description: '触发按钮文本',
      table: { category: 'Content' }
    },
    placement: {
      control: { type: 'select' },
      options: ['bottom-start', 'bottom-end', 'top-start', 'top-end'],
      description: '下拉菜单位置',
      table: { category: 'Layout' }
    },
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用',
      table: { category: 'Behavior' }
    },
    trigger: {
      control: { type: 'select' },
      options: ['click', 'hover'],
      description: '触发方式',
      table: { category: 'Behavior' }
    }
  }
}

// Vue 示例 - 默认下拉菜单（可交互）
export const Default = {
  render: (args) => ({
    components: { DropdownVue },
    setup() {
      const items = [
        { label: '编辑', key: 'edit', icon: '✏️' },
        { label: '复制', key: 'copy', icon: '📋' },
        { label: '删除', key: 'delete', icon: '🗑️' }
      ]
      
      const handleSelect = (item, index) => {
        console.log('选择了:', item, index)
      }
      
      return { args, items, handleSelect }
    },
    template: `
      <div style="height: 200px; display: flex; align-items: center; justify-content: center;">
        <DropdownVue 
          v-bind="args" 
          :items="items" 
          @select="handleSelect"
        />
      </div>
    `
  })
}

// Vue 示例 - 自定义触发器
export const CustomTrigger = {
  render: (args) => ({
    components: { DropdownVue, ButtonVue },
    setup() {
      const items = [
        { label: '个人资料', key: 'profile', icon: '👤' },
        { label: '设置', key: 'settings', icon: '⚙️' },
        { divider: true },
        { label: '退出登录', key: 'logout', icon: '🚪' }
      ]
      
      const handleSelect = (item, index) => {
        console.log('选择了:', item, index)
      }
      
      return { args, items, handleSelect }
    },
    template: `
      <div style="height: 200px; display: flex; align-items: center; justify-content: center;">
        <DropdownVue 
          v-bind="args" 
          :items="items" 
          @select="handleSelect"
        >
          <template #trigger>
            <ButtonVue variant="primary">
              用户菜单 ▼
            </ButtonVue>
          </template>
        </DropdownVue>
      </div>
    `
  }),
  args: {
    placement: 'bottom-end'
  }
}

// Vue 示例 - 包含禁用项
export const WithDisabled = {
  render: (args) => ({
    components: { DropdownVue },
    setup() {
      const items = [
        { label: '新建文件', key: 'new', icon: '📄' },
        { label: '打开文件', key: 'open', icon: '📂' },
        { label: '保存文件', key: 'save', icon: '💾', disabled: true },
        { divider: true },
        { label: '导出', key: 'export', icon: '📤' },
        { label: '打印', key: 'print', icon: '🖨️', disabled: true }
      ]
      
      const handleSelect = (item, index) => {
        console.log('选择了:', item, index)
      }
      
      return { args, items, handleSelect }
    },
    template: `
      <div style="height: 250px; display: flex; align-items: center; justify-content: center;">
        <DropdownVue 
          v-bind="args" 
          :items="items" 
          @select="handleSelect"
        />
      </div>
    `
  }),
  args: {
    triggerText: '文件操作',
    placement: 'bottom-start'
  }
}

// Vue 示例 - 不同位置
export const Placements = {
  render: (args) => ({
    components: { DropdownVue },
    setup() {
      const items = [
        { label: '选项 1', key: '1' },
        { label: '选项 2', key: '2' },
        { label: '选项 3', key: '3' }
      ]
      
      const handleSelect = (item, index) => {
        console.log('选择了:', item, index)
      }
      
      return { args, items, handleSelect }
    },
    template: `
      <div style="height: 400px; width: 600px; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 20px; padding: 40px;">
        <div style="display: flex; align-items: start; justify-content: start;">
          <DropdownVue 
            :items="items" 
            triggerText="左上"
            placement="bottom-start"
            @select="handleSelect"
          />
        </div>
        
        <div style="display: flex; align-items: start; justify-content: end;">
          <DropdownVue 
            :items="items" 
            triggerText="右上"
            placement="bottom-end"
            @select="handleSelect"
          />
        </div>
        
        <div style="display: flex; align-items: end; justify-content: start;">
          <DropdownVue 
            :items="items" 
            triggerText="左下"
            placement="top-start"
            @select="handleSelect"
          />
        </div>
        
        <div style="display: flex; align-items: end; justify-content: end;">
          <DropdownVue 
            :items="items" 
            triggerText="右下"
            placement="top-end"
            @select="handleSelect"
          />
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示 Dropdown 在不同位置的显示效果'
      }
    }
  }
}

// Vue 示例 - 自定义内容
export const CustomContent = {
  render: (args) => ({
    components: { DropdownVue, ButtonVue },
    setup() {
      const handleAction = (action) => {
        console.log('执行操作:', action)
      }
      
      return { args, handleAction }
    },
    template: `
      <div style="height: 300px; display: flex; align-items: center; justify-content: center;">
        <DropdownVue v-bind="args">
          <template #content>
            <div style="padding: 16px; min-width: 200px;">
              <h4 style="margin: 0 0 12px 0; font-size: 14px; color: #374151;">快速操作</h4>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <ButtonVue size="sm" variant="primary" @click="handleAction('new')">
                  新建项目
                </ButtonVue>
                <ButtonVue size="sm" variant="secondary" @click="handleAction('import')">
                  导入项目
                </ButtonVue>
                <hr style="margin: 8px 0; border: none; border-top: 1px solid #e5e7eb;">
                <ButtonVue size="sm" variant="warning" @click="handleAction('settings')">
                  设置
                </ButtonVue>
              </div>
            </div>
          </template>
        </DropdownVue>
      </div>
    `
  }),
  args: {
    triggerText: '快速操作',
    placement: 'bottom-start'
  }
} 