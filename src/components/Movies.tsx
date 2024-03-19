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
            <div className="bg-kino-blue pb-5">
                <h1 style={{ textAlign: "center" }}>Movies</h1>
                <ul className="grid grid-cols-4 gap-4">
                    {movies ? (
                        movies.map((movie) => {
                            return <MoviePoster movie={movie} />;
                        })
                    ) : (
                        <p>Loading...</p>
                    )}
                </ul>
            </div>
        </>
    );
}
