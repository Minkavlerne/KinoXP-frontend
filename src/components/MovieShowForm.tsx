import { useEffect, useState } from "react";
import { getMovies, getTheaters, postMovieShow } from "../services/apiFacade";
import { Movie, Theater } from "../services/entityFacade";

const EMPTY_MOVIE_SHOW = {
    id: null,
    startTime: new Date(),
    endTime: new Date(),
    movieId: 0,
    theaterId: 0,
};

function MovieShowForm() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [theaters, setTheaters] = useState<Theater[]>([]);
    const [formData, setFormData] = useState(EMPTY_MOVIE_SHOW);

    useEffect(() => {
        getMovies().then((data) => setMovies(data));
        getTheaters().then((data) => setTheaters(data));
    }, []);

    function handleMovieSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        console.log(e.target.value);
        const currentMovie = movies.find((movie) => movie.title === e.target.value);
        setFormData((prev) => ({ ...prev, movieId: currentMovie ? Number(currentMovie.id) : 0 }));
    }

    function handleTheaterSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        console.log(e.target.value);
        const currentTheater = theaters.find((theater) => theater.name === e.target.value);
        setFormData((prev) => ({ ...prev, theaterId: currentTheater ? Number(currentTheater.id) : 0 }));
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        console.log(formData);
        const startTime = new Date(formData.startTime);
        const endTime = new Date(formData.endTime);

        const updatedFormData = {
            ...formData,
            startTime: startTime,
            endTime: endTime,
        };
        // ignore for now, not sure what is happening
        // @ts-ignore
        postMovieShow(updatedFormData);
    }

    return (
        <div>
            <form className="flex flex-col">
                <label>
                    Start Time:
                    <input type="datetime-local" name="startTime" onChange={handleChange} />
                </label>
                <label>
                    End Time:
                    <input type="datetime-local" name="endTime" onChange={handleChange} />
                </label>
                <label>
                    Movie
                    <select name="movie" onChange={handleMovieSelectChange}>
                        <option value="" disabled>
                            Select a movie
                        </option>
                        {movies.map((movie) => (
                            <option key={movie.id} value={movie.title}>
                                {movie.title}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Theater
                    <select name="theater" onChange={handleTheaterSelectChange}>
                        <option value="" disabled>
                            Select a theater
                        </option>
                        {theaters.map((theater) => (
                            <option key={theater.id} value={theater.name}>
                                {theater.name}
                            </option>
                        ))}
                    </select>
                </label>
            </form>
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default MovieShowForm;
