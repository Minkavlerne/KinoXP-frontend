import { useEffect, useState } from "react";
import { getMovieById } from "../services/apiFacade";
import { Movie } from "../services/entityFacade";
import { Link, useParams } from "react-router-dom";

export default function MovieDetailView() {
    const [movie, setMovie] = useState<Movie | null>(null);
    const { id } = useParams();

    useEffect(() => {
        getMovieById(Number(id)).then((data) => setMovie(data));
    }, [id]);

    return (
        <div className="bg-kino-blue min-h-screen pt-5 pb-20">
            {movie ? (
                <div key={movie.id} className="grid grid-cols-2 bg-kino-grey rounded-lg shadow-lg p-4 max-w-screen-md mx-auto">
                    <div className="flex flex-col">
                        <div>
                            <h2 className="text-center text-2xl font-bold mb-2 pt-1">{movie.title}</h2>
                            <p className="text-base pt-5 pr-5 pb-10">{movie.description}</p>
                        </div>
                        <div className="text-center">
                            <Link to="/movieform" state={movie} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Edit Movie
                            </Link>
                        </div>
                    </div>
                    <img src={movie.posterUrl} alt={movie.title} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
