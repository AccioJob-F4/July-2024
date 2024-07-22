import React from "react";
import { useSelector } from "react-redux";

import "./BookmarkList.css";

const BookmarkList = () => {
  const bookmarks = useSelector((state) => state.bookmarks);

  return (
    <div className="bookmark-list">
      {bookmarks &&
        bookmarks.map((movie) => {
          return (
            <div key={movie.imdbID} className="bookmark-item">
              <img src={movie.Poster} alt="image poster" />
              <h3>{movie.Title}</h3>
            </div>
          );
        })}
    </div>
  );
};

export default BookmarkList;
