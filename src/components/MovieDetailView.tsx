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
        <div>
            <h1>Movie Detail View</h1>
            {movie ? (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                    <img src={movie.posterUrl} alt={movie.title} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
