import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "../pages/(public)/ContactPage";
import NossaHistoria from "../pages/(public)/nossaHistoria";
import BlogPage from "../pages/(public)/BlogPage";
import SocialActionsPage from "../pages/(public)/SocialActionsPage";
import PublicLayout from "../components/PublicLayout";

const PublicRoutes = () => {
  return(
    <PublicLayout>
      <Routes>
          <Route path="/" element={<BlogPage />} />
          <Route path="/contatos" element={<ContactPage />} />
          <Route path="/historia" element={<NossaHistoria />} />
          <Route path="/acoes-sociais" element={<SocialActionsPage />} />
      </Routes>
    </PublicLayout>
  );
}

export default PublicRoutes;