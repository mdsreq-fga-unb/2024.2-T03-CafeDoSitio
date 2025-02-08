import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ContactPage from "../pages/(public)/ContactPage";
import NossaHistoria from "../pages/(public)/nossaHistoria";
import BlogPage from "../pages/(public)/BlogPage";
import MainPage from "../pages/(public)/MainPage";
import SocialActionsPage from "../pages/(public)/SocialActionsPage";
import VisitaFabricaPage from "../pages/(public)/VisitaFabricaPage";
import { ROUTES } from "./RoutesConstants";

import PublicLayout from "../components/PublicLayout";

const PublicRoutes = () => {
  const location = useLocation();

  // Remove bordas laterais na página do Sítio Verde
  const isSitioVerdeActive = location.pathname === ROUTES.SITIO_VERDE;

  // Esconde o footer na página MainPage
  const isMainPageActive = location.pathname === ROUTES.MAIN;

  return (
    <PublicLayout 
      fullWidth={isSitioVerdeActive}  // Sem bordas no Sítio Verde
      hideFooter={isMainPageActive}   // Sem footer na MainPage
    >
      <Routes>
        <Route path={ROUTES.BLOG} element={<BlogPage />} />
        <Route path={ROUTES.CONTATOS} element={<ContactPage />} />
        <Route path={ROUTES.HISTORIA} element={<NossaHistoria />} />
        <Route path={ROUTES.SITIO_VERDE} element={<SocialActionsPage />} />
        <Route path={ROUTES.VISITA} element={<VisitaFabricaPage />} />
        <Route path={ROUTES.MAIN} element={<MainPage />} />
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;
