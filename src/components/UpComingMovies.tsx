import { Link } from "react-router-dom";
import { getMovies } from "../services/apiFacade";
import { useEffect, useState } from "react";
import { Movie } from "../services/entityFacade";

export default function UpComingMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    getMovies().then((data) => setMovies(data));
  }, []);
  return (
    <div>
      <h1>Upcoming Movies</h1>
      <ul>
        {movies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
          <li key={movie.id}>
            {movie.title}
          </li>
            </Link>
        ))}
      </ul>
    </div>
  );
}
