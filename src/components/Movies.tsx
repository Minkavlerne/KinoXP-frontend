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
            <h1 style={{ textAlign: "center" }}>Movies</h1>
            <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
                {movies ? (
                    movies.map((movie) => {
                        return <MoviePoster movie={movie} />;
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </ul>
        </>
    );
}
