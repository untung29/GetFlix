import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import SearchResultPage from './index';
import useGetMovies from '../../hooks/useGetMovies';

jest.mock('react-infinite-scroll-component');
jest.mock('../../hooks/useGetMovies.tsx');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
  useSearchParams: () => [
    {
      get: () => 'twilight',
    },
  ],
}));

describe('Page: SearchResultPage', () => {
  let queryClient: QueryClient;
  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
  });
  it('if there is no result, then display no search result page found', () => {
    (useGetMovies as jest.Mock).mockReturnValue({ dataLength: 0 });

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <SearchResultPage />
        </QueryClientProvider>
      </MemoryRouter>,
    );
    screen.getByText('No result found');
  });

  it('should display', () => {});
});
