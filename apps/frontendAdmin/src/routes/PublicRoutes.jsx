import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/(public)/LoginPage";
import FirstAcessPage from "../pages/(public)/FirstAcessPage";

const PublicRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/firstAcess" element={<FirstAcessPage />} />
    </Routes>
  );
}

export default PublicRoutes;