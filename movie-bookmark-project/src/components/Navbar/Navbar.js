import React from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Switch from "@mui/material/Switch";

import { SWITCH_THEME } from "../../redux/actions/types";
import "./Navbar.css";

const Navbar = () => {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch({ type: SWITCH_THEME });
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home/Search</Link>
        </li>
        <li>
          <Link to="/bookmarks">Bookmarks</Link>
        </li>
        <li>
          <Switch
            checked={isDarkMode}
            onChange={handleThemeToggle}
            name={isDarkMode ? "Dark Mode" : "Light Mode"}
            color="warning"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
