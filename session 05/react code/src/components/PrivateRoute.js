import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, userRole, allowedRoles }) => {
  return isAuthenticated && allowedRoles.includes(userRole) ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" />
  );
};

export default PrivateRoute;
