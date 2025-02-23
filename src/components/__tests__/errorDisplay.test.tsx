import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import ErrorDisplay from '../errorDisplay';

test('renders learn react link', () => {
  act(() => {
    <ErrorDisplay />;
  });
  const linkElement = screen.getByText('Error');
  expect(linkElement).toBeInTheDocument();
});
