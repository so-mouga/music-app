import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { CoreLayout } from '../index';

jest.mock('common/components/Header', () => ({ Header: () => <p> mocked Header</p> }));
jest.mock('common/components/Footer', () => ({ Footer: () => <p> mocked Footer</p> }));
jest.mock('common/components/SideBar', () => ({ SideBar: () => <p> mocked SideBar</p> }));

describe('CoreLayout', () => {
  test('should get the token then display the layout', async () => {
    render(<CoreLayout />);
    expect(screen.queryByText('Is loading')).toBeInTheDocument();
    expect(screen.queryByText('mocked Header')).not.toBeInTheDocument();

    jest.mock('services/spotify', () => ({
      fetchToken: jest.fn(() => Promise.resolve(true)),
    }));

    render(<CoreLayout />);
    await waitFor(() => expect(screen.queryByText('mocked Header')).toBeInTheDocument());
  });
});
