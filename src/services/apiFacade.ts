import { Movie, MovieShow, Theater } from "./entityFacade";
import { handleHttpErrors, makeOptions } from "./fetchUtils";
import { API_URL } from "../settings";
const MOVIES_URL = API_URL + "/movies";
const CATEGORIES_URL = API_URL + "/categories";
const MOVIE_SHOWS_URL = API_URL + "/movieshows";
const THEATERS_URL = API_URL + "/theaters";

//Movie FETCHES
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
async function updateMovie(movie: Movie) {
    const options = makeOptions("PUT", movie);
    return fetch(MOVIES_URL + "/" + movie.id, options).then(handleHttpErrors);
}
async function deleteMovie(id: number) {
    const options = makeOptions("DELETE", null);
    return fetch(MOVIES_URL + "/" + id, options).then(handleHttpErrors);
}

//Category FETCHES
async function getCategories() {
    return fetch(CATEGORIES_URL).then(handleHttpErrors);
}

//MovieShow FETCHES
async function getMovieShows() {
    return fetch(MOVIE_SHOWS_URL).then(handleHttpErrors);
}
async function getMovieShowById(id: number) {
    return fetch(MOVIE_SHOWS_URL + "/" + id).then(handleHttpErrors);
}
async function postMovieShow(movieShow: MovieShow) {
    const options = makeOptions("POST", movieShow);
    return fetch(MOVIE_SHOWS_URL, options).then(handleHttpErrors);
}
async function updateMovieShow(movieShow: MovieShow) {
    const options = makeOptions("PUT", movieShow);
    return fetch(MOVIE_SHOWS_URL + "/" + movieShow.id, options).then(handleHttpErrors);
}
async function deleteMovieShow(id: number) {
    const options = makeOptions("DELETE", null);
    return fetch(MOVIE_SHOWS_URL + "/" + id, options).then(handleHttpErrors);
}

//Upcoming FETCHES
async function getUpcoming() {
    return fetch(MOVIES_URL + "/upcoming").then(handleHttpErrors);
}

//Theater FETCHES
async function getTheaters() {
    return fetch(THEATERS_URL).then(handleHttpErrors);
}
async function getTheaterById(id: number) {
    return fetch(THEATERS_URL + "/" + id).then(handleHttpErrors);
}
async function postTheater(theater: Theater) {
    const options = makeOptions("POST", theater);
    return fetch(THEATERS_URL, options).then(handleHttpErrors);
}
async function updateTheater(theater: Theater) {
    const options = makeOptions("PUT", theater);
    return fetch(THEATERS_URL + "/" + theater.id, options).then(handleHttpErrors);
}
async function deleteTheater(id: number) {
    const options = makeOptions("DELETE", null);
    return fetch(THEATERS_URL + "/" + id, options).then(handleHttpErrors);
}

export {
    getMovies,
    getMovieById,
    postMovie,
    updateMovie,
    deleteMovie,
    getCategories,
    getMovieShows,
    getMovieShowById,
    postMovieShow,
    updateMovieShow,
    deleteMovieShow,
    getUpcoming,
    getTheaters,
    getTheaterById,
    postTheater,
    updateTheater,
    deleteTheater,
};
