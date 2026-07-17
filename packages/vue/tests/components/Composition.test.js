import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import Inline from '../../src/components/Inline/Inline.vue'
import Page from '../../src/components/Page/Page.vue'
import Split from '../../src/components/Split/Split.vue'
import Stack from '../../src/components/Stack/Stack.vue'

describe('composition primitives', () => {
  it('Page controls semantic element, content width and gutter', () => {
    render(Page, { props: { as: 'main', size: 'md', gutter: 'sm' }, slots: { default: 'Content' } })
    const page = screen.getByRole('main')
    expect(page).toHaveClass('wc-page')
    expect(page).toHaveAttribute('data-size', 'md')
    expect(page).toHaveAttribute('data-gutter', 'sm')
  })

  it('Stack only exposes vertical rhythm attributes', () => {
    render(Stack, { props: { gap: '2xl', align: 'start' }, slots: { default: 'Content' } })
    const stack = screen.getByText('Content')
    expect(stack).toHaveClass('wc-stack')
    expect(stack).toHaveAttribute('data-gap', '2xl')
    expect(stack).toHaveAttribute('data-align', 'start')
  })

  it('Inline exposes wrapping and distribution attributes', () => {
    render(Inline, { props: { gap: 'sm', justify: 'between', wrap: false }, slots: { default: 'Content' } })
    const inline = screen.getByText('Content')
    expect(inline).toHaveClass('wc-inline')
    expect(inline).toHaveAttribute('data-justify', 'between')
    expect(inline).toHaveAttribute('data-wrap', 'false')
  })

  it('Split exposes ratio and responsive collapse attributes', () => {
    render(Split, { props: { ratio: 'sidebar', gap: 'none', collapse: 'sm' }, slots: { default: '<span>A</span><span>B</span>' } })
    const split = screen.getByText('A').parentElement
    expect(split).toHaveClass('wc-split')
    expect(split).toHaveAttribute('data-ratio', 'sidebar')
    expect(split).toHaveAttribute('data-collapse', 'sm')
  })
})
