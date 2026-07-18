import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ImageGallery from '@/components/ImageGallery/ImageGallery';

const sampleImages = [
  { id: 1, src: 'test1.jpg', thumbnail: 'thumb1.jpg', alt: 'Alt 1', title: 'Title 1' },
  { id: 2, src: 'test2.jpg', thumbnail: 'thumb2.jpg', alt: 'Alt 2', title: 'Title 2' },
];

describe('ImageGallery (React)', () => {
  test('renders images correctly', () => {
    render(<ImageGallery images={sampleImages} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('src', 'thumb1.jpg');
    expect(images[1]).toHaveAttribute('src', 'thumb2.jpg');
  });

  test('opens lightbox on image click', () => {
    render(<ImageGallery images={sampleImages} />);
    fireEvent.click(screen.getAllByRole('img')[0]);
    // Check if lightbox is visible by role
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    // Also check for the title inside, using the new accessible name
    expect(screen.getByRole('dialog', { name: 'Title 1' })).toBeInTheDocument();
  });

  test('shows pagination when enabled', () => {
    render(<ImageGallery images={sampleImages} showPagination itemsPerPage={1} />);
    // Check for the "next" pagination button instead of a specific page link
    expect(screen.getByRole('button', { name: 'Next page' })).toBeInTheDocument();
  });
});
