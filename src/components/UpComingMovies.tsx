import { getMovies } from "../services/apiFacade";
import { useEffect, useState } from "react";
import { Movie } from "../services/entityFacade";

export default function UpComingMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    useEffect(() => {
        getMovies().then((data) => {
            const upcomingMovies = data.filter((movie: Movie) => new Date(movie.releaseDate) > new Date());
            setMovies(upcomingMovies);
            console.log("Upcoming " + upcomingMovies);
            console.log("movies " + movies);
        });
    }, []);

    return (
        <div className="w-64 h-85 pl-10 pb-10 grid grid-rows-2">
            {movies.map((movie) => (
                <img src={movie.posterUrl} key={movie.id} />
            ))}
        </div>
    );
}
