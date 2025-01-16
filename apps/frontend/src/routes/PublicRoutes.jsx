import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "../pages/(public)/ContactPage";
import NossaHistoria from "../pages/(public)/nossaHistoria";
import BlogPage from "../pages/(public)/BlogPage";

import PublicLayout from "../components/PublicLayout";
import PertodeVoce from "../pages/(public)/PertodeVoce";

const PublicRoutes = () => {
  return(
    <PublicLayout>
      <Routes>
          <Route path="/" element={<BlogPage />} />
          <Route path="/contatos" element={<ContactPage />} />
          <Route path="/historia" element={<NossaHistoria />} />
          <Route path="/pertodevoce" element={<PertodeVoce />} />
      </Routes>
    </PublicLayout>
  );
}

export default PublicRoutes;