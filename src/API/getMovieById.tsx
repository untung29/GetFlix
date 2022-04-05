import axios from 'axios';

const getMovieById = async (id: string) => {
  const getMovies = await axios.get(`https://www.omdbapi.com/?apikey=320f6ab2&i=${id}`);
  return getMovies.data.Search;
};

export default getMovieById;
