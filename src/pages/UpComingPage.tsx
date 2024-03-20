import { useEffect, useState } from "react";

import { getMovies } from "../services/apiFacade";
import { Movie } from "../services/entityFacade";
import MoviePoster from "../components/MoviePoster";

export default function UpComingPage() {
    const [movies, setMovies] = useState<Movie[]>([]);
    useEffect(() => {
        getMovies().then((data) => {
            const upcomingMovies = data.filter((movie: Movie) => new Date(movie.releaseDate) > new Date());
            setMovies(upcomingMovies);
        });
    }, []);

    return (
        <div className="bg-kino-blue min-h-screen text-kino-grey">
            <h1 className="text-kino-white pl-10 pt-5 font-One text-xl ">Get excited! You will be able to see these movies soon</h1>
            <div className="grid grid-cols-4 gap-4 p-10 ">
                {movies.map((movie) => (
                    <MoviePoster movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}
