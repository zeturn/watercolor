import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from '@/components/Grid/Grid';

describe('Grid (React)', () => {
  test('renders container with children', () => {
    render(<Grid container><div>Child</div></Grid>);
    expect(screen.getByText('Child')).toBeInTheDocument();
    expect(screen.getByText('Child').parentElement).toHaveClass('wc-grid', 'wc-grid-container');
  });

  test('renders item with children', () => {
    render(<Grid item><div>Child</div></Grid>);
    expect(screen.getByText('Child')).toBeInTheDocument();
    expect(screen.getByText('Child').parentElement).toHaveClass('wc-grid', 'wc-grid-item');
  });

  test('applies spacing to container', () => {
    render(<Grid container spacing={2}><div>Child</div></Grid>);
    expect(screen.getByText('Child').parentElement).toHaveClass('wc-grid-container--spacing-2');
  });

  test('applies responsive classes to item', () => {
    render(<Grid item xs={12} sm={6} md={4} lg={3} xl={2}>Item</Grid>);
    const gridElement = screen.getByText('Item');
    expect(gridElement).toHaveClass(
      'wc-grid-item--xs-12',
      'wc-grid-item--sm-6',
      'wc-grid-item--md-4',
      'wc-grid-item--lg-3',
      'wc-grid-item--xl-2'
    );
  });
});
