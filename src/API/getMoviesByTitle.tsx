import axios from 'axios';

const getMoviesByTitle = async (pageParams: number) => {
  const getMovies = await axios.get(`https://www.omdbapi.com/?apikey=320f6ab2&s=${'twilight'}&page=${pageParams}`);

  // Logic to see if we have a next page
  const totalPage = Math.ceil(getMovies.data.totalResults / 10);

  return { searchResults: getMovies.data.Search, totalPage, nextPage: pageParams + 1, totalSearches: getMovies.data.totalResults };
  // return getMovies.data.Search;
};

export default getMoviesByTitle;
