import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Feed from '@/components/Feed/Feed.jsx'

describe('Feed (React)', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Feed items={[{ author: 'Ada', text: 'Updated', time: 'now' }]} />)
    expect(getByText('Updated')).toBeInTheDocument()
  })
})
