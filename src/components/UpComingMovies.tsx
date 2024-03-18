import { Link } from "react-router-dom";
import { getMovies } from "../services/apiFacade";
import { useEffect, useState } from "react";
import { Movie } from "../services/entityFacade";

export default function UpComingMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    useEffect(() => {
        getMovies().then((data) => {
            const upcomingMovies = data.filter((movie) => new Date(movie.releaseDate) > new Date());
            setMovies(upcomingMovies);
        });
    }, []);

    return (
        <div>
            <h1>Upcoming Movies</h1>
            <ul>
                {movies.map((movie) => (
                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                        <li>{movie.posterBase64 && <img src={movie.posterBase64} alt={movie.title} />}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
