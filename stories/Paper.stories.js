import Paper from '../src/components/Paper/Paper.vue'

/**
 * @autodoc
 * Paper组件提供了一个具有阴影效果的表面容器，模拟纸质材料的感觉。
 * 它支持不同的阴影等级和边框变体，并包含了深色模式的自动适配。
 */
export default {
  title: 'Layout/Paper',
  component: Paper,
  parameters: {
    docs: {
      description: {
        component: 'Paper组件创建了一个具有阴影效果的表面，用于突出显示内容。支持不同的阴影等级和边框样式，类似于Material Design的Paper概念。'
      }
    }
  },
  argTypes: {
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
      description: '阴影等级 (0-24)',
      defaultValue: 1
    },
    variant: {
      control: 'select',
      options: ['elevation', 'outlined'],
      description: '变体样式',
      defaultValue: 'elevation'
    },
    square: {
      control: 'boolean',
      description: '是否为方形（无圆角）',
      defaultValue: false
    }
  }
}

export const Default = {
  args: {
    elevation: 1
  },
  render: (args) => ({
    components: { Paper },
    setup() {
      return { args }
    },
    template: `
      <Paper v-bind="args" style="padding: 24px; max-width: 400px;">
        <h3 style="margin: 0 0 16px 0;">默认Paper</h3>
        <p style="margin: 0; color: #666;">
          这是一个带有轻微阴影的Paper容器，用于包装内容并使其在页面上突出显示。
        </p>
      </Paper>
    `
  })
}

export const ElevationLevels = {
  render: () => ({
    components: { Paper },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; padding: 24px; background: #f5f5f5;">
        <Paper elevation="0" style="padding: 16px; text-align: center;">
          <h4 style="margin: 0 0 8px 0;">Elevation 0</h4>
          <p style="margin: 0; font-size: 12px; color: #666;">无阴影</p>
        </Paper>
        
        <Paper elevation="1" style="padding: 16px; text-align: center;">
          <h4 style="margin: 0 0 8px 0;">Elevation 1</h4>
          <p style="margin: 0; font-size: 12px; color: #666;">轻微阴影</p>
        </Paper>
        
        <Paper elevation="3" style="padding: 16px; text-align: center;">
          <h4 style="margin: 0 0 8px 0;">Elevation 3</h4>
          <p style="margin: 0; font-size: 12px; color: #666;">中等阴影</p>
        </Paper>
        
        <Paper elevation="6" style="padding: 16px; text-align: center;">
          <h4 style="margin: 0 0 8px 0;">Elevation 6</h4>
          <p style="margin: 0; font-size: 12px; color: #666;">较强阴影</p>
        </Paper>
        
        <Paper elevation="12" style="padding: 16px; text-align: center;">
          <h4 style="margin: 0 0 8px 0;">Elevation 12</h4>
          <p style="margin: 0; font-size: 12px; color: #666;">强阴影</p>
        </Paper>
        
        <Paper elevation="24" style="padding: 16px; text-align: center;">
          <h4 style="margin: 0 0 8px 0;">Elevation 24</h4>
          <p style="margin: 0; font-size: 12px; color: #666;">最强阴影</p>
        </Paper>
      </div>
    `
  })
}

export const OutlinedVariant = {
  args: {
    variant: 'outlined'
  },
  render: (args) => ({
    components: { Paper },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 24px; background: #f5f5f5;">
        <Paper v-bind="args" style="padding: 24px; max-width: 400px;">
          <h3 style="margin: 0 0 16px 0;">边框变体</h3>
          <p style="margin: 0; color: #666;">
            这个Paper使用边框而不是阴影来定义边界，适用于需要更清晰分隔的界面。
          </p>
        </Paper>
      </div>
    `
  })
}

export const SquareVariant = {
  args: {
    square: true,
    elevation: 4
  },
  render: (args) => ({
    components: { Paper },
    setup() {
      return { args }
    },
    template: `
      <Paper v-bind="args" style="padding: 24px; max-width: 400px;">
        <h3 style="margin: 0 0 16px 0;">方形Paper</h3>
        <p style="margin: 0; color: #666;">
          这个Paper没有圆角，呈现方形外观，适用于需要更正式或棱角分明设计的场景。
        </p>
      </Paper>
    `
  })
}

export const CardExample = {
  render: () => ({
    components: { Paper },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; padding: 24px;">
        <Paper elevation="2" style="overflow: hidden;">
          <div style="height: 160px; background: linear-gradient(45deg, #2196f3, #21cbf3); position: relative;">
            <div style="position: absolute; bottom: 16px; left: 16px; color: white;">
              <h3 style="margin: 0; font-size: 20px;">产品卡片</h3>
            </div>
          </div>
          <div style="padding: 16px;">
            <p style="margin: 0 0 12px 0; color: #666;">
              这是一个使用Paper组件创建的产品卡片示例，展示了如何组合不同元素。
            </p>
            <button style="background: #2196f3; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">
              了解更多
            </button>
          </div>
        </Paper>
        
        <Paper variant="outlined">
          <div style="padding: 16px; border-bottom: 1px solid #e0e0e0;">
            <h3 style="margin: 0;">用户信息</h3>
          </div>
          <div style="padding: 16px;">
            <div style="display: flex; align-items: center; margin-bottom: 12px;">
              <div style="width: 40px; height: 40px; background: #4caf50; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; margin-right: 12px;">
                U
              </div>
              <div>
                <h4 style="margin: 0; font-size: 16px;">张三</h4>
                <p style="margin: 0; font-size: 14px; color: #666;">高级开发者</p>
              </div>
            </div>
            <p style="margin: 0; font-size: 14px; color: #666;">
              擅长前端开发和UI设计，有5年以上的工作经验。
            </p>
          </div>
        </Paper>
        
        <Paper elevation="8" style="padding: 24px; text-align: center;">
          <div style="width: 60px; height: 60px; background: #ff9800; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: white; font-size: 24px;">
            📊
          </div>
          <h3 style="margin: 0 0 8px 0;">数据统计</h3>
          <p style="margin: 0 0 16px 0; color: #666; font-size: 14px;">
            实时数据监控面板
          </p>
          <div style="font-size: 32px; font-weight: bold; color: #ff9800;">
            1,234
          </div>
        </Paper>
      </div>
    `
  })
}

export const InteractivePaper = {
  render: () => ({
    components: { Paper },
    data() {
      return {
        hoveredIndex: -1
      }
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; padding: 24px;">
        <Paper 
          v-for="(item, index) in 6" 
          :key="index"
          :elevation="hoveredIndex === index ? 8 : 2"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = -1"
          style="padding: 20px; text-align: center; cursor: pointer; transition: all 0.3s ease;"
        >
          <div style="font-size: 32px; margin-bottom: 8px;">{{ ['🎨', '📱', '💻', '🚀', '⚡', '🎯'][index] }}</div>
          <h4 style="margin: 0 0 8px 0;">项目 {{ index + 1 }}</h4>
          <p style="margin: 0; font-size: 12px; color: #666;">
            悬停查看效果
          </p>
        </Paper>
      </div>
    `
  })
} 