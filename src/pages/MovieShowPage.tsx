import { useEffect, useState } from "react";
import { Movie, MovieShow } from "../services/entityFacade";
import { getMovieById, getMovieShows } from "../services/apiFacade";
import { Link, useParams } from "react-router-dom";

export default function MovieShowPage() {
    const { id } = useParams();
    const [movieShows, setMovieShows] = useState<MovieShow[]>([]);
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        getMovieShows().then((data) => {
            const currentMovieShows = data.filter((movieShow: MovieShow) => Number(movieShow.movie.id) === Number(id));
            setMovieShows(currentMovieShows);
        });
        getMovieById(Number(id)).then((data) => setMovie(data));
    }, [id]);

    return (
        <div className="bg-kino-blue min-h-screen text-kino-grey px-10 pb-10">
            <h1 className="text-center pb-10">Movie Show Page</h1>
            {movie && (
                <div className="grid grid-cols-[350px_auto] gap-4">
                    <div className="">
                        <img className="w-full h-full" src={movie.posterUrl || movie.posterBase64} />
                    </div>
                    <div className="flex flex-col">
                        <div className="pb-10">
                            <h2>{movie.title}</h2>
                            <p>{movie.description}</p>
                            <p>{movie.duration}</p>
                        </div>
                        <div className="grid grid-cols-4">
                            {movieShows.map((movieShow) => (
                                <Link key={movieShow.id} to={`/movies/${id}/movieshows/${id}`} className="text-white" state={movieShow}>
                                    <p>{movieShow.startTime.toString()}</p>
                                    <p>{movieShow.theater.name}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
