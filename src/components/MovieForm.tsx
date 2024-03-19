import React, { useState, useEffect } from "react";
import { postMovie, getCategories } from "../services/apiFacade";
import { Category, Movie } from "../services/entityFacade";
import ImageConverter from "./ImageConverter";
import Select from "react-select";


function MovieForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ageLimit, setAgeLimit] = useState(0);
  const [duration, setDuration] = useState("");
  // const [categories, setCategories] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [posterBase64, setPosterBase64] = useState("");
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    useEffect(() => {
        getCategories().then((data) => {
            setCategoryList(data.map((category: Category) => category.name));
        });
    }, []);

    const handleCategoryChange = (selectedOptions: { value: string; label: string }[]) => {
        setSelectedCategories(selectedOptions.map((option) => option.value));
    };

    const handleImageUpload = (base64Image: string) => {
        setPosterBase64(base64Image);
    };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const movie: Movie = {
      id: Math.random(), // Generate a random id for the movie
      title,
      description,
      posterBase64: posterBase64, // This should be set to the Base64 string of the movie poster
      posterUrl: "",
      trailerUrl: "",
      ageLimit,
      releaseDate,
      duration,
      categories: selectedCategories,
    };

    postMovie(movie);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start space-y-4 max-w-md mx-auto p-4 bg-gray-100 rounded-md">
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Movie Poster:
        <ImageConverter onImageUpload={handleImageUpload} />
      </label>
      <label>
        Age Limit:
        <input type="number" value={ageLimit} onChange={(e) => setAgeLimit(Number(e.target.value))} />
      </label>
      <label>
        Duration:
        <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </label>
      <label>
        Release Date:
        <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
      </label>
      <label className="block">
        <span className="text-gray-700">Categories:</span>
        <Select isMulti options={categoryList.map((category) => ({
           value: category, label: category }))} 
           onChange={handleCategoryChange} 
           className="mt-1 w-full" />
      </label>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default MovieForm;
