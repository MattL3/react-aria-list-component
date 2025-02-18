import { render, screen } from '@testing-library/react';
import React from 'react';
import ErrorDisplay from '../errorDisplay';

test('renders learn react link', () => {
  render(<ErrorDisplay />);
  const linkElement = screen.getByText('Error');
  expect(linkElement).toBeInTheDocument();
});
