import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '@/components/Input/Input';

describe('Input (React)', () => {
  test('renders with a label', () => {
    render(<Input label="Username" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  test('handles value changes', () => {
    const TestComponent = () => {
      const [value, setValue] = useState('');
      return (
        <Input 
          label="Test Input" 
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      );
    };
    
    render(<TestComponent />);
    const inputElement = screen.getByLabelText('Test Input');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(inputElement.value).toBe('test');
  });

  test('is disabled when the disabled prop is true', () => {
    render(<Input label="Disabled Input" disabled />);
    expect(screen.getByLabelText('Disabled Input')).toBeDisabled();
  });

  test('displays an error message', () => {
    render(<Input label="Input with Error" error="This is an error" />);
    expect(screen.getByText('This is an error')).toBeInTheDocument();
  });
});
