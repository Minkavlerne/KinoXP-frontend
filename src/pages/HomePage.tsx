import UpComingMovies from "../components/UpComingMovies";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";
import { getMovies } from "../services/apiFacade";
import { Movie } from "../services/entityFacade";
// import MoviePoster from "../components/MoviePoster";

export default function HomePage() {
    const [movies, setMovies] = useState<Array<Movie> | null>(null);
    useEffect(() => {
        getMovies().then((data) => setMovies(data));
    }, []);

    return (
        <div className="bg-kino-blue min-h-screen">
            <div>
                <h1 className="text-4xl font-bold text-kino-white text-center">Welcome to the Movie Theater</h1>
                <p className="text-lg text-kino-grey text-center">Here you can see the latest movies and buy tickets.</p>
            </div>
            <div className="text-kino-white text-center">
                <p>test test test test </p> <br />
                <p>test test test test </p> <br />
                <p>test test test test </p> <br />
            </div>

            <div className="flex-col">
                <p className="text-center text-kino-red text-xl font-bold py-10"> Need inspiration for your next movie?</p>
                {movies && (
                    <div className="mx-auto w-64 h-85 ">
                        <Carousel className="h-carousel" showThumbs={false} autoPlay={true} infiniteLoop={true}>
                            {movies.map((movie) => (
                                <img src={movie.posterUrl} key={movie.id} />
                            ))}
                        </Carousel>
                    </div>
                )}
                <div>
                    <p className="pl-10 text-kino-white text-xl font-bold py-10"> Movies coming soon</p>

                    <div>
                        <UpComingMovies />
                    </div>
                </div>
            </div>
        </div>
    );
}
