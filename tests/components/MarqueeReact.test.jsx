import React from 'react';
import { render, screen } from '@testing-library/react';
import Marquee from '@/components/Marquee/Marquee';

describe('Marquee (React)', () => {
  test('renders the text content', () => {
    const testText = 'This is a test marquee';
    render(<Marquee text={testText} />);
    expect(screen.getAllByText(testText)[0]).toBeInTheDocument();
  });

  test('applies correct class for direction', () => {
    render(<Marquee text="test" direction="up" />);
    // The class is applied to the container, which is the parent of the element with the text.
    const container = screen.getAllByText('test')[0].parentElement.parentElement;
    expect(container).toHaveClass('marquee-direction-up');
  });

  test('renders children when text prop is not provided', () => {
    render(<Marquee><div>Child Content</div></Marquee>);
    expect(screen.getAllByText('Child Content')[0]).toBeInTheDocument();
  });
});
