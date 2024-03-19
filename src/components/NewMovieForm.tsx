import React, { useState } from "react";
import { postMovie } from "../services/apiFacade";
import { Movie } from "../services/entityFacade";

function MovieForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ageLimit, setAgeLimit] = useState(0);
  const [duration, setDuration] = useState("");
  const [categories, setCategories] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const movie: Movie = {
      id: Math.random(), // Generate a random id for the movie
      title,
      description,
      posterBase64: "", // This should be set to the Base64 string of the movie poster
      posterUrl: "",
      trailerUrl: "",
      ageLimit,
      releaseDate: new Date().toISOString(),
      duration,
      categories: categories.split(",").map((category) => category.trim()), // Split the categories by comma
    };

    postMovie(movie);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
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
        Categories (comma-separated):
        <input type="text" value={categories} onChange={(e) => setCategories(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MovieForm;
