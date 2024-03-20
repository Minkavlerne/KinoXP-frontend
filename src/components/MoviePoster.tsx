import { Link } from "react-router-dom";
import { Movie } from "../services/entityFacade";

export default function MoviePoster({ movie }: { movie: Movie }) {
    return (
        <>
            <div className="flex flex-col items-center space-y-4 w-80 py-2 text-center">
                <Link to={`/movies/${movie.id}`} className="w-full h-96 relative">
                    <img src={movie.posterUrl} className="absolute h-full w-full object-fit" />
                </Link>
                {new Date(movie.releaseDate) > new Date() ? (
                    <div>
                        <h2 className="text-xl">{movie.title}</h2>
                        <p>Release Date: {movie.releaseDate}</p>
                    </div>
                ) : (
                    <div className="flex justify-between w-full px-2">
                        <Link to={`/movies/${movie.id}`} className="w-1/2 px-2 py-1 border-solid rounded bg-kino-grey mx-2">
                            Details
                        </Link>
                        <Link to={`/tickets/${movie.id}`} className="w-1/2 px-2 py-1 border-solid rounded bg-kino-red mx-2">
                            Buy Tickets
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
