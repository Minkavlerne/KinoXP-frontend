import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../services/entityFacade";

export default function MoviePoster({ movie }: { movie: Movie }) {
    return (
        <React.Fragment key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
                <li>
                    <img className="object-cover" src={movie.posterUrl} alt={movie.title} />
                </li>
            </Link>
            <div>
                <Link to={`/movies/${movie.id}`}>
                    <Link to={`/tickets/${movie.id}`}></Link>
                </Link>
            </div>
        </React.Fragment>
    );
}
