import axios from 'axios';

const getMovieById = async (id: string) => {
  const getMovie = await axios.get(`https://www.omdbapi.com/?apikey=320f6ab2&i=${id}`);
  return getMovie.data;
};

export default getMovieById;
