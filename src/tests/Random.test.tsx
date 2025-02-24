import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Random from '../Random';

describe('Random Component', () => {
  it('renders correctly', () => {
    render(<Random />);
    screen.debug(); // Logs the DOM structure
    const element = screen.getByText('Random Component');
    expect(element).toBeInTheDocument();
  });
});
