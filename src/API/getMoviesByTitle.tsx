import axios from 'axios';

const getMoviesByTitle = async (title: string) => {
  const getMovies = await axios.get(`https://www.omdbapi.com/?apikey=320f6ab2&s=${title}`);
  return getMovies.data.Search;
};

export default getMoviesByTitle;
