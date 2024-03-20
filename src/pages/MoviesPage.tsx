import { useEffect, useState } from "react";
import { Category, Movie } from "../services/entityFacade";
import { getCategories, getMovies } from "../services/apiFacade";
import MoviePoster from "../components/MoviePoster";

export default function MoviesPage() {
    const [movies, setMovies] = useState<Array<Movie> | null>(null);
    const [filter, setFilter] = useState<string>("");
    const [categories, setCategories] = useState<Array<Category> | null>(null);

    useEffect(() => {
        getMovies().then((data) => setMovies(data));
        getCategories().then((data) => setCategories(data));
    }, []);

    function handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const newFilter = e.target.value;
        setFilter(newFilter);
        const filterMovies = movies?.filter((movie) => {
            console.log(movie.categories);
            return movie.categories.includes(newFilter);
        });
        console.log(filterMovies);
        if (filterMovies) {
            setMovies(filterMovies);
        }
    }

    return (
        <div className="bg-kino-blue min-h-screen">
            <h1 className="text-center">Movies</h1>
            <div>
                <label> Filter </label>
                <select name="categories" onChange={handleFilterChange}>
                    <option value="">All</option>
                    {categories?.map((category) => {
                        return (
                            <option key={category.id} value={category.name}>
                                {category.name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className="grid grid-cols-4 gap-2 p-10 justify-items-center">
                {movies ? (
                    movies.map((movie) => {
                        if(movie.releaseDate)
                        return <MoviePoster movie={movie} key={movie.id} />;
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
