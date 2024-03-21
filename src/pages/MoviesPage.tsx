import { useEffect, useState } from "react";
import { Category, Movie } from "../services/entityFacade";
import { getCategories, getMovies } from "../services/apiFacade";
import MoviePoster from "../components/MoviePoster";

export default function MoviesPage() {
    const [movies, setMovies] = useState<Array<Movie> | null>(null);
    const [filteredMovies, setFilteredMovies] = useState<Array<Movie> | null>(movies);
    const [filter, setFilter] = useState<string>("");
    const [categories, setCategories] = useState<Array<Category> | null>(null);
    const [sortOrder, setSortOrder] = useState("newest");

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(e.target.value);
    };

    useEffect(() => {
        getMovies().then((data) => setMovies(data));
        getCategories().then((data) => setCategories(data));
    }, []);

    useEffect(() => {
        if (movies) {
            const sortedMovies = [...movies].sort((a, b) => {
                if (sortOrder === "newest") {
                    return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
                } else {
                    return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
                }
            });
            setMovies(sortedMovies);
        }
    }, [sortOrder]);

    function handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const newFilter = e.target.value;
        setFilter(newFilter);
        if (newFilter === "all") {
            setFilteredMovies(movies);
        } else {
            const filterMovies = (movies || []).filter((movie) => movie.categories.includes(newFilter));
            setFilteredMovies(filterMovies);
        }
    }

    return (
        <div className="bg-kino-blue min-h-screen">
            <h1 className="text-center text-kino-white text-lg">In theaters now!</h1>
            <div>
                <label className="pl-20 text-kino-grey"> Filter by Category </label>
                <select name="categories" onChange={handleFilterChange}>
                    <option value="all">All</option>
                    {categories?.map((category) => {
                        return (
                            <option key={category.id} value={category.name}>
                                {category.name}
                            </option>
                        );
                    })}
                </select>
                <label className="pl-20 text-kino-grey"> Sort by Release Date </label>
                <select name="sortOrder" onChange={handleSortChange}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>
            <div className="grid grid-cols-4 gap-2 p-10 justify-items-center">
                {filteredMovies ? (
                    filteredMovies.map((movie) => {
                        if (new Date(movie.releaseDate) < new Date()) {
                            return <MoviePoster movie={movie} key={movie.id} />;
                        }
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
