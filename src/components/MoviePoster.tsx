import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../services/entityFacade";

export default function MoviePoster({ movie }: { movie: Movie }) {
    return (
        <React.Fragment key={movie.id}>
            <div className="">
                <Link to={`/movies/${movie.id}`}>
                    <img className="" src={movie.posterUrl} alt={movie.title} />
                </Link>
                <div className="flex space-x-4 text-kino-white">
                    <Link to={`/movies/${movie.id}`} className="">
                        <button className="bg-kino-grey hover:bg-kino-grey font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Details
                        </button>
                        <Link to={`/tickets/${movie.id}`}>
                            <button className="bg-kino-red hover:bg-kino-red font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Tickets
                            </button>
                        </Link>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}
