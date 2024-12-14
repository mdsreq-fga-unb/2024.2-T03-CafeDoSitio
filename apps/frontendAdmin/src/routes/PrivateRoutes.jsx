import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/(private)/HomePage";
import AuthGuard from "../components/AuthGuard/AuthGuard";
import VisitaConfigPage from "../pages/(private)/VisitaCofigPage";
import PrivateLayout from "../components/PrivateLayout";
import SacPage from "../pages/(private)/SacPage";

const PrivateRoutes = () => {
  return(
    <AuthGuard>
      <PrivateLayout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/visitaConfig" element={<VisitaConfigPage />} />
          <Route path="/sac" element={<SacPage />} />          
        </Routes>
      </PrivateLayout>
    </AuthGuard>
  );
}

export default PrivateRoutes;