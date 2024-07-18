/* eslint-disable import/first */
import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./components/Home";
// import About from "./components/About";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));

import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import Unauthorized from "./components/Unauthorized";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoute from "./components/ProtectedRoute";

const isAuthenticated = false;
const userRole = "support";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div> LOADING... </div>} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              userRole={userRole}
              allowedRoles={["admin"]}
            />
          }
        >
          <Route path="/admin" element={<h2>Admin Panel</h2>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
