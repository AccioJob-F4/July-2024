import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMovieDetails,
  bookmarkMovie,
} from "../../redux/actions/movieActions";

import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.selectedMovie);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, []);

  const handleBookmark = () => {
    dispatch(bookmarkMovie(movie));
  };

  return (
    <div className="movie-details">
      {movie && (
        <>
          <h2>{movie.Title}</h2>
          <p>{movie.Plot}</p>
          <button onClick={handleBookmark}>Bookmark</button>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
