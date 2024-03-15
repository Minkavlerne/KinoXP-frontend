import { useEffect, useState } from "react";
import { getMovies } from "../services/apiFacade";
import { Movie } from "../services/entityFacade";
import MovieDetailView from "../components/MovieDetailView";
import { Link } from "react-router-dom";

export default function MovieDetailViewPage() {
    const [movies, setMovies] = useState<Movie[]>([]);
    useEffect(() => {
        getMovies().then((data) => setMovies(data));
    }, []);

    return (
        <div>
            <h1>Movies</h1>
            {movies.map((movie) => (
                <Link to={`/movies/${movie.id}`}>
                    <MovieDetailView />
                </Link>
            ))}
        </div>
    );
}
