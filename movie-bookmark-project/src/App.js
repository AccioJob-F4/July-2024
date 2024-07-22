import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import BookmarkList from "./components/BookmarkList/BookmarkList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import MovieList from "./components/MovieList/MovieList";
import SearchBar from "./components/SearchBar/SearchBar";
import { useSelector } from "react-redux";

import "./App.css";

const App = () => {
  const isDarkMode = useSelector((state) => state.isDarkMode);

  return (
    <Router>
      <div className={`App ${isDarkMode ? "light" : "dark"}`}>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <MovieList />
              </>
            }
          />
          <Route path="/bookmarks" element={<BookmarkList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
