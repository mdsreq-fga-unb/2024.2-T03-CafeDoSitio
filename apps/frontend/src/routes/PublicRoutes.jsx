import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "../pages/(public)/ContactPage";
import NossaHistoria from "../pages/(public)/nossaHistoria";
import BlogPage from "../pages/(public)/BlogPage";
import VisitaFabricaPage from "../pages/(public)/VisitaFabricaPage";
import { ROUTES } from "./RoutesConstants";

import PublicLayout from "../components/PublicLayout";

const PublicRoutes = () => {
  return(
    <PublicLayout>
      <Routes>
          <Route path={ROUTES.BLOG} element={<BlogPage />} />
          <Route path={ROUTES.CONTATOS} element={<ContactPage />} />
          <Route path={ROUTES.HISTORIA} element={<NossaHistoria />} />
          <Route path={ROUTES.VISITA} element={<VisitaFabricaPage />} />
      </Routes>
    </PublicLayout>
  );
}

export default PublicRoutes;