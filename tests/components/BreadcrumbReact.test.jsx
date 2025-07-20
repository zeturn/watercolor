import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.jsx'

describe('Breadcrumb (React)', () => {
  it('renders without crashing', () => {
    render(<Breadcrumb />)
    expect(true).toBe(true)
  })

  it('renders with default props', () => {
    render(<Breadcrumb />)
    const nav = screen.getByRole('navigation', { name: '面包屑导航' })
    expect(nav).toBeInTheDocument()
    expect(nav).toHaveClass('wc-breadcrumb')
    expect(nav).toHaveClass('wc-breadcrumb--default')
  })

  it('renders empty breadcrumb list when no items provided', () => {
    render(<Breadcrumb />)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
    expect(list).toHaveClass('wc-breadcrumb-list')
    expect(list.children).toHaveLength(0)
  })

  it('renders breadcrumb items correctly', () => {
    const items = [
      { label: '首页', href: '/' },
      { label: '分类', href: '/category' },
      { label: '产品', href: '/product' },
      { label: '当前页面' }
    ]
    render(<Breadcrumb items={items} />)
    
    expect(screen.getByText('首页')).toBeInTheDocument()
    expect(screen.getByText('分类')).toBeInTheDocument()
    expect(screen.getByText('产品')).toBeInTheDocument()
    expect(screen.getByText('当前页面')).toBeInTheDocument()
  })

  it('renders custom separator', () => {
    const items = [
      { label: '首页', href: '/' },
      { label: '分类', href: '/category' }
    ]
    render(<Breadcrumb items={items} separator=">" />)
    
    const separator = document.querySelector('.wc-breadcrumb-separator')
    expect(separator).toBeInTheDocument()
    expect(separator).toHaveTextContent('>')
  })

  it('applies variant classes correctly', () => {
    render(<Breadcrumb variant="default" />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('wc-breadcrumb--default')
  })

  // showHome 功能测试
  describe('showHome feature', () => {
    it('shows home item when showHome is true', () => {
      const items = [
        { label: '分类', href: '/category' },
        { label: '产品' }
      ]
      render(<Breadcrumb items={items} showHome={true} />)
      
      expect(screen.getByText('首页')).toBeInTheDocument()
      expect(screen.getByText('分类')).toBeInTheDocument()
      expect(screen.getByText('产品')).toBeInTheDocument()
    })

    it('uses custom home icon', () => {
      const items = [{ label: '产品' }]
      render(<Breadcrumb items={items} showHome={true} homeIcon="🏡" />)
      
      const homeIcon = document.querySelector('.wc-breadcrumb-icon')
      expect(homeIcon).toBeInTheDocument()
      expect(homeIcon.innerHTML).toBe('🏡')
    })

    it('does not duplicate home item when already exists', () => {
      const items = [
        { label: '首页', href: '/' },
        { label: '产品' }
      ]
      render(<Breadcrumb items={items} showHome={true} />)
      
      const homeItems = screen.getAllByText('首页')
      expect(homeItems).toHaveLength(1)
    })
  })

  // maxItems 截断功能测试
  describe('maxItems feature', () => {
    it('truncates items when maxItems is set', () => {
      const items = [
        { label: '首页', href: '/' },
        { label: '分类1', href: '/cat1' },
        { label: '分类2', href: '/cat2' },
        { label: '分类3', href: '/cat3' },
        { label: '当前页面' }
      ]
      render(<Breadcrumb items={items} maxItems={4} />)
      
      expect(screen.getByText('首页')).toBeInTheDocument()
      expect(screen.getByText('...')).toBeInTheDocument()
      expect(screen.getByText('当前页面')).toBeInTheDocument()
      expect(screen.queryByText('分类2')).not.toBeInTheDocument()
    })

    it('does not truncate when items length is less than maxItems', () => {
      const items = [
        { label: '首页', href: '/' },
        { label: '产品' }
      ]
      render(<Breadcrumb items={items} maxItems={5} />)
      
      expect(screen.getByText('首页')).toBeInTheDocument()
      expect(screen.getByText('产品')).toBeInTheDocument()
      expect(screen.queryByText('...')).not.toBeInTheDocument()
    })
  })

  // 链接渲染测试
  describe('Link rendering', () => {
    it('renders links for items with href', () => {
      const items = [
        { label: '首页', href: '/' },
        { label: '分类', href: '/category' },
        { label: '当前页面' }
      ]
      render(<Breadcrumb items={items} />)
      
      const homeLink = screen.getByRole('link', { name: '首页' })
      const categoryLink = screen.getByRole('link', { name: '分类' })
      
      expect(homeLink).toBeInTheDocument()
      expect(homeLink).toHaveAttribute('href', '/')
      expect(categoryLink).toBeInTheDocument()
      expect(categoryLink).toHaveAttribute('href', '/category')
    })

    it('renders buttons for items without href', () => {
      const items = [
        { label: '首页' },
        { label: '当前页面' }
      ]
      render(<Breadcrumb items={items} />)
      
      const homeButton = screen.getByRole('button', { name: '首页' })
      expect(homeButton).toBeInTheDocument()
      expect(homeButton).toHaveAttribute('type', 'button')
    })

    it('renders span for current page item', () => {
      const items = [
        { label: '首页', href: '/' },
        { label: '当前页面' }
      ]
      render(<Breadcrumb items={items} />)
      
      const currentItem = screen.getByText('当前页面')
      expect(currentItem.tagName).toBe('SPAN')
      expect(currentItem).toHaveAttribute('aria-current', 'page')
    })

    it('renders disabled items correctly', () => {
      const items = [
        { label: '首页', href: '/' },
        { label: '禁用项', disabled: true },
        { label: '当前页面' }
      ]
      render(<Breadcrumb items={items} />)
      
      const disabledItem = screen.getByText('禁用项')
      expect(disabledItem).toHaveClass('wc-breadcrumb-link--disabled')
    })
  })

  // 图标渲染测试
  describe('Icon rendering', () => {
    it('renders icons for items', () => {
      const items = [
        { label: '首页', href: '/', icon: '🏠' },
        { label: '产品', icon: '📦' }
      ]
      render(<Breadcrumb items={items} />)
      
      const icons = document.querySelectorAll('.wc-breadcrumb-icon')
      expect(icons).toHaveLength(2)
      expect(icons[0].innerHTML).toBe('🏠')
      expect(icons[1].innerHTML).toBe('📦')
    })
  })

  // 点击事件测试
  describe('Click handling', () => {
    it('calls onItemClick when item is clicked', () => {
      const onItemClick = vi.fn()
      const items = [
        { label: '首页', href: '/' },
        { label: '分类', href: '/category' },
        { label: '当前页面' }
      ]
      render(<Breadcrumb items={items} onItemClick={onItemClick} />)
      
      const homeLink = screen.getByRole('link', { name: '首页' })
      fireEvent.click(homeLink)
      
      expect(onItemClick).toHaveBeenCalledTimes(1)
      expect(onItemClick).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({ label: '首页', href: '/' }),
        0
      )
    })

    it('does not call onItemClick for current page item', () => {
      const onItemClick = vi.fn()
      const items = [
        { label: '首页', href: '/' },
        { label: '当前页面' }
      ]
      render(<Breadcrumb items={items} onItemClick={onItemClick} />)
      
      const currentItem = screen.getByText('当前页面')
      fireEvent.click(currentItem)
      
      expect(onItemClick).not.toHaveBeenCalled()
    })

    it('does not call onItemClick for disabled items', () => {
      const onItemClick = vi.fn()
      const items = [
        { label: '首页', href: '/' },
        { label: '禁用项', disabled: true },
        { label: '当前页面' }
      ]
      render(<Breadcrumb items={items} onItemClick={onItemClick} />)
      
      const disabledItem = screen.getByText('禁用项')
      fireEvent.click(disabledItem)
      
      expect(onItemClick).not.toHaveBeenCalled()
    })

    it('does not call onItemClick for ellipsis items', () => {
      const onItemClick = vi.fn()
      const items = [
        { label: '首页', href: '/' },
        { label: '分类1', href: '/cat1' },
        { label: '分类2', href: '/cat2' },
        { label: '分类3', href: '/cat3' },
        { label: '当前页面' }
      ]
      render(<Breadcrumb items={items} maxItems={4} onItemClick={onItemClick} />)
      
      const ellipsis = screen.getByText('...')
      fireEvent.click(ellipsis)
      
      expect(onItemClick).not.toHaveBeenCalled()
    })
  })

  // CSS 类名测试
  describe('CSS classes', () => {
    it('applies correct item classes', () => {
      const items = [
        { label: '首页', href: '/' },
        { label: '当前页面' }
      ]
      render(<Breadcrumb items={items} />)
      
      const listItems = document.querySelectorAll('.wc-breadcrumb-item')
      expect(listItems).toHaveLength(2)
      expect(listItems[0]).toHaveClass('wc-breadcrumb-item')
      expect(listItems[1]).toHaveClass('wc-breadcrumb-item', 'wc-breadcrumb-item--current')
    })

    it('applies correct link classes', () => {
      const items = [
        { label: '首页', href: '/' },
        { label: '禁用项', disabled: true },
        { label: '当前页面' }
      ]
      render(<Breadcrumb items={items} />)
      
      const homeLink = screen.getByRole('link', { name: '首页' })
      const disabledItem = screen.getByText('禁用项')
      const currentItem = screen.getByText('当前页面')
      
      expect(homeLink).toHaveClass('wc-breadcrumb-link')
      expect(disabledItem).toHaveClass('wc-breadcrumb-link', 'wc-breadcrumb-link--disabled')
      expect(currentItem).toHaveClass('wc-breadcrumb-link', 'wc-breadcrumb-link--disabled')
    })
  })

  // 边界情况测试
  describe('Edge cases', () => {
    it('handles empty items array', () => {
      render(<Breadcrumb items={[]} />)
      const list = screen.getByRole('list')
      expect(list.children).toHaveLength(0)
    })

    it('handles single item', () => {
      const items = [{ label: '单个项目' }]
      render(<Breadcrumb items={items} />)
      
      expect(screen.getByText('单个项目')).toBeInTheDocument()
      expect(screen.queryByText('/')).not.toBeInTheDocument()
    })

    it('handles items without labels', () => {
      const items = [{ href: '/' }, { label: '正常项' }]
      render(<Breadcrumb items={items} />)
      
      expect(screen.getByText('正常项')).toBeInTheDocument()
    })

    it('handles maxItems of 0', () => {
      const items = [
        { label: '首页', href: '/' },
        { label: '产品' }
      ]
      render(<Breadcrumb items={items} maxItems={0} />)
      
      expect(screen.getByText('首页')).toBeInTheDocument()
      expect(screen.getByText('产品')).toBeInTheDocument()
    })
  })
})
