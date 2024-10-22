import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, token, allowedRoles }) => {
  if (!token || !allowedRoles.includes(token.user.entered_as)) {
    return <Navigate to="*" />;
  }
  return children;
};

export default ProtectedRoute;
