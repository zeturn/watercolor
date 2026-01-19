import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppBar from '@/components/AppBar/AppBar.vue'

describe('AppBar (Vue)', () => {
  it('默认渲染', () => {
    const wrapper = mount(AppBar, { slots: { default: '内容' } })
    expect(wrapper.classes()).toContain('wc-appbar')
    expect(wrapper.classes()).toContain('wc-appbar--fixed')
    expect(wrapper.classes()).toContain('wc-appbar--default')
    expect(wrapper.text()).toBe('内容')
  })

  it('支持不同 position', () => {
    const positions = ['fixed', 'absolute', 'sticky', 'static', 'relative']
    positions.forEach(pos => {
      const wrapper = mount(AppBar, { props: { position: pos } })
      expect(wrapper.classes()).toContain(`wc-appbar--${pos}`)
    })
  })

  it('支持不同 color', () => {
    const colors = ['primary', 'secondary', 'transparent', 'inherit']
    colors.forEach(color => {
      const wrapper = mount(AppBar, { props: { color } })
      expect(wrapper.classes()).toContain(`wc-appbar--${color}`)
    })
  })

  it('支持 elevation', () => {
    const wrapper = mount(AppBar, { props: { elevation: 8 } })
    expect(wrapper.classes()).toContain('wc-appbar--elevation-8')
  })

  it('支持 variant', () => {
    const wrapper = mount(AppBar, { props: { variant: 'outlined' } })
    expect(wrapper.classes()).toContain('wc-appbar--outlined')
  })

  it('支持自定义 class', () => {
    const wrapper = mount(AppBar, { props: { class: 'my-appbar' } })
    expect(wrapper.classes()).toContain('my-appbar')
  })

  it('支持自定义 style', () => {
    const wrapper = mount(AppBar, { props: { style: { background: 'red' } } })
    expect(wrapper.attributes('style')).toContain('background: red')
  })

  it('插槽内容渲染', () => {
    const wrapper = mount(AppBar, { slots: { default: '<span>导航栏</span>' } })
    expect(wrapper.html()).toContain('导航栏')
  })
}) 