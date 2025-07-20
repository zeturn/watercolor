import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CircularProgress from '@/components/CircularProgress/CircularProgress.jsx'

describe('CircularProgress (React)', () => {
  it('renders without crashing', () => {
    render(<CircularProgress />)
    expect(true).toBe(true)
  })

  it('renders with default props', () => {
    render(<CircularProgress />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toBeInTheDocument()
    expect(progressbar).toHaveClass('wc-circular-progress')
    expect(progressbar).toHaveClass('wc-circular-progress--primary')
    expect(progressbar).toHaveClass('wc-circular-progress--indeterminate')
  })

  it('renders SVG element correctly', () => {
    render(<CircularProgress />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveClass('wc-circular-progress-svg')
    expect(svg).toHaveAttribute('width', '40')
    expect(svg).toHaveAttribute('height', '40')
    expect(svg).toHaveAttribute('viewBox', '0 0 40 40')
  })

  it('renders circles correctly', () => {
    render(<CircularProgress />)
    const circles = document.querySelectorAll('circle')
    expect(circles).toHaveLength(2)
    
    // 背景圆圈
    const bgCircle = circles[0]
    expect(bgCircle).toHaveClass('wc-circular-progress-bg')
    expect(bgCircle).toHaveAttribute('fill', 'none')
    expect(bgCircle).toHaveAttribute('stroke', 'currentColor')
    
    // 进度圆圈
    const progressCircle = circles[1]
    expect(progressCircle).toHaveClass('wc-circular-progress-circle')
    expect(progressCircle).toHaveAttribute('fill', 'none')
    expect(progressCircle).toHaveAttribute('stroke', 'currentColor')
  })

  // 基本属性测试
  describe('Basic props', () => {
    it('applies custom size', () => {
      render(<CircularProgress size={60} />)
      const svg = document.querySelector('svg')
      expect(svg).toHaveAttribute('width', '60')
      expect(svg).toHaveAttribute('height', '60')
      expect(svg).toHaveAttribute('viewBox', '0 0 60 60')
    })

    it('handles string size', () => {
      render(<CircularProgress size="80" />)
      const svg = document.querySelector('svg')
      expect(svg).toHaveAttribute('width', '80')
      expect(svg).toHaveAttribute('height', '80')
    })

    it('applies custom thickness', () => {
      render(<CircularProgress thickness={5} />)
      const circles = document.querySelectorAll('circle')
      circles.forEach(circle => {
        expect(circle).toHaveAttribute('stroke-width', '5')
      })
    })

    it('applies custom className', () => {
      const customClass = 'custom-progress-class'
      render(<CircularProgress className={customClass} />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveClass(customClass)
    })

    it('passes through additional props', () => {
      render(<CircularProgress data-testid="progress" id="test-progress" />)
      const progressbar = screen.getByTestId('progress')
      expect(progressbar).toHaveAttribute('id', 'test-progress')
    })
  })

  // 变体测试
  describe('Variants', () => {
    it('renders indeterminate variant by default', () => {
      render(<CircularProgress />)
      const progressbar = screen.getByRole('progressbar')
      const circle = document.querySelector('.wc-circular-progress-circle')
      
      expect(progressbar).toHaveClass('wc-circular-progress--indeterminate')
      expect(circle).toHaveClass('wc-circular-progress-circle--indeterminate')
    })

    it('renders determinate variant', () => {
      render(<CircularProgress variant="determinate" value={50} />)
      const progressbar = screen.getByRole('progressbar')
      const circle = document.querySelector('.wc-circular-progress-circle')
      
      expect(progressbar).not.toHaveClass('wc-circular-progress--indeterminate')
      expect(circle).not.toHaveClass('wc-circular-progress-circle--indeterminate')
    })

    it('applies correct stroke-dashoffset for determinate variant', () => {
      render(<CircularProgress variant="determinate" value={25} />)
      const circle = document.querySelector('.wc-circular-progress-circle')
      expect(circle).toHaveAttribute('stroke-dashoffset')
      
      // 验证stroke-dashoffset不为0（determinate状态下应该根据value计算）
      const dashoffset = circle.getAttribute('stroke-dashoffset')
      expect(parseFloat(dashoffset)).toBeGreaterThan(0)
    })

    it('sets stroke-dashoffset to 0 for indeterminate variant', () => {
      render(<CircularProgress variant="indeterminate" />)
      const circle = document.querySelector('.wc-circular-progress-circle')
      expect(circle).toHaveAttribute('stroke-dashoffset', '0')
    })
  })

  // 颜色测试
  describe('Colors', () => {
    it('applies primary color by default', () => {
      render(<CircularProgress />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveClass('wc-circular-progress--primary')
    })

    it('applies secondary color', () => {
      render(<CircularProgress color="secondary" />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveClass('wc-circular-progress--secondary')
    })

    it('applies success color', () => {
      render(<CircularProgress color="success" />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveClass('wc-circular-progress--success')
    })

    it('applies warning color', () => {
      render(<CircularProgress color="warning" />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveClass('wc-circular-progress--warning')
    })

    it('applies error color', () => {
      render(<CircularProgress color="error" />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveClass('wc-circular-progress--error')
    })

    it('applies inherit color', () => {
      render(<CircularProgress color="inherit" />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveClass('wc-circular-progress--inherit')
    })
  })

  // 值显示测试
  describe('Value display', () => {
    it('does not show value by default', () => {
      render(<CircularProgress value={50} />)
      const valueElement = document.querySelector('.wc-circular-progress-value')
      expect(valueElement).not.toBeInTheDocument()
    })

    it('shows value when showValue is true', () => {
      render(<CircularProgress value={75} showValue={true} />)
      const valueElement = document.querySelector('.wc-circular-progress-value')
      expect(valueElement).toBeInTheDocument()
      expect(valueElement).toHaveTextContent('75%')
    })

    it('rounds value display correctly', () => {
      render(<CircularProgress value={33.7} showValue={true} />)
      const valueElement = document.querySelector('.wc-circular-progress-value')
      expect(valueElement).toHaveTextContent('34%')
    })

    it('handles zero value', () => {
      render(<CircularProgress value={0} showValue={true} />)
      const valueElement = document.querySelector('.wc-circular-progress-value')
      expect(valueElement).toHaveTextContent('0%')
    })

    it('handles 100% value', () => {
      render(<CircularProgress value={100} showValue={true} />)
      const valueElement = document.querySelector('.wc-circular-progress-value')
      expect(valueElement).toHaveTextContent('100%')
    })
  })

  // 布局选项测试
  describe('Layout options', () => {
    it('applies overlay class when overlay is true', () => {
      render(<CircularProgress overlay={true} />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveClass('wc-circular-progress--overlay')
    })

    it('applies centered class when centered is true', () => {
      render(<CircularProgress centered={true} />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveClass('wc-circular-progress--centered')
    })

    it('applies inline class when inline is true', () => {
      render(<CircularProgress inline={true} />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveClass('wc-circular-progress--inline')
    })

    it('applies multiple layout classes together', () => {
      render(<CircularProgress overlay={true} centered={true} inline={true} />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveClass('wc-circular-progress--overlay')
      expect(progressbar).toHaveClass('wc-circular-progress--centered')
      expect(progressbar).toHaveClass('wc-circular-progress--inline')
    })
  })

  // ARIA属性测试
  describe('ARIA attributes', () => {
    it('has correct ARIA role', () => {
      render(<CircularProgress />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveAttribute('role', 'progressbar')
    })

    it('has correct ARIA min and max values', () => {
      render(<CircularProgress />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveAttribute('aria-valuemin', '0')
      expect(progressbar).toHaveAttribute('aria-valuemax', '100')
    })

    it('has aria-valuenow for determinate variant', () => {
      render(<CircularProgress variant="determinate" value={60} />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveAttribute('aria-valuenow', '60')
    })

    it('does not have aria-valuenow for indeterminate variant', () => {
      render(<CircularProgress variant="indeterminate" />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).not.toHaveAttribute('aria-valuenow')
    })
  })

  // 值范围测试
  describe('Value ranges', () => {
    it('handles value of 0', () => {
      render(<CircularProgress variant="determinate" value={0} />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveAttribute('aria-valuenow', '0')
    })

    it('handles value of 100', () => {
      render(<CircularProgress variant="determinate" value={100} />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveAttribute('aria-valuenow', '100')
    })

    it('handles decimal values', () => {
      render(<CircularProgress variant="determinate" value={33.33} />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveAttribute('aria-valuenow', '33.33')
    })

    it('handles negative values gracefully', () => {
      render(<CircularProgress variant="determinate" value={-10} />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveAttribute('aria-valuenow', '-10')
    })

    it('handles values over 100 gracefully', () => {
      render(<CircularProgress variant="determinate" value={150} />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveAttribute('aria-valuenow', '150')
    })
  })

  // 复杂组合测试
  describe('Complex combinations', () => {
    it('combines all props correctly', () => {
      render(
        <CircularProgress
          variant="determinate"
          value={85}
          size={80}
          thickness={6}
          color="success"
          showValue={true}
          overlay={true}
          centered={true}
          className="custom-class"
        />
      )
      
      const progressbar = screen.getByRole('progressbar')
      const svg = document.querySelector('svg')
      const valueElement = document.querySelector('.wc-circular-progress-value')
      const circles = document.querySelectorAll('circle')
      
      // 检查容器属性
      expect(progressbar).toHaveClass('wc-circular-progress--success')
      expect(progressbar).toHaveClass('wc-circular-progress--overlay')
      expect(progressbar).toHaveClass('wc-circular-progress--centered')
      expect(progressbar).toHaveClass('custom-class')
      expect(progressbar).toHaveAttribute('aria-valuenow', '85')
      
      // 检查SVG尺寸
      expect(svg).toHaveAttribute('width', '80')
      expect(svg).toHaveAttribute('height', '80')
      
      // 检查圆圈厚度
      circles.forEach(circle => {
        expect(circle).toHaveAttribute('stroke-width', '6')
      })
      
      // 检查值显示
      expect(valueElement).toHaveTextContent('85%')
    })
  })

  // 边界情况测试
  describe('Edge cases', () => {
    it('handles undefined value gracefully', () => {
      render(<CircularProgress variant="determinate" value={undefined} />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toBeInTheDocument()
    })

    it('handles null value gracefully', () => {
      render(<CircularProgress variant="determinate" value={null} />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toBeInTheDocument()
    })

    it('handles very small size', () => {
      render(<CircularProgress size={10} />)
      const svg = document.querySelector('svg')
      expect(svg).toHaveAttribute('width', '10')
      expect(svg).toHaveAttribute('height', '10')
    })

    it('handles very large size', () => {
      render(<CircularProgress size={200} />)
      const svg = document.querySelector('svg')
      expect(svg).toHaveAttribute('width', '200')
      expect(svg).toHaveAttribute('height', '200')
    })

    it('handles zero thickness', () => {
      render(<CircularProgress thickness={0} />)
      const circles = document.querySelectorAll('circle')
      circles.forEach(circle => {
        expect(circle).toHaveAttribute('stroke-width', '0')
      })
    })

    it('handles very large thickness', () => {
      render(<CircularProgress thickness={20} />)
      const circles = document.querySelectorAll('circle')
      circles.forEach(circle => {
        expect(circle).toHaveAttribute('stroke-width', '20')
      })
    })
  })

  // CSS类结构测试
  describe('CSS class structure', () => {
    it('has required base classes', () => {
      render(<CircularProgress />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveClass('wc-circular-progress')
      expect(progressbar).toHaveClass('inline-flex')
      expect(progressbar).toHaveClass('relative')
      expect(progressbar).toHaveClass('items-center')
      expect(progressbar).toHaveClass('justify-center')
    })

    it('maintains class order and structure', () => {
      render(<CircularProgress color="error" overlay={true} className="custom" />)
      const progressbar = screen.getByRole('progressbar')
      const classList = progressbar.className.split(' ')
      
      expect(classList).toContain('wc-circular-progress')
      expect(classList).toContain('wc-circular-progress--error')
      expect(classList).toContain('wc-circular-progress--overlay')
      expect(classList).toContain('custom')
    })
  })
})
