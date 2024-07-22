import React from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

import "./MovieList.css";

const MovieList = () => {
  const movies = useSelector((state) => state.movies);
  const loading = useSelector((state) => state.loading);

  return (
    <div className="movie-list">
      {loading ? (
        <CircularProgress />
      ) : (
        movies &&
        movies.map((movie) => (
          <div key={movie.imdbID} className="movie-item">
            <img src={movie.Poster} alt="image poster" />
            <h3>{movie.Title}</h3>
            <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;
