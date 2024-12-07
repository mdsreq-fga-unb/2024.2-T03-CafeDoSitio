import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/(private)/HomePage";
import AuthGuard from "../components/AuthGuard/AuthGuard";

const PrivateRoutes = () => {
  return(
    <AuthGuard>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </AuthGuard>
  );
}

export default PrivateRoutes;