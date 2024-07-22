import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../redux/actions/movieActions";

import "./SearchBar.css";

const randomMovies = [
  "Action-packed",
  "Romance",
  "Thriller",
  "Comedy",
  "Drama",
  "Sci-fi",
  "Fantasy",
  "Horror",
  "Adventure",
  "Mystery",
  "Animation",
  "Biopic",
  "Documentary",
  "Historical",
  "Superhero",
  "Musical",
  "Crime",
  "Family",
  "Indie",
  "Western",
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchMovies(randomMovies[Math.floor(Math.random() * randomMovies.length)])
    );
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(query));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder="Search for a movie..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
