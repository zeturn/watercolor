import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Table from '@/components/Table/Table.jsx'

describe('Table (React)', () => {
  it('正常渲染', () => {
    render(
      <Table>
        <thead><tr><th>头</th></tr></thead>
        <tbody><tr><td>内容</td></tr></tbody>
      </Table>
    )
    expect(screen.getByText('头')).toBeInTheDocument()
    expect(screen.getByText('内容')).toBeInTheDocument()
  })

  it('支持 className 和 style', () => {
    render(
      <Table className="my-table" style={{ color: 'red' }}>
        <tbody><tr><td>样式</td></tr></tbody>
      </Table>
    )
    const table = document.querySelector('.my-table')
    expect(table).not.toBeNull()
    expect(table.style.color).toBe('red')
  })

  it('支持 children 为空', () => {
    render(<Table />)
    expect(screen.getByRole('table')).toBeInTheDocument()
  })
})
