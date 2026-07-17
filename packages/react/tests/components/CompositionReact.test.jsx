import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Inline from '../../src/components/Inline/Inline.jsx'
import Page from '../../src/components/Page/Page.jsx'
import Split from '../../src/components/Split/Split.jsx'
import Stack from '../../src/components/Stack/Stack.jsx'

describe('composition primitives', () => {
  it('Page controls semantic element, content width and gutter', () => {
    render(<Page as="main" size="md" gutter="sm">Content</Page>)
    const page = screen.getByRole('main')
    expect(page).toHaveClass('wc-page')
    expect(page).toHaveAttribute('data-size', 'md')
    expect(page).toHaveAttribute('data-gutter', 'sm')
  })

  it('Stack only exposes vertical rhythm attributes', () => {
    render(<Stack gap="2xl" align="start">Content</Stack>)
    const stack = screen.getByText('Content')
    expect(stack).toHaveClass('wc-stack')
    expect(stack).toHaveAttribute('data-gap', '2xl')
    expect(stack).toHaveAttribute('data-align', 'start')
  })

  it('Inline exposes wrapping and distribution attributes', () => {
    render(<Inline gap="sm" justify="between" wrap={false}>Content</Inline>)
    const inline = screen.getByText('Content')
    expect(inline).toHaveClass('wc-inline')
    expect(inline).toHaveAttribute('data-justify', 'between')
    expect(inline).toHaveAttribute('data-wrap', 'false')
  })

  it('Split exposes ratio and responsive collapse attributes', () => {
    render(<Split ratio="sidebar" gap="none" collapse="sm"><span>A</span><span>B</span></Split>)
    const split = screen.getByText('A').parentElement
    expect(split).toHaveClass('wc-split')
    expect(split).toHaveAttribute('data-ratio', 'sidebar')
    expect(split).toHaveAttribute('data-collapse', 'sm')
  })
})
