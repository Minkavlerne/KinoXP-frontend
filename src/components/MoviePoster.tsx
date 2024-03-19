import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../services/entityFacade";

export default function MoviePoster({ movie }: { movie: Movie }) {
  return (
    <React.Fragment key={movie.id}>
      <div className="">
        <Link to={`/movies/${movie.id}`}>
          <img className="h-64 object-cover" src={movie.posterUrl} alt={movie.title} />
        </Link>
        <div className="">
          <Link to={`/movies/${movie.id}`} className="">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Details
            </button>
            <Link to={`/tickets/${movie.id}`}>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Buy Ticket
              </button>
            </Link>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
