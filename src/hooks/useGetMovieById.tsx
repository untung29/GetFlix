import getMovieById from 'API/getMovieById';
import { useQuery } from 'react-query';

interface MovieDetail {
  Title: string;
  Year: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Actors: string;
  Plot: string;
  Poster: string;
  Awards: string;
  imdbRating: string;
  Type: string;
}

const useGetMovies = (id: string): { movieDetail: MovieDetail | undefined; isLoading: boolean } => {
  const { data, isLoading } = useQuery<MovieDetail>(['getMovieById', id], async () => {
    if (!id) {
      return [];
    }
    const movies = await getMovieById(id);
    return movies;
  });

  return { movieDetail: data, isLoading };
};

export default useGetMovies;
