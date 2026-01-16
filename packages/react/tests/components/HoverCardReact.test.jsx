import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HoverCard from '@/components/HoverCard/HoverCard';

describe('HoverCard (React)', () => {
  const cardData = {
    title: 'Test Title',
    description: 'Test Description',
  };

  test('renders trigger text', () => {
    render(<HoverCard triggerText="Hover me" cardData={cardData} />);
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  test('shows card on hover', async () => {
    render(<HoverCard triggerText="Hover me" cardData={cardData} delay={0} />);
    fireEvent.mouseEnter(screen.getByText('Hover me'));
    await waitFor(() => {
      expect(screen.getByText('Test Title')).toBeVisible();
      expect(screen.getByText('Test Description')).toBeVisible();
    });
  });

  test('hides card on mouse leave', async () => {
    render(<HoverCard triggerText="Hover me" cardData={cardData} delay={0} hideDelay={0} />);
    const trigger = screen.getByText('Hover me');

    fireEvent.mouseEnter(trigger);
    await waitFor(() => expect(screen.getByText('Test Title')).toBeVisible());

    fireEvent.mouseLeave(trigger);
    await waitFor(() => {
      expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
    });
  });
});
