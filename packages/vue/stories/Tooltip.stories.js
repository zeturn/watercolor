import { ref } from 'vue'
import TooltipVue from '../src/components/Tooltip/Tooltip.vue'

export default {
  title: 'Components/Tooltip (Vue)',
  component: TooltipVue,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Watercolor 提示组件，在鼠标悬停时显示有用的信息。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: '提示文本内容'
    },
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: '提示框位置'
    },
    className: {
      description: '额外的 CSS 类名'
    }
  },
}

export const Default = {
  args: {
    text: '这是提示文本',
    placement: 'top',
  },
  render: (args) => ({
    components: { TooltipVue },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 48px;">
        <TooltipVue v-bind="args">
          <button 
            style="
              padding: 8px 16px;
              background-color: var(--wc-primary-600);
              color: var(--wc-neutral-0);
              border: none;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.2s;
            "
            @mouseenter="$event.target.style.backgroundColor = 'var(--wc-primary-700)'"
            @mouseleave="$event.target.style.backgroundColor = 'var(--wc-primary-600)'"
          >
            悬停查看提示
          </button>
        </TooltipVue>
      </div>
    `,
  }),
}

export const Placements = () => ({
  components: { TooltipVue },
  template: `
    <div style="padding: 80px; display: flex; align-items: center; justify-content: center;">
      <div style="
        display: grid; 
        grid-template-columns: repeat(3, 1fr); 
        gap: 32px; 
        align-items: center;
      ">
        <div></div>
        <TooltipVue text="顶部提示" placement="top">
          <button 
            style="
              padding: 8px 16px;
              background-color: var(--wc-neutral-600);
              color: var(--wc-neutral-0);
              border: none;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.2s;
            "
            @mouseenter="$event.target.style.backgroundColor = 'var(--wc-neutral-700)'"
            @mouseleave="$event.target.style.backgroundColor = 'var(--wc-neutral-600)'"
          >
            顶部
          </button>
        </TooltipVue>
        <div></div>
        
        <TooltipVue text="左侧提示" placement="left">
          <button 
            style="
              padding: 8px 16px;
              background-color: var(--wc-neutral-600);
              color: var(--wc-neutral-0);
              border: none;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.2s;
            "
            @mouseenter="$event.target.style.backgroundColor = 'var(--wc-neutral-700)'"
            @mouseleave="$event.target.style.backgroundColor = 'var(--wc-neutral-600)'"
          >
            左侧
          </button>
        </TooltipVue>
        <div style="text-align: center; color: var(--wc-neutral-500);">
          悬停按钮查看不同位置的提示
        </div>
        <TooltipVue text="右侧提示" placement="right">
          <button 
            style="
              padding: 8px 16px;
              background-color: var(--wc-neutral-600);
              color: var(--wc-neutral-0);
              border: none;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.2s;
            "
            @mouseenter="$event.target.style.backgroundColor = 'var(--wc-neutral-700)'"
            @mouseleave="$event.target.style.backgroundColor = 'var(--wc-neutral-600)'"
          >
            右侧
          </button>
        </TooltipVue>
        
        <div></div>
        <TooltipVue text="底部提示" placement="bottom">
          <button 
            style="
              padding: 8px 16px;
              background-color: var(--wc-neutral-600);
              color: var(--wc-neutral-0);
              border: none;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.2s;
            "
            @mouseenter="$event.target.style.backgroundColor = 'var(--wc-neutral-700)'"
            @mouseleave="$event.target.style.backgroundColor = 'var(--wc-neutral-600)'"
          >
            底部
          </button>
        </TooltipVue>
        <div></div>
      </div>
    </div>
  `,
})

export const WithIcons = () => ({
  components: { TooltipVue },
  template: `
    <div style="padding: 48px;">
      <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">带图标的提示</h3>
      <div style="display: flex; gap: 16px; align-items: center;">
        <TooltipVue text="点击保存当前工作">
          <button 
            style="
              padding: 8px;
              background-color: var(--wc-success-600);
              color: var(--wc-neutral-0);
              border: none;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.2s;
            "
            @mouseenter="$event.target.style.backgroundColor = 'var(--wc-success-700)'"
            @mouseleave="$event.target.style.backgroundColor = 'var(--wc-success-600)'"
          >
            💾
          </button>
        </TooltipVue>
        
        <TooltipVue text="编辑当前项目">
          <button 
            style="
              padding: 8px;
              background-color: var(--wc-primary-600);
              color: var(--wc-neutral-0);
              border: none;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.2s;
            "
            @mouseenter="$event.target.style.backgroundColor = 'var(--wc-primary-700)'"
            @mouseleave="$event.target.style.backgroundColor = 'var(--wc-primary-600)'"
          >
            ✏️
          </button>
        </TooltipVue>
        
        <TooltipVue text="删除选中项目">
          <button 
            style="
              padding: 8px;
              background-color: var(--wc-error-600);
              color: var(--wc-neutral-0);
              border: none;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.2s;
            "
            @mouseenter="$event.target.style.backgroundColor = 'var(--wc-error-700)'"
            @mouseleave="$event.target.style.backgroundColor = 'var(--wc-error-600)'"
          >
            🗑️
          </button>
        </TooltipVue>
        
        <TooltipVue text="分享给其他用户">
          <button 
            style="
              padding: 8px;
              background-color: var(--wc-purple-600);
              color: var(--wc-neutral-0);
              border: none;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.2s;
            "
            @mouseenter="$event.target.style.backgroundColor = 'var(--wc-purple-700)'"
            @mouseleave="$event.target.style.backgroundColor = 'var(--wc-purple-600)'"
          >
            📤
          </button>
        </TooltipVue>
        
        <TooltipVue text="查看详细信息">
          <button 
            style="
              padding: 8px;
              background-color: var(--wc-neutral-600);
              color: var(--wc-neutral-0);
              border: none;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.2s;
            "
            @mouseenter="$event.target.style.backgroundColor = 'var(--wc-neutral-700)'"
            @mouseleave="$event.target.style.backgroundColor = 'var(--wc-neutral-600)'"
          >
            ℹ️
          </button>
        </TooltipVue>
      </div>
    </div>
  `,
})

export const Interactive = () => ({
  components: { TooltipVue },
  setup() {
    const showTooltip = ref(false)
    const customText = ref('自定义提示内容')
    
    return {
      showTooltip,
      customText,
    }
  },
  template: `
    <div style="padding: 48px;">
      <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 24px;">交互式提示</h3>
      
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <label style="
            display: block; 
            font-size: 14px; 
            font-weight: 500; 
            margin-bottom: 8px;
          ">
            自定义提示文本：
          </label>
          <input
            v-model="customText"
            type="text"
            style="
              padding: 8px 12px;
              border: 1px solid var(--wc-neutral-200);
              background-color: var(--wc-neutral-0);
              color: var(--wc-neutral-900);
              border-radius: 4px;
              outline: none;
              transition: border-color 0.2s;
            "
            @focus="$event.target.style.borderColor = 'var(--wc-primary-500)'"
            @blur="$event.target.style.borderColor = 'var(--wc-neutral-200)'"
            placeholder="输入提示内容"
          />
        </div>
        
        <div style="display: flex; gap: 16px; align-items: center;">
          <TooltipVue :text="customText">
            <button 
              style="
                padding: 8px 16px;
                background-color: var(--wc-primary-600);
                color: var(--wc-neutral-0);
                border: none;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.2s;
              "
              @mouseenter="$event.target.style.backgroundColor = 'var(--wc-primary-700)'"
              @mouseleave="$event.target.style.backgroundColor = 'var(--wc-primary-600)'"
            >
              悬停查看自定义提示
            </button>
          </TooltipVue>
          
          <TooltipVue :text="showTooltip ? '提示已显示' : '提示已隐藏'">
            <button 
              :style="{
                padding: '8px 16px',
                backgroundColor: showTooltip ? 'var(--wc-success-600)' : 'var(--wc-neutral-600)',
                color: 'var(--wc-neutral-0)',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }"
              @mouseenter="$event.target.style.backgroundColor = showTooltip ? 'var(--wc-success-700)' : 'var(--wc-neutral-700)'"
              @mouseleave="$event.target.style.backgroundColor = showTooltip ? 'var(--wc-success-600)' : 'var(--wc-neutral-600)'"
              @click="showTooltip = !showTooltip"
            >
              {{ showTooltip ? '隐藏' : '显示' }} 状态
            </button>
          </TooltipVue>
        </div>
      </div>
    </div>
  `,
}) 