import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "../pages/(public)/ContactPage";
import NossaHistoria from "../pages/(public)/nossaHistoria";
import BlogPage from "../pages/(public)/BlogPage";
import SocialActionsPage from "../pages/(public)/SocialActionsPage";
import PublicLayout from "../components/PublicLayout";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout><BlogPage /></PublicLayout>} />
      <Route path="/contatos" element={<PublicLayout><ContactPage /></PublicLayout>} />
      <Route path="/historia" element={<PublicLayout><NossaHistoria /></PublicLayout>} />
      <Route path="/acoes-sociais" element={<PublicLayout fullWidth><SocialActionsPage /></PublicLayout>} />
    </Routes>
  );
};

export default PublicRoutes;
