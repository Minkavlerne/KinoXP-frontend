import { Movie, Category, MovieShow, Theater, Booking } from "./entityFacade";
import { handleHttpErrors, makeOptions } from "./fetchUtils";
import { API_URL } from "../settings";
const MOVIES_URL = API_URL + "/movies";
const CATEGORIES_URL = API_URL + "/categories";
const MOVIE_SHOWS_URL = API_URL + "/movieShows";
//const THEATERS_URL = API_URL + "/theaters";

async function getMovies() {
  return fetch(MOVIES_URL).then(handleHttpErrors);
}
async function getMovieById(id: number) {
  return fetch(MOVIES_URL + "/" + id).then(handleHttpErrors);
}
async function postMovie(movie: Movie) {
  const options = makeOptions("POST", movie);
  return fetch(MOVIES_URL, options).then(handleHttpErrors);
}


async function getCategories() {
  return fetch(CATEGORIES_URL).then(handleHttpErrors);
}
async function getMovieShows() {
  return fetch(MOVIE_SHOWS_URL).then(handleHttpErrors);
}
async function getUpcoming() {
  return fetch(MOVIES_URL + "/upcoming").then(handleHttpErrors);
}

export { getMovies, getMovieById, postMovie, getCategories, getMovieShows, getUpcoming };
