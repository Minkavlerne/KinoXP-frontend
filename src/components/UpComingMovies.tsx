import { Movie } from "../services/entityFacade";

interface Props {
    movies: Movie[];
}

export default function UpComingMovies({ movies }: Props) {
    return (
        <div>
            {movies.map((movie) => (
                <img src={movie.posterUrl} key={movie.id} />
            ))}
        </div>
    );
}
