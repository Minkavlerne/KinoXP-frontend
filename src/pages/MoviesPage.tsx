import { useEffect, useState } from "react";
import { Movie } from "../services/entityFacade";
import { getMovies } from "../services/apiFacade";
import MoviePoster from "../components/MoviePoster";

export default function MoviesPage() {
    const [movies, setMovies] = useState<Array<Movie> | null>(null);

    useEffect(() => {
        getMovies().then((data) => setMovies(data));
    }, []);
    return (
        <div className="bg-kino-blue min-h-screen">
            <h1 className="text-center">Movies</h1>
            <div className="grid grid-cols-4 gap-2 p-10 justify-items-center text-kino-grey">
                {movies ? (
                    movies.map((movie) => {
                        return <MoviePoster movie={movie} key={movie.id} />;
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
