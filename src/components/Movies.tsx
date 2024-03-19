import { useEffect, useState } from "react";
import { getMovies } from "../services/apiFacade";
import { Movie } from "../services/entityFacade";
import MoviePoster from "./MoviePoster";

export default function Movies() {
    const [movies, setMovies] = useState<Array<Movie> | null>(null);

    useEffect(() => {
        getMovies().then((data) => setMovies(data));
    }, []);

    return (
        <>
            <div className="bg-kino-blue text-kino-white">
                <h1 className="text-center">Movies</h1>
                <div className="grid grid-cols-4 gap-2 p-10 justify-items-center">
                    {movies ? (
                        movies.map((movie) => {
                            return <MoviePoster movie={movie} key={movie.id} />;
                        })
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </>
    );
}
