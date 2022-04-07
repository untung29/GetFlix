import getMoviesByTitle from 'API/getMoviesByTitle';
import { Dispatch, SetStateAction, useState } from 'react';
import { InfiniteData, useInfiniteQuery } from 'react-query';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

interface MovieResponse {
  searchResults: Movie[];
  totalPage: number;
  nextPage: number;
  totalSearches: number;
}

const useGetMovies = (
  title: string | null,
): {
  data: InfiniteData<MovieResponse | undefined> | undefined;
  fetching: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
} => {
  const [isFetching, setIsFetching] = useState(false);
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery<MovieResponse | undefined>(
    'getMoviesByTitle',
    ({ pageParam = 1 }) => {
      if (!title) {
        return undefined;
      }
      return getMoviesByTitle(pageParam);
    },
    {
      getNextPageParam: (lastPage, _allPages) => {
        if (!lastPage) {
          return undefined;
        }

        if (lastPage.nextPage > lastPage.totalPage) {
          return undefined;
        }

        return lastPage.nextPage > lastPage.totalPage ? undefined : lastPage.nextPage;
      },
      enabled: isFetching && !!title,
    },
  );

  return { data, isLoading, fetching: setIsFetching, hasNextPage: hasNextPage || false, fetchNextPage };
};

export default useGetMovies;
