import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ColorPicker from '@/components/ColorPicker/ColorPicker.jsx'

describe('ColorPicker (React)', () => {
  it('renders without crashing', () => {
    render(<ColorPicker />)
    expect(true).toBe(true)
  })

  it('renders with default props', () => {
    render(<ColorPicker />)
    const label = document.querySelector('label')
    const input = document.querySelector('input[type="color"]')
    const preview = document.querySelector('.wc-color-picker__preview')

    expect(label).toBeInTheDocument()
    expect(label).toHaveClass('wc-color-picker')
    expect(label).toHaveClass('wc-color-picker--md')
    expect(label).toHaveClass('wc-color-picker--circle')
    
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'color')
    expect(input).toHaveValue('#ffffff')
    
    expect(preview).toBeInTheDocument()
    expect(preview).toHaveClass('wc-color-picker__preview')
  })

  it('renders input and preview elements correctly', () => {
    render(<ColorPicker />)
    const input = document.querySelector('input[type="color"]')
    const preview = document.querySelector('.wc-color-picker__preview')

    expect(input).toBeInTheDocument()
    expect(input).toHaveClass('wc-color-picker__input')
    expect(preview).toBeInTheDocument()
    expect(preview).toHaveStyle({ backgroundColor: '#ffffff' })
  })

  // 基本属性测试
  describe('Basic props', () => {
    it('applies custom value', () => {
      render(<ColorPicker value="#ff0000" />)
      const input = document.querySelector('input[type="color"]')
      const preview = document.querySelector('.wc-color-picker__preview')
      
      expect(input).toHaveValue('#ff0000')
      expect(preview).toHaveStyle({ backgroundColor: '#ff0000' })
    })

    it('applies custom className', () => {
      const customClass = 'custom-color-picker'
      render(<ColorPicker className={customClass} />)
      const label = document.querySelector('label')
      expect(label).toHaveClass(customClass)
    })

    it('handles disabled state', () => {
      render(<ColorPicker disabled={true} />)
      const label = document.querySelector('label')
      const input = document.querySelector('input[type="color"]')
      
      expect(label).toHaveClass('wc-color-picker--disabled')
      expect(input).toBeDisabled()
    })
  })

  // 尺寸测试
  describe('Size variants', () => {
    it('applies small size', () => {
      render(<ColorPicker size="sm" />)
      const label = document.querySelector('label')
      expect(label).toHaveClass('wc-color-picker--sm')
    })

    it('applies medium size by default', () => {
      render(<ColorPicker />)
      const label = document.querySelector('label')
      expect(label).toHaveClass('wc-color-picker--md')
    })

    it('applies large size', () => {
      render(<ColorPicker size="lg" />)
      const label = document.querySelector('label')
      expect(label).toHaveClass('wc-color-picker--lg')
    })
  })

  // 形状测试
  describe('Shape variants', () => {
    it('applies circle shape by default', () => {
      render(<ColorPicker />)
      const label = document.querySelector('label')
      expect(label).toHaveClass('wc-color-picker--circle')
    })

    it('applies square shape', () => {
      render(<ColorPicker shape="square" />)
      const label = document.querySelector('label')
      expect(label).toHaveClass('wc-color-picker--square')
    })

    it('applies rounded shape', () => {
      render(<ColorPicker shape="rounded" />)
      const label = document.querySelector('label')
      expect(label).toHaveClass('wc-color-picker--rounded')
    })
  })

  // 颜色值测试
  describe('Color values', () => {
    it('handles 3-digit hex colors', () => {
      render(<ColorPicker value="#fff" />)
      const preview = document.querySelector('.wc-color-picker__preview')
      expect(preview).toHaveStyle({ backgroundColor: '#fff' })
    })

    it('handles 6-digit hex colors', () => {
      render(<ColorPicker value="#ff0000" />)
      const preview = document.querySelector('.wc-color-picker__preview')
      expect(preview).toHaveStyle({ backgroundColor: '#ff0000' })
    })

    it('handles uppercase hex colors', () => {
      render(<ColorPicker value="#FF00FF" />)
      const preview = document.querySelector('.wc-color-picker__preview')
      expect(preview).toHaveStyle({ backgroundColor: '#FF00FF' })
    })

    it('handles lowercase hex colors', () => {
      render(<ColorPicker value="#00ff00" />)
      const preview = document.querySelector('.wc-color-picker__preview')
      expect(preview).toHaveStyle({ backgroundColor: '#00ff00' })
    })

    it('handles black color', () => {
      render(<ColorPicker value="#000000" />)
      const preview = document.querySelector('.wc-color-picker__preview')
      expect(preview).toHaveStyle({ backgroundColor: '#000000' })
    })

    it('handles white color', () => {
      render(<ColorPicker value="#ffffff" />)
      const preview = document.querySelector('.wc-color-picker__preview')
      expect(preview).toHaveStyle({ backgroundColor: '#ffffff' })
    })
  })

  // 交互测试
  describe('Interactions', () => {
    it('calls onChange when color is changed', () => {
      const onChange = vi.fn()
      render(<ColorPicker onChange={onChange} />)
      const input = document.querySelector('input[type="color"]')
      
      fireEvent.change(input, { target: { value: '#ff0000' } })
      
      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith('#ff0000')
    })

    it('does not call onChange when disabled', () => {
      const onChange = vi.fn()
      render(<ColorPicker onChange={onChange} disabled={true} />)
      const input = document.querySelector('input[type="color"]')
      
      fireEvent.change(input, { target: { value: '#ff0000' } })
      
      expect(onChange).not.toHaveBeenCalled()
    })

    it('does not call onChange when onChange is not provided', () => {
      render(<ColorPicker />)
      const input = document.querySelector('input[type="color"]')
      
      // Should not throw error
      expect(() => {
        fireEvent.change(input, { target: { value: '#ff0000' } })
      }).not.toThrow()
    })

    it('updates preview when value changes', () => {
      const { rerender } = render(<ColorPicker value="#ff0000" />)
      const preview = document.querySelector('.wc-color-picker__preview')
      
      expect(preview).toHaveStyle({ backgroundColor: '#ff0000' })
      
      rerender(<ColorPicker value="#00ff00" />)
      expect(preview).toHaveStyle({ backgroundColor: '#00ff00' })
    })
  })

  // 复杂组合测试
  describe('Complex combinations', () => {
    it('combines all props correctly', () => {
      const onChange = vi.fn()
      render(
        <ColorPicker
          value="#ff00ff"
          onChange={onChange}
          size="lg"
          shape="square"
          disabled={false}
          className="custom-picker"
        />
      )
      
      const label = document.querySelector('label')
      const input = document.querySelector('input[type="color"]')
      const preview = document.querySelector('.wc-color-picker__preview')
      
      // 检查容器类名
      expect(label).toHaveClass('wc-color-picker')
      expect(label).toHaveClass('wc-color-picker--lg')
      expect(label).toHaveClass('wc-color-picker--square')
      expect(label).toHaveClass('custom-picker')
      expect(label).not.toHaveClass('wc-color-picker--disabled')
      
      // 检查输入状态
      expect(input).toHaveValue('#ff00ff')
      expect(input).not.toBeDisabled()
      
      // 检查预览样式
      expect(preview).toHaveStyle({ backgroundColor: '#ff00ff' })
      
      // 检查交互
      fireEvent.change(input, { target: { value: '#00ffff' } })
      expect(onChange).toHaveBeenCalledWith('#00ffff')
    })

    it('combines disabled state with other props', () => {
      render(
        <ColorPicker
          value="#ff0000"
          size="sm"
          shape="rounded"
          disabled={true}
          className="disabled-picker"
        />
      )
      
      const label = document.querySelector('label')
      const input = document.querySelector('input[type="color"]')
      
      expect(label).toHaveClass('wc-color-picker--sm')
      expect(label).toHaveClass('wc-color-picker--rounded')
      expect(label).toHaveClass('wc-color-picker--disabled')
      expect(label).toHaveClass('disabled-picker')
      expect(input).toBeDisabled()
    })
  })

  // CSS类结构测试
  describe('CSS class structure', () => {
    it('has required base class', () => {
      render(<ColorPicker />)
      const label = document.querySelector('label')
      expect(label).toHaveClass('wc-color-picker')
    })

    it('maintains class order and structure', () => {
      render(<ColorPicker size="lg" shape="square" disabled={true} className="custom" />)
      const label = document.querySelector('label')
      const classList = label.className.split(' ')
      
      expect(classList).toContain('wc-color-picker')
      expect(classList).toContain('wc-color-picker--lg')
      expect(classList).toContain('wc-color-picker--square')
      expect(classList).toContain('wc-color-picker--disabled')
      expect(classList).toContain('custom')
    })

    it('does not include disabled class when not disabled', () => {
      render(<ColorPicker disabled={false} />)
      const label = document.querySelector('label')
      expect(label).not.toHaveClass('wc-color-picker--disabled')
    })
  })

  // 边界情况测试
  describe('Edge cases', () => {
    it('handles undefined value gracefully', () => {
      render(<ColorPicker value={undefined} />)
      const input = document.querySelector('input[type="color"]')
      expect(input).toBeInTheDocument()
    })

    it('handles null value gracefully', () => {
      render(<ColorPicker value={null} />)
      const input = document.querySelector('input[type="color"]')
      expect(input).toBeInTheDocument()
    })

    it('handles empty string value', () => {
      render(<ColorPicker value="" />)
      const preview = document.querySelector('.wc-color-picker__preview')
      expect(preview).toHaveStyle({ backgroundColor: '' })
    })

    it('handles invalid color values gracefully', () => {
      render(<ColorPicker value="invalid-color" />)
      const preview = document.querySelector('.wc-color-picker__preview')
      expect(preview).toHaveStyle({ backgroundColor: 'invalid-color' })
    })

    it('handles missing onChange prop', () => {
      render(<ColorPicker />)
      const input = document.querySelector('input[type="color"]')
      
      expect(() => {
        fireEvent.change(input, { target: { value: '#ff0000' } })
      }).not.toThrow()
    })

    it('handles multiple rapid changes', () => {
      const onChange = vi.fn()
      render(<ColorPicker onChange={onChange} />)
      const input = document.querySelector('input[type="color"]')
      
      fireEvent.change(input, { target: { value: '#ff0000' } })
      fireEvent.change(input, { target: { value: '#00ff00' } })
      fireEvent.change(input, { target: { value: '#0000ff' } })
      
      expect(onChange).toHaveBeenCalledTimes(3)
      expect(onChange).toHaveBeenNthCalledWith(1, '#ff0000')
      expect(onChange).toHaveBeenNthCalledWith(2, '#00ff00')
      expect(onChange).toHaveBeenNthCalledWith(3, '#0000ff')
    })
  })

  // 无障碍性测试
  describe('Accessibility', () => {
    it('uses label element for accessibility', () => {
      render(<ColorPicker />)
      const label = document.querySelector('label')
      const input = document.querySelector('input[type="color"]')
      
      expect(label).toBeInTheDocument()
      expect(input).toBeInTheDocument()
      
      // 验证label包含input（隐式关联）
      expect(label).toContainElement(input)
    })

    it('maintains focus behavior', () => {
      render(<ColorPicker />)
      const input = document.querySelector('input[type="color"]')
      
      input.focus()
      expect(document.activeElement).toBe(input)
    })

    it('supports keyboard interaction', () => {
      render(<ColorPicker />)
      const input = document.querySelector('input[type="color"]')
      
      // 颜色输入通常支持键盘交互，但具体行为依赖浏览器
      fireEvent.keyDown(input, { key: 'Enter' })
      expect(input).toBeInTheDocument()
    })
  })

  // 元素结构测试
  describe('Element structure', () => {
    it('has correct HTML structure', () => {
      render(<ColorPicker />)
      
      const label = document.querySelector('label')
      const input = document.querySelector('input[type="color"]')
      const preview = document.querySelector('.wc-color-picker__preview')
      
      expect(label).toBeInTheDocument()
      expect(label).toContainElement(input)
      expect(label).toContainElement(preview)
      
      expect(input).toHaveClass('wc-color-picker__input')
      expect(preview).toHaveClass('wc-color-picker__preview')
    })

    it('maintains element order', () => {
      render(<ColorPicker />)
      const label = document.querySelector('label')
      const children = Array.from(label.children)
      
      expect(children).toHaveLength(2)
      expect(children[0]).toHaveClass('wc-color-picker__input')
      expect(children[1]).toHaveClass('wc-color-picker__preview')
    })
  })
})
