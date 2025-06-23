import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Pagination from '../../src/components/Pagination/Pagination.vue'

describe('Pagination Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 1
      }
    })
    
    expect(wrapper.find('.wc-pagination').exists()).toBe(true)
  })

  it('displays correct number of pages', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 1
      }
    })
    
    const pageButtons = wrapper.findAll('.wc-pagination__page')
    expect(pageButtons.length).toBeGreaterThan(0)
  })

  it('highlights current page', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 3
      }
    })
    
    const currentPageButton = wrapper.find('.wc-pagination__page--active')
    expect(currentPageButton.text()).toBe('3')
  })

  it('emits page-change event when page clicked', async () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 1
      }
    })
    
    const pageButtons = wrapper.findAll('.wc-pagination__page')
    expect(pageButtons.length).toBeGreaterThan(1) // 确保有足够的页面按钮
    const pageButton = pageButtons[1] // Page 2
    await pageButton.trigger('click')
    
    expect(wrapper.emitted()).toHaveProperty('page-change')
  })

  it('shows previous button when not on first page', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 3
      }
    })
    
    const prevButton = wrapper.find('.wc-pagination__prev')
    expect(prevButton.exists()).toBe(true)
    expect(prevButton.classes()).not.toContain('disabled')
  })

  it('disables previous button on first page', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 1
      }
    })
    
    const prevButton = wrapper.find('.wc-pagination__prev')
    expect(prevButton.classes()).toContain('disabled')
  })

  it('shows next button when not on last page', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 5
      }
    })
    
    const nextButton = wrapper.find('.wc-pagination__next')
    expect(nextButton.exists()).toBe(true)
    expect(nextButton.classes()).not.toContain('disabled')
  })

  it('disables next button on last page', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 10
      }
    })
    
    const nextButton = wrapper.find('.wc-pagination__next')
    expect(nextButton.classes()).toContain('disabled')
  })

  it('shows page size selector when showSizeChanger is true', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 1,
        showSizeChanger: true
      }
    })
    
    expect(wrapper.find('.wc-pagination__size-changer').exists()).toBe(true)
  })

  it('emits size-change event when page size changes', async () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 1,
        showSizeChanger: true
      }
    })
    
    const sizeSelector = wrapper.find('.wc-pagination__size-changer select')
    await sizeSelector.setValue('20')
    
    expect(wrapper.emitted()).toHaveProperty('size-change')
  })

  it('shows quick jumper when showQuickJumper is true', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 1,
        showQuickJumper: true
      }
    })
    
    expect(wrapper.find('.wc-pagination__quick-jumper').exists()).toBe(true)
  })

  it('shows ellipsis for large page counts', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 1000,
        pageSize: 10,
        currentPage: 50
      }
    })
    
    expect(wrapper.findAll('.wc-pagination__ellipsis').length).toBeGreaterThan(0)
  })

  it('applies size correctly', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 1,
        size: 'lg'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-pagination--lg')
  })
}) 