import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from '@/components/Grid/Grid';

describe('Grid (React)', () => {
  test('renders container with children', () => {
    render(<Grid container><div>Child</div></Grid>);
    expect(screen.getByText('Child')).toBeInTheDocument();
    expect(screen.getByText('Child').parentElement).toHaveClass('flex');
  });

  test('renders item with children', () => {
    render(<Grid item><div>Child</div></Grid>);
    expect(screen.getByText('Child')).toBeInTheDocument();
    expect(screen.getByText('Child').parentElement).toHaveClass('flex-shrink-0');
  });

  test('applies spacing to container', () => {
    render(<Grid container spacing={2}><div>Child</div></Grid>);
    expect(screen.getByText('Child').parentElement).toHaveClass('gap-2');
  });

  test('applies responsive classes to item', () => {
    render(<Grid item xs={12} sm={6} md={4} lg={3} xl={2}>Item</Grid>);
    const gridElement = screen.getByText('Item');
    expect(gridElement).toHaveClass('w-full', 'sm:w-1/2', 'md:w-[33%]', 'lg:w-1/4', 'xl:w-[17%]');
  });
});
