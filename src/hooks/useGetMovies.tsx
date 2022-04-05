import getMoviesByTitle from 'API/getMoviesByTitle';
import { Dispatch, SetStateAction, useState } from 'react';
import { useQuery } from 'react-query';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

const useGetMovies = (
  title: string | null,
): { data: Movie[] | undefined; fetching: Dispatch<SetStateAction<boolean>>; isLoading: boolean } => {
  const [isFetching, setIsFetching] = useState(false);
  const { data, isLoading } = useQuery<Movie[]>(
    ['getMoviesByTitle', title],
    async () => {
      if (!title) {
        return [];
      }
      const movies = await getMoviesByTitle(title);
      setIsFetching(false);
      return movies;
    },
    { enabled: isFetching && !!title },
  );

  return { data, isLoading, fetching: setIsFetching };
};

export default useGetMovies;
