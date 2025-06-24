import { ref } from 'vue'
import SnackbarVue from '../src/components/Snackbar/Snackbar.vue'
import ButtonVue from '../src/components/Button/Button.vue'
import SnackbarJSX from '../src/components/Snackbar/Snackbar.jsx'
import { SnackbarManager } from '../src/components/Snackbar/utils.js'
import '../src/components/Snackbar/style.css'

const manager = new SnackbarManager()

export default {
  title: 'Components/Snackbar',
  component: SnackbarVue,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    title: { control: 'text' },
    severity: { control: { type: 'select' }, options: ['success', 'info', 'warning', 'error'] },
    variant: { control: { type: 'select' }, options: ['filled', 'outlined', 'standard'] },
    autoHideDuration: { control: 'number' },
    closable: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    showProgress: { control: 'boolean' },
    anchorOrigin: { 
      control: 'object',
      description: '位置配置，例如: { vertical: "bottom", horizontal: "left" }'
    },
  },
  parameters: {
    docs: {
      description: {
        component: '增强版 Snackbar 组件，整合了 Toast 的功能，支持标题、图标、进度条、多种位置等。'
      }
    }
  }
}

const Template = (args) => ({
  components: { SnackbarVue, ButtonVue },
  setup() {
    const open = ref(false)
    const handleOpen = () => (open.value = true)
    const handleClose = () => (open.value = false)
    return { args, open, handleOpen, handleClose }
  },
  template: `
    <div>
      <ButtonVue variant="primary" @click="handleOpen">显示 Snackbar</ButtonVue>
      <SnackbarVue
        v-bind="args"
        :open="open"
        @close="handleClose"
      />
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  message: '这是一条提示信息',
  severity: 'info',
  variant: 'filled',
  autoHideDuration: 3000,
  closable: true,
  showIcon: true,
  showProgress: false,
}

// 不同严重程度
export const Severities = () => ({
  components: { SnackbarVue, ButtonVue },
  setup() {
    const snackbars = ref({
      success: false,
      info: false,
      warning: false,
      error: false,
    })
    
    const showSnackbar = (type) => {
      snackbars.value[type] = true
    }
    
    const closeSnackbar = (type) => {
      snackbars.value[type] = false
    }
    
    return { snackbars, showSnackbar, closeSnackbar }
  },
  template: `
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <ButtonVue variant="success" @click="showSnackbar('success')">成功</ButtonVue>
      <ButtonVue variant="primary" @click="showSnackbar('info')">信息</ButtonVue>
      <ButtonVue variant="warning" @click="showSnackbar('warning')">警告</ButtonVue>
      <ButtonVue variant="error" @click="showSnackbar('error')">错误</ButtonVue>
      
      <SnackbarVue
        :open="snackbars.success"
        message="操作成功完成"
        severity="success"
        @close="closeSnackbar('success')"
      />
      <SnackbarVue
        :open="snackbars.info"
        message="这是一条信息提示"
        severity="info"
        @close="closeSnackbar('info')"
      />
      <SnackbarVue
        :open="snackbars.warning"
        message="请注意这个警告"
        severity="warning"
        @close="closeSnackbar('warning')"
      />
      <SnackbarVue
        :open="snackbars.error"
        message="发生了一个错误"
        severity="error"
        @close="closeSnackbar('error')"
      />
    </div>
  `,
})

// 带标题的 Snackbar
export const WithTitle = Template.bind({})
WithTitle.args = {
  title: '重要通知',
  message: '您的账户设置已成功更新，新的配置将在下次登录时生效。',
  severity: 'success',
  variant: 'filled',
  autoHideDuration: 5000,
  showIcon: true,
}

// 不同变体样式
export const Variants = () => ({
  components: { SnackbarVue, ButtonVue },
  setup() {
    const snackbars = ref({
      filled: false,
      outlined: false,
      standard: false,
    })
    
    const showSnackbar = (variant) => {
      snackbars.value[variant] = true
    }
    
    const closeSnackbar = (variant) => {
      snackbars.value[variant] = false
    }
    
    return { snackbars, showSnackbar, closeSnackbar }
  },
  template: `
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <ButtonVue variant="primary" @click="showSnackbar('filled')">Filled</ButtonVue>
      <ButtonVue variant="outline" @click="showSnackbar('outlined')">Outlined</ButtonVue>
      <ButtonVue variant="ghost" @click="showSnackbar('standard')">Standard</ButtonVue>
      
      <SnackbarVue
        :open="snackbars.filled"
        title="Filled 样式"
        message="这是填充样式的 Snackbar"
        severity="info"
        variant="filled"
        @close="closeSnackbar('filled')"
      />
      <SnackbarVue
        :open="snackbars.outlined"
        title="Outlined 样式"
        message="这是轮廓样式的 Snackbar，带有彩色边框"
        severity="warning"
        variant="outlined"
        @close="closeSnackbar('outlined')"
      />
      <SnackbarVue
        :open="snackbars.standard"
        title="Standard 样式"
        message="这是标准样式的 Snackbar"
        severity="success"
        variant="standard"
        @close="closeSnackbar('standard')"
      />
    </div>
  `,
})

// 进度条功能
export const WithProgress = Template.bind({})
WithProgress.args = {
  title: '文件上传中',
  message: '正在上传文件，请稍候...',
  severity: 'info',
  variant: 'filled',
  autoHideDuration: 8000,
  showIcon: true,
  showProgress: true,
}

// 不同位置
export const Positions = () => ({
  components: { SnackbarVue, ButtonVue },
  setup() {
    const snackbars = ref({
      topLeft: false,
      topCenter: false,
      topRight: false,
      bottomLeft: false,
      bottomCenter: false,
      bottomRight: false,
    })
    
    const positions = {
      topLeft: { vertical: 'top', horizontal: 'left' },
      topCenter: { vertical: 'top', horizontal: 'center' },
      topRight: { vertical: 'top', horizontal: 'right' },
      bottomLeft: { vertical: 'bottom', horizontal: 'left' },
      bottomCenter: { vertical: 'bottom', horizontal: 'center' },
      bottomRight: { vertical: 'bottom', horizontal: 'right' },
    }
    
    const showSnackbar = (position) => {
      snackbars.value[position] = true
    }
    
    const closeSnackbar = (position) => {
      snackbars.value[position] = false
    }
    
    return { snackbars, positions, showSnackbar, closeSnackbar }
  },
  template: `
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; max-width: 500px;">
      <ButtonVue @click="showSnackbar('topLeft')">左上</ButtonVue>
      <ButtonVue @click="showSnackbar('topCenter')">上中</ButtonVue>
      <ButtonVue @click="showSnackbar('topRight')">右上</ButtonVue>
      <ButtonVue @click="showSnackbar('bottomLeft')">左下</ButtonVue>
      <ButtonVue @click="showSnackbar('bottomCenter')">下中</ButtonVue>
      <ButtonVue @click="showSnackbar('bottomRight')">右下</ButtonVue>
      
      <SnackbarVue
        v-for="(position, key) in positions"
        :key="key"
        :open="snackbars[key]"
        :message="\`\${key} 位置的通知\`"
        :anchorOrigin="position"
        severity="info"
        @close="closeSnackbar(key)"
      />
    </div>
  `,
})

// 动作按钮
export const WithAction = Template.bind({})
WithAction.args = {
  title: '新消息',
  message: '您有一条新消息',
  severity: 'info',
  variant: 'filled',
  action: '查看',
  autoHideDuration: 0, // 不自动关闭
}

// 不显示图标
export const WithoutIcon = Template.bind({})
WithoutIcon.args = {
  message: '这是一条没有图标的提示信息',
  severity: 'info',
  variant: 'outlined',
  showIcon: false,
  autoHideDuration: 3000,
}

// 持久显示
export const Persistent = Template.bind({})
Persistent.args = {
  title: '重要提醒',
  message: '这条消息不会自动消失，需要手动关闭',
  severity: 'warning',
  variant: 'filled',
  autoHideDuration: 0, // 不自动关闭
  showIcon: true,
}

// 综合演示
export const Comprehensive = () => ({
  components: { SnackbarVue, ButtonVue },
  setup() {
    const snackbars = ref({
      comprehensive: false,
    })
    
    const showSnackbar = () => {
      snackbars.value.comprehensive = true
    }
    
    const closeSnackbar = () => {
      snackbars.value.comprehensive = false
    }
    
    const handleAction = () => {
      alert('动作按钮被点击了！')
    }
    
    return { snackbars, showSnackbar, closeSnackbar, handleAction }
  },
  template: `
    <div>
      <ButtonVue variant="primary" @click="showSnackbar">显示综合功能 Snackbar</ButtonVue>
      
      <SnackbarVue
        :open="snackbars.comprehensive"
        title="功能齐全的通知"
        message="这个 Snackbar 展示了所有增强功能：标题、图标、进度条、动作按钮等"
        severity="success"
        variant="outlined"
        action="详情"
        :autoHideDuration="10000"
        :showIcon="true"
        :showProgress="true"
        :anchorOrigin="{ vertical: 'bottom', horizontal: 'right' }"
        @close="closeSnackbar"
        @action="handleAction"
      />
    </div>
  `,
})

Severities.parameters = {
  docs: {
    description: {
      story: '展示不同严重程度的 Snackbar 样式'
    }
  }
}

WithTitle.parameters = {
  docs: {
    description: {
      story: '带有标题的 Snackbar，适合显示更多信息'
    }
  }
}

Variants.parameters = {
  docs: {
    description: {
      story: '展示不同变体样式：filled（填充）、outlined（轮廓）、standard（标准）'
    }
  }
}

WithProgress.parameters = {
  docs: {
    description: {
      story: '带有进度条的 Snackbar，适合显示操作进度'
    }
  }
}

Positions.parameters = {
  docs: {
    description: {
      story: '展示 Snackbar 在不同位置的显示效果'
    }
  }
}

Comprehensive.parameters = {
  docs: {
    description: {
      story: '综合展示所有增强功能的 Snackbar'
    }
  }
}

export const ReadabilityTest = {
  render: () => ({
    data() {
      return {
        snackbars: [
          {
            id: 1,
            message: 'Success message with excellent readability',
            severity: 'success',
            variant: 'filled',
            title: 'Success Title',
            position: 'top-right',
            autoHideDuration: null
          },
          {
            id: 2,
            message: 'Warning message with clear contrast',
            severity: 'warning',
            variant: 'filled',
            title: 'Warning Title',
            position: 'top-right',
            autoHideDuration: null
          },
          {
            id: 3,
            message: 'Error message that is easy to read',
            severity: 'error',
            variant: 'filled',
            title: 'Error Title',
            position: 'top-right',
            autoHideDuration: null
          },
          {
            id: 4,
            message: 'Info message with perfect visibility',
            severity: 'info',
            variant: 'filled',
            title: 'Info Title',
            position: 'top-right',
            autoHideDuration: null
          },
          {
            id: 5,
            message: 'Outlined success with high contrast text',
            severity: 'success',
            variant: 'outlined',
            title: 'Outlined Success',
            position: 'bottom-right',
            autoHideDuration: null
          },
          {
            id: 6,
            message: 'Outlined warning with readable text',
            severity: 'warning',
            variant: 'outlined',
            title: 'Outlined Warning',
            position: 'bottom-right',
            autoHideDuration: null
          },
          {
            id: 7,
            message: 'Outlined error with clear contrast',
            severity: 'error',
            variant: 'outlined',
            title: 'Outlined Error',
            position: 'bottom-right',
            autoHideDuration: null
          },
          {
            id: 8,
            message: 'Outlined info with excellent readability',
            severity: 'info',
            variant: 'outlined',
            title: 'Outlined Info',
            position: 'bottom-right',
            autoHideDuration: null
          }
        ]
      };
    },
    mounted() {
      // 自动显示所有测试snackbar
      this.snackbars.forEach((config, index) => {
        setTimeout(() => {
          manager.show({
            ...config,
            showIcon: true,
            showProgress: false,
            actionLabel: '操作',
            onAction: () => console.log(`${config.severity} action clicked`)
          });
        }, index * 500);
      });
    },
    template: `
      <div style="padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh;">
        <h2 style="color: white; text-align: center; margin-bottom: 30px;">
          Snackbar 文字可读性测试
        </h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; max-width: 1200px; margin: 0 auto;">
          <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
            <h3 style="margin-top: 0; color: #1f2937;">Filled 变体测试</h3>
            <p style="color: #6b7280; margin-bottom: 20px;">
              测试填充样式下的文字对比度和可读性。所有文字应该清晰可读，具有良好的对比度。
            </p>
            <button 
              @click="showFilledTests" 
              style="background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600;"
            >
              显示 Filled 测试
            </button>
          </div>
          <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
            <h3 style="margin-top: 0; color: #1f2937;">Outlined 变体测试</h3>
            <p style="color: #6b7280; margin-bottom: 20px;">
              测试轮廓样式下的文字对比度和可读性。文字颜色应该与背景形成良好对比。
            </p>
            <button 
              @click="showOutlinedTests" 
              style="background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600;"
            >
              显示 Outlined 测试
            </button>
          </div>
        </div>
        
        <div style="margin-top: 40px; background: rgba(255,255,255,0.1); padding: 20px; border-radius: 12px; backdrop-filter: blur(10px);">
          <h3 style="color: white; margin-top: 0;">测试说明</h3>
          <ul style="color: rgba(255,255,255,0.9); line-height: 1.6;">
            <li><strong>渐变背景测试：</strong>确保在复杂背景下Snackbar仍然可读</li>
            <li><strong>白色文字对比度：</strong>填充变体使用白色文字，应该有足够对比度</li>
            <li><strong>彩色文字对比度：</strong>轮廓变体使用彩色文字，应该清晰可见</li>
            <li><strong>阴影和模糊效果：</strong>增强视觉层次和可读性</li>
            <li><strong>响应式测试：</strong>在不同屏幕尺寸下保持可读性</li>
          </ul>
        </div>
      </div>
    `,
    methods: {
      showFilledTests() {
        const filledTests = this.snackbars.filter(s => s.variant === 'filled');
        filledTests.forEach((config, index) => {
          setTimeout(() => {
            manager.show({
              ...config,
              showIcon: true,
              showProgress: false,
              actionLabel: '操作',
              onAction: () => console.log(`${config.severity} action clicked`)
            });
          }, index * 600);
        });
      },
      showOutlinedTests() {
        const outlinedTests = this.snackbars.filter(s => s.variant === 'outlined');
        outlinedTests.forEach((config, index) => {
          setTimeout(() => {
            manager.show({
              ...config,
              showIcon: true,
              showProgress: false,
              actionLabel: '操作',
              onAction: () => console.log(`${config.severity} action clicked`)
            });
          }, index * 600);
        });
      }
    }
  })
};

ReadabilityTest.parameters = {
  docs: {
    description: {
      story: `
## 文字可读性测试

这个故事专门用于测试 Snackbar 在各种情况下的文字可读性：

### 改进的特性
- **更好的颜色对比度**：所有文字都有足够的对比度确保可读性
- **渐变背景**：填充变体使用渐变背景增强视觉效果
- **文字阴影**：填充变体的文字添加微妙阴影提升可读性
- **改进的字体**：使用系统字体栈确保最佳渲染
- **增强的间距**：改善文字排版和可读性

### 测试场景
- 复杂背景下的可见性
- 不同严重程度的颜色对比
- Filled vs Outlined 变体对比
- 响应式设计下的可读性

点击按钮查看不同变体的可读性效果。
      `
    }
  }
};

export const DarkModeReadability = {
  render: () => ({
    data() {
      return {
        isDark: true,
        testVariants: [
          { variant: 'filled', title: 'Filled 深色测试' },
          { variant: 'outlined', title: 'Outlined 深色测试' },
          { variant: 'standard', title: 'Standard 深色测试' }
        ]
      };
    },
    template: `
      <div :class="{ 'dark': isDark }" style="min-height: 100vh; transition: all 0.3s ease;">
        <div style="background: #0f1419; padding: 40px; min-height: 100vh;">
          <div style="max-width: 1200px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 40px;">
              <h1 style="color: #f9fafb; font-size: 2.5rem; font-weight: 700; margin-bottom: 16px;">
                深色模式可读性测试
              </h1>
              <p style="color: #d1d5db; font-size: 1.2rem; margin-bottom: 24px;">
                测试 Snackbar 在深色主题下的文字对比度和可读性
              </p>
              <button 
                @click="isDark = !isDark" 
                :style="{
                  background: isDark ? '#3b82f6' : '#1f2937',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '16px',
                  transition: 'all 0.3s ease'
                }"
              >
                {{ isDark ? '切换到浅色模式' : '切换到深色模式' }}
              </button>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; margin-bottom: 40px;">
              <div 
                v-for="variant in testVariants" 
                :key="variant.variant"
                style="background: rgba(255, 255, 255, 0.05); padding: 24px; border-radius: 16px; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1);"
              >
                <h3 style="color: #f9fafb; margin-top: 0; font-size: 1.25rem; font-weight: 600;">
                  {{ variant.title }}
                </h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <button 
                    @click="showVariantTest(variant.variant, 'success')"
                    style="background: #059669; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500;"
                  >
                    Success {{ variant.variant }}
                  </button>
                  <button 
                    @click="showVariantTest(variant.variant, 'warning')"
                    style="background: #d97706; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500;"
                  >
                    Warning {{ variant.variant }}
                  </button>
                  <button 
                    @click="showVariantTest(variant.variant, 'error')"
                    style="background: #dc2626; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500;"
                  >
                    Error {{ variant.variant }}
                  </button>
                  <button 
                    @click="showVariantTest(variant.variant, 'info')"
                    style="background: #2563eb; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500;"
                  >
                    Info {{ variant.variant }}
                  </button>
                </div>
              </div>
            </div>
            
            <div style="background: rgba(34, 197, 94, 0.1); padding: 24px; border-radius: 16px; border: 1px solid rgba(34, 197, 94, 0.2);">
              <h3 style="color: #4ade80; margin-top: 0; display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 1.5rem;">✓</span>
                深色模式优化特性
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; color: #d1d5db; line-height: 1.6;">
                <div>
                  <h4 style="color: #f3f4f6; margin: 0 0 8px 0;">对比度增强</h4>
                  <ul style="margin: 0; padding-left: 20px;">
                    <li>填充变体保持白色文字确保最佳对比度</li>
                    <li>轮廓变体使用更亮的颜色适配深色背景</li>
                    <li>背景色自适应深色主题</li>
                  </ul>
                </div>
                <div>
                  <h4 style="color: #f3f4f6; margin: 0 0 8px 0;">视觉增强</h4>
                  <ul style="margin: 0; padding-left: 20px;">
                    <li>文字阴影在深色背景下更加突出</li>
                    <li>边框和阴影适配深色环境</li>
                    <li>图标颜色自动调整</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
              <button 
                @click="showAllDarkTests"
                style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; border: none; padding: 16px 32px; border-radius: 12px; cursor: pointer; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);"
              >
                显示所有深色模式测试
              </button>
            </div>
          </div>
        </div>
      </div>
    `,
    methods: {
      showVariantTest(variant, severity) {
        manager.show({
          message: `这是深色模式下的 ${severity} 消息测试。文字应该清晰可读，具有良好的对比度。`,
          severity,
          variant,
          title: `${severity.toUpperCase()} - ${variant}`,
          position: 'top-right',
          showIcon: true,
          actionLabel: '确定',
          autoHideDuration: 8000,
          onAction: () => console.log(`${severity} ${variant} action clicked`)
        });
      },
      showAllDarkTests() {
        const severities = ['success', 'warning', 'error', 'info'];
        const variants = ['filled', 'outlined', 'standard'];
        let delay = 0;
        
        variants.forEach(variant => {
          severities.forEach(severity => {
            setTimeout(() => {
              this.showVariantTest(variant, severity);
            }, delay);
            delay += 300;
          });
        });
      }
    }
  })
};

DarkModeReadability.parameters = {
  docs: {
    description: {
      story: `
