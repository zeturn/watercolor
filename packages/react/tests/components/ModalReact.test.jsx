import React, { useState } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button/Button';

describe('Modal (React)', () => {
  test('does not render when not visible', () => {
    render(<Modal visible={false} title="Test Modal"><div>Content</div></Modal>);
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
  });

  test('renders when visible', () => {
    render(<Modal visible={true} title="Test Modal"><div>Content</div></Modal>);
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', async () => {
    const handleClose = vi.fn();
    render(<Modal visible={true} title="Test Modal" onClose={handleClose} closable><div>Content</div></Modal>);
    fireEvent.click(screen.getByRole('button', { name: 'Close dialog' }));
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  test('calls onClose when mask is clicked', async () => {
    const handleClose = vi.fn();
    render(<Modal visible={true} title="Test Modal" onClose={handleClose} maskClosable><div>Content</div></Modal>);
    fireEvent.click(screen.getByTestId('modal-overlay'));
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  test('restores focus to the trigger after closing', async () => {
    const Example = () => {
      const [open, setOpen] = useState(false)
      return (
        <>
          <button type="button" onClick={() => setOpen(true)}>Open modal</button>
          <Modal visible={open} title="Test Modal" onClose={() => setOpen(false)} closable>
            <button type="button">Inside modal</button>
          </Modal>
        </>
      )
    }

    render(<Example />);
    const trigger = screen.getByRole('button', { name: 'Open modal' })
    trigger.focus()
    fireEvent.click(trigger);
    await screen.findByRole('dialog');
    fireEvent.click(screen.getByRole('button', { name: 'Close dialog' }));
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Open modal' })).toHaveFocus();
    });
  });

  test('calls onClose on Escape', async () => {
    const handleClose = vi.fn();
    render(<Modal visible={true} title="Test Modal" onClose={handleClose} closable><div>Content</div></Modal>);
    fireEvent.keyDown(document, { key: 'Escape' });
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });
});
