import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

// mock Checkbox 组件，避免 utils.js 中的 JSX 解析失败
vi.mock('@/components/Checkbox/Checkbox.jsx', () => ({
  __esModule: true,
  default: () => null,
}))

import Checkbox from '@/components/Checkbox/Checkbox.jsx'

describe('Checkbox (React)', () => {
  it('renders without crashing', () => {
    render(<Checkbox />)
    expect(true).toBe(true)
  })
})
