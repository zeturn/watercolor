import React from 'react'
import Box from '@/components/Box/Box.jsx'

/**
 * @autodoc
 * Box组件是一个灵活的布局组件，支持各种spacing、display、flexbox和样式属性。
 * 它可以作为任何HTML元素渲染，并提供了完整的CSS-in-JS样式API。
 */
export default {
  title: 'Layout/Box (React)',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: 'Box组件提供了一个通用的容器，支持spacing、布局、颜色等属性的快速设置。类似于Material-UI的Box组件。'
      }
    }
  },
  argTypes: {
    component: {
      control: 'text',
      description: '渲染的HTML标签',
      defaultValue: 'div'
    },
    display: {
      control: 'select',
      options: ['flex', 'block', 'inline', 'inline-block', 'none', 'grid'],
      description: 'CSS display属性'
    },
    flexDirection: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'Flex方向'
    },
    justifyContent: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
      description: '主轴对齐方式'
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      description: '交叉轴对齐方式'
    },
    p: {
      control: 'number',
      description: '内边距 - 所有方向'
    },
    bgcolor: {
      control: 'color',
      description: '背景颜色'
    },
    border: {
      control: 'text',
      description: '边框样式'
    },
    borderRadius: {
      control: 'number',
      description: '圆角半径'
    }
  }
}

export const Default = {
  args: {
    p: 4,
    bgcolor: '#f0f0f0',
    borderRadius: 8
  },
  render: (args) => (
    <Box {...args}>
      默认Box容器
    </Box>
  )
}

export const FlexContainer = {
  args: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    p: 4,
    bgcolor: '#e3f2fd',
    borderRadius: 8
  },
  render: (args) => (
    <Box {...args}>
      <div style={{padding: '8px', background: '#1976d2', color: 'white', borderRadius: '4px'}}>项目1</div>
      <div style={{padding: '8px', background: '#1976d2', color: 'white', borderRadius: '4px'}}>项目2</div>
      <div style={{padding: '8px', background: '#1976d2', color: 'white', borderRadius: '4px'}}>项目3</div>
    </Box>
  )
}

export const SpacingExample = {
  render: () => (
    <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
      <Box p="2" bgcolor="#ffebee" borderRadius="4">p=2</Box>
      <Box p="4" bgcolor="#f3e5f5" borderRadius="4">p=4</Box>
      <Box p="6" bgcolor="#e8f5e8" borderRadius="4">p=6</Box>
      <Box px="4" py="2" bgcolor="#fff3e0" borderRadius="4">px=4, py=2</Box>
    </div>
  )
}

export const ResponsiveGrid = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="4">
      <Box display="flex" gap="2" flexWrap="wrap">
        <Box width="100px" height="100px" bgcolor="#ff9800" borderRadius="8" display="flex" alignItems="center" justifyContent="center" color="white">1</Box>
        <Box width="100px" height="100px" bgcolor="#2196f3" borderRadius="8" display="flex" alignItems="center" justifyContent="center" color="white">2</Box>
        <Box width="100px" height="100px" bgcolor="#4caf50" borderRadius="8" display="flex" alignItems="center" justifyContent="center" color="white">3</Box>
      </Box>
      <Box display="flex" flexDirection="column" gap="2" bgcolor="#f5f5f5" p="4" borderRadius="8">
        <Box height="40px" bgcolor="#9c27b0" borderRadius="4"></Box>
        <Box height="40px" bgcolor="#e91e63" borderRadius="4"></Box>
        <Box height="40px" bgcolor="#ff5722" borderRadius="4"></Box>
      </Box>
    </Box>
  )
}
