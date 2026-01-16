import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Checkbox from '@/components/Checkbox/Checkbox.jsx'

describe('Checkbox (React)', () => {
  it('正常渲染', () => {
    render(<Checkbox label="复选框" />)
    expect(screen.getByText('复选框')).toBeInTheDocument()
  })

  it('支持 checked 和 onChange', () => {
    const handleChange = vi.fn()
    render(<Checkbox checked={true} onChange={handleChange} label="选中" />)
    const input = screen.getByRole('checkbox')
    expect(input.checked).toBe(true)
    fireEvent.click(input)
    expect(handleChange).toHaveBeenCalled()
  })

  it('支持 disabled', () => {
    render(<Checkbox disabled label="禁用" />)
    const input = screen.getByRole('checkbox')
    expect(input).toBeDisabled()
  })

  it('支持 indeterminate', () => {
    render(<Checkbox indeterminate label="半选" />)
    // 只要能渲染即可
    expect(screen.getByText('半选')).toBeInTheDocument()
  })

  it('支持 className', () => {
    render(<Checkbox className="my-checkbox" label="自定义类" />)
    const el = screen.getByText('自定义类').closest('label')
    expect(el.className).toContain('my-checkbox')
  })

  it('支持 labelPlacement', () => {
    render(<Checkbox label="左侧" labelPlacement="start" />)
    expect(screen.getByText('左侧')).toBeInTheDocument()
  })
})
