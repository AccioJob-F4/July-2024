import axios from "axios";
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_DETAILS_SUCCESS,
  BOOKMARK_MOVIE,
} from "./types";

const APIKEY = "53c674c";
const BASE_URL = `http://www.omdbapi.com/?apikey=${APIKEY}`;

export const fetchMovies = (query) => async (dispatch) => {
  dispatch({ type: FETCH_MOVIES_REQUEST });
  try {
    const response = await axios.get(`${BASE_URL}&s=${query}`);
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data.Search });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
  }
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}&i=${id}`);
    dispatch({ type: FETCH_MOVIE_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    alert(error.message);
  }
};

export const bookmarkMovie = (movie) => ({
  type: BOOKMARK_MOVIE,
  payload: movie,
});
