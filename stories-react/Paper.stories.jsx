import React, { useState } from 'react';
import Paper from '@/components/Paper/Paper.jsx';

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
  tags: ['autodocs'],
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
};

export const Default = {
  args: {
    elevation: 1
  },
  render: (args) => (
    <Paper {...args} style={{ padding: '24px', maxWidth: '400px' }}>
      <h3 style={{ margin: '0 0 16px 0' }}>默认Paper</h3>
      <p style={{ margin: '0', color: '#666' }}>
        这是一个带有轻微阴影的Paper容器，用于包装内容并使其在页面上突出显示。
      </p>
    </Paper>
  )
};

export const ElevationLevels = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
      gap: '24px', 
      padding: '24px', 
      background: '#f5f5f5' 
    }}>
      {[0, 1, 3, 6, 12, 24].map(elevation => (
        <Paper key={elevation} elevation={elevation} style={{ padding: '16px', textAlign: 'center' }}>
          <h4 style={{ margin: '0 0 8px 0' }}>Elevation {elevation}</h4>
          <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>
            {elevation === 0 ? '无阴影' : 
             elevation === 1 ? '轻微阴影' :
             elevation === 3 ? '中等阴影' :
             elevation === 6 ? '较强阴影' :
             elevation === 12 ? '强阴影' : '最强阴影'}
          </p>
        </Paper>
      ))}
    </div>
  )
};

export const OutlinedVariant = {
  args: {
    variant: 'outlined'
  },
  render: (args) => (
    <div style={{ padding: '24px', background: '#f5f5f5' }}>
      <Paper {...args} style={{ padding: '24px', maxWidth: '400px' }}>
        <h3 style={{ margin: '0 0 16px 0' }}>边框变体</h3>
        <p style={{ margin: '0', color: '#666' }}>
          这个Paper使用边框而不是阴影来定义边界，适用于需要更清晰分隔的界面。
        </p>
      </Paper>
    </div>
  )
};

export const SquareVariant = {
  args: {
    square: true,
    elevation: 4
  },
  render: (args) => (
    <Paper {...args} style={{ padding: '24px', maxWidth: '400px' }}>
      <h3 style={{ margin: '0 0 16px 0' }}>方形Paper</h3>
      <p style={{ margin: '0', color: '#666' }}>
        这个Paper没有圆角，呈现方形外观，适用于需要更正式或棱角分明设计的场景。
      </p>
    </Paper>
  )
};

export const CardExample = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '24px', 
      padding: '24px' 
    }}>
      <Paper elevation={2} style={{ overflow: 'hidden' }}>
        <div style={{ 
          height: '160px', 
          background: 'linear-gradient(45deg, #2196f3, #21cbf3)', 
          position: 'relative' 
        }}>
          <div style={{ 
            position: 'absolute', 
            bottom: '16px', 
            left: '16px', 
            color: 'white' 
          }}>
            <h3 style={{ margin: '0', fontSize: '20px' }}>产品卡片</h3>
          </div>
        </div>
        <div style={{ padding: '16px' }}>
          <p style={{ margin: '0 0 12px 0', color: '#666' }}>
            这是一个使用Paper组件创建的产品卡片示例，展示了如何组合不同元素。
          </p>
          <button style={{ 
            background: '#2196f3', 
            color: 'white', 
            border: 'none', 
            padding: '8px 16px', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}>
            了解更多
          </button>
        </div>
      </Paper>
      
      <Paper variant="outlined">
        <div style={{ padding: '16px', borderBottom: '1px solid #e0e0e0' }}>
          <h3 style={{ margin: '0' }}>用户信息</h3>
        </div>
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              background: '#4caf50', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white', 
              fontWeight: 'bold', 
              marginRight: '12px' 
            }}>
              U
            </div>
            <div>
              <h4 style={{ margin: '0', fontSize: '16px' }}>张三</h4>
              <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>高级开发者</p>
            </div>
          </div>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
            擅长前端开发和UI设计，有5年以上的工作经验。
          </p>
        </div>
      </Paper>
      
      <Paper elevation={8} style={{ padding: '24px', textAlign: 'center' }}>
        <div style={{ 
          width: '60px', 
          height: '60px', 
          background: '#ff9800', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '0 auto 16px', 
          color: 'white', 
          fontSize: '24px' 
        }}>
          📊
        </div>
        <h3 style={{ margin: '0 0 8px 0' }}>数据统计</h3>
        <p style={{ margin: '0 0 16px 0', color: '#666', fontSize: '14px' }}>
          实时数据监控面板
        </p>
        <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ff9800' }}>
          1,234
        </div>
      </Paper>
    </div>
  )
};

export const InteractivePaper = {
  render: () => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    
    const items = ['🎨', '📱', '💻', '🚀', '⚡', '🎯'];
    
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '16px', 
        padding: '24px' 
      }}>
        {items.map((icon, index) => (
          <Paper 
            key={index}
            elevation={hoveredIndex === index ? 8 : 2}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
            style={{ 
              padding: '20px', 
              textAlign: 'center', 
              cursor: 'pointer', 
              transition: 'all 0.3s ease' 
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>{icon}</div>
            <h4 style={{ margin: '0 0 8px 0' }}>项目 {index + 1}</h4>
            <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>
              悬停查看效果
            </p>
          </Paper>
        ))}
      </div>
    );
  }
};

export const ResponsiveCards = {
  render: () => (
    <div className="space-y-6 p-6">
      <h3 className="text-lg font-semibold mb-4">响应式卡片布局</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }, (_, index) => (
          <Paper key={index} elevation={3} className="overflow-hidden">
            <div className={`h-32 bg-gradient-to-br ${
              index % 6 === 0 ? 'from-red-400 to-red-600' :
              index % 6 === 1 ? 'from-blue-400 to-blue-600' :
              index % 6 === 2 ? 'from-green-400 to-green-600' :
              index % 6 === 3 ? 'from-yellow-400 to-yellow-600' :
              index % 6 === 4 ? 'from-purple-400 to-purple-600' :
              'from-pink-400 to-pink-600'
            }`} />
            <div className="p-4">
              <h4 className="font-semibold mb-2">卡片标题 {index + 1}</h4>
              <p className="text-sm text-gray-600 mb-3">
                这是卡片的描述内容，展示了Paper组件在实际项目中的应用效果。
              </p>
              <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors">
                查看详情
              </button>
            </div>
          </Paper>
        ))}
      </div>
    </div>
  )
};
