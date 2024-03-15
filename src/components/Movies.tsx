import { useEffect, useState } from "react";
import { getMovies } from "../services/apiFacade";
import { Movie } from "../services/entityFacade";
import { Link } from "react-router-dom";

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
            return (
              <>
                <Link to={`/movies/${movie.id}`}>
                  <li key={movie.id}>
                    <img src={movie.posterBase64} alt={movie.title} />
                  </li>
                </Link>
                <div>
                  <Link to={`/movies/${movie.id}`}>
                    <Link to={`/tickets/${movie.id}`}></Link>
                  </Link>
                </div>
              </>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </>
  );
}
