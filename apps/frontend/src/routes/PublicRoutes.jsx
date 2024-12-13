import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "../pages/(public)/ContactPage";
import NossaHistoria from "../pages/(public)/nossaHistoria";
import BlogPage from "../pages/(public)/BlogPage";

const PublicRoutes = () => {
  return(
    <Routes>
      
      <Route path="/" element={<BlogPage />} />
      <Route path="/contatos" element={<ContactPage />} />
      <Route path="/historia" element={<NossaHistoria />} />
    </Routes>
  );
}

export default PublicRoutes;