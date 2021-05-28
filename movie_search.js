import axios from "axios";
const title = process.argv[2];
export async function movieSearch(title) {
  const MOVIE_SEARCH_API = `http://www.omdbapi.com/?apikey=c895f8b3&s=${title}`;
  try {
    const response = await axios.get(MOVIE_SEARCH_API);
    const data = response.data;
    const movies = data.Search;
    movies.forEach((movie) => console.log(movie.Poster));
  } catch (error) {
    console.log(error.message);
  }
}
movieSearch(title);
