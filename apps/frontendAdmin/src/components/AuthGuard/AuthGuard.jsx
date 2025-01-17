import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../routes/RoutesConstants";

const AuthGuard = ({ children }) => {
  const isAuthenticated = Boolean(sessionStorage.getItem("authToken"));
  if (!isAuthenticated) {
    alert("Usuário não atenticado! Faça login.");
    localStorage.clear();
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
};

export default AuthGuard;
