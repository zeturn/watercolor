import Grid from '../src/components/Grid/Grid.vue'

/**
 * @autodoc
 * Grid组件提供了一个灵活的网格布局系统，基于Flexbox实现。
 * 它支持容器和项目两种模式，提供了12列的响应式网格系统。
 */
export default {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    docs: {
      description: {
        component: 'Grid组件是一个基于Flexbox的响应式网格系统，支持12列布局和多种对齐方式。可以作为容器（container）或项目（item）使用。'
      }
    }
  },
  argTypes: {
    container: {
      control: 'boolean',
      description: '是否为网格容器',
      defaultValue: false
    },
    item: {
      control: 'boolean',
      description: '是否为网格项目',
      defaultValue: false
    },
    xs: {
      control: 'number',
      description: '超小屏幕下的列数 (0-12)',
      min: 0,
      max: 12
    },
    sm: {
      control: 'number',
      description: '小屏幕下的列数 (0-12)',
      min: 0,
      max: 12
    },
    md: {
      control: 'number',
      description: '中等屏幕下的列数 (0-12)',
      min: 0,
      max: 12
    },
    lg: {
      control: 'number',
      description: '大屏幕下的列数 (0-12)',
      min: 0,
      max: 12
    },
    xl: {
      control: 'number',
      description: '超大屏幕下的列数 (0-12)',
      min: 0,
      max: 12
    },
    spacing: {
      control: 'number',
      description: '网格项目之间的间距',
      min: 0,
      max: 12
    },
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'Flex方向',
      defaultValue: 'row'
    },
    justifyContent: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
      description: '主轴对齐方式',
      defaultValue: 'flex-start'
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      description: '交叉轴对齐方式',
      defaultValue: 'stretch'
    }
  }
}

export const BasicGrid = {
  render: () => ({
    components: { Grid },
    template: `
      <Grid container spacing="2">
        <Grid item xs="12" sm="6" md="4">
          <div style="background: #2196f3; color: white; padding: 16px; border-radius: 8px; text-align: center;">
            xs=12 sm=6 md=4
          </div>
        </Grid>
        <Grid item xs="12" sm="6" md="4">
          <div style="background: #4caf50; color: white; padding: 16px; border-radius: 8px; text-align: center;">
            xs=12 sm=6 md=4
          </div>
        </Grid>
        <Grid item xs="12" sm="6" md="4">
          <div style="background: #ff9800; color: white; padding: 16px; border-radius: 8px; text-align: center;">
            xs=12 sm=6 md=4
          </div>
        </Grid>
      </Grid>
    `
  })
}

export const ResponsiveLayout = {
  render: () => ({
    components: { Grid },
    template: `
      <div style="padding: 20px;">
        <h3 style="margin-bottom: 20px;">响应式布局示例</h3>
        <Grid container spacing="3">
          <Grid item xs="12" md="8">
            <div style="background: #1976d2; color: white; padding: 24px; border-radius: 8px;">
              <h4 style="margin: 0 0 12px 0;">主要内容区域</h4>
              <p style="margin: 0;">在移动设备上占满整行，在桌面设备上占8列</p>
            </div>
          </Grid>
          <Grid item xs="12" md="4">
            <div style="background: #388e3c; color: white; padding: 24px; border-radius: 8px;">
              <h4 style="margin: 0 0 12px 0;">侧边栏</h4>
              <p style="margin: 0;">在移动设备上占满整行，在桌面设备上占4列</p>
            </div>
          </Grid>
        </Grid>
      </div>
    `
  })
}

export const DifferentSpacing = {
  render: () => ({
    components: { Grid },
    template: `
      <div style="padding: 20px;">
        <div style="margin-bottom: 32px;">
          <h4 style="margin-bottom: 16px;">无间距 (spacing=0)</h4>
          <Grid container spacing="0">
            <Grid item xs="4">
              <div style="background: #e91e63; color: white; padding: 16px; text-align: center;">1</div>
            </Grid>
            <Grid item xs="4">
              <div style="background: #9c27b0; color: white; padding: 16px; text-align: center;">2</div>
            </Grid>
            <Grid item xs="4">
              <div style="background: #673ab7; color: white; padding: 16px; text-align: center;">3</div>
            </Grid>
          </Grid>
        </div>
        
        <div style="margin-bottom: 32px;">
          <h4 style="margin-bottom: 16px;">小间距 (spacing=2)</h4>
          <Grid container spacing="2">
            <Grid item xs="4">
              <div style="background: #f44336; color: white; padding: 16px; border-radius: 4px; text-align: center;">1</div>
            </Grid>
            <Grid item xs="4">
              <div style="background: #ff9800; color: white; padding: 16px; border-radius: 4px; text-align: center;">2</div>
            </Grid>
            <Grid item xs="4">
              <div style="background: #ffeb3b; color: black; padding: 16px; border-radius: 4px; text-align: center;">3</div>
            </Grid>
          </Grid>
        </div>
        
        <div>
          <h4 style="margin-bottom: 16px;">大间距 (spacing=6)</h4>
          <Grid container spacing="6">
            <Grid item xs="4">
              <div style="background: #4caf50; color: white; padding: 16px; border-radius: 8px; text-align: center;">1</div>
            </Grid>
            <Grid item xs="4">
              <div style="background: #2196f3; color: white; padding: 16px; border-radius: 8px; text-align: center;">2</div>
            </Grid>
            <Grid item xs="4">
              <div style="background: #00bcd4; color: white; padding: 16px; border-radius: 8px; text-align: center;">3</div>
            </Grid>
          </Grid>
        </div>
      </div>
    `
  })
}