## 深色模式可读性测试

专门测试 Snackbar 在深色主题下的表现，确保在所有深色环境中都有优秀的可读性。

### 深色模式优化

1. **智能颜色适配**
   - 填充变体：保持白色文字确保最佳对比度
   - 轮廓变体：使用更亮的文字颜色适配深色背景
   - 背景色：自动切换到深色主题兼容的颜色

2. **增强的视觉效果**
   - 文字阴影在深色背景下更突出
   - 边框和阴影颜色适配深色环境
   - 图标颜色自动调整以保持可见性

3. **自动检测支持**
   - 支持 \`prefers-color-scheme: dark\` 媒体查询
   - 支持 \`.dark\` 类名切换
   - 平滑的颜色过渡动画

### 测试功能
- 切换浅色/深色模式查看效果
- 测试不同变体在深色环境下的表现
- 验证文字对比度是否符合无障碍标准

这确保了无论用户使用什么主题，Snackbar 都能提供优秀的可读性体验。
      `
    }
  }
};

// 快速颜色对比度测试
export const QuickColorTest = {
  render: () => ({
    template: `
      <div style="padding: 20px;">
        <h2 style="margin-bottom: 20px;">快速颜色对比度测试</h2>
        <p style="margin-bottom: 20px; color: #666;">点击按钮测试基本的颜色对比度是否正常</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
          <button @click="testStandard" style="padding: 12px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer;">
            测试 Standard
          </button>
          <button @click="testOutlined" style="padding: 12px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer;">
            测试 Outlined
          </button>
          <button @click="testFilled" style="padding: 12px; background: #f59e0b; color: white; border: none; border-radius: 6px; cursor: pointer;">
            测试 Filled
          </button>
          <button @click="testAll" style="padding: 12px; background: #ef4444; color: white; border: none; border-radius: 6px; cursor: pointer;">
            测试所有变体
          </button>
        </div>
        
        <div style="margin-top: 20px; padding: 16px; background: #f3f4f6; border-radius: 8px;">
          <h4 style="margin: 0 0 8px 0; color: #1f2937;">测试说明：</h4>
          <ul style="margin: 0; padding-left: 20px; color: #4b5563;">
            <li><strong>Standard：</strong>深灰色背景，白色文字</li>
            <li><strong>Outlined：</strong>白色背景，深色文字</li>
            <li><strong>Filled：</strong>彩色背景，白色文字</li>
          </ul>
        </div>
      </div>
    `,
    methods: {
      testStandard() {
        manager.show({
          message: '这是标准变体测试。应该是深灰色背景配白色文字，清晰可读。',
          title: 'Standard 变体测试',
          variant: 'standard',
          position: 'top-right',
          showIcon: true,
          actionLabel: '确定',
          autoHideDuration: 5000
        });
      },
      testOutlined() {
        manager.show({
          message: '这是轮廓变体测试。应该是白色背景配深色文字，清晰可读。',
          title: 'Outlined 变体测试',
          variant: 'outlined',
          severity: 'info',
          position: 'top-right',
          showIcon: true,
          actionLabel: '确定',
          autoHideDuration: 5000
        });
      },
      testFilled() {
        manager.show({
          message: '这是填充变体测试。应该是彩色背景配白色文字，清晰可读。',
          title: 'Filled 变体测试',
          variant: 'filled',
          severity: 'success',
          position: 'top-right',
          showIcon: true,
          actionLabel: '确定',
          autoHideDuration: 5000
        });
      },
      testAll() {
        const tests = [
          { variant: 'standard', severity: 'info', title: 'Standard 测试' },
          { variant: 'outlined', severity: 'warning', title: 'Outlined 测试' },
          { variant: 'filled', severity: 'error', title: 'Filled 测试' }
        ];
        
        tests.forEach((test, index) => {
          setTimeout(() => {
            manager.show({
              message: `${test.title}：检查文字是否清晰可读`,
              title: test.title,
              variant: test.variant,
              severity: test.severity,
              position: 'top-right',
              showIcon: true,
              actionLabel: '确定',
              autoHideDuration: 6000
            });
          }, index * 800);
        });
      }
    }
  })
};

QuickColorTest.parameters = {
  docs: {
    description: {
      story: `
## 快速颜色对比度测试

这个测试用于快速验证不同变体下的文字可读性：

- **Standard 变体**：深灰色背景 (#374151) + 白色文字 (#f9fafb)
- **Outlined 变体**：白色背景 (#ffffff) + 深色文字 (#1f2937)  
- **Filled 变体**：彩色渐变背景 + 白色文字

所有组合都经过优化，确保足够的颜色对比度。
      `
    }
  }
}; 