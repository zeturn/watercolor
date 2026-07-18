import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FileInput from '@/components/FileInput/FileInput.jsx'

describe('FileInput (React)', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<FileInput label="Upload file" />)
    expect(getByText('Upload file')).toBeInTheDocument()
  })
})
