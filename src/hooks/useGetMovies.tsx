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
  isFetching: boolean;
  totalData: number;
} => {
  const [fetching, setFetching] = useState(false);
  const { data, isLoading, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery<MovieResponse | undefined>(
    'getMoviesByTitle',
    ({ pageParam = 1 }) => {
      if (!title) {
        return undefined;
      }
      setFetching(false);
      return getMoviesByTitle(title, pageParam);
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
      enabled: fetching && !!title,
    },
  );

  const totalData = data?.pages.reduce((acc, totalSearches) => {
    if (totalSearches && totalSearches.totalPage) {
      return acc + totalSearches?.searchResults.length;
    }
    return acc;
  }, 0);

  return {
    data,
    isLoading,
    fetching: setFetching,
    hasNextPage: hasNextPage || false,
    fetchNextPage,
    isFetching,
    totalData: totalData || 0,
  };
};

export default useGetMovies;
