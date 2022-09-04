import { render, screen } from '@testing-library/react';
import React from 'react';
import Discover from '../Discover';

describe('Discover', () => {
  test('should render the component', () => {
    render(<Discover />);
    expect(screen.getByText('Discover')).toBeInTheDocument();
  });
});
