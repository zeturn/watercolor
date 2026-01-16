import Skeleton from '../src/components/Skeleton/Skeleton.vue'

export default {
  title: 'Components/Skeleton (Vue)',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '显示内容加载之前的占位符预览。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'rectangular', 'rounded', 'circular'],
      description: '骨架屏的形状变体'
    },
    animation: {
      control: { type: 'select' },
      options: [false, 'pulse', 'wave'],
      description: '动画效果，false表示无动画'
    },
    width: {
      control: { type: 'text' },
      description: '宽度，支持px或百分比'
    },
    height: {
      control: { type: 'text' },
      description: '高度，支持px或百分比'
    }
  }
}

// 最简单的测试用例
export const Default = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div style="padding: 24px; min-width: 300px;">
        <h3 style="margin-bottom: 16px;">默认骨架屏</h3>
        <Skeleton />
      </div>
    `
  })
}

// 基础示例
export const Basic = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div style="padding: 24px; min-width: 400px;">
        <h3 style="margin-bottom: 16px;">基础骨架屏</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <Skeleton variant="text" />
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="rectangular" height="200px" />
          <Skeleton variant="circular" width="40px" height="40px" />
        </div>
      </div>
    `
  })
}

// 变体示例
export const Variants = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div style="padding: 24px; min-width: 500px;">
        <h3 style="margin-bottom: 16px;">骨架屏变体</h3>
        
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div>
            <h4 style="margin-bottom: 8px; font-weight: 500;">文本</h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <Skeleton variant="text" />
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="40%" />
            </div>
          </div>
          
          <div>
            <h4 style="margin-bottom: 8px; font-weight: 500;">矩形</h4>
            <Skeleton variant="rectangular" height="120px" />
          </div>
          
          <div>
            <h4 style="margin-bottom: 8px; font-weight: 500;">圆角矩形</h4>
            <Skeleton variant="rounded" height="80px" />
          </div>
          
          <div>
            <h4 style="margin-bottom: 8px; font-weight: 500;">圆形</h4>
            <div style="display: flex; gap: 16px; align-items: center;">
              <Skeleton variant="circular" width="32px" height="32px" />
              <Skeleton variant="circular" width="48px" height="48px" />
              <Skeleton variant="circular" width="64px" height="64px" />
            </div>
          </div>
        </div>
      </div>
    `
  })
}

// 动画示例
export const Animations = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div style="padding: 24px; min-width: 600px;">
        <h3 style="margin-bottom: 16px;">动画效果</h3>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
          <div>
            <h4 style="margin-bottom: 12px; font-weight: 500;">无动画</h4>
            <Skeleton :animation="false" height="60px" />
          </div>
          
          <div>
            <h4 style="margin-bottom: 12px; font-weight: 500;">脉冲动画</h4>
            <Skeleton animation="pulse" height="60px" />
          </div>
          
          <div>
            <h4 style="margin-bottom: 12px; font-weight: 500;">波浪动画</h4>
            <Skeleton animation="wave" height="60px" />
          </div>
        </div>
      </div>
    `
  })
}

// 卡片加载示例
export const CardLoading = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div style="padding: 24px;">
        <h3 style="margin-bottom: 16px;">卡片加载状态</h3>
        
        <div style="
          max-width: 400px; 
          background: white; 
          border: 1px solid #e5e7eb; 
          border-radius: 8px; 
          padding: 16px; 
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        ">
          <div style="display: flex; align-items: flex-start; gap: 12px;">
            <Skeleton variant="circular" width="40px" height="40px" />
            <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="60%" />
            </div>
          </div>
          
          <Skeleton variant="rectangular" height="200px" style="margin-top: 16px;" />
          
          <div style="margin-top: 16px; display: flex; flex-direction: column; gap: 8px;">
            <Skeleton variant="text" />
            <Skeleton variant="text" width="90%" />
            <Skeleton variant="text" width="70%" />
          </div>
          
          <div style="margin-top: 16px; display: flex; gap: 8px;">
            <Skeleton variant="rounded" width="80px" height="32px" />
            <Skeleton variant="rounded" width="80px" height="32px" />
          </div>
        </div>
      </div>
    `
  })
}

// 控制台
export const Playground = {
  args: {
    variant: 'text',
    animation: 'pulse',
    width: undefined,
    height: undefined
  },
  render: (args) => ({
    components: { Skeleton },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 24px; min-width: 300px;">
        <h3 style="margin-bottom: 16px;">自定义骨架屏</h3>
        <Skeleton 
          :variant="args.variant"
          :animation="args.animation"
          :width="args.width"
          :height="args.height"
        />
      </div>
    `
  })
} 