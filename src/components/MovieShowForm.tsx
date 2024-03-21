import React, { useState, useEffect } from "react";
import { MovieShow, Movie, Theater } from "../services/entityFacade";
import { getMovies, getTheaters, postMovieShow } from "../services/apiFacade";

const EMPTY_MOVIE_SHOW = {
    id: null,
    startTime: new Date(),
    endTime: new Date(),
    movieId: 0,
    theaterId: 0,
}

function MovieShowForm() {
    const movieShowToEdit = null;
    const [formData, setFormData] = useState<MovieShow>(movieShowToEdit || EMPTY_MOVIE_SHOW);
    const [movieId, setMovieId] = useState<number[]>([]);
    const [theaterId, setTheaterId] = useState<number[]>([]);

    useEffect(() => {
        getMovies().then((data) => {
            setMovieId(data.map((movie: Movie) => movie.id));
        });
        getTheaters().then((data) => {
            setTheaterId(data.map((theater: Theater) => theater.id));
        });
    }, []);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const movieShow: MovieShow = {
            ...formData
        };
        console.log(movieShow);

        postMovieShow(movieShow);
    };

    return (
      <form onSubmit={handleSubmit} className="flex flex-col items-start space-y-4 max-w-md mx-auto p-4 bg-gray-100 rounded-md">
        <label>
          Start Time:
          <input type="datetime-local" name="startTime" value={formData.startTime.toISOString().slice(0,-1)} onChange={handleChange} />
        </label>
        <label>
            End Time:
            <input type="datetime-local" name="endTime" value={formData.endTime.toISOString().slice(0,-1)} onChange={handleChange} />
        </label>
        <label>
            Movie ID:
            <select name="movieId" value={formData.movieId} onChange={handleChange}>
                {movieId.map((movieId) => <option key={movieId} value={movieId}>{movieId}</option>)}
            </select>
        </label>
        <label>
            Theater ID:
            <select name="theaterId" value={formData.theaterId} onChange={handleChange}>
                {theaterId.map((theaterId) => <option key={theaterId} value={theaterId}>{theaterId}</option>)}
            </select>
        </label>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    );
}

export default MovieShowForm;