import { useEffect, useState } from "react";
import { getMovieById } from "../services/apiFacade";
import { Movie } from "../services/entityFacade";
import { useParams } from "react-router-dom";

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
                    <div>
                        <h2 className="text-2xl font-bold mb-2 pt-1">{movie.title}</h2>
                        <p className="text-base pt-20 pr-5">{movie.description}</p>
                    </div>
                    <img src={movie.posterUrl} alt={movie.title} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
