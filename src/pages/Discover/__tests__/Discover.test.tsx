import { render, screen } from '@testing-library/react';
import React from 'react';
import Discover from '../Discover';

describe('Discover', () => {
  render(<Discover />);
  const linkElement = screen.getByText(/Discover/i);

  expect(linkElement).toBeInTheDocument();
});
