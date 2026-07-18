import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Box from '@/components/Box/Box.jsx'

describe('Box (React)', () => {
  it('renders without crashing', () => {
    render(<Box>Box content</Box>)
    expect(screen.getByText('Box content')).toBeInTheDocument()
  })

  it('renders with default props', () => {
    render(<Box>Test Content</Box>)
    const box = screen.getByText('Test Content')
    expect(box).toBeInTheDocument()
    expect(box.tagName).toBe('DIV')
  })

  it('renders children content correctly', () => {
    const testContent = 'Box Test Content'
    render(<Box>{testContent}</Box>)
    expect(screen.getByText(testContent)).toBeInTheDocument()
  })

  it('renders with custom component', () => {
    render(<Box component="section">Test</Box>)
    const box = screen.getByText('Test')
    expect(box.tagName).toBe('SECTION')
  })

  it('applies custom className', () => {
    const customClass = 'custom-box-class'
    render(<Box className={customClass}>Test</Box>)
    const box = screen.getByText('Test')
    expect(box).toHaveClass(customClass)
  })

  it('applies custom style', () => {
    const customStyle = { backgroundColor: 'red', color: 'white' }
    render(<Box style={customStyle}>Test</Box>)
    const box = screen.getByText('Test')
    expect(box).toHaveStyle({ color: 'rgb(255, 255, 255)' })
  })

  it('passes through additional props', () => {
    render(<Box data-testid="box" id="test-box">Test</Box>)
    const box = screen.getByTestId('box')
    expect(box).toHaveAttribute('id', 'test-box')
  })

  // 间距测试
  describe('Spacing props', () => {
    it('applies padding props', () => {
      render(<Box p={4} pt={2} pr={3} pb={1} pl={5}>Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ padding: '0.5rem 0.75rem 0.25rem 1.25rem' })
    })

    it('applies margin props', () => {
      render(<Box m={6} mt={2} mr={4} mb={8} ml={3}>Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ margin: '0.5rem 1rem 2rem 0.75rem' })
    })

    it('applies px and py props', () => {
      render(<Box px={4} py={2}>Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ paddingLeft: '1rem', paddingRight: '1rem' })
      expect(box).toHaveStyle({ paddingTop: '0.5rem', paddingBottom: '0.5rem' })
    })

    it('applies mx and my props', () => {
      render(<Box mx={3} my={5}>Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ marginLeft: '0.75rem', marginRight: '0.75rem' })
      expect(box).toHaveStyle({ marginTop: '1.25rem', marginBottom: '1.25rem' })
    })

    it('handles custom spacing values', () => {
      render(<Box p="20px" m="10px">Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ padding: '20px', margin: '10px' })
    })
  })

  // 布局测试
  describe('Layout props', () => {
    it('applies display prop', () => {
      render(<Box display="flex">Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ display: 'flex' })
      expect(box).toHaveClass('flex')
    })

    it('applies flexDirection prop', () => {
      render(<Box display="flex" flexDirection="column">Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ flexDirection: 'column' })
      expect(box).toHaveClass('flex-col')
    })

    it('applies justifyContent prop', () => {
      render(<Box display="flex" justifyContent="center">Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ justifyContent: 'center' })
      expect(box).toHaveClass('justify-center')
    })

    it('applies alignItems prop', () => {
      render(<Box display="flex" alignItems="center">Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ alignItems: 'center' })
      expect(box).toHaveClass('items-center')
    })

    it('applies flexWrap prop', () => {
      render(<Box display="flex" flexWrap="wrap">Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ flexWrap: 'wrap' })
      expect(box).toHaveClass('flex-wrap')
    })

    it('applies gap prop', () => {
      render(<Box display="flex" gap={4}>Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ gap: '4px' })
      expect(box).toHaveClass('gap-4')
    })

    it('handles custom gap value', () => {
      render(<Box display="flex" gap="15px">Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ gap: '15px' })
    })
  })

  // 颜色和边框测试
  describe('Color and border props', () => {
    it('applies bgcolor prop', () => {
      render(<Box bgcolor="#ff0000">Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ backgroundColor: '#ff0000' })
    })

    it('applies color prop', () => {
      render(<Box color="#ffffff">Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ color: '#ffffff' })
    })

    it('applies border prop', () => {
      render(<Box border="1px solid black">Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ border: '1px solid black' })
    })

    it('applies borderRadius prop with number', () => {
      render(<Box borderRadius={8}>Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ borderRadius: '8px' })
    })

    it('applies borderRadius prop with string', () => {
      render(<Box borderRadius="50%">Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ borderRadius: '50%' })
    })
  })

  // 尺寸测试
  describe('Size props', () => {
    it('applies width and height props', () => {
      render(<Box width={200} height={100}>Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ width: '200px', height: '100px' })
    })

    it('applies minWidth and minHeight props', () => {
      render(<Box minWidth={150} minHeight={75}>Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ minWidth: '150px', minHeight: '75px' })
    })

    it('applies maxWidth and maxHeight props', () => {
      render(<Box maxWidth={300} maxHeight={200}>Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ maxWidth: '300px', maxHeight: '200px' })
    })

    it('handles string size values', () => {
      render(<Box width="50%" height="100vh">Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ width: '50%', height: '100vh' })
    })
  })

  // 复杂组合测试
  describe('Complex combinations', () => {
    it('combines multiple layout props correctly', () => {
      render(
        <Box 
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={4}
          p={6}
          bgcolor="#f0f0f0"
          borderRadius={8}
          width={300}
          height={200}
        >
          Complex Test
        </Box>
      )
      const box = screen.getByText('Complex Test')
      
      // 检查样式
      expect(box).toHaveStyle({ display: 'flex' })
      expect(box).toHaveStyle({ flexDirection: 'column' })
      expect(box).toHaveStyle({ justifyContent: 'center' })
      expect(box).toHaveStyle({ alignItems: 'center' })
      expect(box).toHaveStyle({ gap: '4px' })
      expect(box).toHaveStyle({ padding: '1.5rem' })
      expect(box).toHaveStyle({ backgroundColor: '#f0f0f0' })
      expect(box).toHaveStyle({ borderRadius: '8px' })
      expect(box).toHaveStyle({ width: '300px' })
      expect(box).toHaveStyle({ height: '200px' })
      
      // 检查类名
      expect(box).toHaveClass('flex')
      expect(box).toHaveClass('flex-col')
      expect(box).toHaveClass('justify-center')
      expect(box).toHaveClass('items-center')
      expect(box).toHaveClass('gap-4')
    })

    it('handles empty children', () => {
      render(<Box />)
      const box = document.querySelector('div')
      expect(box).toBeInTheDocument()
      expect(box.tagName).toBe('DIV')
    })

    it('handles complex children content', () => {
      render(
        <Box display="flex" gap={2}>
          <div data-testid="child1">Child 1</div>
          <div data-testid="child2">Child 2</div>
          <div data-testid="child3">Child 3</div>
        </Box>
      )
      expect(screen.getByTestId('child1')).toBeInTheDocument()
      expect(screen.getByTestId('child2')).toBeInTheDocument()
      expect(screen.getByTestId('child3')).toBeInTheDocument()
    })
  })

  // 边界情况测试
  describe('Edge cases', () => {
    it('handles undefined props gracefully', () => {
      render(<Box p={undefined} m={undefined}>Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toBeInTheDocument()
    })

    it('handles zero values correctly', () => {
      render(<Box p={0} m={0} gap={0}>Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ padding: '0' })
      expect(box).toHaveStyle({ margin: '0' })
      expect(box).toHaveStyle({ gap: '0px' })
    })

    it('handles negative values', () => {
      render(<Box p={-4} m={-2}>Test</Box>)
      const box = screen.getByText('Test')
      expect(box).toHaveStyle({ padding: '-4px' })
      expect(box).toHaveStyle({ margin: '-2px' })
    })
  })
})