export const AlignmentOptions = {
  render: () => ({
    components: { Grid },
    template: `
      <div style="padding: 20px;">
        <div style="margin-bottom: 32px;">
          <h4 style="margin-bottom: 16px;">居中对齐</h4>
          <Grid container spacing="3" justifyContent="center" alignItems="center" style="min-height: 100px; background: #f5f5f5; border-radius: 8px;">
            <Grid item xs="3">
              <div style="background: #2196f3; color: white; padding: 16px; border-radius: 8px; text-align: center;">项目1</div>
            </Grid>
            <Grid item xs="3">
              <div style="background: #4caf50; color: white; padding: 16px; border-radius: 8px; text-align: center;">项目2</div>
            </Grid>
          </Grid>
        </div>
        
        <div style="margin-bottom: 32px;">
          <h4 style="margin-bottom: 16px;">两端对齐</h4>
          <Grid container spacing="3" justifyContent="space-between" style="background: #f5f5f5; padding: 16px; border-radius: 8px;">
            <Grid item xs="auto">
              <div style="background: #ff9800; color: white; padding: 16px; border-radius: 8px;">左侧</div>
            </Grid>
            <Grid item xs="auto">
              <div style="background: #e91e63; color: white; padding: 16px; border-radius: 8px;">右侧</div>
            </Grid>
          </Grid>
        </div>
        
        <div>
          <h4 style="margin-bottom: 16px;">列方向布局</h4>
          <Grid container spacing="2" direction="column" alignItems="center" style="background: #f5f5f5; padding: 16px; border-radius: 8px;">
            <Grid item>
              <div style="background: #9c27b0; color: white; padding: 12px 24px; border-radius: 8px;">第一项</div>
            </Grid>
            <Grid item>
              <div style="background: #673ab7; color: white; padding: 12px 24px; border-radius: 8px;">第二项</div>
            </Grid>
            <Grid item>
              <div style="background: #3f51b5; color: white; padding: 12px 24px; border-radius: 8px;">第三项</div>
            </Grid>
          </Grid>
        </div>
      </div>
    `
  })
}

export const NestedGrids = {
  render: () => ({
    components: { Grid },
    template: `
      <Grid container spacing="3">
        <Grid item xs="12" md="6">
          <div style="background: #e3f2fd; padding: 16px; border-radius: 8px;">
            <h4 style="margin: 0 0 16px 0;">嵌套网格 1</h4>
            <Grid container spacing="2">
              <Grid item xs="6">
                <div style="background: #2196f3; color: white; padding: 12px; border-radius: 4px; text-align: center;">A</div>
              </Grid>
              <Grid item xs="6">
                <div style="background: #1976d2; color: white; padding: 12px; border-radius: 4px; text-align: center;">B</div>
              </Grid>
              <Grid item xs="12">
                <div style="background: #0d47a1; color: white; padding: 12px; border-radius: 4px; text-align: center;">C</div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs="12" md="6">
          <div style="background: #f3e5f5; padding: 16px; border-radius: 8px;">
            <h4 style="margin: 0 0 16px 0;">嵌套网格 2</h4>
            <Grid container spacing="2">
              <Grid item xs="4">
                <div style="background: #9c27b0; color: white; padding: 12px; border-radius: 4px; text-align: center;">X</div>
              </Grid>
              <Grid item xs="4">
                <div style="background: #7b1fa2; color: white; padding: 12px; border-radius: 4px; text-align: center;">Y</div>
              </Grid>
              <Grid item xs="4">
                <div style="background: #4a148c; color: white; padding: 12px; border-radius: 4px; text-align: center;">Z</div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    `
  })
} 