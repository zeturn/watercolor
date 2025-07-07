import React from 'react';
import NumberAnimation from '@/components/NumberAnimation/NumberAnimation.jsx';

export default {
  title: 'Components/NumberAnimation (React)',
  component: NumberAnimation,
  parameters: {
    docs: {
      description: {
        component: '数字递增动画组件，支持格式化和本地化显示。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    from: { 
      control: 'number',
      description: '起始数值'
    },
    to: { 
      control: 'number',
      description: '目标数值'
    },
    duration: { 
      control: { type: 'number', min: 500, step: 100 },
      description: '动画持续时间（毫秒）'
    },
    precision: { 
      control: { type: 'number', min: 0, max: 4, step: 1 },
      description: '小数位数'
    },
    showSeparator: { 
      control: 'boolean',
      description: '是否显示千分位分隔符'
    },
    locale: { 
      control: 'text',
      description: '本地化设置'
    },
    active: {
      control: 'boolean',
      description: '是否激活动画'
    }
  }
};

export const Basic = {
  args: {
    from: 0,
    to: 12345,
    duration: 3000,
    precision: 0,
    showSeparator: true,
    active: true
  },
  render: (args) => (
    <NumberAnimation 
      {...args} 
      style={{ fontSize: '32px', fontWeight: 'bold' }} 
    />
  )
};

export const WithPrecision = {
  render: () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">不同精度的数字动画</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-center">
          <h4 className="mb-2">整数</h4>
          <NumberAnimation 
            from={0} 
            to={1000} 
            duration={2000} 
            precision={0}
            showSeparator={true}
            style={{ fontSize: '24px', fontWeight: 'bold', color: '#2196f3' }}
          />
        </div>
        <div className="text-center">
          <h4 className="mb-2">一位小数</h4>
          <NumberAnimation 
            from={0} 
            to={98.6} 
            duration={2000} 
            precision={1}
            style={{ fontSize: '24px', fontWeight: 'bold', color: '#4caf50' }}
          />
        </div>
        <div className="text-center">
          <h4 className="mb-2">两位小数</h4>
          <NumberAnimation 
            from={0} 
            to={3.14} 
            duration={2000} 
            precision={2}
            style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff9800' }}
          />
        </div>
        <div className="text-center">
          <h4 className="mb-2">百分比</h4>
          <NumberAnimation 
            from={0} 
            to={85.67} 
            duration={2000} 
            precision={2}
            style={{ fontSize: '24px', fontWeight: 'bold', color: '#e91e63' }}
          />
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#e91e63' }}>%</span>
        </div>
      </div>
    </div>
  )
};

export const CounterExample = {
  render: () => (
    <div className="text-center space-y-6">
      <h3 className="text-lg font-semibold mb-4">计数器示例</h3>
      <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
        <h2 className="text-2xl mb-4">网站访问量</h2>
        <NumberAnimation 
          from={0} 
          to={1234567} 
          duration={4000} 
          precision={0}
          showSeparator={true}
          style={{ fontSize: '48px', fontWeight: 'bold' }}
        />
        <p className="mt-4 text-blue-100">实时统计数据</p>
      </div>
    </div>
  )
};

export const MultipleCounts = {
  render: () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">多项数据展示</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center border">
          <div className="text-blue-500 text-4xl mb-2">👥</div>
          <h4 className="text-gray-600 mb-2">用户总数</h4>
          <NumberAnimation 
            from={0} 
            to={45632} 
            duration={3000} 
            precision={0}
            showSeparator={true}
            style={{ fontSize: '28px', fontWeight: 'bold', color: '#2196f3' }}
          />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center border">
          <div className="text-green-500 text-4xl mb-2">💰</div>
          <h4 className="text-gray-600 mb-2">总收入</h4>
          <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#4caf50' }}>¥</span>
          <NumberAnimation 
            from={0} 
            to={2856734.50} 
            duration={3500} 
            precision={2}
            showSeparator={true}
            style={{ fontSize: '28px', fontWeight: 'bold', color: '#4caf50' }}
          />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center border">
          <div className="text-orange-500 text-4xl mb-2">📊</div>
          <h4 className="text-gray-600 mb-2">完成率</h4>
          <NumberAnimation 
            from={0} 
            to={92.8} 
            duration={2500} 
            precision={1}
            style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff9800' }}
          />
          <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff9800' }}>%</span>
        </div>
      </div>
    </div>
  )
};
