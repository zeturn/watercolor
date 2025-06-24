import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer.jsx'

describe('VideoPlayer (React)', () => {
  it('renders without crashing', () => {
    render(<VideoPlayer />)
    expect(true).toBe(true)
  })
})
