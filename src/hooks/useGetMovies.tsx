import getMoviesByTitle from 'API/getMoviesByTitle';
import { useQuery } from 'react-query';

const useGetMovies = (title: string) => {
  const { data } = useQuery('getMoviesByTitle', () => getMoviesByTitle('Twilight'));
  return data;
};

export default useGetMovies;