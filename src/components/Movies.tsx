import { useEffect, useState } from "react";
import { getMovies } from "../services/apiFacade";
import { Movie } from "../services/entityFacade";
import { Link } from "react-router-dom";

export default function Movies() {
    const [movies, setMovies] = useState<Array<Movie> | null>(null);

    useEffect(() => {
        getMovies().then((data) => setMovies(data));
    }, []);

    return (
        <>
            <ul>
                <h2>Movies</h2>
                {movies ? (
                    movies.map((movie) => {
                        return (
                            <li key={movie.id}>
                                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                            </li>
                        );
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </ul>
        </>
    );
}
