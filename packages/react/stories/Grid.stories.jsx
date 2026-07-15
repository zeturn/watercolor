import React from 'react';
import Grid from '@/components/Grid/Grid.jsx';

export default {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    docs: {
      description: {
        component: 'Grid组件是一个基于原生 CSS Grid 的响应式 12 列网格系统，不依赖 Tailwind 或宿主项目的工具类。'
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
    },
    sm: {
      control: 'number',
      description: '小屏幕下的列数 (0-12)',
    },
    md: {
      control: 'number',
      description: '中等屏幕下的列数 (0-12)',
    },
    lg: {
      control: 'number',
      description: '大屏幕下的列数 (0-12)',
    },
    xl: {
      control: 'number',
      description: '超大屏幕下的列数 (0-12)',
    },
    spacing: {
      control: { type: 'number', min: 0, max: 12, step: 1 },
      description: '网格项目之间的间距 (0-12)',
    },
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: '布局方向',
    },
    justifyContent: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
      description: '主轴对齐方式',
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      description: '交叉轴对齐方式',
    },
    children: {
      control: 'text',
      description: 'Grid 内容'
    }
  }
};

const Template = (args) => <Grid {...args} />;

const Box = ({ children, style }) => (
  <div style={{
    width: '100%',
    height: '100%',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style
  }}>
    {children}
  </div>
);

export const BasicGrid = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Box style={{ background: '#2196f3', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
          xs=12 sm=6 md=4
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box style={{ background: '#4caf50', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
          xs=12 sm=6 md=4
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box style={{ background: '#ff9800', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
          xs=12 sm=6 md=4
        </Box>
      </Grid>
    </Grid>
  ),
};

export const ResponsiveLayout = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '20px' }}>响应式布局示例</h3>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <div style={{ background: '#1976d2', color: 'white', padding: '24px', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 12px 0' }}>主要内容区域</h4>
            <p style={{ margin: 0 }}>在移动设备上占满整行，在桌面设备上占8列</p>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ background: '#388e3c', color: 'white', padding: '24px', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 12px 0' }}>侧边栏</h4>
            <p style={{ margin: 0 }}>在移动设备上占满整行，在桌面设备上占4列</p>
          </div>
        </Grid>
      </Grid>
    </div>
  ),
};

export const DifferentSpacing = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h4 style={{ marginBottom: '16px' }}>无间距 (spacing=0)</h4>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Box style={{ background: '#e91e63', color: 'white', padding: '16px', textAlign: 'center' }}>1</Box>
          </Grid>
          <Grid item xs={4}>
            <Box style={{ background: '#9c27b0', color: 'white', padding: '16px', textAlign: 'center' }}>2</Box>
          </Grid>
          <Grid item xs={4}>
            <Box style={{ background: '#673ab7', color: 'white', padding: '16px', textAlign: 'center' }}>3</Box>
          </Grid>
        </Grid>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h4 style={{ marginBottom: '16px' }}>小间距 (spacing=2)</h4>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box style={{ background: '#f44336', color: 'white', padding: '16px', borderRadius: '4px', textAlign: 'center' }}>1</Box>
          </Grid>
          <Grid item xs={4}>
            <Box style={{ background: '#ff9800', color: 'white', padding: '16px', borderRadius: '4px', textAlign: 'center' }}>2</Box>
          </Grid>
          <Grid item xs={4}>
            <Box style={{ background: '#ffeb3b', color: 'black', padding: '16px', borderRadius: '4px', textAlign: 'center' }}>3</Box>
          </Grid>
        </Grid>
      </div>

      <div>
        <h4 style={{ marginBottom: '16px' }}>大间距 (spacing=6)</h4>
        <Grid container spacing={6}>
          <Grid item xs={4}>
            <Box style={{ background: '#4caf50', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>1</Box>
          </Grid>
          <Grid item xs={4}>
            <Box style={{ background: '#2196f3', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>2</Box>
          </Grid>
          <Grid item xs={4}>
            <Box style={{ background: '#00bcd4', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>3</Box>
          </Grid>
        </Grid>
      </div>
    </div>
  ),
};

export const AlignmentOptions = {
    render: () => (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ marginBottom: '16px' }}>居中对齐</h4>
          <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: '100px', background: '#f5f5f5', borderRadius: '8px' }}>
            <Grid item xs={3}>
              <Box style={{ background: '#2196f3', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>项目1</Box>
            </Grid>
            <Grid item xs={3}>
              <Box style={{ background: '#4caf50', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>项目2</Box>
            </Grid>
            <Grid item xs={3}>
              <Box style={{ background: '#ff9800', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>项目3</Box>
            </Grid>
          </Grid>
        </div>
        <div>
          <h4 style={{ marginBottom: '16px' }}>两端对齐</h4>
          <Grid container spacing={3} justifyContent="space-between" style={{ minHeight: '100px', background: '#f5f5f5', borderRadius: '8px' }}>
            <Grid item xs={3}>
                <Box style={{ background: '#f44336', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>项目1</Box>
            </Grid>
            <Grid item xs={3}>
                <Box style={{ background: '#e91e63', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>项目2</Box>
            </Grid>
          </Grid>
        </div>
      </div>
    ),
  };
  
export const NestedGrid = {
    render: () => (
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box style={{ background: '#9c27b0', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                            内部网格1
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box style={{ background: '#673ab7', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                            内部网格2
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Box style={{ background: '#009688', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                    外部项目
                </Box>
            </Grid>
        </Grid>
    )
}
