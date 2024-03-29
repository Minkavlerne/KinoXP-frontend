import React, { useState, useEffect } from "react";
import { postMovie, updateMovie, getCategories } from "../services/apiFacade";
import { Category, Movie } from "../services/entityFacade";
import ImageConverter from "./ImageConverter";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router";

const EMPTY_MOVIE = {
  id: null,
  title: "",
  description: "",
  posterBase64: "",
  posterUrl: "",
  trailerUrl: "",
  ageLimit: 0,
  duration: "",
  releaseDate: "",
  categories: [""],
};

function MovieForm() {
  const navigate = useNavigate();
  const movieToEdit = useLocation().state || null;
  console.log(movieToEdit);

  const [formData, setFormData] = useState<Movie>(movieToEdit || EMPTY_MOVIE);
  const [categoryList, setCategoryList] = useState([""]);
  const [selectedCategories, setSelectedCategories] = useState(movieToEdit ? movieToEdit.categories : []);

  useEffect(() => {
    getCategories().then((data) => {
      setCategoryList(data.map((category: Category) => category.name));
    });
  }, []);

  const handleCategoryChange = (selectedOptions: { value: string; label: string }[]) => {
    setSelectedCategories(selectedOptions.map((option) => option.value));
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const handleImageUpload = (base64: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      posterBase64: base64,
    }));
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const movie: Movie = {
      ...formData,
      categories: selectedCategories,
    };

    if (movieToEdit) {
      console.log(movie);
      await updateMovie(movie);
      console.log("Editing movie");
    } else {
      await postMovie(movie);
      console.log("Movie added");
    }
    navigate("/movies");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start space-y-4 max-w-md mx-auto p-4 bg-gray-100 rounded-md">
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>

      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          //@ts-ignore
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Movie Poster:
        <ImageConverter onImageUpload={handleImageUpload} />
      </label>
      <label>
        Movie Poster URL:
        <input type="text" name="moviePoster" value={formData.posterUrl} onChange={handleChange}></input>
      </label>
      <label>
        Age Limit:
        <input type="number" name="ageLimit" value={formData.ageLimit} onChange={handleChange} />
      </label>
      <label>
        Duration:
        <input type="text" name="duration" value={formData.duration} onChange={handleChange} />
      </label>
      <label>
        Release Date:
        <input type="date" name="releaseDate" value={formData.releaseDate} onChange={handleChange} />
      </label>
      <label className="block">
        <span className="text-gray-700">Categories:</span>
        <Select
          isMulti
          options={categoryList.map((category) => ({
            value: category,
            label: category,
          }))}
          defaultValue={movieToEdit ? movieToEdit.categories.map((category: string) => ({ value: category, label: category })) : []}
          //@ts-ignore
          onChange={handleCategoryChange}
          className="mt-1 w-full"
        />
      </label>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default MovieForm;
