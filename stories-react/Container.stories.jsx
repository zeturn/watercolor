import React from 'react'
import Container from '@/components/Container/Container.jsx'

/**
 * @autodoc
 * Container组件提供了一个响应式的容器，用于在不同屏幕尺寸下居中和限制内容的最大宽度。
 * 它包含了自适应的内边距和多种预设的最大宽度选项。
 */
export default {
  title: 'Layout/Container (React)',
  component: Container,
  parameters: {
    docs: {
      description: {
        component: 'Container组件是一个响应式容器，提供了水平居中和最大宽度限制的功能。支持不同的断点和流式布局。'
      }
    }
  },
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: '最大宽度断点',
      defaultValue: 'lg'
    },
    fluid: {
      control: 'boolean',
      description: '是否为流式布局（占满整个宽度）',
      defaultValue: false
    },
    fixed: {
      control: 'boolean',
      description: '是否为固定布局',
      defaultValue: false
    }
  }
}

export const Default = {
  args: {
    maxWidth: 'lg'
  },
  render: (args) => (
    <div style={{background: '#f0f0f0', minHeight: '200px'}}>
      <Container {...args}>
        <div style={{background: '#2196f3', color: 'white', padding: '24px', borderRadius: '8px', textAlign: 'center'}}>
          <h2 style={{margin: '0 0 16px 0'}}>默认Container (lg)</h2>
          <p style={{margin: 0}}>这是一个居中的容器，在大屏幕上有最大宽度限制</p>
        </div>
      </Container>
    </div>
  )
}

export const DifferentSizes = {
  render: () => (
    <div style={{background: '#f5f5f5', padding: '20px'}}>
      <div style={{marginBottom: '32px'}}>
        <h3 style={{marginBottom: '16px'}}>Extra Small (xs)</h3>
        <Container maxWidth="xs">
          <div style={{background: '#ff9800', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center'}}>
            max-width: xs
          </div>
        </Container>
      </div>
      
      <div style={{marginBottom: '32px'}}>
        <h3 style={{marginBottom: '16px'}}>Small (sm)</h3>
        <Container maxWidth="sm">
          <div style={{background: '#4caf50', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center'}}>
            max-width: sm
          </div>
        </Container>
      </div>
      
      <div style={{marginBottom: '32px'}}>
        <h3 style={{marginBottom: '16px'}}>Medium (md)</h3>
        <Container maxWidth="md">
          <div style={{background: '#2196f3', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center'}}>
            max-width: md
          </div>
        </Container>
      </div>
      
      <div style={{marginBottom: '32px'}}>
        <h3 style={{marginBottom: '16px'}}>Large (lg)</h3>
        <Container maxWidth="lg">
          <div style={{background: '#9c27b0', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center'}}>
            max-width: lg
          </div>
        </Container>
      </div>
      
      <div>
        <h3 style={{marginBottom: '16px'}}>Extra Large (xl)</h3>
        <Container maxWidth="xl">
          <div style={{background: '#e91e63', color: 'white', padding: '16px', borderRadius: '8px', textAlign: 'center'}}>
            max-width: xl
          </div>
        </Container>
      </div>
    </div>
  )
}

export const FluidContainer = {
  args: {
    fluid: true
  },
  render: (args) => (
    <div style={{background: '#f0f0f0', minHeight: '150px'}}>
      <Container {...args}>
        <div style={{background: '#ff5722', color: 'white', padding: '24px', borderRadius: '8px', textAlign: 'center'}}>
          <h2 style={{margin: '0 0 16px 0'}}>流式Container</h2>
          <p style={{margin: 0}}>这个容器会占满整个可用宽度，没有最大宽度限制</p>
        </div>
      </Container>
    </div>
  )
}

export const NestedContainers = {
  render: () => (
    <div style={{background: '#e3f2fd', padding: '20px'}}>
      <Container maxWidth="xl">
        <div style={{background: '#1976d2', color: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
          <h2 style={{margin: '0 0 16px 0'}}>外层Container (xl)</h2>
          <Container maxWidth="md">
            <div style={{background: '#0d47a1', padding: '16px', borderRadius: '8px'}}>
              <h3 style={{margin: '0 0 12px 0'}}>内层Container (md)</h3>
              <p style={{margin: 0}}>嵌套的容器可以创建更复杂的布局结构</p>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  )
}
