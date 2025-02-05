import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "../pages/(public)/ContactPage";
import NossaHistoria from "../pages/(public)/nossaHistoria";
import BlogPage from "../pages/(public)/BlogPage";
import SocialActionsPage from "../pages/(public)/SocialActionsPage";import VisitaFabricaPage from "../pages/(public)/VisitaFabricaPage";
import { ROUTES } from "./RoutesConstants";

import PublicLayout from "../components/PublicLayout";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.BLOG} element={<PublicLayout><BlogPage /></PublicLayout>} />
      <Route path={ROUTES.CONTATOS} element={<PublicLayout><ContactPage /></PublicLayout>} />
      <Route path={ROUTES.HISTORIA} element={<PublicLayout><NossaHistoria /></PublicLayout>} />
      <Route path="/acoes-sociais" element={<PublicLayout fullWidth><SocialActionsPage /></PublicLayout>} />
      <Route path={ROUTES.VISITA} element={<PublicLayout><VisitaFabricaPage /></PublicLayout>} />
    </Routes>
  );
};

export default PublicRoutes;
